const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.onclick = () => { mobileNav.classList.add('active'); }
closeIcon.onclick = () => { mobileNav.classList.remove('active'); }

// Data events terakhir (4 events terbaru)
let eventsData = [
    { 
        tag: "Workshop", 
        title: "Cyber Defense Strategy 2024", 
        img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200",
        date: "15 AUG",
        time: "09:00 AM",
        location: "Jakarta Hall",
        link: "event.html"
    },
    { 
        tag: "Webinar", 
        title: "AI & Neural Networks Intro", 
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
        date: "22 SEP",
        time: "14:00 PM",
        location: "Zoom Live",
        link: "event.html"
    },
    { 
        tag: "Exhibition", 
        title: "Technova Grand Expo", 
        img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
        date: "05 OCT",
        time: "10:00 AM",
        location: "Convention Ctr",
        link: "event.html"
    },
    { 
        tag: "Bootcamp", 
        title: "Fullstack Dev Intensive", 
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
        date: "12 NOV",
        time: "3 Days",
        location: "Bandung Hub",
        link: "event.html"
    }
];

const mainWrapper = document.getElementById('main-wrapper');
const thumbWrapper = document.getElementById('thumb-wrapper');

let mainSwiper, thumbSwiper;

// Fungsi untuk render cards
function renderCards() {
    mainWrapper.innerHTML = '';
    thumbWrapper.innerHTML = '';

    // Main slider hanya menampilkan card terakhir (yang di belakang)
    const lastEvent = eventsData[eventsData.length - 1];
    mainWrapper.innerHTML += `
        <div class="swiper-slide" style="background-image: url('${lastEvent.img}')">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <span class="tag">${lastEvent.tag}</span>
                <h1 class="title">${lastEvent.title}</h1>
                <p class="desc">Join us for an exciting event. ${lastEvent.time} at ${lastEvent.location}</p>
                <div class="cta-group">
                    <a href="${lastEvent.link}" class="btn-login">Register Now</a>
                </div>
            </div>
        </div>`;

    // Thumbnail cards menampilkan semua cards dari depan ke belakang
    eventsData.forEach((event, index) => {
        thumbWrapper.innerHTML += `
            <div class="swiper-slide thumb-card" data-index="${index}">
                <img src="${event.img}" class="thumb-img">
                <div class="thumb-info">
                    <h4>${event.title}</h4>
                    <small>${event.date}</small>
                </div>
            </div>`;
    });

    // Initialize atau update Swiper
    if (!mainSwiper) {
        // Initialize untuk pertama kali
        thumbSwiper = new Swiper(".thumb-slider", {
            loop: false,
            watchSlidesProgress: false,
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            mousewheel: {
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
            },
            breakpoints: { 
                320: { 
                    slidesPerView: 'auto',
                    spaceBetween: 15 
                }, 
                768: { 
                    slidesPerView: 'auto',
                    spaceBetween: 20 
                } 
            }
        });

        mainSwiper = new Swiper(".main-slider", { 
            loop: false,
            effect: "fade", 
            speed: 800,
            allowTouchMove: false
        });
    } else {
        // Update swiper dengan data baru
        mainSwiper.update();
        thumbSwiper.update();
        // Trigger fade animation untuk main slider
        mainSwiper.slideTo(0, 800);
    }

    // Tambahkan event listener pada setiap thumbnail card
    document.querySelectorAll('.thumb-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            handleCardClick(index);
        });
    });
}

// Fungsi untuk handle klik card
function handleCardClick(clickedIndex) {
    // Pindahkan card yang diklik ke belakang
    const clickedEvent = eventsData[clickedIndex];
    eventsData.splice(clickedIndex, 1); // Hapus dari posisi sekarang
    eventsData.push(clickedEvent); // Tambahkan ke belakang
    
    // Re-render cards (akan otomatis update main slider dengan card terakhir)
    renderCards();
}

// Inisialisasi pertama kali
renderCards();
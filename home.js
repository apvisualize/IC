const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.onclick = () => { mobileNav.classList.add('active'); }
closeIcon.onclick = () => { mobileNav.classList.remove('active'); }

const itData = [
    { tag: "Cyber Security", title: "Cloud Defense", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" },
    { tag: "Intelligence", title: "Neural Engine", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200" },
    { tag: "Infrastructure", title: "Quantum Computing", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200" },
    { tag: "Connectivity", title: "Edge Networks", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" },
    { tag: "Big Data", title: "Predictive Ops", img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=1200" }
];

const mainWrapper = document.getElementById('main-wrapper');
const thumbWrapper = document.getElementById('thumb-wrapper');

itData.forEach(data => {
    mainWrapper.innerHTML += `
        <div class="swiper-slide" style="background-image: url('${data.img}')">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <span class="tag">${data.tag}</span>
                <h1 class="title">${data.title}</h1>
                <p class="desc">Membangun ekosistem teknologi masa depan yang skalabel dan aman.</p>
                <div class="cta-group">
                    <a href="about.html" class="btn-login">Pelajari Detail</a>
                    <i class='bx bx-bookmark' style="font-size: 1.8rem; cursor: pointer;"></i>
                </div>
            </div>
        </div>`;
    thumbWrapper.innerHTML += `
        <div class="swiper-slide">
            <img src="${data.img}" class="thumb-img">
            <div class="thumb-info"><h4>${data.title}</h4></div>
        </div>`;
});

const swiperThumbs = new Swiper(".thumb-slider", {
    loop: true, 
    watchSlidesProgress: true, 
    navigation: { nextEl: ".next-btn", prevEl: ".prev-btn" },
    breakpoints: { 
        320: { slidesPerView: 1.5, spaceBetween: 15 }, 
        768: { slidesPerView: 2, spaceBetween: 20 } 
    }
});

new Swiper(".main-slider", { 
    loop: true, 
    effect: "fade", 
    speed: 1000, 
    thumbs: { swiper: swiperThumbs } 
});
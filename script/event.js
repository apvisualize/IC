const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

// Fungsi untuk membuka menu
menuIcon.onclick = () => {
    mobileNav.classList.add('active');
};

// Fungsi untuk menutup menu
closeIcon.onclick = () => {
    mobileNav.classList.remove('active');
};
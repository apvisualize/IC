const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

// Buka menu mobile
menuIcon.onclick = () => {
    mobileNav.classList.add('active');
};

// Tutup menu mobile
closeIcon.onclick = () => {
    mobileNav.classList.remove('active');
};
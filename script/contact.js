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

// Penanganan Formulir Kontak
document.getElementById('contactForm').onsubmit = (e) => {
    e.preventDefault();
    
    // Simulasi pengiriman data
    alert('Terima kasih! Pesan Anda telah terkirim. Tim Technova akan menghubungi Anda segera.');
    
    // Reset formulir setelah sukses
    e.target.reset();
};
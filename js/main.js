document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = menuButton.querySelector('svg');

    // --- Mobile Menu Toggle ---
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        
        // Toggle hamburger icon to 'X'
        if (mobileMenu.classList.contains('hidden')) {
            hamburgerIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />`;
        } else {
            hamburgerIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`;
        }
    };
    menuButton.addEventListener('click', toggleMenu);

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('#mobile-menu .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('flex')) {
                toggleMenu();
            }
        });
    });
});
// Sticky Navbar Drop Shadow & Shrink Effect on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)'; // Apple glass effect
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });
});
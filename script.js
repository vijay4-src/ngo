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
// ==========================================
// Mobile Hamburger Menu Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenuWrapper = document.getElementById('nav-menu-wrapper');

    if (mobileBtn && navMenuWrapper) {
        mobileBtn.addEventListener('click', () => {
            // Menu ko dikhana ya chupana
            navMenuWrapper.classList.toggle('active');
            
            // Icon ko Menu (Bars) se Close (X) mein badalna
            if (navMenuWrapper.classList.contains('active')) {
                mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
});

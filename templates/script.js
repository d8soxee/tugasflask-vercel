document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle('active');
    });
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isNavbar = event.target.closest('.navbar');
        if (!isNavbar && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.classList.remove('active');
        }
    });

    // Search input animation
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchInput.addEventListener('focus', () => {
        searchIcon.style.color = 'var(--orange-primary)';
    });

    document.getElementById("moreBtn").addEventListener("click", function() {
        window.location.href = "swordsmiths.html"; // Ubah "newpage.html" sesuai halaman tujuan
    });
    
    searchInput.addEventListener('blur', () => {
        searchIcon.style.color = '#666';
    });

    // Apply button hover effect
    const applyBtn = document.querySelector('.apply-btn');
    
    applyBtn.addEventListener('mouseenter', () => {
        applyBtn.style.transform = 'translateY(-2px)';
    });
    
    applyBtn.addEventListener('mouseleave', () => {
        applyBtn.style.transform = 'translateY(0)';
    });

    // Responsive image handling
    function adjustImageContainer() {
        const imageContainer = document.querySelector('.character-image-container');
        const contentContainer = document.querySelector('.content-container');
        
        if (window.innerWidth >= 768) {
            imageContainer.style.height = `${contentContainer.offsetHeight}px`;
        } else {
            imageContainer.style.height = '300px';
        }
    }

    // Call on load and resize
    adjustImageContainer();
    window.addEventListener('resize', adjustImageContainer);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
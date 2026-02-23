document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-active');
            navLinks.classList.toggle('mobile-active');
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && !sidebar.classList.contains('mobile-active')) {
            if (window.scrollY > 50) {
                sidebar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                sidebar.style.boxShadow = 'none';
            }
        }
    });
});

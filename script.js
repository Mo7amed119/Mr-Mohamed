document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('nav a, .hero-btns a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
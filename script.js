// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Force dark mode for luxury aesthetic
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-background-dark/95', 'shadow-lg', 'border-white/10');
            navbar.classList.remove('bg-background-dark/80', 'border-transparent');
        } else {
            navbar.classList.remove('bg-background-dark/95', 'shadow-lg');
            navbar.classList.add('bg-background-dark/80');
        }
    });

    // Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect on floating suit
    const floatingSuit = document.querySelector('.floating-suit');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) {
            const scroll = window.scrollY;
            if (floatingSuit) {
                floatingSuit.style.transform = `translateY(${scroll * 0.15}px) rotateY(${scroll * 0.02}deg)`;
            }
        }
    });
});

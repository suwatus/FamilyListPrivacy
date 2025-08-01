// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const contentTr = document.querySelector('.content-tr');
    const contentEn = document.querySelector('.content-en');
    const titleTr = document.querySelector('.title-tr');
    const titleEn = document.querySelector('.title-en');
    const lastUpdatedTr = document.querySelector('.last-updated .tr');
    const lastUpdatedEn = document.querySelector('.last-updated .en');

    // Function to switch language
    function switchLanguage(lang) {
        // Update button states
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Update content visibility
        if (lang === 'tr') {
            contentTr.style.display = 'block';
            contentEn.style.display = 'none';
            titleTr.style.display = 'block';
            titleEn.style.display = 'none';
            lastUpdatedTr.style.display = 'inline';
            lastUpdatedEn.style.display = 'none';
            
            // Update HTML lang attribute
            document.documentElement.lang = 'tr';
        } else {
            contentTr.style.display = 'none';
            contentEn.style.display = 'block';
            titleTr.style.display = 'none';
            titleEn.style.display = 'block';
            lastUpdatedTr.style.display = 'none';
            lastUpdatedEn.style.display = 'inline';
            
            // Update HTML lang attribute
            document.documentElement.lang = 'en';
        }

        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    // Add click event listeners to language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Check for saved language preference or default to Turkish
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    switchLanguage(savedLanguage);

    // Add smooth transition effects
    const sections = document.querySelectorAll('.section');
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add keyboard navigation for language switcher
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            switchLanguage('tr');
        } else if (e.altKey && e.key === 'e') {
            e.preventDefault();
            switchLanguage('en');
        }
    });
}); 
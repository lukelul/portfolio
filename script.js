// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelectorAll('.nav-link.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const panel = document.getElementById('tab-' + tabName);
    if (panel) panel.classList.add('active');

    document.querySelectorAll('.tab-btn[data-tab="' + tabName + '"]').forEach(btn => {
        if (btn.classList.contains('nav-link')) btn.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-trigger skill bar animations when switching to experience tab
    if (tabName === 'experience') {
        setTimeout(() => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const width = bar.getAttribute('data-width') || bar.style.width;
                bar.setAttribute('data-width', width);
                bar.style.width = '0%';
                setTimeout(() => { bar.style.width = width; }, 50);
            });
        }, 100);
    }
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchTab(this.getAttribute('data-tab'));
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for in-page anchor links (contact section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled > 200 && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${(scrolled - 200) * 0.3}px)`;
    } else if (hero && scrolled <= 200) {
        hero.style.transform = 'translateY(0)';
    }
});

// Fade in animation for project cards
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => cardObserver.observe(card));
}
initProjectCards();

// Magnifying glass effect for project images
function initMagnifyingGlass() {
    document.querySelectorAll('.project-card').forEach(card => {
        const projectImage = card.querySelector('.project-image');
        const projectImg = card.querySelector('.project-img');

        if (!projectImage || !projectImg) return;

        projectImage.addEventListener('mouseenter', () => {
            projectImg.style.transition = 'transform 0.1s ease-out';
            projectImg.style.objectFit = 'contain';
        });

        projectImage.addEventListener('mousemove', (e) => {
            const rect = projectImage.getBoundingClientRect();
            const xPercent = (e.clientX - rect.left) / rect.width;
            const yPercent = (e.clientY - rect.top) / rect.height;
            const zoomScale = 1.3;
            const imgAspect = projectImg.naturalWidth / projectImg.naturalHeight;
            const containerAspect = rect.width / rect.height;
            let displayedWidth, displayedHeight;
            if (imgAspect > containerAspect) {
                displayedHeight = rect.height;
                displayedWidth = displayedHeight * imgAspect;
            } else {
                displayedWidth = rect.width;
                displayedHeight = displayedWidth / imgAspect;
            }
            const maxTranslateX = Math.max(0, (displayedWidth * zoomScale - rect.width) / (2 * zoomScale));
            const maxTranslateY = Math.max(0, (displayedHeight * zoomScale - rect.height) / (2 * zoomScale));
            const translateX = (xPercent - 0.5) * 2 * maxTranslateX * 0.3;
            const translateY = (yPercent - 0.5) * 2 * maxTranslateY * 0.3;
            projectImg.style.transform = `scale(${zoomScale}) translate(${-translateX}px, ${-translateY}px)`;
            projectImg.style.transformOrigin = 'center center';
        });

        projectImage.addEventListener('mouseleave', () => {
            projectImg.style.transition = 'transform 0.3s ease-out';
            projectImg.style.transform = 'scale(1)';
            projectImg.style.objectFit = 'cover';
        });
    });
}
initMagnifyingGlass();

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
        contactForm.reset();
    });
}

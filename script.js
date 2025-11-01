// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop - 200) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
            observer.unobserve(progressBar);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    observer.observe(bar);
});

// Fade in animation for project cards
const projectCards = document.querySelectorAll('.project-card');
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

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero section (subtle) - delayed start
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    // Only start parallax after scrolling 200px to allow about section to be fully visible first
    if (hero && scrolled > 200 && scrolled < window.innerHeight) {
        const parallaxAmount = (scrolled - 200) * 0.3; // Reduced and delayed
        hero.style.transform = `translateY(${parallaxAmount}px)`;
    } else if (hero && scrolled <= 200) {
        hero.style.transform = 'translateY(0)';
    }
});

// Add active state to nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Magnifying glass effect for project images
function initMagnifyingGlass() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const projectImage = card.querySelector('.project-image');
        const projectImg = card.querySelector('.project-img');
        
        if (projectImage && projectImg) {
            // Make sure image is loaded
            projectImg.addEventListener('load', () => {
                console.log('Image loaded, magnifying glass ready');
            });
            
            projectImage.addEventListener('mouseenter', () => {
                // Switch to contain when hovering starts and set transition
                projectImg.style.transition = 'transform 0.1s ease-out';
                projectImg.style.objectFit = 'contain';
            });
            
            projectImage.addEventListener('mousemove', (e) => {
                const rect = projectImage.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate percentage position (0-1)
                const xPercent = x / rect.width;
                const yPercent = y / rect.height;
                
                // Zoom scale (adjust this value to change zoom level) - much more subtle
                const zoomScale = 1.3;
                
                // When hovering, object-fit is contain, so calculate displayed size
                const imgAspect = projectImg.naturalWidth / projectImg.naturalHeight;
                const containerAspect = rect.width / rect.height;
                
                let displayedWidth, displayedHeight;
                if (imgAspect > containerAspect) {
                    // Image is wider - height determines size
                    displayedHeight = rect.height;
                    displayedWidth = displayedHeight * imgAspect;
                } else {
                    // Image is taller - width determines size
                    displayedWidth = rect.width;
                    displayedHeight = displayedWidth / imgAspect;
                }
                
                // Calculate max translation based on displayed size with contain
                const maxTranslateX = Math.max(0, (displayedWidth * zoomScale - rect.width) / (2 * zoomScale));
                const maxTranslateY = Math.max(0, (displayedHeight * zoomScale - rect.height) / (2 * zoomScale));
                
                // Calculate translation: 0% = -max, 50% = 0, 100% = +max
                // Reduce translation amount by 0.3 for very subtle movement
                const translateX = (xPercent - 0.5) * 2 * maxTranslateX * 0.3;
                const translateY = (yPercent - 0.5) * 2 * maxTranslateY * 0.3;
                
                // Apply zoom and translation based on cursor
                projectImg.style.transform = `scale(${zoomScale}) translate(${-translateX}px, ${-translateY}px)`;
                projectImg.style.transformOrigin = 'center center';
            });
            
            projectImage.addEventListener('mouseleave', () => {
                // Reset zoom and object-fit when mouse leaves
                projectImg.style.transition = 'transform 0.3s ease-out, object-fit 0.3s ease';
                projectImg.style.transform = 'scale(1)';
                projectImg.style.transformOrigin = 'center center';
                projectImg.style.objectFit = 'cover'; // Back to cover when not hovering
            });
        } else {
            console.log('Elements not found:', { projectImage, projectImg });
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMagnifyingGlass);
} else {
    initMagnifyingGlass();
}

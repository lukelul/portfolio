function switchTab(tabName) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link.tab-btn').forEach(b => b.classList.remove('active'));

    const panel = document.getElementById('tab-' + tabName);
    if (panel) panel.classList.add('active');

    document.querySelectorAll('.nav-link.tab-btn[data-tab="' + tabName + '"]').forEach(b => b.classList.add('active'));

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabName === 'experience') {
        setTimeout(() => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const w = bar.getAttribute('data-width') || bar.style.width;
                bar.setAttribute('data-width', w);
                bar.style.width = '0%';
                setTimeout(() => { bar.style.width = w; }, 50);
            });
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    // Tab buttons (nav + "View My Work")
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Smooth scroll for in-page anchor links only (skip tab buttons)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.classList.contains('tab-btn')) return;
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // Mobile nav toggle
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

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 6px -1px rgba(0,0,0,0.1)'
            : '0 1px 2px 0 rgba(0,0,0,0.05)';
    });

    // Parallax on hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (!hero) return;
        if (scrolled > 200 && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${(scrolled - 200) * 0.3}px)`;
        } else if (scrolled <= 200) {
            hero.style.transform = 'translateY(0)';
        }
    });

    // Project card fade-in
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Magnifying glass on project images
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
            const xPct = (e.clientX - rect.left) / rect.width;
            const yPct = (e.clientY - rect.top) / rect.height;
            const z = 1.3;
            const ia = projectImg.naturalWidth / projectImg.naturalHeight;
            const ca = rect.width / rect.height;
            const dw = ia > ca ? rect.height * ia : rect.width;
            const dh = ia > ca ? rect.height : rect.width / ia;
            const mx = Math.max(0, (dw * z - rect.width) / (2 * z));
            const my = Math.max(0, (dh * z - rect.height) / (2 * z));
            const tx = (xPct - 0.5) * 2 * mx * 0.3;
            const ty = (yPct - 0.5) * 2 * my * 0.3;
            projectImg.style.transform = `scale(${z}) translate(${-tx}px, ${-ty}px)`;
        });
        projectImage.addEventListener('mouseleave', () => {
            projectImg.style.transition = 'transform 0.3s ease-out';
            projectImg.style.transform = 'scale(1)';
            projectImg.style.objectFit = 'cover';
        });
    });

    // YouTube facade: click to load iframe
    document.querySelectorAll('.youtube-facade').forEach(facade => {
        facade.addEventListener('click', function () {
            const id = this.getAttribute('data-videoid');
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });

    // Speaking toast
    const toast = document.getElementById('speaking-toast');
    if (toast) {
        setTimeout(() => toast.classList.add('show'), 1200);
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
        });
    }

    // Font cycler
    const fonts = [
        { label: 'PIXEL', value: "'Press Start 2P', 'Minecraft', 'Courier New', monospace", size: '0.7rem',  spacing: '-1px' },
        { label: 'SANS',  value: "'Inter', 'Helvetica Neue', Arial, sans-serif",             size: '1rem',   spacing: '0px'  },
        { label: 'SERIF', value: "'Playfair Display', Georgia, serif",                       size: '1rem',   spacing: '0px'  },
        { label: 'MONO',  value: "'Space Mono', 'Courier New', monospace",                   size: '0.875rem', spacing: '0px' },
        { label: 'HAND',  value: "'Caveat', cursive",                                        size: '1.2rem', spacing: '0px'  },
    ];
    let fontIndex = 0;
    const fontToggle = document.getElementById('font-toggle');
    const fontLabel = document.getElementById('font-label');
    if (fontToggle) {
        fontToggle.addEventListener('click', () => {
            fontIndex = (fontIndex + 1) % fonts.length;
            const { label, value, size, spacing } = fonts[fontIndex];
            const root = document.documentElement;
            root.style.setProperty('--site-font', value);
            root.style.setProperty('--body-font-size', size);
            root.style.setProperty('--base-letter-spacing', spacing);
            fontLabel.textContent = label;
        });
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = new FormData(contactForm).get('name');
            const email = new FormData(contactForm).get('email');
            alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
            contactForm.reset();
        });
    }
});

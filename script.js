// ============================================================
//  TAB SYSTEM
// ============================================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link.tab-btn').forEach(b => b.classList.remove('active'));

    const panel = document.getElementById('tab-' + tabName);
    if (panel) panel.classList.add('active');

    document.querySelectorAll('.nav-link.tab-btn[data-tab="' + tabName + '"]').forEach(b => b.classList.add('active'));

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-trigger reveals for newly visible tab content
    setTimeout(triggerVisibleReveals, 120);

    // Animate skill bars when landing on experience tab
    if (tabName === 'experience' || tabName === 'cad') {
        setTimeout(() => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const w = bar.getAttribute('data-width') || bar.style.width;
                bar.setAttribute('data-width', w);
                bar.style.width = '0%';
                setTimeout(() => { bar.style.width = w; }, 50);
            });
        }, 120);
    }

    // Show/hide scroll sidebar (only on home tab)
    updateScrollSidebar();
}

// ============================================================
//  SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

function setupReveal(selector, direction, staggerMs) {
    direction = direction || 'up';
    staggerMs = staggerMs || 0;
    document.querySelectorAll(selector).forEach((el, i) => {
        // Don't double-apply
        if (el.classList.contains('sr')) return;
        el.classList.add('sr', 'sr-' + direction);
        if (staggerMs > 0) el.style.transitionDelay = (i * staggerMs) + 'ms';
        revealObserver.observe(el);
    });
}

function triggerVisibleReveals() {
    document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
            el.classList.add('sr-visible');
        }
    });
}

// ============================================================
//  COUNTER ANIMATION
// ============================================================
function animateCounter(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/([\d.]+)/);
    if (!match) return;
    const num = parseFloat(match[1]);
    const before = raw.slice(0, match.index);
    const after = raw.slice(match.index + match[1].length);
    const duration = 1400;
    const t0 = performance.now();

    function tick(now) {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = before + Math.round(eased * num) + after;
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

// ============================================================
//  SCROLL SIDEBAR
// ============================================================
const homeSections = ['about', 'education', 'awards', 'languages', 'contact'];
let sidebarEl, sidebarFillEl;

function updateScrollSidebar() {
    sidebarEl = sidebarEl || document.getElementById('scroll-sidebar');
    sidebarFillEl = sidebarFillEl || document.getElementById('sidebar-fill');
    if (!sidebarEl) return;

    const homeTab = document.getElementById('tab-home');
    const homeActive = homeTab && homeTab.classList.contains('active');

    if (!homeActive) {
        sidebarEl.style.opacity = '0';
        sidebarEl.style.pointerEvents = 'none';
        return;
    }

    const scrollY = window.scrollY;
    const heroH = (document.querySelector('.hero') || {}).offsetHeight || 600;

    if (scrollY > heroH * 0.45) {
        sidebarEl.style.opacity = '1';
        sidebarEl.style.pointerEvents = 'auto';
    } else {
        sidebarEl.style.opacity = '0';
        sidebarEl.style.pointerEvents = 'none';
    }

    // Highlight active section dot
    let activeIdx = -1;
    homeSections.forEach((id, i) => {
        const sec = document.getElementById(id);
        if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.52) {
            activeIdx = i;
        }
    });

    document.querySelectorAll('.sdot').forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIdx);
    });

    // Fill the track
    if (sidebarFillEl) {
        const totalH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = totalH > 0 ? Math.min((scrollY / totalH) * 100, 100) : 0;
        sidebarFillEl.style.height = pct + '%';
    }
}

// ============================================================
//  EXPERIENCE TIMELINE FILL
// ============================================================
let expFillEl, expTimelineEl;

function updateExpTimelineFill() {
    if (!expTimelineEl || !expFillEl) return;
    const rect = expTimelineEl.getBoundingClientRect();
    const visible = Math.max(0, window.innerHeight * 0.78 - rect.top);
    const pct = Math.min(100, (visible / expTimelineEl.offsetHeight) * 100);
    expFillEl.style.height = pct + '%';
}

// ============================================================
//  LIGHTBOX
// ============================================================
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lb-img');
    if (!lb || !img) return;
    img.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================================
//  HERO PARTICLES
// ============================================================
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'hero-particle';
        const size = Math.random() * 20 + 7;
        p.style.cssText =
            'width:' + size + 'px;height:' + size + 'px;' +
            'left:' + (Math.random() * 100) + '%;' +
            'top:' + (Math.random() * 100) + '%;' +
            'animation-delay:' + (Math.random() * 8) + 's;' +
            'animation-duration:' + (7 + Math.random() * 6) + 's;';
        hero.appendChild(p);
    }
}

// ============================================================
//  DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

    // ── Tab buttons ─────────────────────────────────────────
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // ── Smooth anchor scrolling ──────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.classList.contains('tab-btn')) return;
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // ── Mobile nav ───────────────────────────────────────────
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

    // ── Navbar shadow on scroll ──────────────────────────────
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 6px -1px rgba(0,0,0,0.1)'
            : '0 1px 2px 0 rgba(0,0,0,0.05)';
    }, { passive: true });

    // ── Hero parallax ────────────────────────────────────────
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (!hero) return;
        if (scrolled > 200 && scrolled < window.innerHeight) {
            hero.style.transform = 'translateY(' + ((scrolled - 200) * 0.3) + 'px)';
        } else if (scrolled <= 200) {
            hero.style.transform = 'translateY(0)';
        }
    }, { passive: true });

    // ── YouTube facade ───────────────────────────────────────
    document.querySelectorAll('.youtube-facade').forEach(facade => {
        facade.addEventListener('click', function () {
            const id = this.getAttribute('data-videoid');
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });

    // ── Speaking toast ───────────────────────────────────────
    const toast = document.getElementById('speaking-toast');
    if (toast) {
        setTimeout(() => toast.classList.add('show'), 1200);
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
        });
    }

    // ── Font cycler ──────────────────────────────────────────
    const fonts = [
        { label: 'PIXEL', value: "'Press Start 2P', 'Minecraft', 'Courier New', monospace", rootSize: '16px', spacing: '-1px' },
        { label: 'SANS',  value: "'Inter', 'Helvetica Neue', Arial, sans-serif",             rootSize: '22px', spacing: '0px'  },
        { label: 'SERIF', value: "'Playfair Display', Georgia, serif",                       rootSize: '22px', spacing: '0px'  },
        { label: 'MONO',  value: "'Space Mono', 'Courier New', monospace",                   rootSize: '20px', spacing: '0px'  },
        { label: 'HAND',  value: "'Caveat', cursive",                                        rootSize: '24px', spacing: '0px'  },
    ];
    let fontIndex = 0;
    const fontToggle = document.getElementById('font-toggle');
    const fontLabel = document.getElementById('font-label');
    if (fontToggle) {
        fontToggle.addEventListener('click', () => {
            fontIndex = (fontIndex + 1) % fonts.length;
            const { label, value, rootSize, spacing } = fonts[fontIndex];
            const root = document.documentElement;
            root.style.setProperty('--site-font', value);
            root.style.setProperty('--root-font-size', rootSize);
            root.style.setProperty('--base-letter-spacing', spacing);
            fontLabel.textContent = label;
        });
    }

    // ── Contact form ─────────────────────────────────────────
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = new FormData(contactForm).get('name');
            const email = new FormData(contactForm).get('email');
            alert('Thank you for your message, ' + name + '! I\'ll get back to you at ' + email + ' soon.');
            contactForm.reset();
        });
    }

    // ── Project image magnifier ──────────────────────────────
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
            projectImg.style.transform = 'scale(' + z + ') translate(' + (-tx) + 'px, ' + (-ty) + 'px)';
        });
        projectImage.addEventListener('mouseleave', () => {
            projectImg.style.transition = 'transform 0.3s ease-out';
            projectImg.style.transform = 'scale(1)';
            projectImg.style.objectFit = 'cover';
        });
    });

    // ── SETUP SCROLL REVEALS ─────────────────────────────────
    setupReveal('.section-title',     'up');
    setupReveal('.about-text p',      'up',    80);
    setupReveal('.about-info',        'up');
    setupReveal('.stat-item',         'up',   100);
    setupReveal('.education-item',    'left',  120);
    setupReveal('.award-card',        'up',    70);
    setupReveal('.language-item',     'right', 150);
    setupReveal('.experience-item',   'left',  80);
    setupReveal('.project-card',      'up',   100);
    setupReveal('.skill-category',    'up',   120);
    setupReveal('.cad-photo-wrap',    'up',    60);
    setupReveal('.cad-hero-content',  'up');

    // ── Counter animation ────────────────────────────────────
    document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

    // ── Scroll sidebar setup ─────────────────────────────────
    sidebarEl = document.getElementById('scroll-sidebar');
    sidebarFillEl = document.getElementById('sidebar-fill');

    document.querySelectorAll('.sdot').forEach((dot, i) => {
        dot.addEventListener('click', () => {
            const id = homeSections[i];
            const sec = document.getElementById(id);
            if (sec) window.scrollTo({ top: sec.offsetTop - 90, behavior: 'smooth' });
        });
    });

    // ── Experience timeline animated line ────────────────────
    const expTl = document.querySelector('#tab-experience .experience-timeline');
    if (expTl) {
        const track = document.createElement('div');
        track.className = 'exp-line-track';
        const fill = document.createElement('div');
        fill.className = 'exp-line-fill';
        track.appendChild(fill);
        expTl.prepend(track);
        expFillEl = fill;
        expTimelineEl = expTl;
    }

    // ── Lightbox ─────────────────────────────────────────────
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.addEventListener('click', (e) => {
            if (e.target === lb || e.target.classList.contains('lb-close')) closeLightbox();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    document.querySelectorAll('.cad-photo-wrap').forEach(wrap => {
        wrap.addEventListener('click', () => openLightbox(wrap.querySelector('img').src));
    });

    // ── Hero particles ───────────────────────────────────────
    createParticles();

    // ── Unified scroll handler ───────────────────────────────
    window.addEventListener('scroll', () => {
        updateScrollSidebar();
        updateExpTimelineFill();
    }, { passive: true });

    // ── Initial paint ────────────────────────────────────────
    updateScrollSidebar();
    updateExpTimelineFill();
    triggerVisibleReveals();
});

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
    setTimeout(triggerVisibleReveals, 120);

    if (tabName === 'experience') {
        setTimeout(function () {
            document.querySelectorAll('.skill-progress').forEach(function (bar) {
                var w = bar.getAttribute('data-width') || bar.style.width;
                bar.setAttribute('data-width', w);
                bar.style.width = '0%';
                setTimeout(function () { bar.style.width = w; }, 50);
            });
        }, 120);
    }

    // Update sidebar for the new tab
    setTimeout(updateScrollSidebar, 50);
}

// ============================================================
//  SCROLL REVEAL
// ============================================================
var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

function setupReveal(selector, direction, staggerMs) {
    direction = direction || 'up';
    staggerMs = staggerMs || 0;
    document.querySelectorAll(selector).forEach(function (el, i) {
        if (el.classList.contains('sr')) return;
        el.classList.add('sr', 'sr-' + direction);
        if (staggerMs > 0) el.style.transitionDelay = (i * staggerMs) + 'ms';
        revealObserver.observe(el);
    });
}

function triggerVisibleReveals() {
    document.querySelectorAll('.sr:not(.sr-visible)').forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
            el.classList.add('sr-visible');
        }
    });
}

// ============================================================
//  COUNTER ANIMATION
// ============================================================
function animateCounter(el) {
    var raw = el.textContent.trim();
    var match = raw.match(/([\d.]+)/);
    if (!match) return;
    var num = parseFloat(match[1]);
    var before = raw.slice(0, match.index);
    var after = raw.slice(match.index + match[1].length);
    var duration = 1400;
    var t0 = performance.now();
    function tick(now) {
        var p = Math.min((now - t0) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = before + Math.round(eased * num) + after;
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

// ============================================================
//  SCROLL SIDEBAR — works on both Home and Experience tabs
// ============================================================
var tabConfig = {
    'home': {
        sections: ['about', 'education', 'awards', 'languages', 'contact'],
        labels:   ['About', 'Education', 'Awards', 'Languages', 'Contact'],
        heroThreshold: true   // fade in after hero
    },
    'experience': {
        sections: ['experience', 'projects', 'skills'],
        labels:   ['Experience', 'Projects', 'Skills'],
        heroThreshold: false
    }
};

var sidebarEl = null;
var sidebarFillEl = null;

function getActiveTab() {
    if (document.getElementById('tab-home').classList.contains('active'))       return 'home';
    if (document.getElementById('tab-experience').classList.contains('active')) return 'experience';
    return null;
}

function updateScrollSidebar() {
    if (!sidebarEl) sidebarEl = document.getElementById('scroll-sidebar');
    if (!sidebarFillEl) sidebarFillEl = document.getElementById('sidebar-fill');
    if (!sidebarEl) return;

    var activeTab = getActiveTab();
    var config = activeTab ? tabConfig[activeTab] : null;

    if (!config) {
        sidebarEl.style.opacity = '0';
        sidebarEl.style.pointerEvents = 'none';
        return;
    }

    var dots = Array.from(document.querySelectorAll('.sdot'));
    var scrollY = window.scrollY;

    // Update dot labels and visibility based on active tab
    dots.forEach(function (dot, i) {
        var label = dot.querySelector('.sdot-label');
        if (i < config.labels.length) {
            if (label) label.textContent = config.labels[i];
            dot.style.display = '';
        } else {
            dot.style.display = 'none';
            dot.classList.remove('active');
        }
    });

    // Determine show threshold
    var threshold = 100;
    if (config.heroThreshold) {
        var hero = document.querySelector('.hero');
        threshold = hero ? hero.offsetHeight * 0.45 : 600;
    }

    if (scrollY > threshold) {
        sidebarEl.style.opacity = '1';
        sidebarEl.style.pointerEvents = 'auto';
    } else {
        sidebarEl.style.opacity = '0';
        sidebarEl.style.pointerEvents = 'none';
    }

    // Highlight the section currently in view
    var activeIdx = -1;
    config.sections.forEach(function (id, i) {
        var sec = document.getElementById(id);
        if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.52) {
            activeIdx = i;
        }
    });
    dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === activeIdx && i < config.sections.length);
    });

    // Fill the track
    if (sidebarFillEl) {
        var totalH = document.documentElement.scrollHeight - window.innerHeight;
        var pct = totalH > 0 ? Math.min((scrollY / totalH) * 100, 100) : 0;
        sidebarFillEl.style.height = pct + '%';
    }
}

// ============================================================
//  LIGHTBOX
// ============================================================
function openLightbox(src) {
    var lb = document.getElementById('lightbox');
    var img = document.getElementById('lb-img');
    if (!lb || !img) return;
    img.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================================
//  HERO PARTICLES
// ============================================================
function createParticles() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    for (var i = 0; i < 10; i++) {
        var p = document.createElement('div');
        p.className = 'hero-particle';
        var size = Math.random() * 20 + 7;
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

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        if (anchor.classList.contains('tab-btn')) return;
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // Mobile nav
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar shadow
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        navbar.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 6px -1px rgba(0,0,0,0.1)'
            : '0 1px 2px 0 rgba(0,0,0,0.05)';
    }, { passive: true });

    // Hero parallax
    window.addEventListener('scroll', function () {
        var scrolled = window.pageYOffset;
        var hero = document.querySelector('.hero');
        if (!hero) return;
        if (scrolled > 200 && scrolled < window.innerHeight) {
            hero.style.transform = 'translateY(' + ((scrolled - 200) * 0.3) + 'px)';
        } else if (scrolled <= 200) {
            hero.style.transform = 'translateY(0)';
        }
    }, { passive: true });

    // YouTube facade
    document.querySelectorAll('.youtube-facade').forEach(function (facade) {
        facade.addEventListener('click', function () {
            var id = this.getAttribute('data-videoid');
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });

    // Speaking toast
    var toast = document.getElementById('speaking-toast');
    if (toast) {
        setTimeout(function () { toast.classList.add('show'); }, 1200);
        toast.querySelector('.toast-close').addEventListener('click', function () {
            toast.classList.remove('show');
        });
    }

    // Font cycler — starts at SANS (index 1) to match CSS default
    var fonts = [
        { label: 'PIXEL', value: "'Press Start 2P', 'Minecraft', 'Courier New', monospace", rootSize: '16px', spacing: '-1px' },
        { label: 'SANS',  value: "'Inter', 'Helvetica Neue', Arial, sans-serif",             rootSize: '22px', spacing: '0px'  },
        { label: 'SERIF', value: "'Playfair Display', Georgia, serif",                       rootSize: '22px', spacing: '0px'  },
        { label: 'MONO',  value: "'Space Mono', 'Courier New', monospace",                   rootSize: '20px', spacing: '0px'  },
        { label: 'HAND',  value: "'Caveat', cursive",                                        rootSize: '24px', spacing: '0px'  },
    ];
    var fontIndex = 1;
    var fontToggle = document.getElementById('font-toggle');
    var fontLabel  = document.getElementById('font-label');
    if (fontToggle) {
        fontToggle.addEventListener('click', function () {
            fontIndex = (fontIndex + 1) % fonts.length;
            var f = fonts[fontIndex];
            var root = document.documentElement;
            root.style.setProperty('--site-font', f.value);
            root.style.setProperty('--root-font-size', f.rootSize);
            root.style.setProperty('--base-letter-spacing', f.spacing);
            fontLabel.textContent = f.label;
        });
    }

    // Contact form
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var name  = new FormData(contactForm).get('name');
            var email = new FormData(contactForm).get('email');
            alert('Thank you for your message, ' + name + '! I\'ll get back to you at ' + email + ' soon.');
            contactForm.reset();
        });
    }

    // Project image magnifier
    document.querySelectorAll('.project-card').forEach(function (card) {
        var projectImage = card.querySelector('.project-image');
        var projectImg   = card.querySelector('.project-img');
        if (!projectImage || !projectImg) return;
        projectImage.addEventListener('mouseenter', function () {
            projectImg.style.transition = 'transform 0.1s ease-out';
            projectImg.style.objectFit  = 'contain';
        });
        projectImage.addEventListener('mousemove', function (e) {
            var rect = projectImage.getBoundingClientRect();
            var xPct = (e.clientX - rect.left) / rect.width;
            var yPct = (e.clientY - rect.top)  / rect.height;
            var z = 1.3;
            var ia = projectImg.naturalWidth / projectImg.naturalHeight;
            var ca = rect.width / rect.height;
            var dw = ia > ca ? rect.height * ia : rect.width;
            var dh = ia > ca ? rect.height : rect.width / ia;
            var mx = Math.max(0, (dw * z - rect.width)  / (2 * z));
            var my = Math.max(0, (dh * z - rect.height) / (2 * z));
            var tx = (xPct - 0.5) * 2 * mx * 0.3;
            var ty = (yPct - 0.5) * 2 * my * 0.3;
            projectImg.style.transform = 'scale(' + z + ') translate(' + (-tx) + 'px, ' + (-ty) + 'px)';
        });
        projectImage.addEventListener('mouseleave', function () {
            projectImg.style.transition = 'transform 0.3s ease-out';
            projectImg.style.transform  = 'scale(1)';
            projectImg.style.objectFit  = 'cover';
        });
    });

    // ── Scroll reveals ───────────────────────────────────────
    setupReveal('.section-title',    'up');
    setupReveal('.about-text p',     'up',    80);
    setupReveal('.about-info',       'up');
    setupReveal('.stat-item',        'up',   100);
    setupReveal('.education-item',   'left',  120);
    setupReveal('.award-card',       'up',    70);
    setupReveal('.language-item',    'right', 150);
    setupReveal('.experience-item',  'left',  80);
    setupReveal('.project-card',     'up',   100);
    setupReveal('.skill-category',   'up',   120);
    setupReveal('.cad-photo-wrap',   'up',    60);
    setupReveal('.cad-hero-content', 'up');

    // ── Counter animation ────────────────────────────────────
    document.querySelectorAll('.stat-number').forEach(function (el) {
        counterObserver.observe(el);
    });

    // ── Scroll sidebar setup ─────────────────────────────────
    sidebarEl      = document.getElementById('scroll-sidebar');
    sidebarFillEl  = document.getElementById('sidebar-fill');

    document.querySelectorAll('.sdot').forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            var activeTab = getActiveTab();
            var config = activeTab ? tabConfig[activeTab] : null;
            if (!config || i >= config.sections.length) return;
            var sec = document.getElementById(config.sections[i]);
            if (sec) window.scrollTo({ top: sec.offsetTop - 90, behavior: 'smooth' });
        });
    });

    // ── Lightbox ─────────────────────────────────────────────
    var lb = document.getElementById('lightbox');
    if (lb) {
        lb.addEventListener('click', function (e) {
            if (e.target === lb || e.target.classList.contains('lb-close')) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }
    document.querySelectorAll('.cad-photo-wrap').forEach(function (wrap) {
        wrap.addEventListener('click', function () {
            openLightbox(wrap.querySelector('img').src);
        });
    });

    // ── Hero particles ───────────────────────────────────────
    createParticles();

    // ── Scroll handler ───────────────────────────────────────
    window.addEventListener('scroll', function () {
        updateScrollSidebar();
    }, { passive: true });

    // ── Initial state ────────────────────────────────────────
    updateScrollSidebar();
    triggerVisibleReveals();
});

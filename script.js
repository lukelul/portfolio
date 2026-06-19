// ============================================================
//  CAD PHOTO DATA
// ============================================================
var cadData = {
    'youibot': {
        title: 'YouiBot Humanoid — Forearm & InspireHand Integration',
        desc: 'At YouiBot in Shenzhen, I independently led the design of the humanoid robot arm — designing and fabricating the entire forearm assembly and the kinematic linkage to the InspireHand end effector entirely myself. The arm is part of Ling Shu, the world\'s first cross-scenario humanoid robot featuring a "one-brain-multi-form" architecture, co-developed by YouiBot Robotics and the Embodied Intelligent Robot Research Institute (a joint venture with Xi\'an Jiaotong University). Working under intense deadlines in a fast-paced R&D environment, I engineered around strict electrical constraints — routing harnesses through the arm structure, calculating joint torque requirements from first principles to select the right motors, and turning physical prototypes around same-day.',
        tools: ['SolidWorks', 'InspireHand SDK', 'Torque & Motor Sizing', 'Cable Routing', 'FDM 3D Printing', 'CNC Machining', 'Rapid Prototyping']
    },
    'inhabit-arm': {
        title: 'Inhabit V1 — 6-DOF Arm & Exoskeleton Teleoperation System',
        desc: 'The V1 prototype of Inhabit\'s modular teleoperation platform — a purpose-built 6-DOF robot arm paired with a custom robotic exoskeleton glove that captures the operator\'s hand motion and streams it as real-time control input. The arm was designed from scratch to be reconfigurable and compatible with a range of end effectors, with every joint sized for tabletop manipulation payloads. The entire system was kept deliberately low-cost and buildable so any lab could replicate it without proprietary hardware.',
        tools: ['SolidWorks', 'Onshape', 'Keyshot', 'Servo Actuator Sizing', 'Inverse Kinematics', '3D Printing', 'Real-time Serial Control']
    },
    'inhabit-joint': {
        title: 'Inhabit — Modular Arm Joint System',
        desc: 'A close-up render of Inhabit\'s proprietary modular joint design. Each joint in the Inhabit arm uses a standardized interface so the arm length and configuration can be reconfigured without any special tooling — disassembly in under a minute. The black aluminum clamps lock each joint under load, and the green LED rings provide visual joint-state feedback to the operator. Designed with tight tolerance stacking requirements to keep backlash low across the full chain.',
        tools: ['SolidWorks', 'Keyshot', 'Tolerance Stack Analysis', 'Aluminum Extrusion Design', 'Generative Design', 'Low-volume Manufacturing']
    },
    'inhabit-render': {
        title: 'Inhabit — 6-DOF Modular Arm',
        desc: 'A full render of the Inhabit arm in a typical teleoperation pose, showing all six degrees of freedom. Link lengths are modular and swappable, and the end effector mount is standardized for quick swaps between grippers and tools. The design prioritized off-the-shelf servo actuators, 3D-printed structural links, and snap-together assembly — so any team could build and reconfigure it without machining access. The green accent rings mark each active revolute joint.',
        tools: ['SolidWorks', 'Keyshot', 'DH Parameter Analysis', 'Servo Motor Integration', 'Forward/Inverse Kinematics', '3D Printing']
    },
    'inhabit-compat': {
        title: 'Inhabit — Universal Robot Compatibility',
        desc: 'Inhabit\'s teleoperation system is designed to be hardware-agnostic from day one. This render illustrates cross-platform compatibility with Universal Robots arms, Hugging Face\'s LeRobot platform, and Unitree humanoid robots — all driven by the same Inhabit operator interface. The modular joint architecture allows the arm to be adapted to match the kinematic profile of any target robot, dramatically lowering the setup cost for AI robotics teams collecting demonstration data.',
        tools: ['SolidWorks', 'ROS2', 'Robot Kinematics Mapping', 'Cross-platform Hardware Integration', 'Keyshot', 'URDF Export']
    },
    'exo-hand': {
        title: 'Robotic Exoskeleton Teleoperation Hand',
        desc: 'A custom-built robotic exoskeleton glove designed for intuitive, low-latency robot teleoperation. The operator wears the exoskeleton and their finger movements are captured in real time and transmitted to a robot hand. The physical prototype shows the servo-actuated finger linkages assembled with off-the-shelf hardware, developed alongside the CAD model in an iterative build-test loop. Designed to be lightweight, wearable for extended sessions, and fully reproducible with widely available parts.',
        tools: ['SolidWorks', 'Arduino', 'Servo Actuators', 'Flex Sensors', 'I2C Communication', 'Linkage Mechanism Design', '3D Printing', 'Embedded C++']
    },
    'exo-torso': {
        title: 'Robotic Exoskeleton — Picatinny Rail Attachment System',
        desc: 'A modular exoskeleton torso design with integrated Picatinny rail mounting points across the chest and shoulder panels, conforming to MIL-STD-1913. The rail interface allows sensors, cameras, and payload modules to be added or swapped without redesigning the chassis. The structure was designed for wearability and rigidity under dynamic loads, with organic surface blending at joint interfaces and reinforced gussets at high-stress nodes.',
        tools: ['SolidWorks', 'Surface Modeling', 'Structural FEA', 'MIL-STD-1913 Rail Standards', 'Composite Layup Design', '3D Printing', 'Ergonomic Fit Analysis']
    },
    'hackutd': {
        title: 'HackUTD 2025 — Interactive LED Matrix Game',
        desc: 'Designed and built the entire hardware stack for our HackUTD 2025 project in under 24 hours. The system featured a motorized LED matrix that physically tilted and moved as part of gameplay, paired with a secondary mini display as the main game interface. Players interacted directly with the physical displays — no keyboard, no screen. Every PCB mount, motor bracket, and structural panel was modeled in SolidWorks and printed live during the hackathon, going from blank page to playable game by morning.',
        tools: ['SolidWorks', 'Arduino', 'LED Matrix Drivers', 'Stepper Motors', 'I2C/SPI Display Protocols', 'Rapid Prototyping', 'FDM 3D Printing', 'Embedded C++']
    },
    'cleaner': {
        title: 'Autonomous Cleaning Robot',
        desc: 'A fully self-designed autonomous cleaning robot built around off-the-shelf Amazon electronics to keep the BOM cost as low as possible. The chassis was designed in SolidWorks around a differential drive base with onboard obstacle avoidance sensors and a modular cleaning payload bay. Every structural component was designed for easy FDM printing and tool-free assembly, making the full robot reproducible at a fraction of the cost of commercial cleaning robots.',
        tools: ['SolidWorks', 'Arduino', 'Ultrasonic Sensors', 'DC Motor Controllers', 'Differential Drive Design', 'FDM 3D Printing', 'Embedded C++', 'Sensor Fusion']
    },
    'paradigm': {
        title: 'Battery & Charger Storage Tower — Paradigm Robotics',
        desc: 'Designed for Paradigm Robotics to solve a real logistics problem: safely organizing and charging robot battery packs during and between outdoor test sessions. The tower features open shelving for quick battery access, integrated cable routing channels to keep charging cables managed, a top carry handle for portability between test sites, and corner reinforcements for field durability. Flat-pack friendly and assembled without fasteners — designed to be rapidly reproduced for any testing facility.',
        tools: ['SolidWorks', 'Sheet Goods Design', 'Laser Cut Pattern Generation', 'Structural Load Analysis', 'Flat-pack Assembly Design', 'FDM 3D Printing']
    },
    'vex-2024': {
        title: 'VEX Robotics — 2024 World Champion · Texas States · US Open',
        desc: 'A competition robot I co-designed that went on to win three of the most prestigious titles in VEX Robotics in a single season — the 2024 Texas State Championship, 2024 US Open, and the 2024 VEX World Championship. Every mechanism was engineered for maximum performance under match conditions: the drivetrain, scoring mechanisms, and intake were all designed and iterated rapidly across the season. This robot represents the culmination of years of competitive design experience at the highest level of the sport.',
        tools: ['Autodesk Inventor', 'VEX CAD Libraries', 'Mechanism Design', 'Rapid Prototyping', 'Competitive Analysis', 'Pneumatics', 'Custom Fabrication']
    },
    'vex-2025': {
        title: 'VEX Robotics — 2025 Texas State Champion · Solo Design',
        desc: 'A competition robot I designed entirely myself that won the 2025 Texas State Championship. Starting from a blank canvas, I engineered every subsystem — drivetrain geometry, lift mechanism, intake, and endgame — iterating quickly from sketch to functional hardware. Designing solo means owning every decision: gear ratios, motor allocations, structural rigidity, and strategic scoring priority were all calculated and validated through build-and-test cycles. The result was a robot that performed flawlessly under championship pressure.',
        tools: ['Autodesk Inventor', 'Custom Fabrication', 'Drivetrain Design', 'Linkage Mechanism', 'Motor & Gear Ratio Calculation', 'Rapid Prototyping', 'Competitive Strategy']
    },
    'projector-pen': {
        title: 'Projector Pen — Write on Any Wall',
        desc: 'Designed the complete hardware chassis and CAD casing for a handheld projector pen that can write and draw on any wall surface. The device packs a compact micro-projector, control electronics, and battery into an ergonomic handheld enclosure, all designed from scratch. Every dimension of the housing was modeled around tight spatial constraints — balancing heat dissipation, electronics clearance, button placement, and a form factor slim enough to hold comfortably like a pen.',
        tools: ['SolidWorks', 'FDM 3D Printing', 'Electronics Integration', 'Surface Modeling', 'Thermal Management', 'Embedded Hardware Design', 'Ergonomic Form Design'],
        video: 'cad-11.mp4'
    }
};

// ============================================================
//  PHOTO MODAL
// ============================================================
function openPhotoModal(wrap) {
    var key = wrap.getAttribute('data-key');
    var data = cadData[key];
    var img = wrap.querySelector('img');
    if (!data || !img) return;

    var modal = document.getElementById('photo-modal');
    var pmImg   = document.getElementById('pm-img');
    var pmVideo = document.getElementById('pm-video');

    if (data.video) {
        pmImg.style.display = 'none';
        pmVideo.style.display = 'block';
        pmVideo.src = data.video;
        pmVideo.load();
    } else {
        pmVideo.style.display = 'none';
        pmVideo.src = '';
        pmImg.style.display = 'block';
        pmImg.src = img.src;
        pmImg.alt = img.alt;
    }

    document.getElementById('pm-title').textContent = data.title;
    document.getElementById('pm-desc').textContent = data.desc;

    var toolsList = document.getElementById('pm-tools-list');
    toolsList.innerHTML = '';
    data.tools.forEach(function (tool) {
        var tag = document.createElement('span');
        tag.className = 'pm-tool-tag';
        tag.textContent = tool;
        toolsList.appendChild(tag);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    var modal = document.getElementById('photo-modal');
    if (!modal) return;
    var pmVideo = document.getElementById('pm-video');
    if (pmVideo) { pmVideo.pause(); pmVideo.src = ''; }
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

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
//  SCROLL SIDEBAR
// ============================================================
var tabConfig = {
    'home': {
        sections: ['about', 'education', 'awards', 'languages', 'contact'],
        labels:   ['About', 'Education', 'Awards', 'Languages', 'Contact'],
        heroThreshold: true
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

    if (sidebarFillEl) {
        var totalH = document.documentElement.scrollHeight - window.innerHeight;
        var pct = totalH > 0 ? Math.min((scrollY / totalH) * 100, 100) : 0;
        sidebarFillEl.style.height = pct + '%';
    }
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

    // Font cycler
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

    // ── Scroll sidebar ───────────────────────────────────────
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

    // ── CAD photo modal ──────────────────────────────────────
    document.querySelectorAll('.cad-photo-wrap').forEach(function (wrap) {
        wrap.addEventListener('click', function () {
            openPhotoModal(wrap);
        });
    });

    var modal = document.getElementById('photo-modal');
    if (modal) {
        modal.querySelector('.pm-backdrop').addEventListener('click', closePhotoModal);
        modal.querySelector('.pm-close').addEventListener('click', closePhotoModal);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closePhotoModal();
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

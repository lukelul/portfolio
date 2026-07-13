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
        title: 'Inhabit V1 — 6-DOF Arm & Exoskeleton Glove',
        desc: 'Inhabit V1 is the original prototype of the teleoperation system — a custom-built 6-DOF robot arm paired with a wearable exoskeleton glove that captures the operator\'s hand and finger movements in real time and streams them directly to the arm. Every component was designed from scratch: the arm links, joint interfaces, and glove mechanism all use off-the-shelf actuators and 3D-printed structure so any lab can build and replicate it without proprietary hardware. The goal was intuitive, low-latency teleoperation at the lowest possible cost.',
        tools: ['SolidWorks', 'Onshape', 'Keyshot', 'Servo Actuators', 'Flex Sensors', 'Real-time Serial Control', 'Linkage Mechanism Design', '3D Printing']
    },
    'inhabit-compat': {
        title: 'Inhabit V2 — Modular Arm & Universal Robot Compatibility',
        desc: 'Inhabit V2 is the refined evolution of the platform — redesigned modular joint architecture, cleaner manufacturing, and universal robot compatibility. The standardized joint interface lets the arm be fully reconfigured in under a minute without any tooling, and the end effector mount is hot-swappable. V2 is hardware-agnostic by design: the same operator interface drives Universal Robots arms, Hugging Face\'s LeRobot platform, and Unitree humanoid robots, dramatically cutting setup cost for AI robotics teams collecting demonstration data.',
        tools: ['SolidWorks', 'Keyshot', 'ROS2', 'Modular Joint Architecture', 'Tolerance Stack Analysis', 'URDF Export', 'Cross-platform Integration', '3D Printing'],
        images: ['cad-10.webp', 'cad-9.webp', 'cad-6.png']
    },
    'live-inhabit': {
        title: 'Inhabit Leader Arm — Live 3D Mesh',
        desc: 'The real Inhabit leader-arm CAD, exported straight from SolidWorks as a URDF and loaded live in your browser — not a photo or a render. Seven joints on real, non-planar hinge axes (not the simplified textbook 3-axis wrist most demos fake), sculpted right down to the handle grip an operator actually holds. Drag the glowing handle to drive the arm through real inverse kinematics — drag empty space to orbit, scroll to zoom.',
        tools: ['SolidWorks', 'URDF Export', 'Three.js', 'WebGL', 'Custom URDF Parser', 'Inverse Kinematics'],
        robot: true
    },
    'live-ur5': {
        title: 'Universal Robots UR5 — Live 3D Mesh',
        desc: 'The official UR5 model, loaded live from its published URDF and Collada meshes — one of the industrial arms the Inhabit leader is designed to drive one-to-one, no vendor-specific tooling required. Drag the glowing handle at the wrist to drive all six joints through real inverse kinematics.',
        tools: ['URDF', 'Collada (.dae)', 'Three.js', 'WebGL', 'Inverse Kinematics'],
        robot: true
    },
    'live-g1': {
        title: 'Unitree G1 Humanoid — Live 3D Mesh',
        desc: 'The full 29-DOF Unitree G1 humanoid, loaded live from its official URDF — every link from pelvis to fingertip, branching at the torso into both arms, both legs, and the head. Drag the glowing handle at the right hand to drive the waist + right arm through inverse kinematics, proving the same interface generalizes from a single arm to a full humanoid.',
        tools: ['URDF', 'Three.js', 'WebGL', 'Humanoid Kinematics', 'Inverse Kinematics'],
        robot: true
    },
    'exo-hand': {
        title: 'Inhabit V1 — 6-DOF Arm & Exoskeleton Glove',
        desc: 'Inhabit V1 is the original prototype of the teleoperation system — a custom-built 6-DOF robot arm paired with a wearable exoskeleton glove that captures the operator\'s hand and finger movements in real time and streams them directly to the arm. Every component was designed from scratch: the arm links, joint interfaces, and glove mechanism all use off-the-shelf actuators and 3D-printed structure so any lab can build and replicate it without proprietary hardware. The goal was intuitive, low-latency teleoperation at the lowest possible cost.',
        tools: ['SolidWorks', 'Onshape', 'Keyshot', 'Servo Actuators', 'Flex Sensors', 'Real-time Serial Control', 'Linkage Mechanism Design', '3D Printing']
    },
    'exo-torso': {
        title: 'Robotic Exoskeleton — Picatinny Rail Attachment System',
        desc: 'A modular exoskeleton torso with integrated Picatinny rail mounting points across the chest and shoulder panels (MIL-STD-1913), allowing sensors, cameras, and payload modules to be added or swapped without redesigning the chassis. Originally built as a Halloween costume, the design ended up being mechanically serious enough to evolve into a real wearable robotics platform — fully wearable, structurally rigid under dynamic loads, with organic surface blending at joint interfaces and reinforced gussets at high-stress nodes.',
        tools: ['SolidWorks', 'Surface Modeling', 'Structural FEA', 'MIL-STD-1913 Rail Standards', '3D Printing', 'Ergonomic Fit Analysis', 'Wearable Hardware Design']
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
    },
    'clothes-fold': {
        title: 'XLE Robot Arm — Clothes-Folding Training Rig',
        desc: 'Built at the UT Center for Autonomy to train a robot arm to fold laundry — a dual-arm rig used to collect demonstration data and evaluate a learned folding policy against real fabric. Cloth is one of the hardest manipulation problems in robotics: it deforms continuously, self-occludes, and never has a fixed geometry, so the rig had to be rigid and repeatable enough for consistent data collection across hundreds of folding attempts.',
        tools: ['SolidWorks', 'Servo Actuators', 'Imitation Learning', 'Data Collection Rig Design', '3D Printing']
    },
    'hand-v1': {
        title: '5-Finger Robot Hand — Linkage-Driven, No Tendons',
        desc: 'A cheap 5-finger robot hand built for the UC Berkeley AI Hackathon, driven entirely off 9g servos through printed linkages instead of tendons — no cable stretch, no re-tensioning, no drift over time. Every finger joint is a direct mechanical linkage back to its servo, which keeps the hand fully repeatable and dramatically cheaper to build and maintain than a tendon-driven hand.',
        tools: ['SolidWorks', '9g Servos', 'Linkage Mechanism Design', 'FDM 3D Printing', 'Low-Cost Manipulator Design']
    },
    'ai-glasses': {
        title: 'Waveguide AI Research Glasses',
        desc: 'A wearable display built around a waveguide optic that projects text and images directly in front of the wearer, paired with an AI that listens in real time and helps with research — surfacing information and drafting responses on the fly as you talk. Designed and built the full hardware enclosure around the waveguide combiner, driver electronics, and battery.',
        tools: ['SolidWorks', 'Waveguide Optics', 'Embedded Hardware Design', 'Real-time AI Integration', 'FDM 3D Printing'],
        video: 'cad-14.mp4'
    },
    'act-filament': {
        title: 'ACT Policy — Autonomous Filament Pickup',
        desc: 'Trained an ACT (Action Chunking Transformer) policy on a rig built for the UC Berkeley AI Hackathon, teaching a robot arm to pick up a 3D-printing filament spool and place it into a basket — learned entirely from about 30 minutes of demonstration data, no hand-coded motion planning.',
        tools: ['ACT / Imitation Learning', 'SolidWorks', 'Teleoperation Rig Design', 'Data Collection', 'Python'],
        video: 'cad-15.mp4'
    },
    'hand-fistbump': {
        title: '5-Finger Robot Hand — Fist Bump Demo',
        desc: 'The finalized version of the linkage-driven 5-finger hand, mounted to the end of a PiperX arm for the UC Berkeley AI Hackathon — recreating the fist bump from Big Hero 6 as a demo of the hand\'s compliance and grip.',
        tools: ['SolidWorks', '9g Servos', 'Linkage Mechanism Design', 'PiperX Integration', 'FDM 3D Printing'],
        video: 'cad-16.mp4'
    },
    'paradigm-fire': {
        title: 'Firefighting & Recon Robot — Paradigm Robotics',
        desc: 'Helped fix up and get running a firefighting and information-gathering robot at Paradigm Robotics, built to scout hazardous environments and relay information back before a human has to step in.',
        tools: ['Hardware Debugging', 'Mechanical Repair', 'Field Robotics', 'Paradigm Robotics'],
        video: 'cad-17.mp4'
    }
};

// ============================================================
//  PHOTO MODAL
// ============================================================
function openPhotoModal(wrap) {
    var key = wrap.getAttribute('data-key');
    var data = cadData[key];
    if (!data) return;

    var modal = document.getElementById('photo-modal');
    var pmImg   = document.getElementById('pm-img');
    var pmVideo = document.getElementById('pm-video');
    var pmCanvas = document.getElementById('pm-canvas');
    var pmCanvasHint = document.getElementById('pm-canvas-hint');
    var pmGallery = document.getElementById('pm-gallery');
    var img = wrap.querySelector('img');

    pmImg.style.display = 'none';
    pmVideo.style.display = 'none';
    pmVideo.pause();
    pmVideo.src = '';
    pmCanvas.style.display = 'none';
    pmCanvasHint.style.display = 'none';
    pmGallery.style.display = 'none';
    pmGallery.innerHTML = '';
    if (window.RobotShowcase) window.RobotShowcase.disposeModal();

    if (data.robot) {
        pmCanvas.style.display = 'block';
        pmCanvasHint.style.display = 'block';
        if (window.RobotShowcase) window.RobotShowcase.mountModal(pmCanvas, key);
    } else if (data.video) {
        pmVideo.style.display = 'block';
        pmVideo.src = data.video;
        pmVideo.load();
    } else if (data.images) {
        pmImg.style.display = 'block';
        pmImg.src = data.images[0];
        pmImg.alt = data.title;
        if (data.images.length > 1) {
            pmGallery.style.display = 'flex';
            data.images.forEach(function (src, i) {
                var thumb = document.createElement('img');
                thumb.src = src;
                thumb.className = 'pm-gallery-thumb' + (i === 0 ? ' active' : '');
                thumb.addEventListener('click', function () {
                    pmImg.src = src;
                    pmGallery.querySelectorAll('.pm-gallery-thumb').forEach(function (t) { t.classList.remove('active'); });
                    thumb.classList.add('active');
                });
                pmGallery.appendChild(thumb);
            });
        }
    } else {
        pmImg.style.display = 'block';
        if (img) { pmImg.src = img.src; pmImg.alt = img.alt; }
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
    if (window.RobotShowcase) window.RobotShowcase.disposeModal();
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
//  SCROLL SIDEBAR
// ============================================================
// Builds (#projects) now lives on the home flow under About, so home gets a
// progress sidebar too; the experience tab keeps Experience + Skills.
var tabConfig = {
    'home': {
        sections: ['about', 'projects', 'cad-gallery'],
        labels:   ['About', 'Builds', 'Projects']
    },
    'experience': {
        sections: ['experience', 'skills'],
        labels:   ['Experience', 'Skills']
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

    // "Get In Touch" — the email itself lives in the footer now, so this
    // scrolls all the way down instead of to the (now email-less) contact
    // section, landing on the footer regardless of which tab is open.
    var getInTouchBtn = document.getElementById('get-in-touch-btn');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        });
    }

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

    // Theme toggle (light/dark)
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var isDark = document.documentElement.hasAttribute('data-theme');
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.removeItem('theme');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Custom cursor — dot follows the pointer directly, ring trails behind
    var cursorDot = document.getElementById('cursorDot');
    var cursorRing = document.getElementById('cursorRing');
    if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        var mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', function (e) {
            mx = e.clientX; my = e.clientY;
            cursorDot.style.left = mx + 'px';
            cursorDot.style.top = my + 'px';
            if (!cursorDot.style.opacity) {
                cursorDot.style.opacity = '1';
                cursorRing.style.opacity = '0.6';
                rx = mx; ry = my;
            }
        });
        (function followRing() {
            rx += (mx - rx) * 0.18;
            ry += (my - ry) * 0.18;
            cursorRing.style.left = rx + 'px';
            cursorRing.style.top = ry + 'px';
            requestAnimationFrame(followRing);
        })();
        document.addEventListener('mouseover', function (e) {
            var t = e.target.closest('a, button, .tab-btn, .cad-photo-wrap, .project-card, .youtube-facade, .toast-close, [data-open-cad]');
            cursorDot.classList.toggle('hovering', !!t);
            cursorRing.classList.toggle('hovering', !!t);
        });
    }

    // Footer height — sized once (footer content is constant across tabs)
    // so the spacer that reveals the fixed footer stays accurate on resize.
    function setFooterHeight() {
        var f = document.querySelector('.footer');
        if (f) document.documentElement.style.setProperty('--footer-height', f.offsetHeight + 'px');
    }
    setFooterHeight();
    window.addEventListener('resize', setFooterHeight);
    window.addEventListener('load', setFooterHeight);
    setTimeout(setFooterHeight, 500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setFooterHeight);

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

    // Achievement toast — "N week(s) ago" recomputed from a fixed anchor date
    // every page load, so it keeps ticking up without ever needing an edit.
    var toast = document.getElementById('speaking-toast');
    if (toast) {
        var HACKATHON_WEEK_ONE = new Date('2026-07-10T00:00:00');
        var msPerWeek = 7 * 24 * 60 * 60 * 1000;
        var weeksAgo = Math.max(1, Math.floor((Date.now() - HACKATHON_WEEK_ONE.getTime()) / msPerWeek) + 1);
        var subline = document.getElementById('toast-subline');
        if (subline) {
            subline.textContent = 'Hardware winner · ' + weeksAgo + ' week' + (weeksAgo === 1 ? '' : 's') + ' ago';
        }

        var autoDismiss = setTimeout(function () { toast.classList.remove('show'); }, 1200 + 8000);
        setTimeout(function () { toast.classList.add('show'); }, 1200);
        toast.querySelector('.toast-close').addEventListener('click', function () {
            clearTimeout(autoDismiss);
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
    setupReveal('.experience-item',  'left',  80);
    setupReveal('.project-card',     'up',   100);
    setupReveal('.skill-category',   'up',   120);
    setupReveal('.cad-photo-wrap',   'up',    60);

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

    // ── CAD gallery category filter ──────────────────────────
    document.querySelectorAll('.cad-filter-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var filter = link.getAttribute('data-filter');
            document.querySelectorAll('.cad-filter-link').forEach(function (l) { l.classList.remove('active'); });
            link.classList.add('active');
            document.querySelectorAll('.cad-photo-wrap').forEach(function (wrap) {
                var categories = (wrap.getAttribute('data-category') || '').split(' ');
                var show = filter === 'all' || categories.indexOf(filter) !== -1;
                wrap.classList.toggle('cad-filtered-out', !show);
            });
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

    // ── Scroll handler ───────────────────────────────────────
    window.addEventListener('scroll', function () {
        updateScrollSidebar();
    }, { passive: true });

    // ── Initial state ────────────────────────────────────────
    updateScrollSidebar();
    triggerVisibleReveals();
});

// ============================================================
//  BILINGUAL LAYER  ·  EN / 中文
// ------------------------------------------------------------
//  The page ships in English. Everything Chinese lives here, so
//  index.html stays the single source of truth for structure and
//  the English copy. Each entry is [CSS selector, Chinese HTML];
//  the English original is cached on first swap and restored when
//  the switch goes back to EN. Elements are never replaced, only
//  their contents, so every click handler bound in script.js
//  survives a language change.
// ============================================================

var CAD_ZH = {
    'youibot': {
        title: 'YouiBot 人形机器人 — 小臂与 InspireHand 集成',
        desc: '在深圳 YouiBot，我独立主导了人形机器人手臂的设计——整个小臂总成，以及连接 InspireHand 末端执行器的运动连杆，全部由我一人完成。这条手臂属于 Ling Shu（灵枢）——全球首台采用"一脑多形"架构的跨场景人形机器人，由 YouiBot 与具身智能机器人研究院（与西安交通大学合资）联合开发。在节奏极快的研发环境和紧张的交付压力下，我围绕严格的电气约束做设计：在臂体结构内部规划线束走向，从第一性原理计算关节扭矩以选定电机，并做到实物原型当天迭代。'
    },
    'inhabit-arm': {
        title: 'Inhabit V1 — 六自由度机械臂与外骨骼手套',
        desc: 'Inhabit V1 是这套遥操作系统的最初原型——一条自研的六自由度机械臂，配一只可穿戴外骨骼手套，实时捕捉操作者的手掌和手指动作并直接驱动机械臂。所有零件都从零设计：臂体连杆、关节接口和手套机构全部使用现成舵机加 3D 打印结构，任何实验室都能自己复现，不依赖任何专有硬件。目标只有一个：用尽可能低的成本做到直观、低延迟的遥操作。'
    },
    'inhabit-compat': {
        title: 'Inhabit V2 — 模块化机械臂与通用机器人兼容',
        desc: 'Inhabit V2 是平台的进化版——重新设计的模块化关节架构、更干净的可制造性，以及通用机器人兼容。标准化关节接口让整条臂在一分钟内免工具重构，末端执行器接口支持热插拔。V2 从设计上就与硬件无关：同一套操作端可以驱动 Universal Robots 的机械臂、Hugging Face 的 LeRobot 平台和宇树的人形机器人，大幅降低 AI 机器人团队采集示教数据的搭建成本。'
    },
    'live-inhabit': {
        title: 'Inhabit 主臂 — 实时 3D 模型',
        desc: '这是真实的 Inhabit 主臂 CAD，直接从 SolidWorks 导出为 URDF 并在你的浏览器里实时加载——不是照片，也不是渲染图。七个关节都建立在真实的非共面铰链轴上（不是大多数演示里简化的教科书式三轴腕），细节一直做到操作者真正握持的手柄。拖动发光手柄，通过真实的逆运动学驱动整条臂——拖动空白处旋转视角，滚轮缩放。'
    },
    'live-ur5': {
        title: 'Universal Robots UR5 — 实时 3D 模型',
        desc: '官方 UR5 模型，从公开的 URDF 和 Collada 网格实时加载——它正是 Inhabit 主臂能够一比一驱动的工业机械臂之一，无需任何厂商专用工具。拖动腕部的发光手柄，通过真实的逆运动学驱动全部六个关节。'
    },
    'live-g1': {
        title: '宇树 G1 人形机器人 — 实时 3D 模型',
        desc: '完整的 29 自由度宇树 G1 人形机器人，从官方 URDF 实时加载——从骨盆到指尖的每一段连杆，在躯干处分叉出双臂、双腿和头部。拖动右手的发光手柄，通过逆运动学驱动腰部和右臂，证明同一套接口可以从单臂一直推广到整台人形机器人。'
    },
    'exo-hand': {
        title: 'Inhabit V1 — 六自由度机械臂与外骨骼手套',
        desc: 'Inhabit V1 是这套遥操作系统的最初原型——一条自研的六自由度机械臂，配一只可穿戴外骨骼手套，实时捕捉操作者的手掌和手指动作并直接驱动机械臂。所有零件都从零设计：臂体连杆、关节接口和手套机构全部使用现成舵机加 3D 打印结构，任何实验室都能自己复现，不依赖任何专有硬件。目标只有一个：用尽可能低的成本做到直观、低延迟的遥操作。'
    },
    'exo-torso': {
        title: '机器人外骨骼 — 皮卡汀尼导轨接口系统',
        desc: '一套模块化外骨骼躯干，胸板和肩板上集成了皮卡汀尼导轨接口（MIL-STD-1913），传感器、相机和负载模块可以直接加装或更换，不用重新设计机身。它最初只是一套万圣节服装，但机械上做得足够认真，最后演变成了真正的可穿戴机器人平台——完全可穿戴，在动态载荷下结构刚性足够，关节接口处做了有机曲面过渡，高应力节点处加了加强筋。'
    },
    'hackutd': {
        title: 'HackUTD 2025 — 交互式 LED 点阵游戏',
        desc: '在不到 24 小时内设计并搭出了我们 HackUTD 2025 项目的整个硬件。系统的核心是一块带电机驱动的 LED 点阵屏，它会作为玩法的一部分真实地倾斜和移动，另配一块小屏作为主界面。玩家直接和这些实体显示设备交互——没有键盘，也没有电脑屏幕。每一个 PCB 支架、电机固定件和结构面板都在 SolidWorks 里建模，并在黑客松现场打印，从一张白纸到天亮时能玩的游戏。'
    },
    'cleaner': {
        title: '自主清洁机器人',
        desc: '一台完全自主设计的清洁机器人，围绕亚马逊上能买到的现成电子件来做，尽可能压低 BOM 成本。底盘在 SolidWorks 中围绕差速驱动平台设计，带有机载避障传感器和一个模块化清洁负载舱。每一个结构件都按易于 FDM 打印和免工具装配来设计，整机可以用远低于商用清洁机器人的成本复现。'
    },
    'paradigm': {
        title: '电池与充电器存放架 — Paradigm Robotics',
        desc: '为 Paradigm Robotics 设计，解决一个真实的后勤问题：在户外测试期间和测试之间安全地整理和充电机器人电池包。存放架采用开放式层板便于快速取用电池，内置走线槽把充电线管理起来，顶部带提手方便在测试场地之间转移，四角做了加强以适应野外使用。平板化设计、无紧固件装配，任何测试场地都能快速复制一套。'
    },
    'vex-2024': {
        title: 'VEX 机器人 — 2024 世界冠军 · 德州州冠军 · 美国公开赛冠军',
        desc: '我参与共同设计的一台竞赛机器人，在一个赛季内拿下了 VEX 机器人最有分量的三个头衔——2024 德州州锦标赛、2024 美国公开赛和 2024 VEX 世界锦标赛。每一个机构都是围绕比赛实战性能来做的：底盘、得分机构和吸入机构在整个赛季中快速设计并反复迭代。这台机器人是多年最高水平竞赛设计经验的集大成之作。'
    },
    'vex-2025': {
        title: 'VEX 机器人 — 2025 德州州冠军 · 独立设计',
        desc: '一台完全由我一人设计的竞赛机器人，拿下了 2025 年德州州锦标赛冠军。从一张白纸开始，我做完了每一个子系统——底盘几何、举升机构、吸入机构和终局机构，从草图到可用硬件快速迭代。独立设计意味着每一个决定都要自己扛：齿比、电机分配、结构刚性和得分优先级全部靠计算，再通过反复的搭建和测试验证。最终这台车在冠军赛的压力下零失误。'
    },
    'projector-pen': {
        title: '投影笔 — 在任何墙面上书写',
        desc: '为一支手持投影笔设计了完整的硬件机身和 CAD 外壳，它可以在任何墙面上书写和绘画。设备把一颗微型投影模组、控制电路和电池全部塞进一个符合人机工程的手持外壳里，全部从零设计。外壳的每一个尺寸都是在极紧的空间约束下推敲出来的——在散热、电子件避让、按键布置，以及"细到能像笔一样握住"的外形之间取平衡。'
    },
    'clothes-fold': {
        title: 'XLE 机械臂 — 叠衣训练平台',
        desc: '在德州大学自主系统中心搭建，用来训练机械臂叠衣服——一套双臂平台，用于采集示教数据并在真实织物上评估学到的叠衣策略。布料是机器人操作里最难的问题之一：它连续形变、会自遮挡、没有固定几何，所以平台本身必须足够刚性、足够可重复，才能在成百上千次叠衣尝试中采到一致的数据。'
    },
    'hand-v1': {
        title: '五指机械手 — 连杆驱动，无腱绳',
        desc: '为加州大学伯克利分校 AI 黑客松做的一只低成本五指机械手，完全用 9g 舵机通过打印连杆驱动，不用腱绳——没有钢丝拉伸，不需要重新张紧，也不会随时间漂移。每一个指关节都是直接机械连杆连回它自己的舵机，这让整只手完全可重复，而且比腱绳驱动方案在制造和维护上便宜得多。'
    },
    'ai-glasses': {
        title: '波导 AI 研究眼镜',
        desc: '一副围绕波导光学元件做的可穿戴显示设备，把文字和图像直接投在佩戴者眼前，配合一个实时监听的 AI 协助做研究——一边说话，一边即时给出信息和草拟回复。我设计并制作了围绕波导合光器、驱动电路和电池的整套硬件外壳。'
    },
    'act-filament': {
        title: 'ACT 策略 — 自主抓取耗材盘',
        desc: '在为加州大学伯克利分校 AI 黑客松搭的平台上训练了一个 ACT（Action Chunking Transformer）策略，教机械臂抓起一卷 3D 打印耗材并放进篮子——完全从大约 30 分钟的示教数据中学到，没有任何手写的运动规划。'
    },
    'hand-fistbump': {
        title: '五指机械手 — 碰拳演示',
        desc: '连杆驱动五指机械手的最终版本，装在 PiperX 机械臂末端，为加州大学伯克利分校 AI 黑客松复刻了《超能陆战队》里的碰拳，用来演示这只手的柔顺性和抓握能力。'
    },
    'paradigm-fire': {
        title: '消防与侦察机器人 — Paradigm Robotics',
        desc: '在 Paradigm Robotics 参与修复并让一台消防与信息采集机器人重新跑起来，它的用途是先进入危险环境侦察并把信息传回来，再决定是否需要人进去。'
    }
};

var TOOLS_ZH = {
    'Torque & Motor Sizing': '扭矩计算与电机选型',
    'Cable Routing': '线束走线',
    'FDM 3D Printing': 'FDM 3D 打印',
    'CNC Machining': 'CNC 加工',
    'Rapid Prototyping': '快速原型',
    'Servo Actuators': '舵机驱动',
    'Flex Sensors': '弯曲传感器',
    'Real-time Serial Control': '实时串口控制',
    'Linkage Mechanism Design': '连杆机构设计',
    '3D Printing': '3D 打印',
    'Modular Joint Architecture': '模块化关节架构',
    'Tolerance Stack Analysis': '公差叠加分析',
    'URDF Export': 'URDF 导出',
    'Cross-platform Integration': '跨平台集成',
    'Custom URDF Parser': '自研 URDF 解析器',
    'Inverse Kinematics': '逆运动学',
    'Humanoid Kinematics': '人形机器人运动学',
    'Surface Modeling': '曲面建模',
    'Structural FEA': '结构有限元分析',
    'MIL-STD-1913 Rail Standards': 'MIL-STD-1913 导轨标准',
    'Ergonomic Fit Analysis': '人机工程贴合分析',
    'Wearable Hardware Design': '可穿戴硬件设计',
    'LED Matrix Drivers': 'LED 点阵驱动',
    'Stepper Motors': '步进电机',
    'I2C/SPI Display Protocols': 'I2C/SPI 显示协议',
    'Embedded C++': '嵌入式 C++',
    'Ultrasonic Sensors': '超声波传感器',
    'DC Motor Controllers': '直流电机控制器',
    'Differential Drive Design': '差速驱动设计',
    'Sensor Fusion': '传感器融合',
    'Sheet Goods Design': '板材结构设计',
    'Laser Cut Pattern Generation': '激光切割排版',
    'Structural Load Analysis': '结构载荷分析',
    'Flat-pack Assembly Design': '平板化装配设计',
    'VEX CAD Libraries': 'VEX CAD 库',
    'Mechanism Design': '机构设计',
    'Competitive Analysis': '赛场对手分析',
    'Pneumatics': '气动',
    'Custom Fabrication': '自制加工',
    'Drivetrain Design': '底盘传动设计',
    'Motor & Gear Ratio Calculation': '电机与齿比计算',
    'Competitive Strategy': '比赛策略',
    'Electronics Integration': '电子集成',
    'Thermal Management': '散热设计',
    'Embedded Hardware Design': '嵌入式硬件设计',
    'Ergonomic Form Design': '人机工程外形设计',
    'Imitation Learning': '模仿学习',
    'Data Collection Rig Design': '数据采集平台设计',
    '9g Servos': '9g 舵机',
    'Low-Cost Manipulator Design': '低成本机械手设计',
    'Waveguide Optics': '波导光学',
    'Real-time AI Integration': '实时 AI 集成',
    'ACT / Imitation Learning': 'ACT / 模仿学习',
    'Teleoperation Rig Design': '遥操作平台设计',
    'Data Collection': '数据采集',
    'PiperX Integration': 'PiperX 集成',
    'Hardware Debugging': '硬件调试',
    'Mechanical Repair': '机械维修',
    'Field Robotics': '野外机器人'
};

// [selector, Chinese HTML]. Company and product names stay in Latin script,
// which is how they are written in Chinese engineering copy anyway.
var ZH_ENTRIES = [
    // ── nav + footer nav ──────────────────────────────────
    ['.nav-menu li:nth-child(1) a, .footer-links a[href="#home"]', '首页'],
    ['.nav-menu li:nth-child(2) a, .footer-links a[href="#cad-gallery"]', '项目'],
    ['.nav-menu li:nth-child(3) a, .footer-links a[href="#experience"]', '经历'],

    // ── intro ─────────────────────────────────────────────
    ['.intro-role', '19 岁 · 德克萨斯大学奥斯汀分校 机械工程在读'],
    ['.hero-buttons .btn-primary', '查看作品'],
    ['#get-in-touch-btn', '联系我'],

    // ── about ─────────────────────────────────────────────
    ['.about-text p:nth-of-type(1)', '我是德克萨斯大学奥斯汀分校机械工程专业的学生，目前在创办一家尚未公开的机器人公司，同时负责 <a href="https://brightsaverindustries.com" target="_blank" rel="noopener">Bright Saver Industries</a> 的机器人业务。'],
    ['.about-text p:nth-of-type(2)', '下面是精选作品和完整的项目图集，页面底部是完整的<a href="#experience">工作经历</a>。'],
    ['.about-text p:nth-of-type(3)', '此前，我在旧金山的前沿机器人基础模型实验室 Pantheon Inc. 做机械工程师，在德克萨斯大学自主系统中心做机器人研究，并在深圳 YouiBot 设计了人形机械臂的小臂和手部连杆。我还带领 VEX 机器人战队拿下 2024 年世界锦标赛冠军，并在多场千人以上规模的黑客松中获得硬件奖，包括加州大学伯克利分校 AI 黑客松和 Texas Venture Group。'],
    ['.about-text p:nth-of-type(4)', '机器人是下一次平台级的转变，谁能把硬件和数据采集的成本大幅降下来，谁就赢下它。'],
    ['.about-text p:nth-of-type(5)', '一路走来，我设计过 20 多台机器人，并建立了一个 14,000 多人的机器人教育社区。（中英文都是我的母语。）'],

    // ── section titles ────────────────────────────────────
    ['#cad-gallery .section-title', '项目'],
    ['#experience .section-title', '经历'],
    ['.experience-subtitle', '论文与作品'],

    // ── project filter links (loose text handled separately) ──
    ['.cad-filter-link[data-filter="all"]', '全部'],
    ['.cad-filter-link[data-filter="industrial"]', '工业'],
    ['.cad-filter-link[data-filter="wearables"]', '可穿戴'],
    ['.cad-filter-link[data-filter="competition"]', '竞赛'],
    ['.cad-filter-link[data-filter="hardware"]', '硬件'],

    // ── gallery captions ──────────────────────────────────
    ['[data-key="youibot"] .cad-photo-cap', 'YouiBot · 小臂与 InspireHand 连杆 · SolidWorks'],
    ['[data-key="live-inhabit"] .cad-photo-cap', 'Inhabit V2 · 实时模型 · 拖动手柄'],
    ['[data-key="inhabit-arm"] .cad-photo-cap', 'Inhabit V1 · 六自由度机械臂与外骨骼手套'],
    ['[data-key="inhabit-compat"] .cad-photo-cap', 'Inhabit V2 · 通用机器人兼容'],
    ['[data-key="live-ur5"] .cad-photo-cap', 'Universal Robots UR5 · 实时模型 · 由 Inhabit 驱动'],
    ['[data-key="live-g1"] .cad-photo-cap', '宇树 G1 · 实时模型 · 由 Inhabit 驱动'],
    ['[data-key="exo-hand"] .cad-photo-cap', 'Inhabit V1 · 外骨骼手套 · 实物与 CAD 对比'],
    ['[data-key="exo-torso"] .cad-photo-cap', '机器人外骨骼 · 皮卡汀尼导轨接口 · SolidWorks'],
    ['[data-key="hackutd"] .cad-photo-cap', 'HackUTD 2025 · LED 点阵游戏硬件 · SolidWorks'],
    ['[data-key="cleaner"] .cad-photo-cap', '自主清洁机器人 · SolidWorks'],
    ['[data-key="paradigm"] .cad-photo-cap', '电池与充电器存放架 · Paradigm Robotics · SolidWorks'],
    ['[data-key="vex-2024"] .cad-photo-cap', 'VEX 机器人 · 2024 世界冠军 · 共同设计'],
    ['[data-key="vex-2025"] .cad-photo-cap', 'VEX 机器人 · 2025 德州州冠军 · 独立设计'],
    ['[data-key="projector-pen"] .cad-photo-cap', '投影笔 · 硬件设计 · CAD 外壳'],
    ['[data-key="clothes-fold"] .cad-photo-cap', 'XLE 机械臂 · 叠衣训练平台 · 德克萨斯大学自主系统中心'],
    ['[data-key="hand-v1"] .cad-photo-cap', '五指机械手 · 连杆驱动 · 伯克利 AI 黑客松'],
    ['[data-key="ai-glasses"] .cad-photo-cap', '波导 AI 研究眼镜 · 实时助手'],
    ['[data-key="act-filament"] .cad-photo-cap', 'ACT 策略 · 自主抓取耗材盘 · 伯克利 AI 黑客松'],
    ['[data-key="hand-fistbump"] .cad-photo-cap', '五指机械手 · 碰拳演示 · PiperX + 伯克利 AI 黑客松'],
    ['[data-key="paradigm-fire"] .cad-photo-cap', '消防与侦察机器人 · Paradigm Robotics'],

    // ── experience rows ───────────────────────────────────
    ['[data-exp="bsi"] .experience-title', '机器人业务负责人'],
    ['[data-exp="bsi"] .experience-company', '<a href="https://brightsaverindustries.com" target="_blank" rel="noopener">Bright Saver Industries</a> · 奥斯汀与旧金山'],
    ['[data-exp="bsi"] .experience-date', '2026 年 9 月 — 至今'],
    ['[data-exp="bsi"] .experience-line', '负责机器人业务与运营：用中文直接对接中国机器人厂商，帮助他们拿到美国的有条件批准，并与我们的制造合作伙伴一起把他们的产线在美国重建起来'],

    ['[data-exp="pantheon"] .experience-title', '机械工程师'],
    ['[data-exp="pantheon"] .experience-company', '<a href="https://pantheon.inc" target="_blank" rel="noopener">Pantheon Inc.</a> · 旧金山'],
    ['[data-exp="pantheon"] .experience-date', '2026 年 6 月 — 2026 年 9 月'],
    ['[data-exp="pantheon"] .experience-line', '为一家前沿机器人基础模型实验室在 Fusion 360 中设计了可变形蜗轮末端执行器，接入实验室的遥操作数据采集流程（累计采集 1,000+ 小时数据），并在 Isaac Sim 中训练操作策略，仿真到实机迁移后抓放成功率达 90%'],

    ['[data-exp="tess"] .experience-title', '实习生'],
    ['[data-exp="tess"] .experience-company', '<a href="https://www.tessventures.xyz" target="_blank" rel="noopener">Tess Ventures</a> · 旧金山'],
    ['[data-exp="tess"] .experience-date', '2026 年 3 月 — 2026 年 6 月'],
    ['[data-exp="tess"] .experience-line', '为早期投资挖掘并评估硬科技与机器人创业公司'],

    ['[data-exp="finc"] .experience-title', '驻场创始人'],
    ['[data-exp="finc"] .experience-company', '<a href="https://www.f.inc/" target="_blank" rel="noopener">Founders Inc.</a> · 旧金山'],
    ['[data-exp="finc"] .experience-date', '2026 年 — 2026 年 9 月'],
    ['[data-exp="finc"] .experience-line', '创办 Inhabit，一家机器人遥操作硬件公司，由 <a href="https://www.f.inc/" target="_blank" rel="noopener">Founders Inc.</a> 和 <a href="https://www.nvidia.com/en-us/startups/" target="_blank" rel="noopener">NVIDIA Inception</a> 支持'],

    ['[data-exp="paradigm"] .experience-title', '工程实习生'],
    ['[data-exp="paradigm"] .experience-company', '<a href="https://paradigmrobotics.com" target="_blank" rel="noopener">Paradigm Robotics</a> · 奥斯汀'],
    ['[data-exp="paradigm"] .experience-date', '2025 年 12 月 — 2026 年 2 月'],
    ['[data-exp="paradigm"] .experience-line', '作为机械工程实习生负责机器人硬件设计与快速原型制作'],

    ['[data-exp="utca"] .experience-title', '机器人研究员'],
    ['[data-exp="utca"] .experience-company', '德克萨斯大学自主系统中心 · 奥斯汀'],
    ['[data-exp="utca"] .experience-date', '2025 年 8 月 — 2026 年'],
    ['[data-exp="utca"] .experience-line', '设计了六自由度人形机械臂和统一测试平台（HopeJr + SO101），用于自主操作研究'],

    ['[data-exp="youibot"] .experience-title', '机械工程师'],
    ['[data-exp="youibot"] .experience-company', 'YouiBot · 深圳'],
    ['[data-exp="youibot"] .experience-date', '2025 年 6 月 — 2025 年 7 月'],
    ['[data-exp="youibot"] .experience-line', '主导人形机器人手臂和小臂的 SolidWorks 设计——在紧张的交付节奏下与电气和控制团队协作，完成可量产的 CAD'],

    ['[data-exp="robocoaching"] .experience-title', '创始人 / CEO / 顾问'],
    ['[data-exp="robocoaching"] .experience-company', 'Robocoaching · 线上'],
    ['[data-exp="robocoaching"] .experience-date', '2021 年 8 月 — 至今'],
    ['[data-exp="robocoaching"] .experience-line', '打造 Robolytics 教练品牌——11,000+ 成员，200 万+ 播放，为顶尖机器人战队提供付费辅导'],

    ['[data-exp="vex"] .experience-title', '机器人战队队长'],
    ['[data-exp="vex"] .experience-company', 'VEX Robotics · 达拉斯'],
    ['[data-exp="vex"] .experience-date', '2021 年 5 月 — 2025 年 7 月'],
    ['[data-exp="vex"] .experience-line', '2024 年世界冠军、美国公开赛冠军、技能赛世界纪录保持者——30+ 奖项，用 Inventor 设计过 20+ 台机器人'],

    // ── build cards ───────────────────────────────────────
    ['[data-proj="talking-face"] .project-title', '音频驱动的说话人脸'],
    ['[data-proj="talking-face"] .project-description', '在 UT Dallas CAST 主导并展示了改进音频驱动面部动画的研究，使用 FLAME 与 BEAT 模型，获得第一名。'],
    ['[data-proj="talking-face"] .project-tags', '<span class="tag">AI / 机器学习</span><span class="tag">研究</span><span class="tag">Python</span>'],

    ['[data-proj="ai-glasses-vid"] .project-title', '来自未来的眼镜（这东西本不该存在）'],
    ['[data-proj="ai-glasses-vid"] .project-description', '24 小时内从零做出一副悬浮显示眼镜原型。'],
    ['[data-proj="ai-glasses-vid"] .project-tags', '<span class="tag">硬件</span><span class="tag">快速原型</span>'],
    ['[data-proj="ai-glasses-vid"] .video-views', '2 万次观看'],

    ['[data-proj="laser-pen"] .project-title', '我做了一支能在墙上画画的激光笔'],
    ['[data-proj="laser-pen"] .project-description', '设计并制作了一支用光投影在任何表面上作画的激光笔。'],
    ['[data-proj="laser-pen"] .project-tags', '<span class="tag">硬件</span><span class="tag">激光</span><span class="tag">CAD</span>'],
    ['[data-proj="laser-pen"] .video-views', '1 万次观看'],

    ['[data-exp="utca"] .video-views', '2.5 万次观看'],
    ['[data-exp="youibot"] .video-views', '10 万+ 次观看'],

    // ── chrome ────────────────────────────────────────────
    ['#toast-headline', '赢得加州大学伯克利分校 AI 黑客松'],
    ['.toast-link', '查看 →'],
    ['.pm-tools-label', '工具与技术'],
    ['#pm-canvas-hint', '拖动发光手柄移动 · 拖动其他位置旋转视角 · 滚轮缩放'],
    ['.footer-copy', '© 2026 版权所有。']
];

(function () {
    var CACHE = new WeakMap();   // element  → English innerHTML
    var TEXTS = new WeakMap();   // text node → English nodeValue

    function swap(el, html) {
        if (!CACHE.has(el)) CACHE.set(el, el.innerHTML);
        el.innerHTML = html;
    }
    function unswap(el) {
        if (CACHE.has(el)) el.innerHTML = CACHE.get(el);
    }

    // The "filter by ... , ... or ... ." glue sits in bare text nodes between
    // the anchors, so it is punctuation-swapped in place rather than through
    // innerHTML, which would drop the click handlers bound to those anchors.
    var GLUE = { 'filter by': '筛选：', 'or': '或', ',': '、', ', or': '，或', '.': '。' };
    function filterGlue(zh) {
        var p = document.querySelector('.cad-filter');
        if (!p) return;
        Array.prototype.forEach.call(p.childNodes, function (n) {
            if (n.nodeType !== 3) return;
            if (!TEXTS.has(n)) TEXTS.set(n, n.nodeValue);
            var en = TEXTS.get(n);
            if (!zh) { n.nodeValue = en; return; }
            var key = en.trim().replace(/\s+/g, ' ');
            if (key === ', or') n.nodeValue = en.replace(/,\s*or/, GLUE[key]);
            else if (GLUE[key] !== undefined) n.nodeValue = en.replace(key, GLUE[key]);
        });
    }

    function apply(lang) {
        var zh = lang === 'zh';
        ZH_ENTRIES.forEach(function (entry) {
            document.querySelectorAll(entry[0]).forEach(function (el) {
                if (zh) swap(el, entry[1]); else unswap(el);
            });
        });
        filterGlue(zh);

        document.documentElement.lang = zh ? 'zh' : 'en';
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.classList.toggle('is-zh', zh);
            btn.setAttribute('aria-checked', zh ? 'true' : 'false');
        }

        // Pieces that script.js renders itself.
        if (typeof window.refreshLangDependent === 'function') window.refreshLangDependent();
    }

    window.SITE_LANG = function () {
        return document.documentElement.lang === 'zh' ? 'zh' : 'en';
    };

    document.addEventListener('DOMContentLoaded', function () {
        // ?lang=zh wins over the saved preference, so a Chinese-first link
        // can be sent straight to someone who has never opened the site.
        var forced = null;
        try {
            var q = new URLSearchParams(window.location.search).get('lang');
            if (q === 'zh' || q === 'en') forced = q;
        } catch (e) { /* older browser — fall back to storage */ }

        var saved = forced || (localStorage.getItem('lang') === 'zh' ? 'zh' : 'en');
        if (forced) {
            if (forced === 'zh') localStorage.setItem('lang', 'zh');
            else localStorage.removeItem('lang');
        }
        apply(saved === 'zh' ? 'zh' : 'en');

        var btn = document.getElementById('lang-toggle');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var next = window.SITE_LANG() === 'zh' ? 'en' : 'zh';
            if (next === 'zh') localStorage.setItem('lang', 'zh');
            else localStorage.removeItem('lang');
            apply(next);
        });
    });
})();

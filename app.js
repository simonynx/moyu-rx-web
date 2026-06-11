const devices = [
  {
    id: "quick",
    icon: "⚡",
    label: "快速",
    sub: "先试这三步",
    title: "快速排查",
    tip: "还是没反应就直接叫店员，别反复拔插电源线和 HDMI 线。",
    steps: [
      ["看电源", "先确认小米电视、PS5 或 Switch 的指示灯已经亮起。"],
      ["换信号源", "小米电视遥控器按输入源，依次试 HDMI1、HDMI2。"],
      ["连手柄", "PS5 按 PS 键，Switch 按 HOME 键；没反应就靠近主机再试。"],
      ["重试一次", "刚切完线的话等 5 秒再看一次，别连续来回切。"]
    ],
    extras: [
      {
        title: "最常见的三个现象",
        items: [
          { title: "屏幕显示“无信号”", desc: "先切电视输入源，依次试 HDMI1、HDMI2。" },
          { title: "主机亮灯但没画面", desc: "先确认电视没有停在错误输入源上，主机和电视都亮了再等等。" },
          { title: "手柄没有反应", desc: "PS5 用 USB 线连主机后再按 PS 键，Switch 按 HOME 键唤醒。" }
        ]
      },
      {
        title: "先别这样做",
        items: [
          { title: "别反复拔插电源", desc: "先确认是不是输入源没切对，电源线问题最少见。" },
          { title: "别一直硬按按键", desc: "有时只是主机还没唤醒，等几秒再试更快。" }
        ]
      }
    ]
  },
  {
    id: "ps5",
    icon: "🎮",
    label: "PS5",
    sub: "主机和光盘",
    title: "PS5 启动与放盘",
    tip: "竖放 PS5 放光盘时，标签面朝左，亮面朝右；方向不对就先退出，不要硬推。",
    steps: [
      ["打开小米电视", "先确认电视已经开机，能看到主页或无信号提示。"],
      ["切到 PS5 输入源", "用遥控器按输入源，选连接 PS5 的 HDMI。"],
      ["启动 PS5", "按主机电源键，听到提示音后等白灯常亮。"],
      ["连接手柄", "按手柄 PS 键；没反应用 USB 线连主机后再按。"],
      ["放入光盘", "PS5 竖放时，光盘标签面朝左，亮面朝右。"]
    ],
    extras: [
      {
        title: "光盘怎么放",
        items: [
          { title: "标签面朝左", desc: "主机竖放时，封面这面朝左，反面亮面朝右。" },
          { title: "不要硬塞", desc: "方向不对或卡住时先拿出来，换方向再轻轻推入。" },
          { title: "读不出来先退盘", desc: "退出光盘后检查正反面和盘面污渍，再重新放入。" }
        ]
      },
      {
        title: "常见问题",
        items: [
          { title: "PS5 手柄连不上", desc: "用 USB 线连接主机，再按手柄 PS 键。" },
          { title: "有画面没声音", desc: "先调小米电视音量，再检查游戏内声音是否被关掉。" },
          { title: "一直黑屏", desc: "先换 HDMI 输入源，再看主机灯有没有正常亮起。" }
        ]
      }
    ]
  },
  {
    id: "switch",
    icon: "🕹️",
    label: "Switch",
    sub: "手柄和游戏卡",
    title: "Switch 启动与换卡",
    tip: "换游戏卡前先回 HOME 并关闭当前软件；卡带拿出后请放回原盒。",
    steps: [
      ["确认主机在底座", "Switch 插回底座，底座和电源线不要移动。"],
      ["切到 Switch 输入源", "小米电视遥控器按输入源，选择连接 Switch 的 HDMI。"],
      ["唤醒主机", "按手柄 HOME 键，屏幕出现主页后再选游戏。"],
      ["组合手柄", "合体模式按 L+R；横握模式看侧边 SL+SR。"],
      ["换游戏卡", "先回 HOME 并关闭软件，再轻轻取出旧卡，换上新卡。"]
    ],
    extras: [
      {
        title: "手柄怎么拿",
        items: [
          { title: "竖握 / 合体", desc: "两个 Joy-Con 装在握把上时，左手按 L，右手按 R。" },
          { title: "横握 / 单只", desc: "一个 Joy-Con 横着拿时，不看 L/R，按侧边 SL + SR。" },
          { title: "拆下来别硬掰", desc: "按住 Joy-Con 背面的释放键，再沿轨道往上滑出。" }
        ]
      },
      {
        title: "换游戏卡",
        items: [
          { title: "先回 HOME", desc: "正在游戏时先关闭软件，再换卡，不要在运行中拔卡。" },
          { title: "卡槽在顶部右侧", desc: "轻轻掀开小盖子，卡带标签朝屏幕方向插入。" },
          { title: "换完收好", desc: "拿下来的卡马上放回盒子，别放桌面，避免丢失。" }
        ]
      }
    ]
  },
  {
    id: "tv",
    icon: "📺",
    label: "电视",
    sub: "小米电视",
    title: "小米电视",
    tip: "遥控器找不到时先看桌面或设备柜；别用主机线当开关。",
    steps: [
      ["打开电视", "按遥控器电源键，等待主页或无信号提示出现。"],
      ["找到输入源", "按输入源键，优先找 HDMI1、HDMI2。"],
      ["调音量", "先把电视音量调到 20-30，再进入游戏。"],
      ["无信号就换口", "不确定就把 HDMI1、HDMI2 都试一遍。"]
    ],
    extras: [
      {
        title: "找不到输入源",
        items: [
          { title: "先按主页键", desc: "如果按了输入源还看不见，先回桌面再找一次。" },
          { title: "HDMI1 / HDMI2 轮流试", desc: "PS5 和 Switch 通常就在这两个口上，不确定就一个一个试。" },
          { title: "看电视不是看主机线", desc: "遥控器才是换输入源的入口，不要拿主机线去找画面。" }
        ]
      },
      {
        title: "有画面没声音",
        items: [
          { title: "先调电视音量", desc: "很多时候只是音量太小，先把电视音量拉起来。" },
          { title: "再看游戏内设置", desc: "如果电视有声音还不行，再检查游戏里是否静音或耳机输出。" }
        ]
      }
    ]
  }
];

const peoplePlans = [
  {
    id: "solo",
    icon: "🧍",
    title: "1个人",
    text: "别硬凑局，先选图书角、漫画、短篇推理或大厅轻票。想玩游戏就选单人剧情或轻动作。",
    tags: ["漫画小说", "推理短篇", "大厅放空"],
    recommendations: [
      { type: "阅读", name: "今日小说", desc: "适合等朋友或一个人安静待一会儿。" },
      { type: "推理", name: "短篇谜题", desc: "时间短，不用凑局，适合低压力烧脑。" },
      { type: "PS", name: "寂静岭2 重制版", desc: "适合一个人沉浸玩，恐怖氛围强。" },
      { type: "PS", name: "寂静岭f", desc: "偏心理恐怖和探索，适合独自体验。" },
      { type: "PS", name: "血源诅咒", desc: "动作挑战向，适合想专注打Boss的人。" },
      { type: "PS", name: "最终幻想7 重制版", desc: "剧情和演出感强，适合慢慢推进。" },
      { type: "PS", name: "黑神话：悟空", desc: "单人动作大作，适合想爽打一段的人。" }
    ]
  },
  {
    id: "duo",
    icon: "👫",
    title: "2个人",
    text: "适合双人合作、轻对抗和短桌游。情侣、朋友、等包间都可以先玩一局。",
    tags: ["双人成行", "轻桌游", "Switch双人"],
    recommendations: [
      { type: "桌游", name: "花砖物语 双人对决版", desc: "更适合两个人认真对局。", tutorialId: "azul-duel" },
      { type: "桌游", name: "璀璨宝石 双人对决版", desc: "双人节奏更紧，抢资源更明显。", tutorialId: "splendor-duel" },
      { type: "桌游", name: "花砖物语", desc: "好看、安静、两个人也能玩。", tutorialId: "azul" },
      { type: "桌游", name: "璀璨宝石", desc: "规则少，2个人也有博弈感。", tutorialId: "splendor" },
      { type: "PS", name: "双人成行", desc: "双人合作首选，适合情侣和朋友。" },
      { type: "PS", name: "幻影奇境 / 双影奇境", desc: "偏双人合作冒险，适合想一起通关的人。" },
      { type: "PS", name: "逃出生天", desc: "双人剧情合作，一起推进故事。" },
      { type: "PS", name: "街霸 / 铁拳", desc: "适合直接对战，输了马上再来一局。" },
      { type: "PS", name: "小小的梦魇3", desc: "适合双人氛围冒险，节奏不要太赶。" }
    ]
  },
  {
    id: "group",
    icon: "👥",
    title: "3-4个人",
    text: "这是包间最舒服的人数。主机派对、合作游戏、璀璨宝石、卡卡颂这类都合适。",
    tags: ["包间优先", "派对游戏", "新手桌游"],
    recommendations: [
      { type: "桌游", name: "璀璨宝石", desc: "3-4人节奏最好，新手也容易进。", tutorialId: "splendor" },
      { type: "桌游", name: "卡卡颂", desc: "边拼地图边聊天，适合朋友局。", tutorialId: "carcassonne" },
      { type: "桌游", name: "卡坦岛", desc: "经典资源交换，适合4人认真玩一局。", tutorialId: "catan" },
      { type: "桌游", name: "电力公司", desc: "偏策略和经营，适合愿意动脑的小队。", tutorialId: "power-grid" },
      { type: "桌游", name: "阿瓦隆", desc: "想互相怀疑和聊天时很合适。", tutorialId: "avalon" },
      { type: "桌游", name: "炸弹猫咪", desc: "轻松、短平快，适合4人热场。", tutorialId: "exploding-kittens" },
      { type: "Switch", name: "超级鸡马", desc: "互坑、搞笑、失败也有节目效果。" },
      { type: "Switch", name: "马里奥Party", desc: "4人派对首选，规则简单气氛快。" },
      { type: "Switch", name: "马里奥赛车", desc: "上手最快，适合先热场。" },
      { type: "Switch", name: "胡闹厨房", desc: "适合合作和吵闹，朋友局很容易笑。" },
      { type: "Switch", name: "任天堂明星大乱斗", desc: "适合想直接对抗的4人局。" }
    ]
  },
  {
    id: "party",
    icon: "🪑",
    title: "5人以上",
    text: "优先用大厅桌游位，或者拆成包间+大厅。小包间不要硬挤，体验会下降。",
    tags: ["大厅桌游", "分桌更舒服", "组局活动"],
    recommendations: [
      { type: "桌游", name: "UNO / 派对卡牌", desc: "热场最快，等人也能开。", tutorialId: "uno" },
      { type: "桌游", name: "炸弹猫咪", desc: "抽卡紧张又好笑，适合多人快速开局。", tutorialId: "exploding-kittens" },
      { type: "桌游", name: "阿瓦隆", desc: "5人以上更有味道，适合说话多的人。", tutorialId: "avalon" },
      { type: "桌游", name: "狼人杀 / 谁是卧底", desc: "人数多、想热闹时更适合。" },
      { type: "桌游", name: "传情画意 / 只言片语", desc: "适合不想太烧脑的多人局。" },
      { type: "玩法", name: "分桌轮换", desc: "人多时别硬挤包间，体验会更舒服。" }
    ]
  }
];

const defaultBoardGames = [
  {
    id: "splendor-duel",
    icon: "💎",
    name: "璀璨宝石 双人对决版",
    meta: ["2人", "30分钟", "双人对抗"],
    filters: ["2p", "strategy", "newbie"],
    bestFor: "适合两个人认真对局，抢资源和卡牌的互动更强。",
    videoLinks: [
      { title: "璀璨宝石｜规则讲解+试玩演示", url: "https://www.bilibili.com/video/BV1V4411J7KN/" },
      { title: "【桌游来一盘】第十一期：璀璨宝石", url: "https://www.bilibili.com/video/BV16s411N7vL/" }
    ],
    steps: [
      ["摆好市场", "按说明摆三排发展卡、贵族/王冠相关卡牌和宝石区域。"],
      ["回合选择", "主要做一件事：拿宝石、买卡，或按规则调整宝石区。"],
      ["看胜利条件", "留意总分、同色分和王冠条件，别只顾着买便宜牌。"]
    ]
  },
  {
    id: "azul-duel",
    icon: "🌸",
    name: "花砖物语 双人对决版",
    meta: ["2人", "30-45分钟", "双人轻策略"],
    filters: ["2p", "strategy", "newbie"],
    bestFor: "适合两个人安静对局，比普通版更聚焦双人博弈。",
    videoLinks: [
      { title: "花砖物语｜规则讲解+试玩演示", url: "https://www.bilibili.com/video/BV1fK9zYSEo6/" },
      { title: "一分钟成为更棒的花砖工匠！《花砖物语》【一分钟桌游进阶】01", url: "https://www.bilibili.com/video/BV1Di4y1A7ct/" }
    ],
    steps: [
      ["按图摆件", "先按说明摆好圆盘、花砖和双方玩家板。"],
      ["轮流拿砖", "选择颜色和来源，把砖放进自己的准备区。"],
      ["完成计分", "把完成的砖上墙，注意连线得分和扣分位置。"]
    ]
  },
  {
    id: "splendor",
    icon: "💎",
    name: "璀璨宝石",
    meta: ["2-4人", "30-45分钟", "新手友好"],
    filters: ["2p", "34p", "strategy", "newbie"],
    bestFor: "适合朋友小局，规则简单，越玩越容易上头。",
    videoLinks: [
      { title: "璀璨宝石｜规则讲解+试玩演示", url: "https://www.bilibili.com/video/BV1V4411J7KN/" },
      { title: "【桌游来一盘】第十一期：璀璨宝石", url: "https://www.bilibili.com/video/BV16s411N7vL/" }
    ],
    steps: [
      ["摆牌", "把发展卡按1/2/3级各翻4张，贵族牌翻出人数+1张，宝石放中间。"],
      ["轮到你", "三选一：拿宝石、预留一张牌、用宝石买牌。"],
      ["怎么赢", "买牌得分和永久宝石，谁先到15分触发最后一轮，最高分赢。"]
    ]
  },
  {
    id: "carcassonne",
    icon: "🏰",
    name: "卡卡颂",
    meta: ["2-5人", "35-60分钟", "轻策略"],
    filters: ["2p", "34p", "strategy", "newbie"],
    bestFor: "适合边聊边玩，拼地图很直观，不需要记复杂规则。",
    videoLinks: [
      { title: "【开箱、教程、评价】经典的入门桌游神作——《卡卡颂：大盒版》全扩讲解", url: "https://www.bilibili.com/video/BV1PZ4y187Hf/" },
      { title: "卡卡颂｜规则讲解+试玩演示", url: "https://www.bilibili.com/video/BV1wXhRzsExF/" },
      { title: "【桌游速成班004】3分22秒讲完《卡卡颂》桌游规则", url: "https://www.bilibili.com/video/BV1ft411x7pt/" }
    ],
    steps: [
      ["翻板块", "轮流抽一块地形板，必须和已有道路、城市、草地接得上。"],
      ["放米宝", "可以把自己的小人放在刚放下的板块上，占道路、城市、修道院或草地。"],
      ["结算", "道路、城市、修道院完成就计分；最后没完成的也会补分。"]
    ]
  },
  {
    id: "azul",
    icon: "🌸",
    name: "花砖物语",
    meta: ["2-4人", "30-45分钟", "好看好上手"],
    filters: ["2p", "34p", "strategy", "newbie"],
    bestFor: "适合两个人或安静一点的小局，拍照也比较好看。",
    videoLinks: [
      { title: "花砖物语｜规则讲解+试玩演示", url: "https://www.bilibili.com/video/BV1fK9zYSEo6/" },
      { title: "一分钟成为更棒的花砖工匠！《花砖物语》【一分钟桌游进阶】01", url: "https://www.bilibili.com/video/BV1Di4y1A7ct/" },
      { title: "最强《花砖物语》玩法攻略，只此一篇，别无二处！", url: "https://www.bilibili.com/video/BV1PVpTzTEzZ/" }
    ],
    steps: [
      ["拿砖", "从工坊拿同色砖，剩下的推到中间。"],
      ["放砖", "放到自己板子的准备区，不能和同一行已完成颜色冲突。"],
      ["计分", "一行填满就上墙计分，相邻越多分越高，掉地上的砖会扣分。"]
    ]
  },
  {
    id: "catan",
    icon: "🌾",
    name: "卡坦岛",
    meta: ["3-4人", "60-90分钟", "经典交易"],
    filters: ["34p", "strategy"],
    bestFor: "适合4人认真玩一局，重点是资源交换和路线规划。",
    videoLinks: [
      { title: "卡坦岛｜规则讲解+试玩演示", url: "https://www.bilibili.com/video/BV1JzgtzdESt/" },
      { title: "【桌游速成班007】4分09秒讲完《卡坦岛》桌游规则", url: "https://www.bilibili.com/video/BV1Rb411679e/" }
    ],
    steps: [
      ["建初始点", "每人按顺序放两个村庄和道路，尽量覆盖不同资源数字。"],
      ["投骰拿资源", "轮到玩家投骰，数字对应地块产资源，相邻村庄/城市拿牌。"],
      ["建设得分", "用资源建路、村庄、城市或买发展牌，先到10分获胜。"]
    ]
  },
  {
    id: "power-grid",
    icon: "⚡",
    name: "电力公司",
    meta: ["3-5人", "90分钟+", "重策略"],
    filters: ["34p", "strategy"],
    bestFor: "适合愿意算钱、竞拍和规划路线的人，不适合纯热场。",
    steps: [
      ["竞拍电厂", "先拍卖电厂，决定你能用什么资源给多少城市供电。"],
      ["买资源建城市", "按顺序买煤、油、垃圾、铀等资源，再扩张城市网络。"],
      ["发电收钱", "用资源给城市供电并收钱，后期看谁供电城市最多。"]
    ]
  },
  {
    id: "avalon",
    icon: "🛡️",
    name: "阿瓦隆",
    meta: ["5-10人", "30-45分钟", "身份推理"],
    filters: ["5p", "story", "party"],
    bestFor: "适合多人聊天、互相怀疑、想热闹的局。",
    steps: [
      ["抽身份", "好人和坏人阵营隐藏身份，梅林知道坏人但不能暴露太明显。"],
      ["组队投票", "队长提名任务队伍，大家投票决定这队能不能出发。"],
      ["任务结算", "任务成功或失败累计到3次决定阵营胜负，坏人最后可刺杀梅林翻盘。"]
    ]
  },
  {
    id: "exploding-kittens",
    icon: "💣",
    name: "炸弹猫咪",
    meta: ["2-5人", "15分钟", "热场派对"],
    filters: ["34p", "5p", "fast", "party", "newbie"],
    bestFor: "适合4人左右快速热场，规则短，节奏快，抽牌时很有紧张感。",
    steps: [
      ["发牌", "每人先拿基础手牌和一张拆除牌，炸弹猫数量一般比人数少1张。"],
      ["轮到你", "可以先打任意数量功能牌，也可以不打；最后必须从牌堆抽一张。"],
      ["别爆炸", "抽到炸弹猫就出局，除非你有拆除牌；最后活着的人获胜。"]
    ]
  },
  {
    id: "uno",
    icon: "🃏",
    name: "UNO / 派对卡牌",
    meta: ["3-6人", "15-30分钟", "热场"],
    filters: ["34p", "5p", "fast", "party", "newbie"],
    bestFor: "适合刚到店、等朋友、生日局开场，不用严肃学规则。",
    steps: [
      ["出牌", "跟上一张同颜色或同数字/功能牌就能出。"],
      ["功能牌", "跳过、反转、加牌、变色会改变节奏。"],
      ["喊UNO", "手里剩最后一张要喊UNO，先出完的人赢。"]
    ]
  },
  {
    id: "ticket-to-ride",
    icon: "🚆",
    name: "铁路环游",
    meta: ["2-5人", "30-60分钟", "路线规划"],
    filters: ["2p", "34p", "5p", "newbie", "strategy"],
    bestFor: "适合喜欢连线路线、但不想学太复杂规则的朋友局。",
    videoLinks: [
      { title: "【桌游必修课005】5分14秒讲完《铁路环游：欧洲篇》桌游规则", url: "https://www.bilibili.com/video/BV1Hf4y1Y7LV/" },
      { title: "小学生也能听懂的《铁路环游》讲解视频来啦！还有谁没玩过这款超经典桌游？！", url: "https://www.bilibili.com/video/BV1AC516rEd5/" }
    ],
    steps: [
      ["拿目的地", "先保留能做的目的地票，别一上来拿太贪。"],
      ["攒车票", "轮流抽火车卡，尽量凑出你要修的颜色。"],
      ["铺铁轨", "满足颜色和张数就把铁路连起来，连线越关键越值分。"]
    ]
  },
  {
    id: "harmonies",
    icon: "🌿",
    name: "自然和弦",
    meta: ["1-4人", "30-45分钟", "自然拼图"],
    filters: ["2p", "34p", "newbie", "strategy"],
    bestFor: "适合喜欢摆图形、做生态连锁、节奏安静的小局。",
    steps: [
      ["拿地貌", "从公共区拿地形块，先想好自己要做山、林、田还是水。"],
      ["搭生态", "把地形块叠成合适高度，和动物需求尽量对上。"],
      ["算分", "每轮完成后看组合和目标卡，连锁越顺越容易拉开分差。"]
    ]
  },
  {
    id: "earth",
    icon: "🌎",
    name: "大地秘境",
    meta: ["1-5人", "45-90分钟", "生态引擎"],
    filters: ["2p", "34p", "5p", "strategy"],
    bestFor: "适合喜欢慢慢铺引擎、看资源连锁和分数叠加的人。",
    steps: [
      ["摆个人板", "先把植物、土壤、气候和起始资源铺开。"],
      ["做连锁", "每轮尽量让种植、补给和能力互相带动。"],
      ["看终局", "别只顾单回合效率，场景目标和连锁分都要兼顾。"]
    ]
  },
  {
    id: "las-vegas",
    icon: "🎲",
    name: "拉斯维加斯",
    meta: ["2-5人", "15-30分钟", "下注抢钱"],
    filters: ["2p", "34p", "5p", "fast", "newbie", "party"],
    bestFor: "适合轻松下注、抢赌场和看运气的人。",
    videoLinks: [
      { title: "拉斯维加斯 桌游完整规则", url: "https://www.bilibili.com/video/BV1kAHizkEsh/" },
      { title: "《拉斯维加斯》扩展板块玩法教学视频 经典赌狗桌游！", url: "https://www.bilibili.com/video/BV1iw5q6qEp8/" }
    ],
    steps: [
      ["摆赌场", "把每个赌场的牌和奖金额先摆出来。"],
      ["掷骰下注", "轮流掷同色骰子，把点数放到对应赌场。"],
      ["结算奖金", "同点数最多的人拿该赌场的钱，赌错了就空手。"]
    ]
  },
  {
    id: "incan-gold",
    icon: "💰",
    name: "印加宝藏",
    meta: ["3-8人", "20分钟", "胆量押注"],
    filters: ["34p", "5p", "fast", "party", "newbie"],
    bestFor: "适合多人一起赌胆量、每轮都想再走一步的局。",
    steps: [
      ["翻路径", "一张张翻开洞穴卡，看看这一轮会遇到什么宝物和危险。"],
      ["决定留跑", "想继续的人留下，想保分的人赶紧带着宝物撤。"],
      ["算收获", "同类危险出两次就会清场，留下的人可能一把全没。"]
    ]
  },
  {
    id: "modern-art",
    icon: "🖼️",
    name: "现代艺术",
    meta: ["3-5人", "60分钟", "拍卖博弈"],
    filters: ["34p", "strategy"],
    bestFor: "适合喜欢拍卖、猜价格、互相抬价的人。",
    steps: [
      ["摆出画作", "每位画家的作品都会进市场，价格会跟着买卖变化。"],
      ["轮流拍卖", "玩家轮流喊价或买断，谁都可能把价格推歪。"],
      ["看市场", "同一个画家卖得越多，后面作品越值钱或越难卖。"]
    ]
  },
  {
    id: "5-minute-dungeon",
    icon: "⏱️",
    name: "5分钟地牢",
    meta: ["2-5人", "5-30分钟", "实时合作"],
    filters: ["2p", "34p", "5p", "fast", "party", "newbie"],
    bestFor: "适合想要短、快、乱中带合作的热场局。",
    videoLinks: [
      { title: "桌游小屋：5分钟地牢教学", url: "https://www.bilibili.com/video/BV1pr421K77u/" },
      { title: "桌游崽儿 【5分钟地下城】桌游开箱+规则讲解 5-Minute Dungeon Board Game Unboxing and Learn to Play", url: "https://www.bilibili.com/video/BV1be4y1e7o6/" }
    ],
    steps: [
      ["选英雄", "每人拿一套英雄牌组，准备一起冲地牢。"],
      ["同步出牌", "看到怪物就一起打功能牌，尽量把门口清掉。"],
      ["打Boss", "在倒计时结束前解决最后一关，不然整局重来。"]
    ]
  },
  {
    id: "fengsheng",
    icon: "🕵️",
    name: "风声",
    meta: ["2-9人", "10-50分钟", "身份推理"],
    filters: ["34p", "5p", "story", "party"],
    bestFor: "适合多人身份对抗、猜阵营、演戏和试探的局。",
    steps: [
      ["抽身份", "先把阵营和角色分开，谁是谁先藏好。"],
      ["传信息", "通过行动和发言慢慢露出线索，别把底牌说满。"],
      ["完成目标", "看任务、保密或抓人条件，谁先完成阵营目标谁赢。"]
    ]
  },
  {
    id: "manila",
    icon: "⛴️",
    name: "马尼拉",
    meta: ["3-5人", "60分钟", "拍卖下注"],
    filters: ["34p", "strategy"],
    bestFor: "适合喜欢竞拍、押注、算赔率的人。",
    steps: [
      ["排岗位", "先把码头、船只和货物相关位置摆出来。"],
      ["下注行动", "轮流买位置、下注货物，赌船什么时候能顺利靠岸。"],
      ["结算收益", "船只到港后按货值和下注结算，押对的人赚得多。"]
    ]
  },
  {
    id: "wizard-trouble",
    icon: "🪄",
    name: "出包魔法师",
    meta: ["2-6人", "20-40分钟", "欢乐互坑"],
    filters: ["34p", "5p", "fast", "party", "newbie"],
    bestFor: "适合想互坑、想笑、又不想学太重规则的轻松局。",
    steps: [
      ["组咒语", "把手上的法术部件拼成一张完整的咒语。"],
      ["抢先手", "看清谁先出招，别让别人把关键牌抢走。"],
      ["打收尾", "爆发牌和反制牌都很重要，最后看谁还站着。"]
    ]
  },
  {
    id: "crime-scene",
    icon: "🔎",
    name: "犯罪现场",
    meta: ["1-4人", "45-60分钟", "案件推理"],
    filters: ["2p", "34p", "story", "newbie"],
    bestFor: "适合安静看线索、一起拆案件的推理局。",
    steps: [
      ["看案情", "先读案卡，搞清楚这次要破什么案。"],
      ["找证物", "对照线索和物证，慢慢排除不可能的答案。"],
      ["锁凶手", "把嫌疑人、动机和作案方式对上，最后再下结论。"]
    ]
  },
  {
    id: "ninja-night",
    icon: "🥷",
    name: "忍者之夜",
    meta: ["4-8人", "15-25分钟", "阵营对抗"],
    filters: ["5p", "fast", "party", "story"],
    bestFor: "适合多人热场、偷看身份、互相试探的短局。",
    steps: [
      ["分身份", "先把好人、坏人和特殊角色分开。"],
      ["夜晚行动", "按回合做动作，悄悄交换信息或执行技能。"],
      ["白天发言", "靠表述和投票判断谁在带节奏。"]
    ]
  },
  {
    id: "undercover-fengyun",
    icon: "🕶️",
    name: "无间风云",
    meta: ["4-8人", "20-30分钟", "卧底推理"],
    filters: ["5p", "fast", "party", "story"],
    bestFor: "适合卧底、套话、互相怀疑的桌上气氛局。",
    steps: [
      ["拿身份", "先确认谁是卧底、谁是平民。"],
      ["轮流描述", "通过词语或动作传递信息，但别暴露得太快。"],
      ["集体投票", "把最像卧底的人票掉，或者让卧底混过去。"]
    ]
  },
  {
    id: "survive",
    icon: "🌊",
    name: "骇浪求生",
    meta: ["2-4人", "45-60分钟", "逃生博弈"],
    filters: ["2p", "34p", "strategy", "party"],
    bestFor: "适合喜欢抢船、逃命、看岛屿下沉的对抗局。",
    steps: [
      ["先占位置", "开局先把人放稳，别全挤在最危险的边缘。"],
      ["一边撤一边看", "岛会不断下沉，能上船就上船，能游就先游。"],
      ["躲海怪", "别只顾赶路，海怪和灾害会让局面一下翻盘。"]
    ]
  }
];
let boardGames = defaultBoardGames.slice();

const recommendations = [
  {
    icon: "📖",
    title: "今日小说",
    text: "《嫌疑人X的献身》：适合一个人安静看，也适合等朋友时先读几章。",
    tags: ["推理", "安静回血", "新手友好"]
  },
  {
    icon: "🕵️",
    title: "今日推理",
    text: "短篇谜题适合一个人；多人可以选阿瓦隆或谁是卧底，不需要一上来就开重规则。",
    tags: ["2-4人", "轻烧脑", "规则少"]
  },
  {
    icon: "🎲",
    title: "今日桌游",
    text: "3-4人优先试璀璨宝石、卡卡颂、花砖物语；想热闹一点再选派对类。",
    tags: ["3-4人", "朋友局", "低门槛"]
  },
  {
    icon: "🎮",
    title: "今日主机",
    text: "Switch优先选多人轻松局；PS5优先选运动、赛车、格斗和合作类。",
    tags: ["主机包间", "多人合作", "先热场"]
  },
  {
    icon: "🍿",
    title: "今日补给",
    text: "2-3人适合饮品零食补给，4人以上适合小食盘，不要等玩到一半才想起来。",
    tags: ["加购", "朋友小聚", "生日局"]
  }
];

const deviceTabs = document.querySelector("#deviceTabs");
const peopleTabs = document.querySelector("#peopleTabs");
const peopleResult = document.querySelector("#peopleResult");
const peopleRecsEl = document.querySelector("#peopleRecs");
const peopleRecActionsEl = document.querySelector("#peopleRecActions");
const recommendGrid = document.querySelector("#recommendGrid");
const boardgameFiltersEl = document.querySelector("#boardgameFilters");
const boardgameCountEl = document.querySelector("#boardgameCount");
const boardgameList = document.querySelector("#boardgameList");
const viewNav = document.querySelector("#viewNav");
const heroQuicknav = document.querySelector("#heroQuicknav");
const viewSections = Array.from(document.querySelectorAll("main section[data-view]"));
const siteConfig = Object.assign({
  apiBaseUrl: "",
  ossBaseUrl: "",
  useBackendHomeImage: false,
  fallbackHeroImage: "./assets/store-hall.png"
}, window.MOYU_RX_CONFIG || {});
const viewOrder = ["people", "boardgames", "devices", "recommend"];
const boardgameFilters = [
  { id: "all", icon: "📚", label: "全部" },
  { id: "2p", icon: "👫", label: "2人" },
  { id: "34p", icon: "👥", label: "3-4人" },
  { id: "5p", icon: "🪑", label: "5人+" },
  { id: "newbie", icon: "🌱", label: "新手" },
  { id: "fast", icon: "⚡", label: "热场" },
  { id: "strategy", icon: "🧠", label: "策略" },
  { id: "story", icon: "🕵️", label: "推理" },
  { id: "party", icon: "🎉", label: "派对" }
];
let activeBoardgameFilter = "all";
let activeBoardgameId = "";
let activePeoplePlanId = "";
let expandedPeoplePlanId = "";
let boardgameDragState = null;
let suppressBoardgameClick = false;
const collapsedPeopleRecommendationLimit = 4;


function getVisibleBoardGames() {
  return boardGames.filter((game) => {
    if (activeBoardgameFilter === "all") return true;
    return Array.isArray(game.filters) && game.filters.indexOf(activeBoardgameFilter) >= 0;
  });
}

function renderBoardGameFilters() {
  boardgameFiltersEl.innerHTML = boardgameFilters.map((filter) => `
    <button class="boardgame-filter${filter.id === activeBoardgameFilter ? " is-active" : ""}" type="button" data-boardgame-filter="${filter.id}" aria-pressed="${String(filter.id === activeBoardgameFilter)}">
      <span aria-hidden="true">${filter.icon}</span>
      <span>${filter.label}</span>
    </button>
  `).join("");
}

function selectBoardGameFilter(id) {
  if (!boardgameFilters.some((filter) => filter.id === id)) {
    id = "all";
  }
  const changed = activeBoardgameFilter !== id;
  activeBoardgameFilter = id;
  if (changed) {
    activeBoardgameId = "";
  }
  renderBoardGameFilters();
  renderBoardGames();
}

function setActiveView(id, options) {
  const view = viewOrder.indexOf(id) >= 0 ? id : "people";
  viewSections.forEach((section) => {
    section.hidden = section.dataset.view !== view;
  });

  viewNav.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  if (heroQuicknav) {
    heroQuicknav.querySelectorAll("[data-view-jump]").forEach((button) => {
      const active = button.dataset.viewJump === view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  if (!options || options.updateHash !== false) {
    history.replaceState(null, "", "#" + view);
  }

  if (!options || options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderDevices() {
  deviceTabs.innerHTML = devices.map((device) => `
    <button class="device-tab" type="button" data-device="${device.id}">
      ${device.icon} ${device.label}
    </button>
  `).join("");

  deviceTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-device]");
    if (!button) return;
    selectDevice(button.dataset.device);
  });
}

function renderPeoplePlans() {
  peopleTabs.innerHTML = peoplePlans.map((plan) => `
    <button class="people-button" type="button" data-people="${plan.id}">
      ${plan.icon} ${plan.title}
    </button>
  `).join("");

  peopleTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-people]");
    if (!button) return;
    selectPeoplePlan(button.dataset.people);
  });
}

function renderPeopleRecommendations(plan) {
  const isExpanded = expandedPeoplePlanId === plan.id;
  const visibleRecommendations = isExpanded
    ? plan.recommendations
    : plan.recommendations.slice(0, collapsedPeopleRecommendationLimit);
  peopleRecsEl.innerHTML = visibleRecommendations.map((item) => {
    const tutorialAttr = item.tutorialId ? ` data-tutorial="${item.tutorialId}" data-has-tutorial="true"` : "";
    return `
      <button class="people-rec-card" type="button"${tutorialAttr}>
        <span class="people-rec-type" data-rec-type="${item.type}">${item.type}</span>
        <div>
          <strong>${item.name}</strong>
          <p>${item.desc}</p>
        </div>
      </button>
    `;
  }).join("");

  const hiddenCount = plan.recommendations.length - collapsedPeopleRecommendationLimit;
  peopleRecActionsEl.innerHTML = hiddenCount > 0 ? `
    <button class="people-rec-toggle" type="button" data-people-toggle="${isExpanded ? "collapse" : "expand"}">
      ${isExpanded ? "收起到精选推荐" : `再看 ${hiddenCount} 条推荐`}
    </button>
  ` : "";
}

function renderRecommendations() {
  recommendGrid.innerHTML = recommendations.map((item) => `
    <article class="recommend-card">
      <span class="recommend-icon" aria-hidden="true">${item.icon}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="tag-line">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderBoardGameVideos(game) {
  const videoLinks = Array.isArray(game.videoLinks) ? game.videoLinks : [];
  if (!videoLinks.length) return "";
  return `
      <div class="tutorial-videos">
        <p class="tutorial-videos-title">B站视频</p>
        <div class="tutorial-video-list">
          ${videoLinks.map((item) => `
            <a class="tutorial-video-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
              <strong>${item.title}</strong>
              <span>打开 B 站视频</span>
            </a>
          `).join("")}
        </div>
      </div>
  `;
}

function renderBoardGames() {
  const visibleGames = getVisibleBoardGames();
  boardgameCountEl.textContent = `${visibleGames.length} 款`;
  boardgameList.innerHTML = visibleGames.length ? visibleGames.map((game) => `
    <article class="boardgame-card" data-boardgame-card="${game.id}">
      <button class="boardgame-head" type="button" data-boardgame="${game.id}">
        <span class="boardgame-icon" aria-hidden="true">${game.icon}</span>
        <div>
          <h3>${game.name}</h3>
          <p>${game.bestFor}</p>
          <div class="boardgame-meta">${game.meta.map((item) => `<span>${item}</span>`).join("")}</div>
        </div>
      </button>
      <ol class="tutorial-list">
        ${game.steps.map(([title, text]) => `<li><strong>${title}：</strong>${text}</li>`).join("")}
      </ol>
      ${renderBoardGameVideos(game)}
    </article>
  `).join("") : `
    <article class="boardgame-empty">
      <h3>这里还没有内容</h3>
      <p>先换个筛选，或者把新的桌游补进库里。</p>
    </article>
  `;

  document.querySelectorAll("[data-boardgame-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.boardgameCard === activeBoardgameId);
  });
}
boardgameFiltersEl.addEventListener("click", (event) => {
  if (suppressBoardgameClick) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  const button = event.target.closest("[data-boardgame-filter]");
  if (!button) return;
  selectBoardGameFilter(button.dataset.boardgameFilter);
});

boardgameFiltersEl.addEventListener("pointerdown", (event) => {
  if (event.button !== undefined && event.button !== 0) return;
  boardgameDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startScrollLeft: boardgameFiltersEl.scrollLeft,
    moved: false,
    captured: false
  };
});

boardgameFiltersEl.addEventListener("pointermove", (event) => {
  if (!boardgameDragState || boardgameDragState.pointerId !== event.pointerId) return;
  const delta = event.clientX - boardgameDragState.startX;
  if (!boardgameDragState.moved && Math.abs(delta) > 6) {
    boardgameDragState.moved = true;
    boardgameFiltersEl.classList.add("is-dragging");
    if (!boardgameDragState.captured && boardgameFiltersEl.setPointerCapture) {
      boardgameFiltersEl.setPointerCapture(event.pointerId);
      boardgameDragState.captured = true;
    }
  }
  if (boardgameDragState.moved) {
    event.preventDefault();
    boardgameFiltersEl.scrollLeft = boardgameDragState.startScrollLeft - delta;
  }
});

function clearBoardgameDragState(event) {
  if (!boardgameDragState) return;
  if (!event || event.pointerId === boardgameDragState.pointerId) {
    if (boardgameDragState.moved) {
      suppressBoardgameClick = true;
      setTimeout(() => {
        suppressBoardgameClick = false;
      }, 120);
    }
    boardgameFiltersEl.classList.remove("is-dragging");
    boardgameDragState = null;
  }
}

boardgameFiltersEl.addEventListener("pointerup", clearBoardgameDragState);
boardgameFiltersEl.addEventListener("pointercancel", clearBoardgameDragState);
boardgameFiltersEl.addEventListener("lostpointercapture", clearBoardgameDragState);

boardgameList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-boardgame]");
  if (!button) return;
  selectBoardGame(button.dataset.boardgame);
});

function selectPeoplePlan(id) {
  const plan = peoplePlans.find((item) => item.id === id) || peoplePlans[1] || peoplePlans[0];
  const changed = activePeoplePlanId !== plan.id;
  activePeoplePlanId = plan.id;
  if (changed) {
    expandedPeoplePlanId = "";
  }
  document.querySelector("#peopleIcon").textContent = plan.icon;
  document.querySelector("#peopleTitle").textContent = plan.title;
  document.querySelector("#peopleText").textContent = plan.text;
  document.querySelector("#peopleTags").innerHTML = plan.tags.map((tag) => `<span>${tag}</span>`).join("");
  renderPeopleRecommendations(plan);

  document.querySelectorAll("[data-people]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.people === plan.id);
  });
}

function selectBoardGame(id, options) {
  const game = boardGames.find((item) => item.id === id);
  if (!game) return;
  if (activeBoardgameFilter !== "all" && (!Array.isArray(game.filters) || game.filters.indexOf(activeBoardgameFilter) < 0)) {
    activeBoardgameFilter = "all";
    renderBoardGameFilters();
    renderBoardGames();
  }
  activeBoardgameId = game.id;
  document.querySelectorAll("[data-boardgame-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.boardgameCard === game.id);
  });
  if (options && options.scrollIntoView) {
    const selectedCard = document.querySelector(`[data-boardgame-card="${game.id}"]`);
    if (selectedCard) {
      selectedCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}


function withOssPrefix(src) {
  if (!src) return "";
  const trimmed = String(src).trim();
  if (!trimmed) return "";
  if (trimmed.indexOf("http://moyuhuashui.oss-cn-shenzhen.aliyuncs.com/") === 0) {
    return trimmed.replace("http://moyuhuashui.oss-cn-shenzhen.aliyuncs.com/", "https://moyuhuashui.oss-cn-shenzhen.aliyuncs.com/");
  }
  if (trimmed.indexOf("http://") === 0 || trimmed.indexOf("https://") === 0) {
    return trimmed;
  }
  if (siteConfig.ossBaseUrl) {
    return siteConfig.ossBaseUrl.replace(/\/$/, "") + "/" + trimmed.replace(/^\//, "");
  }
  return trimmed;
}

function parseRemoteJsonConfig(rawValue, configKey) {
  if (typeof rawValue !== "string") return null;
  const trimmed = rawValue.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch (error) {
    console.warn("[moyu-rx] " + configKey + " JSON 解析失败", error);
    return undefined;
  }
}

function toTextArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

function normalizeBoardGameSteps(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (Array.isArray(item)) {
      const title = String(item[0] || "").trim();
      const text = String(item[1] || "").trim();
      return title && text ? [title, text] : null;
    }
    if (item && typeof item === "object") {
      const title = String(item.title || "").trim();
      const text = String(item.text || item.desc || "").trim();
      return title && text ? [title, text] : null;
    }
    return null;
  }).filter(Boolean);
}

function normalizeBoardGameVideoLinks(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const title = String(item.title || "").trim();
    const url = String(item.url || "").trim();
    return title && url ? { title, url } : null;
  }).filter(Boolean);
}

function normalizeBoardGamesConfig(value) {
  if (!Array.isArray(value)) return null;
  const seenIds = new Set();
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const id = String(item.id || "").trim();
    const name = String(item.name || "").trim();
    if (!id || !name || seenIds.has(id)) return null;
    seenIds.add(id);
    return {
      id,
      icon: String(item.icon || "🎲").trim() || "🎲",
      name,
      meta: toTextArray(item.meta),
      filters: toTextArray(item.filters),
      bestFor: String(item.bestFor || "").trim(),
      videoLinks: normalizeBoardGameVideoLinks(item.videoLinks),
      steps: normalizeBoardGameSteps(item.steps)
    };
  }).filter(Boolean);
}

function applyRemoteBoardGames(rawValue) {
  let normalized = normalizeBoardGamesConfig(rawValue);
  if (!normalized && typeof rawValue === "string") {
    const parsed = parseRemoteJsonConfig(rawValue, "rx_boardgames_json");
    if (parsed === undefined || parsed === null) return;
    normalized = normalizeBoardGamesConfig(parsed);
  }
  if (!normalized || !normalized.length) {
    return;
  }
  boardGames = normalized;
  if (activeBoardgameId && !boardGames.some((item) => item.id === activeBoardgameId)) {
    activeBoardgameId = "";
  }
  renderBoardGames();
}

function applyRemoteHeroImage(data) {
  if (!siteConfig.useBackendHomeImage || !data || typeof data !== "object") return;
  const image = [
    data.home_page_image0,
    data.home_page_image1,
    data.home_page_image2,
    data.home_page_image3
  ].map(withOssPrefix).find(Boolean);
  if (image) {
    document.querySelector("#heroImage").src = image;
  }
}

async function loadRemoteConfig() {
  if (!siteConfig.apiBaseUrl || !window.fetch) return;
  try {
    const endpoint = siteConfig.apiBaseUrl.replace(/\/$/, "") + "/config/";
    const response = await fetch(endpoint, { method: "GET" });
    if (!response.ok) return;
    const payload = await response.json();
    const data = payload && payload.data ? payload.data : payload;
    applyRemoteHeroImage(data);
    applyRemoteBoardGames(data.rx_boardgames);
    if (!Array.isArray(data.rx_boardgames) || !data.rx_boardgames.length) {
      applyRemoteBoardGames(data.rx_boardgames_json);
    }
  } catch (error) {
    if (siteConfig.useBackendHomeImage) {
      document.querySelector("#heroImage").src = siteConfig.fallbackHeroImage;
    }
  }
}

function selectDevice(id) {
  const device = devices.find((item) => item.id === id) || devices[0];
  document.querySelector("#deviceIcon").textContent = device.icon;
  document.querySelector("#deviceSub").textContent = device.sub;
  document.querySelector("#deviceTitle").textContent = device.title;
  document.querySelector("#deviceTip").textContent = device.tip;
  document.querySelector("#deviceSteps").innerHTML = device.steps
    .map(([title, text]) => `<li><strong>${title}</strong><p>${text}</p></li>`)
    .join("");
  document.querySelector("#deviceExtra").innerHTML = (device.extras || [])
    .map((section) => `
      <section class="device-extra-card">
        <h4>${section.title}</h4>
        <div class="device-extra-list">
          ${section.items.map((item) => `
            <div class="device-extra-item">
              <strong>${item.title}</strong>
              <p>${item.desc}</p>
            </div>
          `).join("")}
        </div>
      </section>
    `)
    .join("");

  document.querySelectorAll("[data-device]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.device === device.id);
  });
}

function initFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const device = params.get("device");
  const people = params.get("people");
  const boardgame = params.get("boardgame");
  const view = params.get("view") || (window.location.hash ? window.location.hash.replace(/^#/, "") : "");
  const resolvedView = viewOrder.indexOf(view) >= 0 ? view : (boardgame ? "boardgames" : device ? "devices" : people ? "people" : "people");
  selectPeoplePlan(people || "duo");
  selectDevice(device || "quick");
  if (boardgame) selectBoardGame(boardgame);
  return resolvedView;
}

if (heroQuicknav) {
  heroQuicknav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view-jump]");
    if (!button) return;
    setActiveView(button.dataset.viewJump);
  });
}

peopleResult.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-people-toggle]");
  if (toggle) {
    if (!activePeoplePlanId) return;
    expandedPeoplePlanId = expandedPeoplePlanId === activePeoplePlanId ? "" : activePeoplePlanId;
    const plan = peoplePlans.find((item) => item.id === activePeoplePlanId);
    if (plan) {
      renderPeopleRecommendations(plan);
    }
    return;
  }

  const card = event.target.closest("[data-tutorial]");
  if (!card) return;
  setActiveView("boardgames");
  selectBoardGame(card.dataset.tutorial, { scrollIntoView: true });
});

viewNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  setActiveView(button.dataset.view);
});

window.addEventListener("hashchange", () => {
  const view = window.location.hash ? window.location.hash.replace(/^#/, "") : "";
  if (viewOrder.indexOf(view) >= 0) {
    setActiveView(view, { scroll: false, updateHash: false });
  }
});

renderDevices();
renderPeoplePlans();
renderRecommendations();
renderBoardGameFilters();
renderBoardGames();
setActiveView(initFromQuery(), { scroll: false, updateHash: false });
loadRemoteConfig();

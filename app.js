const moods = [
  {
    id: "quiet",
    icon: "🍵",
    label: "安静回血",
    place: "图书角 / 大厅沙发",
    time: "60-120分钟",
    people: "1-2人",
    actions: [
      "先找一本漫画或轻小说坐下，不用急着开局。",
      "想玩一点就选短时轻桌游，规则越少越好。",
      "朋友到了再转包间或大厅桌游位。"
    ]
  },
  {
    id: "laugh",
    icon: "😄",
    label: "想笑一下",
    place: "大厅圆桌 / 主机包间",
    time: "90-180分钟",
    people: "2-4人",
    actions: [
      "优先选派对、合作、对抗类游戏。",
      "Switch轻松开局，PS适合运动、格斗、赛车类。",
      "桌游选新手友好款，先玩一局短的。"
    ]
  },
  {
    id: "easy",
    icon: "🛋️",
    label: "不想动脑",
    place: "大厅 / 双人轻玩位",
    time: "60-120分钟",
    people: "1-3人",
    actions: [
      "不要选重策略，选节奏快、失败也好笑的玩法。",
      "可以先看漫画、喝点东西，再决定要不要开包间。",
      "想玩主机就让店员直接开一个低门槛游戏。"
    ]
  },
  {
    id: "friends",
    icon: "🎮",
    label: "朋友小聚",
    place: "包间 / 大厅桌游位",
    time: "120-180分钟",
    people: "3-4人",
    actions: [
      "先确认想热闹还是想轻松，再选主机或桌游。",
      "4人以内包间更舒服，人多就用大厅桌游位。",
      "可以加饮品零食补给，体验会完整很多。"
    ]
  },
  {
    id: "mystery",
    icon: "🕵️",
    label: "推理一下",
    place: "图书角 / 桌游位",
    time: "60-150分钟",
    people: "1-4人",
    actions: [
      "一个人适合短篇推理、小说和小谜题。",
      "多人可以从阿瓦隆、谁是卧底这类轻身份局开始。",
      "想要店员推荐，直接说“给我一个推理轻局”。"
    ]
  },
  {
    id: "release",
    icon: "⚡",
    label: "发泄一下",
    place: "主机包间",
    time: "60-120分钟",
    people: "1-4人",
    actions: [
      "优先选运动、赛车、格斗、节奏类游戏。",
      "声音和体感动作注意别影响隔壁客人。",
      "玩累了可以切到漫画或大厅休息。"
    ]
  },
  {
    id: "birthday",
    icon: "🎂",
    label: "生日小局",
    place: "生日包间 / 朋友局包间",
    time: "120-180分钟",
    people: "2-4人",
    actions: [
      "先选包间，再加轻布置、小食和拍照道具。",
      "游戏选不用学习很久的，多留时间聊天拍照。",
      "可以让店员按人数推荐适合的主机或桌游。"
    ]
  }
];

const devices = [
  {
    id: "quick",
    icon: "⚡",
    label: "快速",
    sub: "先试这三步",
    title: "快速排查",
    tip: "还是没反应，直接叫店员，别反复拔插设备线。",
    steps: [
      ["看电源", "小米电视、PS5或Switch确认已经亮灯。"],
      ["换信号源", "电视遥控器按输入源，切到HDMI1或HDMI2。"],
      ["连手柄", "PS5按PS键，Switch按HOME键，没反应就靠近主机再试。"]
    ]
  },
  {
    id: "ps5",
    icon: "🎮",
    label: "PS5",
    sub: "主机和光盘",
    title: "PS5怎么开",
    tip: "竖放PS5放光盘时，光盘印刷面朝左，亮面朝右，不要硬推。",
    steps: [
      ["开机", "按主机电源键，或按手柄中间PS键。"],
      ["连接手柄", "手柄没反应用USB线连主机，再按PS键。"],
      ["放光盘", "竖放机器时，印刷面朝左，亮面朝右；方向不对请退出重放。"],
      ["没声音", "先看电视音量，再确认PS5声音输出没有被切到耳机。"]
    ]
  },
  {
    id: "switch",
    icon: "🕹️",
    label: "Switch",
    sub: "手柄和游戏卡",
    title: "Switch怎么用",
    tip: "换游戏卡前先回到HOME并关闭当前软件，卡带拿出后请放回原盒。",
    steps: [
      ["开机", "按Switch主机或手柄HOME键，等待电视画面出现。"],
      ["竖握", "左右Joy-Con装在握把上时，按L/R确认。"],
      ["横握", "单只Joy-Con横着拿时，用内侧SL/SR键确认。"],
      ["插卡", "游戏卡槽在机器上方，标签面朝屏幕方向，轻按到位即可。"]
    ]
  },
  {
    id: "tv",
    icon: "📺",
    label: "电视",
    sub: "小米电视",
    title: "小米电视",
    tip: "电视遥控器找不到时，先看桌面或设备柜；别用主机线当开关。",
    steps: [
      ["开电视", "按小米遥控器电源键，等待首页或无信号画面。"],
      ["选输入源", "按遥控器输入源，选择HDMI1或HDMI2。"],
      ["调声音", "电视音量优先，游戏内声音再检查。"],
      ["无信号", "确认主机亮灯，再换另一个HDMI输入源试一次。"]
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

const boardGames = [
  {
    id: "splendor-duel",
    icon: "💎",
    name: "璀璨宝石 双人对决版",
    meta: ["2人", "30分钟", "双人对抗"],
    bestFor: "适合两个人认真对局，抢资源和卡牌的互动更强。",
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
    bestFor: "适合两个人安静对局，比普通版更聚焦双人博弈。",
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
    bestFor: "适合朋友小局，规则简单，越玩越容易上头。",
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
    bestFor: "适合边聊边玩，拼地图很直观，不需要记复杂规则。",
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
    bestFor: "适合两个人或安静一点的小局，拍照也比较好看。",
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
    bestFor: "适合4人认真玩一局，重点是资源交换和路线规划。",
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
    bestFor: "适合刚到店、等朋友、生日局开场，不用严肃学规则。",
    steps: [
      ["出牌", "跟上一张同颜色或同数字/功能牌就能出。"],
      ["功能牌", "跳过、反转、加牌、变色会改变节奏。"],
      ["喊UNO", "手里剩最后一张要喊UNO，先出完的人赢。"]
    ]
  }
];

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

const moodGrid = document.querySelector("#moodGrid");
const deviceTabs = document.querySelector("#deviceTabs");
const peopleTabs = document.querySelector("#peopleTabs");
const recommendGrid = document.querySelector("#recommendGrid");
const boardgameList = document.querySelector("#boardgameList");
const siteConfig = Object.assign({
  apiBaseUrl: "",
  ossBaseUrl: "",
  useBackendHomeImage: false,
  fallbackHeroImage: "./assets/store-hall.png"
}, window.MOYU_RX_CONFIG || {});

function renderMoods() {
  moodGrid.innerHTML = moods.map((mood) => `
    <button class="mood-button" type="button" data-mood="${mood.id}">
      <span aria-hidden="true">${mood.icon}</span>
      <strong>${mood.label}</strong>
    </button>
  `).join("");

  moodGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mood]");
    if (!button) return;
    selectMood(button.dataset.mood);
  });
}

function selectMood(id) {
  const mood = moods.find((item) => item.id === id) || moods[0];
  document.querySelector("#resultIcon").textContent = mood.icon;
  document.querySelector("#resultTitle").textContent = mood.label;
  document.querySelector("#resultPlace").textContent = mood.place;
  document.querySelector("#resultTime").textContent = mood.time;
  document.querySelector("#resultPeople").textContent = mood.people;
  document.querySelector("#resultActions").innerHTML = mood.actions
    .map((action) => `<li>${action}</li>`)
    .join("");

  document.querySelectorAll("[data-mood]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mood === mood.id);
  });
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

function renderBoardGames() {
  boardgameList.innerHTML = boardGames.map((game) => `
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
    </article>
  `).join("");

  boardgameList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-boardgame]");
    if (!button) return;
    selectBoardGame(button.dataset.boardgame, { showPanel: false });
  });
}

function selectPeoplePlan(id) {
  const plan = peoplePlans.find((item) => item.id === id) || peoplePlans[1];
  document.querySelector("#peopleIcon").textContent = plan.icon;
  document.querySelector("#peopleTitle").textContent = plan.title;
  document.querySelector("#peopleText").textContent = plan.text;
  document.querySelector("#peopleTags").innerHTML = plan.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.querySelector("#peopleRecs").innerHTML = plan.recommendations.map((item) => {
    const attr = item.tutorialId ? ` data-tutorial="${item.tutorialId}"` : "";
    return `
      <button class="people-rec-card" type="button"${attr}>
        <span class="people-rec-type">${item.type}</span>
        <div>
          <strong>${item.name}</strong>
          <p>${item.desc}</p>
        </div>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-people]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.people === plan.id);
  });

  document.querySelector("#peopleRecs").onclick = (event) => {
    const card = event.target.closest("[data-tutorial]");
    if (!card) return;
    selectBoardGame(card.dataset.tutorial, { showPanel: true });
  };
}

function selectBoardGame(id, options) {
  const game = boardGames.find((item) => item.id === id);
  if (!game) return;
  document.querySelector("#tutorialIcon").textContent = game.icon;
  document.querySelector("#tutorialTitle").textContent = game.name;
  document.querySelector("#tutorialBestFor").textContent = game.bestFor;
  document.querySelector("#tutorialMeta").innerHTML = game.meta.map((item) => `<span>${item}</span>`).join("");
  document.querySelector("#tutorialSteps").innerHTML = game.steps
    .map(([title, text]) => `<li><strong>${title}：</strong>${text}</li>`)
    .join("");
  document.querySelector("#tutorialPanel").hidden = false;

  document.querySelectorAll("[data-boardgame-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.boardgameCard === game.id);
  });

  if (options && options.showPanel) {
    document.querySelector("#tutorialPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
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

async function loadBackendHeroImage() {
  if (!siteConfig.useBackendHomeImage || !siteConfig.apiBaseUrl || !window.fetch) return;
  try {
    const endpoint = siteConfig.apiBaseUrl.replace(/\/$/, "") + "/config/";
    const response = await fetch(endpoint, { method: "GET" });
    if (!response.ok) return;
    const payload = await response.json();
    const data = payload && payload.data ? payload.data : payload;
    const image = [
      data.home_page_image0,
      data.home_page_image1,
      data.home_page_image2,
      data.home_page_image3
    ].map(withOssPrefix).find(Boolean);
    if (image) {
      document.querySelector("#heroImage").src = image;
    }
  } catch (error) {
    document.querySelector("#heroImage").src = siteConfig.fallbackHeroImage;
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

  document.querySelectorAll("[data-device]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.device === device.id);
  });
}

function initFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const mood = params.get("mood");
  const device = params.get("device");
  const people = params.get("people");
  const boardgame = params.get("boardgame");
  selectMood(mood || "quiet");
  selectPeoplePlan(people || "duo");
  selectDevice(device || "quick");
  if (boardgame) selectBoardGame(boardgame, { showPanel: true });
}

renderMoods();
renderDevices();
renderPeoplePlans();
renderRecommendations();
renderBoardGames();
initFromQuery();
loadBackendHeroImage();

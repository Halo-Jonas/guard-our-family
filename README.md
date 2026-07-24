# 守护家人 · Guard Our Family

> 一份面向**中老年人**的**反诈骗 · 反谣言科普幻灯片**。手绘绘本风格，配吉祥物「查查爷爷」带讲，含「点击揭晓」互动练习。**纯静态、零依赖，下载后双击 `index.html` 即可离线放映。**
>
> 关键词：反诈骗科普 · 老年人防骗 · 假消息识别 · 媒体素养 · anti-scam · anti-fraud · elderly · misinformation · media-literacy

面对越来越逼真的骗术（AI 生成的假新闻、换脸视频、拟声电话……），我们最想守护的，往往是家里那几位不太懂技术的长辈。这个项目把「怎么识别、怎么应对」做成**看得懂、坐得住、能上手练**的科普幻灯片——给爸妈看，也方便志愿者、社区、老年大学拿去讲。

当前这一份聚焦**「假消息 / 谣言」的识别**（含常见诈骗话术），核心口诀是 **停 · 看 · 查 · 问 · 不转**。往后会陆续补充更多反诈主题（如 AI 换脸视频、拟声电话冒充亲友等）。

> 核心理念：不要求人人立刻辨别真假，而是养成一个安全习惯——**看不准没关系，先不转就赢了一半。**

---

## 🚀 怎么用（给观众 / 讲解者）

**下载整个文件夹，双击 `index.html`** 就能像放映一样使用，无需联网、无需安装任何东西。

- **翻页**：点屏幕两侧的大圆箭头 `‹ ›`；或按键盘 `←` `→`；手机上左右滑动；底部小圆点可直接跳到某页。
- **练习题**：练习页上点橙色「👆 点我看破绽」按钮，答案才展开——适合现场先让大家猜、再揭晓。
- **全屏放映**：按 `F11`（Windows）效果最好。
- 想直接看某一页：地址后面加 `#页码`，例如 `index.html#16` 直接打开第 16 页。

> 也可以只打开某一页单独看：`slides/` 里每个 HTML 都能独立双击打开。

---

## 🧩 项目结构

```
guard-our-family/
├── index.html          ← 播放器外壳：双击这个启动，按顺序加载所有页面
├── slides.js           ← 【页面清单】唯一的“目录”文件，增删/排序页面只改这里
├── assets/
│   ├── style.css       ← 所有页面共用的样式（改配色/字号就改这里，全局生效）
│   └── slide.js        ← 每页都引入的小助手（在外壳里转发键盘/滑动操作）
├── slides/             ← 26 个独立页面，一页一个 HTML，可单独打开
│   ├── 01-cover.html
│   ├── 02-why-hard.html
│   └── … 一直到 26-closing.html
├── images/             ← 所有插图（PNG），全部用 AI 生成，提示词见文末
├── LICENSE             ← MIT 许可
└── README.md           ← 就是本文件
```

### 为什么这样设计？（可维护 / 可共享）

- **一页一个文件**：每个 `slides/*.html` 都是**完整独立**的网页，只引用共用样式，**不依赖任何其它页面**。所以随便删掉某几页，其余页面都照常工作。
- **清单与内容分离**：页面的顺序和启用与否，全部集中在 `slides.js` 一个文件里。增删改排序只动这一行，不用碰播放器逻辑。
- **样式单一来源**：所有视觉风格集中在 `assets/style.css`。改一次，26 页统一变。
- **纯静态、零依赖**：没有框架、不用打包、不用服务器。任何人下载 zip、双击即用，也方便放到 GitHub Pages。

---

## 🛠️ 怎么维护（给协作者）

### ✏️ 改某一页的文字 / 图片
直接编辑 `slides/` 下对应的 HTML 文件即可（可双击单独打开预览）。找页很方便——文件名和 `slides.js` 里的标题都能对上。

### ➕ 加一页
1. 复制一个现成的 `slides/xx-*.html` 当模板，改成你的内容，存成新文件（建议延续 `编号-名字.html` 命名，如 `27-new-topic.html`）。
2. 打开 `slides.js`，在数组里想要的位置**加一行**：
   ```js
   { file: "27-new-topic.html", title: "新话题标题" },
   ```
3. 完成。刷新 `index.html` 就能看到。

> 页面模板骨架（复制即用）：
> ```html
> <!DOCTYPE html>
> <html lang="zh-CN">
> <head>
> <meta charset="UTF-8">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> <title>新页标题 · 假消息判断指南</title>
> <link rel="stylesheet" href="../assets/style.css">
> </head>
> <body>
>   <section class="slide">
>     <div class="slide-inner">
>       <!-- 你的内容 -->
>     </div>
>   </section>
> <script src="../assets/slide.js"></script>
> </body>
> </html>
> ```

### ➖ 删一页（推荐做法）
打开 `slides.js`，把那一行**删掉**（或前面加 `//` 注释掉）即可。这一页就从放映里消失，其余页面完全不受影响。
> 也可以顺手把 `slides/` 里对应的 HTML 文件删掉。**万一忘了删文件、也不影响**——但如果反过来只删了文件、`slides.js` 里还留着那一行，放映到该页时会显示一个友好的「这一页暂时打不开」提示，跟着提示把清单里那行删掉就好。

### ↕️ 调整顺序
在 `slides.js` 里上下挪动对应的行即可。

### 🎨 改配色 / 字号 / 整体风格
编辑 `assets/style.css`。顶部 `:root` 里是主色板（蓝、暖橙、红、绿等），改一处，全 26 页统一生效。

> ⚠️ 小提示：浏览器对本地文件（`file://`）缓存较凶。改完 `slides.js` 或样式后如果没变化，按 `Ctrl+F5` 强制刷新，或关掉标签页重开。

---

## 📑 每页内容概要（共 26 页）

| # | 文件 | 内容 |
|---|------|------|
| 1 | `01-cover.html` | **封面**——标题 + 老两口举放大镜看手机，点题「先不转就赢了一半」 |
| 2 | `02-why-hard.html` | 为什么假消息越来越难认：AI 能造图造声、盖红章 |
| 3 | `03-six-tricks.html` | **六大套路总览**（一页速览，后面逐个展开） |
| 4 | `04-trick-authority.html` | 套路①**假借权威**——「某老院长说」到底是谁说 |
| 5 | `05-trick-photo.html` | 套路②**一图编故事**——图片只证明有这张图 |
| 6 | `06-trick-scare.html` | 套路③**危言耸听**——越吓人越要冷静 |
| 7 | `07-trick-forward.html` | 套路④**道德绑架转发**——「不转不是中国人」 |
| 8 | `08-trick-oldnews.html` | 套路⑤**旧闻翻新**——今天收到≠今天发生 |
| 9 | `09-trick-selling.html` | 套路⑥**最后卖货**——前面讲健康后面让付款 |
| 10 | `10-health-baseline.html` | 健康安全底线——停药换药拒绝就医，先别照做 |
| 11 | `11-ask-ai.html` | 用魔法打败魔法——让 AI 帮你查证 |
| 12 | `12-ai-prompt.html` | **可复制的 AI 核实提问**（大字卡片，方便照抄） |
| 13 | `13-recheck.html` | 问完 AI 再做三次检查（有没有给来源等） |
| 14 | `14-channels.html` | 官方辟谣渠道（微信谣言过滤器 / 联合辟谣平台） |
| 15 | `15-keywords.html` | 搜索时关键词怎么写 |
| 16 | `16-mantra.html` | **核心口诀：停 · 看 · 查 · 问 · 不转**（深色满页） |
| 17 | `17-rhyme.html` | 顺口溜（一吓人先别信…） |
| 18 | `18-quiz-demo.html` | 找茬**示范题**——带做一遍怎么找破绽 |
| 19 | `19-quiz-prize.html` | 练习①**中奖诈骗**（点击揭晓答案） |
| 20 | `20-quiz-impersonate.html` | 练习②**冒充子女要钱**（点击揭晓答案） |
| 21 | `21-quiz-qrcode.html` | 练习③**扫码领补贴**（点击揭晓答案） |
| 22 | `22-quiz-health.html` | 练习④**神药停西药**（点击揭晓答案） |
| 23 | `23-more-drills.html` | 再练两条（真图配错地点 / 养生文卖货） |
| 24 | `24-six-steps.html` | 现场查一条的六步流程 |
| 25 | `25-bottom-line.html` | 最重要的底线——不确定就先不转 |
| 26 | `26-closing.html` | 结束语——不造谣、不信谣、不传谣 + 温馨全家福 |

---

## 🎨 插图与生成提示词（gpt-image-2）

所有插图都是用 **Azure `gpt-image-2`** 生成的，统一「暖色手绘绘本风、圆润粗线条、蓝白点缀、无文字」。

**画风统一的关键做法**：先生成吉祥物基准形象 `mascot.png`，之后每张图都把它作为**参考图**（`-i mascot.png`）传入，让「查查爷爷」在各页保持同一张脸、同一套蓝马甲。生成命令形如：

```bash
python generate_image.py "……提示词……" -i images/mascot.png -o images/xxx.png -q high -s 1536x1024
```

> 下面每条给的是提示词要点（英文原词生成效果最稳定）。想复刻或替换某张图，照着改即可。基准吉祥物 `mascot.png` 不带 `-i`、用 `1024x1024` 单独生成。

| 图片文件 | 用在 | 提示词要点（英文） |
|----------|------|-------------------|
| `mascot.png` | 吉祥物基准（全场复用） | Friendly elderly Chinese grandpa detective mascot, round reading glasses, kind smile, white hair & short beard, holding a big magnifying glass, soft blue vest over white shirt, rounded thick outlines, cozy picture-book style, blue-and-white accents, clean off-white background, no text, full body, centered |
| `cover.png` | 封面 | The same grandpa + a kind grandma on a cozy sofa, both leaning in looking curiously at a big smartphone, grandpa holding magnifying glass to the phone, warm living room, empty space upper area for title, wide, no text |
| `trick1_authority.png` | 第 2、4 页 | Fake-authority health rumor: a glowing phone shows a blurry faceless doctor avatar in white coat + a red official stamp, a big question mark where the doctor's name should be, a worried elder looks at it, no text |
| `trick2_photo.png` | 第 5 页 | "One photo, whole story made up": one innocent photo on a phone, around it several fake speech bubbles / identities (vacation, speech, chef, scientist, superhero) reusing the same picture, gently humorous, no text |
| `trick3_scare.png` | 第 6 页 | Scare tactics: a phone bursting with red exclamation marks, flames, shocked emoji; the calm grandpa mascot stands beside it unbothered, humorous contrast, no text |
| `trick4_forward.png` | 第 7 页 | Moral-kidnapping forwarding: a phone with many forwarding arrows spreading to green group-chat bubbles, guilt-tripping hearts / hooks, a gentle grandma hesitates with finger on chin, no text |
| `trick5_oldnews.png` | 第 8 页 | Old news repackaged: an old yellowed newspaper wrapped in shiny new gift wrapping with a red "today/urgent" ribbon, a wall calendar flipping through different years, dusty old papers nearby, no text |
| `trick6_selling.png` | 第 9 页 | Health article turning into a sales pitch: a long scroll—top has friendly health icons (heart, vegetables), bottom suddenly becomes an ad with supplement bottles, a QR code, a price tag; grandpa raises an eyebrow, no text |
| `health_line.png` | 第 10 页 | Health safety bottom-line: grandpa raises an open palm "stop" gesture protecting an elder; behind, a real doctor in white coat at a proper hospital, and a crossed-out sketchy salesman offering suspicious pills, reassuring, no text |
| `ask_ai.png` | 第 11、13 页 | Using AI to fact-check: grandpa holding a phone showing a friendly glowing AI robot with a checkmark + magnifying glass; a small thought bubble shows the AI can also be unsure; hopeful "magic vs magic" tone, no text |
| `channels.png` | 第 14 页 | Official rumor-debunking channels: grandpa pointing at a screen showing a trustworthy official verification site with a big blue shield + checkmark and a search bar, small official-building icons around, no text |
| `mantra_guide.png` | 第 16 页 | Grandpa as a cheerful guide giving a thumbs up, big warm smile, holding magnifying glass, soft sparkles, **empty space on the LEFT** for large text, no text |
| `exercise.png` | 第 18 页 | Spot-the-problem: grandpa using magnifying glass to inspect a suspicious chain message on a big phone, red circles highlighting the suspicious parts (faceless doctor, urgent clock, forwarding arrow), playful detective tone, no text |
| `quiz_prize.png` | 第 19 页 | Lottery-prize scam: a flashy "You Won!" phone screen with confetti, trophy, money bag, but a sneaky hook reaches out to grab a bank card; grandpa beside it looking skeptical, no text |
| `quiz_impersonate.png` | 第 20 页 | Impersonation scam: worried grandma holding a phone with an urgent money-asking chat; behind, a masked shadowy figure secretly puppeteering a "fake child", cautionary, no text |
| `quiz_qrcode.png` | 第 21 页 | Fake subsidy QR scam: a phone with a fake red government seal + QR code, a ticking alarm clock urging hurry, a sneaky hand hiding an ID card & bank card; grandpa raises "stop" palm, no text |
| `quiz_health.png` | 第 22 页 | Miracle-cure scam: a sneaky salesman presenting a golden bottle of fake "miracle pills" and sweeping away real prescription medicine; grandpa shakes his head no and points to a trustworthy real doctor, no text |
| `ending.png` | 第 26 页 | Heartwarming closing: grandpa + grandma with their happy family (children & grandchildren) all smiling, a protective checkmark shield over the whole family, cozy warm tone, no text |

---

## 📜 内容来源与许可

- 代码与文档采用 **[MIT 许可](LICENSE)**：可自由使用、修改、分发，包括商用，只需保留版权与许可声明。
- 文案基于《微信群假消息快速判断指南》整理改编，面向中老年读者做了口语化和互动化处理。
- 插图由 AI（gpt-image-2）生成。
- 特别欢迎用于社区科普、老年大学、家庭讲解等公益场景，也欢迎二次创作与再分享。
- 也欢迎贡献更多反诈主题（AI 换脸、拟声电话等）——沿用同一套播放器和绘本风格即可，做法见上方维护说明。

> **不造谣，不信谣，不传谣。守护自己，也守护家人和朋友。**

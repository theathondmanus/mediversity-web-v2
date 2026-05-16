# Hero 图片视觉方向（AI 生图标准）

> **本文档承载 owner（章逊）对 Mediversity 官网视觉的明确决策。** 视觉决策权在 owner，本文档是 AI 协作者（Manus / 未来其他 AI）执行 AI 生图任务时的强制参考。
>
> **背景**：2026-05-16 章逊对 5-15 PR #33 / #40 新一批 `hero/*.webp` 不满意，**章逊明确表示 4-21 早期原型站（`mediversity-kbq5lyhh.manus.space`）那 5 张图风格非常优秀，是 Mediversity 官网视觉的质量标杆**。本文档总结出该差异的本质原因 + 给后续 AI 图片生成的执行标准。
>
> 适用范围：mediversity-web-v2 仓库所有 hero / banner / 大图位的 AI 生图任务。

---

## 一、🟢 原型期 5 张图 = 视觉质量标杆

**章逊评价**：这 5 张图当时一眼就让人觉得"对，这就是 Mediversity 该有的样子"——人物、场景、叙事、调性全都到位，是真正能代表品牌的好图。

| 图 | 场景内容 | 业务对应 |
|---|---|---|
| **hero-main** | 医院走廊里医护团队交谈，华人女医生 + 资深男士面对面笑着交流 | 整体国际化医疗 |
| **about-team** | 9 人团队站玻璃幕墙办公室聊天，多种族男女混合 | 团队展示 |
| **programs-medical-english** | 西方导师在白板前讲 "Medical English: Patient Communication"，4 个东亚学员听课 | 医学英语培训 |
| **programs-navigator** | 华人咨询师拿 iPad 给一对中老年夫妇讲解，墙上有人体解剖图 | 跨境医疗导航 |
| **programs-observership** | 两位医学生在 "Royal London Hospital Observation Gallery" 玻璃后观摩手术，09:30 在墙上 | 海外医院观摩 |

### 5 张图全部命中 7 个共性特质

1. ✅ 每张有人（2-9 个不等）
2. ✅ 有正在发生的动作 / 对话（不是摆拍）
3. ✅ **一个具体场景 = 一个完整故事**
4. ✅ 多元化自然呈现（种族 / 年龄 / 性别 / 角色）
5. ✅ 真实医疗 / 教育 / 办公环境（不是奢华空间）
6. ✅ 暖光为主，不戏剧化
7. ✅ **画面里的可读细节服务业务叙事**（白板写课程主题、墙上挂解剖图、可读的英国医院招牌）

→ 每张图能独立看懂 **"这家公司做什么"**

### 3 个值得长期保留的高级技巧

原型 5 张图踩中的 3 个"很少有 AI 生图懂得用"的技巧：
- **可读招牌叙事**：让画面里出现的英文白板 / 招牌 / 文档承载业务信息
- **角色身份明示**：白大褂 / iPad / 听诊器选择性使用，人物职业身份清晰
- **冷暖光对比**：医院走廊那张的左暖右冷自然光、observership 的手术室冷蓝+观摩区暖光

---

## 二、🔴 当前 hero/*.webp 10 张为什么不行

5/16 凌晨 PR #33 / #40 自托管的 10 张 hero（`public/images/hero/*.webp`）：

- `medical-english.webp`：深色书桌堆满医学+英语符号（解剖书、听诊器、地球仪、Medical English 教材、视频会议屏、耳机...）→ **prompt 关键词具象化堆砌**
- `about.webp`：空荡的高级会议室 + 曼哈顿夜景 → **像投行宣传图，没人没故事**
- 其他 8 张大概率类似问题

### 核心问题：装饰驱动 vs 场景驱动

| 维度 | 🟢 原型期（成功） | 🔴 现在 hero/*（失败） |
|---|---|---|
| 图的角色 | 业务场景的**演示** | 页面顶部的**装饰** |
| Prompt 思路 | "一个具体场景 + 谁在做什么" | "为 XX 页面做 hero banner" |
| 主体 | **人**（环境是配角） | **物 / 场景**（人消失了） |
| 视觉信息 | 一个核心场景，主次清楚 | 关键词具象化全堆一帧 |
| 调性 | 温暖、自然、可信任 | 奢华、冷峻、距离感 |
| 业务关联 | 一眼看出"做什么" | 看不出具体业务 |

---

## 三、为什么会发生这种退化

**这是 AI 生图的典型陷阱：图的"用途定位"决定了 AI 的解题思路。**

| 给 AI 的 prompt 暗示 | AI 输出方向 |
|---|---|
| "为 Medical English 课程产品做展示图" | → 找上课场景 → 配人、白板、教材 |
| "为 Medical English 页面做 **hero banner**" | → "hero banner" = stock photo 装饰 → 堆符号 / 风光 / 静物 |

**关键词 "hero / banner / 顶图 / 背景"** 会把 AI 引到 stock photo 美学的舒适区。

→ **解药：prompt 永远先描述"场景"，再描述"画面用途"。**

---

## 四、5 条不能违背的红线

适用于所有 hero / banner / 大图位 AI 生图：

### 🚫 红线 1：每张图必须有 ≥1 个具体的人
- 最好 2-4 个（团队 / 师生 / 医患 / 客户）
- 眼神要有交流，不能全是背影
- **空场景 / 纯静物 / 纯风光 = 自动失败**

### 🚫 红线 2：必须是"正在发生的动作瞬间"
- 在交谈、在讲解、在观摩、在咨询、在写、在听
- **不能是摆拍 / 静物 / 排好的合影**
- 参考：BBC 医疗纪录片剧照、NHS 宣传视觉

### 🚫 红线 3：一张图一个核心场景，符号 ≤ 2 个
- 医学符号道具最多 2 个（如：白大褂 + 听诊器，或：白板 + 教材）
- **禁止**：地球仪 + 显示器 + 教材 + 听诊器 + 耳机同框
- 关键词具象化堆砌是 AI 生图最常见的失败模式

### 🚫 红线 4：温暖真实 > 奢华高端
- ✅ 暖光、真实医院 / 教室 / 诊室环境、自然多元
- ❌ 奢华会议室、私人办公室、纽约 / 上海夜景、戏剧化打光、玻璃幕墙顶层视角
- Mediversity 客户（医生 / 患者 / 医学生）需要的是**信任感**而不是**距离感**

### 🚫 红线 5：可读细节必须服务业务叙事
- 白板内容、招牌、文档、屏幕——出现在画面里就要**可读 + 业务相关**
- 例：白板写 "Medical English: Patient Communication"（✅）
- 例：墙上招牌 "Royal London Hospital - Observation Gallery"（✅）
- 例：地球仪 / 装饰画 / 古地图（❌ 装饰性，不承载叙事）

---

## 五、Hero 系列重生场景建议

针对 10 张 hero/*.webp 的具体场景方向：

| 文件 | 建议场景 |
|---|---|
| **hero-main.webp**（home）| 已有原型版本 ✅ 复用 |
| **medical-english.webp** | 1 位外籍 / 海外华人导师在医学英语课上指着病例，跟 3-4 位东亚医生讨论。背景：教室、白板有可读的医学英文术语（patient handoff / chief complaint / SOAP note）|
| **observership.webp** | 2-3 位中国医学生穿白大褂在英国医院走廊跟英国医生交流，或玻璃后观摩手术。背景：可读英国医院招牌 |
| **medical-navigator.webp** | 1 位华人医疗顾问跟一对外籍 / 中老年患者家属一起看 iPad，背景：诊所 / 办公室真实环境，墙上挂解剖图 |
| **humanities.webp** | 师生互动场景（医学伦理讨论 / 患者沟通模拟），不少于 4 人 |
| **research.webp** | 实验室 / 学术会议场景，有人在白板写公式 / 讨论文献 |
| **about.webp** | 复用原型 `about-team.webp` 那种**团队站位 + 现代办公环境**风格，9 人多元化团队 |
| **contact.webp** | 接待场景 / 真实办公室门口 / 团队接电话，温暖友好 |
| **insights.webp** | 编辑 / 撰稿 / 阅读场景，有人在写或看屏幕 |
| **programmes.webp** | 课程整体的代表性场景（教室 / 培训中心 / 多课程拼接 collage） |
| **oet-preparation.webp** | OET 备考特定场景（模考 / 听力练习 / 口语 role-play）|

---

## 六、Prompt 模板（给 Manus 用）

每次生 hero 图，prompt 的开头应该是这种结构：

```
A specific scene of [谁] [在哪里] [正在做什么], 
with [可读细节服务叙事],
warm natural lighting, real [医疗/教育/办公] environment,
documentary photography style, candid moment, 
not stock photo, not luxury, no concept collage.
```

**禁词清单**（不要出现在 prompt 里）：
- "hero banner" / "banner background" / "decorative"
- "luxury" / "premium" / "high-end"  
- "cityscape" / "skyline" / "Manhattan"
- "concept" / "abstract"
- "minimalist desk" / "perfectly arranged"

---

## 七、归档说明

- 本文档：`docs/visual-system/hero-image-direction.md`
- 章逊原始反馈对话：2026-05-16 20:00-20:30
- 触发 PR：#33 / #40（hero self-hosting 批次）
- 参考样本：`https://mediversity-kbq5lyhh.manus.space`（早期 Manus 原型站，5 张图）

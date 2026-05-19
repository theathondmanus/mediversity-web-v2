# CONTENT-OPS.md · Mediversity 内容运营 SOP

> Moss 物业指南 · v0.1（2026-05-19 by Moss · 章逊接管 v1）
>
> **本文档目的**：把"网站要持续添加什么、怎么添加、谁负责什么"写清楚，让章逊未来知道**只需要做什么、不需要做什么**。

---

## 0. 角色分工（章逊定）

| 谁 | 干什么 |
|---|---|
| **章逊**（产品 + 业务 owner）| 提供**原始内容**（故事 / 数据 / 决策） + **最终验收** |
| **Manus**（视觉前端）| 视觉资产 + 卡片 / 组件 / 模板设计 |
| **Moss**（物业 + 内容工程师）| Schema / frontmatter / 路由 / 数据落地 / 部署 / 双语对齐 / 配图 fallback |

**章逊只需要做**：
- 写原始内容（用任何形式：text / 录音 / docx / 微信语音转文字）
- 拍板决策
- 看 staging 验收

**章逊不需要做**：
- 改 ts/json 文件
- 跑命令
- 操心备案/部署/翻译/图

---

## 1. 内容类型 + 更新节奏

### 🟢 主类（高频，重要）

#### 1.1 Insights（洞察文章）

**位置**：
- 数据：`content/insights/{zh-CN,en}/<slug>.md`
- 封面图：`public/images/insights/<slug>.jpg`

**节奏建议**：每月 2-4 篇

**类别**：
- 行业资讯（NHS 政策 / GMC 更新 / 跨境医疗趋势）
- 案例研究（机构合作落地）
- 学员故事（OET 通过 / 海外见习经历）
- 政策解读 / 留学 / 行医通道
- 学习方法 / 备考干货

**Frontmatter 模板**：
```yaml
---
title: "标题"
date: "2026-05-19"
author: "Mediversity Global"
readTime: "5 分钟阅读"
tags: ["医学英语", "OET", "案例研究"]
excerpt: "卡片摘要 1-2 句"
cover: "/images/insights/2026-05-xxx.jpg"
category: "案例研究"
---
```

**章逊提供**：
- 标题 + 正文（任何格式）
- 关键信息：作者 / 标签 / 类别

**Moss 自动处理**：
- frontmatter 填充
- markdown 格式
- 卡片 excerpt
- en 翻译 v1（章逊审定）
- cover 图（如未指定，Moss 用 vectorengine 生）
- 部署上线

---

#### 1.2 Cases（成功案例）

**两个位置**（语义不同）：

**A · 主案例 · 首页 CaseStudyHighlight**
- 位置：`src/components/home/CaseStudyHighlight.tsx`（待重构到 messages，Issue #78）
- 现状：妇幼医院 + 印尼案例（2 个真实）
- 节奏：极低频，只放"重磅案例"

**B · MedNav 4 个案例**
- 位置：`content/pages/medical-navigator.json` 的 `cases.items[]`
- 现状：1 个真实（印尼）+ **3 个占位虚构**（张女士/李先生/王女士）
- 节奏：服务一例 → 落档一例（每月 1-2 个）
- ⚠️ **待清理**：3 个占位案例需要章逊提供真实案例替换

**章逊提供**（每个案例）：
- 客户身份（脱敏后：年龄段/职业/国籍）
- 服务类型（如 OET 备考 / 跨境会诊 / 中医康复）
- 时间线 / 关键数据
- 一句直接引语（quote，如果有学员授权）
- ⚠️ **必须授权或脱敏**

**Moss 自动处理**：
- JSON schema 填充
- milestones 时间线结构化
- 图（用 vectorengine 生场景图，匹配类型）
- 部署

---

#### 1.3 课程数据扩充

**当前已上线 9 门**（medical-english 5 + research-academic 2 + humanities 2）

**待开**：
- observership pillar 全部 future（0 门 published）
- humanities 还可扩
- 各 pillar 子分类还有规划

**节奏**：每开一门课 → 落地一门

**章逊提供**（每门课）：
- 课程基础信息（duration / audience / order / category）
- 课程概览（intro）
- 学习目标
- 教学方法
- 课程内容（模块 + 详细子内容）
- 核心特色
- 课程亮点
- 学员评价（如有）
- 最终 CTA 文案

**Moss 自动处理**：
- 全套 ts 数据文件 × zh + en
- registry 注册
- display 模式分配（按 OET 模板：学习目标=list / 教学方法=timeline / 核心特色=grid / 课程内容=table / 课程亮点=grid）
- imageAlt 生成
- 课程封面图（Manus 或 Moss 用 vectorengine）

---

#### 1.4 Testimonials（学员评价）

**位置**：`src/data/testimonials.ts` + `messages.testimonials`

**节奏**：随时（每收到一个授权感言加一个）

**章逊提供**：
- 姓名（脱敏程度由章逊定）
- 角色（如：北京协和医院 · 住院医师）
- 引语内容
- 来自哪门课（program key）
- ⚠️ **学员书面授权**

**Moss 自动处理**：
- ts entry + messages key 双向对应
- 双语翻译

⚠️ **重要审计**：当前 5 个 testimonial（王明/李华/张伟/陈静/刘洋）章逊需要确认是真实学员还是占位。如果是占位，要么替换真实，要么标记 *作品由真实学员提炼*。

---

### 🟡 次类（低频，重要）

#### 1.5 合作伙伴 / Trust Orgs

**位置**：
- 首页：`content/pages/home.json` `trustOrgs` 
- MedNav：`content/pages/medical-navigator.json` `partners`

**当前**：5 个文字标签（NHS / Cambridge / GMC / BMA / King's College London）

**升级建议**：
- 文字 → logo 图（更专业）
- 加更多机构（Mediversity 实际合作的）

**章逊提供**：机构名 + logo（svg/png）+ （可选）外链

**Moss 处理**：logo 落 `public/brand/partners/`，加 i18n key

---

#### 1.6 About

**位置**：`messages.about` + `src/app/[locale]/about/page.tsx`

**节奏**：低频（业务定位/组织/规模变化时）

**结构（已落）**：
- story 三段
- whoWeServe 5 类对象
- values 4 个

**章逊触发**：组织变化（团队扩大 / 业务调整 / 数据更新）

---

### 🟠 临时 / 一次性

#### 1.7 首页 hero 文案
- `content/pages/home.json` hero
- 业务定位重大调整时改

#### 1.8 Programmes hub 教育理念
- `messages.programmesHub.philosophy`
- 基本不变

#### 1.9 Footer 联系方式 / 公司信息
- `messages.footer`
- 搬迁 / 换号时改

---

### 🔴 待办硬性 TODO（章逊接管 v1 内必须解决）

| # | 项 | 状态 | 阻塞类型 |
|---|---|---|---|
| 1 | `/privacy` 隐私政策页面 | ❌ 不存在，footer 链接死链 | 合规 |
| 2 | `/terms` 服务条款页面 | ❌ 不存在 | 合规 |
| 3 | MedNav 3 个虚构案例替换真实 | ❌ 待章逊提供 | 真实性 |
| 4 | en 版课程 table title 中文（PR #98 未处理）| ❌ | i18n 完整性 |
| 5 | Footer ICP 备案号确认 | ⚠️ 现在是 kindmo-tech 子备案 | 备案合规 |
| 6 | Issue #78 硬编码双语 → messages | ❌ | 维护性 |
| 7 | Testimonials 5 个是否真实 | ❓ | 真实性 |

---

## 2. 章逊给 Moss 内容的标准流程

### 方式 A · Telegram 文字直发
```
章逊：「Moss 加一篇 insights：
标题：XXX
内容：[正文]
类别：案例研究
作者：Mediversity 团队」
```

Moss 自动：解析 → 落档 → 配图 → push → 部署 → 截图给章逊验。

### 方式 B · 文档/录音/图片
- 章逊发 docx/txt/录音文件
- Moss 自动解析

### 方式 C · 微信群转发
- 章逊在工作群对话后整理一段 → 转发给 Moss

### 章逊只需要回答 Moss 的 1 个问题（如有）
- 例如："这个学员姓名你想脱敏到什么程度？"

---

## 3. Moss 自驱的工作

每周 heartbeat 自动跑：
- 检查 insights 有没有新进的（如果章逊群里转发过）
- 检查 cases 占位是否已可替换
- 检查 dead links
- 检查 Issue tracker（#99 / #100 / 等）
- 周报：本周加了什么 / 待办什么

每月一次：
- 跑一遍全站链接检查
- 审计 i18n key 是否双语同步
- 审计孤立资产（images 文件夹有没有不被引用的）

---

## 4. 文件位置速查

```
content/
├── pages/
│   ├── home.json                          # 首页大块（hero / businessLines / pillars / story / trustOrgs）
│   └── medical-navigator.json             # MedNav 完整页面（含 cases）
├── programmes/
│   ├── registry.ts                        # 课程总注册
│   ├── types.ts                           # schema
│   └── <pillar>/{zh-CN,en}/<slug>.ts      # 每门课的数据
└── insights/{zh-CN,en}/<slug>.md          # 洞察文章

src/
├── data/testimonials.ts                   # 学员评价（key 引 messages）
└── messages/{zh-CN,en}.json               # 所有 UI 文案 + testimonials 内容

public/
├── brand/                                 # LOGO + 合作伙伴 logo（未来）
└── images/
    ├── hero/                              # 各页面 hero（章逊钦定）
    ├── courses/                           # 课程封面图（每课一张）
    ├── insights/                          # insights 文章封面
    ├── cases/                             # 案例主图
    ├── about/                             # /about 专用图
    └── home/                              # 首页专用图
```

---

## 5. Moss 接管承诺

1. **零工程感染章逊**：你给我内容，我处理所有技术细节
2. **每次部署后给截图**：你只看视觉验收，不操心命令
3. **可追溯**：每次改动都有 PR 链接，方便审计
4. **质量门**：上线前 CI typecheck + lint 必过 + 双站 redeploy + 我截图验收
5. **每周主动汇报**：本周加了什么内容，下周计划

---

— Moss · 2026-05-19

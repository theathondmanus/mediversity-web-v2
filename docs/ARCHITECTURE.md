# ARCHITECTURE.md · Mediversity Web v2 全局架构地图

> Moss 物业指南 · v0.1（2026-05-19 by Moss）
>
> **本文档是全局架构索引**。子系统的详细规则散在 `docs/` 各文档里，本文档负责把它们串起来 + 补缺。
>
> **更新触发器**：Manus PR 大改主目录 / 加新子系统 / 部署链路变更，由 Moss 维护。

---

## 0. 子文档导航（先看这里）

| 主题 | 文档 | 维护者 | 何时读 |
|---|---|---|---|
| 项目概览 / 领地划分 / 本地开发 | [`docs/DEVELOPMENT.md`](./DEVELOPMENT.md) | Moss | 第一次上手必读 |
| Programmes 子系统（添加新课程）| [`docs/programmes/ARCHITECTURE.md`](./programmes/ARCHITECTURE.md) | Manus + Moss | 改课程数据 / Pillar 页时 |
| Hero 图视觉标准 | [`docs/visual-system/hero-image-direction.md`](./visual-system/hero-image-direction.md) | 章逊 + Manus | 生 hero 图 / 看图质量时 |
| Legacy 内容审计 | [`docs/legacy-content-audit.md`](./legacy-content-audit.md) | Moss | 看老站迁移内容时 |
| Service 架构（双站规划）| [`docs/architecture/2026-05-11-service-architecture.md`](./architecture/2026-05-11-service-architecture.md) | Moss | 部署架构决策时 |
| **部署 cheatsheet**（双站 + Gitee）| [`.deployment/README.md`](../.deployment/README.md) | Moss | 部署故障 / 改流水线时 |

本 ARCHITECTURE.md 重点写 **路由地图 + 数据流 + i18n 三模式 + 图片资产体系 + 组件职责索引 + 部署链路**——上面文档没覆盖的全局视角。

---

## 1. 顶层目录

```
mediversity-web-v2/
├── .github/workflows/             # CI（CI / sync-to-gitee）
├── .deployment/                   # 部署 cheatsheet + 同步状态文件
├── content/                       # 业务数据（不是组件）
│   ├── pages/                     # 整页 JSON（home / medical-navigator）
│   ├── programmes/                # 课程 ts 数据 + registry
│   └── insights/                  # 洞察文章 md + frontmatter
├── docs/                          # 文档（领地详见 §0）
├── public/                        # 静态资源
│   ├── brand/                     # LOGO（SVG + PNG）
│   └── images/                    # 业务图（hero / cases / insights / about）
├── src/
│   ├── app/                       # Next.js App Router 路由
│   ├── components/                # React 组件
│   ├── data/                      # 客户端数据（testimonials 等）
│   ├── i18n/                      # next-intl 配置
│   ├── lib/                       # 工具函数（insights loader 等）
│   └── messages/                  # i18n 翻译文件（zh-CN.json / en.json）
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

**数据 vs 组件**：业务数据全在 `content/`，组件全在 `src/components/`，**不要把文案塞到组件里**（违反 i18n / 单一数据源原则）。

---

## 2. 路由地图（Next.js App Router）

```
src/app/
├── layout.tsx                          # 全局 layout（metadataBase）
└── [locale]/                           # ✨ 所有页面都嵌套在 locale 下
    ├── layout.tsx                      # 含 Header + Footer
    ├── page.tsx                        # 首页 /
    ├── about/page.tsx                  # /about
    ├── contact/page.tsx                # /contact
    ├── medical-navigator/page.tsx      # /medical-navigator
    ├── insights/
    │   ├── page.tsx                    # /insights（列表）
    │   └── [slug]/page.tsx             # /insights/<slug>（详情）
    └── programmes/
        ├── page.tsx                    # /programmes（hub）
        ├── medical-english/page.tsx    # 4 个 pillar 页
        ├── humanities/page.tsx
        ├── observership/page.tsx
        ├── research-academic/page.tsx
        └── [category]/[slug]/page.tsx  # /programmes/<cat>/<slug>（动态详情）
```

**i18n 路由策略**（`src/i18n/routing.ts`）：
- `localePrefix: 'as-needed'`
- 中文（默认）→ `/about`（无前缀）
- 英文 → `/en/about`

**静态生成**：所有页面通过 `generateStaticParams` 在 build 时预渲染。详情页用 `getAllPublishedPaths()` 从 registry 拉路径清单。

---

## 3. 数据流（关键，写给未来 review PR 用）

整个站的数据来源**分三层**，对应不同的修改场景：

```
┌──────────────────────────────────────────────────────────────┐
│ 层 1 · UI 文案（标题 / 按钮 / 短文本）                          │
│   位置: src/messages/{zh-CN,en}.json                           │
│   引用: useTranslations() + t('xxx.yyy')                       │
│   适用: nav / common / 错误提示 / 重复用语 / 短 UI 标签         │
└──────────────────────────────────────────────────────────────┘
            ↓
┌──────────────────────────────────────────────────────────────┐
│ 层 2 · 整页内容（长文 / 结构化业务数据）                        │
│   位置: content/pages/*.json + content/programmes/**/*.ts +    │
│         content/insights/{locale}/*.md                          │
│   引用: import content from "..." 或 lib/insights helpers       │
│   适用: home.businessLines / medical-navigator.cases /          │
│         programmes.<slug>.sections / insights body              │
└──────────────────────────────────────────────────────────────┘
            ↓
┌──────────────────────────────────────────────────────────────┐
│ 层 3 · 客户端补充数据                                          │
│   位置: src/data/*.ts                                         │
│   引用: import { testimonials } from "@/data/testimonials"     │
│   适用: 跨页面共用的小数据（testimonials / partners 等）        │
└──────────────────────────────────────────────────────────────┘
```

### ⚠️ 反模式：硬编码双语 `CONTENT = { 'zh-CN': ..., en: ... }`

PR #69 / #76 / #87 出现过这种**反模式**：

```tsx
// ❌ 反模式
const CONTENT = {
  "zh-CN": { title: "成功案例", ... },
  en: { title: "Case Studies", ... },
};
const t = CONTENT[locale];
```

**问题**：
- 文案散在组件里，不在 messages
- 章逊改文案要改组件代码
- 翻译团队找不到该改哪
- 截至本文档当前 main（HEAD `142426c`），残留位置见 [Issue #78](https://github.com/theathondmanus/mediversity-web-v2/issues/78)

**正确做法**：
```tsx
// ✅ 走 next-intl
const t = useTranslations("home.caseStudyHighlight");
<p>{t("eyebrow")}</p>
```

### inline locale === 'zh-CN' ? ... : ...

`grep -rn 'locale === "zh-CN"' src/ --include="*.tsx"` 当前有 **10+ 处**。
- **少量短文本（"Coming soon" / "服务时间线"）** 容忍
- **长段落 / 重复使用** 应该抽到 messages

---

## 4. i18n 完整规则

### 4.1 三种共存模式
- **messages JSON**（推荐，21 处 useTranslations()）
- **content/pages JSON** + `import` —— 整页结构化数据（medical-navigator / home）
- **content/programmes ts** + `loadProgramme()` —— 课程数据，按 locale 加载两份独立文件

### 4.2 路由 locale
- 默认 `zh-CN`，英文 `/en/...`
- 内部链接必须用 `import { Link } from "@/i18n/navigation"`，不要用 `next/link` 直接 import
- 否则会丢 locale 前缀

### 4.3 ⚠️ 添加新 i18n key 检查
- ✅ `zh-CN.json` 和 `en.json` 必须同步加
- ✅ 不要孤立 key（只在一个 locale 文件里）
- ✅ 删除时也要双删

---

## 5. 图片资产体系

### 5.1 资产分布

```
public/
├── brand/                              # LOGO（章逊认证）
│   ├── logo.svg                        # 首选
│   ├── logo-{128,256,512}.png
│   └── README.md
└── images/
    ├── hero/                           # 全站 hero 图（章逊 5-19 巡视确认）
    │   ├── about.webp                    /about hero
    │   ├── contact.webp                  /contact hero
    │   ├── insights.webp                 /insights hero
    │   ├── medical-english.webp          pillar hero
    │   ├── humanities.webp               pillar hero
    │   ├── observership.webp             pillar hero
    │   ├── research.webp                 pillar hero
    │   ├── medical-navigator.webp        /medical-navigator hero
    │   ├── programmes.webp               /programmes hub hero
    │   └── oet-preparation.webp          ⚠️ 已存在！课程级 hero（详见 §5.3）
    ├── about/                          # /about 专用
    │   ├── values-diamond-zh.webp      # 钻石四象限图（PR #91）
    │   └── values-diamond-en.webp
    ├── cases/                          # 案例图
    │   ├── indonesia-tcm-rehab.jpg
    │   └── maternity-hospital-english.jpg
    ├── insights/                       # Insights 文章封面
    │   └── *.jpg (6 张)
    └── home/                           # 首页专用（暂空）
```

### 5.2 视觉风格（owner 钦定）

详见 [`docs/visual-system/hero-image-direction.md`](./visual-system/hero-image-direction.md)。核心 7 条共性：
1. 每张图有人（2-9 个）
2. 正在发生的动作 / 对话（不摆拍）
3. 一个场景 = 一个完整故事
4. 多元化自然呈现
5. 真实医疗 / 教育 / 办公环境
6. 暖光为主
7. 50mm 镜头 + 浅景深

### 5.3 ⚠️ 课程统一图规则（章逊 2026-05-19 14:58 拍板）

**新规则（影响 #83 + #84 + 未来所有课程）**：

> 每个课程**生成一张统一图**，用作：
> - 详情页 Hero（Intro section 的"左文右图"的图）
> - Pillar 页卡片封面
> - 该课程任何其他展示位

**❌ 绝对不能撞**：
- 首页 hero / story 区图
- /about hero / values-diamond / Who We Serve
- /medical-navigator hero / cases 主图
- /programmes hub hero（含 4 张 pillar hero）
- Insights 文章 cover
- Case studies 主图

**执行顺序**：
1. **先盘点 `public/images/` 已有资产** 看能不能直接复用（如 `oet-preparation.webp` 已存在）
2. 不够再用 vectorengine `gemini-3-pro-image-preview` 生新图（参考 PR #91 钻石图路径）

详细参见 Issue #83 + #84 章逊指令。

### 5.4 视觉资产 owner

[`docs/programmes/ARCHITECTURE.md §0`](./programmes/ARCHITECTURE.md) 明确：
- **Manus**：所有视觉资产（hero / cover / 装饰图）
- **Moss**：frontmatter / data / 路由 / 部署
- **Moss 加内容时图片字段留 TODO**，Manus 单独 commit 图

---

## 6. 关键组件索引（5691 行源代码导航）

按"改什么找什么"组织：

### 6.1 全局 Layout
| 组件 | 文件 | 改什么时改它 |
|---|---|---|
| Header | `src/components/layout/Header.tsx` (276 行) | LOGO / nav 菜单 / sticky 行为 |
| Footer | `src/components/layout/Footer.tsx` (98 行) | 4 列 / 版权 / locations |

### 6.2 首页（`/`）
| 组件 | 文件 | 数据源 |
|---|---|---|
| Hero / business lines / pillars / story / trustOrgs | `src/app/[locale]/page.tsx` | `content/pages/home.json` + messages |
| CaseStudyHighlight | `src/components/home/CaseStudyHighlight.tsx` (260 行) | ⚠️ 当前硬编码（#78）|
| FeaturedCourses | `src/components/home/FeaturedCourses.tsx` (247 行) | `registry.getFeaturedProgrammes()` |
| TestimonialsCarousel | `src/components/home/TestimonialsCarousel.tsx` (85 行) | `src/data/testimonials.ts` + messages |

### 6.3 /about
| 区 | 数据 |
|---|---|
| Hero / Story / Who We Serve / Values | `src/app/[locale]/about/page.tsx` 直接渲染 + messages |
| 钻石四象限 | `public/images/about/values-diamond-{zh,en}.webp` 静态图 |

### 6.4 /medical-navigator
全靠 `content/pages/medical-navigator.json` 驱动，page 是 1 个文件做完所有 section：
- hero / directions / services / process / cases / partners / contact
- **CaseShowcase** 用 `src/components/medical-navigator/CaseShowcase.tsx`（carousel）

### 6.5 /programmes（详见 [`docs/programmes/ARCHITECTURE.md`](./programmes/ARCHITECTURE.md)）
| 页面 | 模板 | 数据 |
|---|---|---|
| `/programmes`（hub）| `src/app/[locale]/programmes/page.tsx` | 自带 + registry |
| 4 个 pillar 页 | `src/components/programmes/PillarLandingPage.tsx` (319 行) | registry 按 category 过滤 |
| 课程详情页 | `src/components/programmes/ProgramDetailTemplate.tsx` (584 行) | `loadProgramme(category, slug, locale)` 动态加载 |

### 6.6 /insights
| 页面 | 数据源 |
|---|---|
| 列表 | `src/lib/insights.ts` 的 `getAllInsightSummaries(locale)` 读 `content/insights/{locale}/*.md` |
| 详情 | `getInsight(slug, locale)` 解析 frontmatter + markdown body |

### 6.7 UI 原子（shadcn 风格）
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/carousel.tsx`（embla 封装）
- `src/components/ui/fade-in.tsx`（framer-motion 滚动触发）
- `src/components/ui/hero-section.tsx`
- `src/components/ui/section-decorations.tsx`

---

## 7. Programme 数据 schema 速查

详见 [`docs/programmes/ARCHITECTURE.md`](./programmes/ARCHITECTURE.md) + `content/programmes/types.ts`。这里只放 review PR 时最常查的字段：

```ts
ProgrammeData {
  slug, category, subcategory, title,
  shortDescription,        // 卡片简介（#83 反馈"每张卡片必须有"）
  status: "published" | "draft",  // 只 published 才渲染（#83 反馈强制规则）
  featured: boolean,       // 首页 FeaturedCourses 用
  order: number,           // pillar 页排序
  
  hero: {
    headline, lede, ctaLabel, ctaHref,
    image?, imageAlt?      // ⚠️ 课程统一图（#84 "Intro 左文右图"也用这个）
  },
  
  sections: ProgrammeSection[]  // IntroSection / ValuePropsSection / DeliveryFormatSection
}

ValuePropsSection.display?: "grid" | "list" | "timeline" | "accordion"
// ↑ 4 种渲染模式，#84 提到要新增"table"作为第 5 种（课程大纲改表格）
```

---

## 8. 部署链路

详见 [`.deployment/README.md`](../.deployment/README.md)。简版：

```
Mac/Manus push → GitHub main
                    ↓ ~14s
              GitHub Action sync-to-gitee.yml
                    ↓
              Gitee theathond/mediversity-web-v2
                    
Moss 触发双站并行 redeploy ↓                  AWS 直接拉 GitHub ↑
                    ↓                                         ↑
        腾讯云 staging.kindmo-tech.com    AWS staging-global.kindmo-tech.com
        (拉 Gitee, 2-3s)                  (拉 GitHub, 1-2s)
```

**实测端到端**：push GitHub → 双站上线 **≤ 1m56s**（含 build）

---

## 9. CI

```
.github/workflows/
├── ci.yml                  # PR / push 触发：lint + typecheck（详见文件）
└── sync-to-gitee.yml       # main 推 Gitee 镜像（Moss 2026-05-19 加）
```

---

## 10. 历史架构决策记录

### 2026-05-19（晚）
- **OET 作为课程详情页基线模板**：5 种 display 模式（grid/list/timeline/accordion/**table**）都在 OET 上演示一次
- **medical-english pillar 作为 Pillar 页基线模板**：另 3 个 pillar 按它做齐
- **Accordion 设计原则**（章逊 19:21 拍板）：**仅留给 FAQ / 进阶问答**等"用户主动展开"的内容，**绝对不能用于"课程亮点"等"必须大大方方展示"的内容**
- **PR review 教训**：PR 描述说"实装了 5 种 display 模式"≠ 实际在数据文件里用了。**review 时必须去 `content/programmes/<course>.ts` 数据里 grep `display:` 验证演示完整度**，不只看 PR description
- **Action 慢 commit 教训**：含大图 commit (>5MB) 让 sync-to-gitee Action 跑 4 分钟（vs 纯文本 12s）。腾讯云 redeploy 必须**等 Action 完成**再触发，否则会拉到 stale Gitee。`.deployment/README.md` 待补
- **图片扩展名 vs 真 MIME 不必紧张**：next/image 看真 MIME 不看扩展名。PR #92 的 `.webp` 实际是 PNG 仍能正常渲染，章逊巡视看到"图刷不出来"是首次访问 staging 的加载延迟，刷新就好

### 2026-05-19（中午）
- **GitHub Action 自动同步 GitHub → Gitee**（取代 Moss 手动双推）
- **腾讯云 origin 改 Gitee**（GitHub 直拉间歇被 GFW 切断）
- **课程统一图规则**（每个课程一张图，跨展示位复用，不跟全站 hero 撞）

### 2026-05-18
- **Pipeline 横杠移除**（programmes 教育理念 4 节点改纯 grid）
- **印尼案例 + 妇幼案例**加入 cases 数据
- **/about 重构**：mission → story 三段 + Who We Serve 5 类
- **业务命名统一**：「国际医学教育」「跨境医疗导航」全站对齐

### 2026-05-15 / 16
- **redeploy bundle fallback bug 修复**（v3 严格模式 + 退出码）
- **Hero 视觉标准文档**（`docs/visual-system/`）

### 2026-04-23
- **领地划分确定**：[`docs/DEVELOPMENT.md §5`](./DEVELOPMENT.md)
  - Manus = 视觉 + 第一版内容
  - Moss = 物业 / 基础设施 / 路由 / 数据 schema
  - 章逊 = 拍板

---

## 11. 待办（已知）

- [ ] Issue #78 · 抽离硬编码双语到 messages（CaseStudyHighlight / programmes pipeline 终点胶囊 / 散落各处的 locale === 三元）
- [ ] Issue #83 实现后：pillar 页架构升级 + 课程卡片配封面图
- [ ] Issue #84 实现后：详情页图表模板 + "table" display 模式新增
- [ ] 备案完成后：腾讯云生产环境启用 HTTPS（当前 staging 用 noindex）
- [ ] Med Nav EN 翻译审校（在 [`docs/DEVELOPMENT.md`](./DEVELOPMENT.md) 阻塞清单）

---

## 12. 写在最后

这份文档是**索引**，不要在这里写细节。细节应该在子文档里，本文档负责：

1. 帮新人 / 新 AI 找到对应的子文档（§0）
2. 提供子文档没覆盖的全局视角（路由 / 数据流 / i18n / 组件索引）
3. 记录跨子系统的决策（§10）

**修改触发**：当 main 出现以下情况，Moss 必须更新这份文档：
- 新增顶层目录（`content/cases/` 之类）
- 改 i18n 路由策略
- 改部署链路（如换 git host / 加 CDN）
- 新增子系统（如 CMS / API）

— Moss

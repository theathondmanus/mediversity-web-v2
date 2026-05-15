# Programme Content Architecture

> Moss 物业指南 — 5 分钟上手添加新课程

---

## 1. 目录结构总览

```
content/programmes/
├── types.ts                          # 数据类型定义（ProgrammeData 等）
├── registry.ts                       # 中央注册表 + 加载器
├── medical-english/
│   ├── zh-CN/
│   │   └── oet-preparation.ts        # OET 备考课程（中文）
│   └── en/
│       └── oet-preparation.ts        # OET Preparation（英文）
├── research-academic/                # 待填充
├── observership/                     # 待填充
└── humanities/                       # 待填充

src/components/programmes/
├── ProgramDetailTemplate.tsx         # 详情页模板组件（所有课程共用）
└── PillarLandingPage.tsx             # Hub 页模板组件（所有分类共用）

src/app/[locale]/programmes/
├── page.tsx                          # 总 hub 页
├── [category]/[slug]/page.tsx        # 动态详情页路由
├── medical-english/page.tsx          # 分类 hub 页（传入 subcategories 数据）
├── research-academic/page.tsx
├── observership/page.tsx
└── humanities/page.tsx
```

## 2. 数据流

```
content/programmes/registry.ts
        │
        ├─→ 首页 FeaturedCourses 组件（读 getFeaturedProgrammes()）
        ├─→ Hub 页 PillarLandingPage（通过 slug 字段链接到详情页）
        └─→ 详情页 [category]/[slug]/page.tsx（调用 loadProgramme()）
                │
                └─→ ProgramDetailTemplate 渲染完整页面
```

## 3. 添加新课程：5 步操作

以添加 `OET Intensive Bootcamp`（医学英语分类）为例：

### 步骤 1：创建内容文件

```bash
# 中文
touch content/programmes/medical-english/zh-CN/oet-intensive-bootcamp.ts
# 英文
touch content/programmes/medical-english/en/oet-intensive-bootcamp.ts
```

每个文件导出一个 `ProgrammeData` 对象。可直接复制 `oet-preparation.ts` 作为模板，修改内容即可。

```ts
import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "oet-intensive-bootcamp",
  category: "medical-english",
  subcategory: "oet",
  title: "OET 强化集训营",
  // ... 其余字段参考 types.ts 定义
};

export default data;
```

### 步骤 2：注册到 registry.ts

打开 `content/programmes/registry.ts`，添加两处：

```ts
// 1. loaders 对象中添加
"medical-english/oet-intensive-bootcamp": {
  "zh-CN": () => import("./medical-english/zh-CN/oet-intensive-bootcamp"),
  en: () => import("./medical-english/en/oet-intensive-bootcamp"),
},

// 2. registry 数组中添加
{
  slug: "oet-intensive-bootcamp",
  category: "medical-english",
  subcategory: "oet",
  title: "OET 强化集训营",
  shortDescription: "...",
  featured: false,
  order: 20,
  status: "published",
},
```

### 步骤 3：在 Hub 页添加 slug

打开 `src/app/[locale]/programmes/medical-english/page.tsx`，找到对应课程条目，添加 `slug` 字段：

```ts
{ titleKey: "oetIntensiveBootcamp", status: "active", slug: "oet-intensive-bootcamp" },
```

注意：同时将 `status` 从 `"future"` 改为 `"active"`。

### 步骤 4：验证

```bash
npx tsc --noEmit          # TypeScript 检查
npx next lint             # ESLint 检查
pnpm dev                  # 本地预览
```

验证以下 3 条链路：

| 链路 | URL | 预期 |
|------|-----|------|
| 详情页 | `/programmes/medical-english/oet-intensive-bootcamp` | 完整课程页面 |
| Hub 页 | `/programmes/medical-english` | OET 子分类下出现可点击卡片 |
| 首页 | `/` | 如果 `featured: true`，出现在精选课程区块 |

### 步骤 5：提交

```bash
git checkout -b feat/add-oet-intensive-bootcamp
git add .
git commit -m "feat(programmes): add OET Intensive Bootcamp detail page"
git push origin feat/add-oet-intensive-bootcamp
gh pr create --base main --title "feat: OET Intensive Bootcamp" --body "Closes #XX"
```

## 4. 数据类型参考

### ProgrammeData（完整课程数据）

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | `string` | URL slug，如 `"oet-preparation"` |
| `category` | `string` | 父分类 slug，如 `"medical-english"` |
| `subcategory` | `string` | 子分类 id，对应 PillarLandingPage 的 subcategory id |
| `title` | `string` | 完整显示标题 |
| `shortDescription` | `string` | 1-2 句摘要，用于卡片 |
| `metaDescription` | `string` | SEO meta description |
| `duration` | `string` | 如 `"3–12 个月"` |
| `audience` | `string[]` | 目标受众标签 |
| `featured` | `boolean` | 是否在首页精选区块展示 |
| `order` | `number` | 排序权重（越小越靠前） |
| `status` | `"published" \| "draft"` | 只有 `published` 会被渲染 |
| `hero` | `object` | `{ headline, lede, ctaLabel, ctaHref }` |
| `sections` | `ProgrammeSection[]` | 页面主体区块数组 |
| `testimonials` | `TestimonialItem[]` | 学员评价 |
| `finalCta` | `object` | `{ headline, buttonLabel, buttonHref }` |

### ProgrammeSection 类型

| type | 用途 | 关键字段 |
|------|------|----------|
| `"intro"` | 单段文字介绍 | `title`, `body` |
| `"value-props"` | 多卡片优势展示 | `title`, `items[]` |
| `"delivery-format"` | 授课形式介绍 | `title`, `subtitle`, `features[]`, `ctaLabel?` |

### ProgrammeRegistryEntry（轻量注册表条目）

`ProgrammeData` 的子集，仅包含 `slug`, `category`, `subcategory`, `title`, `shortDescription`, `featured`, `order`, `status`。用于列表/卡片渲染，不含完整页面内容。

## 5. 设计决策记录

| 决策 | 理由 |
|------|------|
| TypeScript 数据源而非 MDX | 项目无 MDX 依赖，避免引入新编译管道；TS 提供类型安全 |
| 动态 import 懒加载 | 详情页内容按需加载，不影响首页/hub 页 bundle 体积 |
| registry.ts 中央注册 | 单一入口管理所有课程元数据，hub 页和首页统一读取 |
| `slug` 字段可选 | 未创建详情页的课程卡片不可点击，渐进式上线 |
| `featured` 标记 | 首页精选区块自动从 registry 读取，无需手动维护首页代码 |

## 6. 未来扩展

当课程数量增长到一定规模，可考虑以下演进：

- 将 `TITLES` 映射（FeaturedCourses 组件中）迁移到 registry 或内容文件中
- 添加 `tags` 字段支持课程搜索/筛选
- 引入 MDX 支持更丰富的内容格式（如嵌入视频、交互组件）
- 添加 `prerequisites` 字段建立课程依赖关系
- 添加 `pricing` 字段支持价格展示

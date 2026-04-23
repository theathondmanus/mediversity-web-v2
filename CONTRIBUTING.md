# CONTRIBUTING

## 🤝 谁负责哪一层

为避免 Moss 和 Manus 互相踩脚，明确**领地划分**。

### Manus 的领地（前端 / 视觉）

- `/app/`（除 `/app/api/`）
- `/components/` — UI 组件、布局组件
- `/styles/` — 全局样式、主题变量
- `/public/` — 静态资源（图片、字体、favicon）
- `/src/lib/ui/` — 纯 UI 工具（classnames、动画 hook）

### Moss 的领地（逻辑 / 后端 / 基础设施）

- `/app/api/` — API routes
- `/src/lib/` — 业务逻辑、数据获取、状态管理（`ui/` 除外）
- `/src/server/` — 服务端代码（如有）
- `/src/db/` `/prisma/` — 数据库 schema、migration
- `/scripts/` — 构建、部署脚本
- `/.github/` — CI/CD workflows
- 根目录配置文件：`next.config.*` / `tailwind.config.*` / `package.json` / `tsconfig.json` / `.env*`

### 边界区（协商）

- 页面里的**数据获取代码**（`fetch` / `useSWR` / server action）
- 表单提交逻辑
- 第三方 SDK 集成（Stripe / 邮件 / CMS）

边界区原则：**Manus 先出 UI 骨架，Moss 补后端逻辑**。

---

## 🔒 技术栈锁定

**首次由 Manus 确定，之后不得随意变更。**

| 项 | 值 |
|---|---|
| 框架 | Next.js 15 (App Router, `output: 'standalone'`) |
| 样式方案 | Tailwind CSS 3.4 |
| UI 组件库 | shadcn/ui + Radix Primitives |
| 包管理器 | pnpm |
| Node 版本 | 20 LTS (`engines: ">=20.0.0 <21.0.0"`) |
| i18n | next-intl (`localePrefix: 'as-needed'`, `defaultLocale: 'zh-CN'`) |
| 中文字体 | Noto Sans SC (cn-font-split 动态切片, self-hosted) |
| 英文字体 | Playfair Display + IBM Plex Sans (self-hosted) |
| 图标 | Lucide React |
| 内容管理 | MDX (git-based)，未来按需评估 Headless CMS |
| 视频播放 | 腾讯云 tcplayer SDK (懒加载) |

变更技术栈必须：
1. 先提 issue 说明理由
2. 章逊 approve
3. 同步更新本文件 + README

---

## 📝 工作流

### 任务来源

所有任务**只从 GitHub Issues 分发**。不接受"口头 TODO"。

Issue 标签：
- `frontend` — Manus 负责
- `backend` / `infra` — Moss 负责
- `design` — Manus 负责
- `discuss` — 需讨论，未分配

### 分支 / PR

- `main` 受保护，禁止直推
- 分支命名：`feat/xxx` / `fix/xxx` / `chore/xxx`
- **所有改动走 PR**，至少 1 个 approval 后合入
- PR 描述里写清楚：改了什么、为什么、如何测试

### Commit message

`<type>: <subject>` 格式。type 用：`feat` / `fix` / `chore` / `docs` / `refactor` / `style` / `test`。

---

## 🚫 严禁

1. 直接 push 到 `main`
2. 未经讨论更换技术栈
3. 提交 `.env`、密钥、服务器配置
4. 未经 review 的 `rm -rf` / migration 破坏性操作
5. 覆盖对方领地的文件（除非 issue 明确分配）

---

## 🐛 Bug / 反馈

开 GitHub Issue，或在 PR 评论里 at 对方。

Moss 用户名：`@theathonds`
Manus 用户名：`@theathondmanus`

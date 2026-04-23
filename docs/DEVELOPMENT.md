# 开发环境与项目说明

> 维护者：Moss (@theathonds) · 最后更新：2026-04-23
>
> 这份文档是**正式开发启动前**对整个项目的状态快照。任何人（或未来的 AI 协作者）要上手，读这一份 + `CONTRIBUTING.md` 就够了。

---

## 1. 项目概览

### 产品

**Mediversity Global 官网改版**。替换当前 Kinsta + WordPress + Divi 站点，做一个现代化的、面向中国大陆 + 国际双市场的医学教育 / 医疗导航服务官网。

### 当前版本

- **main HEAD**: `0008060` (`feat(home): 首页第一版视觉实现 (#7)`)
- **进度**: 脚手架 + 首页第一版视觉完成。其他页面（课程详情、关于、联系、新闻、案例）尚未搭建。

### 关键业务信息

| 项 | 值 |
|---|---|
| 公司主体 | 海千蓦信息咨询有限公司 |
| ICP 备案号 | 沪ICP备2025138775号-1 |
| 当前线上站（待替换） | https://mediversityglobal.com (Kinsta + WordPress + Divi 4.27.1) |
| 中文域名 | mediversityglobal.cn（将指向新站） |
| 部署目标服务器 | 阿里云 ECS 47.93.33.146 |

---

## 2. 技术栈（已锁定）

| 项 | 值 | 理由 |
|---|---|---|
| **框架** | Next.js 15.5 (App Router) | SSR + static export 灵活，自带 i18n / font 优化 |
| **output** | `standalone` | 阿里云 ECS 部署不依赖 Vercel |
| **React** | 19 | Next.js 15 默认 |
| **语言** | TypeScript 5.9 | |
| **样式** | Tailwind CSS 3.4 | shadcn 兼容；Tailwind 4 alpha 稳定度不够 |
| **UI 组件** | shadcn/ui (new-york style) + Radix Primitives | 代码模板非 npm 依赖，完全可控 |
| **i18n** | next-intl 4.9 | App Router 原生支持 |
| **动画** | framer-motion 12 | |
| **图标** | lucide-react | shadcn/ui 官配 |
| **字体** | next/font/google（构建时下载） | 运行时零境外依赖 |
| **包管理** | pnpm 9.15.4 | 磁盘友好，严格依赖隔离 |
| **Node** | 20 LTS（`>=20.0.0 <21.0.0`） | 阿里云 ECS 生态成熟 |
| **Lint** | ESLint 9 (flat config) + `next/core-web-vitals` | |
| **格式化** | Prettier 3.8 | |

### 技术栈"为什么选它"详细说明

见 `CONTRIBUTING.md`「技术栈锁定」章节。变更必须开 issue 讨论 + 章逊 approve。

---

## 3. 本地开发环境（Mac）

### 前置要求

| 工具 | 版本 | 安装 |
|---|---|---|
| macOS | Any recent | - |
| Homebrew | 任意 | https://brew.sh |
| nvm | 0.40.x | `brew install nvm` |
| Node | 20 LTS | `nvm install 20` |
| pnpm | 9.15.4 | `corepack prepare pnpm@9.15.4 --activate` |
| Git | 任意 | 系统自带 |
| gh CLI | 任意（可选） | `brew install gh` |

**第一次配置（章逊 Mac 已配好，2026-04-23）**：

```bash
# 1. 装 nvm（如果没装）
brew install nvm
# .zshrc 加入（安装时应该自动加）
# export NVM_DIR="$HOME/.nvm"
# [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"

# 2. 装 Node 20
nvm install 20
nvm use 20

# 3. 激活 pnpm
# 如果用系统 Node 有 sudo 权限问题，用 nvm 的 corepack
~/.nvm/versions/node/v20*/bin/corepack enable
~/.nvm/versions/node/v20*/bin/corepack prepare pnpm@9.15.4 --activate
```

### clone + 跑起来

```bash
cd ~/Code  # 或任何你喜欢的目录
git clone https://github.com/theathondmanus/mediversity-web-v2.git
cd mediversity-web-v2

# 每次新开终端都要做
nvm use 20

# 首次 / 依赖有变
pnpm install

# 启动 dev server
pnpm dev              # 只本机访问：http://localhost:3000
pnpm dev -H 0.0.0.0   # 允许局域网其他设备访问（比如 Windows 浏览器）
```

### 章逊本地现状

- **代码路径**: `~/Code/mediversity-web-v2/`
- **dev 访问**: Mac `http://localhost:3000` / Windows（同 Wi-Fi）`http://192.168.1.165:3000`
- **默认路由**: `/` = 中文, `/en` = 英文

### 常用 scripts

| 命令 | 作用 |
|---|---|
| `pnpm dev` | 热重载开发服务器 |
| `pnpm build` | 生产构建，生成 `.next/` 和 `.next/standalone/` |
| `pnpm start` | 生产模式跑（需先 build） |
| `pnpm lint` | ESLint 检查 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm format` | Prettier 格式化 |

---

## 4. 目录结构

```
mediversity-web-v2/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout — <html> + 字体加载（next/font/google）
│   │   ├── globals.css           # 全局样式 + CSS 变量 + 语义 tokens
│   │   ├── favicon.ico
│   │   ├── not-found.tsx         # 自定义 404
│   │   └── [locale]/
│   │       ├── layout.tsx        # Locale layout — NextIntlClientProvider + Header/Footer
│   │       └── page.tsx          # 首页
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx        # 顶部导航（scroll-aware 变色 + 语言切换 + 移动端菜单）
│   │       └── Footer.tsx        # 底部（CTA banner + 链接网格 + ICP 备案）
│   ├── i18n/
│   │   ├── routing.ts            # locale 列表 + URL 前缀策略
│   │   ├── request.ts            # 服务端动态 import messages
│   │   └── navigation.ts         # 封装 Link / usePathname / useRouter
│   ├── lib/
│   │   └── ui/
│   │       └── utils.ts          # cn() = clsx + tailwind-merge
│   ├── messages/
│   │   ├── zh-CN.json            # 中文翻译（默认）
│   │   └── en.json               # 英文翻译
│   └── middleware.ts             # next-intl 中间件
├── public/
│   └── images/
│       └── home/                 # 首页图片（hero + 3 张 program 图）
├── docs/
│   ├── ARCHITECTURE.md           # (待 Moss 补) 详细架构文档
│   └── DEVELOPMENT.md            # 本文档
├── .github/
│   ├── CODEOWNERS
│   ├── pull_request_template.md
│   └── workflows/
│       └── ci.yml                # lint + typecheck + build
├── design-notes.md               # Manus 的视觉方案说明（Issue #4）
├── CONTRIBUTING.md               # 协作约定（领地 / 工作流 / 技术栈规则）
├── README.md
├── next.config.ts                # output: standalone + withNextIntl
├── tailwind.config.ts            # 品牌 token + 字体栈
├── components.json               # shadcn/ui 配置
├── tsconfig.json                 # TS 配置（@/* 路径别名）
├── eslint.config.mjs             # ESLint flat config
├── postcss.config.mjs
├── package.json                  # 依赖 + engines + packageManager
└── pnpm-lock.yaml
```

### 关键路径别名

`tsconfig.json` 里配了：

```json
"paths": { "@/*": ["./src/*"] }
```

代码中 `@/i18n/navigation` = `src/i18n/navigation.ts`。

---

## 5. 领地划分（谁写什么）

详见 `CONTRIBUTING.md`，这里总结一下：

### Manus (@theathondmanus) — 前端主导

- `src/app/` 除 `api/`
- `src/components/`
- `src/lib/ui/`
- `src/styles/`（如有）
- `src/content/`（如有，未来 MDX）
- `public/` — 图片、字体、favicon
- **视觉、配色、排版、组件设计的最终决策权**
- `tailwind.config.ts`（品牌 token）、`components.json`

### Moss (@theathonds) — 后端 + 基础设施

- `src/app/api/`（如有）
- `src/lib/` 除 `ui/`
- `src/server/`（如有）
- `src/db/` / `prisma/`（如有）
- `scripts/`（如有）
- `.github/workflows/`
- `next.config.ts` / `tsconfig.json` / `.env*`
- `docs/` — 本文档、架构文档
- **代码结构、可维护性、部署、CI、长期演进**

### 章逊 — 产品负责人

- 需求 / 决策 / 最终 approve
- 不直接写代码，但所有技术栈变更需要他 approve
- Git 身份：同 Moss（`@theathonds`）

---

## 6. Git / 协作流程

### Repo

- **URL**: https://github.com/theathondmanus/mediversity-web-v2
- **Owner**: `theathondmanus` (Manus)
- **Admin collaborator**: `theathonds` (Moss / 章逊)
- **Visibility**: Public（为了免费开 branch protection）

### Branch

- **main** 受保护：
  - 禁止直推
  - PR 必须 1 个 approval
  - Dismiss stale reviews on push
  - Require Code Owner review
  - Require conversation resolution
  - 禁止 force push / 禁止删除

### 工作流

```
1. 从 main 拉新分支（命名：feat/xxx · fix/xxx · chore/xxx · docs/xxx）
2. 做工作
3. 提 PR 到 main，描述里关联 Issue（"Closes #N"）
4. 等 Code Owner review
5. review 通过 → 合入（squash merge + 删分支）
6. Issue 自动关闭
```

### Commit message 格式

`<type>: <subject>`

type: `feat` / `fix` / `chore` / `docs` / `refactor` / `style` / `test` / `ci`

例子：
```
feat(home): 添加 testimonial 区块
fix: 修复 next/link locale prop 不支持的问题
docs: 更新 CONTRIBUTING.md 领地划分
ci: pnpm version 固定到 9.15.4
```

### Labels

| label | 含义 |
|---|---|
| frontend | 前端 · Manus 负责 |
| backend | 后端 · Moss 负责 |
| infra | 基础设施 / CI / 部署 · Moss 负责 |
| design | 视觉设计 · Manus |
| discuss | 需要讨论 |

---

## 7. CI / CD

### CI

`.github/workflows/ci.yml` — PR 和 main push 触发。

步骤：
1. Checkout
2. 检测 package.json 存在性（兼容空分支）
3. Setup pnpm 9.15.4
4. Setup Node 20 LTS（带 pnpm cache）
5. `pnpm install --frozen-lockfile`
6. `pnpm lint`
7. `pnpm typecheck`
8. `pnpm build`

**当前耗时**：约 60 秒。

### CD（待建）

目标：阿里云 ECS 47.93.33.146 自动部署。

**尚未实现**。计划方案：
- GitHub Actions 在 main push 时 SSH 到 ECS
- 拉代码 → `pnpm install` → `pnpm build` → 用 PM2 reload
- 或者用 `rsync` 推送 `.next/standalone/` + `.next/static/` + `public/` 到 ECS
- nginx 反代 127.0.0.1:3000

启动时间：等其他页面和第一轮视觉调整完成后。

### 未来要加的 checks

- Lighthouse CI（性能 / SEO / accessibility）
- `check-messages` 脚本（验证 zh-CN.json 和 en.json 键名一致）
- （可选）e2e 测试

---

## 8. 生产部署目标

### 阿里云 ECS (47.93.33.146)

- **OS**: Alibaba Cloud Linux 3
- **配置**: 2 核 / 1.8G RAM / 40G 磁盘 / 1G swap
- **Web server**: nginx 1.20.1
- **安全基线**（2026-04-23 已对齐）:
  - 仅 security 类自动更新（dnf-automatic）
  - sshd: MaxAuthTries=3, LoginGraceTime=30
  - rpcbind 关闭
- **SSH 密钥**: `~/.ssh/mediversity-aliyun`

### 部署架构（规划）

```
Internet
   ↓
阿里云安全组（80/443）
   ↓
nginx 1.20.1
   ├── /_next/static/* → 直接从文件系统读（长期缓存）
   ├── /images/* → 直接读
   └── / → proxy_pass http://127.0.0.1:3000
            ↓
         PM2 守护的 Node 20 进程
            ↓
         next start（.next/standalone/server.js）
```

### 资源预算（1.8G RAM）

Next.js production 启动占约 150-300 MB（单实例）。留 1G+ 给 nginx / 系统 / buffer。**够用但不宽裕**。如果未来加重功能（Headless CMS、数据库），需要升配或拆到另一台机器。

### 备案要求

- 所有外部依赖必须大陆可访问（不要 Google Fonts CDN / CloudFront 等）
- 已经通过 `next/font/google` 把字体打进构建产物
- Unsplash 占位图需要在正式上线前替换掉

---

## 9. 环境变量（目前为空）

`.env` 系列文件进了 `.gitignore`。**目前没有任何 env 依赖**——项目纯静态 + i18n JSON。

未来会需要（按假设罗列）：

```
# 未来，Moss 领地
NEXT_PUBLIC_SITE_URL=         # https://mediversityglobal.cn
NEXT_PUBLIC_API_URL=          # 如果拆分后端
DATABASE_URL=                 # 如果上数据库
SMTP_*                        # 联系表单邮件发送
SENTRY_DSN=                   # 监控
TENCENT_VOD_APP_ID=           # 视频播放
TENCENT_VOD_PSIGN_KEY=        # 视频播放签名
```

章逊拿到任何 key / 密钥都**给 Moss 本地**或**通过 GitHub Secrets**（Manus 不拿）。

---

## 10. 访问凭据速查

| 项 | 路径 / URL | 谁能访问 |
|---|---|---|
| GitHub repo | https://github.com/theathondmanus/mediversity-web-v2 | 公开 |
| 腾讯云 kindmo 服务器 | `ssh -i ~/.ssh/kindmo-tech root@124.222.58.106` | 章逊 + Moss（本地） |
| 阿里云 mediversity ECS | `ssh -i ~/.ssh/mediversity-aliyun root@47.93.33.146` | 章逊 + Moss（本地） |
| DNSPod（kindmo-tech.com） | 腾讯云控制台 | 章逊 |
| 阿里云账号 | 阿里云控制台 | 章逊 |
| Kinsta（当前线上站） | Kinsta 面板 | 章逊（用 eric.xu@... 邮箱，但账号是章逊的） |
| WordPress 主站后台 | Kinsta 背后 | 章逊 |
| Cloudflare（线上站 CDN） | Cloudflare 面板 | 章逊 |

### Git 身份

| 角色 | Git user.name | Git user.email |
|---|---|---|
| Moss / 章逊 | theathonds | 143772175+theathonds@users.noreply.github.com |
| Manus | theathondmanus | Manus 注册时的邮箱 |

---

## 11. 待办 / 已知问题

### 阻塞

无。

### 待修复（Issue 已开）

- **[Issue #8](https://github.com/theathondmanus/mediversity-web-v2/issues/8)** 首页视觉优化 batch 1：
  - 学员反馈卡片引号与文字重叠
  - 4 卡片高度不齐（教育课程 / Navigator / 学员反馈）
  - (+ 章逊后续补充的其他视觉反馈)

### 待建（按优先级）

1. **其他页面**（课程详情、关于、联系、新闻、案例）
2. **字体 self-host 升级**：目前用 `next/font/google`，未来考虑 `cn-font-split` 动态切片中文字体，减少首屏加载
3. **`next.config.ts` 加 `outputFileTracingRoot`**：消除 workspace root 误判 warning（Moss 领地，小改动）
4. **案例图替换**：`images.unsplash.com/...` 占位图换成真图
5. **`next/image` 迁移**：原生 `<img>` 逐步换成 `next/image`
6. **CMS 决策**：第一阶段 MDX，观察实际内容量再决定
7. **腾讯云 tcplayer SDK 集成**：试听课视频
8. **部署 pipeline**：GitHub Actions → 阿里云 ECS
9. **sitemap.xml / robots.txt**
10. **`generateMetadata`** 按 locale 动态化
11. **not-found.tsx 接 i18n**（目前硬编码英文）

### 潜在风险

- **1.8G RAM 紧** — 未来加 WP-like 重功能会 OOM
- **Unsplash 境外 CDN** — 上线前必须换
- **cn-font-split 没做** — 中文字体体积大（Noto Sans SC 完整约 8MB），首屏可能略慢

---

## 12. 快速参考

### 本地开发常见操作

```bash
# 切 Node 20
nvm use 20

# 拉最新代码
git pull

# 装依赖（lockfile 变了才需要）
pnpm install

# 启动
pnpm dev -H 0.0.0.0

# 提 PR
git checkout -b feat/some-feature
# ... 改代码 ...
git add -A
git commit -m "feat: xxx"
git push -u origin feat/some-feature
gh pr create --web   # 或在 GitHub 网页上建

# 切到别人的 PR 看代码
git fetch origin pull/<N>/head:pr-<N>
git checkout pr-<N>
```

### 验证部署目标网络

```bash
# SSH 到阿里云 ECS
ssh -i ~/.ssh/mediversity-aliyun -o IdentitiesOnly=yes root@47.93.33.146

# 验证 nginx 运行
systemctl status nginx

# 验证 Node 20 可装
which node
```

---

## 13. 联系方式

- **章逊**：Telegram（主沟通）
- **Manus**：通过 GitHub PR / Issue 评论
- **Moss**：通过章逊的 Telegram


---

## 14. 部署路线图（2026-04-23 章逊决定）

### 部署阶段

**阶段 1：海外站（优先）**
- 域名：`mediversityglobal.com`（GoDaddy 管理中，可随时取回）
- 默认 locale：`en`
- 目标用户：**英国 / 澳洲等英联邦国家**（主要市场，不是美国）
- 服务器选型：**延后决定**（候选：AWS 伦敦 / Vultr 伦敦 / 腾讯云新加坡 + Cloudflare）
- 启动时机：**等 Manus 做完 3-5 个核心页面后启动**

**阶段 2：国内站**
- 域名：`mediversityglobal.cn`（备案中）
- 默认 locale：`zh-CN`
- 目标用户：大陆
- 服务器：阿里云 ECS `47.93.33.146`（已准备好基线）
- 启动时机：`.cn` 备案通过 + 阶段 1 稳定后

### 调试环境

**章逊 Mac mini** 作为唯一调试机：
- `~/Code/mediversity-web-v2/` clone 了 repo
- Mac `http://localhost:3000` 或 Windows 同局域网 `http://192.168.1.165:3000`
- 不额外买调试服务器（省 ~¥2000/年）

### CDN 决策

**Cloudflare 免费版**（无论 origin 服务器在哪）：
- 300+ 全球节点，英国 / 澳洲 / 欧洲 / 北美都有
- Next.js 静态页面 + 字体 + 图片缓存命中率 90%+
- DDoS 防护 + 免费 SSL
- DNS 托管也在 Cloudflare（GoDaddy 只保留域名所有权，NS 切到 Cloudflare）

### 服务器选型 · 延后决定的原因

做到阶段 1 启动时再定，根据届时信息选：
- 用户量预估（日 PV 几百 vs 几千）
- 预算偏好（账单可预测 vs 极致速度）
- 未来是否需要 AWS 生态服务（RDS、Lambda、SES 等）

候选对比已在 Moss 笔记里（未来启动阶段 1 时重新翻出来决策）。

### 双站代码架构（未来改造）

当前 `src/i18n/routing.ts` 里 `defaultLocale: "zh-CN"` 是硬编码。

未来双站要做**同一份代码 + 不同 build**：
- 引入 `NEXT_PUBLIC_DEFAULT_LOCALE` 环境变量
- `routing.ts` 从 env 读取
- CI 针对 `.com` 和 `.cn` 分别 build 两次
- 部署到各自服务器

这个改造在阶段 1 启动前做。Moss 领地，不 block 现在的开发。

### 双站内容策略

技术上两种 locale 的内容**完全一致**（同一份 `messages/zh-CN.json` + `messages/en.json`）。

如果未来章逊决定：
- `.com` 和 `.cn` 要有不同案例 / 不同课程 / 不同营销语言
- 需要再讨论数据层拆分（推荐**不要**，除非真有业务必要）

### SEO 配置（未来上线前必做）

- 每个页面的 `generateMetadata` 按 locale 出 SEO tag
- `<link rel="alternate" hreflang="zh-CN" href="https://mediversityglobal.cn/path">` 等
- 每个站各自 `robots.txt` 和 `sitemap.xml`
- Google Search Console（.com）+ 百度站长（.cn）提交


# mediversity-web-v2

Mediversity Global 官网改版项目（`mediversityglobal.cn` / 可能也覆盖 `mediversityglobal.com`）。

## 协作模型

| 角色 | GitHub | 职责 |
|---|---|---|
| **章逊** | [@theathonds](https://github.com/theathonds) | 产品负责人 / 最终决策 / merge |
| **Moss（本地 OpenClaw）** | [@theathonds](https://github.com/theathonds) | 后端逻辑 / API / 部署 / CI / 长期维护 / bug 修复 |
| **Manus（AI 前端协作者）** | [@theathondmanus](https://github.com/theathondmanus) | 前端设计 / 脚手架 / 组件 / 样式 / 页面排版 |

## 目标

改版后替换当前 Kinsta + Divi 的 WordPress 站点，最终部署到阿里云 ECS `47.93.33.146`。

## 快速开始

```bash
# 前置要求：Node.js 20 LTS，pnpm 9.x
node -v   # v20.x.x
pnpm -v   # 9.x.x

# 克隆并安装
git clone https://github.com/theathondmanus/mediversity-web-v2.git
cd mediversity-web-v2
pnpm install

# 开发
pnpm dev          # http://localhost:3000（中文）/ http://localhost:3000/en（英文）

# 构建
pnpm build        # output: standalone

# 其他命令
pnpm lint         # ESLint
pnpm typecheck    # TypeScript 类型检查
pnpm format       # Prettier 格式化
```

## 技术栈

| 项 | 值 |
|---|---|
| 框架 | Next.js 15 (App Router, `output: standalone`) |
| 样式 | Tailwind CSS 3.4 |
| UI 组件 | shadcn/ui + Radix Primitives |
| i18n | next-intl (`zh-CN` 默认无前缀，`en` 带 `/en/` 前缀) |
| 包管理 | pnpm 9.x |
| Node | 20 LTS |

## 目录约定

见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 部署

- **目标服务器**：阿里云 `47.93.33.146`（Alibaba Cloud Linux 3，nginx 1.20.1）
- **当前域名**：`mediversityglobal.cn` 仍在 Kinsta，改版完成后切换 DNS
- **备案**：沪ICP备2025138775号-1（海千蓦信息咨询有限公司）

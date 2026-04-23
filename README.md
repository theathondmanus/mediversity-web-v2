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

_待 Manus 出第一版脚手架后填充_

```bash
# TBD：框架、包管理器、启动命令将在首次技术栈确定后写入此处
```

## 目录约定

见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 部署

- **目标服务器**：阿里云 `47.93.33.146`（Alibaba Cloud Linux 3，nginx 1.20.1）
- **当前域名**：`mediversityglobal.cn` 仍在 Kinsta，改版完成后切换 DNS
- **备案**：沪ICP备2025138775号-1（海千蓦信息咨询有限公司）

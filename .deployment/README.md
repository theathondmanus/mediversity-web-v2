# Mediversity Web v2 · 部署 Cheatsheet

## TL;DR · Moss 标准动作

```bash
# Manus PR merge 到 GitHub main 后：

# 1. 在 Mac 上拉最新 main（如有本地改动同步过来）
cd ~/.openclaw/workspace/projects/mediversity-web-v2
git pull origin main

# 2. 并行触发双站 redeploy（~1m15s 完成）
(ssh -i ~/.ssh/mediversity-uk.pem ubuntu@18.170.27.171 '/opt/apps/redeploy-staging.sh') &
(ssh -i ~/.ssh/kindmo-tech -o IdentitiesOnly=yes root@124.222.58.106 '/opt/apps/redeploy-staging.sh') &
wait

# 3. 验证：
curl -s -o /dev/null -w "腾讯云: %{http_code} %{time_total}s\n" https://staging.kindmo-tech.com/
curl -s -o /dev/null -w "AWS:    %{http_code} %{time_total}s\n" https://staging-global.kindmo-tech.com/
```

**Gitee 同步**: GitHub Action 自动处理（14 秒延迟），Moss 不用手动 push。

## 架构

```
┌────────────────────────────────────────────────────────────┐
│ Manus / Moss / 章逊 → GitHub theathondmanus/mediversity-web-v2 │
│   (主仓库，PR/Issue/CI 都在这里)                              │
└────────────────────────────────────────────────────────────┘
       ↓ on:push (GitHub Action 触发, ~14s)
┌────────────────────────────────────────────────────────────┐
│ GitHub Action: .github/workflows/sync-to-gitee.yml          │
│   - 全量 checkout                                            │
│   - git push gitee main --force                              │
└────────────────────────────────────────────────────────────┘
       ↓
┌────────────────────────────────────────────────────────────┐
│ Gitee theathond/mediversity-web-v2 (私有镜像)                 │
└────────────────────────────────────────────────────────────┘
       ↓ git pull (3s)
┌────────────────────────────────────────────────────────────┐
│ 腾讯云 124.222.58.106 origin → Gitee                          │
│   staging.kindmo-tech.com                                    │
└────────────────────────────────────────────────────────────┘

# AWS 分支（独立）：
┌────────────────────────────────────────────────────────────┐
│ AWS 18.170.27.171 origin → GitHub (1s pull)                  │
│   staging-global.kindmo-tech.com                            │
└────────────────────────────────────────────────────────────┘
```

## 关键凭证

| 凭证 | 位置 | 用途 |
|---|---|---|
| Gitee Token (theathond, 180d) | `~/.openclaw/workspace/secrets/gitee-mediversity-token.env` + GitHub Secret `GITEE_TOKEN` + 腾讯云 `/root/.git-credentials` | Action push gitee + 腾讯云 pull gitee |
| GitHub PAT (theathondmanus, 90d) | `~/.openclaw/workspace/secrets/github-pat-mediversity.env` | 仅供 Gitee 兜底拉取（Gitee 仓库镜像管理用）|

撤销: 
- https://github.com/settings/tokens
- https://gitee.com/personal_access_tokens

## 远程配置

### Mac (theathond) ~/.openclaw/workspace/projects/mediversity-web-v2
```
origin (fetch+push) → GitHub
gitee (fetch+push)  → Gitee (备用，正常不用，Action 替代)
```

### AWS (ubuntu@18.170.27.171:/opt/apps/mediversity-web-v2)
```
origin → https://github.com/theathondmanus/mediversity-web-v2.git
```

### 腾讯云 (root@124.222.58.106:/opt/apps/mediversity-web-v2)
```
origin → https://gitee.com/theathond/mediversity-web-v2.git
credential helper: store (/root/.git-credentials, chmod 600)
```

## 故障排查

| 症状 | 处理 |
|---|---|
| 腾讯云 git pull 失败 | Gitee 是否可达 `curl -I https://gitee.com`，Action 是否成功 `gh run list` |
| GitHub Action 失败 | `gh run view <id> --log`，检查 GITEE_TOKEN 是否过期 |
| AWS git pull 失败 | GitHub 可达性，可走临时 ssh + scp bundle |
| Mac push 失败 | GitHub PAT 是否还有效 |
| Gitee 401/403 | Token 在 GitHub Secret + 腾讯云 + Mac 三处都要更新 |

## 性能基线 (2026-05-19 14:44)

| 操作 | 耗时 |
|---|---|
| Mac → GitHub push | 1s |
| GitHub Action 启动 | 4s |
| Action → Gitee 同步完成 | 14s (端到端 push 触发) |
| AWS git pull (GitHub) | 1-2s |
| 腾讯云 git pull (Gitee) | 2-3s |
| 单站 redeploy (含 build) | 75s |
| **push → 双站上线全流程** | **~1m 56s** |

## 历史经验

- 2026-05-19 11:30 ~ 13:36: 试过 GitHub520 hosts，中午稳定 1 小时后被 GFW 失效
- 2026-05-19 13:36 ~ 14:00: 试过 scp bundle，Mac → 腾讯云上传 11KB/s 慢爆
- 2026-05-19 14:18 ~ 14:42: Gitee 镜像 + Moss 手动双推
- 2026-05-19 14:42 ~ 至今: GitHub Action 自动同步，Moss 不再介入

# Mediversity Web v2 · 部署 Cheatsheet

## TL;DR · Moss 标准动作

```bash
# 1. 把 Manus PR merge 到 GitHub main 后，在 Mac 上同步：
cd ~/.openclaw/workspace/projects/mediversity-web-v2
git pull origin main
git push origin main      # ← 一次 push 同时推 GitHub + Gitee（双 URL）

# 2. 并行触发双站 redeploy（~1m15s 完成）
(ssh -i ~/.ssh/mediversity-uk.pem ubuntu@18.170.27.171 '/opt/apps/redeploy-staging.sh') &
(ssh -i ~/.ssh/kindmo-tech -o IdentitiesOnly=yes root@124.222.58.106 '/opt/apps/redeploy-staging.sh') &
wait

# 3. 验证：
curl -s -o /dev/null -w "腾讯云: %{http_code} %{time_total}s\n" https://staging.kindmo-tech.com/
curl -s -o /dev/null -w "AWS:    %{http_code} %{time_total}s\n" https://staging-global.kindmo-tech.com/
```

## 架构

```
┌──────────────────────────────────────────────────────────┐
│ GitHub theathondmanus/mediversity-web-v2 (主仓库 PR/Issue) │
└──────────────────────────────────────────────────────────┘
       ↑ git push origin main (Moss 主动双推)
       │
┌──────┴───────────────────────────────────────────────────┐
│ Mac ~/.openclaw/workspace/projects/mediversity-web-v2     │
│   git remote: origin → GitHub + Gitee (双 push URL)       │
└──────────────────────────────────────────────────────────┘
       ↓ 双推
┌──────────────────────────────────────────────────────────┐
│ Gitee theathond/mediversity-web-v2 (私有镜像)              │
└──────────────────────────────────────────────────────────┘
       ↓
┌──────────────────────────────────────────────────────────┐
│ 腾讯云 124.222.58.106 origin → Gitee (3s pull)            │
│   staging.kindmo-tech.com                                  │
└──────────────────────────────────────────────────────────┘
       
┌──────────────────────────────────────────────────────────┐
│ AWS 18.170.27.171 origin → GitHub (1s pull)               │
│   staging-global.kindmo-tech.com                          │
└──────────────────────────────────────────────────────────┘
```

## 关键凭证

- **Gitee Token** (theathond): `~/.openclaw/workspace/secrets/gitee-mediversity-token.env`
- **GitHub PAT** (theathondmanus, classic, 90 天): `~/.openclaw/workspace/secrets/github-pat-mediversity.env`
- 撤销: https://github.com/settings/tokens / https://gitee.com/personal_access_tokens

## 远程配置

### Mac (theathond)
```
origin (fetch) → GitHub
origin (push)  → GitHub + Gitee (双推)
gitee          → Gitee (备用单推)
```

### AWS (ubuntu@18.170.27.171)
```
origin → https://github.com/theathondmanus/mediversity-web-v2.git
```

### 腾讯云 (root@124.222.58.106)
```
origin → https://gitee.com/theathond/mediversity-web-v2.git
credential helper: store (token in /root/.git-credentials, chmod 600)
```

## 故障排查

| 症状 | 处理 |
|---|---|
| 腾讯云 git pull 失败 | 检查 Gitee 可达性 `curl -I https://gitee.com` |
| Gitee 401/403 | Token 过期/撤销，重新生成 |
| AWS git pull 失败 | GitHub 可达性 `curl -I https://github.com` |
| Mac push 失败 | 检查 GitHub/Gitee token 是否还有效 |

## 性能基线 (2026-05-19)

| 操作 | 耗时 |
|---|---|
| Mac 双推 (GitHub + Gitee) | ~15s |
| 腾讯云 git pull (Gitee) | 2-3s |
| AWS git pull (GitHub) | 1-2s |
| 单站 redeploy (含 build) | 75s |
| 双站并行 redeploy | 75s (并行无阻塞) |

# Phase 2 — Web-based Content Editor (Decap CMS)

> **Owner**: Moss
> **Status**: Plan locked 2026-05-12. Implementation deferred until Issue #21 PR #B lands and content schema (`content/*.json`) is stable for ~2 weeks.
> **Goal**: Give 章逊 + Mabel a browser-based editor for site copy / Insights articles / images, without touching code or Git.

---

## 1. What this is, in one sentence

A login page at `https://mediversityglobal.com/admin` where authorised editors can change site content through forms, click save, and have the change auto-deployed within a minute — no code, no Git knowledge required.

## 2. Why Decap CMS (vs alternatives)

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **Decap CMS** (was Netlify CMS) | Free, open-source, Git-based, simple YAML config, mature, China-accessible (static files only) | UI is functional, not gorgeous | ✅ **Pick this** |
| TinaCMS | Better UX, visual editing | Self-hosted backend or paid SaaS, more moving parts | ❌ Overkill for current scale |
| Sanity / Strapi | Powerful, but requires hosted backend | Backend ops cost, GDPR / cross-border data concerns | ❌ Defer indefinitely |
| Forestry / CloudCannon | Polished | Paid, smaller community | ❌ |

**Decision**: Decap CMS. It's a single-page static React app that talks to GitHub via OAuth — no backend to maintain, no recurring cost, no data leaves our control.

## 3. How it fits the architecture

```
┌─────────────────────────────────────────────────────┐
│  Browser: editor at /admin                          │
│  ├── Decap React app (static, served by nginx)      │
│  └── Talks to GitHub via OAuth                      │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│  GitHub: mediversity-web-v2 repo                    │
│  ├── content/pages/*.json  ← edited by Decap        │
│  ├── content/insights/*.mdx ← edited by Decap       │
│  └── public/images/* ← uploaded by Decap            │
└─────────────────────────────────────────────────────┘
                        │
                        ▼ on push to main
┌─────────────────────────────────────────────────────┐
│  Aliyun ECS 47.93.33.146 / pm2                      │
│  ├── git pull                                        │
│  ├── pnpm build                                      │
│  └── nginx reload                                    │
└─────────────────────────────────────────────────────┘
```

**Key property**: Decap is a thin layer on top of the JSON / MDX files that Phase 1 (PR #B of Issue #21) creates. No CMS-specific schema needed. If Decap fails or we want to leave it, the content files remain valid — editors can fall back to direct Git edits.

## 4. Prerequisites (must be in place before starting)

- [x] Issue #21 PR #B merged, content extraction complete (`content/pages/*.json` shape stable)
- [x] MDX content collection live for Insights
- [x] Content schemas haven't churned in ~2 weeks (otherwise Decap config will keep needing updates)
- [ ] GitHub OAuth app registered for `mediversityglobal.com` callback
- [ ] Auto-deploy pipeline configured (push to `main` → ECS auto-pull-and-build)

## 5. Implementation outline

### Step 1 · Register GitHub OAuth app
- Settings → Developer settings → OAuth Apps → New OAuth App
- App name: `Mediversity CMS`
- Homepage URL: `https://mediversityglobal.com/admin`
- Authorization callback URL: `https://api.netlify.com/auth/done` (Decap routes via Netlify's OAuth proxy — free, no Netlify hosting needed)
- Save client ID + secret in `.env.local` (do not commit)

### Step 2 · Add Decap CMS static files
- Drop `public/admin/index.html` (Decap's standard template, 20 lines)
- Drop `public/admin/config.yml` (field schema — biggest file, maps to content/*.json)

### Step 3 · Author `config.yml`
Schema maps to Phase 1 content files. Example shape:

```yaml
backend:
  name: github
  repo: theathondmanus/mediversity-web-v2
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth

media_folder: "public/images"
public_folder: "/images"

locale: 'zh-CN'

collections:
  # Pages — one entry per page per locale
  - name: pages
    label: 页面 / Pages
    files:
      - name: home_zh
        label: 首页 (中文)
        file: content/pages/home.zh-CN.json
        fields:
          - { name: hero, label: Hero, widget: object, fields: [ ... ] }
          - { name: twinTracks, label: 双业务线, widget: object, fields: [ ... ] }
          # ... one entry per HOME-SPEC section
      - name: home_en
        label: 首页 (English)
        file: content/pages/home.en.json
        fields: [ ... ]   # same shape as home_zh
      # repeat for medical-navigator, about, contact, programmes

  # Insights articles — one collection, many entries
  - name: insights_zh
    label: Insights 文章 (中文)
    folder: content/insights/zh-CN
    create: true
    slug: '{{slug}}'
    fields:
      - { name: title, label: 标题, widget: string }
      - { name: publishedAt, label: 发布日期, widget: datetime }
      - { name: cover, label: 封面图, widget: image }
      - { name: summary, label: 摘要, widget: text }
      - { name: tags, label: 标签, widget: list }
      - { name: body, label: 正文, widget: markdown }
  - name: insights_en
    label: Insights articles (English)
    folder: content/insights/en
    # same shape

  # Programmes course catalogue (if structured)
  - name: programmes
    label: 课程数据
    folder: content/programmes
    create: true
    fields: [ ... ]
```

### Step 4 · Add editors as collaborators
- 章逊: GitHub user `theathonds` (already collaborator)
- Mabel: needs GitHub account; add as collaborator with read+write to `main` (or restrict to a `content` branch with required PRs — discuss with 章逊)
- Eric (later, if needed)

### Step 5 · Configure auto-deploy on ECS
- `47.93.33.146` already runs the staging Next.js standalone build
- Add a webhook or polling job:
  - Option A (preferred): GitHub Actions workflow → SSH to ECS → `cd /var/www/mvg-web && git pull && pnpm install --prod=false && pnpm build && pm2 restart mvg-web`
  - Option B: Cron on ECS polling `git fetch && git reset --hard origin/main` every minute
- Wire success/failure notification to a Telegram bot (uses existing OpenClaw plumbing)

### Step 6 · Localise Decap UI
- Decap supports `zh_Hans` UI out of the box; flip the locale switch in `config.yml` or via the loader script
- Add field labels in 中文 only (English editors can still understand; the underlying file is locale-agnostic)

### Step 7 · Smoke test
- Login as 章逊
- Edit homepage hero → save → confirm commit appears on GitHub → confirm site updates within 60s
- Upload a test image → confirm it lands in `public/images/` with sensible filename
- Create a test Insights article → confirm MDX file appears at `content/insights/zh-CN/<slug>.mdx`
- Delete test article → confirm clean removal

### Step 8 · Onboarding doc
- Write `docs/cms/USER-GUIDE.zh-CN.md`: screenshots + step-by-step for each common task
  - 改首页的一句话
  - 新建一篇 Insights 文章
  - 上传一张图
  - 撤销我刚才的改动
- Hand to 章逊 and Mabel

## 6. Effort estimate

| Step | Estimate |
|---|---|
| OAuth app setup | 15 min |
| `config.yml` field schema | 2 h (most of the work) |
| Auto-deploy wiring | 1 h |
| Smoke test + iteration | 1 h |
| Onboarding doc | 1 h |
| **Total** | **~5–6 h** wall-clock |

Spread over 2-3 evenings.

## 7. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Schema drift after Decap is live | Treat `config.yml` as part of every content-shape PR; CI fails if `config.yml` and `content/*.json` schemas disagree |
| Mabel locked out of GitHub | Add a backup admin (Moss) and document recovery flow in user guide |
| Editor accidentally deletes a section | Decap maintains commit history; recovery = revert commit (Moss can train 章逊 on this) |
| Decap OAuth via Netlify proxy goes down | Decap supports self-hosted OAuth proxy — fall back path documented; not implemented unless needed |
| Build fails after editor saves | Telegram notification on failure; Moss reviews + fixes within hours; bad commit can be reverted |
| Content edits race against Manus PRs | Adopt convention: Manus only edits TSX / components; editors only edit `content/*` and `public/images/*`. No overlap. |

## 8. What Phase 2 is NOT

- ❌ Not a visual page-builder (Decap is form-based, like editing a spreadsheet of fields)
- ❌ Not a multi-user workflow tool (no editorial states, approval gates) — for that we'd need Sanity / Strapi
- ❌ Not a translation tool (ZH + EN are still separate files; editor edits both manually, or we add a TM step later)
- ❌ Not analytics / SEO tooling — those are separate concerns

## 9. Decision log

- 2026-05-12 章逊 + Moss: agreed two-phase content strategy (structured files first, web editor second)
- 2026-05-12 章逊: Moss owns Phase 2 implementation; Manus stays focused on visual / page work
- 2026-05-12 Moss: Decap CMS chosen over Sanity / Strapi for cost, simplicity, and China-accessibility
- 2026-05-12 Moss: implementation start deferred until content schema stabilises post Issue #21 PR #B

---

*This plan is intentionally a checklist, not a tutorial. Tutorial-level user-facing doc lives in `docs/cms/USER-GUIDE.zh-CN.md` once implementation begins.*

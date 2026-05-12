# Medical Navigator — Page Specification v1

> **Audience for this doc**: Manus (frontend/design owner)
> **Status**: Spec frozen 2026-05-12. All content is sourced from the 7 reference documents under `./source-materials/`. Do not extrapolate beyond these sources.
> **Owner of changes**: Moss (content + spec). Manus owns visual interpretation.

---

## 0. Critical context corrections (read first)

Two things were misunderstood in PR #17 / PR #19. Both are now corrected:

### 0.1 Service direction is **三向**, not two
Original PR #17 implied "海外患者来华" (one direction). My first revision said "来华 + 出海" (two directions). The actual scope per `05-b2b-channel-folder.docx` is **three**:

| Direction | Audience | What we deliver |
|---|---|---|
| ↘ **Inbound** · Coming to China | Overseas Chinese / international students / expatriates / global patients | Medical consultation · health check-ups · wellness recuperation in China |
| ↗ **Outbound** · Going abroad | Domestic Chinese patients | Access to overseas leading medical resources |
| 🌐 **In-place** · Care while abroad | Overseas Chinese business travellers / expat employees / overseas students / long-term overseas families | Local GP/specialist booking · 24-48h emergency navigation · online pre-screening · insurance coordination · bilingual support · medical record standardisation |

All three must be visible on the page. The In-place line is the easiest to overlook — do not drop it.

### 0.2 Tone is **judgement-first**, not sales-first
Per `01-c-end-poster-copy.docx`, the entire C-end positioning is built on:

> **"我们不看病，不卖医疗项目，只帮你把健康这件事想清楚"**
> *(We don't diagnose, we don't sell medical procedures — we just help you think clearly about your health.)*

This is a **decision-quality service**, not a medical-tourism agency. Visual + copy must reflect "trusted concierge / navigator", not "cross-border deals".

---

## 1. Brand assets (locked — pull from `02-slogan-and-core-values.docx`)

### Primary tagline
- **EN**: `The limits of my language mean the limits of my world.`
  *(Wittgenstein, Tractatus Logico-Philosophicus 5.6)*
- **ZH**: `语言的边界，就是世界的边界。`

### Sub-tagline (MedNav-specific)
- **EN**: `Where Language Makes Complex Care Feel Simple.`
- **ZH**: `语言让复杂医疗变得简单。`

### Voice / persona
- "Trusted medical concierge / navigator" (per `06-overseas-social-media-plan.docx`)
- NOT: hospital, doctor, sales agent
- Tone: editorial, restrained, judgement-led

---

## 2. Page sections (final structure)

> Numbering is the **rendering order** of the page. Section IDs in `kebab-case` are anchor targets.

### `#hero` — Section 1 · Hero

**Layout**: full-width hero, generous vertical padding, dark-light contrast section.

**Content (verbatim, do not paraphrase)**:
- H1 (large serif, EN): `The limits of my language mean the limits of my world.`
- H2 (smaller, ZH): `语言让复杂医疗变得简单`
- Bridging line (smaller, sans): `回国这一次，把健康这件事想清楚 · 暑期返华 · 体检 · Dental · 眼科 · 轻医疗 · 早检早筛`
- Two CTAs (right-aligned or stacked centre):
  - Primary: `Take a 2-minute readiness check` / `做一个 2 分钟判断`
  - Secondary: `Speak with a Navigator` / `预约导航师沟通`

**Hard rules**:
- ❌ No statistics in hero
- ❌ No images of doctors / white coats / hospital corridors
- ✅ Image: editorial / abstract / quiet (e.g. a single hand on a window, a passport, a calm interior). Or: pure typography hero with a soft accent illustration.

---

### `#why-stop` — Section 2 · Resonance ("Why you might pause here")

Source: `01-c-end-poster-copy.docx` TOP 2 (verbatim).

**Layout**: editorial paragraph + 5-item list + closing pull-quote. No cards.

**Content**:
> 你可能正处在这样的状态：
> - 回国时间有限，却想顺便解决一些健康问题
> - 有明确需求，但不确定现在做是否合适
> - 担心被过度检查、过度推荐项目
> - 体检报告或健康指标看不懂，不知道轻重缓急
> - 真正让人焦虑的，从来不是医疗能力，而是不知道"该不该做、先做什么"

EN translation (do not invent — request from Moss before going live).

---

### `#what-we-do` — Section 3 · Core positioning

**Layout**: large centred typography, 1 sentence, generous whitespace. No icon, no card.

**Content (verbatim)**:
> # 我们不看病，不卖医疗项目，只帮你把健康这件事想清楚。
> ### We don't diagnose. We don't sell procedures. We help you think clearly about your health.

Below it, supporting paragraph (verbatim from C-end poster TOP 3):
> MedNavigator 是一项**跨境健康导航服务**。我们介入于你进入医疗体系之前，帮助你 **理清问题 · 判断优先级 · 规划路径**，再把你交还给真正合适、合规的医疗体系。

---

### `#three-directions` — Section 4 · Three service directions ⭐ NEW

**Layout**: editorial 3-column section (asymmetric is fine; cards are tolerated here because the three directions are genuinely parallel). Each column shows: direction icon + name + audience + what-we-do bullets.

**Content** (per `05-b2b-channel-folder.docx`):

#### ↘ Inbound · Coming to China
- For: overseas Chinese, international students, expatriates, global patients
- What: medical consultation · health check-ups · wellness recuperation
- Primary location: **Shanghai · International departments of top-tier public hospitals** (per `06-overseas-social-media-plan.docx`)

#### ↗ Outbound · Going abroad
- For: domestic Chinese patients
- What: access to world-leading overseas medical resources

#### 🌐 In-place · Care while abroad (NEW LINE — do not drop)
- For: overseas-based Chinese business travellers, expat employees, overseas students, long-term overseas families
- What:
  - Local GP / specialist booking
  - 24–48 h emergency navigation
  - Online pre-screening + medication guidance (non-diagnostic)
  - Insurance coordination
  - Bilingual support
  - Medical record standardisation

---

### `#usps` — Section 5 · Six core USPs

Source: `01-c-end-poster-copy.docx` TOP 4 + L2 revisions. Render as **6 editorial sections**, NOT a card grid (章逊's red line on PR #17/#19).

Each USP gets: number badge + heading + 1-2 paragraph body + 1 pull-quote where indicated.

#### USP 1 · 真正懂"国际 + 中国"两套医疗系统
> 我们理解国际就医，也懂中国就医流程。更重要的是——我们知道这两套系统之间，真正对不上的地方在哪里。
> 很多问题，并不发生在医院里，而是发生在 **两种医疗系统的交界处**。

#### USP 2 · 只用中国顶级公立三甲医院的国际服务体系
> 我们合作的，是中国顶级公立三甲医院的个性化国际服务部。
> - 临床能力清晰、可验证
> - 医疗定价公开透明
> - 流程成熟，风险可控
>
> 不是"资源型推荐"，而是 **长期、合规的专业接口**。
> （基于医院整体临床能力与需求匹配度的专业选择，不是营销推荐。）

#### USP 3 · 补全跨境流程的"空白地带" ⭐ KEY USP — use revised version
> 在跨境场景中，很多问题并非"不能"，而是 **选择与流程之间缺乏专业判断与衔接**。
>
> **如果客户已明确意向医院或科室**：
> - 我们会首先基于你的真实需求判断是否匹配当前阶段
> - 若匹配，再据此设计合适的绿通路径
>
> **如果判断不完全匹配**：
> - 我们会给出更合适的专业替代方案
> - 并清楚说明"为什么不建议当前选择"
>
> 在此基础上，我们补全：
> - 跨语言的医疗沟通
> - 部分无法跨境直接预约的就医流程
> - 经判断后适用的国际绿通路径
> - 行程与看诊节奏的现实可行性设计
>
> > **我们不默认提供绿通，而是在判断后专业设计绿通。**

#### USP 4 · 诊前 — 诊中 — 诊后，连续支持
> 医疗沟通不是只发生在看诊当下。通过我们，你可以获得：
> - **看诊前**：协助明确就诊目标、提前与医生进行沟通，并验证路径是否匹配
> - **看诊中**：减少无效沟通与信息遗漏
> - **看诊后**：安排 follow-up 在线询问与解释支持
>
> 这是一个 **连续的医疗支持过程**，而非一次性安排。

#### USP 5 · 中立透明的收费模式 ⭐ Trust anchor
> 我们的建议，基于事实和临床能力，而不是基于"推荐哪家我们拿得多"。
> - 所有公立医院医疗服务 **公开定价，患者直付**
> - 我们只针对所提供的 **附加服务部分**收费
> - 采用 **服务费 + 医疗费用公开透明** 的模式
>
> > **正因为我们不从医疗机构获得返佣，才能对你的医院选择给出真实、可解释的专业判断。**

#### USP 6 · 国际患者的"时间密度管理"
> 我们理解：对国际患者来说，时间本身就是稀缺医疗资源。因此我们可以：
> - 将体检与专科看诊预约在同一天
> - 减少多次往返、无效等待
> - 最大限度提高一次回国窗口的效率
>
> 让一次回国，解决本该解决的事。

---

### `#process` — Section 6 · 7-step navigation process

Source: `01-c-end-poster-copy.docx` "海报级流程图文案" (verbatim).

**Layout**: vertical 7-step timeline. **STEP 2-4 visually enlarged** as the "judgement core". STEP 4 must label `判断 ▶ 绿通（非默认） · Judgement → Green Pathway (not default)`.

| # | Title | One-line gloss |
|---|---|---|
| 1 | 你已经有一个健康问题，或一个就医想法 | 问题出现，但尚未进入医院 |
| 2 | MedNavigator 介入 — 先判断，而不是立刻对接 | 判断永远在资源之前 |
| 3 | 尊重客户的医院意向，先做专业匹配判断 | 我们不否定选择，但会解释每一个"不建议" |
| 4 | 在判断基础上，设计合适的就医路径 | 绿通是专业设计的结果，不是起点 |
| 5 | 进入正规、合规的医疗体系 | 医疗回归医疗 |
| 6 | 诊后支持与 follow-up | 支持不止发生在看诊那一天 |
| 7 | 清晰的责任与收费边界 | 中立性来自结构设计 |

**Closing one-liner under the timeline** (Version B from source — preferred):
> **我们不替你做决定，但不让你在决定中独自承担风险。**
> *We don't make the decision for you — but we don't leave you to carry the risk alone.*

---

### `#service-packages` — Section 7 · Standardised service packages

Source: `04-overseas-acquisition.docx` (3 packages) + `05-b2b-channel-folder.docx` (5 packages total).

**Layout**: 5 horizontal editorial rows, each with: name + EN name + audience + deliverables + timeline (where given).

1. **海外紧急就医协调包** · Overseas Emergency Care Coordination
   - 24/48 h 快速响应
   - For: 海外人员突发就医需求

2. **国际学生健康包** · International Student Health Pack
   - 急诊导航 + 心理支持 + 返华体检抵扣

3. **第二诊疗意见包（远程）** · Remote Second Opinion
   - 英文病历校对 → 专家匹配 → MDT 二诊报告
   - 7–10 工作日交付

4. **来华体检套餐** · China Health Check-up Package
   - 私人定制 / 团体
   - 3–5 天轻行程
   - 含：签证指引 → 接机 → 专属导医 → 检查清单 → 英文报告 → 远程解读
   - Primary location: Shanghai

5. **高端康复 / 专科二诊包 + 术后远程随访** · Specialist Second Opinion + Post-treatment Remote Follow-up
   - 出院随访计划 → 周期性远程复诊 → 用药与复查提醒

**Pricing model statement (under the list)**:
> 所有报价透明列示：医疗成本 + 差旅/服务成本 + 项目管理费 + 风险准备金。可退/不可退条款写入订单与 SLA。

---

### `#fit` — Section 8 · Suitable / Not suitable

Source: `01-c-end-poster-copy.docx` TOP 6 (verbatim).

**Layout**: 2-column comparison. Calm typography, no aggressive icons.

| ✅ 更适合你，如果你 | ❌ 可能不适合你，如果你 |
|---|---|
| 重视判断质量，而不仅是"项目多少" | 明确需要紧急治疗或手术 |
| 希望把健康问题交回专业体系 | 只关心最低价格 |
| 不希望被过度医疗或销售型推荐 | 寻求直接的医疗结论 |

---

### `#partners` — Section 9 · Hospital network (real names allowed, no numbers)

Source: `05-b2b-channel-folder.docx` (named hospitals confirmed).

**Layout**: text section with named institutions + textual description of overseas network. NO logo wall yet (assets pending). NO numeric claims (no "N hospitals / N countries / N+ specialists").

#### China network
- 仁济医院国际部 · Renji Hospital International Department
- 瑞金医院国际平台 · Ruijin Hospital International Platform
- 广慈纪念医院 · Guangci Memorial Hospital

#### Overseas network (text-only, no specific partner names yet)
- Private GP networks across UK / AU / CA
- High-end private health-check institutions
- University health centres (suitable for student cohorts)
- Private general clinic networks
- Insurance partner network (channel-conditional)
- 24-hour emergency triage support

> Add `<UnderConstruction reason="logos pending">` placeholder where logos would render. Do not fabricate any institutional partnerships beyond the list above.

---

### `#boundaries` — Section 10 · Boundaries & compliance

Source: `01-c-end-poster-copy.docx` TOP 7 (verbatim).

**Layout**: small section, easy-to-find, calm.

> - ❌ 不提供诊断或治疗
> - ❌ 不介入具体医疗决策
> - ✅ 只做信息梳理、路径判断、衔接与支持
> - ✅ 所有医疗行为由合规医疗机构完成

**Global disclaimer footer** (appears in page footer + at the bottom of any inquiry submission confirmation), bilingual, exact wording from `06-overseas-social-media-plan.docx`:
> **EN**: This is for informational purposes only — not medical advice.
> **ZH**: 本服务仅为信息梳理与路径协调，不构成医疗建议；具体诊疗请咨询医生。

---

### `#cta` — Section 11 · Speak with a Navigator

Source: `01-c-end-poster-copy.docx` (CTA 方案一 + 二) + `05-b2b-channel-folder.docx` (contact info).

**Layout**:
```
┌──────────────────────────────────────────┐
│  Speak with a Navigator                  │
│  跨境导航师将与您一对一沟通                │
│                                          │
│  [Take a 2-minute readiness check  →]   │
│  [Request a Navigator consultation →]   │
│                                          │
│  ─────  Or reach us directly  ─────     │
│                                          │
│  📧 enquiries@mediversityglobal.com      │
│  💬 WeChat: Mediversity                  │
│  🌐 mediversityglobal.com / .cn          │
│  📞 [phone — Moss to confirm]            │
│  💬 WhatsApp [Moss to confirm]           │
└──────────────────────────────────────────┘
```

**Primary CTA copy** (verbatim from C-end poster):
> 做一个 2 分钟判断：这件事，是否适合这次回国解决？
> Take a 2-minute readiness check: is this trip the right time to address it?

**Secondary CTA copy**:
> 预约一次非医疗的健康路径澄清沟通
> Arrange a non-medical care-pathway clarification call
> *不看病 · 不下结论 · 只帮你判断下一步*

**Hard rules — copy red lines**:
- ❌ "Free / complimentary / no cost / 免费 / 无偿" — any variant. ZERO occurrences anywhere on the page.
- ❌ "Limited offer / 抢先体验 / 立即获取报价"
- ❌ "Best / guaranteed / cure / 治愈 / 保证"
- ✅ Use: Speak with · Reach out · Request · Arrange · Take

**Form to wire (for the 2-minute readiness check)**: 8–10 non-medical questions, fields TBD by Moss in a follow-up issue. For now stub to a `<UnderConstruction>` form component that captures `name + email + country + brief intent` only.

---

### `#placeholders` — Section 12 · Reserved sections (render only when populated)

Wrap each in `<UnderConstruction reason="content pending from Moss">` so they don't render in production until content arrives. In dev/staging show a TODO band.

- `#testimonials` — Persona scenarios + Case studies (脱敏)
- `#faq` — FAQ accordion. **Seed entry once content is supplied**: "为什么我们有时会不建议你的选择" (per source `01-c-end-poster-copy.docx`)
- `#partners-logos` — Logo wall (institutions named above + future overseas partners)
- `#metrics` — Numeric claims. **DO NOT render until Moss confirms numbers in writing.** No `500+`, no `30+`, no `98%` — STATS section was pulled in PR #19 for the same reason.

---

## 3. B-end sub-page (separate scope)

Source: `05-b2b-channel-folder.docx` is essentially the v1 content for `/medical-navigator/partners`. This issue covers **C-end main page only**. A separate issue will be opened for the partners sub-page once C-end is approved. Header should include a discreet `For Partners →` link in the secondary nav, linking to `/medical-navigator/partners` (404 acceptable until built).

---

## 4. Design system requirements

### Visual tone (different from Programmes section)

| Dimension | Programmes | Medical Navigator |
|---|---|---|
| Palette | Cool professional blue/grey | Warm-neutral (cream + trust blue + soft warm-grey accents) |
| Typography rhythm | Academic editorial | Looser leading, more whitespace |
| Imagery | Learning / classroom / hospital | Restrained editorial — abstract, environmental, hand details. NO white-coat stock. |
| Copy verbs | "We train" / "We deliver" | "We guide" / "We help you think" |
| Urgency cues | Programme deadlines OK | NONE. No "limited", no "hurry", no countdowns. |

### Layout rules
- USP section MUST be editorial paragraphs, not card grids.
- Process section MUST emphasise STEPS 2-4 visually (judgement core).
- Hero MUST NOT contain statistics.
- All sections beyond `#three-directions` should favour asymmetric editorial sections (in line with PR #19 direction).

### Components to create / reuse
- `<UnderConstruction reason="...">` — already needed; if not present, create it. In production: returns `null`. In dev/staging: returns a yellow band with the reason.
- `<ProcessTimeline />` — vertical 7-step with size variant for emphasised steps.
- `<DirectionTriad />` — 3-direction parallel section (used in `#three-directions`).
- `<USPSection />` — numbered editorial section.
- Reuse `<TestimonialsCarousel />` from PR #17 only inside `#testimonials` placeholder — do not render it without real content.

---

## 5. i18n

- Page available at `/medical-navigator` (default locale = `zh-CN`) and `/en/medical-navigator`.
- Default locale on production: **EN-first** is recommended for this page only (audience is overseas), pending 章逊 confirmation. If keeping site-default `zh-CN`, render Wittgenstein H1 in EN regardless of locale (it is a brand asset, not translatable).
- All copy in this spec is supplied in ZH where the source is ZH. EN equivalents must be drawn from `02-slogan-and-core-values.docx` where supplied; otherwise leave a `// TODO: EN translation needed` comment for Moss to fill.

---

## 6. Out of scope (explicitly excluded — do not add)

- 任何具体数字（医院数 / 国家数 / 客户数 / 满意度）
- 任何案例 / testimonial 的真实内容（用占位组件）
- "Free consultation" / 任何免费承诺 / 任何促销话术
- TikTok 内容策略 / 30 条视频选题（这是社媒运营 SOP，不上网页）
- Persona 场景故事（等 Moss 提供脱敏版本）
- 海外合作 GP 诊所的具体名称（未授权）
- Q&A 的具体问题答案（除了允许的种子条目）
- 行业战略分析的市场判断（参考用，不写入页面文案）

---

## 7. Source materials

All under `./source-materials/`:

| File | Role |
|---|---|
| `01-c-end-poster-copy.docx` | **Primary**. C-end positioning, USPs, 7-step process, suitable/not, boundaries, CTA strategies. |
| `02-slogan-and-core-values.docx` | **Primary**. Brand taglines (EN+ZH), Wittgenstein anchor. |
| `03-industry-strategy-analysis.docx` | Reference only. Market context, three target audience archetypes. **Do not write page copy from this.** |
| `04-overseas-acquisition.docx` | **Primary**. 3 standardised products (second opinion / check-up / follow-up). |
| `05-b2b-channel-folder.docx` | **Primary**. Three service directions, 5 service packages, hospital names, contact info. |
| `06-overseas-social-media-plan.docx` | Reference. Voice, Shanghai geographic anchor, compliance disclaimer wording. |
| `07-qiaolian-system.pdf` | Not yet ingested into spec. Read on demand if any future section requires it. |

When in doubt about a phrase, **quote the source verbatim**. When the source is silent, **leave a TODO for Moss**.

---

## 8. Acceptance checklist (for review before merge)

- [ ] Three-direction service structure visible and labelled
- [ ] 6 USPs rendered as editorial sections (not cards)
- [ ] 7-step process with STEP 2-4 visually enlarged
- [ ] STEP 4 labelled `判断 ▶ 绿通（非默认）`
- [ ] Closing line under process: "我们不替你做决定，但不让你在决定中独自承担风险"
- [ ] 5 service packages listed (not 3)
- [ ] Hospital names: 仁济国际部 / 瑞金国际平台 / 广慈纪念
- [ ] No statistics anywhere on the page
- [ ] No "免费 / free / complimentary" anywhere
- [ ] Bilingual disclaimer in footer
- [ ] `<UnderConstruction>` wraps testimonials / FAQ / logo wall / metrics
- [ ] CTA copy verbatim from spec (2-min readiness check + non-medical clarification call)
- [ ] Contact: enquiries@mediversityglobal.com + WeChat: Mediversity rendered
- [ ] No card grid for USPs
- [ ] No white-coat / clinical stock photography
- [ ] B-end content NOT on this page (deferred to `/medical-navigator/partners`)

---

*Spec maintained by Moss. Questions or ambiguity → comment on the linked issue.*

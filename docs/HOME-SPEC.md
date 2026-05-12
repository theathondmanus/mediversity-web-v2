# Homepage — Page Specification v1

> **Audience**: Manus (frontend/design owner, executing PR #B of Issue #21)
> **Status**: Spec drafted 2026-05-12. Some sections await final copy from 章逊 (marked `TODO: 章逊`).
> **Visual reference**: https://mediversity-kbq5lyhh.manus.space (binding, per Issue #21)
> **Owner of changes**: Moss (content + spec). Manus owns visual interpretation within the prototype's design system.

---

## 0. Critical orientation

- **Locale**: site default is `zh-CN`. Homepage renders bilingual where the prototype does, but defaults to ZH at `/`. EN version at `/en`.
- **Visual system**: 100 % follow the prototype (port via PR #A). Hero curve, navy palette, single orange accent, serif H1, editorial alternating sections — all preserved.
- **Content extraction**: per Issue #21 §"Content extraction", all editable copy on this page lives in `content/pages/home.zh-CN.json` + `content/pages/home.en.json`. Page component is a thin renderer reading from typed loaders.

---

## 1. Top-level narrative

The homepage tells a 30-second story to two audiences who arrive on the same URL:

1. **Healthcare professionals** considering Programmes (medical English / observership / research / humanities)
2. **Patients & families** considering Medical Navigator (cross-border care)

The story arc:

> *Bridge → Two parallel offerings → Trust → Action*

Each section below maps to one beat of this arc.

---

## 2. Section structure

> Numbering is rendering order. Section IDs are anchor targets and serve as JSON top-level keys.

### `#hero` — Section 1 · Hero

**Content** (all locked from `02-slogan-and-core-values.docx` in the medical-navigator source materials):

- **H1 (EN, large serif)**: `The limits of my language mean the limits of my world.`
  *(Wittgenstein, Tractatus Logico-Philosophicus 5.6)*
- **Sub-tagline (ZH or both, depending on locale)**:
  - ZH page: `以语言为桥，联通全球医疗`
  - EN page: `Where Language Bridges You to Global Care.`
- **Supporting paragraph** (one sentence, ZH/EN):
  - ZH: `Mediversity Global 是医疗专业人士的国际化成长平台，也是跨境患者的医疗导航服务。`
  - EN: `Mediversity Global is the international development platform for healthcare professionals — and a cross-border medical navigation service for patients.`
- **Primary CTA**: `Explore Programmes` / `了解培训项目` → `/programmes`
- **Secondary CTA**: `Medical Navigator` / `医疗导航服务` → `/medical-navigator`

**Visual notes**:
- Hero photo from prototype (per Issue #21 §3, re-use prototype photography by default)
- Bottom curve SVG transition — **must keep**, it's the prototype's signature
- One word in the H1 sub-tagline may use the prototype's orange accent — pick one word that carries the meaning (e.g. "桥" in ZH, "Bridges" in EN)

**JSON shape**:
```json
{
  "hero": {
    "h1": "The limits of my language mean the limits of my world.",
    "h1Attribution": "— Wittgenstein, Tractatus Logico-Philosophicus 5.6",
    "subTagline": "...",
    "supporting": "...",
    "ctaPrimary": { "label": "...", "href": "/programmes" },
    "ctaSecondary": { "label": "...", "href": "/medical-navigator" },
    "image": "/images/home/hero.jpg"
  }
}
```

---

### `#twin-tracks` — Section 2 · Two parallel business lines

**Goal**: immediately disambiguate the two audiences without forcing a choice.

**Layout**: two editorial cards side-by-side (desktop) / stacked (mobile). Each card has:
- Small eyebrow tag (`Programmes` / `Medical Navigator`)
- Headline (large serif, 1 line)
- 1-paragraph description
- 3-bullet "what's included" preview
- "Explore →" link

**Content**:

**Card A · Programmes**
- Headline (ZH): `面向医疗专业人士的国际化成长平台`
- Headline (EN): `International Development for Healthcare Professionals`
- Description (1-paragraph): pulled from service architecture v2, summarising the 4 pillars
- Bullets:
  - Medical English & Communication
  - Medical Research & Academic Development
  - Clinical Observership & International Exposure
  - Professional Development & Medical Humanities
- Link → `/programmes`

**Card B · Medical Navigator**
- Headline (ZH): `跨境健康导航服务`
- Headline (EN): `Cross-border Healthcare Navigation`
- Description (1-paragraph): use the MedNav intro paragraph from `docs/medical-navigator/PAGE-SPEC.md` §0.1, condensed
- Bullets:
  - Inbound · Coming to China
  - Outbound · Going abroad
  - In-place · Care while overseas
- Link → `/medical-navigator`

**Visual notes**:
- Asymmetric layout OK (per prototype)
- Different accent colour per card if prototype supports (Programmes navy, MedNav warm-neutral)

---

### `#programmes-overview` — Section 3 · Programmes pillars

**Goal**: give Programmes more depth than the twin-tracks teaser.

**Layout**: prototype's 4-up feature grid (icon + title + 1-line description + "Explore →"). Each card links to its pillar page.

**Content** (from `docs/architecture/2026-05-11-service-architecture.md`):

| Pillar | EN title | ZH title | One-line description |
|---|---|---|---|
| 1 | Medical English & Communication | 医学英语与沟通 | Foundation → OET → clinical → global mobility |
| 2 | Medical Research & Academic Development | 医学研究与学术发展 | Research training, academic writing, conference presentation |
| 3 | Clinical Observership & International Exposure | 临床观摩与国际接触 | Short-term observership, advanced exposure, visiting scholar pathways |
| 4 | Professional Development & Medical Humanities | 职业发展与医学人文 | Medical humanities, leadership, well-being, communication skills |

**Visual notes**:
- 4 icons from prototype's icon library if matching ones exist; otherwise `TODO: 章逊` to commission icons (or use generic lucide-react placeholders with a note)
- Title (eyebrow): `Programmes Overview` / `培训项目`
- Subtitle: one sentence introducing the four pillars

---

### `#medical-navigator-preview` — Section 4 · Medical Navigator deep teaser

**Goal**: give MedNav substantial homepage presence, then funnel to `/medical-navigator`.

**Layout**: editorial section with image-left + text-right (alternating with Section 3 if 3 was image-right).

**Content**:
- Eyebrow: `Medical Navigator`
- Headline: 引用 MedNav 的核心定位句 from C-end poster doc: `我们不看病，不卖医疗项目，只帮你把健康这件事想清楚。` / `We don't diagnose. We don't sell procedures. We help you think clearly about your health.`
- 3-paragraph body: condensed version of MedNav 3-direction service summary
- 3 small badges or numbered points: the 3-step methodology (理清问题 → 判断优先级 → 规划路径 / Clarify → Prioritise → Map pathway)
- CTA: `Speak with a Navigator` / `了解导航服务` → `/medical-navigator`

**Visual notes**:
- Warm, calm photo (the prototype likely has appropriate stock — re-use)

---

### `#why-mediversity` — Section 5 · Why us

**Goal**: trust building. Differentiation from generic training providers and generic medical concierge.

**Layout**: prototype's stats-block style — cream background, large numbers/icons + short labels in a row.

**Content** — `TODO: 章逊` to supply. Suggested structure:

- 4-6 differentiators expressed as short claim + 1-line explanation
- **No numeric claims unless 章逊 provides verified numbers in writing**
- Possible angles (from existing materials, but please confirm before publishing):
  - 国际师资 / International faculty
  - 直对接顶级医疗机构 / Direct ties with top-tier institutions
  - 全流程双语支持 / End-to-end bilingual support
  - 中立透明的服务模式 / Neutral & transparent service model

**Render rule**: until 章逊 supplies finalised differentiators, wrap this section in `<UnderConstruction reason="content pending">` so it does not render in production.

---

### `#testimonials` — Section 6 · Testimonials carousel ⭐

**Goal**: social proof.

**Layout**: **the existing embla-based carousel from PR #17 — keep the slide interaction unchanged.** Re-skin the card visual to match the prototype's design language (typography, colour, card treatment).

**Content** — `TODO: 章逊` to supply:
- 6-10 testimonials minimum (carousel needs critical mass)
- Each testimonial: quote (~30-60 words) + attribution (name, role, institution if approved)
- ZH + EN versions if available

**Render rule**: keep the carousel component shipped in PR #17 (`src/components/home/TestimonialsCarousel.tsx`) with its motion props intact; only restyle the inner card markup.

**Critical**: do not revert to a static testimonial layout just because the prototype has one. Per Issue #21 §"Hard rules" #7: *the interaction is product, the visual is decoration.*

---

### `#insights-preview` — Section 7 · Latest Insights

**Goal**: SEO + thought leadership signal.

**Layout**: 3-up card grid showing the 3 most recent Insights articles. Each card: cover image + title + 1-line summary + read time + "Read →".

**Content**: auto-populated from `content/insights/{locale}/*.mdx` files, sorted by `publishedAt` DESC, take latest 3.

**Implementation note**: depends on MDX content collection being live (planned in `docs/medical-navigator/PAGE-SPEC.md` follow-ups). If MDX collection is not yet in place, wrap in `<UnderConstruction reason="MDX content collection pending">`.

**Link**: "All Insights" / "全部文章" → `/insights`

---

### `#partners` — Section 8 · Trusted partners

**Goal**: institutional trust signal.

**Layout**: prototype's logo strip / grid pattern (depending on what's available).

**Content** — partially supplied:
- Confirmed institutions (from MedNav b2b folder, also relevant to Programmes through hospital partnerships):
  - 仁济医院国际部 · Renji Hospital International Department
  - 瑞金医院国际平台 · Ruijin Hospital International Platform
  - 广慈纪念医院 · Guangci Memorial Hospital
- Overseas partners — `TODO: 章逊` to supply names + logos
- Programmes-side institutional partners (universities, NHS trusts) — `TODO: 章逊` to supply

**Render rule**: render only confirmed logos; for the rest use `TODO` placeholders in dev/staging, hide in production until logo files supplied.

**No numbers** (no "N+ hospitals", no "covering N countries") unless 章逊 provides verified counts.

---

### `#cta` — Section 9 · Closing CTA

**Goal**: convert undecided visitors.

**Layout**: prototype's dark CTA bar style.

**Content**:
- Headline (ZH): `准备好开启你的国际化成长，或为家人寻找跨境医疗支持？`
- Headline (EN): `Ready to grow internationally, or arrange cross-border care for someone you love?`
- 2 CTAs (mirroring hero):
  - `Explore Programmes` / `了解培训项目` → `/programmes`
  - `Talk to a Navigator` / `预约导航师沟通` → `/medical-navigator#cta`
- Contact info (small print row):
  - 📧 `enquiries@mediversityglobal.com`
  - 💬 WeChat: `Mediversity`
  - 📞 `TODO: 章逊` supply phone numbers (UK `+44 7345 169 054` confirmed; +86 + WhatsApp pending)

---

### `#footer` — Section 10 · Footer

**Layout**: 100 % follow prototype.

**Content**:
- Logo + company tagline
- Site map columns: Programmes / Medical Navigator / About / Insights / Contact
- Legal: ICP number (`沪ICP备2025138775号-2`), 公司全名 (海千蓦信息咨询有限公司 / Mediversity Global)
- Bilingual disclaimer footer (per medical-navigator spec, for sitewide footer):
  - **EN**: `This is for informational purposes only — not medical advice.`
  - **ZH**: `本服务仅为信息梳理与路径协调，不构成医疗建议；具体诊疗请咨询医生。`
- Social links — `TODO: 章逊` (LinkedIn? Xiaohongshu? WeChat 公众号?)
- 备案/资质 — keep existing

---

## 3. Design system requirements

All visual rules inherit from Issue #21 (prototype port). Page-specific notes:

- **Hero curve must render flawlessly on mobile** — do not drop to a straight bottom edge on small screens.
- **Twin-tracks section** is the most novel composition (not a direct prototype copy since the prototype was a single-business-line site). Manus has discretion to compose this within the design system; raise the proposed layout in this issue for Moss approval before implementing.
- **Sticky header** behaviour: keep prototype's behaviour (transparent over hero → solid white on scroll).

---

## 4. Hard rules (will fail review if violated)

- ❌ No fabricated numbers anywhere. Stats section wrapped in `<UnderConstruction>` until 章逊 supplies verified figures.
- ❌ No imported case studies / testimonials beyond what 章逊 provides. Testimonials section also wrapped if unsupplied.
- ❌ No "free / complimentary / 免费 / no cost" language in any CTA, on any locale, ever.
- ❌ No external image hosts (re-use prototype's photos via `public/images/home/`).
- ✅ All copy lives in `content/pages/home.{zh-CN,en}.json` (per Issue #21).
- ✅ Carousel keeps its slide interaction.
- ✅ EN locale rendered at `/en`; ZH at `/`.

---

## 5. Outstanding inputs (Moss / 章逊 will provide before PR #B lands)

- [ ] 4-6 differentiators for `#why-mediversity` (text + optional icons)
- [ ] 6-10 testimonials (ZH + EN where available) with consent for naming
- [ ] Overseas hospital / university partner names + logo files
- [ ] +86 phone, WhatsApp number for `#cta`
- [ ] Social media handles for footer
- [ ] Optional: any verified numeric claims (e.g. years of operation, alumni count, hospital network size) — strictly only if defensible

---

## 6. Acceptance checklist

- [ ] Hero renders with Wittgenstein H1 + sub-tagline + 2 CTAs + bottom curve
- [ ] Twin-tracks section presents Programmes + MedNav as parallel offerings, not nested
- [ ] Programmes 4-up grid reflects the 4 pillars from architecture v2
- [ ] MedNav preview shows the 3-step methodology and the "we don't diagnose" positioning
- [ ] Why-us / Stats / Partners sections wrapped in `<UnderConstruction>` unless content supplied
- [ ] Testimonials carousel keeps embla slide behaviour, re-skinned to prototype style
- [ ] Insights preview pulls from MDX collection (or `<UnderConstruction>` if collection not yet live)
- [ ] CTA bar mirrors hero CTAs
- [ ] Footer has ICP, bilingual disclaimer, contact info, site map
- [ ] All copy sourced from `content/pages/home.{zh-CN,en}.json` (no inline strings in TSX)
- [ ] No fabricated numbers
- [ ] No "free" language anywhere
- [ ] Prototype curve / palette / typography / spacing visually match the reference URL

---

*Spec maintained by Moss. Open questions or proposed deviations → comment on Issue #21.*

# Legacy Content Audit — Mediversity Global

> Source audit generated on 2026-04-21 from the legacy WordPress sites:
>
> - https://mediversityglobal.com
> - https://mediversityglobal.cn
>
> This document condenses the legacy-site crawl into a migration checklist for `mediversity-web-v2`.

## Executive Summary

The legacy sites contain substantially more second/third-level content than the current v2 homepage implementation.

Audit totals:

- Pages: **83** total — English **42**, Chinese **41**
- Images: **243**
- Video: **1**
- Downloadable documents/PDFs: **22**
- Broken URLs found in sitemap crawl: **0**

Key conclusion from Eric / Zhang Xun feedback:

> **Medical Education** and **Medical Navigator** must be presented as two separate business lines, not mixed into one generic service grid.

## Recommended New Information Architecture

The old audit originally suggested reducing the menu depth by grouping everything under Programs. After Eric's latest feedback, the better structure is to keep a clear two-track business split:

```text
Home
Medical Education
  ├─ Medical English & OET
  ├─ Clinical Observership
  ├─ Medical Humanities
  ├─ Medical Research Essentials
  └─ Medical Writing & Publication
Medical Navigator
  ├─ Comprehensive Health Screening
  └─ International Cloud Clinic
Case Studies
About
  ├─ Our Story
  ├─ Team
  └─ Partners / Press
News
Contact
```

Implementation guidance:

- Homepage should act as a brand entrance and route users into the two business lines early.
- Education CTAs should target healthcare professionals / students / institutions.
- Navigator CTAs should target patients / families / international healthcare-service clients.
- Avoid presenting Education and Navigator cards in the same undifferentiated card grid.

## Legacy Page Inventory — Medical Education

These pages exist on the old site and should be mapped into the new Education section.

### Hub / Overview

- `training-overview`
- `medical-english-training`
- `clinical-observershipinternational-clinical-immersion-programs`
- `medical-humanities-for-healthcare-professionals`

### Medical English & OET

- `preparatory-general-english`
- `pre-departure-medical-english`
- `medical-english-for-doctors`
- `medical-english-for-nurses`
- `workplace-medical-english`
- `oet-preparation`

### Clinical Observership

- `clinical-observer-program`
- `advanced-visiting-scholar-program-global-medical-research-training`
- `short-term-overseas-visit-program`

### Humanities / Research / Writing

- `medical-humanities-and-communication-skills`
- `medical-humanities-and-general-practice-literacy-course`
- `medical-research-essentials`
- `medical-writing-publication-bootcamp`

## Legacy Page Inventory — Medical Navigator

These pages should be mapped into the new Navigator section rather than mixed with Education.

- `medical-navigator`
- `comprehensive-health-screening-service`
- `international-cloud-clinic`
- `medical-navigator-contact-form`

## Supporting Pages

### About / Team

- `mediversity-global-healthcare-services` — effectively About Us
- `mediversity-global-team`
- team member pages, including:
  - `dr-lanxi-deng-medical-advisor`
  - `dr-xuebin-dong-mediversity-global`
  - `krishna-chodipilli`
  - `jenny-wu-mediversity-global`
  - `yunhan-xu`
  - `ms-di-bao`

### Case Studies / News

- `medical-english-training-case-study`
- `oxford-university-hospitals-success-story`
- `partnership-announcement-personalized-international-healthcare-with-renji-hospital`
- `march-is-brain-tumour-awareness-month`
- `mediversity-global-achieves-british-council-certification`
- `mediversity-invites-to-peking-union-medical-college-hospital-international-medical-service-event`
- `news`

### Contact / Forms / Legal

- `contact-us`
- `contact-us-new` (Chinese site only; should be consolidated)
- `medical-education-contact-form`
- `medical-navigator-contact-form`
- `terms-of-serivce` (legacy typo; should become `terms-of-service`)

## Content Gaps and Migration Risks

### 1. v2 currently covers only the first homepage version

The v2 app currently has the homepage and shared layout; most legacy second/third-level pages are not yet represented as routes.

Priority missing areas:

1. Medical Education hub and subpages
2. Medical Navigator hub and subpages
3. About / Team
4. Case Studies
5. Contact forms
6. SEO metadata and sitemap entries

### 2. Chinese SEO metadata is weak

Legacy Chinese pages are missing meta descriptions almost across the board. Do not copy this weakness into v2.

New pages should include:

- localized `title`
- localized `description`
- canonical route
- OG metadata
- sitemap inclusion

### 3. Legacy slugs should not be copied blindly

Examples of old slug problems:

- `clinical-observershipinternational-clinical-immersion-programs` is too long.
- `mediversity-global-healthcare-services` actually points to About Us.
- `terms-of-serivce` is misspelled.
- Chinese URLs use percent-encoded Chinese slugs and inconsistent suffixes.

Recommended approach:

- Use short English slugs under i18n routes.
- Keep the same route shape for zh-CN and en content.
- Add redirects from old WordPress URLs during migration.

### 4. Asset migration is non-trivial

Legacy audit found:

- 243 images
- 172 images without alt text
- 22 downloadable documents/PDFs
- 1 company intro video: `https://mediversityglobal.com/wp-content/uploads/2025/04/MVG-Company-Intro.mp4`

Before production launch, decide which legacy assets should be:

- copied into `public/`
- replaced by new brand assets
- removed / archived
- moved to external storage/CDN

## Immediate Tasks for Manus / Moss

### Manus

- Design the homepage / navigation split between Medical Education and Medical Navigator.
- Define route/page templates for hub pages and detail pages.
- Fix existing homepage card visual issues tracked in #8.

### Moss

- Keep the legacy audit current and convert page inventory into implementation tickets.
- Help with non-visual implementation: routes, metadata, sitemap, redirects, content files.
- Update phone/contact details and technical docs via small PRs.

## Related Issues / PRs

- #8 — Homepage testimonial quote overlap + unequal card heights
- #11 — Separate Medical Education and Medical Navigator business lines
- #12 — Legacy second/third-level page content audit and migration
- #10 — UK phone number update


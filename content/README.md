# Content Directory

This directory holds structured content separated from the Next.js application code.

## Structure

```
content/
├── pages/          # Page-level structured content (JSON, bilingual)
│   └── home.json   # Homepage content (hero, business lines, pillars, story, trust)
└── insights/       # Blog/insight articles (Markdown with frontmatter)
    ├── zh-CN/      # Chinese articles
    │   └── *.md
    └── en/         # English articles
        └── *.md
```

## Guidelines

- **pages/*.json**: Bilingual key-value pairs (`{ "zh-CN": "...", "en": "..." }`). Used as a single source of truth for page content that can be consumed by the app or a future CMS.
- **insights/{locale}/*.md**: Markdown files with YAML frontmatter (`title`, `date`, `author`, `readTime`, `tags`). Filenames serve as URL slugs.

## Future Plans

- Migrate remaining `src/messages/*.json` UI strings here as structured content grows
- Add MDX support for rich insight articles with embedded components
- Integrate with a headless CMS for non-developer content editing

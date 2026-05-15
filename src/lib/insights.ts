/**
 * Insights content loader.
 *
 * Reads markdown files from content/insights/{locale}/*.md
 * Parses YAML-like frontmatter and exposes a typed API.
 *
 * Zero external dependencies — uses Node fs + simple parsers.
 */

import fs from "node:fs";
import path from "node:path";

export interface InsightFrontmatter {
  title: string;
  date: string;        // ISO 8601 (YYYY-MM-DD)
  author: string;
  readTime: string;
  tags: string[];
  excerpt?: string;    // optional summary for cards (auto-generated if missing)
  cover?: string;      // optional cover image URL
  source?: string;     // optional original source URL (for legacy migrations)
  category?: string;   // optional category (e.g. "Press Releases", "Industry Insights")
}

export interface InsightSummary extends InsightFrontmatter {
  slug: string;
  locale: string;
  excerpt: string;     // always populated (auto if missing)
}

export interface InsightFull extends InsightSummary {
  body: string;        // raw markdown body (after frontmatter)
}

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

/* ── Frontmatter parsing (YAML-lite, supports strings + string arrays) ── */

function parseFrontmatter(raw: string): { fm: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { fm: {}, body: raw };

  const [, yamlBlock, body] = match;
  const fm: Record<string, unknown> = {};

  for (const line of yamlBlock.split(/\r?\n/)) {
    const lineMatch = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (!lineMatch) continue;

    const [, key, rawValue] = lineMatch;
    const value = rawValue.trim();

    // Array syntax: ["a", "b"] or [a, b]
    if (value.startsWith("[") && value.endsWith("]")) {
      const inner = value.slice(1, -1).trim();
      if (inner === "") {
        fm[key] = [];
      } else {
        fm[key] = inner
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""));
      }
    } else if (value.startsWith('"') && value.endsWith('"')) {
      fm[key] = value.slice(1, -1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      fm[key] = value.slice(1, -1);
    } else {
      fm[key] = value;
    }
  }

  return { fm, body: body.trim() };
}

/* ── Auto-excerpt: first non-heading paragraph, capped at 180 chars ── */

function autoExcerpt(body: string, max = 180): string {
  const lines = body.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed === "" ||
      trimmed.startsWith("#") ||
      trimmed.startsWith("![") ||
      trimmed.startsWith(">")
    )
      continue;
    if (trimmed.length > max) return trimmed.slice(0, max).trim() + "…";
    return trimmed;
  }
  return "";
}

/* ── Public API ── */

export function getAllInsightSlugs(locale: string): string[] {
  const dir = path.join(INSIGHTS_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllInsightSummaries(locale: string): InsightSummary[] {
  const slugs = getAllInsightSlugs(locale);
  const summaries = slugs
    .map((slug) => {
      try {
        const full = getInsight(slug, locale);
        if (!full) return null;
        const { body: _body, ...summary } = full;
        return summary;
      } catch {
        return null;
      }
    })
    .filter((s): s is InsightSummary => s !== null);

  // Sort by date descending (newest first)
  return summaries.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getInsight(slug: string, locale: string): InsightFull | null {
  const filePath = path.join(INSIGHTS_DIR, locale, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { fm, body } = parseFrontmatter(raw);

  const title = String(fm.title ?? slug);
  const date = String(fm.date ?? "");
  const author = String(fm.author ?? "Mediversity Global");
  const readTime = String(fm.readTime ?? "");
  const tags = Array.isArray(fm.tags) ? (fm.tags as string[]) : [];
  const excerpt = String(fm.excerpt ?? autoExcerpt(body));
  const cover = fm.cover ? String(fm.cover) : undefined;
  const source = fm.source ? String(fm.source) : undefined;
  const category = fm.category ? String(fm.category) : undefined;

  return {
    slug,
    locale,
    title,
    date,
    author,
    readTime,
    tags,
    excerpt,
    cover,
    source,
    category,
    body,
  };
}

/* ── Get all locales an insight has translations for (for [slug] static params) ── */

export function getAllInsightPaths(): { locale: string; slug: string }[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  const locales = fs
    .readdirSync(INSIGHTS_DIR)
    .filter((d) => fs.statSync(path.join(INSIGHTS_DIR, d)).isDirectory());

  const paths: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllInsightSlugs(locale)) {
      paths.push({ locale, slug });
    }
  }
  return paths;
}

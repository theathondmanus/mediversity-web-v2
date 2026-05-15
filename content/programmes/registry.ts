/**
 * Programme Registry — central index of all published courses.
 *
 * Hub pages, homepage featured cards, and generateStaticParams all read from here.
 * When adding a new course, import its data files and add an entry below.
 *
 * @see docs/programmes/ARCHITECTURE.md
 */

import type { ProgrammeRegistryEntry, ProgrammeData } from "./types";

/* ── Lazy loaders (one per locale per course) ── */

type LocaleLoaders = {
  "zh-CN": () => Promise<{ default: ProgrammeData }>;
  en: () => Promise<{ default: ProgrammeData }>;
};

const loaders: Record<string, LocaleLoaders> = {
  "medical-english/oet-preparation": {
    "zh-CN": () => import("./medical-english/zh-CN/oet-preparation"),
    en: () => import("./medical-english/en/oet-preparation"),
  },
  // ── Add new courses here ──
  // "medical-english/oet-intensive-bootcamp": {
  //   "zh-CN": () => import("./medical-english/zh-CN/oet-intensive-bootcamp"),
  //   en: () => import("./medical-english/en/oet-intensive-bootcamp"),
  // },
};

/* ── Registry entries (lightweight, no full content) ── */

export const registry: ProgrammeRegistryEntry[] = [
  {
    slug: "oet-preparation",
    category: "medical-english",
    subcategory: "oet",
    title: "OET 备考课程", // display title is locale-dependent; this is the zh-CN default
    shortDescription: "系统提升医学英语能力，助力成功通过 OET 考试。",
    featured: true,
    order: 10,
    status: "published",
  },
  // ── Add new entries here ──
];

/* ── Helpers ── */

/**
 * Load full programme data for a given category/slug and locale.
 */
export async function loadProgramme(
  category: string,
  slug: string,
  locale: string,
): Promise<ProgrammeData | null> {
  const key = `${category}/${slug}`;
  const localeLoaders = loaders[key];
  if (!localeLoaders) return null;

  const load = localeLoaders[locale as keyof LocaleLoaders];
  if (!load) return null;

  const mod = await load();
  return mod.default;
}

/**
 * Get all published programmes for a given category.
 */
export function getPublishedByCategory(
  category: string,
): ProgrammeRegistryEntry[] {
  return registry
    .filter((p) => p.category === category && p.status === "published")
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all featured programmes (for homepage).
 */
export function getFeaturedProgrammes(): ProgrammeRegistryEntry[] {
  return registry
    .filter((p) => p.featured && p.status === "published")
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all published programme paths (for generateStaticParams).
 */
export function getAllPublishedPaths(): { category: string; slug: string }[] {
  return registry
    .filter((p) => p.status === "published")
    .map((p) => ({ category: p.category, slug: p.slug }));
}

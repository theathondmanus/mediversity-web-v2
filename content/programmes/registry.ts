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
  "medical-english/preparatory-medical-english": {
    "zh-CN": () => import("./medical-english/zh-CN/preparatory-medical-english"),
    en: () => import("./medical-english/en/preparatory-medical-english"),
  },
  "medical-english/medical-english-for-doctors": {
    "zh-CN": () => import("./medical-english/zh-CN/medical-english-for-doctors"),
    en: () => import("./medical-english/en/medical-english-for-doctors"),
  },
  "medical-english/medical-english-for-nurses": {
    "zh-CN": () => import("./medical-english/zh-CN/medical-english-for-nurses"),
    en: () => import("./medical-english/en/medical-english-for-nurses"),
  },
  "medical-english/pre-departure-medical-english": {
    "zh-CN": () => import("./medical-english/zh-CN/pre-departure-medical-english"),
    en: () => import("./medical-english/en/pre-departure-medical-english"),
  },
  "research-academic/medical-research-essentials": {
    "zh-CN": () => import("./research-academic/zh-CN/medical-research-essentials"),
    en: () => import("./research-academic/en/medical-research-essentials"),
  },
  "research-academic/medical-writing-publication-bootcamp": {
    "zh-CN": () => import("./research-academic/zh-CN/medical-writing-publication-bootcamp"),
    en: () => import("./research-academic/en/medical-writing-publication-bootcamp"),
  },
  "humanities/medical-humanities-and-general-practice-literacy": {
    "zh-CN": () => import("./humanities/zh-CN/medical-humanities-and-general-practice-literacy"),
    en: () => import("./humanities/en/medical-humanities-and-general-practice-literacy"),
  },
  "humanities/medical-humanities-and-communication-skills": {
    "zh-CN": () => import("./humanities/zh-CN/medical-humanities-and-communication-skills"),
    en: () => import("./humanities/en/medical-humanities-and-communication-skills"),
  },
};

/* ── Registry entries (lightweight, no full content) ── */

export const registry: ProgrammeRegistryEntry[] = [
  {
    slug: "oet-preparation",
    category: "medical-english",
    subcategory: "oet",
    title: "OET 备考课程",
    shortDescription: "提升您的医学英语能力，助力成功通过 OET 考试。",
    featured: true,
    order: 10,
    status: "published",
  },
  {
    slug: "preparatory-medical-english",
    category: "medical-english",
    subcategory: "foundations",
    title: "预备通用英语课程",
    shortDescription: "12 课时基础英语课程，专为医疗从业者设计，为其进阶医疗英语培训奠定基础",
    featured: false,
    order: 5,
    status: "published",
  },
  {
    slug: "medical-english-for-doctors",
    category: "medical-english",
    subcategory: "clinical",
    title: "医生英语",
    shortDescription: "医疗专业人员语言沟通能力提升课程",
    featured: true,
    order: 20,
    status: "published",
  },
  {
    slug: "medical-english-for-nurses",
    category: "medical-english",
    subcategory: "clinical",
    title: "护士英语",
    shortDescription: "护士专属医学英语沟通能力提升课程",
    featured: true,
    order: 30,
    status: "published",
  },
  {
    slug: "pre-departure-medical-english",
    category: "medical-english",
    subcategory: "global-mobility",
    title: "出国前医学英语",
    shortDescription: "12 周强化语言项目，专为即将海外临床实习的医疗专业人士打造",
    featured: true,
    order: 40,
    status: "published",
  },
  {
    slug: "medical-research-essentials",
    category: "research-academic",
    subcategory: "research-training",
    title: "医学研究基础",
    shortDescription: "6 周系统学习医学研究方法与循证医学（英语 B1+）",
    featured: false,
    order: 10,
    status: "published",
  },
  {
    slug: "medical-writing-publication-bootcamp",
    category: "research-academic",
    subcategory: "academic-writing",
    title: "医学写作与发表集训营",
    shortDescription: "12 小时集中训练 SCI 论文写作与国际发表技巧",
    featured: false,
    order: 20,
    status: "published",
  },
  {
    slug: "medical-humanities-and-general-practice-literacy",
    category: "humanities",
    subcategory: "medical-humanities",
    title: "医学人文与全科素养",
    shortDescription: "10 节课系统培养医学人文素养与全科执业能力",
    featured: false,
    order: 10,
    status: "published",
  },
  {
    slug: "medical-humanities-and-communication-skills",
    category: "humanities",
    subcategory: "medical-humanities",
    title: "医学人文与沟通技能",
    shortDescription: "6 节课提升医患沟通能力与人文关怀实践",
    featured: false,
    order: 20,
    status: "published",
  },
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

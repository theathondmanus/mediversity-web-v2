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
  "observership/international-clinical-observership": {
    "zh-CN": () => import("./observership/zh-CN/international-clinical-observership"),
    en: () => import("./observership/en/international-clinical-observership"),
  },
  "observership/senior-visiting-scholar": {
    "zh-CN": () => import("./observership/zh-CN/senior-visiting-scholar"),
    en: () => import("./observership/en/senior-visiting-scholar"),
  },
  "observership/short-term-overseas-study": {
    "zh-CN": () => import("./observership/zh-CN/short-term-overseas-study"),
    en: () => import("./observership/en/short-term-overseas-study"),
  },
  "observership/nursing-degree-progression": {
    "zh-CN": () => import("./observership/zh-CN/nursing-degree-progression"),
    en: () => import("./observership/en/nursing-degree-progression"),
  },
  "observership/international-medical-doctorate": {
    "zh-CN": () => import("./observership/zh-CN/international-medical-doctorate"),
    en: () => import("./observership/en/international-medical-doctorate"),
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
    cover: "/images/courses/oet-preparation.webp",
    coverAlt: "OET 备考课程 - 学生在语言实验室练习",
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
    cover: "/images/courses/preparatory-medical-english.webp",
    coverAlt: "预备通用英语 - 医学生在图书馆学习",
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
    cover: "/images/courses/medical-english-for-doctors.webp",
    coverAlt: "医生英语 - 中外医生协作讨论",
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
    cover: "/images/courses/medical-english-for-nurses.webp",
    coverAlt: "护士英语 - 护士在模拟病房练习沟通",
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
    cover: "/images/courses/pre-departure-medical-english.webp",
    coverAlt: "出国前医学英语 - 医疗人员在机场准备出发",
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
    cover: "/images/courses/medical-research-essentials.webp",
    coverAlt: "医学研究基础 - 研究人员在实验室分析数据",
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
    cover: "/images/courses/medical-writing-publication-bootcamp.webp",
    coverAlt: "医学写作与发表集训营 - 医生在书房撰写论文",
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
    cover: "/images/courses/medical-humanities-and-general-practice-literacy.webp",
    coverAlt: "医学人文与全科素养 - 医学生讨论伦理话题",
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
    cover: "/images/courses/medical-humanities-and-communication-skills.webp",
    coverAlt: "医学人文与沟通技能 - 医生与患者沟通练习",
  },
  {
    slug: "international-clinical-observership",
    category: "observership",
    subcategory: "all",
    title: "国际临床观摩项目",
    shortDescription: "沉浸国际顶尖医院，提升临床实践视野",
    featured: true,
    order: 10,
    status: "published",
    cover: "/images/courses/international-clinical-observership.webp",
  },
  {
    slug: "senior-visiting-scholar",
    category: "observership",
    subcategory: "all",
    title: "高级访问学者项目",
    shortDescription: "深度参与国际科研平台，打造国际学术竞争力",
    featured: true,
    order: 20,
    status: "published",
    cover: "/images/courses/senior-visiting-scholar.webp",
  },
  {
    slug: "short-term-overseas-study",
    category: "observership",
    subcategory: "all",
    title: "短期赴外研修项目",
    shortDescription: "聚焦专项主题，高效获取国际先进经验",
    featured: false,
    order: 30,
    status: "published",
    cover: "/images/courses/short-term-overseas-study.webp",
  },
  {
    slug: "nursing-degree-progression",
    category: "observership",
    subcategory: "all",
    title: "护理学历提升项目",
    shortDescription: "对接全球护理教育资源，助力职业发展升级",
    featured: false,
    order: 40,
    status: "published",
    cover: "/images/courses/nursing-degree-progression.webp",
  },
  {
    slug: "international-medical-doctorate",
    category: "observership",
    subcategory: "all",
    title: "国际医学博士项目",
    shortDescription: "链接欧洲顶尖医学院，培养国际科研人才",
    featured: false,
    order: 50,
    status: "published",
    cover: "/images/courses/international-medical-doctorate.webp",
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

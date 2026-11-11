import type { ProgrammeData } from "./types";

/**
 * Speaking Pathway — 独立课程体系（medical-english 下与现有课程并列的第二级）
 *
 * 结构与现有 registry 分离：
 * - 本文件只管理 Speaking Pathway 及其下设 4 门课程
 * - registry.ts 仍只索引 medical-english 下的 5 门独立课程，
 *   避免 Speaking Pathway 的课程混入原有的课程卡片列表与首页推荐
 */

export const PATHWAY_CATEGORY = "medical-english";
export const PATHWAY_SLUG = "speaking-pathway";

export interface PathwayCourseEntry {
  slug: string;
  /** 体系内排序，1–4 */
  order: number;
  zh: { title: string; tagline: string };
  en: { title: string; tagline: string };
  /** TODO(Manus): 卡片 cover，待补 public/images/courses/speaking-pathway-*.webp */
  cover?: string;
  coverAlt?: string;
}

export const pathwayCourses: PathwayCourseEntry[] = [
  {
    slug: "communication-foundations",
    order: 1,
    zh: {
      title: "医学英语基础沟通",
      tagline: "从日常临床交流入手，建立敢于开口、清晰表达的沟通信心。",
    },
    en: {
      title: "Medical Communication Foundations",
      tagline:
        "Build the confidence to start, maintain and complete everyday clinical conversations in English.",
    },
    coverAlt: "医护人员在模拟病房进行英语医患对话练习",
  },
  {
    slug: "patient-centred-communication",
    order: 2,
    zh: {
      title: "以患者为中心的临床沟通",
      tagline: "让临床问诊更有条理，让医患沟通更加清晰、有效且有温度。",
    },
    en: {
      title: "Patient-Centred Clinical Communication",
      tagline:
        "Communicate with clarity, empathy and confidence throughout the patient consultation.",
    },
    coverAlt: "医生在诊室中以患者为中心开展结构化问诊",
  },
  {
    slug: "advanced-healthcare-communication",
    order: 3,
    zh: {
      title: "进阶临床与团队沟通",
      tagline: "从常规医患沟通迈向复杂情境交流，提升专业表达与临床协作能力。",
    },
    en: {
      title: "Advanced Healthcare Communication",
      tagline:
        "Navigate challenging conversations and collaborate effectively in complex clinical environments.",
    },
    coverAlt: "多学科团队在病房进行结构化临床交接班",
  },
  {
    slug: "specialist-international-communication",
    order: 4,
    zh: {
      title: "专项与国际医疗沟通",
      tagline: "聚焦专业岗位与国际发展需求，提升特定医疗情境中的英语沟通能力。",
    },
    en: {
      title: "Specialist & International Communication",
      tagline:
        "Targeted communication training for specialist roles, international opportunities and professional growth.",
    },
    coverAlt: "医护人员在国际学术会议上进行专业汇报",
  },
];

/* ── Lazy loaders ── */

type LocaleLoaders = {
  "zh-CN": () => Promise<{ default: ProgrammeData }>;
  en: () => Promise<{ default: ProgrammeData }>;
};

const loaders: Record<string, LocaleLoaders> = {
  "communication-foundations": {
    "zh-CN": () => import("./speaking-pathway/zh-CN/communication-foundations"),
    en: () => import("./speaking-pathway/en/communication-foundations"),
  },
  "patient-centred-communication": {
    "zh-CN": () => import("./speaking-pathway/zh-CN/patient-centred-communication"),
    en: () => import("./speaking-pathway/en/patient-centred-communication"),
  },
  "advanced-healthcare-communication": {
    "zh-CN": () => import("./speaking-pathway/zh-CN/advanced-healthcare-communication"),
    en: () => import("./speaking-pathway/en/advanced-healthcare-communication"),
  },
  "specialist-international-communication": {
    "zh-CN": () => import("./speaking-pathway/zh-CN/specialist-international-communication"),
    en: () => import("./speaking-pathway/en/specialist-international-communication"),
  },
};

/** Load one Speaking Pathway course for a locale. Returns null if unknown. */
export async function loadPathwayCourse(
  slug: string,
  locale: string,
): Promise<ProgrammeData | null> {
  const localeLoaders = loaders[slug];
  if (!localeLoaders) return null;
  const load = localeLoaders[locale as keyof LocaleLoaders];
  if (!load) return null;
  const mod = await load();
  return mod.default;
}

/** All course slugs, for generateStaticParams. */
export function getAllPathwaySlugs(): string[] {
  return pathwayCourses.map((c) => c.slug);
}

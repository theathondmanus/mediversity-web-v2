import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "international-clinical-observership",
  category: "observership",
  subcategory: "all",
  title: "国际临床观摩项目",
  shortDescription: "沉浸国际顶尖医院，提升临床实践视野",
  metaDescription: "国际临床观摩项目 - 12 周沉浸式海外临床观摩，覆盖美、英、日、新等顶级医疗机构，临床方向精准匹配二级学科",
  duration: "12 周",
  audience: ["临床骨干医师", "医院重点科室人才", "有国际交流需求的医护团队"],
  featured: true,
  order: 10,
  status: "published",

  hero: {
    headline: "国际临床观摩项目",
    lede: "沉浸国际顶尖医院，提升临床实践视野",
    ctaLabel: "立即咨询",
    ctaHref: "/contact",
    image: "/images/courses/international-clinical-observership.webp",
    imageAlt: "国际临床观摩项目",
  },

  sections: [
    {
      type: "intro",
      title: "项目概览",
      body: "12 周沉浸式海外临床观摩项目，依托美国、英国、日本、新加坡等顶级医疗机构资源，为临床骨干医师与医院重点科室人才提供高质量国际临床交流机会。学员将通过门诊与手术观摩、跟随导师查房、参与科室会议与学术交流，全面拓展国际临床视野，理解多学科协作模式与以患者为中心的医疗实践。",
    },
    {
      type: "value-props",
      title: "项目内容",
      display: "list",
      items: [
        { title: "门诊与手术观摩", description: "" },
        { title: "跟随导师查房", description: "" },
        { title: "参与科室会议与学术交流", description: "" },
        { title: "亚专科精准匹配", description: "" },
        { title: "一对一导师带教", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "项目优势",
      display: "grid",
      items: [
        { title: "覆盖美国、英国、日本、新加坡等顶级医疗机构", description: "" },
        { title: "临床方向可精准匹配二级学科", description: "" },
        { title: "境内外双团队全程支持", description: "" },
        { title: "可衔接医学英语培训体系", description: "" },
        { title: "国际导师制带教模式", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "我们提供的服务",
      display: "timeline",
      items: [
        { title: "项目申请与匹配", description: "" },
        { title: "面试培训与签证辅导", description: "" },
        { title: "境外住宿与保险安排", description: "" },
        { title: "行前指导与海外支持", description: "" },
        { title: "全程项目协调服务", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开启 \"国际临床观摩项目\" 了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

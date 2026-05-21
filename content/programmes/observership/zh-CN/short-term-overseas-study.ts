import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "short-term-overseas-study",
  category: "observership",
  subcategory: "all",
  title: "短期赴外研修项目",
  shortDescription: "聚焦专项主题，高效获取国际先进经验",
  metaDescription: "短期赴外研修项目 - 5-10 天短期国际研修，国际顶级医院实地参访，海外知名专家专题授课",
  duration: "5-10 天",
  audience: ["医院管理团队", "科室负责人", "医护骨干团队", "专科能力提升需求人员"],
  featured: false,
  order: 30,
  status: "published",

  hero: {
    headline: "短期赴外研修项目",
    lede: "聚焦专项主题，高效获取国际先进经验",
    ctaLabel: "立即咨询",
    ctaHref: "/contact",
    image: "/images/courses/short-term-overseas-study.webp",
    imageAlt: "短期赴外研修项目",
  },

  sections: [
    {
      type: "intro",
      title: "项目概览",
      body: "5-10 天短期国际研修项目，专为医院管理团队、科室负责人与医护骨干团队设计。学员将通过国际顶级医院实地参访、海外知名专家专题授课，在临床与管理双维度获得国际先进经验。项目高效灵活，适合团队交流，结业可获得海外研修证书。",
    },
    {
      type: "value-props",
      title: "项目方向",
      display: "list",
      items: [
        { title: "医院管理", description: "" },
        { title: "护理管理", description: "" },
        { title: "肿瘤科", description: "" },
        { title: "神经内/外科", description: "" },
        { title: "消化内科", description: "" },
        { title: "儿外科等多个方向", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "项目优势",
      display: "grid",
      items: [
        { title: "国际顶级医院实地参访", description: "" },
        { title: "海外知名专家专题授课", description: "" },
        { title: "临床与管理双维度覆盖", description: "" },
        { title: "高效灵活，适合团队交流", description: "" },
        { title: "可获得海外研修证书", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "我们提供的服务",
      display: "timeline",
      items: [
        { title: "研修路线规划", description: "" },
        { title: "海外医院对接", description: "" },
        { title: "出入境手续协助", description: "" },
        { title: "境外交通、住宿与保险", description: "" },
        { title: "全程翻译与随行支持", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开启 \"短期赴外研修项目\" 了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

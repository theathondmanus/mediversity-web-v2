import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "senior-visiting-scholar",
  category: "observership",
  subcategory: "all",
  title: "高级访问学者项目",
  shortDescription: "深度参与国际科研平台，打造国际学术竞争力",
  metaDescription: "高级访问学者项目 - 6-12 个月海外科研进修，参与导师课题与论文合作，建立长期国际科研合作渠道",
  duration: "6-12 个月",
  audience: ["学科带头人", "科研型医护人员", "高校医学教师", "有论文与科研提升需求的人才"],
  featured: true,
  order: 20,
  status: "published",

  hero: {
    headline: "高级访问学者项目",
    lede: "深度参与国际科研平台，打造国际学术竞争力",
    ctaLabel: "立即咨询",
    ctaHref: "/contact",
    image: "/images/courses/senior-visiting-scholar.webp",
    imageAlt: "高级访问学者项目",
  },

  sections: [
    {
      type: "intro",
      title: "项目概览",
      body: "6-12 个月海外科研进修项目，依托世界百强名校与国际顶级研究平台，为学科带头人、科研型医护人员与高校医学教师提供深度学术访问与科研合作机会。学员将参与导师科研课题、合作发表学术论文，学习国际科研方法论，并可在多数项目中同步开展临床观摩，建立长期国际科研合作渠道。",
    },
    {
      type: "value-props",
      title: "项目内容",
      display: "list",
      items: [
        { title: "参与导师科研课题", description: "" },
        { title: "学术论文合作与发表", description: "" },
        { title: "学习国际科研方法论", description: "" },
        { title: "海外实验室及研究平台实践", description: "" },
        { title: "部分项目可同步开展临床观摩", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "项目优势",
      display: "grid",
      items: [
        { title: "合作院校涵盖世界百强名校", description: "" },
        { title: "多数项目无需雅思/托福成绩", description: "" },
        { title: "提供海外安置与生活支持", description: "" },
        { title: "建立长期国际科研合作渠道", description: "" },
        { title: "面试及签证辅导经验成熟", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "我们提供的服务",
      display: "timeline",
      items: [
        { title: "导师及院校匹配", description: "" },
        { title: "申请材料优化", description: "" },
        { title: "面试与签证辅导", description: "" },
        { title: "海外住宿与安置支持", description: "" },
        { title: "全周期项目管理服务", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开启 \"高级访问学者项目\" 了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

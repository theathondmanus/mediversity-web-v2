import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "nursing-degree-progression",
  category: "observership",
  subcategory: "all",
  title: "护理学历提升项目",
  shortDescription: "对接全球护理教育资源，助力职业发展升级",
  metaDescription: "护理学历提升项目 - 国际护理本科与硕士课程，海外院校联合培养，中国教育部学历认证",
  duration: "专升本 1 年 / 硕士 1-2 年",
  audience: ["护理从业人员", "护理院校学生", "护理院校教师", "医疗机构护理团队"],
  featured: false,
  order: 40,
  status: "published",

  hero: {
    headline: "护理学历提升项目",
    lede: "对接全球护理教育资源，助力职业发展升级",
    ctaLabel: "立即咨询",
    ctaHref: "/contact",
    image: "/images/courses/nursing-degree-progression.webp",
    imageAlt: "护理学历提升项目",
  },

  sections: [
    {
      type: "intro",
      title: "项目概览",
      body: "面向护理从业人员、护理院校学生与教师、以及医疗机构护理团队的国际学历提升项目。专升本周期 1 年、硕士周期 1-2 年，依托海外院校联合培养与国际护理实践体系，帮助学员系统提升专业能力与国际竞争力。合作院校国际认可度高，可获得中国教育部学历认证，部分项目无强制语言成绩要求，适配在职人员的学习节奏。",
    },
    {
      type: "value-props",
      title: "项目内容",
      display: "list",
      items: [
        { title: "国际护理本科 / 硕士课程", description: "" },
        { title: "海外院校联合培养", description: "" },
        { title: "国际护理实践体系学习", description: "" },
        { title: "学历认证与职业发展支持", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "项目优势",
      display: "grid",
      items: [
        { title: "合作院校国际认可度高", description: "" },
        { title: "中国教育部学历认证", description: "" },
        { title: "部分项目无强制语言成绩", description: "" },
        { title: "适配在职人员学习节奏", description: "" },
        { title: "海外就业与升学路径广阔", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "我们提供的服务",
      display: "timeline",
      items: [
        { title: "院校与专业匹配", description: "" },
        { title: "申请材料辅导", description: "" },
        { title: "学业规划支持", description: "" },
        { title: "签证与海外落地服务", description: "" },
        { title: "全流程升学管理", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开启 \"护理学历提升项目\" 了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

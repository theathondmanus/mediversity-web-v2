import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "international-medical-doctorate",
  category: "observership",
  subcategory: "all",
  title: "国际医学博士项目",
  shortDescription: "链接欧洲顶尖医学院，培养国际科研人才",
  metaDescription: "国际医学博士项目 - 3-4 年国际医学博士培养，对接欧洲顶尖医学院，国际认可博士学位",
  duration: "3-4 年",
  audience: ["医护人员", "医学科研人员", "医学生", "有长期学术发展规划的人才"],
  featured: false,
  order: 50,
  status: "published",

  hero: {
    headline: "国际医学博士项目",
    lede: "链接欧洲顶尖医学院，培养国际科研人才",
    ctaLabel: "立即咨询",
    ctaHref: "/contact",
    image: "/images/courses/international-medical-doctorate.webp",
    imageAlt: "国际医学博士项目",
  },

  sections: [
    {
      type: "intro",
      title: "项目概览",
      body: "3-4 年国际医学博士培养项目，对接欧洲顶尖医学院与海外科研平台，面向医护人员、医学科研人员、医学生及有长期学术发展规划的人才。学员将围绕导师课题进行深度科研训练，参与国际学术交流与合作，建立全球学术网络，培养长周期、可持续的国际科研能力。项目授予国际认可的博士学位。",
    },
    {
      type: "value-props",
      title: "项目内容",
      display: "list",
      items: [
        { title: "国际医学博士培养", description: "" },
        { title: "海外科研平台训练", description: "" },
        { title: "导师课题研究", description: "" },
        { title: "国际学术交流与合作", description: "" },
        { title: "长周期科研能力建设", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "项目优势",
      display: "grid",
      items: [
        { title: "对接欧洲顶尖医学院", description: "" },
        { title: "国际认可博士学位", description: "" },
        { title: "深度科研资源支持", description: "" },
        { title: "国际导师团队指导", description: "" },
        { title: "有助于建立全球学术网络", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "我们提供的服务",
      display: "timeline",
      items: [
        { title: "博士项目咨询与评估", description: "" },
        { title: "导师与研究方向匹配", description: "" },
        { title: "申请材料与面试辅导", description: "" },
        { title: "签证与海外安置支持", description: "" },
        { title: "长周期学业跟踪服务", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开启 \"国际医学博士项目\" 了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

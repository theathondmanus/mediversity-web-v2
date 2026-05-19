import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-humanities-and-communication-skills",
  category: "humanities",
  subcategory: "medical-humanities",
  title: "Medical Humanities and Communication Skills",
  shortDescription: "Empathy-driven care — core skills for healthcare professionals",
  metaDescription: "Medical Humanities and Communication Skills - Empathy-driven care — core skills for healthcare professionals",
  duration: "6 lessons (2 hours each)",
  audience: ["Doctors", "Healthcare Practitioners"],
  featured: false,
  order: 20,
  status: "published",

  hero: {
    headline: "Medical Humanities and Communication Skills",
    lede: "Empathy-driven care — core skills for healthcare professionals",
    ctaLabel: "Get Started Today",
    ctaHref: "/contact",
    image: "/images/courses/medical-humanities-and-communication-skills.webp",
    imageAlt: "Medical Humanities & Communication Skills Course",
  },

  sections: [
    {
      type: "intro",
      title: "Course Overview",
      body: "本课程旨在帮助医疗从业者掌握核心沟通技巧与人文素养，提供以患者为中心的医疗服务。除专业知 识外，课程聚焦共情能力、医学伦理、患者心理、跨文化意识及医患关系管理。学员将通过沉浸式实 践活动，掌握更具温度、专业性与适应性的沟通技巧，从而在复杂临床场景中实现高效共情与精准决策。",
    },
    {
      type: "value-props",
      title: "Learning Objectives",
      display: "list",
      items: [
        {
          title: "培养人文价值观与以患者为中心的思维模式",
          description: "",
        },
        {
          title: "通过高效医患沟通建立信任",
          description: "",
        },
        {
          title: "运用跨文化技能服务多元患者群体",
          description: "",
        },
        {
          title: "在临床实践中强化同理心与情商",
          description: "",
        },
        {
          title: "运用医学伦理进行共情与伦理决策",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "Teaching Methods",
      display: "timeline",
      items: [
        {
          title: "高仿真案例教学",
          description: "",
        },
        {
          title: "角色扮演模拟训练",
          description: "",
        },
        {
          title: "互动式深度对话",
          description: "",
        },
        {
          title: "结构化实践任务",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "Curriculum",
      display: "table",
      items: [
        {
          title: "1. 医学人文与职业身份认同",
          description: "1. 医学人文与职业身份认同",
        },
        {
          title: "2. 医患沟通技巧",
          description: "2. 医患沟通技巧",
        },
        {
          title: "3. 患者心理与情绪支持",
          description: "3. 患者心理与情绪支持",
        },
        {
          title: "4. 医学伦理与共情照护",
          description: "4. 医学伦理与共情照护",
        },
        {
          title: "5. 跨文化沟通",
          description: "5. 跨文化沟通",
        },
        {
          title: "6. 医疗从业者的身心健康",
          description: "6. 医疗从业者的身心健康",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start \"Medical Humanities and Communication Skills\"?",
    buttonLabel: "Get in Touch",
    buttonHref: "/contact",
  },
};

export default data;

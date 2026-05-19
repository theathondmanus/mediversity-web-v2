import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-humanities-and-communication-skills",
  category: "humanities",
  subcategory: "medical-humanities",
  title: "医学人文与沟通技能",
  shortDescription: "提升共情照护：赋能医疗从业者的核心技能",
  metaDescription: "医学人文与沟通技能 - 提升共情照护：赋能医疗从业者的核心技能",
  duration: "6 节课（每节 2 小时）",
  audience: ["医生", "医护人员"],
  featured: false,
  order: 20,
  status: "published",

  hero: {
    headline: "医学人文与沟通技能",
    lede: "提升共情照护：赋能医疗从业者的核心技能",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/medical-humanities-and-communication-skills.webp",
    imageAlt: "医学人文与沟通技能课程",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "本课程旨在帮助医疗从业者掌握核心沟通技巧与人文素养，提供以患者为中心的医疗服务。除专业知 识外，课程聚焦共情能力、医学伦理、患者心理、跨文化意识及医患关系管理。学员将通过沉浸式实 践活动，掌握更具温度、专业性与适应性的沟通技巧，从而在复杂临床场景中实现高效共情与精准决策。",
    },
    {
      type: "value-props",
      title: "学习目标",
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
      title: "教学方法",
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
      title: "课程内容",
      display: "table",
      items: [
        {
          title: "1. 医学人文与职业身份认同",
          description: "医学人文的核心价值观；医护人员的职业身份认同与职业倦怠管理；案例分析：以患者为中心的护理实践",
        },
        {
          title: "2. 医患沟通技巧",
          description: "以患者为中心的沟通模型（SPIKES、BATHE）；积极倾听与非语言沟通；角色扮演：与焦虑患者的沟通演练",
        },
        {
          title: "3. 患者心理与情绪支持",
          description: "患者的常见心理状态（焦虑、恐惧、抑郁）；建立信任与提供心理支持；案例分析：应对愤怒与不信任情绪",
        },
        {
          title: "4. 医学伦理与共情照护",
          description: "医学伦理四原则（自主、行善、不伤害、公正）；伦理困境分析与决策制定；角色扮演：处理患者拒绝治疗的场景",
        },
        {
          title: "5. 跨文化沟通",
          description: "文化对健康观念的影响；跨文化沟通策略（语言、宗教差异）；医学英语中的共情表达技巧",
        },
        {
          title: "6. 医疗从业者的身心健康",
          description: "情绪管理与压力应对；高压环境下保持同理心；小组讨论：人文素养的临床实践应用",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「医学人文与沟通技能」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "patient-centred-communication",
  category: "medical-english",
  subcategory: "speaking-pathway",
  title: "以患者为中心的临床沟通",
  shortDescription:
    "让临床问诊更有条理，让医患沟通更加清晰、有效且有温度。",
  metaDescription:
    "MVG 以患者为中心的临床沟通课程，围绕结构化问诊、病史采集、症状评估、医疗信息解释与理解确认，结合 Calgary–Cambridge 临床问诊框架开展英语沟通训练。",
  duration: "6 个模块",
  audience: ["医生", "护士", "医疗卫生专业人员"],
  featured: false,
  order: 20,
  status: "published",
  cover: "/images/courses/speaking-pathway-patient-centred.webp",
  coverAlt: "医护人员与模拟患者平等交流的手部与桌面场景",

  hero: {
    headline: "以患者为中心的临床沟通",
    lede: "让临床问诊更有条理，让医患沟通更加清晰、有效且有温度。",
    ctaLabel: "咨询本课程",
    ctaHref: "/contact",
    image: "/images/courses/speaking-pathway-patient-centred.webp",
    imageAlt: "医护人员与模拟患者平等交流的手部与桌面场景",
  },

  sections: [
    {
      type: "intro",
      title: "课程简介",
      body: "一次有效的临床问诊，不仅需要准确提出医学问题，还需要充分倾听患者、理解其关注点，并通过清晰、易懂的语言传递专业医疗信息。\n\n以患者为中心的临床沟通课程聚焦完整的临床问诊过程，帮助医护人员提升结构化问诊、病史采集、症状评估、医疗信息解释及患者理解确认等核心沟通能力。\n\n课程借鉴国际临床沟通教学理念，包括 Calgary–Cambridge（卡尔加里—剑桥）临床问诊框架，将规范化的问诊结构与患者中心理念相结合，强调专业性、清晰度、同理心和患者参与。\n\n通过真实案例分析、模拟问诊、角色扮演及针对性反馈，帮助学员更有条理地开展英语临床交流，同时关注患者的感受、需求及理解程度。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        { title: "使用清晰、合理的结构组织英语临床问诊", description: "" },
        { title: "通过有效提问和倾听，系统采集患者病史及相关信息", description: "" },
        { title: "深入了解患者症状、主要顾虑及其对疾病的认知", description: "" },
        { title: "使用易于理解的语言解释检查、诊疗过程及相关医疗信息", description: "" },
        { title: "根据患者的不同需求调整沟通方式，体现同理心和尊重", description: "" },
        { title: "有效总结重点、确认患者理解，并规范结束问诊", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "教学方式",
      display: "timeline",
      items: [
        { title: "临床案例导向的互动教学", description: "" },
        { title: "结构化问诊示范", description: "" },
        { title: "模拟患者交流", description: "" },
        { title: "医患角色扮演及小组练习", description: "" },
        { title: "临床沟通框架应用", description: "" },
        { title: "个性化反馈与实践评价", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "课程特色",
      display: "grid",
      items: [
        {
          title: "系统化问诊框架",
          description: "帮助学员掌握结构化的临床沟通方法，使问诊过程更加清晰、有序。",
        },
        {
          title: "以患者为中心",
          description: "注重倾听患者、理解患者关注点，并通过同理回应提升沟通效果。",
        },
        {
          title: "真实临床案例",
          description: "采用贴近医疗实际工作的案例进行训练，提高学习内容的岗位相关性。",
        },
        {
          title: "综合沟通能力训练",
          description: "将提问、倾听、解释、回应及问诊管理等技能融入完整临床场景。",
        },
        {
          title: "实践评价与反馈",
          description: "通过模拟问诊发现沟通优势与不足，明确改进方向。",
        },
        {
          title: "灵活入学",
          description: "已具备相应基础英语沟通能力的学员，可直接选择本课程，无须完成课程一。",
        },
      ],
    },
    {
      type: "value-props",
      title: "课程内容",
      display: "table",
      items: [
        { title: "模块一：问诊结构与开场", description: "建立联系、明确问诊目的、合理安排问诊流程" },
        { title: "模块二：病史采集", description: "开放式与封闭式提问、主动倾听及信息采集" },
        { title: "模块三：症状与疼痛评估", description: "运用 OPQRST 等框架系统了解症状和疼痛情况" },
        { title: "模块四：医疗信息解释", description: "清晰解释体格检查、检验检查及临床发现" },
        { title: "模块五：患者理解与参与", description: "回应患者顾虑、解释诊疗选择、确认患者理解" },
        { title: "模块六：综合模拟问诊", description: "完整临床问诊实践及针对性反馈" },
      ],
    },
    {
      type: "intro",
      title: "预期学习成果",
      body: "完成课程后，学员能够在模拟临床场景中完成结构化英语问诊，较为有效地采集相关信息、解释医疗内容、回应患者需求，并体现以患者为中心的沟通理念。",
    },
    {
      type: "intro",
      title: "适合人群",
      body: "适合已具备基本英语口语交流能力，希望进一步提升英语临床问诊、患者沟通及医疗信息解释能力的医生、护士及其他医护人员。\n\n学员可独立报名，也可将本课程作为医学英语口语与临床沟通能力提升课程体系的第二阶段。",
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "将专业临床知识转化为更清晰、更有同理心的医患沟通。",
    buttonLabel: "咨询本课程",
    buttonHref: "/contact",
  },
};

export default data;

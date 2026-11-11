import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "advanced-healthcare-communication",
  category: "medical-english",
  subcategory: "speaking-pathway",
  title: "进阶临床与团队沟通",
  shortDescription:
    "从常规医患沟通迈向复杂情境交流，提升专业表达与临床协作能力。",
  metaDescription:
    "MVG 进阶临床与团队沟通课程，训练困难对话、敏感话题沟通、SBAR 结构化临床交接班及多学科团队协作等复杂临床英语沟通能力。",
  duration: "6 个模块",
  audience: ["医生", "护士", "医疗卫生专业人员"],
  featured: false,
  order: 30,
  status: "published",

  hero: {
    headline: "进阶临床与团队沟通",
    lede: "从常规医患沟通迈向复杂情境交流，提升专业表达与临床协作能力。",
    ctaLabel: "咨询本课程",
    ctaHref: "/contact",
    // TODO(Manus): 待补 public/images/courses/speaking-pathway-advanced.webp
    image: "",
    imageAlt: "多学科团队在病房进行结构化临床交接班",
  },

  sections: [
    {
      type: "intro",
      title: "课程简介",
      body: "临床工作中的沟通情境往往复杂多变。面对患者的情绪反应、敏感医疗信息、不同专业之间的信息交接，以及多学科团队协作，医护人员需要具备更加灵活、准确且专业的沟通能力。\n\n进阶临床与团队沟通课程面向希望进一步提升英语临床沟通水平的医疗卫生专业人员，重点培养复杂医患交流、敏感话题沟通、结构化临床交接班及多学科团队协作等能力。\n\n课程结合国际临床沟通理念及实际工作场景，引入 SBAR（情况、背景、评估、建议）等结构化沟通工具，帮助学员更加清晰、有序地传递临床信息。\n\n通过复杂案例讨论、情景模拟和团队沟通练习，帮助学员提高应对具有挑战性的临床交流任务的能力。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        { title: "在复杂或具有挑战性的临床情境中进行专业、得体的英语沟通", description: "" },
        { title: "以清晰、具有同理心的方式回应患者疑虑及情绪反应", description: "" },
        { title: "根据不同患者和沟通对象调整语言表达与解释方式", description: "" },
        { title: "运用 SBAR 框架进行结构化临床信息交接", description: "" },
        { title: "清晰汇报患者情况，并参与多学科团队讨论", description: "" },
        { title: "在复杂临床场景中展示更成熟的专业沟通与团队协作能力", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "教学方式",
      display: "timeline",
      items: [
        { title: "复杂临床案例分析", description: "" },
        { title: "困难沟通情景模拟", description: "" },
        { title: "结构化交接班练习", description: "" },
        { title: "多学科团队交流模拟", description: "" },
        { title: "角色扮演与观察反馈", description: "" },
        { title: "综合实践评价", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "课程特色",
      display: "grid",
      items: [
        {
          title: "聚焦复杂临床场景",
          description: "针对医疗工作中常见的沟通难点，开展实用性训练。",
        },
        {
          title: "专业表达与同理沟通并重",
          description: "在提高信息表达准确性的同时，关注患者情绪与沟通体验。",
        },
        {
          title: "结构化沟通工具",
          description: "学习应用 SBAR 等方法，提升临床信息交接的清晰度与完整性。",
        },
        {
          title: "加强团队协作",
          description: "训练病例汇报、多学科讨论及跨专业交流能力。",
        },
        {
          title: "模拟实践与反思",
          description: "在安全、支持性的学习环境中练习复杂沟通任务，并通过反馈持续改进。",
        },
        {
          title: "灵活进阶",
          description: "既可作为独立培训课程，也可衔接以患者为中心的临床沟通课程。",
        },
      ],
    },
    {
      type: "value-props",
      title: "课程内容",
      display: "table",
      items: [
        { title: "模块一：复杂医患交流", description: "高阶提问、深入倾听及沟通方式调整" },
        { title: "模块二：困难对话", description: "回应患者疑虑、不确定性及情绪反应" },
        { title: "模块三：敏感话题沟通", description: "以专业、清晰且富有同理心的方式解释复杂信息" },
        { title: "模块四：临床信息交接", description: "SBAR 框架及结构化交接班" },
        { title: "模块五：多学科团队沟通", description: "病例汇报、MDT 讨论及跨专业协作" },
        { title: "模块六：综合情景模拟", description: "复杂医患与团队沟通实践及反馈" },
      ],
    },
    {
      type: "intro",
      title: "预期学习成果",
      body: "完成课程后，学员能够在模拟临床情境中更加有效地应对复杂医患沟通任务，清晰传递临床信息，并更有信心地参与多学科团队交流与协作。",
    },
    {
      type: "intro",
      title: "适合人群",
      body: "适合已具备一定英语临床沟通经验，希望进一步提升复杂患者交流、临床交接班、病例汇报及专业协作能力的医护人员。\n\n具备相应基础能力的学员可直接报名，无须先完成课程一或课程二。",
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "提升复杂临床情境下的沟通能力，让专业交流更加清晰、高效且富有同理心。",
    buttonLabel: "咨询本课程",
    buttonHref: "/contact",
  },
};

export default data;

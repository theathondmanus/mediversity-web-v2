import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "communication-foundations",
  category: "medical-english",
  subcategory: "speaking-pathway",
  title: "医学英语基础沟通",
  shortDescription:
    "从日常临床交流入手，建立敢于开口、清晰表达的沟通信心。",
  metaDescription:
    "MVG 医学英语基础沟通课程，6 次课 × 90 分钟，训练职业介绍、建立医患关系、提问、倾听确认与简单医疗解释等基础临床英语口语能力。",
  duration: "6 次课 × 90 分钟",
  audience: ["医生", "护士", "医疗卫生专业人员"],
  featured: false,
  order: 10,
  status: "published",
  cover: "/images/courses/speaking-pathway-foundations.webp",
  coverAlt: "医护人员在教学室进行成对英语沟通练习",

  hero: {
    headline: "医学英语基础沟通",
    lede: "从日常临床交流入手，建立敢于开口、清晰表达的沟通信心。",
    ctaLabel: "咨询本课程",
    ctaHref: "/contact",
    image: "/images/courses/speaking-pathway-foundations.webp",
    imageAlt: "医护人员在教学室进行成对英语沟通练习",
  },

  sections: [
    {
      type: "intro",
      title: "课程简介",
      body: "良好的临床沟通始于扎实的语言表达基础，以及倾听、理解和回应他人的能力。\n\n医学英语基础沟通课程旨在帮助医护人员掌握日常临床工作中常用的英语表达和基础沟通技巧，逐步建立使用英语与患者交流的信心。\n\n课程围绕医护人员在实际工作中经常遇到的沟通场景展开，重点训练自我介绍、建立医患关系、询问患者情况、理解及确认信息、解释简单医疗操作，以及恰当结束交流等实用技能。\n\n通过教师示范、情景对话、角色扮演和反复口语练习，帮助学员从理解常用表达逐步过渡到独立完成基础临床交流。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        { title: "使用恰当的英语进行职业介绍，主动与患者建立沟通", description: "" },
        { title: "围绕常见症状和患者需求提出清晰、适当的问题", description: "" },
        { title: "运用主动倾听、澄清和确认技巧，提升沟通准确性", description: "" },
        { title: "使用简单易懂的语言解释基础检查及医疗操作", description: "" },
        { title: "提供基本建议、确认患者理解，并得体地结束交流", description: "" },
        { title: "更有信心地完成简短、结构化的英语医患对话", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "教学方式",
      display: "timeline",
      items: [
        { title: "教师引导式互动教学", description: "" },
        { title: "常见临床对话示范", description: "" },
        { title: "英语表达与发音练习", description: "" },
        { title: "医患角色扮演及情景模拟", description: "" },
        { title: "双人及小组互动练习", description: "" },
        { title: "针对性反馈与实践评价", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "课程特色",
      display: "grid",
      items: [
        {
          title: "贴近临床，注重实用",
          description:
            "围绕日常医疗工作中的高频沟通场景设计教学内容，让学员学有所用。",
        },
        {
          title: "循序渐进，建立信心",
          description:
            "从简单问答逐步过渡到完整对话，通过反复练习增强表达流利度和沟通信心。",
        },
        {
          title: "强调患者体验",
          description:
            "不仅关注语言是否准确，也注重沟通中的礼貌、倾听、同理心和专业态度。",
        },
        {
          title: "结构清晰，逐步提升",
          description:
            "按照建立联系、提问、澄清、解释和结束交流的逻辑组织学习。",
        },
        {
          title: "反馈具体，帮助改进",
          description:
            "结合实际练习，为学员提供关于表达清晰度、互动方式和沟通效果的建议。",
        },
        {
          title: "独立选修，灵活进阶",
          description:
            "课程可单独报名，完成后也可根据需要继续学习更高阶段的课程。",
        },
      ],
    },
    {
      type: "value-props",
      title: "课程内容",
      display: "table",
      items: [
        {
          title: "第一课：建立联系",
          description: "职业介绍、患者问候与建立初步信任",
        },
        {
          title: "第二课：有效提问",
          description: "询问症状及患者需求，使用适当的追问技巧",
        },
        {
          title: "第三课：倾听与澄清",
          description: "主动倾听、信息确认、澄清表达及同理回应",
        },
        {
          title: "第四课：清晰解释",
          description: "简单检查、检验及医疗操作的英语解释",
        },
        {
          title: "第五课：建议与结束交流",
          description: "提供基础建议、确认理解及结束对话",
        },
        {
          title: "第六课：综合实践",
          description: "完整医患情景模拟、实践评价及反馈",
        },
      ],
    },
    {
      type: "intro",
      title: "预期学习成果",
      body: "完成课程后，学员能够在模拟临床情境中完成约 3—5 分钟的基础英语医患交流，较为清晰地进行提问、倾听、解释及回应，并展示适当的专业沟通技巧。",
    },
    {
      type: "intro",
      title: "适合人群",
      body: "适合已经掌握一定医学英语词汇，但在实际开口交流、组织语言或与患者进行英语对话时仍缺乏信心的医护人员。\n\n也适合希望为临床团队开展基础医学英语口语培训的医院和医疗机构。\n\n本课程可以独立学习，无须报名完整课程体系。",
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "从基础交流开始，逐步建立专业、自信的英语临床沟通能力。",
    buttonLabel: "咨询本课程",
    buttonHref: "/contact",
  },
};

export default data;

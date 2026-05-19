import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-humanities-and-general-practice-literacy",
  category: "humanities",
  subcategory: "medical-humanities",
  title: "医学人文与全科医学素养",
  shortDescription: "用专业解读疾病，用对话传递关怀",
  metaDescription: "医学人文与全科医学素养 - 用专业解读疾病，用对话传递关怀",
  duration: "10 节课（每节 2 小时）",
  audience: ["全科医生", "医疗人文学习者"],
  featured: false,
  order: 10,
  status: "published",

  hero: {
    headline: "医学人文与全科医学素养",
    lede: "用专业解读疾病，用对话传递关怀",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/medical-humanities-and-general-practice-literacy.webp",
    imageAlt: "医学人文与全科医学素养课程",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "本课程旨在为医学生和医疗从业者提供医学人文知识、全科医学思维及实用沟通技能。通过真实案例 研讨、高仿真情景模拟及跨学科协作训练，学员将系统掌握以患者为中心的诊疗思维模式，提升伦理 敏感度与沟通效能。课程聚焦全球医疗体系中的全科医学角色，结合国际前沿经验与中国基层医疗实 际需求，培养学员在复杂医疗场景下的临床推理能力、跨学科协作意识及职业韧性，助力其成为兼具 技术精湛与人文温度的复合型医疗人才。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        {
          title: "通过医学人文核心理念培养人文关怀",
          description: "",
        },
        {
          title: "在临床决策中应用医学伦理",
          description: "",
        },
        {
          title: "提升医患沟通以增强信任与服务质量",
          description: "",
        },
        {
          title: "理解全科医学在医疗体系中的原则与作用",
          description: "",
        },
        {
          title: "培养跨学科临床思维",
          description: "",
        },
        {
          title: "通过案例与实践强化临床推理与应变能力",
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
          title: "案例分析",
          description: "",
        },
        {
          title: "情景模拟",
          description: "",
        },
        {
          title: "跨学科阅读",
          description: "",
        },
        {
          title: "实践练习",
          description: "",
        },
        {
          title: "小组讨论",
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
          title: "1. 医学人文导论：医学不仅是科学，更是人文",
          description: "医学人文的定义与发展历程；医学与人文的融合：案例分析；健康、疾病与文化：社会对健康的不同理解；现代医学的局限与人文关怀的重要性",
        },
        {
          title: "2. 医学伦理与临床决策：伦理挑战与价值判断",
          description: "医学伦理四原则（自主、行善、不伤害、公正）；伦理困境案例分析（如器官移植、资源分配）；知情同意的法律与道德要求；临床伦理决策模拟练习",
        },
        {
          title: "3. 医患沟通与同理心训练：建立信任与提升患者体验",
          description: "医患沟通模型（SPIKES 模型）；病情信息与坏消息的有效传达；同理心训练：倾听与回应技巧；跨文化沟通：与多元背景患者建立信任；应对困难患者的策略",
        },
        {
          title: "4. 全科医学的基础与全球视角：全科医生的核心能力",
          description: "全科医学的核心概念与价值观；全球全科医学体系比较（英国 NHS、澳大利亚全科体系、中国基层医疗）；全科医生的角色：从诊疗到健康促进；以患者为中心的医疗模式实施",
        },
        {
          title: "5. 跨学科视角下的医学：文学、哲学、历史与医学",
          description: "叙事医学与患者故事；文学与医学：医生如何从文学中学习倾听？（阅读与讨论：《医生的故事》《疾病的隐喻》）；医学史：从希波克拉底到现代医学；医学伦理的哲学思考（如功利主义与义务论）",
        },
        {
          title: "6. 医疗从业者的心理韧性：如何应对压力与职业倦怠？",
          description: "医疗从业者的心理压力与职业倦怠；高压环境下的情绪调节策略；医疗行业内的心理支持体系；正念训练与情绪调节技巧",
        },
        {
          title: "7. 全科医学临床实践：初步诊断与综合评估",
          description: "全科医生与专科医生的诊断思维差异；慢性病管理：如何支持患者自我管理？；综合评估与个性化治疗的实施；临床案例分析及推理训练",
        },
        {
          title: "8. 特殊人群的医疗照护：提供个体化服务",
          description: "老年医学与姑息治疗；特殊人群的医疗需求；健康的社会决定因素；心理健康与心理障碍的管理",
        },
        {
          title: "9. 全科医学见习：亲身体验基层医疗",
          description: "观察基层医疗机构中全科医生的日常工作；医患沟通实践训练（现场案例分析）；将人文关怀融入临床诊疗；导师指导与小组反思讨论",
        },
        {
          title: "10. 总结与实践应用：案例研究与职业发展规划",
          description: "课程内容回顾与整合；真实案例报告的撰写与汇报；医学人文在职业发展中的应用；个人发展规划与未来学习路径",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「医学人文与全科医学素养」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

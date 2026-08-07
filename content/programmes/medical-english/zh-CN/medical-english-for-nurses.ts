import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-english-for-nurses",
  category: "medical-english",
  subcategory: "clinical",
  title: "护理英语课程",
  shortDescription: "一个为护理从业人员量身定制的高级实践导向课程，旨在提升其语言能力和沟通技巧",
  metaDescription: "护理英语课程 - 一个为护理从业人员量身定制的高级实践导向课程，旨在提升其语言能力和沟通技巧",
  duration: "50 节课",
  audience: ["护士", "护理专业人士"],
  featured: true,
  order: 30,
  status: "published",

  hero: {
    headline: "护理英语课程",
    lede: "一个为护理从业人员量身定制的高级实践导向课程，旨在提升其语言能力和沟通技巧",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/medical-english-for-nurses.webp",
    imageAlt: "护士英语课程",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "护士医学英语课程是一门专为护士设计的专业课程，旨在提升其在英语医疗环境中有效进行患者护理 和协作所需的沟通技巧和医学词汇。该课程围绕职业英语测试（OET）结构，为护士提供日常与患者、 同事及其他医疗专业人士互动所需的实用语言技能。课程精心策划，帮助护士增强专业能力，自信应 对医疗场景，提升职业表现。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        {
          title: "医学术语发展：全面掌握医学术语及其在临床中的应用",
          description: "",
        },
        {
          title: "提升临床沟通技能：通过职业英语测试（OET）材料提高护理场景中的听、说、读、写能力",
          description: "",
        },
        {
          title: "改善患者沟通：在患者评估、健康检查和紧急情况下促进有效沟通",
          description: "",
        },
        {
          title: "增强患者护理中的能力与同理心：培养准确且富有同理心的患者教育和治疗信息传达能力",
          description: "",
        },
        {
          title: "强化文档与报告能力：掌握医疗环境中所需的高级英语结构，以实现清晰的文档与报告",
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
          title: "互动与协作学习",
          description: "",
        },
        {
          title: "角色扮演、模拟与案例分析",
          description: "",
        },
        {
          title: "基于 OET 的结构化练习",
          description: "",
        },
        {
          title: "小组讨论与互评",
          description: "",
        },
        {
          title: "多媒体资料",
          description: "",
        },
        {
          title: "社区支持",
          description: "",
        },
        {
          title: "辅导与指导",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "核心特色",
      display: "grid",
      items: [
        {
          title: "全面且个性化的学习路径",
          description: "",
        },
        {
          title: "国际认可标准的整合",
          description: "",
        },
        {
          title: "互动学习与支持性环境",
          description: "",
        },
        {
          title: "文化敏感与有效沟通",
          description: "",
        },
        {
          title: "实用、相关且专业导向",
          description: "",
        },
        {
          title: "持续进步跟踪",
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
          title: "基础知识",
          description: "健康与疾病 / 身体部位 1+2 / 身体功能",
        },
        {
          title: "医学与辅助医学人员与场所",
          description: "医务人员 1+2 / 护士 / 辅助卫生专业人员 / 医院 / 初级医疗",
        },
        {
          title: "教育与培训",
          description: "医学教育（英国医学教育 / 本科招生简章摘录 / 学生观点 / 基础培训项目 / 医学教育相关人员 / 医学资格证书）",
        },
        {
          title: "系统、疾病与症状（20 个子模块）",
          description: "症状与体征 / 血液 / 骨骼 / 儿童期 / 内分泌系统 / 眼科 / 胃肠系统 / 妇科；心脏与循环 1+2 / 感染 / 精神疾病 / 神经系统 1+2 / 肿瘤学 / 妊娠与分娩；呼吸系统 / 皮肤 1+2 / 泌尿系统",
        },
        {
          title: "检查",
          description: "基本检查 / 实验室检查 / 内窥镜检查 / X 光与 CT / 核磁共振与超声波 / 心电图（ECG）",
        },
        {
          title: "治疗",
          description: "药物治疗 / 外科治疗 / 疗法",
        },
        {
          title: "预防",
          description: "筛查与免疫接种",
        },
        {
          title: "流行病学",
          description: "流行病学（发生率 / 发病率与流行率 / 关联与因果）",
        },
        {
          title: "伦理学",
          description: "医学伦理（GMC 指南 / 生物伦理议题 / 协助自愿死亡）",
        },
        {
          title: "采集病史",
          description: "采集病史 1（完整病史 / 个人信息 / 疼痛讨论）；采集病史 2（药物史 / 家族史 / 社会与个人史）；采集病史 3（系统回顾 / 中枢神经系统询问 / 患者的想法、顾虑与期望 / 病史采集中的短语动词）",
        },
        {
          title: "检查（临床）",
          description: "体格检查 / 精神状态检查",
        },
        {
          title: "解释",
          description: "诊断和治疗方案的解释 / 治疗讨论",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「护理英语课程」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

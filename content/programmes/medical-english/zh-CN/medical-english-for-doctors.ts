import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-english-for-doctors",
  category: "medical-english",
  subcategory: "clinical",
  title: "医生英语",
  shortDescription: "医疗专业人员语言沟通能力提升课程",
  metaDescription: "医生英语 - 医疗专业人员语言沟通能力提升课程",
  duration: "12 周",
  audience: ["医生", "医疗专业人士"],
  featured: true,
  order: 20,
  status: "published",

  hero: {
    headline: "医生英语",
    lede: "医疗专业人员语言沟通能力提升课程",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/medical-english-for-doctors.webp",
    imageAlt: "医生英语课程",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "以职业英语考试（OET）为基础，课程重点关注真实医疗情境，培养医生自信沟通能力和跨文化意识， 助力提供优质医疗服务。参与者将学会与患者有效互动、与多学科团队协作、管理专业通信， 并对全球医学研究做出贡献。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        {
          title: "掌握医学术语：熟练运用专业医学词汇，确保精准的医患沟通",
          description: "",
        },
        {
          title: "提升临床互动：具备提问、描述、指导的能力，开展高效的医患交流",
          description: "",
        },
        {
          title: "改善患者咨询：掌握访谈技巧，倾听患者需求，提供专业医疗建议",
          description: "",
        },
        {
          title: "加强文档报告：准确撰写医学报告，规范记录患者信息",
          description: "",
        },
        {
          title: "连接全球医疗：参与国际研究合作，为医学发展贡献力量",
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
          title: "互动教学与合作学习",
          description: "",
        },
        {
          title: "角色扮演、模拟、案例分析",
          description: "",
        },
        {
          title: "OET 考试导向练习",
          description: "",
        },
        {
          title: "小组讨论、同行反馈",
          description: "",
        },
        {
          title: "多媒体辅助教学",
          description: "",
        },
        {
          title: "社区互动支持",
          description: "",
        },
        {
          title: "导师指导",
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
          title: "全面定制化学习路径",
          description: "",
        },
        {
          title: "融入国际标准",
          description: "",
        },
        {
          title: "互动支持式学习",
          description: "",
        },
        {
          title: "文化敏感沟通",
          description: "",
        },
        {
          title: "实用专业导向",
          description: "",
        },
        {
          title: "持续跟踪进步",
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
          description: "健康与疾病（询问健康状况 / 生病 / 康复）；身体部位 1（身体部位 / 提及身体部位 / 描述疼痛的放射）；身体部位 2（腹部 / 胸部 / 骨盆）；身体功能（进食 / 五感 / 其他功能 / 不常见的功能）",
        },
        {
          title: "医学与辅助医学人员与场所",
          description: "医务人员 1（医务工作者 / 专科领域 / 专业选择）；医务人员 2（医院员工 / 医疗团队 / 轮班制度）；护士（护士等级 / 支援人员 / 专业化 / 护士职责）；辅助卫生专业人员（社区卫生 / 技术人员 / 假肢与矫形师 / 验光师）；医院（医院简介 / 门诊病人 / 住院病人）；初级医疗（国家卫生服务 / 全科医生团队 / 全科医生的日常）",
        },
        {
          title: "教育与培训",
          description: "医学教育 1（英国医学教育 / 本科招生简介 / 学生观点）；医学教育 2（基础培训计划 / 医学教育人员 / 医学资格）；海外医生（注册类型 / PLAB 考试 / PLAB 考站及建议）",
        },
        {
          title: "系统、疾病与症状（20 个子模块）",
          description: "症状与体征 / 血液 / 骨骼 / 儿童期 / 内分泌系统 / 眼科 / 胃肠系统 / 妇科；心脏与循环 1+2 / 感染 / 精神疾病 / 神经系统 1+2 / 肿瘤学 / 妊娠与分娩；呼吸系统 / 皮肤 1+2 / 泌尿系统",
        },
        {
          title: "检查",
          description: "基本检查（眼底检查 / 血压测量 / 抽血）；实验室检查 / 内窥镜检查 / X 光与 CT / 核磁共振与超声波 / 心电图（ECG）",
        },
        {
          title: "治疗",
          description: "药物治疗（处方与药物 / 英国国家处方目录）；外科治疗（手术室 / 手术器械 / 手术过程 / 手术报告）；疗法（放疗与化疗 / 物理治疗师的一天 / 认知行为疗法）",
        },
        {
          title: "预防",
          description: "筛查与免疫接种（筛查 / 常见筛查测试 / 旅行者免疫接种）",
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
          title: "研究",
          description: "研究类型（病例对照研究 / 队列研究 / 试验 / 变量）",
        },
        {
          title: "采集病史",
          description: "采集病史 1（完整病史 / 个人信息 / 疼痛讨论）；采集病史 2（药物史 / 家族史 / 社会与个人史）；采集病史 3（系统回顾 / 中枢神经系统询问 / 患者的想法、顾虑与期望 / 病史采集中的短语动词）",
        },
        {
          title: "检查（临床）",
          description: "体格检查（患者检查 / 指示说明）；精神状态检查（精神疾病症状 / 情绪 / 典型检查问题）",
        },
        {
          title: "解释",
          description: "诊断和治疗方案的解释（解释 / 使用通俗语言 / 心绞痛的解释）；治疗讨论（提供选项 / 建议行动方案 / 建议患者避免某些情况 / 警告）；传达坏消息（传达坏消息的原则 / 肿瘤科医生的报告）",
        },
        {
          title: "展示",
          description: "数据展示 1（引用表格或图形 / 比较变量 / 近似值）；数据展示 2（折线图 / 饼图和柱状图 / 描述趋势）；研究文章（文章结构 / 研究目标 / 主要发现）；摘要（结构化摘要 / 《英国医学杂志》摘要）；会议报告（报告结构 / 过渡信号 / 引言 / 结论）；病例报告（报告部分 / 床边报告 / 幻灯片）",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「医生英语」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

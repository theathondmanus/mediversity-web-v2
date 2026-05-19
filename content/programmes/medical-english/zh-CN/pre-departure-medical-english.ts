import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "pre-departure-medical-english",
  category: "medical-english",
  subcategory: "global-mobility",
  title: "行前医学英语培训",
  shortDescription: "为期 12 周的语言强化课程，专为即将赴海外进行临床实习的医疗专业人员设计",
  metaDescription: "行前医学英语培训 - 为期 12 周的语言强化课程，专为即将赴海外进行临床实习的医疗专业人员设计",
  duration: "12 周",
  audience: ["即将出国医疗人士", "海外深造学员"],
  featured: true,
  order: 40,
  status: "published",

  hero: {
    headline: "行前医学英语培训",
    lede: "为期 12 周的语言强化课程，专为即将赴海外进行临床实习的医疗专业人员设计",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/pre-departure-medical-english.webp",
    imageAlt: "出国前医学英语课程",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "课程旨在帮助学员掌握在国际医疗环境中所需的沟通技巧和文化敏感度，提升他们在不同医疗场景中 的自信表现。通过实际操作与理论结合，学员将学会在多文化背景下高效地与患者、同事及其他医疗 团队成员进行交流。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        {
          title: "真实情境模拟",
          description: "本课程将实际医疗场景引入课堂，确保学员可以身临其境地体验跨文化沟通的挑战和解决方案",
        },
        {
          title: "以患者为中心的沟通框架",
          description: "学员将学习并应用剑桥-卡尔加里指南，优化对患者咨询服务，确保信息清晰传达并展现同理心",
        },
        {
          title: "多元化学习体验",
          description: "课程结合互动讨论、实践操作和自学任务，提供全方位的学习路径",
        },
      ],
    },
    {
      type: "value-props",
      title: "核心特色",
      display: "grid",
      items: [
        {
          title: "教学策略可根据您的需求量身定制",
          description: "",
        },
        {
          title: "融合全球公认标准",
          description: "",
        },
        {
          title: "互动学习与实时指导",
          description: "",
        },
        {
          title: "实用且有效的沟通技能",
          description: "",
        },
        {
          title: "专注于职业发展",
          description: "",
        },
        {
          title: "专业师资力量",
          description: "由经验丰富的英语外教团队授课，确保学员获得高质量、针对性的语言指导",
        },
        {
          title: "互动讨论与角色扮演",
          description: "通过小组互动和模拟实际场景，学员将体验不同角色，并在模拟中提高沟通技巧",
        },
        {
          title: "文化敏感度训练",
          description: "专门设计的课程内容帮助学员理解和应对不同文化背景下的患者需求和行为反应",
        },
        {
          title: "个性化反馈与指导",
          description: "学员将在每个关键阶段获得专属的个性化反馈和建议，以不断提升其语言和沟通技巧",
        },
        {
          title: "在线资源支持",
          description: "学员可随时访问丰富的在线学习资源，包括视频教程、医学案例和词汇练习，灵活安排学习进度",
        },
      ],
    },
    {
      type: "value-props",
      title: "课程内容",
      display: "table",
      items: [
        {
          title: "1. 在不同医疗场景下自我介绍",
          description: "在不同场合（诊所、医院、家庭访问）适当发起互动",
        },
        {
          title: "2. 医患关系建立",
          description: "表现出对患者的尊重和关注态度；对患者的感受、困境以及情绪状态表示同理心",
        },
        {
          title: "3. 理解患者的观点",
          description: "引导并理解患者的顾虑；探索患者的想法和期望",
        },
        {
          title: "4. 提供沟通结构",
          description: "有目的且合乎逻辑地安排沟通顺序；使用引导标识和其他沟通组织技巧（\"菜单技巧\"和\"标记\"）",
        },
        {
          title: "5. 信息传递",
          description: "适当地分解信息并检查理解情况；结构化解释问题，检查病人是否理解，并鼓励提问",
        },
        {
          title: "6. 信息汇总",
          description: "了解患者已经知道的内容；提问：开放式问题、定量问题、封闭式问题；避免复合式提问；处理不愿意表达的患者；总结信息",
        },
        {
          title: "7. 场景 1：解释治疗方案",
          description: "信息传递技巧；鼓励反馈；总结并邀请更正；共情 / 同理心",
        },
        {
          title: "8. 场景 2：讨论诊断",
          description: "避免使用专业术语；信息传递技巧；以患者为中心的讨论；引导和提示；强共情和弱共情",
        },
        {
          title: "9. 场景 3：处理具有挑战性的行为",
          description: "拒绝请求；改变话题（老年人）；给出理由；同理心与安慰",
        },
        {
          title: "10. 场景 4：解释病情",
          description: "信息收集技巧；鼓励反应；总结并邀请纠正；同理心与安慰",
        },
        {
          title: "11. 场景 5：讨论手术",
          description: "信息传递与收集技巧；以患者为中心的讨论；引导和提示；安慰",
        },
        {
          title: "12. 场景 6：谈论疼痛",
          description: "信息收集：；a. 讨论疼痛部位；b. 讨论疼痛程度；c. 使用疼痛评分工具",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「行前医学英语培训」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

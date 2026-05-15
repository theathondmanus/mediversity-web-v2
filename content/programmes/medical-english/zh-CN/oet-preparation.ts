import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "oet-preparation",
  category: "medical-english",
  subcategory: "oet",
  title: "OET 备考课程",
  shortDescription:
    "提升您的医学英语能力，助力成功通过 OET 考试。",
  metaDescription:
    "英联国际 OET 备考课程，提供专业培训、模拟考试、在线课程与个性化反馈，帮助医疗专业人士顺利通过 OET。",
  duration: "3–12 个月",
  audience: ["医生", "护士", "医疗专业人士"],
  featured: true,
  order: 10,
  status: "published",

  hero: {
    headline: "OET 备考：通往全球医疗职业的大门",
    lede: "提升您的医学英语能力，助力成功通过 OET 考试。",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
  },

  sections: [
    /* ── 什么是 OET ── */
    {
      type: "intro",
      title: "什么是 OET？",
      body: "职业英语考试（OET）是面向医疗专业人士的国际认可英语语言测试。它评估您在医疗环境中有效沟通的能力，测试任务和场景旨在模拟您在医疗职业中将遇到的真实情境。在英国、澳大利亚、新西兰和爱尔兰等英语国家工作或学习，通常需要取得 OET 高分。",
    },

    /* ── 为什么选择我们 ── */
    {
      type: "value-props",
      title: "为什么选择我们进行 OET 备考？",
      items: [
        {
          title: "OET 专项课程体系",
          description:
            "课程专为医疗专业人士设计，聚焦 OET 四大核心模块：听力、阅读、写作和口语。每个部分均与真实医疗场景对齐，确保您为考试和实际职业应用做好准备。",
        },
        {
          title: "资深导师团队",
          description:
            "我们的导师拥有多年医学英语教学经验，其中许多本身就是医疗专业人士。他们了解您的独特需求，并致力于帮助您取得成功。",
        },
        {
          title: "互动资源",
          description:
            "丰富的学习资源，包括直播课、点播视频、练习题、模考与分步学习指南，覆盖不同学习偏好。",
        },
        {
          title: "个性化学习",
          description:
            "提供量身定制的学习体验，包括一对一支持与反馈，确保学员朝目标稳步前进。",
        },
        {
          title: "针对性反馈",
          description:
            "获得口语和写作练习的深度反馈。我们的认证培训师将提供可操作的建议，帮助您聚焦需要改进的领域。",
        },
        {
          title: "灵活便捷",
          description:
            "平台全天候可访问，您可以随时随地学习。无论您是全职工作还是日程繁忙，都能将 OET 备考融入生活。",
        },
        {
          title: "社区与支持",
          description:
            "加入一个活跃的学习者社区。分享经验、提出问题，并在积极鼓励的环境中获得同伴和导师的支持。",
        },
        {
          title: "已验证的成果",
          description:
            "我们的学生在 OET 考试中持续取得优异成绩。在正确的指导和支持下，您将获得通过 OET 并在医疗领域进一步发展所需的信心和技能。",
        },
      ],
    },

    /* ── OET 在线学习平台 ── */
    {
      type: "delivery-format",
      title: "OET 在线学习平台",
      subtitle:
        "灵活 · 互动 · 高效 —— 专为繁忙的医疗从业者设计",
      features: [
        {
          title: "完整 OET 课程体系",
          description:
            "专家主讲，覆盖听力、阅读、写作、口语四大模块，紧扣真实临床场景设计。",
        },
        {
          title: "直播 + 录播课程",
          description:
            "参加直播课程，也可随时回看录播内容，灵活安排学习时间。",
        },
        {
          title: "模考与个性化反馈",
          description:
            "在限时条件下完成完整 OET 模拟考试，获得认证 OET 培训师的可操作反馈。",
        },
        {
          title: "口语与写作精进",
          description:
            "通过一对一角色扮演、个性化批改与针对性指导，提升口语和写作能力。",
        },
        {
          title: "全天候平台访问",
          description:
            "按自己的节奏学习，随时回顾课程并追踪学习进度。",
        },
        {
          title: "灵活订阅方案",
          description:
            "提供 3 个月至 1 年的多种订阅方案，确保最大灵活性。",
        },
      ],
      ctaLabel: "探索学习平台",
      ctaHref: "/contact",
    },

    /* ── 在线导师指导课程 ── */
    {
      type: "delivery-format",
      title: "在线导师指导课程",
      subtitle:
        "结构化课程，配合实时互动与专业导师支持，帮助您保持专注和动力。",
      features: [
        {
          title: "全面 OET 备考",
          description:
            "系统掌握 OET 四大模块——听力、阅读、写作和口语，通过全面、有针对性的方法确保充分的考试准备。",
        },
        {
          title: "资深导师实时授课",
          description:
            "参与由经验丰富的导师主持的实时互动课堂，获取深度指导与个性化支持。",
        },
        {
          title: "互动式学习环境",
          description:
            "通过实时讨论、角色扮演与问答环节，在支持性的互动环境中充分练习技能。",
        },
        {
          title: "针对性反馈",
          description:
            "获得建设性反馈，精准定位改进方向，确保持续进步。",
        },
        {
          title: "清晰可量化的目标",
          description:
            "每节课设定明确的学习目标，帮助您保持专注并实现可衡量的成果。",
        },
        {
          title: "真实 OET 模拟练习",
          description:
            "通过模拟真实 OET 考试环境的模考和练习，建立信心和应试能力。",
        },
      ],
      ctaLabel: "了解导师课程",
      ctaHref: "/contact",
    },

    /* ── OET 一对一辅导 ── */
    {
      type: "delivery-format",
      title: "OET 一对一辅导",
      subtitle:
        "个性化、专注的支持，量身定制以满足您的个人需求，帮助您集中攻克薄弱环节，加速 OET 备考。",
      features: [
        {
          title: "个性化学习",
          description:
            "获得专门针对您需求定制的一对一课程，帮助您解决 OET 备考中的独特挑战。",
        },
        {
          title: "资深导师",
          description:
            "与经验丰富的英语导师紧密合作，获得专业知识和指导，助您在 OET 中取得优异成绩。",
        },
        {
          title: "专项支持",
          description:
            "集中攻克最需要改进的领域，加速进步并建立信心。",
        },
        {
          title: "定制化练习",
          description:
            "获得量身定制的练习和反馈，优化您的 OET 备考并加速成功。",
        },
        {
          title: "灵活时间安排",
          description:
            "根据您的生活方式和日程灵活安排学习时间，确保无压力的学习体验。",
        },
      ],
      ctaLabel: "了解一对一辅导",
      ctaHref: "/contact",
    },
  ],

  testimonials: [
    {
      quote:
        "英联国际帮助我提升了患者沟通中的英语能力，尤其在交接班和操作流程讲解方面。实用的角色扮演课程和真实医院场景模拟，对我的日常工作产生了很大帮助。",
      name: "李娜",
      role: "注册护士",
      location: "上海",
    },
    {
      quote:
        "作为备考 PLAB 的医生，英联国际赋予我采集病史、讨论诊断、以及在英语环境中与同事清晰沟通的语言能力与自信。",
      name: "陈伟医生",
      role: "内科",
      location: "北京",
    },
  ],

  finalCta: {
    headline: "加入他们，立即开启您的 OET 成功之旅！",
    buttonLabel: "立即开始",
    buttonHref: "/contact",
  },
};

export default data;

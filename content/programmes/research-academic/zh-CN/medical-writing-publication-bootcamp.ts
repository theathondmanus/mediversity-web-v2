import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-writing-publication-bootcamp",
  category: "research",
  subcategory: "academic-writing",
  title: "医学写作与发表强化训练营",
  shortDescription: "系统掌握国际医学出版全流程",
  metaDescription: "医学写作与发表强化训练营 - 系统掌握国际医学出版全流程",
  duration: "12 小时",
  audience: ["医学研究人员", "学术写作者"],
  featured: false,
  order: 20,
  status: "published",

  hero: {
    headline: "医学写作与发表强化训练营",
    lede: "系统掌握国际医学出版全流程",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/medical-writing-publication-bootcamp.webp",
    imageAlt: "医学写作与发表强化训练营",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "医学写作与发表强化训练营，致力于系统化提升国际医学论文写作与发表能力。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        {
          title: "系统掌握国际医学出版全流程（SCI/SSCI/Medline 标准），包括论文评审机制与行业规范",
          description: "",
        },
        {
          title: "深入解析国际医学期刊文章的核心结构、写作惯例与文体特征，提升学术表达的精准度",
          description: "",
        },
        {
          title: "强化医学研究写作中的学术英语能力，攻克语法、术语与句式难点",
          description: "",
        },
        {
          title: "掌握数据可视化呈现、逻辑链构建及科学叙事技巧，打造高影响力的医学论文",
          description: "",
        },
        {
          title: "实战演练期刊筛选、稿件投递及审稿意见回复策略，全面提升发表成功率",
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
          title: "系统性写作进阶框架",
          description: "从选题设计到论文发表的全程方法论指导",
        },
        {
          title: "医学学术英语精修",
          description: "破解\"中式英语\"陷阱，学习高频学术表达与精准术语应用",
        },
        {
          title: "期刊匹配精准导航",
          description: "基于研究领域、影响力与审稿周期，瞄准合适期刊发表",
        },
        {
          title: "智能工具赋能写作",
          description: "实战演练 AI 工具辅助写作，提升语法校对、文献管理与效率",
        },
        {
          title: "真实案例深度剖析",
          description: "对比分析高分论文与典型拒稿案例，提炼可复制的成功要素",
        },
        {
          title: "个性化专家反馈",
          description: "针对学员初稿提供逐行批注与修改建议，加速论文优化进程",
        },
      ],
    },
    {
      type: "value-props",
      title: "课程内容",
      display: "table",
      items: [
        {
          title: "1. 中国医生国际发表困境解析",
          description: "本土研究者常见误区：选题重复性、方法论描述不足等；中西方学术写作范式差异与语言障碍突破策略；思维升级：从\"翻译式写作\"转向\"审稿人视角\"的全局设计",
        },
        {
          title: "2. SCI 发表的核心逻辑与实战策略",
          description: "SCI 体系深度解读：期刊分区、影响因子动态与选刊避坑指南；揭秘同行评审\"黑箱\"：审稿流程、争议处理与沟通技巧；期刊编辑未明说的潜规则：创新性包装、伦理合规性要点；多维选刊策略：匹配研究价值、读者群体与期刊定位",
        },
        {
          title: "3. 医学论文解构与写作精要（IMRaD 框架）",
          description: "逐部分拆解：如何撰写吸引编辑的引言、严谨的方法、清晰的结果与深度讨论；数据可视化实战：图表设计原则与期刊格式规范；讨论部分黄金框架：从结果解释到研究价值的升华；逻辑流设计：如何让论文符合国际期刊的叙事逻辑",
        },
        {
          title: "4. 学术英语写作体系精讲",
          description: "医学论文高频句型库：从数据描述到结论推导的标准化表达；典型中式英语纠错：冗余表达、主谓不一致等问题的规避；学术词汇升级：精准动词替换、关键词优化与逻辑连接词强化；AI 工具高效组合：语法校对、术语提取与文献辅助写作全流程",
        },
        {
          title: "5. 投稿材料准备与审稿沟通实战",
          description: "投稿信模板解析：如何突出研究亮点与期刊匹配性；审稿意见应对策略：从礼貌沟通到争议问题的巧妙处理；投稿前终极检查：伦理声明、数据可及性声明等细节确认；修订技巧：如何通过\"小修改\"显著提升论文录用概率",
        },
        {
          title: "6. 案例解析与写作实战工作坊",
          description: "高分论文拆解：标题设计、摘要结构与数据呈现的亮点分析；模拟审稿实战：学员互评提升批判性编辑能力；个性化辅导：专家针对初稿的结构、语言与逻辑优化建议；论文定稿前的最后打磨：语言润色、格式调整与查重策略",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「医学写作与发表强化训练营」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

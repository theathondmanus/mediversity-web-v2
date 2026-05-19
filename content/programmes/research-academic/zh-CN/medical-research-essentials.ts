import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-research-essentials",
  category: "research",
  subcategory: "research-training",
  title: "医学研究核心技能",
  shortDescription: "医疗从业者科研素养提升课程",
  metaDescription: "医学研究核心技能 - 医疗从业者科研素养提升课程",
  duration: "6 周（英语 B1+）",
  audience: ["医学研究人员", "临床医生", "研究生"],
  featured: false,
  order: 10,
  status: "published",

  hero: {
    headline: "医学研究核心技能",
    lede: "医疗从业者科研素养提升课程",
    ctaLabel: "立即开始",
    ctaHref: "/contact",
    image: "/images/courses/medical-research-essentials.webp",
    imageAlt: "医学研究基础课程",
  },

  sections: [
    {
      type: "intro",
      title: "课程概览",
      body: "本课程为医疗从业者量身定制，系统传授医学研究的核心方法论与实战技能，涵盖研究设计、伦理合规、 数据管理及国际化学术沟通。通过模块化学习，学员将掌握从选题设计到论文发表的完整科研链条， 为参与国际合作或独立研究项目奠定坚实基础。",
    },
    {
      type: "value-props",
      title: "学习目标",
      display: "list",
      items: [
        {
          title: "医学研究全流程解析",
          description: "掌握基础研究、临床研究等类型特点，理解从立项到发表的完整阶段划分",
        },
        {
          title: "研究问题构建与文献综述",
          description: "精准定位研究空白，系统检索中英文权威论文数据库",
        },
        {
          title: "研究方法设计实战",
          description: "根据研究目标选择随机对照试验（RCT）、队列研究等设计，规避常见方法学误区",
        },
        {
          title: "伦理与合规管理",
          description: "熟悉知情同意书撰写、伦理委员会申报流程及数据隐私保护规范",
        },
        {
          title: "数据分析与结果解读",
          description: "学习数据处理与分析基础操作，掌握图表制作与统计学意义阐释",
        },
        {
          title: "英文论文读写进阶",
          description: "精研 IMRAD 结构，强化摘要写作与国际期刊常用表达",
        },
      ],
    },
    {
      type: "value-props",
      title: "教学方法",
      display: "timeline",
      items: [
        {
          title: "国际师资团队",
          description: "由医学英语专家、研究方法论学者及 SCI 期刊审稿人联合授课",
        },
        {
          title: "真实案例库",
          description: "解析医学顶刊论文的写作逻辑和实际案例分析",
        },
        {
          title: "带教式训练",
          description: "分步骤指导文献精读、数据描述与讨论部分撰写",
        },
        {
          title: "语言强化包",
          description: "提供医学高频词汇表、连接词库及常见语法错误避坑指南",
        },
        {
          title: "结业考核",
          description: "完成一份研究方案展示或论文摘要，获得专家认证证书",
        },
      ],
    },
    {
      type: "value-props",
      title: "课程内容",
      display: "table",
      items: [
        {
          title: "1. 医学研究导论：从理论到实践",
          description: "1. 医学研究导论：从理论到实践",
        },
        {
          title: "2. 研究问题构建与文献综述实战",
          description: "2. 研究问题构建与文献综述实战",
        },
        {
          title: "3. 研究设计与方法学精要",
          description: "3. 研究设计与方法学精要",
        },
        {
          title: "4. 伦理合规与科研管理",
          description: "4. 伦理合规与科研管理",
        },
        {
          title: "5. 数据收集 & 分析全教程",
          description: "5. 数据收集 & 分析全教程",
        },
        {
          title: "6. 国际期刊论文读写精修",
          description: "6. 国际期刊论文读写精修",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "准备好开始「医学研究核心技能」了吗？",
    buttonLabel: "立即咨询",
    buttonHref: "/contact",
  },
};

export default data;

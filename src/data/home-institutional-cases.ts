import type { CaseMetricIcon, CaseStudyLocale } from "@/data/institutional-case-studies";


export interface HomeInstitutionalCaseMetric {
  icon: CaseMetricIcon;
  value: string;
  label: string;
}


export interface HomeInstitutionalCase {
  slug: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: HomeInstitutionalCaseMetric[];
  quote: string;
  quoteAuthor: string;
  cta: string;
}


const HOME_CASES: Record<CaseStudyLocale, HomeInstitutionalCase[]> = {
  "zh-CN": [
    {
      slug: "shenzhen-childrens-hospital-volunteer-training",
      image: "/images/case-studies/shenzhen-childrens-hospital-hero.webp",
      imageAlt: "深圳市儿童医院医疗卫生外语翻译志愿者专项培训现场",
      eyebrow: "实名案例",
      title: "从培训意向确定到正式授课，相隔三天",
      subtitle: "深圳市儿童医院｜医疗卫生外语翻译志愿者专项培训",
      description:
        "面对紧凑的培训安排，Mediversity 围绕院内医生的专业背景和儿科就诊场景，设计了结合临床沟通、医疗口译与情境练习的专项课程。",
      metrics: [
        { icon: "workflow", value: "3 天", label: "意向确定至授课" },
        { icon: "users", value: "22 人", label: "学员名单人数" },
        { icon: "layers", value: "17 个", label: "涉及科室与部门" },
        { icon: "book-open", value: "4 个", label: "课程环节" },
      ],
      quote: "围绕院方需求和儿科沟通场景，快速组织有针对性的课程内容。",
      quoteAuthor: "设计重点",
      cta: "阅读完整案例",
    },
    {
      slug: "shenzhen-international-medical-english",
      image: "/images/case-studies/shenzhen-medical-english-hero.webp",
      imageAlt: "深圳国际化医疗服务英语培训中的师生互动",
      eyebrow: "实名案例",
      title: "5 个班次，覆盖 120+ 医务人员",
      subtitle:
        "深圳市卫生健康能力建设和继续教育中心｜国际化医疗服务英语能力提升项目",
      description:
        "课程从真实岗位任务出发，将医学信息的理解、记录、转述与沟通串联为完整能力链，让医学英语从课堂走向医疗实践。",
      metrics: [
        { icon: "layers", value: "5", label: "培训班次" },
        { icon: "users", value: "120+", label: "医务人员" },
        { icon: "book-open", value: "2", label: "核心模块" },
        { icon: "workflow", value: "4", label: "教学环节" },
      ],
      quote: "让医学英语从课堂走向医疗实践。",
      quoteAuthor: "项目设计目标",
      cta: "阅读完整案例",
    },
    {
      slug: "zhejiang-opqrst-course-design",
      image: "/images/case-studies/zhejiang-pain-assessment-hero.webp",
      imageAlt: "浙江海外临床交流医学英语课程中的 OPQRST 疼痛评估教学",
      eyebrow: "实名案例",
      title: "从 OPQRST 到临床表达",
      subtitle: "浙江省健康人才发展协会｜海外临床交流医学英语课程设计案例",
      description:
        "课程不是从已有内容中挑选知识点，而是沿着“需求—场景—任务—设计—实践”反向设计学习体验。",
      metrics: [
        { icon: "stethoscope", value: "OPQRST", label: "临床框架" },
        { icon: "workflow", value: "5", label: "设计步骤" },
        { icon: "layers", value: "2", label: "模拟病例" },
        { icon: "users", value: "3", label: "轮换角色" },
      ],
      quote: "不是从已有课程中选择内容，而是从客户需要解决的问题出发。",
      quoteAuthor: "课程设计原则",
      cta: "阅读完整案例",
    },
  ],
  en: [
    {
      slug: "shenzhen-childrens-hospital-volunteer-training",
      image: "/images/case-studies/shenzhen-childrens-hospital-hero.webp",
      imageAlt:
        "Targeted training session for healthcare translation volunteers at Shenzhen Children's Hospital",
      eyebrow: "Institutional Case Study",
      title: "Three days from confirmation to delivery",
      subtitle:
        "Shenzhen Children's Hospital｜Training for medical translation volunteers",
      description:
        "Working to a tight schedule, Mediversity designed a focused course around the doctors' professional backgrounds and paediatric consultations. The course brought together clinical communication, medical interpreting and scenario-based practice.",
      metrics: [
        { icon: "workflow", value: "3 days", label: "Confirmation to session" },
        { icon: "users", value: "22", label: "Participants" },
        { icon: "layers", value: "17", label: "Departments & units" },
        { icon: "book-open", value: "4", label: "Course components" },
      ],
      quote:
        "Responding to the hospital's needs with course content built around paediatric communication.",
      quoteAuthor: "Design focus",
      cta: "Read Full Case Study",
    },
    {
      slug: "shenzhen-international-medical-english",
      image: "/images/case-studies/shenzhen-medical-english-hero.webp",
      imageAlt: "Interactive international healthcare English training in Shenzhen",
      eyebrow: "Institutional Case Study",
      title: "5 Cohorts, 120+ Healthcare Professionals",
      subtitle:
        "Shenzhen Health Capacity Building and Continuing Education Centre",
      description:
        "Built around real workplace tasks, the programme connected understanding, documentation, interpretation and patient communication into one applied capability pathway.",
      metrics: [
        { icon: "layers", value: "5", label: "Cohorts" },
        { icon: "users", value: "120+", label: "Professionals" },
        { icon: "book-open", value: "2", label: "Core Modules" },
        { icon: "workflow", value: "4", label: "Learning Stages" },
      ],
      quote: "Moving medical English from the classroom into healthcare practice.",
      quoteAuthor: "Programme Design Goal",
      cta: "Read Full Case Study",
    },
    {
      slug: "zhejiang-opqrst-course-design",
      image: "/images/case-studies/zhejiang-pain-assessment-hero.webp",
      imageAlt: "OPQRST pain assessment teaching for overseas clinical exchange",
      eyebrow: "Institutional Case Study",
      title: "From OPQRST to Clinical Communication",
      subtitle:
        "Zhejiang Association for Health Talent Development｜Medical English Course Design for Overseas Clinical Exchange",
      description:
        "Rather than selecting content from an existing course, the learning experience was reverse-designed through needs, setting, task, design and practice.",
      metrics: [
        { icon: "stethoscope", value: "OPQRST", label: "Clinical Framework" },
        { icon: "workflow", value: "5", label: "Design Steps" },
        { icon: "layers", value: "2", label: "Simulated Cases" },
        { icon: "users", value: "3", label: "Rotating Roles" },
      ],
      quote: "Start with the client’s problem — not with a pre-existing course catalogue.",
      quoteAuthor: "Course Design Principle",
      cta: "Read Full Case Study",
    },
  ],
};


export function getHomeInstitutionalCases(locale: string): HomeInstitutionalCase[] {
  return locale === "en" ? HOME_CASES.en : HOME_CASES["zh-CN"];
}

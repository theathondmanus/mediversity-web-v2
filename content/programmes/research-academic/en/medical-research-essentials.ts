import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-research-essentials",
  category: "research",
  subcategory: "research-training",
  title: "Medical Research Essentials",
  shortDescription: "Research literacy programme for healthcare professionals",
  metaDescription: "Medical Research Essentials - Research literacy programme for healthcare professionals",
  duration: "6 weeks (English B1+)",
  audience: ["Medical Researchers", "Clinicians", "Postgraduates"],
  featured: false,
  order: 10,
  status: "published",

  hero: {
    headline: "Medical Research Essentials",
    lede: "Research literacy programme for healthcare professionals",
    ctaLabel: "Get Started Today",
    ctaHref: "/contact",
    image: "/images/courses/medical-research-essentials.webp",
    imageAlt: "Medical Research Essentials Course",
  },

  sections: [
    {
      type: "intro",
      title: "Course Overview",
      body: "Designed for healthcare professionals, this programme provides systematic training in the core methodology and practical skills of medical research — covering study design, ethics and compliance, data management, and international academic communication. Through modular learning, participants will gain a complete understanding of the research pathway, from topic selection through to publication, building a strong foundation for international collaboration or independent research projects.",
    },
    {
      type: "value-props",
      title: "Learning Objectives",
      display: "list",
      items: [
        {
          title: "End-to-end overview of medical research",
          description: "Understand the characteristics of basic and clinical research, and the full pathway from study proposal to publication",
        },
        {
          title: "Research question formulation and literature review",
          description: "Identify research gaps with precision and conduct systematic searches across leading English- and Chinese-language journal databases",
        },
        {
          title: "Practical study design",
          description: "Select appropriate designs — including randomised controlled trials (RCTs) and cohort studies — to match research objectives, while avoiding common methodological pitfalls",
        },
        {
          title: "Ethics and compliance",
          description: "Become familiar with informed consent drafting, ethics committee submission processes, and data privacy protection standards",
        },
        {
          title: "Data analysis and interpretation",
          description: "Learn foundational data processing and analysis, and master figure preparation and statistical significance interpretation",
        },
        {
          title: "Advanced English academic reading and writing",
          description: "Develop a strong command of the IMRAD structure, strengthen abstract writing, and master the standard language used in international journals",
        },
      ],
    },
    {
      type: "value-props",
      title: "Teaching Methods",
      display: "timeline",
      items: [
        {
          title: "International teaching team",
          description: "Co-delivered by medical English specialists, research methodology scholars and SCI journal reviewers",
        },
        {
          title: "Real-world case library",
          description: "Analyse the writing logic and practical case studies behind papers published in leading medical journals",
        },
        {
          title: "Mentor-style training",
          description: "Step-by-step guidance on close reading of literature, data description and writing the discussion section",
        },
        {
          title: "Language reinforcement pack",
          description: "Includes a high-frequency medical vocabulary list, connectives bank and a guide to common grammar pitfalls",
        },
        {
          title: "Final assessment",
          description: "Present a research proposal or paper abstract to receive an expert-certified completion certificate",
        },
      ],
    },
    {
      type: "value-props",
      title: "Curriculum",
      display: "table",
      items: [
        {
          title: "1. Introduction to medical research: from theory to practice",
          description: "1. Introduction to medical research: from theory to practice",
        },
        {
          title: "2. Research question formulation and literature review in practice",
          description: "2. Research question formulation and literature review in practice",
        },
        {
          title: "3. Study design and methodology essentials",
          description: "3. Study design and methodology essentials",
        },
        {
          title: "4. Ethics, compliance and research governance",
          description: "4. Ethics, compliance and research governance",
        },
        {
          title: "5. Data collection and analysis — full walkthrough",
          description: "5. Data collection and analysis — full walkthrough",
        },
        {
          title: "6. Reading and writing for international journals",
          description: "6. Reading and writing for international journals",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start \"Medical Research Essentials\"?",
    buttonLabel: "Get in Touch",
    buttonHref: "/contact",
  },
};

export default data;

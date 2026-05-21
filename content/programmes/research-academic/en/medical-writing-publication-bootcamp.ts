import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-writing-publication-bootcamp",
  category: "research",
  subcategory: "academic-writing",
  title: "Medical Writing & Publication Bootcamp",
  shortDescription: "Master the international medical publication pipeline",
  metaDescription: "Medical Writing & Publication Bootcamp - Master the international medical publication pipeline",
  duration: "12 hours",
  audience: ["Medical Researchers", "Academic Writers"],
  featured: false,
  order: 20,
  status: "published",

  hero: {
    headline: "Medical Writing & Publication Bootcamp",
    lede: "Master the international medical publication pipeline",
    ctaLabel: "Get Started Today",
    ctaHref: "/contact",
    image: "/images/courses/medical-writing-publication-bootcamp.webp",
    imageAlt: "Medical Writing & Publication Bootcamp",
  },

  sections: [
    {
      type: "intro",
      title: "Course Overview",
      body: "An intensive bootcamp designed to systematically strengthen the skills required to write and publish medical research papers in international journals.",
    },
    {
      type: "value-props",
      title: "Learning Objectives",
      display: "list",
      items: [
        {
          title: "Gain a systematic understanding of the international medical publication process (SCI / SSCI / Medline standards), including peer-review mechanisms and disciplinary conventions",
          description: "",
        },
        {
          title: "Develop a deep understanding of the core structure, writing conventions and stylistic features of international medical journal articles, building precision in academic expression",
          description: "",
        },
        {
          title: "Strengthen academic English for medical research writing, addressing common challenges with grammar, terminology and sentence structure",
          description: "",
        },
        {
          title: "Master data visualisation, logical argumentation and scientific narrative techniques to produce high-impact medical papers",
          description: "",
        },
        {
          title: "Practise journal selection, manuscript submission and responding to reviewer comments — improving overall publication success",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "Key Features",
      display: "grid",
      items: [
        {
          title: "A systematic writing progression framework",
          description: "End-to-end methodology guidance from topic selection through to publication",
        },
        {
          title: "Refined academic medical English",
          description: "Break out of \"Chinglish\" pitfalls and master high-frequency academic phrasing and precise terminology",
        },
        {
          title: "Targeted journal matching",
          description: "Identify the right journals based on research field, impact factor and review timelines",
        },
        {
          title: "AI tools to support your writing",
          description: "Hands-on practice with AI-assisted writing, grammar checking, reference management and efficiency tools",
        },
        {
          title: "In-depth case analysis",
          description: "Compare published high-impact papers with common rejection cases to extract repeatable success factors",
        },
        {
          title: "Personalised expert feedback",
          description: "Line-by-line annotation and editing suggestions on participant drafts to accelerate revision",
        },
      ],
    },
    {
      type: "value-props",
      title: "Curriculum",
      display: "table",
      items: [
        {
          title: "1. Common challenges faced by Chinese clinicians publishing internationally",
          description: "1. Common challenges faced by Chinese clinicians publishing internationally",
        },
        {
          title: "2. The core logic and practical strategies of SCI publication",
          description: "2. The core logic and practical strategies of SCI publication",
        },
        {
          title: "3. Deconstructing the medical paper: writing essentials and the IMRaD framework",
          description: "3. Deconstructing the medical paper: writing essentials and the IMRaD framework",
        },
        {
          title: "4. A structured walkthrough of academic English writing",
          description: "4. A structured walkthrough of academic English writing",
        },
        {
          title: "5. Submission package preparation and reviewer communication in practice",
          description: "5. Submission package preparation and reviewer communication in practice",
        },
        {
          title: "6. Case analysis and writing workshop",
          description: "6. Case analysis and writing workshop",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start \"Medical Writing & Publication Bootcamp\"?",
    buttonLabel: "Get in Touch",
    buttonHref: "/contact",
  },
};

export default data;

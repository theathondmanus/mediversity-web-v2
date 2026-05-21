import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "medical-humanities-and-communication-skills",
  category: "humanities",
  subcategory: "medical-humanities",
  title: "Medical Humanities and Communication Skills",
  shortDescription: "Empathy-driven care — core skills for healthcare professionals",
  metaDescription: "Medical Humanities and Communication Skills - Empathy-driven care — core skills for healthcare professionals",
  duration: "6 lessons (2 hours each)",
  audience: ["Doctors", "Healthcare Practitioners"],
  featured: false,
  order: 20,
  status: "published",

  hero: {
    headline: "Medical Humanities and Communication Skills",
    lede: "Empathy-driven care — core skills for healthcare professionals",
    ctaLabel: "Get Started Today",
    ctaHref: "/contact",
    image: "/images/courses/medical-humanities-and-communication-skills.webp",
    imageAlt: "Medical Humanities & Communication Skills Course",
  },

  sections: [
    {
      type: "intro",
      title: "Course Overview",
      body: "This programme equips healthcare professionals with the core communication skills and humanistic literacy needed to deliver patient-centred care. Alongside clinical knowledge, it focuses on empathy, medical ethics, patient psychology, cross-cultural awareness and the management of the doctor-patient relationship. Through immersive practice, participants develop communication that is more empathetic, professional and adaptive — enabling effective empathy and precise decision-making within complex clinical scenarios.",
    },
    {
      type: "value-props",
      title: "Learning Objectives",
      display: "list",
      items: [
        {
          title: "Develop humanistic values and a patient-centred mindset",
          description: "",
        },
        {
          title: "Build trust through effective patient-doctor communication",
          description: "",
        },
        {
          title: "Apply cross-cultural skills to serve diverse patient populations",
          description: "",
        },
        {
          title: "Strengthen empathy and emotional intelligence in clinical practice",
          description: "",
        },
        {
          title: "Apply medical ethics for empathetic and ethical decision-making",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "Teaching Methods",
      display: "timeline",
      items: [
        {
          title: "High-fidelity case-based teaching",
          description: "",
        },
        {
          title: "Role-play simulation training",
          description: "",
        },
        {
          title: "Interactive in-depth dialogue",
          description: "",
        },
        {
          title: "Structured practical tasks",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "Curriculum",
      display: "table",
      items: [
        {
          title: "1. Medical humanities and professional identity",
          description: "1. Medical humanities and professional identity",
        },
        {
          title: "2. Patient-doctor communication skills",
          description: "2. Patient-doctor communication skills",
        },
        {
          title: "3. Patient psychology and emotional support",
          description: "3. Patient psychology and emotional support",
        },
        {
          title: "4. Medical ethics and empathetic care",
          description: "4. Medical ethics and empathetic care",
        },
        {
          title: "5. Cross-cultural communication",
          description: "5. Cross-cultural communication",
        },
        {
          title: "6. Wellbeing for healthcare professionals",
          description: "6. Wellbeing for healthcare professionals",
        },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start \"Medical Humanities and Communication Skills\"?",
    buttonLabel: "Get in Touch",
    buttonHref: "/contact",
  },
};

export default data;

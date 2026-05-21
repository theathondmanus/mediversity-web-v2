import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "nursing-degree-progression",
  category: "observership",
  subcategory: "all",
  title: "Nursing Degree Progression Programme",
  shortDescription: "Access global nursing education resources for career advancement",
  metaDescription: "Nursing Degree Progression Programme — International nursing bachelor and master's degrees through overseas partnerships, with degree recognition by China's Ministry of Education",
  duration: "Top-up bachelor: 1 year / Master's: 1-2 years",
  audience: ["Practising nurses", "Nursing students", "Nursing faculty", "Healthcare institution nursing teams"],
  featured: false,
  order: 40,
  status: "published",

  hero: {
    headline: "Nursing Degree Progression Programme",
    lede: "Access global nursing education resources for career advancement",
    ctaLabel: "Enquire Now",
    ctaHref: "/contact",
    image: "/images/courses/nursing-degree-progression.webp",
    imageAlt: "Nursing Degree Progression Programme",
  },

  sections: [
    {
      type: "intro",
      title: "Programme Overview",
      body: "An international nursing degree progression programme designed for practising nurses, nursing students and faculty, as well as nursing teams within healthcare institutions. Top-up bachelor programmes run over 1 year and master's programmes over 1-2 years, delivered through overseas partner institutions and international nursing practice frameworks. The programme builds professional capability and global competitiveness, with internationally recognised partner institutions and degrees recognised by China's Ministry of Education. Selected programmes do not require mandatory language scores and are designed to fit the schedules of working professionals.",
    },
    {
      type: "value-props",
      title: "Programme Content",
      display: "list",
      items: [
        { title: "International nursing bachelor / master's degree courses", description: "" },
        { title: "Joint training with overseas partner institutions", description: "" },
        { title: "International nursing practice frameworks", description: "" },
        { title: "Degree recognition and career development support", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Programme Advantages",
      display: "grid",
      items: [
        { title: "Strong international recognition of partner institutions", description: "" },
        { title: "Degree recognition by China's Ministry of Education", description: "" },
        { title: "Selected programmes do not require mandatory language scores", description: "" },
        { title: "Designed to fit the schedules of working professionals", description: "" },
        { title: "Broad overseas career and further-study pathways", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Services We Provide",
      display: "timeline",
      items: [
        { title: "Institution and programme matching", description: "" },
        { title: "Application material support", description: "" },
        { title: "Academic planning support", description: "" },
        { title: "Visa and overseas arrival services", description: "" },
        { title: "End-to-end admissions management", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start the \"Nursing Degree Progression Programme\"?",
    buttonLabel: "Enquire Now",
    buttonHref: "/contact",
  },
};

export default data;

import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "short-term-overseas-study",
  category: "observership",
  subcategory: "all",
  title: "Short-term Overseas Study Programme",
  shortDescription: "Focused themes, efficient access to international expertise",
  metaDescription: "Short-term Overseas Study Programme — 5-10 day international study visits to top hospitals with subject-specific expert sessions, covering clinical and management perspectives",
  duration: "5-10 days",
  audience: ["Hospital leadership teams", "Department heads", "Senior healthcare teams", "Specialist development cohorts"],
  featured: false,
  order: 30,
  status: "published",

  hero: {
    headline: "Short-term Overseas Study Programme",
    lede: "Focused themes, efficient access to international expertise",
    ctaLabel: "Enquire Now",
    ctaHref: "/contact",
    image: "/images/courses/short-term-overseas-study.webp",
    imageAlt: "Short-term Overseas Study Programme",
  },

  sections: [
    {
      type: "intro",
      title: "Programme Overview",
      body: "A 5-10 day international study programme designed for hospital leadership teams, department heads and senior healthcare staff. Through on-site visits to top international hospitals and subject-specific sessions delivered by leading overseas experts, participants gain international experience across both clinical and management perspectives. Flexible and efficient, the programme is well-suited to team-based exchange and concludes with an overseas study certificate.",
    },
    {
      type: "value-props",
      title: "Programme Tracks",
      display: "list",
      items: [
        { title: "Hospital management", description: "" },
        { title: "Nursing management", description: "" },
        { title: "Oncology", description: "" },
        { title: "Neurology / neurosurgery", description: "" },
        { title: "Gastroenterology", description: "" },
        { title: "Paediatric surgery and other specialties", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Programme Advantages",
      display: "grid",
      items: [
        { title: "On-site visits to top international hospitals", description: "" },
        { title: "Subject-specific teaching by leading overseas experts", description: "" },
        { title: "Coverage across both clinical and management perspectives", description: "" },
        { title: "Efficient and flexible — well-suited to team-based exchange", description: "" },
        { title: "Overseas study certificate on completion", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Services We Provide",
      display: "timeline",
      items: [
        { title: "Study itinerary planning", description: "" },
        { title: "Overseas hospital liaison", description: "" },
        { title: "Immigration and visa support", description: "" },
        { title: "International transport, accommodation and insurance", description: "" },
        { title: "On-site interpretation and accompaniment support", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start the \"Short-term Overseas Study Programme\"?",
    buttonLabel: "Enquire Now",
    buttonHref: "/contact",
  },
};

export default data;

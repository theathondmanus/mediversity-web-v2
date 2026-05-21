import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "international-medical-doctorate",
  category: "observership",
  subcategory: "all",
  title: "International Medical Doctorate Programme",
  shortDescription: "Connecting with top European medical schools, developing international research talent",
  metaDescription: "International Medical Doctorate Programme — 3-4 year doctoral training in partnership with leading European medical schools, awarding internationally recognised PhDs",
  duration: "3-4 years",
  audience: ["Healthcare professionals", "Medical researchers", "Medical students", "Professionals with long-term academic career goals"],
  featured: false,
  order: 50,
  status: "published",

  hero: {
    headline: "International Medical Doctorate Programme",
    lede: "Connecting with top European medical schools, developing international research talent",
    ctaLabel: "Enquire Now",
    ctaHref: "/contact",
    image: "/images/courses/international-medical-doctorate.webp",
    imageAlt: "International Medical Doctorate Programme",
  },

  sections: [
    {
      type: "intro",
      title: "Programme Overview",
      body: "A 3-4 year international medical doctorate programme delivered in partnership with leading European medical schools and overseas research platforms — designed for healthcare professionals, medical researchers, medical students and individuals with long-term academic career goals. Participants undertake in-depth research training centred on supervisor-led projects, engage in international academic exchange and collaboration, and build a global academic network — developing sustainable, long-cycle research capability. The programme awards an internationally recognised doctorate.",
    },
    {
      type: "value-props",
      title: "Programme Content",
      display: "list",
      items: [
        { title: "International medical doctorate training", description: "" },
        { title: "Overseas research platform experience", description: "" },
        { title: "Supervisor-led research projects", description: "" },
        { title: "International academic exchange and collaboration", description: "" },
        { title: "Long-cycle research capability building", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Programme Advantages",
      display: "grid",
      items: [
        { title: "Partnerships with top European medical schools", description: "" },
        { title: "Internationally recognised doctorate", description: "" },
        { title: "In-depth research resource support", description: "" },
        { title: "International supervisory team", description: "" },
        { title: "Builds a sustainable global academic network", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Services We Provide",
      display: "timeline",
      items: [
        { title: "Doctoral programme consultation and assessment", description: "" },
        { title: "Supervisor and research direction matching", description: "" },
        { title: "Application material and interview support", description: "" },
        { title: "Visa and overseas placement support", description: "" },
        { title: "Long-cycle academic progress tracking", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start the \"International Medical Doctorate Programme\"?",
    buttonLabel: "Enquire Now",
    buttonHref: "/contact",
  },
};

export default data;

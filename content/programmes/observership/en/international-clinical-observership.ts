import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "international-clinical-observership",
  category: "observership",
  subcategory: "all",
  title: "International Clinical Observership Programme",
  shortDescription: "Immersive exposure to leading international hospitals, broadening clinical perspective",
  metaDescription: "International Clinical Observership Programme — 12-week immersive observership at top hospitals in the US, UK, Japan, and Singapore, with precision matching to clinical subspecialties",
  duration: "12 weeks",
  audience: ["Senior clinicians", "Key department staff", "Healthcare teams seeking international exchange"],
  featured: true,
  order: 10,
  status: "published",

  hero: {
    headline: "International Clinical Observership Programme",
    lede: "Immersive exposure to leading international hospitals, broadening clinical perspective",
    ctaLabel: "Enquire Now",
    ctaHref: "/contact",
    image: "/images/courses/international-clinical-observership.webp",
    imageAlt: "International Clinical Observership Programme",
  },

  sections: [
    {
      type: "intro",
      title: "Programme Overview",
      body: "A 12-week immersive overseas clinical observership programme, drawing on partnerships with top hospitals in the US, UK, Japan and Singapore to provide high-quality international clinical exchange opportunities for senior clinicians and key department staff. Participants engage in outpatient and surgical observership, ward rounds with mentors, departmental meetings and academic exchange — building international clinical perspective alongside a deeper understanding of multidisciplinary collaboration and patient-centred care.",
    },
    {
      type: "value-props",
      title: "Programme Content",
      display: "list",
      items: [
        { title: "Outpatient and surgical observership", description: "" },
        { title: "Ward rounds with mentors", description: "" },
        { title: "Departmental meetings and academic exchange", description: "" },
        { title: "Precision matching to clinical subspecialties", description: "" },
        { title: "One-to-one mentor supervision", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Programme Advantages",
      display: "grid",
      items: [
        { title: "Access to top healthcare institutions in the US, UK, Japan and Singapore", description: "" },
        { title: "Precision matching to clinical subspecialties", description: "" },
        { title: "End-to-end support from both domestic and overseas teams", description: "" },
        { title: "Seamless integration with medical English training", description: "" },
        { title: "International mentorship-based learning model", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Services We Provide",
      display: "timeline",
      items: [
        { title: "Programme application and matching", description: "" },
        { title: "Interview preparation and visa support", description: "" },
        { title: "Overseas accommodation and insurance arrangements", description: "" },
        { title: "Pre-departure guidance and on-site support", description: "" },
        { title: "End-to-end programme coordination", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start the \"International Clinical Observership Programme\"?",
    buttonLabel: "Enquire Now",
    buttonHref: "/contact",
  },
};

export default data;

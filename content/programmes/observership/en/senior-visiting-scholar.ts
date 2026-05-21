import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "senior-visiting-scholar",
  category: "observership",
  subcategory: "all",
  title: "Senior Visiting Scholar Programme",
  shortDescription: "Deep engagement with international research platforms, building global academic competitiveness",
  metaDescription: "Senior Visiting Scholar Programme — 6-12 months of overseas research training, participating in mentor-led projects and joint publications, establishing long-term international research collaboration",
  duration: "6-12 months",
  audience: ["Discipline leaders", "Research-focused healthcare professionals", "Medical school faculty", "Professionals seeking publication and research advancement"],
  featured: true,
  order: 20,
  status: "published",

  hero: {
    headline: "Senior Visiting Scholar Programme",
    lede: "Deep engagement with international research platforms, building global academic competitiveness",
    ctaLabel: "Enquire Now",
    ctaHref: "/contact",
    image: "/images/courses/senior-visiting-scholar.webp",
    imageAlt: "Senior Visiting Scholar Programme",
  },

  sections: [
    {
      type: "intro",
      title: "Programme Overview",
      body: "A 6-12 month overseas research training programme, drawing on partnerships with top-100 universities and leading international research platforms to offer in-depth academic visiting and research collaboration opportunities to discipline leaders, research-focused healthcare professionals and medical school faculty. Participants take part in mentor-led research projects, collaborate on academic publications, learn international research methodology, and — in many programmes — undertake clinical observership alongside their research, establishing long-term international research collaboration.",
    },
    {
      type: "value-props",
      title: "Programme Content",
      display: "list",
      items: [
        { title: "Participation in mentor-led research projects", description: "" },
        { title: "Collaboration on academic publications", description: "" },
        { title: "Training in international research methodology", description: "" },
        { title: "Overseas laboratory and research platform experience", description: "" },
        { title: "Selected programmes include parallel clinical observership", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Programme Advantages",
      display: "grid",
      items: [
        { title: "Partner institutions include top-100 universities globally", description: "" },
        { title: "Most programmes do not require IELTS / TOEFL scores", description: "" },
        { title: "Overseas placement and lifestyle support included", description: "" },
        { title: "Long-term international research collaboration channels", description: "" },
        { title: "Experienced interview and visa support", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Services We Provide",
      display: "timeline",
      items: [
        { title: "Mentor and institution matching", description: "" },
        { title: "Application material refinement", description: "" },
        { title: "Interview and visa support", description: "" },
        { title: "Overseas accommodation and placement support", description: "" },
        { title: "Full-cycle programme management", description: "" },
      ],
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Ready to start the \"Senior Visiting Scholar Programme\"?",
    buttonLabel: "Enquire Now",
    buttonHref: "/contact",
  },
};

export default data;

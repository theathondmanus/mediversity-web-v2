import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "specialist-international-communication",
  category: "medical-english",
  subcategory: "speaking-pathway",
  title: "Specialist & International Communication",
  shortDescription:
    "Targeted communication training for specialist roles, international opportunities and professional growth.",
  metaDescription:
    "MVG Specialist & International Communication — OET Speaking Preparation, International Patient Care, Overseas Practice Readiness and Professional Presentation & Interview Skills.",
  duration: "Varies by specialist option",
  audience: ["Doctors", "Nurses", "Healthcare professionals"],
  featured: false,
  order: 40,
  status: "published",
  cover: "/images/courses/speaking-pathway-specialist.webp",
  coverAlt: "Healthcare professionals rehearsing a presentation for international medical communication",

  hero: {
    headline: "Specialist & International Communication",
    lede: "Targeted communication training for specialist roles, international opportunities and professional growth.",
    ctaLabel: "Enquire About Specialist Training",
    ctaHref: "/contact",
    image: "/images/courses/speaking-pathway-specialist.webp",
    imageAlt: "Healthcare professionals rehearsing a presentation for international medical communication",
  },

  sections: [
    {
      type: "intro",
      title: "Course Overview",
      body: "Different clinical roles and professional ambitions create different communication challenges.\n\nSpecialist & International Communication offers focused training options designed to help healthcare professionals develop the communication skills most relevant to their individual responsibilities, professional environments and international goals.\n\nRather than following a single fixed curriculum, participants can select a specialist area aligned with their needs.\n\nTraining combines practical communication frameworks, authentic professional scenarios, interactive speaking practice and targeted feedback.\n\nThe specialist courses can be undertaken independently or following the core clinical communication pathway.",
    },
    {
      type: "value-props",
      title: "Specialist Course Options",
      display: "accordion",
      items: [
        {
          title: "Option A — OET Speaking Preparation",
          description:
            "Prepare to communicate effectively in OET speaking tasks. Develop the language and interaction skills required for the speaking component of the Occupational English Test. Focus areas include patient-centred role-play, communication strategies, task performance and targeted feedback aligned with OET speaking assessment criteria.",
        },
        {
          title: "Option B — International Patient Care",
          description:
            "Deliver confident, culturally responsive communication for international patients. Develop practical skills for communicating with patients from diverse linguistic and cultural backgrounds. Focus areas include cross-cultural awareness, managing communication barriers, explaining healthcare processes and supporting positive patient experiences.",
        },
        {
          title: "Option C — Overseas Practice Readiness",
          description:
            "Prepare for communication in international clinical environments. Strengthen spoken English and professional interaction skills relevant to overseas clinical placements and international healthcare exposure. Focus areas include workplace communication expectations, patient interactions, clinical handovers, multidisciplinary teamwork and cultural adaptation.",
        },
        {
          title: "Option D — Professional Presentation & Interview Skills",
          description:
            "Communicate your expertise with clarity and confidence. Develop professional speaking skills for medical interviews, clinical presentations and international professional exchanges. Focus areas include organising presentations, explaining clinical experience, responding to questions and communicating professionally in interviews.",
        },
      ],
    },
    {
      type: "value-props",
      title: "Learning Objectives",
      display: "list",
      items: [
        {
          title: "Learning objectives are defined according to the specialist option selected",
          description: "",
        },
        {
          title:
            "Participants develop the ability to communicate more confidently and effectively in their chosen professional context, applying relevant language, communication frameworks and interpersonal skills to realistic tasks",
          description: "",
        },
      ],
    },
    {
      type: "value-props",
      title: "Teaching Methods",
      display: "timeline",
      items: [
        { title: "Specialist communication workshops", description: "" },
        { title: "Scenario-based speaking practice", description: "" },
        { title: "Role-play and professional simulations", description: "" },
        { title: "Individual or group feedback", description: "" },
        { title: "Targeted assessment of relevant communication competencies", description: "" },
      ],
    },
    {
      type: "value-props",
      title: "Key Features",
      display: "grid",
      items: [
        {
          title: "Focused Professional Development",
          description: "Select training aligned with specific communication goals.",
        },
        {
          title: "Practical Specialist Scenarios",
          description: "Apply skills in authentic clinical or professional contexts.",
        },
        {
          title: "Flexible Programme Design",
          description: "Adapt course content and delivery to identified learning needs.",
        },
        {
          title: "Individual or Institutional Options",
          description: "Suitable for individual development or tailored healthcare team training.",
        },
        {
          title: "Standalone or Pathway Extension",
          description: "Enrol directly without completing the core pathway.",
        },
      ],
    },
    {
      type: "intro",
      title: "Expected Learning Outcome",
      body: "Participants will demonstrate improved communication performance in tasks relevant to their selected specialist course.\n\nSpecific outcomes, programme duration and assessment arrangements are determined by the chosen specialist option.",
    },
    {
      type: "intro",
      title: "Who Should Attend?",
      body: "Specialist training is suitable for doctors, nurses and other healthcare professionals who have specific English-speaking communication goals.\n\nIt is also available to healthcare institutions seeking focused communication development for particular teams or professional groups.",
    },
  ],

  testimonials: [],

  finalCta: {
    headline: "Develop the communication skills that support your next professional goal.",
    buttonLabel: "Enquire About Specialist Training",
    buttonHref: "/contact",
  },
};

export default data;

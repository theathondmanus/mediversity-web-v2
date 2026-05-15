import type { ProgrammeData } from "../../types";

const data: ProgrammeData = {
  slug: "oet-preparation",
  category: "medical-english",
  subcategory: "oet",
  title: "OET Preparation",
  shortDescription:
    "Boost your medical English skills and help you achieve success in the OET exam.",
  metaDescription:
    "OET Preparation with expert training, mock tests, online lessons, and personalised feedback to help healthcare professionals succeed.",
  duration: "3–12 months",
  audience: ["Doctors", "Nurses", "Healthcare Professionals"],
  featured: true,
  order: 10,
  status: "published",

  hero: {
    headline: "OET Preparation: Your Gateway to a Global Healthcare Career",
    lede: "Boost your medical English skills and help you achieve success in the OET exam.",
    ctaLabel: "Get Started Today",
    ctaHref: "/contact",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/hero-oet-preparation-QBUWoteSujNvauQjE2ay3Q.webp",
    imageAlt: "OET study desk with medical textbooks and world map showing UK, Australia, New Zealand, Ireland",
  },

  sections: [
    /* ── What is OET ── */
    {
      type: "intro",
      title: "What is OET?",
      body: "The Occupational English Test (OET) is an internationally recognised English language test for healthcare professionals. It evaluates your ability to communicate effectively in a healthcare environment, with tasks and scenarios designed to mirror real-world situations you will encounter in your healthcare career. Achieving high marks in the OET is often required to work or study in English-speaking countries like the UK, Australia, New Zealand, and Ireland.",
    },

    /* ── Why Choose Us ── */
    {
      type: "value-props",
      title: "Why Choose Us for Your OET Preparation?",
      items: [
        {
          title: "OET-Focused Curriculum",
          description:
            "Our courses are specifically designed for healthcare professionals, focusing on the four key areas of the OET: Listening, Reading, Writing, and Speaking. Each section is aligned with real-life medical scenarios to ensure you're prepared for both the exam and practical use in your career.",
        },
        {
          title: "Expert Instructors",
          description:
            "Our instructors have years of experience in medical English teaching, and many are healthcare professionals themselves. They understand your unique needs and are passionate about helping you succeed.",
        },
        {
          title: "Interactive Resources",
          description:
            "Engage with a variety of resources, including live classes, on-demand videos, practice exercises, mock tests, and step-by-step guides that cater to your preferred learning style.",
        },
        {
          title: "Personalised Learning",
          description:
            "We provide a tailored learning experience, offering one-on-one support and feedback to ensure you are on the right path to achieving your goals.",
        },
        {
          title: "Targeted Feedback",
          description:
            "Receive in-depth feedback on your Speaking and Writing practice. Our certified trainers will provide you with actionable insights to help you focus on areas that need improvement.",
        },
        {
          title: "Flexibility and Convenience",
          description:
            "Our platform is accessible 24/7, so you can study whenever and wherever it's convenient for you. Whether you're working full-time or have a busy schedule, you can fit OET preparation into your lifestyle.",
        },
        {
          title: "Community and Support",
          description:
            "Join a thriving community of like-minded learners. Share your experiences, ask questions, and get support from peers and instructors in a positive and encouraging environment.",
        },
        {
          title: "Proven Results",
          description:
            "Our students regularly achieve excellent results in the OET exam. With the right guidance and support, you'll gain the confidence and skills you need to pass the OET and further your career in healthcare.",
        },
      ],
    },

    /* ── OET Online Learning Platform ── */
    {
      type: "delivery-format",
      title: "OET Online Learning Platform",
      subtitle:
        "Flexible. Interactive. Effective. Designed for Busy Healthcare Professionals.",
      features: [
        {
          title: "Complete OET Curriculum",
          description:
            "Expert-led lessons covering Listening, Reading, Writing, and Speaking, tailored to real clinical settings and scenarios.",
        },
        {
          title: "Live & Recorded Classes",
          description:
            "Attend live sessions and access recorded lessons at your convenience to fit your schedule.",
        },
        {
          title: "Mock Tests & Personalised Feedback",
          description:
            "Practice full OET exams under timed conditions and get actionable insights from certified OET trainers.",
        },
        {
          title: "Speaking & Writing Mastery",
          description:
            "Enhance your speaking and writing skills with one-on-one role-plays, personalised corrections, and targeted guidance.",
        },
        {
          title: "24/7 Platform Access",
          description:
            "Study at your own pace, revisit lessons, and track your progress anytime, anywhere.",
        },
        {
          title: "Flexible Subscription Plans",
          description:
            "Choose a subscription plan that suits your needs, from 3 months to 1 year, ensuring maximum flexibility.",
        },
      ],
      ctaLabel: "Discover Our Platform",
      ctaHref: "/contact",
    },

    /* ── Online Instructor-Led Courses ── */
    {
      type: "delivery-format",
      title: "Online Instructor-Led Courses",
      subtitle:
        "Structured lessons with real-time interaction and support from expert instructors, designed to help you stay focused and motivated.",
      features: [
        {
          title: "Comprehensive OET Preparation",
          description:
            "Master all four OET components – Listening, Reading, Writing, and Speaking – through a well-rounded, targeted approach to ensure thorough exam readiness.",
        },
        {
          title: "Live Sessions with Expert Instructors",
          description:
            "Participate in dynamic, real-time lessons led by experienced instructors who offer in-depth guidance and personalised support.",
        },
        {
          title: "Interactive Learning Environment",
          description:
            "Engage in live discussions, role-plays, and Q&A sessions that provide ample opportunities to practice your skills in a supportive and interactive setting.",
        },
        {
          title: "Tailored Feedback",
          description:
            "Receive constructive feedback to pinpoint areas for improvement and ensure consistent progress.",
        },
        {
          title: "Clear and Measurable Goals",
          description:
            "Each session is structured with specific learning objectives, keeping you focused and on track to achieve measurable results.",
        },
        {
          title: "Practice with Realistic OET Simulations",
          description:
            "Prepare for the exam with mock tests and practice exercises that replicate the real OET environment, building your confidence and exam readiness.",
        },
      ],
      ctaLabel: "Explore Instructor-Led Courses",
      ctaHref: "/contact",
    },

    /* ── OET One-to-One Tutorial ── */
    {
      type: "delivery-format",
      title: "OET One-to-One Tutorial",
      subtitle:
        "For personalised, focused support, tailored to meet your individual needs, allowing you to concentrate on your specific weaknesses and accelerate your OET preparation.",
      features: [
        {
          title: "Personalised Learning",
          description:
            "Receive one-on-one sessions tailored specifically to your needs, helping you address your unique challenges in OET preparation.",
        },
        {
          title: "Expert Tutors",
          description:
            "Work closely with experienced English-speaking tutors who offer specialised knowledge and guidance to help you excel in the OET.",
        },
        {
          title: "Focused Support",
          description:
            "Concentrate on the areas where you need the most improvement, allowing you to accelerate your progress and build confidence.",
        },
        {
          title: "Customised Practice",
          description:
            "Benefit from tailored exercises and feedback, designed to optimise your OET preparation and fast-track your success.",
        },
        {
          title: "Flexible Scheduling",
          description:
            "Learn at your convenience with scheduling options that fit your lifestyle and commitments, ensuring a stress-free learning experience.",
        },
      ],
      ctaLabel: "Learn More",
      ctaHref: "/contact",
    },
  ],

  testimonials: [
    {
      quote:
        "Mediversity Global helped me improve my patient communication in English, especially during handovers and explaining procedures. The practical role-play sessions and real hospital scenarios made a huge difference in my daily work.",
      name: "Li Na",
      role: "Registered Nurse",
      location: "Shanghai",
    },
    {
      quote:
        "As a doctor preparing for PLAB, Mediversity Global gave me the language skills and confidence to take patient histories, discuss diagnoses, and communicate clearly with colleagues in an English-speaking environment.",
      name: "Dr. Chen Wei",
      role: "Internal Medicine",
      location: "Beijing",
    },
  ],

  finalCta: {
    headline: "Join them and start your OET success journey today!",
    buttonLabel: "Get Started Today",
    buttonHref: "/contact",
  },
};

export default data;

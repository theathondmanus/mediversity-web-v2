export interface Testimonial {
  id: string;
  nameKey: string;
  role: string;
  content: string;
  initials: string;
  accent: string;
  program?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    nameKey: "testimonials.name1",
    role: "testimonials.role1",
    content: "testimonials.content1",
    initials: "WM",
    accent: "#00438A",
    program: "testimonials.program1",
  },
  {
    id: "2",
    nameKey: "testimonials.name2",
    role: "testimonials.role2",
    content: "testimonials.content2",
    initials: "LH",
    accent: "#C4922A",
    program: "testimonials.program2",
  },
  {
    id: "3",
    nameKey: "testimonials.name3",
    role: "testimonials.role3",
    content: "testimonials.content3",
    initials: "ZW",
    accent: "#2D6A4F",
    program: "testimonials.program3",
  },
  {
    id: "4",
    nameKey: "testimonials.name4",
    role: "testimonials.role4",
    content: "testimonials.content4",
    initials: "CJ",
    accent: "#7B2D8B",
    program: "testimonials.program4",
  },
  {
    id: "5",
    nameKey: "testimonials.name5",
    role: "testimonials.role5",
    content: "testimonials.content5",
    initials: "LY",
    accent: "#00438A",
    program: "testimonials.program5",
  },
];

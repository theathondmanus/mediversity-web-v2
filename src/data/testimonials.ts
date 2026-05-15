export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  initials: string;
  accent: string;
  program?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. 王明",
    role: "testimonials.role1",
    content: "testimonials.content1",
    initials: "WM",
    accent: "#00438A",
    program: "testimonials.program1",
  },
  {
    id: "2",
    name: "Dr. 李华",
    role: "testimonials.role2",
    content: "testimonials.content2",
    initials: "LH",
    accent: "#C4922A",
    program: "testimonials.program2",
  },
  {
    id: "3",
    name: "Dr. 张伟",
    role: "testimonials.role3",
    content: "testimonials.content3",
    initials: "ZW",
    accent: "#2D6A4F",
    program: "testimonials.program3",
  },
  {
    id: "4",
    name: "Dr. 陈静",
    role: "testimonials.role4",
    content: "testimonials.content4",
    initials: "CJ",
    accent: "#7B2D8B",
    program: "testimonials.program4",
  },
  {
    id: "5",
    name: "Dr. 刘洋",
    role: "testimonials.role5",
    content: "testimonials.content5",
    initials: "LY",
    accent: "#00438A",
    program: "testimonials.program5",
  },
];

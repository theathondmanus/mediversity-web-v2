export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  initials: string;
  accent: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. 王明",
    role: "testimonials.role1",
    content: "testimonials.content1",
    initials: "王",
    accent: "#00438A",
  },
  {
    id: "2",
    name: "Dr. 李华",
    role: "testimonials.role2",
    content: "testimonials.content2",
    initials: "李",
    accent: "#6B21A8",
  },
  {
    id: "3",
    name: "Dr. 张伟",
    role: "testimonials.role3",
    content: "testimonials.content3",
    initials: "张",
    accent: "#047857",
  },
  {
    id: "4",
    name: "Dr. 陈静",
    role: "testimonials.role4",
    content: "testimonials.content4",
    initials: "陈",
    accent: "#B45309",
  },
  {
    id: "5",
    name: "Dr. 刘洋",
    role: "testimonials.role5",
    content: "testimonials.content5",
    initials: "刘",
    accent: "#00438A",
  },
];

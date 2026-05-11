export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. 王明",
    role: "testimonials.role1",
    content: "testimonials.content1",
  },
  {
    id: "2",
    name: "Dr. 李华",
    role: "testimonials.role2",
    content: "testimonials.content2",
  },
  {
    id: "3",
    name: "Dr. 张伟",
    role: "testimonials.role3",
    content: "testimonials.content3",
  },
  {
    id: "4",
    name: "Dr. 陈静",
    role: "testimonials.role4",
    content: "testimonials.content4",
  },
  {
    id: "5",
    name: "Dr. 刘洋",
    role: "testimonials.role5",
    content: "testimonials.content5",
  },
];

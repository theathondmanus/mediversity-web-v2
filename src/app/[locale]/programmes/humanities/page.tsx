"use client";

import { BookOpen, Heart, Users } from "lucide-react";
import PillarLandingPage, { type SubCategory } from "@/components/programmes/PillarLandingPage";

const subcategories: SubCategory[] = [
  {
    id: "medical-humanities",
    icon: Heart,
    titleKey: "medicalHumanities",
    descKey: "medicalHumanitiesDesc",
    courses: [
      { titleKey: "medicalHumanitiesGeneralPractice", status: "active", slug: "medical-humanities-and-general-practice-literacy", cover: "/images/courses/medical-humanities-and-general-practice-literacy.webp", coverAlt: "医学人文与全科素养", description: "10 节课系统培养医学人文素养与全科执业能力，融合伦理思辨与临床实践" },
      { titleKey: "medicalHumanitiesCommunicationSkills", status: "active", slug: "medical-humanities-and-communication-skills", cover: "/images/courses/medical-humanities-and-communication-skills.webp", coverAlt: "医学人文与沟通技能", description: "6 节课提升医患沟通能力与人文关怀实践，培养共情与叙事医学思维" },
      { titleKey: "empathyPatientCommunication", status: "future" },
      { titleKey: "narrativeMedicine", status: "future" },
    ],
  },
  {
    id: "leadership",
    icon: Users,
    titleKey: "leadership",
    descKey: "leadershipDesc",
    courses: [
      { titleKey: "healthcareLeadership", status: "future" },
      { titleKey: "crossCulturalCommunication", status: "future" },
      { titleKey: "reflectivePractice", status: "future" },
    ],
  },
];

export default function HumanitiesPage() {
  return (
    <PillarLandingPage
      pillarKey="humanities"
      categorySlug="humanities"
      icon={BookOpen}
      color="bg-amber-50 text-amber-700"
      subcategories={subcategories}
      heroImage="/images/hero/humanities.webp"
      heroImageAlt="Diverse medical professionals in an animated ethics and patient communication discussion at golden hour"
    />
  );
}

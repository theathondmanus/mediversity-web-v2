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
      { titleKey: "medicalHumanitiesGeneralPractice", status: "active", slug: "medical-humanities-and-general-practice-literacy" },
      { titleKey: "medicalHumanitiesCommunicationSkills", status: "active", slug: "medical-humanities-and-communication-skills" },
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

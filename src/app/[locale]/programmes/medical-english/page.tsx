"use client";

import { GraduationCap, BookOpenCheck, Award, ShieldCheck, Plane } from "lucide-react";
import PillarLandingPage, { type SubCategory } from "@/components/programmes/PillarLandingPage";

const subcategories: SubCategory[] = [
  {
    id: "foundations",
    icon: BookOpenCheck,
    titleKey: "foundations",
    descKey: "foundationsDesc",
    courses: [
      { titleKey: "preparatoryMedicalEnglish", status: "active" },
      { titleKey: "clinicalCommunicationFoundations", status: "future" },
      { titleKey: "generalEnglishHealthcare", status: "future" },
    ],
  },
  {
    id: "oet",
    icon: Award,
    titleKey: "oet",
    descKey: "oetDesc",
    courses: [
      { titleKey: "oetPreparation", status: "active", slug: "oet-preparation" },
      { titleKey: "oetIntensiveBootcamp", status: "future" },
      { titleKey: "platCommunication", status: "future" },
      { titleKey: "healthcareInterview", status: "future" },
    ],
  },
  {
    id: "clinical",
    icon: ShieldCheck,
    titleKey: "clinical",
    descKey: "clinicalDesc",
    courses: [
      { titleKey: "workplaceMedicalEnglish", status: "active" },
      { titleKey: "medicalEnglishDoctors", status: "active" },
      { titleKey: "medicalEnglishNurses", status: "active" },
      { titleKey: "clinicalConsultationEnglish", status: "future" },
      { titleKey: "wardHandoverCommunication", status: "future" },
    ],
  },
  {
    id: "global-mobility",
    icon: Plane,
    titleKey: "globalMobility",
    descKey: "globalMobilityDesc",
    courses: [
      { titleKey: "preDepartureMedicalEnglish", status: "active" },
      { titleKey: "ukHealthcareOrientation", status: "future" },
      { titleKey: "culturalCommunication", status: "future" },
      { titleKey: "internationalWorkplaceReadiness", status: "future" },
    ],
  },
];

export default function MedicalEnglishPage() {
  return (
    <PillarLandingPage
      pillarKey="medicalEnglish"
      categorySlug="medical-english"
      icon={GraduationCap}
      color="bg-blue-50 text-[#00438A]"
      subcategories={subcategories}
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663283240002/KBq5Lyhh4CaM5hQqeAng4Y/hero-pillar-medical-english-cYnZS7wLf48eSiskm3iz9R.webp"
      heroImageAlt="Medical English learning environment with international video conference"
    />
  );
}

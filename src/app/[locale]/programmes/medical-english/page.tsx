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
      { titleKey: "preparatoryMedicalEnglish", status: "active", slug: "preparatory-medical-english" },
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
      { titleKey: "medicalEnglishDoctors", status: "active", slug: "medical-english-for-doctors" },
      { titleKey: "medicalEnglishNurses", status: "active", slug: "medical-english-for-nurses" },
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
      { titleKey: "preDepartureMedicalEnglish", status: "active", slug: "pre-departure-medical-english" },
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
      heroImage="/images/hero/medical-english.webp"
      heroImageAlt="Western instructor teaching medical terminology to Chinese doctors in white coats at a seminar table"
    />
  );
}

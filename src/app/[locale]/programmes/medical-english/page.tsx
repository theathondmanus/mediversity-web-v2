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
      { titleKey: "preparatoryMedicalEnglish", status: "active", slug: "preparatory-medical-english", cover: "/images/courses/preparatory-medical-english.webp", description: "12 课时基础英语课程，专为医疗从业者设计" },
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
      { titleKey: "oetPreparation", status: "active", slug: "oet-preparation", cover: "/images/courses/oet-preparation.webp", description: "提升您的医学英语能力，助力成功通过 OET 考试" },
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
      { titleKey: "workplaceMedicalEnglish", status: "future" },
      { titleKey: "medicalEnglishDoctors", status: "active", slug: "medical-english-for-doctors", cover: "/images/courses/medical-english-for-doctors.webp", description: "医疗专业人员语言沟通能力提升课程" },
      { titleKey: "medicalEnglishNurses", status: "active", slug: "medical-english-for-nurses", cover: "/images/courses/medical-english-for-nurses.webp", description: "护士专属医学英语沟通能力提升课程" },
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
      { titleKey: "preDepartureMedicalEnglish", status: "active", slug: "pre-departure-medical-english", cover: "/images/courses/pre-departure-medical-english.webp", description: "12 周强化语言项目，专为即将海外临床实习的医疗专业人士打造" },
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

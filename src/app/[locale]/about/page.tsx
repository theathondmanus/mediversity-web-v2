"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  GraduationCap,
  Globe,
  Handshake,
  Heart,
  Stethoscope,
  Building2,
  GraduationCap as SchoolIcon,
  Plane,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { FadeIn, FadeInGroup } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

/* ── Value icons — keys must match zh-CN/en.json about.values keys ── */
const VALUES = [
  { icon: GraduationCap, key: "excellence" },
  { icon: Globe, key: "global" },
  { icon: Handshake, key: "culture" },
  { icon: Heart, key: "patient" },
];

/* ── Who We Serve icons ── */
const SERVE_ICONS: Record<string, typeof Stethoscope> = {
  professionals: Stethoscope,
  institutions: Building2,
  schools: SchoolIcon,
  patients: Plane,
  partners: Handshake,
};

interface ServeItem {
  key: string;
  title: string;
  desc: string;
}

/* ── Team data ── */
const LEADERSHIP = [
  {
    id: "jenny-wu",
    name: "Jenny Wu",
    titleZh: "创始人兼首席执行官",
    titleEn: "Founder & CEO",
    group: "leadership",
    bio: {
      "zh-CN": "Jenny Wu 是 Mediversity Global 创始人兼首席执行官，负责公司的整体战略、国际业务发展与全球合作伙伴关系，并领导连接医疗专业人士、教育机构与国际医疗资源的重点项目。\n\n她拥有超过 15 年跨文化创业、国际教育及业务发展经验，长期深耕中国与北美市场，并曾成功创办和拓展跨境教育业务。她在国际教育、市场营销、人才发展及全球合作网络建设方面拥有丰富实践经验，尤其擅长连接不同市场、机构与专业人才。\n\n在 Mediversity Global，Jenny 重点推动全球医疗教育与专业发展生态建设，通过整合国际教育资源、医疗专业网络与职业发展机会，为医疗人才和机构创造更加开放、可持续的国际合作路径。",
      en: "Jenny Wu is the Founder and CEO of Mediversity Global, responsible for the company's overall strategy, international business development, and global partnerships. She leads key initiatives connecting healthcare professionals, educational institutions, and international medical resources.\n\nWith over 15 years of experience in cross-cultural entrepreneurship, international education, and business development — spanning both Chinese and North American markets — Jenny has a strong track record of founding and scaling cross-border education businesses. Her expertise spans international education, marketing, talent development, and building global collaborative networks.\n\nAt Mediversity Global, Jenny focuses on building a global medical education and professional development ecosystem, creating open and sustainable international pathways for healthcare professionals and institutions.",
    },
  },
  {
    id: "ming-wei",
    name: "Ming Wei",
    titleZh: "教育培训总监",
    titleEn: "Director of Education & Training",
    group: "leadership",
    bio: {
      "zh-CN": "Ming Wei 是 Mediversity Global 教育培训总监，负责公司教育与培训体系的整体规划，包括课程设计、教学质量、师资管理、教育产品开发及学习技术应用，确保项目兼具专业性、实践性与国际适用性。\n\n她拥有超过 20 年英国企业转型、变革管理与专业培训经验，在项目管理咨询、高管辅导、团队发展和组织变革领域具有深厚实践积累。她同时是 ICAgile 认证培训师，在跨文化沟通、领导力发展及成人学习设计方面拥有丰富经验。\n\n凭借企业管理与专业教育的双重背景，Ming 擅长将复杂专业知识转化为结构清晰、参与度高且能够实际应用的学习体验，并持续推动 Mediversity Global 建立面向国际医疗环境的高质量教育产品体系。",
      en: "Ming Wei is the Director of Education & Training at Mediversity Global, overseeing the company's entire educational and training framework — including curriculum design, teaching quality, faculty management, product development, and learning technology — ensuring all programmes are professional, practice-led, and internationally applicable.\n\nWith over 20 years of experience in UK corporate transformation, change management, and professional training, Ming has deep expertise in project management consulting, executive coaching, team development, and organisational change. She is an ICAgile Certified Trainer with extensive experience in cross-cultural communication, leadership development, and adult learning design.\n\nDrawing on her dual background in corporate management and professional education, Ming excels at translating complex expertise into structured, engaging, and actionable learning experiences.",
    },
  },
  {
    id: "krishna-chodipilli",
    name: "Krishna Chodipilli",
    titleZh: "技术与创新主管",
    titleEn: "Head of Technology & Innovation",
    group: "leadership",
    bio: {
      "zh-CN": "Krishna Chodipilli 负责 Mediversity Global 的技术与创新战略，推动人工智能、数据分析、数字化学习平台及新兴技术在医学教育和医疗服务中的应用，支持产品创新、学习体验优化与运营效率提升。\n\n他拥有超过 15 年人工智能研究、技术创新、风险投资顾问及敏捷交付管理经验，并曾参与全球企业的数字化转型与创新项目，涉及健康科技、教育科技、云计算与机器学习等多个领域。\n\nKrishna 重点探索技术与医疗教育、专业发展及医疗服务之间的结合，通过以人为本的技术设计，推动 Mediversity Global 建设更加智能、可扩展和面向未来的数字化产品与服务体系。",
      en: "Krishna Chodipilli leads the technology and innovation strategy at Mediversity Global, driving the application of AI, data analytics, digital learning platforms, and emerging technologies across medical education and healthcare services.\n\nWith over 15 years of experience in AI research, technology innovation, venture advisory, and agile delivery management, he has been involved in digital transformation projects across global enterprises spanning health tech, edtech, cloud computing, and machine learning.\n\nKrishna focuses on the intersection of technology with medical education, professional development, and healthcare services — building intelligent, scalable, and future-ready digital products at Mediversity Global.",
    },
  },
  {
    id: "yunhan-xu",
    name: "Yunhan Xu",
    titleZh: "业务运营与市场专员",
    titleEn: "Business Operations & Marketing Associate",
    group: "leadership",
    bio: {
      "zh-CN": "Yunhan Xu 负责 Mediversity Global 的业务运营、市场营销与项目支持工作，参与品牌建设、客户沟通、项目实施及市场拓展，并协助推动教育与跨境医疗业务的日常运营和服务体验优化。\n\n他拥有英国杜伦大学市场营销硕士学位及首都经济贸易大学市场营销学士学位，并具有医疗、科技及公共领域的市场营销与商务发展经验。此前曾在 Elsevier Clinical Solutions 参与大中华区 B2B 市场营销工作，并在品牌策划、市场研究、媒体监测及项目管理方面积累了实践经验。\n\n在 Mediversity Global，Yunhan 重点连接市场需求、客户体验与业务执行，通过数据、内容与运营协同，支持公司不同业务板块的市场拓展与持续增长。",
      en: "Yunhan Xu supports business operations, marketing, and project delivery at Mediversity Global — contributing to brand development, client communications, programme implementation, and business expansion across the company's education and cross-border healthcare divisions.\n\nHe holds an MSc in Marketing from Durham University and a BSc in Marketing from Capital University of Economics and Business. His background includes B2B marketing experience at Elsevier Clinical Solutions (Greater China region), with hands-on practice in brand planning, market research, media monitoring, and project management.\n\nAt Mediversity Global, Yunhan bridges market intelligence, client experience, and operational execution to support growth across business lines.",
    },
  },
];

const ADVISORY = [
  {
    id: "yonghong-peng",
    name: "Prof. Yonghong Peng",
    titleZh: "首席科学与创新顾问",
    titleEn: "Chief Science & Innovation Advisor",
    group: "advisory",
    bio: {
      "zh-CN": "Professor Yonghong Peng 是 Mediversity Global 首席科学与创新顾问，为公司在人工智能、数字健康、科研创新及智能教育等领域的发展提供战略与学术指导。\n\n彭永红教授现任英国 Anglia Ruskin University 人工智能教授及科研与创新副院长，并入选斯坦福大学与 Elsevier 发布的全球前 2% 顶尖科学家名单。他的研究涉及人工智能、Institutional Intelligence、AI in Healthcare，以及可信赖的人机协作等领域。",
      en: "Professor Yonghong Peng is the Chief Science & Innovation Advisor at Mediversity Global, providing strategic and academic guidance in artificial intelligence, digital health, research innovation, and intelligent education.\n\nHe is Professor of Artificial Intelligence and Associate Dean of Research & Innovation at Anglia Ruskin University (UK), and has been recognised in the Stanford/Elsevier Top 2% Scientists list. His research spans AI, Institutional Intelligence, AI in Healthcare, and trustworthy human-machine collaboration.",
    },
  },
  {
    id: "anna-zhao",
    name: "Dr. Anna Zhao",
    titleZh: "首席国际医疗顾问",
    titleEn: "Chief International Healthcare Advisor",
    group: "advisory",
    bio: {
      "zh-CN": "深耕国际医疗领域逾30年，其职业生涯贯穿公共、私立与公益三大领域。赵熙毕业于湘雅（湖南-耶鲁）医学院，在北京协和医院接受麻醉科住院医师培训，曾在中日友好医院执业，并作为访问学者在英国NHS公立医院获得General Medical Council临床行医执照。她同时拥有欧洲国际医疗管理MBA。\n\nSARS疫情期间，她工作在重症治疗临床一线后加入世界卫生组织驻华代表处，促进了临床与公共卫生应急之间的互动协同。此后，她先后在英国驻华大使馆及英中贸易协会负责医疗与生命科学行业合作，推动中英政府间医疗政策治理对话与机构间贸易伙伴关系的建立。\n\n赵熙医生在医疗公益领域亦展现了变革性的领导力。作为和睦家医疗企业基金会首任理事长兼法定代表人，她完成了基金会从零到一的建设，并领导了赋能患者组织的跨界合作。作为北京康盟慈善基金会首席医疗官，她主导的患者援助项目患者数字画像研究覆盖了180万名肿瘤、罕见病及慢病患者。同时，她担任清华大学苏世民书院职业发展导师，聚焦医疗与公益。\n\n在Mediversity Global，赵熙医生专注于国际患者导航、跨境医疗合作与战略性医学交流，将她多元化的医疗与公益实践转化为可持续的现实影响力。",
      en: "Dr. Anna Zhao brings over 30 years of experience in international healthcare, spanning the public, private, and philanthropic sectors. A graduate of Xiangya (Hunan-Yale) Medical School, she completed her anaesthesiology residency at Peking Union Medical College Hospital, practised at China-Japan Friendship Hospital, and earned her GMC clinical registration as a visiting doctor within the UK NHS. She also holds an MBA in International Healthcare Management from Europe.\n\nDuring the SARS outbreak, Dr. Zhao worked on the ICU front line before joining the World Health Organization in China, where she helped bridge clinical practice and public health emergency response. She later led health and life sciences engagement at the British Embassy in Beijing and the China-Britain Business Council, driving bilateral health policy dialogue and institutional business partnerships.\n\nDr. Zhao has also demonstrated transformative leadership in health philanthropy. As the Executive Director and Legal Representative of the corporate foundation of United Family Healthcare, she built the organisation from the ground up and led cross-sector initiatives empowering Patient Groups. As Chief Medical Officer at the Beijing Health Alliance Charitable Foundation, she delivered a digital profiling research of Patient Assistance Program covering 1.8 million patients with cancer, rare diseases, and chronic conditions. She also serves as Career Mentor (Health and Philanthropy) at Schwarzman College, Tsinghua University.\n\nAt Mediversity Global, Dr. Zhao focuses on international patient navigation, cross-border healthcare partnerships, and strategic medical exchange — translating her diverse experience into sustainable, real-world impact.",
    },
  },
  {
    id: "lanxi-deng",
    name: "Dr. Lanxi Deng",
    titleZh: "医疗顾问｜心理健康与职业发展",
    titleEn: "Medical Advisor, Mental Health & Professional Development",
    group: "advisory",
    bio: {
      "zh-CN": "Dr. Lanxi Deng 是 Mediversity Global 医疗顾问，重点为心理健康、跨文化医疗、专业人才发展及医疗从业者身心健康相关项目提供专业指导，并支持课程和服务体系的循证性与文化适应性。\n\nDr. Deng 是法国注册心理治疗师，拥有临床心理学博士学位，并拥有欧洲、亚洲及北美的跨区域临床、研究和专业教育经验。他的专业领域涵盖心理健康、跨文化心理学、医疗专业人士身心健康及职业韧性。",
      en: "Dr. Lanxi Deng is Medical Advisor at Mediversity Global, providing specialist guidance on mental health, cross-cultural healthcare, professional development, and practitioner wellbeing — supporting the evidence-base and cultural adaptability of programmes and services.\n\nHe is a France-registered psychotherapist with a doctorate in clinical psychology and cross-regional clinical, research, and professional education experience across Europe, Asia, and North America. His expertise covers mental health, cross-cultural psychology, healthcare professional wellbeing, and occupational resilience.",
    },
  },
];

const FACULTY = [
  {
    id: "michael-yang",
    name: "Michael Yang",
    titleZh: "高级医学英语讲师",
    titleEn: "Senior Medical English Trainer",
    group: "faculty",
    bio: {
      "zh-CN": "Michael Yang 是 Mediversity Global 高级医学英语与临床沟通讲师，主要参与医学英语、临床沟通、医疗翻译及国际医疗交流相关培训项目的课程设计与教学。\n\n他拥有执业医师及专业医药口译双重专业背景，并具有超过 10 年医疗翻译与临床语言服务经验，长期参与医疗文书翻译、诊疗现场口译及国际医学会议同声传译等专业场景。",
      en: "Michael Yang is a Senior Medical English and Clinical Communication Trainer at Mediversity Global, contributing to curriculum design and teaching across medical English, clinical communication, medical translation, and international healthcare exchange programmes.\n\nHe holds dual professional backgrounds as a licensed physician and professional medical interpreter, with over 10 years of experience in healthcare translation and clinical language services — spanning medical document translation, on-site clinical interpreting, and simultaneous interpreting at international medical conferences.",
    },
  },
  {
    id: "lisa-zeng",
    name: "Lisa Zeng",
    titleZh: "高级医学英语讲师",
    titleEn: "Senior Medical English Trainer",
    group: "faculty",
    bio: {
      "zh-CN": "Lisa Zeng 是 Mediversity Global 高级医学英语与临床沟通讲师，主要参与医学英语、医疗口译、国际医疗沟通及专业人才培训项目的课程设计与教学。\n\n她拥有医学学士与翻译硕士双专业背景，并积累超过 6,500 小时医学英汉交替传译与同声传译实践经验，专业经历覆盖骨科、神经医学、公共卫生、肿瘤、心脑血管等多个医学领域。她同时具有 JCI 国际认证相关项目、WHO 相关翻译工作及高校医学翻译教学经验。",
      en: "Lisa Zeng is a Senior Medical English and Clinical Communication Trainer at Mediversity Global, contributing to curriculum design and delivery across medical English, medical interpreting, international healthcare communication, and professional development programmes.\n\nShe holds dual qualifications in Medicine (MBBS) and Translation (MA), with over 6,500 hours of English-Chinese consecutive and simultaneous interpreting experience spanning orthopaedics, neurology, public health, oncology, and cardiovascular medicine. She has also worked on JCI accreditation projects, WHO-related translation assignments, and university-level medical translation teaching.",
    },
  },
];

/* ── Team Member Card ── */
function TeamMemberCard({ member, locale }: { member: typeof LEADERSHIP[0]; locale: string }) {
  const [expanded, setExpanded] = useState(false);
  const bioText = member.bio[locale as keyof typeof member.bio] ?? member.bio["en"];
  const titleText = locale === "zh-CN" ? member.titleZh : member.titleEn;
  const avatarSize = "w-28 h-28 md:w-32 md:h-32";

  return (
    <div className="flex flex-col items-center text-center group">
      {/* Large circular avatar */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer focus:outline-none"
      >
        <div className={`${avatarSize} rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#C4922A]/40 transition-all duration-300 shadow-md group-hover:shadow-lg`}>
          <img
            src={`/images/team/${member.id}.webp`}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </button>
      {/* Name & title */}
      <h3 className="font-semibold text-[#0A1628] text-sm md:text-base leading-snug mt-4">
        {member.name}
      </h3>
      <p className="text-xs text-[#00438A] mt-1 leading-relaxed max-w-[160px]">
        {titleText}
      </p>
      {/* Expand/collapse trigger */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-0.5 text-[11px] font-medium text-[#8A889A] hover:text-[#00438A] transition-colors mt-2 cursor-pointer"
      >
        {expanded
          ? (locale === "zh-CN" ? "收起" : "Close")
          : (locale === "zh-CN" ? "了解更多" : "View Profile")}
        {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      {/* Expanded bio detail card */}
      {expanded && (
        <Card className="mt-4 border-0 shadow-lg w-full max-w-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <CardContent className="p-5 text-left">
            <div className="text-sm text-[#3C3A47] leading-relaxed whitespace-pre-line">
              {bioText}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const serveItems = t.raw("whoWeServe.items") as ServeItem[];

  return (
    <>
      {/* ═══ Hero ═══ */}
      <HeroSection
        image="/images/hero/about.webp"
        imageAlt="International conference room with panoramic city view"
      >
        <FadeIn>
          <p className="eyebrow !text-[#C4922A]">{t("title")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("subtitle")}
          </h1>
        </FadeIn>
      </HeroSection>

      {/* ═══ Story ═══ */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <FadeInGroup>
            <FadeIn index={0}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-8">
                {t("story.title")}
              </h2>
            </FadeIn>
            <FadeIn index={1} as="p" className="text-[#3C3A47] leading-relaxed text-lg mb-6">
              {t("story.paragraph1")}
            </FadeIn>
            <FadeIn index={2} as="p" className="text-[#3C3A47] leading-relaxed text-lg mb-6">
              {t("story.paragraph2")}
            </FadeIn>
            <FadeIn index={3} as="p" className="text-[#3C3A47] leading-relaxed text-lg">
              {t("story.paragraph3")}
            </FadeIn>
          </FadeInGroup>
        </div>
      </section>

      {/* ═══ Who We Serve ═══ */}
      <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
            <p className="eyebrow">{t("whoWeServe.eyebrow")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A1628] mb-6">
              {t("whoWeServe.title")}
            </h2>
            <p className="text-[#3C3A47] leading-relaxed text-base md:text-lg">
              {t("whoWeServe.intro")}
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {serveItems.map((item, idx) => {
              const Icon = SERVE_ICONS[item.key] || Stethoscope;
              return (
                <FadeIn key={item.key} index={idx}>
                  <Card className="h-full border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00438A]/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-2 text-base">{item.title}</h3>
                      {item.desc && (
                        <p className="text-sm text-[#3C3A47] leading-relaxed">{item.desc}</p>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Values ═══ */}
      <section className="section-padding bg-white">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628]">
              {t("values.title")}
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.key} index={idx}>
                  <Card className="h-full border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00438A]/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#00438A]" />
                      </div>
                      <h3 className="font-semibold text-[#0A1628] mb-3 text-sm leading-snug">
                        {t(`values.${value.key}.title`)}
                      </h3>
                      <p className="text-xs text-[#3C3A47] leading-relaxed">
                        {t(`values.${value.key}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Our Team ═══ */}
      <section className="section-padding" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="container">
          <FadeIn className="text-center mb-4 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
              {locale === "zh-CN" ? "我们的团队" : "Our Team"}
            </h2>
            <p className="text-[#3C3A47] leading-relaxed text-base">
              {locale === "zh-CN"
                ? "Mediversity Global 汇聚各领域的资深从业者与专家，共同致力于连接全球医疗人才、知识与优质医疗资源。团队由核心管理与运营团队、医学及科技领域专家顾问，以及具有丰富临床与医学语言实践经验的专业讲师组成。"
                : "Mediversity Global brings together experienced practitioners and specialists across disciplines, united in connecting global healthcare talent, knowledge, and high-quality medical resources. Our team comprises a core leadership and operations group, expert advisors in medicine and technology, and specialist trainers with extensive clinical and medical language experience."}
            </p>
          </FadeIn>

          {/* Leadership */}
          <div className="mt-12">
            <FadeIn>
              <h3 className="text-xs font-semibold text-[#8A889A] uppercase tracking-widest mb-6">
                {locale === "zh-CN" ? "Leadership & Core Team｜领导与核心团队" : "Leadership & Core Team"}
              </h3>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {LEADERSHIP.map((member, idx) => (
                <FadeIn key={member.id} index={idx}>
                  <TeamMemberCard member={member} locale={locale} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Advisory */}
          <div className="mt-12">
            <FadeIn>
              <h3 className="text-xs font-semibold text-[#8A889A] uppercase tracking-widest mb-6">
                {locale === "zh-CN" ? "Advisory Board｜专家顾问团队" : "Advisory Board"}
              </h3>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {ADVISORY.map((member, idx) => (
                <FadeIn key={member.id} index={idx}>
                  <TeamMemberCard member={member} locale={locale} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Faculty */}
          <div className="mt-12">
            <FadeIn>
              <h3 className="text-xs font-semibold text-[#8A889A] uppercase tracking-widest mb-6">
                {locale === "zh-CN" ? "Senior Faculty｜高级教学团队" : "Senior Faculty"}
              </h3>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {FACULTY.map((member, idx) => (
                <FadeIn key={member.id} index={idx}>
                  <TeamMemberCard member={member} locale={locale} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

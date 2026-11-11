/**
 * Speaking Pathway — 课程体系总览页文案（中英双语）
 *
 * 内容来源：《MVG 医学英语口语与临床沟通能力提升课程体系 · 网站宣传文案》
 * 只放总览页文案；单门课程正文在 speaking-pathway/{locale}/*.ts
 */

export interface PathwayStep {
  title: string;
  body: string;
}

export interface PathwayOverviewCopy {
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  heroTagline: string;
  introTitle: string;
  introBody: string[];
  coursesTitle: string;
  coursesNote: string;
  choiceTitle: string;
  choices: PathwayStep[];
  whyTitle: string;
  whyItems: PathwayStep[];
  audienceTitle: string;
  audienceBody: string[];
  journeyTitle: string;
  journey: PathwayStep[];
  finalTitle: string;
  finalBody: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
  exploreCourse: string;
}

const zh: PathwayOverviewCopy = {
  heroEyebrow: "课程体系",
  heroTitle: "医学英语口语与临床沟通能力提升课程体系",
  heroLede:
    "从语言表达到临床沟通，从开口自信到专业胜任。面向医生、护士及其他医疗卫生专业人员，以真实临床场景为基础，将医学英语表达与临床沟通实践相结合。",
  heroTagline: "四大课程方向 ｜ 独立选课 ｜ 系统进阶 ｜ 灵活定制",
  introTitle: "课程体系简介",
  introBody: [
    "在日益国际化的医疗环境中，良好的英语沟通能力不仅体现在医学术语的掌握和语言表达的流利程度上，更体现在医护人员能否准确理解患者需求、清晰解释医疗信息、有效开展临床交流，并在跨文化环境中建立专业、可信赖的医患关系。",
    "MVG 医学英语口语与临床沟通能力提升课程体系面向医生、护士及其他医疗卫生专业人员，以真实临床场景为基础，将医学英语表达与临床沟通实践相结合，帮助学员逐步提升英语交流能力和专业沟通水平。",
    "课程体系借鉴国际临床沟通教学理念，围绕日常医疗交流、以患者为中心的临床问诊、复杂情境沟通及国际医疗专项应用，构建循序渐进的能力提升路径。",
    "通过互动教学、情景模拟、角色扮演与针对性反馈，帮助学员将所学知识转化为实际工作中能够运用的沟通技能。既可选择完整课程体系，系统提升临床英语沟通能力；也可根据个人需求，独立选修其中任意一门课程。",
  ],
  coursesTitle: "四大课程方向",
  coursesNote: "点击课程卡片查看详情",
  choiceTitle: "灵活学习，按需选择",
  choices: [
    {
      title: "完整课程体系｜系统提升",
      body: "希望持续提升医学英语沟通能力的学员，可根据自身基础，选择由基础到进阶的系统化学习路径。各课程在能力目标和教学内容上相互衔接，帮助学员逐步建立更加全面的英语临床沟通能力。",
    },
    {
      title: "独立课程｜精准提升",
      body: "每门课程均具有相对独立的学习目标、教学内容及成果评价方式。学员可直接选择符合自身需求的课程，无须完成其他阶段的学习。",
    },
    {
      title: "机构定制｜灵活组合",
      body: "针对医院、医疗机构及医学教育单位，可根据培训对象、岗位特点、科室需求及培养目标，灵活选择单门课程、组合课程或定制化培训方案。",
    },
  ],
  whyTitle: "为什么选择 MVG？",
  whyItems: [
    {
      title: "以能力为导向",
      body: "不仅关注语言知识的学习，更强调学员能否在实际临床任务中有效运用英语进行沟通。",
    },
    {
      title: "以临床场景为依托",
      body: "围绕真实医疗工作中常见的问诊、解释、交接班及团队交流等情境组织教学，让学习更加贴近岗位需求。",
    },
    {
      title: "以学习成效为目标",
      body: "通过明确的能力目标、持续反馈及实践性评价，帮助学员了解学习进展和需要进一步提升的方面。",
    },
    {
      title: "注重互动与实践",
      body: "采用示范讲解、情景模拟、角色扮演、小组讨论及针对性反馈等方式，增加学员实际开口表达和沟通练习的机会。",
    },
    {
      title: "灵活适配不同需求",
      body: "既支持个人自主选课，也可根据医疗机构的培训目标，设计适合不同岗位、科室及能力层次的培训方案。",
    },
    {
      title: "数字化学习支持",
      body: "结合 MVG Academy 数字学习平台，通过词汇学习、情景对话及短时练习等配套资源，支持课前准备、课后巩固和自主学习。",
    },
  ],
  audienceTitle: "适合哪些学习者？",
  audienceBody: [
    "本课程体系主要面向希望提升医学英语口语及临床沟通能力的医生、护士及其他医疗卫生专业人员。",
    "同时适用于希望加强国际患者服务能力、提升医护团队英语沟通水平，或开展国际化人才培养的医院、医疗机构和医学教育单位。",
  ],
  journeyTitle: "学习路径与实施流程",
  journey: [
    {
      title: "明确学习目标",
      body: "根据个人职业发展需求、现有英语水平及实际工作中的沟通挑战，确定重点提升方向。",
    },
    {
      title: "选择适合的课程",
      body: "可独立选择单门课程，也可根据需要规划系统学习路径。必要时通过入学测评辅助确定适合的课程起点。",
    },
    {
      title: "参与互动式学习",
      body: "通过教师引导、真实案例、角色扮演及情景模拟，反复练习并逐步掌握相关沟通技能。",
    },
    {
      title: "获得反馈与评价",
      body: "通过课堂练习、阶段任务和实践性评价，了解自身优势及进一步提升的空间。",
    },
    {
      title: "持续应用与进阶",
      body: "将所学技能应用于实际工作，并根据需要继续学习其他课程或专项内容。",
    },
  ],
  finalTitle: "开启您的医学英语沟通能力提升之旅",
  finalBody:
    "选择适合的课程，提升真正用得上的沟通能力。无论您希望从基础开始建立英语交流信心，还是希望提升专业问诊、复杂临床沟通或国际医疗交流能力，MVG 都能为您提供灵活、务实的学习选择。",
  finalCtaPrimary: "浏览全部课程",
  finalCtaSecondary: "咨询完整课程体系",
  exploreCourse: "了解课程详情",
};

const en: PathwayOverviewCopy = {
  heroEyebrow: "Pathway",
  heroTitle: "Medical Speaking & Clinical Communication Pathway",
  heroLede:
    "From language confidence to clinical communication competence. A structured, practice-led programme for doctors, nurses and other healthcare professionals, built around authentic clinical scenarios.",
  heroTagline: "Four course stages ｜ Standalone courses ｜ Progressive pathway ｜ Tailored programmes",
  introTitle: "Pathway Overview",
  introBody: [
    "Effective clinical communication requires more than medical vocabulary or fluency in English. It involves understanding patient needs, asking meaningful questions, explaining clinical information clearly and communicating professionally with colleagues across diverse healthcare settings.",
    "The MVG Medical Speaking & Clinical Communication Pathway is a structured, practice-led learning programme designed to help healthcare professionals develop the English communication skills needed for real-world clinical practice.",
    "Built around internationally informed clinical communication principles, authentic healthcare scenarios and practical learning outcomes, the pathway supports progression from essential spoken interactions to patient-centred consultations, advanced professional communication and specialist applications.",
    "Choose the complete pathway or enrol in individual courses according to your experience, professional responsibilities and learning goals.",
  ],
  coursesTitle: "Our Four Course Stages",
  coursesNote: "Select a course card to view details",
  choiceTitle: "Your Learning, Your Choice",
  choices: [
    {
      title: "Complete the Full Pathway",
      body: "Follow a structured professional development journey, building progressively from foundational communication through advanced clinical interaction. The full pathway offers continuity in learning and an integrated approach to assessment and feedback.",
    },
    {
      title: "Choose an Individual Course",
      body: "Each course is designed as a complete learning experience in its own right. You can enrol in a single course to address a specific development need without committing to the entire pathway.",
    },
    {
      title: "Tailored Programmes for Healthcare Organisations",
      body: "Hospitals and healthcare institutions can select individual courses, combine multiple courses or work with MVG to develop customised training programmes. Content, clinical scenarios, delivery arrangements and assessment approaches can be adapted to specific teams and departments.",
    },
  ],
  whyTitle: "Why Choose the MVG Pathway?",
  whyItems: [
    {
      title: "Competency-Based Learning",
      body: "Focus on developing demonstrable communication skills rather than simply acquiring theoretical language knowledge.",
    },
    {
      title: "Authentic Clinical Scenarios",
      body: "Apply communication skills through realistic patient encounters, consultations, handovers and professional interactions.",
    },
    {
      title: "Progress-Focused Assessment",
      body: "Identify development needs, receive constructive feedback and evaluate learning through practical communication tasks.",
    },
    {
      title: "Interactive, Practice-Led Teaching",
      body: "Build confidence through role-play, simulation, case discussion and guided feedback.",
    },
    {
      title: "Flexible Course Selection",
      body: "Choose the complete pathway, individual courses or a tailored combination of learning modules.",
    },
    {
      title: "Blended Learning Support",
      body: "Reinforce classroom learning through selected digital activities and resources available through MVG Academy.",
    },
  ],
  audienceTitle: "Who Is the Pathway For?",
  audienceBody: [
    "The pathway is designed for doctors, nurses, allied healthcare professionals and other clinical staff seeking to improve their spoken English and clinical communication skills.",
    "It also supports healthcare organisations wishing to strengthen international patient services, professional development and effective communication across clinical teams.",
  ],
  journeyTitle: "How Your Learning Journey Works",
  journey: [
    {
      title: "Identify Your Goals",
      body: "Explore your professional needs and the communication skills you would like to develop.",
    },
    {
      title: "Choose Your Course or Pathway",
      body: "Select an individual course or a combination of courses. An initial assessment can help identify an appropriate starting point.",
    },
    {
      title: "Learn Through Practice",
      body: "Develop your skills through interactive teaching, realistic scenarios and guided communication activities.",
    },
    {
      title: "Receive Feedback",
      body: "Understand your strengths and identify areas for improvement through practical assessment and constructive feedback.",
    },
    {
      title: "Continue Your Development",
      body: "Apply your learning in professional settings or progress to another course when ready.",
    },
  ],
  finalTitle: "Start Your Communication Journey",
  finalBody:
    "The right course. The right skills. Your professional goals. Whether you are beginning to develop clinical spoken English or preparing for more advanced communication challenges, MVG offers flexible learning opportunities.",
  finalCtaPrimary: "Explore Individual Courses",
  finalCtaSecondary: "Enquire About the Full Pathway",
  exploreCourse: "Explore course",
};

export const pathwayOverview: Record<string, PathwayOverviewCopy> = {
  "zh-CN": zh,
  en,
};

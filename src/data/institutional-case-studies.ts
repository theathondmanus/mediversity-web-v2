export type CaseStudyLocale = "zh-CN" | "en";

export type CaseMetricIcon =
  | "users"
  | "layers"
  | "workflow"
  | "book-open"
  | "languages"
  | "stethoscope";

export interface CaseStudyMetric {
  icon: CaseMetricIcon;
  value: string;
  label: string;
  subtext?: string;
}

export interface CaseStudySolutionPoint {
  title: string;
  description: string;
}

export interface CaseStudyModule {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface CaseStudyStep {
  title: string;
  description: string;
}

export interface CaseStudyGalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** Image fitting: photos default to cover; slide/diagram images should use contain. */
  fit?: "cover" | "contain";
}

export interface InstitutionalCaseStudy {
  slug: string;
  category: string;
  clientName: string;
  projectName: string;
  headline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  homeTitle: string;
  homeDescription: string;
  homeHighlight: string;
  homeHighlightLabel: string;
  metrics: CaseStudyMetric[];
  contextTitle: string;
  context: string[];
  challengeTitle: string;
  challenge: string[];
  solutionTitle: string;
  solutionIntro: string;
  solutionPoints?: CaseStudySolutionPoint[];
  modules?: CaseStudyModule[];
  methodTitle: string;
  methodIntro: string;
  methodSteps: CaseStudyStep[];
  practiceTitle: string;
  practice: string[];
  gallery: CaseStudyGalleryImage[];
  outcomesTitle: string;
  outcomes: string[];
  conclusionTitle: string;
  conclusion: string[];
  ctaTitle: string;
  ctaDescription: string;
}

const CASE_STUDIES: Record<
  string,
  Record<CaseStudyLocale, InstitutionalCaseStudy>
> = {
  "shenzhen-childrens-hospital-volunteer-training": {
    "zh-CN": {
      slug: "shenzhen-childrens-hospital-volunteer-training",
      category: "实名案例",
      clientName: "深圳市儿童医院",
      projectName: "深圳市儿童医院｜医疗卫生外语翻译志愿者专项培训",
      headline: "从需求到交付：两周完成深圳市儿童医院定制化专项培训",
      summary:
        "2026 年 10 月，Mediversity Global（MVG）为深圳市儿童医院提供医疗卫生外语翻译志愿者专项培训。面对紧凑的项目周期及专业化的培训要求，MVG 在约两周内完成了从初步接洽、需求分析、课程定制、方案优化、师资协调与教学准备到正式授课的全过程。",
      heroImage: "/images/case-studies/shenzhen-childrens-hospital-hero.webp",
      heroAlt: "深圳市儿童医院医疗卫生外语翻译志愿者专项培训现场",
      homeTitle: "从需求到交付：两周完成定制化专项培训",
      homeDescription:
        "面对紧凑的项目周期与专业化的培训要求，Mediversity 围绕儿科诊疗中的跨语言沟通需求，设计了融合医疗口译、临床沟通与跨文化交流的实践型课程。",
      homeHighlight:
        "围绕院方目标与儿科沟通场景，两周内完成需求分析、课程定制与师资协调，并按计划交付。",
      homeHighlightLabel: "交付重点",
      metrics: [
        { icon: "workflow", value: "约 2 周", label: "从接洽到授课" },
        { icon: "layers", value: "17 个", label: "涉及科室与部门" },
        { icon: "book-open", value: "4 个", label: "课程教学环节" },
        { icon: "users", value: "2026.10", label: "项目时间" },
      ],
      contextTitle: "从接洽到授课，约两周完成全流程",
      context: [
        "2026 年 10 月，Mediversity Global（MVG）为深圳市儿童医院提供医疗卫生外语翻译志愿者专项培训。面对紧凑的项目周期及专业化的培训要求，MVG 在约两周内完成了从初步接洽、需求分析、课程定制、方案优化、师资协调与教学准备到正式授课的全过程。",
        "本次培训围绕儿科诊疗中的跨语言沟通需求，结合院方的培训目标、医生专业背景及实际应用场景，设计了融合医疗口译、临床沟通和跨文化交流的实践型课程。",
        "项目按计划完成，并获得积极的客户反馈，体现了 MVG 在快速响应、灵活定制、专业师资协调和高效项目交付方面的综合能力。",
      ],
      challengeTitle: "如何在有限时间内满足专业化培训需求？",
      challenge: [
        "深圳市儿童医院希望通过专项培训，帮助院内医生更好地应对涉及不同语言和文化背景的医疗沟通场景。本次培训具有三个突出特点。",
        "准备时间紧凑。从初步沟通到课程交付，仅有约两周时间，需要高效完成需求确认、课程开发、师资协调及授课准备。",
        "培训需求具有专业针对性。儿科临床沟通不仅要求准确传递医学信息，还需兼顾患儿、家长和医务人员之间的互动，以及跨文化背景下的沟通方式。",
        "学员背景多样。培训学员名单涉及 17 个科室及部门，需要在有限的授课时间内兼顾不同专业背景，并围绕共同的学习目标设计实用的教学活动。",
        "项目的关键并非简单地在短时间内安排一场培训，而是如何快速理解医院的实际需求，将培训目标转化为专业、实用且能够按时交付的课程方案。",
      ],
      solutionTitle: "以客户需求为导向的灵活交付",
      solutionIntro:
        "MVG 没有简单套用标准课程，而是围绕院方的培训目标、学员背景与实际应用场景，分四步推进课程设计与交付。",
      solutionPoints: [
        {
          title: "快速响应，精准理解培训需求",
          description:
            "MVG 迅速与院方建立沟通，了解项目背景、培训对象、时间安排及预期学习目标。通过需求梳理，团队明确了课程重点，并将医院的培训要求转化为具体的学习内容与教学任务。",
        },
        {
          title: "灵活定制，打造贴近临床的课程方案",
          description:
            "以典型儿科诊疗场景为基础设计专项教学内容，涵盖接诊沟通、医学信息准确传递、跨文化交流以及综合情境演练，强调语言能力与临床应用场景的结合。课程方案在准备过程中根据院方反馈进一步调整。",
        },
        {
          title: "协调经验丰富的师资，确保教学目标有效落实",
          description:
            "依托具有相关教学经验的师资资源，MVG 在有限时间内完成授课教师的协调与教学准备，将培训目标、学员特点、课程重点和预期学习成果转化为明确的教学要求。",
        },
        {
          title: "高效组织交付，强化实践应用",
          description:
            "培训采用讲解示范、互动练习及模拟情境相结合的方式，将语言知识与实际临床沟通任务融入课堂。团队同时统筹课件、教学指引、临床案例及互动练习材料，为课程顺利交付提供支持。",
        },
      ],
      methodTitle: "以真实临床场景为基础",
      methodIntro: "课程围绕四个相互衔接的教学环节展开。",
      methodSteps: [
        {
          title: "接诊与沟通开场",
          description:
            "介绍身份、确认信息、识别语言需求，并与患儿及家长建立有效沟通。",
        },
        {
          title: "准确的医疗口译",
          description:
            "关注医学信息的准确传递，练习关键表达、信息确认与澄清技巧。",
        },
        {
          title: "跨文化医患沟通",
          description:
            "理解不同文化背景下的沟通差异，练习回应家长关切及解释医疗流程。",
        },
        {
          title: "综合情境演练",
          description:
            "通过模拟儿科就诊，将语言表达、临床沟通和口译技巧融入完整的实践任务。",
        },
      ],
      practiceTitle: "",
      practice: [],
      gallery: [
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-journey.webp",
          alt: "课程「今日学习路径」课件页面：接诊开场、医疗口译、跨文化沟通与综合演练",
          caption: "围绕院方活动目标与儿科沟通场景组织课程内容。",
          fit: "contain",
        },
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-audience.webp",
          alt: "来自 17 个科室和部门的学员参加专项培训",
          caption: "来自 17 个科室和部门的学员，按同一套沟通任务开展练习。",
        },
      ],
      outcomesTitle: "项目交付与反馈",
      outcomes: [
        "从初步需求对接到正式授课，MVG 在约两周内完成了项目的关键准备与交付工作。",
        "在整个过程中，团队根据医院的培训目标和时间要求，灵活协调课程设计、教学资源及实施安排，并通过持续沟通推动方案完善。专项培训按计划顺利完成，项目获得了积极的客户反馈。",
        "这一项目不仅体现了 MVG 的快速响应与组织协调能力，也展示了其在紧凑时间安排下，将专业教育资源与客户个性化需求有效结合的服务能力。",
      ],
      conclusionTitle: "灵活响应与专业交付并重",
      conclusion: [
        "医疗机构的培训需求往往具有明确的专业背景、应用场景和实施要求。优质的教育合作不仅依赖成熟的课程内容，更需要合作伙伴能够快速理解需求、灵活调整方案、协调专业资源，并确保培训顺利实施。",
        "深圳市儿童医院项目体现了 MVG 的四项核心优势：快速响应，及时理解客户需求并高效推进项目准备与实施；灵活定制，围绕机构目标、学员背景及实际场景设计有针对性的课程；专业师资，依托经验丰富的教师资源快速完成教学准备及目标对齐；高效交付，将培训需求转化为实践导向的教学方案并在约定时间内完成交付。",
        "MVG 致力于将专业医学教育能力与灵活高效的项目交付相结合，为医疗机构提供更具针对性、适应性和实践价值的培训服务。",
      ],
      ctaTitle: "为您的医疗团队定制培训方案",
      ctaDescription:
        "无论是短期专项培训、科室定制工作坊，还是系统化医学英语与临床沟通能力提升项目，Mediversity Global 均可根据机构目标、专业背景及实际应用需求提供灵活的教育支持。",
    },
    en: {
      slug: "shenzhen-childrens-hospital-volunteer-training",
      category: "Institutional Case Study",
      clientName: "Shenzhen Children's Hospital",
      projectName:
        "Shenzhen Children's Hospital | Healthcare Translation Volunteer Training",
      headline:
        "From Brief to Delivery: Tailored Healthcare Training in Two Weeks",
      summary:
        "In October 2026, Mediversity Global (MVG) delivered a healthcare translation volunteer training programme for Shenzhen Children's Hospital. Working to a demanding schedule, MVG completed the full process — from initial engagement, needs analysis and curriculum development to proposal refinement, educator coordination, teaching preparation and delivery — in approximately two weeks.",
      heroImage: "/images/case-studies/shenzhen-childrens-hospital-hero.webp",
      heroAlt:
        "Healthcare translation volunteer training delivered at Shenzhen Children's Hospital",
      homeTitle: "From brief to delivery in two weeks",
      homeDescription:
        "Working to a demanding schedule and a specialist brief, Mediversity designed a practical programme combining medical interpreting, clinical communication and cross-cultural awareness around the communication demands of paediatric care.",
      homeHighlight:
        "Needs analysis, curriculum development and educator coordination completed within two weeks, with delivery on schedule.",
      homeHighlightLabel: "Delivery focus",
      metrics: [
        { icon: "workflow", value: "~2 weeks", label: "Engagement to delivery" },
        { icon: "layers", value: "17", label: "Departments & units" },
        { icon: "book-open", value: "4", label: "Learning components" },
        { icon: "users", value: "Oct 2026", label: "Project date" },
      ],
      contextTitle: "The full process in approximately two weeks",
      context: [
        "In October 2026, Mediversity Global (MVG) delivered a healthcare translation volunteer training programme for Shenzhen Children's Hospital. Working to a demanding schedule, MVG completed the full preparation process — from initial engagement, needs analysis and curriculum development to proposal refinement, educator coordination, teaching preparation and delivery — in approximately two weeks.",
        "The programme was designed around the communication challenges of paediatric healthcare, combining medical interpreting, clinical communication and cross-cultural awareness through practical, scenario-based teaching that reflected the hospital's objectives, the doctors' professional backgrounds and their day-to-day practice.",
        "Delivered as planned and supported by positive client feedback, the project demonstrates MVG's ability to respond rapidly to institutional requirements while maintaining a tailored, professionally focused approach.",
      ],
      challengeTitle:
        "Meeting a specialist training need within a limited timeframe",
      challenge: [
        "Shenzhen Children's Hospital wanted a focused programme to help its doctors manage medical communication involving different languages and cultural backgrounds. Three features defined the brief.",
        "A tight preparation window. Approximately two weeks separated initial discussions from delivery, requiring needs confirmation, curriculum development, educator coordination and teaching preparation to be completed efficiently.",
        "A specialist clinical focus. Paediatric communication requires accurate transfer of medical information while also attending to the interaction between children, parents and clinicians, including communication across cultural backgrounds.",
        "A diverse participant group. The participant list spanned 17 departments and units, so the programme had to address different professional backgrounds within a limited teaching window while staying focused on shared learning objectives.",
        "The task was not simply to arrange a session at short notice, but to understand the hospital's requirements quickly and translate its training objectives into a professional, practical programme that could be delivered on time.",
      ],
      solutionTitle: "Needs-led design and flexible delivery",
      solutionIntro:
        "Rather than adopting a standard course unchanged, MVG worked through four steps built around the hospital's objectives, participant profiles and practical setting.",
      solutionPoints: [
        {
          title: "Respond rapidly and understand the brief",
          description:
            "MVG engaged promptly with the hospital to establish the project background, participants, schedule and expected learning outcomes. This needs analysis clarified the course focus and translated the hospital's requirements into specific learning content and teaching tasks.",
        },
        {
          title: "Design a curriculum grounded in clinical practice",
          description:
            "Teaching content was built around typical paediatric consultation scenarios, covering the consultation opening, accurate transfer of medical information, cross-cultural interaction and integrated simulation. The curriculum was refined in response to the hospital's feedback throughout preparation.",
        },
        {
          title: "Coordinate experienced educators",
          description:
            "Drawing on experienced teaching resources, MVG coordinated educator availability and preparation within the timeframe, converting the hospital's objectives, participant profiles, course priorities and expected outcomes into clear teaching requirements.",
        },
        {
          title: "Deliver efficiently with applied practice",
          description:
            "Delivery combined demonstrations, interactive practice and simulation, bringing language work directly into clinical communication tasks. The team also coordinated slides, teaching guidance, clinical cases and role-play materials to support delivery.",
        },
      ],
      methodTitle: "Built around authentic clinical scenarios",
      methodIntro: "The programme was organised into four connected learning components.",
      methodSteps: [
        {
          title: "Consultation opening and communication",
          description:
            "Introducing professional roles, confirming information, identifying language needs and establishing effective communication with children and their families.",
        },
        {
          title: "Accurate medical interpreting",
          description:
            "Focusing on the accurate transfer of medical information, with practice in key expressions, confirmation and clarification techniques.",
        },
        {
          title: "Cross-cultural clinical communication",
          description:
            "Recognising differences in communication expectations across cultural backgrounds, responding to parental concerns and explaining clinical processes.",
        },
        {
          title: "Integrated clinical simulation",
          description:
            "Bringing language, clinical communication and interpreting skills together in a complete practical task through simulated paediatric consultations.",
        },
      ],
      practiceTitle: "",
      practice: [],
      gallery: [
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-journey.webp",
          alt: "Course slide showing the day's learning journey: consultation opening, medical interpreting, cross-cultural communication and integrated simulation",
          caption: "Course content organised around the hospital's objectives and paediatric communication settings.",
          fit: "contain",
        },
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-audience.webp",
          alt: "Participants from 17 departments and units attending the training",
          caption: "Participants from 17 departments and units practising the same communication tasks.",
        },
      ],
      outcomesTitle: "Delivery and client feedback",
      outcomes: [
        "From initial needs discussion to delivery, MVG completed the essential stages of the project within approximately two weeks.",
        "Throughout the process, the team coordinated curriculum design, teaching resources and implementation arrangements around the hospital's objectives and timeline, refining the programme through ongoing communication. The training was delivered as planned and received positive client feedback.",
        "The project illustrates both MVG's responsiveness and organisational capability, and its ability to combine specialist educational resources with a client's individual requirements under a demanding schedule.",
      ],
      conclusionTitle: "Responsiveness and professional delivery together",
      conclusion: [
        "Healthcare institutions bring clear professional contexts, application settings and delivery requirements to their training needs. Strong educational partnerships depend not only on mature course content, but on a partner able to understand requirements quickly, adapt the approach, coordinate specialist resources and ensure the training is delivered successfully.",
        "The Shenzhen Children's Hospital project reflects four of MVG's core strengths: rapid response, understanding client needs promptly and progressing efficiently; flexible tailoring, designing focused courses around institutional objectives, participant backgrounds and real scenarios; experienced educators, drawing on established teaching resources to complete preparation and alignment quickly; and effective delivery, converting training requirements into practice-oriented teaching completed within the agreed timeframe.",
        "MVG combines specialist medical education capability with flexible, efficient project delivery to provide healthcare institutions with training that is more targeted, adaptable and practically valuable.",
      ],
      ctaTitle: "Tailored training for your healthcare team",
      ctaDescription:
        "From short focused programmes and department-level workshops to structured medical English and clinical communication development, Mediversity Global designs education around institutional objectives, professional backgrounds and practical requirements.",
    },
  },
  "shenzhen-international-medical-english": {
    "zh-CN": {
      slug: "shenzhen-international-medical-english",
      category: "实名案例",
      clientName: "深圳市卫生健康能力建设和继续教育中心",
      projectName: "国际化医疗服务英语能力提升项目",
      headline: "从“学习医学英语”到“完成国际医疗沟通任务”",
      summary:
        "2026 年 7 月，深圳市卫生健康能力建设和继续教育中心组织开展国际化医疗服务英语能力提升项目。第一阶段完成 5 个培训班次，覆盖 120 余名医务人员，重点围绕医学英语书写与医患口译沟通展开。",
      heroImage: "/images/case-studies/shenzhen-medical-english-hero.webp",
      heroAlt: "深圳国际化医疗服务英语培训中的师生互动",
      homeTitle: "5 个班次，覆盖 120+ 医务人员",
      homeDescription:
        "课程从真实岗位任务出发，将医学信息的理解、记录、转述与沟通串联为完整能力链，让医学英语从课堂走向医疗实践。",
      homeHighlight: "让医学英语从课堂走向医疗实践。",
      homeHighlightLabel: "项目设计目标",
      metrics: [
        { icon: "layers", value: "5", label: "培训班次" },
        { icon: "users", value: "120+", label: "医务人员" },
        { icon: "book-open", value: "2", label: "核心模块" },
        { icon: "workflow", value: "4", label: "教学环节" },
      ],
      contextTitle: "客户背景",
      context: [
        "深圳市卫生健康能力建设和继续教育中心是深圳市卫生健康委员会下属专业机构，承担卫生健康人才能力提升与继续教育相关工作。",
        "随着国际患者服务、国际医学交流及跨语言医疗协作不断增加，医务人员所需要的英语能力已不再局限于掌握医学词汇和专业表达。他们需要理解患者主诉、病史、检查结果和诊疗计划，完成规范的英文记录，并跨越语言和文化差异，将医学信息清晰传递给患者。",
      ],
      challengeTitle: "项目挑战",
      challenge: [
        "国际医疗沟通同时涉及语言能力、医学信息处理与患者沟通。医务人员既要准确提取信息并按临床逻辑记录，也需要在中英文之间完成信息转换，在保证专业内容不失真的同时，让患者能够理解。",
        "项目还涉及多个培训班次，课程必须在专业性和实用性之外建立相对统一的内容与实施方式，以保持不同班次之间的交付质量。",
      ],
      solutionTitle: "两项相互衔接的核心课程",
      solutionIntro:
        "Mediversity 围绕医学信息的理解—记录—转述—沟通，设计了两项相互衔接的课程模块，形成从信息处理到患者沟通的完整能力链条。",
      modules: [
        {
          title: "医学英语书写",
          description:
            "帮助学员按照临床逻辑组织信息，并使用规范、准确的英文完成医学记录。",
          image: "/images/case-studies/shenzhen-treatment-plan.webp",
          imageAlt: "医学英语书写与治疗计划课程现场",
          points: [
            "患者主诉、现病史与既往史",
            "查体及辅助检查结果",
            "诊断与治疗计划",
          ],
        },
        {
          title: "医患口译与沟通",
          description:
            "训练医学信息的提取、整理和双语转述，在准确完整的基础上兼顾患者理解。",
          image: "/images/case-studies/shenzhen-case-presentation.webp",
          imageAlt: "医患沟通病例汇报与小组复盘现场",
          points: [
            "提取并整理关键信息",
            "保持医学信息准确完整",
            "根据沟通对象调整表达方式",
          ],
        },
      ],
      methodTitle: "从知识输入到岗位应用",
      methodIntro:
        "课程围绕患者接诊、病史采集、医学记录、医患口译及病例总结等工作场景，将语言知识放入真实任务中使用。",
      methodSteps: [
        { title: "知识输入", description: "建立完成任务所需的语言与医学信息框架。" },
        { title: "教师示范", description: "展示如何提取、组织和表达临床信息。" },
        { title: "任务练习", description: "通过角色练习与综合病例完成实际沟通任务。" },
        { title: "反馈改进", description: "针对准确性、完整性和专业性提供反馈。" },
      ],
      practiceTitle: "教学实施",
      practice: [
        "学员在分组讨论、角色练习和综合病例任务中提取关键信息、组织英文表达、完成双语转述，并与同伴协作完成练习。",
        "这种设计使医学英语不再以孤立的词汇和句型出现，而是成为完成具体医疗沟通任务的工具。",
      ],
      gallery: [
        {
          src: "/images/case-studies/shenzhen-group-brainstorming.webp",
          alt: "深圳医学英语培训小组讨论",
          caption: "小组围绕病例信息进行提取、整理与表达设计。",
        },
        {
          src: "/images/case-studies/shenzhen-facilitated-discussion.webp",
          alt: "教师引导学员进行病例讨论",
          caption: "教师根据任务表现进行现场引导与反馈。",
        },
        {
          src: "/images/case-studies/shenzhen-case-presentation.webp",
          alt: "学员进行英文病例汇报",
          caption: "通过病例汇报和同伴观察完成综合实践。",
        },
      ],
      outcomesTitle: "第一阶段成果",
      outcomes: [
        "截至 2026 年 7 月底，第一阶段完成 5 个培训班次，覆盖 120 余名医务人员，并完成医学英语书写与医患口译两大核心模块。",
        "多班次培训的顺利实施验证了课程在规模化培训场景下的可实施性，也为后续课程优化和持续性培训积累了实践经验。",
        "课程的专业性、实用性和互动性获得了项目方及参训学员的积极反馈。",
      ],
      conclusionTitle: "从语言知识到岗位应用",
      conclusion: [
        "本项目探索的不只是如何教授医学英语，而是如何将英语学习与医务人员需要完成的实际工作任务连接起来。",
        "课程从医疗场景和沟通任务出发，再确定学员需要掌握的语言、表达方式和实践活动，使培训目标从“掌握医学英语”进一步转向“使用英语完成真实医疗场景中的专业沟通任务”。",
        "2026 年内，Mediversity 将继续配合中心开展相关培训，通过分阶段实施与持续优化，使课程进一步贴合医务人员的岗位需求。",
      ],
      ctaTitle: "为机构设计可落地的医学英语培训",
      ctaDescription:
        "根据岗位、专业背景和应用场景定制单次专题、多班次集中培训或系列化能力提升项目。",
    },
    en: {
      slug: "shenzhen-international-medical-english",
      category: "Institutional Case Study",
      clientName: "Shenzhen Health Capacity Building and Continuing Education Centre",
      projectName: "International Healthcare Service English Capability Programme",
      headline: "From Learning Medical English to Completing Real Healthcare Communication Tasks",
      summary:
        "In July 2026, the Shenzhen Health Capacity Building and Continuing Education Centre launched an international healthcare service English capability programme. The first phase delivered five cohorts for more than 120 healthcare professionals, focusing on medical English writing and patient-facing interpretation and communication.",
      heroImage: "/images/case-studies/shenzhen-medical-english-hero.webp",
      heroAlt: "Interactive international healthcare English training in Shenzhen",
      homeTitle: "5 Cohorts, 120+ Healthcare Professionals",
      homeDescription:
        "Built around real workplace tasks, the programme connected understanding, documentation, interpretation and patient communication into one applied capability pathway.",
      homeHighlight: "Moving medical English from the classroom into healthcare practice.",
      homeHighlightLabel: "Programme Design Goal",
      metrics: [
        { icon: "layers", value: "5", label: "Training Cohorts" },
        { icon: "users", value: "120+", label: "Professionals" },
        { icon: "book-open", value: "2", label: "Core Modules" },
        { icon: "workflow", value: "4", label: "Learning Stages" },
      ],
      contextTitle: "Client Context",
      context: [
        "The Shenzhen Health Capacity Building and Continuing Education Centre is a professional institution affiliated with the Shenzhen Municipal Health Commission, with responsibility for healthcare workforce development and continuing education.",
        "As international patient services, medical exchange and cross-language collaboration continue to grow, healthcare professionals need more than terminology. They must understand patient complaints, histories, investigations and treatment plans, produce clear English documentation, and communicate medical information across linguistic and cultural differences.",
      ],
      challengeTitle: "The Challenge",
      challenge: [
        "International healthcare communication combines language, clinical information processing and patient communication. Professionals must extract information accurately, document it according to clinical logic, and move between Chinese and English without losing meaning while keeping explanations understandable for patients.",
        "With multiple cohorts involved, the programme also needed a consistent teaching structure that could preserve professional relevance and delivery quality at scale.",
      ],
      solutionTitle: "Two Connected Core Modules",
      solutionIntro:
        "Mediversity designed two linked modules around the progression from understanding and documentation to bilingual transfer and patient communication.",
      modules: [
        {
          title: "Medical English Writing",
          description:
            "Helping participants organise information through clinical logic and produce accurate, professional documentation in English.",
          image: "/images/case-studies/shenzhen-treatment-plan.webp",
          imageAlt: "Medical English writing and treatment planning session",
          points: [
            "Presenting complaint and medical history",
            "Examination and investigation findings",
            "Diagnosis and treatment planning",
          ],
        },
        {
          title: "Patient Interpretation & Communication",
          description:
            "Developing accurate bilingual transfer while adapting professional information to the patient’s level of understanding.",
          image: "/images/case-studies/shenzhen-case-presentation.webp",
          imageAlt: "Case presentation and patient communication practice",
          points: [
            "Extract and organise key information",
            "Preserve clinical accuracy and completeness",
            "Adapt language to the communication audience",
          ],
        },
      ],
      methodTitle: "From Input to Workplace Application",
      methodIntro:
        "Learning activities were organised around patient reception, history-taking, documentation, interpretation and case summarisation, placing language inside real professional tasks.",
      methodSteps: [
        { title: "Knowledge Input", description: "Build the language and information framework needed for the task." },
        { title: "Tutor Demonstration", description: "Model how to extract, organise and express clinical information." },
        { title: "Task Practice", description: "Complete applied communication through role-play and integrated cases." },
        { title: "Feedback & Refinement", description: "Improve accuracy, completeness and professional expression." },
      ],
      practiceTitle: "Programme Delivery",
      practice: [
        "Through group discussion, role-play and integrated case tasks, participants extracted key information, organised English responses, completed bilingual transfer and collaborated with peers.",
        "Medical English therefore appeared not as isolated vocabulary and sentence patterns, but as a practical tool for completing healthcare communication tasks.",
      ],
      gallery: [
        {
          src: "/images/case-studies/shenzhen-group-brainstorming.webp",
          alt: "Group discussion during Shenzhen medical English training",
          caption: "Participants extract, organise and plan the communication of case information.",
        },
        {
          src: "/images/case-studies/shenzhen-facilitated-discussion.webp",
          alt: "Tutor facilitating a case discussion",
          caption: "Tutors provide live guidance and feedback based on task performance.",
        },
        {
          src: "/images/case-studies/shenzhen-case-presentation.webp",
          alt: "Participants presenting an English clinical case",
          caption: "Case presentation and peer observation bring the task cycle together.",
        },
      ],
      outcomesTitle: "First-Phase Outcomes",
      outcomes: [
        "By the end of July 2026, the first phase had delivered five cohorts for more than 120 healthcare professionals across two core modules: medical English writing and patient interpretation and communication.",
        "Successful delivery across multiple cohorts demonstrated that the course structure could be implemented at scale and created a practical foundation for continued refinement and future programmes.",
        "The programme’s professional relevance, practical focus and interactive delivery received positive feedback from the project team and participants.",
      ],
      conclusionTitle: "From Language Knowledge to Professional Application",
      conclusion: [
        "This project explored not only how to teach medical English, but how to connect language development with the real tasks healthcare professionals are expected to complete.",
        "Starting from clinical settings and communication tasks allowed the programme to define the language, expressions and practice activities required — moving the objective from knowing medical English to using English for professional communication in real healthcare settings.",
        "Throughout 2026, Mediversity will continue supporting the Centre through phased delivery and ongoing refinement to keep the programme aligned with workplace needs.",
      ],
      ctaTitle: "Build Medical English Training Around Real Institutional Needs",
      ctaDescription:
        "We design focused workshops, multi-cohort delivery and structured capability programmes around roles, specialties and real application settings.",
    },
  },
  "zhejiang-opqrst-course-design": {
    "zh-CN": {
      slug: "zhejiang-opqrst-course-design",
      category: "实名案例",
      clientName: "浙江省健康人才发展协会",
      projectName: "海外临床交流医学英语课程设计案例",
      headline: "从真实需求出发，设计真正用得上的医学英语课程",
      summary:
        "面向拟赴英国、美国等国家和地区参加临床观摩与交流的多专业医生，Mediversity 以“描述疼痛”为共同临床任务，用 OPQRST 框架把临床思维转化为可理解、可练习、可应用的英语沟通路径。",
      heroImage: "/images/case-studies/zhejiang-pain-assessment-hero.webp",
      heroAlt: "浙江海外临床交流医学英语课程中的 OPQRST 疼痛评估教学",
      homeTitle: "从 OPQRST 到临床表达",
      homeDescription:
        "课程不是从已有内容中挑选知识点，而是沿着“需求—场景—任务—设计—实践”反向设计学习体验。",
      homeHighlight: "不是从已有课程中选择内容，而是从客户需要解决的问题出发。",
      homeHighlightLabel: "课程设计原则",
      metrics: [
        { icon: "stethoscope", value: "OPQRST", label: "临床评估框架" },
        { icon: "workflow", value: "5", label: "设计步骤" },
        { icon: "layers", value: "2", label: "模拟病例" },
        { icon: "users", value: "3", label: "轮换角色" },
      ],
      contextTitle: "项目背景",
      context: [
        "浙江省健康人才发展协会面向拟赴英国、美国等国家和地区参加临床观摩与交流的医生开展行前培训，参训人员来自骨科、内科、外科、妇产科等多个专业。Mediversity Global 受邀进行医学英语专题授课。",
        "面对不同专业背景、即将进入海外临床交流场景的学员，课程设计首先回答的不是“可以讲什么”，而是什么内容既能回应培训目标，又具有跨专业临床价值，并帮助学员真正理解和使用医学英语。",
      ],
      challengeTitle: "选择一个跨专业、可实践的临床任务",
      challenge: [
        "不同专科医生拥有不同知识背景，但疼痛评估是多个临床专科都会涉及的常见任务。以共同临床任务为切入口，可以减少专业差异带来的学习壁垒。",
        "疼痛描述也不是一组需要记忆的词汇。有效评估需要按照清晰的临床逻辑进行问诊、追问、理解和信息判断，因此适合成为连接临床思维与英语学习的桥梁。",
      ],
      solutionTitle: "把临床逻辑转化为语言学习路径",
      solutionIntro:
        "课程采用 OPQRST 结构化疼痛评估框架，从疼痛发生、诱发与缓解因素、性质、部位与放射、严重程度和时间特征等维度组织问诊。",
      methodTitle: "需求—场景—任务—设计—实践",
      methodIntro:
        "“描述疼痛”是这套方法的一次应用。核心不是从已有课程中选择内容，而是从客户需要解决的问题出发，反向设计学习体验。",
      methodSteps: [
        { title: "需求", description: "理解客户希望解决的问题、培训对象与目标能力。" },
        { title: "场景", description: "明确学员未来使用能力的医疗与国际交流环境。" },
        { title: "任务", description: "识别与应用场景相关的关键临床工作任务。" },
        { title: "设计", description: "把任务转化为临床框架、语言内容、病例和活动。" },
        { title: "实践", description: "通过模拟病例、角色练习和反馈使用能力。" },
      ],
      practiceTitle: "从语言学习走向模拟临床实践",
      practice: [
        "围绕结构化疼痛评估，课程把临床思维转化为相互关联的沟通任务：英文问诊与追问、理解患者描述、识别关键信息，以及组织并表达临床信息。",
        "Mediversity 设计了两个具有不同症状表现的模拟患者案例。学员分别承担医生、患者和观察员／汇报者角色，通过框架讲解、教师示范、病例分析、角色练习和病例汇报完成实践。",
      ],
      gallery: [
        {
          src: "/images/case-studies/zhejiang-pain-language-framework.webp",
          alt: "常见疼痛描述医学英语教学",
          caption: "从常见疼痛描述入手，建立临床表达与患者回应之间的联系。",
        },
        {
          src: "/images/case-studies/zhejiang-pain-assessment-hero.webp",
          alt: "使用 OPQRST 框架讲解疼痛评估",
          caption: "用结构化临床框架组织英文问诊与追问。",
        },
        {
          src: "/images/case-studies/zhejiang-opqrst-practice.webp",
          alt: "学员分组完成 OPQRST 模拟病例练习",
          caption: "学员在医生、患者和观察员／汇报者角色间轮换实践。",
        },
      ],
      outcomesTitle: "一个主题背后的可迁移方法",
      outcomes: [
        "学员学习的不只是如何用英语描述疼痛，而是如何借助清晰的临床框架，使用英语完成有逻辑的疼痛评估与沟通过程。",
        "同样的方法可以根据机构目标、学员背景和应用场景，延展到症状描述、英文病史采集、查房与病例汇报、检查结果解释、诊疗方案沟通、国际临床团队交流和跨文化医患沟通。",
      ],
      conclusionTitle: "让医学英语真正服务于医疗实践",
      conclusion: [
        "课程设计从真实需求出发，将医疗任务转化为结构清晰、具有实践性的学习体验。",
        "当临床框架、语言目标、病例与活动围绕同一任务组织起来，医学英语就不再是独立知识，而成为支持专业沟通与国际临床交流的工具。",
      ],
      ctaTitle: "从真实需求反向设计学习体验",
      ctaDescription:
        "我们根据机构培训目标、学员特点和实际应用场景，把真实医疗任务转化为可理解、可练习、可应用的课程。",
    },
    en: {
      slug: "zhejiang-opqrst-course-design",
      category: "Institutional Case Study",
      clientName: "Zhejiang Association for Health Talent Development",
      projectName: "Medical English Course Design for Overseas Clinical Exchange",
      headline: "Designing Medical English That Clinicians Can Actually Use",
      summary:
        "For doctors from multiple specialties preparing for clinical observerships and exchange in the UK, the US and other destinations, Mediversity used pain description as a shared clinical task and the OPQRST framework to turn clinical reasoning into a practical English communication pathway.",
      heroImage: "/images/case-studies/zhejiang-pain-assessment-hero.webp",
      heroAlt: "OPQRST pain assessment teaching for overseas clinical exchange",
      homeTitle: "From OPQRST to Clinical Communication",
      homeDescription:
        "Rather than selecting content from an existing course, the learning experience was reverse-designed through needs, setting, task, design and practice.",
      homeHighlight: "Start with the client’s problem — not with a pre-existing course catalogue.",
      homeHighlightLabel: "Course Design Principle",
      metrics: [
        { icon: "stethoscope", value: "OPQRST", label: "Clinical Framework" },
        { icon: "workflow", value: "5", label: "Design Steps" },
        { icon: "layers", value: "2", label: "Simulated Cases" },
        { icon: "users", value: "3", label: "Rotating Roles" },
      ],
      contextTitle: "Programme Context",
      context: [
        "The Zhejiang Association for Health Talent Development provides pre-departure training for doctors preparing to join clinical observerships and exchanges in the UK, the US and other destinations. Participants represented orthopaedics, internal medicine, surgery, obstetrics and gynaecology, and other specialties. Mediversity Global was invited to deliver a focused medical English session.",
        "With a multi-specialty cohort preparing for overseas clinical settings, the starting question was not ‘what can we teach?’ but what content could address the client’s goal, offer cross-specialty clinical value, and help doctors understand and use medical English in practice.",
      ],
      challengeTitle: "Selecting a Cross-Specialty Clinical Task",
      challenge: [
        "Doctors brought different specialty backgrounds, but pain assessment is common across many areas of clinical practice. A shared clinical task reduced barriers created by specialist differences and allowed participants to connect learning with their own experience.",
        "Pain description is also more than vocabulary. Effective assessment requires structured questioning, follow-up, interpretation and judgement, making it a useful bridge between clinical reasoning and English communication.",
      ],
      solutionTitle: "Turning Clinical Logic into a Language Pathway",
      solutionIntro:
        "The course used the OPQRST pain assessment framework to organise questions around onset, provoking and relieving factors, quality, region and radiation, severity, and timing.",
      methodTitle: "Needs — Setting — Task — Design — Practice",
      methodIntro:
        "Describing pain was one application of a broader method: start with the problem the client needs to solve, then reverse-design the learning experience.",
      methodSteps: [
        { title: "Needs", description: "Understand the client’s problem, audience and intended capability." },
        { title: "Setting", description: "Define where participants will use the capability in practice." },
        { title: "Task", description: "Identify the key clinical work participants need to complete." },
        { title: "Design", description: "Translate the task into frameworks, language, cases and activities." },
        { title: "Practice", description: "Use simulated cases, rotating roles and feedback to apply learning." },
      ],
      practiceTitle: "Moving from Language Learning to Simulated Practice",
      practice: [
        "Around structured pain assessment, clinical reasoning became a sequence of connected communication tasks: questioning and follow-up in English, understanding patient descriptions, identifying key information, and organising a professional clinical account.",
        "Mediversity created two simulated patients with different symptom profiles. Participants rotated between doctor, patient and observer/reporter roles through framework explanation, tutor demonstration, case analysis, role-play and case reporting.",
      ],
      gallery: [
        {
          src: "/images/case-studies/zhejiang-pain-language-framework.webp",
          alt: "Teaching common pain descriptors in medical English",
          caption: "Common pain descriptors connect clinical expression with patient responses.",
        },
        {
          src: "/images/case-studies/zhejiang-pain-assessment-hero.webp",
          alt: "Teaching pain assessment through the OPQRST framework",
          caption: "A structured clinical framework organises questioning and follow-up in English.",
        },
        {
          src: "/images/case-studies/zhejiang-opqrst-practice.webp",
          alt: "Participants completing OPQRST simulated case practice",
          caption: "Participants rotate between doctor, patient and observer/reporter roles.",
        },
      ],
      outcomesTitle: "A Transferable Method Behind One Topic",
      outcomes: [
        "Participants learned not only how to describe pain in English, but how to use a clear clinical framework to complete a logical pain assessment and communication process.",
        "The same method can be adapted to symptom description, history-taking, ward rounds and case presentations, explaining results, discussing treatment plans, international team communication, and cross-cultural patient care.",
      ],
      conclusionTitle: "Making Medical English Serve Clinical Practice",
      conclusion: [
        "Starting from real needs turns healthcare tasks into structured, practice-led learning experiences.",
        "When the clinical framework, language objectives, cases and activities all serve the same task, medical English becomes a tool for professional communication and international clinical exchange rather than a separate body of knowledge.",
      ],
      ctaTitle: "Reverse-Design Learning from Real Needs",
      ctaDescription:
        "We translate institutional goals, participant profiles and application settings into medical English courses that are understandable, practicable and usable.",
    },
  },
};

export const INSTITUTIONAL_CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES);

export function getInstitutionalCaseStudy(
  slug: string,
  locale: string,
): InstitutionalCaseStudy | null {
  const entry = CASE_STUDIES[slug];
  if (!entry) return null;
  const resolvedLocale: CaseStudyLocale = locale === "en" ? "en" : "zh-CN";
  return entry[resolvedLocale];
}

export function getInstitutionalCaseStudies(
  locale: string,
): InstitutionalCaseStudy[] {
  return INSTITUTIONAL_CASE_STUDY_SLUGS.map((slug) =>
    getInstitutionalCaseStudy(slug, locale),
  ).filter((item): item is InstitutionalCaseStudy => item !== null);
}

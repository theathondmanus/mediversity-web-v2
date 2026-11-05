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
      projectName: "年底专项活动医疗卫生外语翻译志愿者专项培训",
      headline: "从培训意向确定到正式授课，相隔三天",
      summary:
        "2026 年 10 月，深圳市儿童医院开展医疗卫生外语翻译志愿者专项培训。Mediversity Global（MVG）结合院内医生的专业背景和儿科就诊场景，设计临床沟通与医疗口译课程，并于 10 月 30 日完成培训。培训意向于 10 月 27 日完全确定，与授课日期相隔三天。",
      heroImage: "/images/case-studies/shenzhen-childrens-hospital-hero.webp",
      heroAlt: "深圳市儿童医院医疗卫生外语翻译志愿者专项培训现场",
      homeTitle: "从培训意向确定到正式授课，相隔三天",
      homeDescription:
        "面对紧凑的培训安排，Mediversity 围绕院内医生的专业背景和儿科就诊场景，设计了结合临床沟通、医疗口译与情境练习的专项课程。",
      homeHighlight: "围绕院方需求和儿科沟通场景，快速组织有针对性的课程内容。",
      homeHighlightLabel: "设计重点",
      metrics: [
        { icon: "workflow", value: "3 天", label: "意向确定至授课" },
        { icon: "users", value: "22 人", label: "学员名单人数" },
        { icon: "layers", value: "17 个", label: "涉及科室与部门" },
        { icon: "book-open", value: "4 个", label: "课程环节" },
      ],
      contextTitle: "为年底专项活动培训医疗外语翻译志愿者",
      context: [
        "为配合年底专项活动，深圳市儿童医院面向院内医生开展医疗卫生外语翻译志愿者专项培训。学员名单共 22 人，来自 17 个科室和部门。",
        "培训需要结合儿科诊疗中的跨语言沟通任务，关注医生、患儿、家长及译员之间的信息传递。MVG 根据院方的培训目标和活动安排，组织课程设计与教学准备。",
      ],
      challengeTitle: "在紧凑时间内回应儿科沟通需求",
      challenge: [
        "院方的活动安排明确，课程准备时间紧凑。培训需要贴合医生的专业背景与儿科就诊场景。",
        "医疗信息的准确转述是课程重点。学员还需要练习如何向家长解释检查、回应患儿，以及了解家庭过往的就医经历。课程要把这些要求转化为课堂上的具体任务。",
      ],
      solutionTitle: "将医疗口译与儿科临床沟通结合",
      solutionIntro:
        "Mediversity 围绕接诊、信息传递和家庭沟通，组织了四个相互衔接的课程环节。",
      solutionPoints: [
        {
          title: "接诊开场",
          description:
            "练习介绍身份、确认患儿及陪同者信息、了解沟通语言，并直接与患儿交流。",
        },
        {
          title: "准确的医疗口译",
          description:
            "通过中英双向口译练习，关注时间、数量、否定和不确定程度，并在信息不清楚时请求停顿、重复或澄清。",
        },
        {
          title: "跨文化沟通",
          description:
            "结合家庭不同的就医经历，练习了解家长的主要疑问、解释本次就诊安排，并确认需要进一步核实的事项。",
        },
        {
          title: "综合情境演练",
          description:
            "以模拟患儿就诊为背景，将接诊、问诊、检查说明和口译任务放在同一段沟通中练习。",
        },
      ],
      methodTitle: "从需求确认到课堂交付",
      methodIntro:
        "课程于培训意向确定后启动。三天时间里，我们把准备重心放在需求确认、场景选择和教学资料上，让课程内容从一开始就贴着院方的活动安排。",
      methodSteps: [
        { title: "了解需求", description: "结合院方的活动目标、培训对象和时间安排，明确课程需要回应的医疗外语沟通任务。" },
        { title: "确定场景", description: "围绕儿科接诊以及与患儿、家长沟通的情境，确定课程内容和练习重点。" },
        { title: "准备课程", description: "准备课件、教案、学员手册和角色练习资料，支持课堂讲解与实践。" },
        { title: "开展培训", description: "结合案例和角色练习，将临床表达、准确口译与跨文化沟通放进模拟就诊任务中。" },
      ],
      practiceTitle: "围绕一次模拟儿科就诊开展练习",
      practice: [
        "课程使用虚构患儿案例：一名五岁儿童因发热、咳嗽由母亲陪同就诊。学员分别承担医生、家长和译员等角色，围绕接诊、病史询问与检查说明开展沟通。",
        "课程也通过具体表达训练口译准确性。例如，家长说“我没有注意到孩子呼吸困难”，如果转述为“查体呼吸正常”，信息来源就从家长观察变成了医生的检查结果。传译时需要保留原意，并在必要时澄清或纠正。",
        "在检查说明环节，课程还关注如何向家长解释目的和过程，以及如何用患儿能够理解的语言回应其担忧。",
      ],
      gallery: [
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-talk.webp",
          alt: "深圳市儿童医院专项培训课堂讲解",
          caption: "围绕院方活动目标与儿科沟通场景组织课程内容。",
        },
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-audience.webp",
          alt: "来自 17 个科室和部门的学员参加专项培训",
          caption: "22 名学员来自 17 个科室和部门，按同一套沟通任务开展练习。",
        },
      ],
      outcomesTitle: "围绕院方需求完成专项培训",
      outcomes: [
        "培训于 2026 年 10 月 30 日完成。MVG 根据院内医生的培训需求，准备了课程方案及配套教学资料。",
        "课程覆盖接诊开场、医疗口译、跨文化沟通和综合情境演练，学员在模拟就诊任务中完成了完整沟通链条的练习。",
        "面对紧凑的时间安排，MVG 围绕具体临床任务组织课程内容与练习，完成了专项培训。",
      ],
      conclusionTitle: "快速响应，也重视充分准备",
      conclusion: [
        "不同医疗机构的培训对象、专业背景和应用场景各有不同。课程设计需要先明确沟通任务，再选择相应的语言内容、案例和练习方式。",
        "对于常规合作，Mediversity 建议尽早启动需求沟通，为课程设计、备课和课堂安排预留充足时间，以便更细致地调整内容，照顾课程效果与学员的学习体验。",
      ],
      ctaTitle: "为医疗团队设计有针对性的培训",
      ctaDescription:
        "Mediversity 根据机构的培训目标、学员背景和实际应用场景，设计医学英语、医疗口译与跨文化医疗沟通课程。",
    },
    en: {
      slug: "shenzhen-childrens-hospital-volunteer-training",
      category: "Institutional Case Study",
      clientName: "Shenzhen Children's Hospital",
      projectName:
        "Targeted training for healthcare translation volunteers supporting a year-end initiative",
      headline: "Three days between confirming the training and delivering the session",
      summary:
        "In October 2026, Shenzhen Children's Hospital organised targeted training for healthcare translation volunteers. Mediversity Global (MVG) designed a course in clinical communication and medical interpreting for the hospital's doctors, using paediatric consultations as its setting. The intention to proceed was confirmed on 27 October, and the training took place three days later, on 30 October.",
      heroImage: "/images/case-studies/shenzhen-childrens-hospital-hero.webp",
      heroAlt:
        "Targeted training session for healthcare translation volunteers at Shenzhen Children's Hospital",
      homeTitle: "Three days from confirmation to delivery",
      homeDescription:
        "Working to a tight schedule, Mediversity designed a focused course around the doctors' professional backgrounds and paediatric consultations. The course brought together clinical communication, medical interpreting and scenario-based practice.",
      homeHighlight:
        "Responding to the hospital's needs with course content built around paediatric communication.",
      homeHighlightLabel: "Design focus",
      metrics: [
        { icon: "workflow", value: "3 days", label: "Confirmation to session" },
        { icon: "users", value: "22", label: "Participants" },
        { icon: "layers", value: "17", label: "Departments & units" },
        { icon: "book-open", value: "4", label: "Course components" },
      ],
      contextTitle: "Training volunteers for a year-end initiative",
      context: [
        "The hospital organised the training for its doctors in connection with a year-end initiative. The participant list contained 22 people from 17 hospital departments and units.",
        "The course needed to address communication across languages in paediatric care, including how information passes between doctors, children, parents and interpreters. MVG planned the course and teaching materials around the hospital's objectives and event schedule.",
      ],
      challengeTitle: "Responding to paediatric communication needs on a tight schedule",
      challenge: [
        "The hospital had a clear event schedule and limited preparation time. The course needed to reflect the doctors' professional backgrounds and the setting in which they would communicate.",
        "Accurate interpretation of medical information was a central concern. Participants also needed opportunities to practise explaining examinations to parents, responding to children and asking about a family's previous healthcare experiences. The course translated these needs into specific classroom tasks.",
      ],
      solutionTitle: "Combining medical interpreting with paediatric clinical communication",
      solutionIntro:
        "Mediversity organised the course around four connected components, spanning the consultation opening, information transfer and communication with families.",
      solutionPoints: [
        {
          title: "Starting the consultation",
          description:
            "Practise introductions, confirming the child's and accompanying adult's details, asking about language preferences and speaking directly to the child.",
        },
        {
          title: "Accurate medical interpreting",
          description:
            "Practise interpreting between English and Mandarin, paying attention to time, quantities, negatives and uncertainty. Participants also practise asking for a pause, repetition or clarification when information is unclear.",
        },
        {
          title: "Cross-cultural communication",
          description:
            "Consider different family healthcare experiences, listen to parents' main questions, explain the arrangements for the current visit and identify what still needs to be checked.",
        },
        {
          title: "Integrated role-play",
          description:
            "Bring the tasks together in a simulated paediatric consultation, from the opening and history-taking to explaining an examination and interpreting between speakers.",
        },
      ],
      methodTitle: "From brief to classroom",
      methodIntro:
        "Course preparation began once the intention to proceed was confirmed. Across three days, the team concentrated on the brief, scenario selection and teaching materials so that the content followed the hospital's schedule from the outset.",
      methodSteps: [
        { title: "Understand the brief", description: "Identify the medical communication tasks the course needs to address, taking account of the hospital's objectives, participants and schedule." },
        { title: "Define the scenarios", description: "Select course content and practice tasks around paediatric consultations and communication with children and parents." },
        { title: "Prepare the course", description: "Prepare slides, teaching notes, a participant handbook and role-play materials for classroom use." },
        { title: "Deliver the training", description: "Use cases and role-play to bring clinical expression, accurate interpreting and cross-cultural communication into a simulated consultation." },
      ],
      practiceTitle: "A simulated paediatric consultation",
      practice: [
        "The course uses a fictional case: a five-year-old child is brought to hospital by his mother with a fever and cough. Participants take on roles including doctor, parent and interpreter, and work through the consultation opening, history-taking and examination explanation.",
        "The course also uses specific examples to practise interpreting accurately. If a parent's statement, \u201cI haven't noticed any breathing difficulty\u201d, is interpreted as \u201cBreathing was normal on examination\u201d, the source changes from a parent's observation to a clinical finding. Interpreters need to preserve the original meaning and clarify or correct their interpretation when necessary.",
        "When explaining an examination, the course also considers how to describe its purpose and process to the parent, and how to respond to the child's concerns in language the child can understand.",
      ],
      gallery: [
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-talk.webp",
          alt: "Course delivery during the Shenzhen Children's Hospital training",
          caption: "Course content organised around the hospital's objectives and paediatric communication settings.",
        },
        {
          src: "/images/case-studies/shenzhen-childrens-hospital-audience.webp",
          alt: "Participants from 17 departments and units attending the training",
          caption: "22 participants from 17 departments and units practising the same communication tasks.",
        },
      ],
      outcomesTitle: "Training delivered around the hospital's needs",
      outcomes: [
        "The training was completed on 30 October 2026. MVG prepared the course plan and teaching materials around the doctors' learning needs.",
        "The course covered the consultation opening, medical interpreting, cross-cultural communication and integrated role-play, giving participants practice across the full communication chain in a simulated consultation.",
        "Within a tight schedule, MVG organised the course content and exercises around specific clinical communication tasks and delivered the training.",
      ],
      conclusionTitle: "A quick response and time to prepare",
      conclusion: [
        "Training participants, professional backgrounds and workplace settings differ from one healthcare institution to another. Course design starts by identifying the communication tasks, then selecting the language, cases and activities needed to practise them.",
        "For most projects, Mediversity recommends starting the discussion early and allowing sufficient time for course design, lesson preparation and classroom planning. This gives the team more room to refine the content and support both the quality of the training and the participants' learning experience.",
      ],
      ctaTitle: "Design focused training for your medical team",
      ctaDescription:
        "Mediversity designs courses in medical English, medical interpreting and cross-cultural healthcare communication around an organisation's training goals, participants and working contexts.",
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

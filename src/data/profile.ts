// All site content lives here. Edit this file to update the portfolio; pages read from it.
// Facts come from the owner's brief (2026-10-04) and resume. Never add a phone number or home address.

export const site = {
  url: "https://srs014.github.io",
  name: "Sohan",
  fullName: "Sohanur Rahman Sohan",
  designation: "Power Platform Developer & Solution Builder",
  tagline: "Think deeper. Build smarter.",
  positioning:
    "Sohan is a Power Platform Developer and Solution Builder who designs and builds connected enterprise solutions across business applications, automation, data, and AI.",
  location: "Dhaka, Bangladesh",
  email: "srsohan014@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/srsohan014/",
    linkedinDisplay: "linkedin.com/in/srsohan014",
    github: "https://github.com/SRS014",
    githubDisplay: "github.com/SRS014",
    blog: "https://thefusionplatform.wordpress.com/",
    blogDisplay: "thefusionplatform.wordpress.com",
  },
  languages: ["Bengali (native)", "English (professional)"],
};

export const resumeSummary =
  "Power Platform Developer and Solution Builder with 4+ years of designing and building connected enterprise solutions across business applications, automation, data and AI. Specialises in Power Apps, Power Automate, Power BI, Dataverse and Dynamics 365 Finance and Operations, with a focus on integrating D365 F&O with the Power Platform. Delivered 15+ custom apps and workflows, led a Power Apps team, mentored junior developers and worked closely with business stakeholders. Current focus: Copilot Studio and AI agents.";

export const about = {
  intro: [
    "I'm Sohan, a Power Platform professional in Dhaka with 4+ years of building low-code solutions that take manual work off people's plates, keep operations running smoothly and turn data into decisions.",
    "Most of my work sits where systems meet. I build with Power Apps, Power Automate, Power BI and Dataverse, and I integrate Dynamics 365 Finance and Operations with the Power Platform so data moves securely and reliably between them. I build Power BI dashboards on Dataverse, SQL Server and other sources, and I use Python and SQL to shape data for analysis.",
    "So far I've delivered 15+ custom apps and workflows, led a Power Apps team, mentored junior developers and worked side by side with business stakeholders. Right now I'm spending most of my learning time on Copilot Studio and AI agents.",
  ],
  goal: "I'm working toward becoming a Solution Architect: designing whole solutions, not only building the parts.",
  build: [
    { title: "Business apps", text: "Canvas and model-driven Power Apps for requests, approvals and day-to-day operations." },
    { title: "Automation", text: "Power Automate flows for approvals, notifications and data sync between systems." },
    { title: "Integration", text: "Power Platform connected to Dynamics 365 Finance and Operations and Dataverse." },
    { title: "Data and AI", text: "Power BI on clean data models, plus Copilot Studio agents." },
  ],
  skills: [
    "Power Apps (Canvas and Model-Driven)", "Power Automate", "Power BI", "Dataverse",
    "Dynamics 365 Finance and Operations", "Microsoft Fabric", "Copilot Studio", "Microsoft Copilot",
    "SharePoint", "SQL Server", "Python", "DAX", "Power Query", "Data modeling", "Business process automation",
  ],
};

export const experience = [
  {
    org: "Data Crafters",
    place: "Dhaka, Bangladesh",
    period: "May 2022 – present",
    roles: [
      {
        title: "Power Platform Developer, Power Apps and D365 F&O Integration Specialist",
        period: "January 2025 – present",
        points: [
          "Lead the Power Apps team; our low-code apps cut manual workload by 40%.",
          "Build Power Automate workflows for approvals, notifications and data sync.",
          "Integrate the Power Platform with D365 F&O and Dataverse for real-time data flow and reporting.",
          "Work with cross-functional stakeholders to shape requirements and deliver projects.",
          "Mentor junior developers and introduce practices for app design, testing and deployment.",
        ],
      },
      {
        title: "Associate Power Platform Developer, Power Apps and Automation Analyst",
        period: "May 2023 – December 2024",
        points: [
          "Built scalable Power Apps for request tracking and operational workflows.",
          "Automated data flows and approval chains with Power Automate cloud flows.",
          "Integrated D365 F&O with the Power Platform for secure, consistent data exchange.",
          "Designed and tuned Dataverse tables and relationships.",
          "Supported Power BI reporting with clean data models and real-time integration.",
        ],
      },
      {
        title: "Junior Data Analyst, Power BI and Data Modeling",
        period: "November 2022 – June 2023",
        points: [
          "Built Power BI dashboards on SQL Server, Dataverse and Excel sources.",
          "Cleaned and shaped data with Power Query and DAX.",
          "Built Power Apps data sources from SharePoint and Dataverse for embedded reporting.",
          "Automated approvals and alerts with Power Automate.",
        ],
      },
      {
        title: "Data Analyst Intern, Excel and Power BI Trainee",
        period: "May 2022 – October 2022",
        points: [
          "Prepared datasets and built Power BI dashboards for sales and operations trends while learning Power Query, DAX and visualisation principles.",
        ],
      },
    ],
  },
  {
    org: "Pythonista Planet",
    place: "",
    period: "January 2022 – October 2022",
    roles: [
      {
        title: "Python Programming Instructor",
        period: "January 2022 – October 2022",
        points: ["Taught core Python, data structures and object-oriented programming."],
      },
    ],
  },
  {
    org: "The Sparks Foundation",
    place: "Remote",
    period: "March 2022",
    roles: [
      {
        title: "Data Science and Business Analytics Intern",
        period: "March 2022",
        points: ["Completed projects in data science, machine learning and analytics with Python."],
      },
    ],
  },
];

export const education = [
  { degree: "B.Sc. in Computer Science and Engineering", school: "Varendra University", period: "2017 – 2021", note: "CGPA 3.78 / 4.00" },
];

export const honors = [
  "Competitor, programming competition at TechFest 2019",
  "Best Speaker, debate competition",
  "Guest speaker",
];

// Sources: the owner's Microsoft Learn transcript and Credly badges (both shared 2026-10-04).
// Every credential links to a public page where anyone can verify it.
// level picks the official badge (public/images/badges/). Expired ones go in `previous`, never in `active`.
export type CertLevel = "Expert" | "Associate" | "Fundamentals";
export const certLevels: CertLevel[] = ["Expert", "Associate", "Fundamentals"];
const learn = (id: string) =>
  `https://learn.microsoft.com/api/credentials/share/en-us/SohanurRahmanSohan-6350/${id}?sharingId=6050A3080F881232`;
const credly = (id: string) => `https://www.credly.com/badges/${id}`;
export type Verifier = "Microsoft Learn" | "Credly";
export type Cert = { name: string; exam: string; level: CertLevel; earned: string; expires: string | null; url: string; verifier: Verifier };
export type ExpiredCert = { name: string; exam: string; level: CertLevel; earned: string; expired: string; url: string; verifier: Verifier };
export const certifications = {
  // Newest first within each level. expires: null = doesn't expire (Fundamentals).
  active: [
    { name: "Microsoft Certified: Agentic AI Business Solutions Architect Expert", exam: "AB-100", level: "Expert", earned: "12 May 2026", expires: "13 May 2027", verifier: "Microsoft Learn", url: learn("455EA028B11CE5E4") },
    { name: "Microsoft Certified: Power Platform Solution Architect Expert", exam: "PL-600", level: "Expert", earned: "31 August 2025", expires: "1 September 2027", verifier: "Microsoft Learn", url: learn("47C4CF67EF642C5") },
    { name: "Microsoft Certified: Power Automate RPA Developer Associate", exam: "PL-500", level: "Associate", earned: "2 February 2026", expires: "3 February 2027", verifier: "Microsoft Learn", url: learn("FFB2F518734A4975") },
    { name: "Microsoft Certified: Fabric Data Engineer Associate", exam: "DP-700", level: "Associate", earned: "3 May 2025", expires: "4 May 2027", verifier: "Microsoft Learn", url: learn("A26553B519AAF705") },
    { name: "Microsoft Certified: Fabric Analytics Engineer Associate", exam: "DP-600", level: "Associate", earned: "11 June 2024", expires: "12 June 2027", verifier: "Microsoft Learn", url: learn("187DFCF0B263DBE7") },
    { name: "Microsoft Certified: Power Platform Developer Associate", exam: "PL-400", level: "Associate", earned: "26 September 2023", expires: "27 September 2027", verifier: "Microsoft Learn", url: learn("183FB37E489E1790") },
    { name: "Microsoft Certified: Power BI Data Analyst Associate", exam: "PL-300", level: "Associate", earned: "16 August 2022", expires: "17 August 2027", verifier: "Microsoft Learn", url: learn("3EFA1375FA52416") },
    { name: "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals", exam: "AB-900", level: "Fundamentals", earned: "30 January 2026", expires: null, verifier: "Microsoft Learn", url: learn("6CD5EC1884E11FA0") },
    { name: "Microsoft Certified: Dynamics 365 Fundamentals (ERP)", exam: "MB-920", level: "Fundamentals", earned: "15 September 2025", expires: null, verifier: "Microsoft Learn", url: learn("3AC4E4A94B9BDF03") },
    { name: "Microsoft Certified: Power Platform Fundamentals", exam: "PL-900", level: "Fundamentals", earned: "31 December 2022", expires: null, verifier: "Credly", url: credly("38a28af1-e41f-4722-a7ca-ce9b2bd277f7") },
    { name: "Microsoft Certified: Azure Fundamentals", exam: "AZ-900", level: "Fundamentals", earned: "19 September 2022", expires: null, verifier: "Credly", url: credly("73021378-c65f-4cf7-899e-0286a05215c0") },
  ] as Cert[],
  // Expired certifications: shown with the Exam badge and an "Expired" label, never as current.
  previous: [
    { name: "Microsoft Certified: Power Platform App Maker Associate", exam: "PL-100", level: "Associate", earned: "13 February 2023", expired: "13 February 2024", verifier: "Credly", url: credly("b57ba1e8-7a85-428f-b9f8-7e98b7d2c5a0") },
  ] as ExpiredCert[],
  appliedSkills: [
    { name: "Create and manage automated processes by using Power Automate", earned: "3 November 2024", verifier: "Microsoft Learn", url: learn("1230A3686CBA4398") },
    { name: "Create and manage canvas apps with Power Apps", earned: "25 November 2023", verifier: "Microsoft Learn", url: learn("49ADA1F6A1460A67") },
  ],
  training: [
    { provider: "SQLBI", courses: ["DAX Patterns", "Data Modeling for Power BI", "Introduction to Data Modeling for Power BI", "Power BI Dashboard Design"] },
    { provider: "Coursera", courses: ["Python Data Structures", "Programming for Everybody"] },
  ],
};

// Real projects only, supplied or approved by the owner. Never add invented case studies.
// Each project gets a card on /projects/ and a detail page at /projects/<slug>/.
export type Project = {
  slug: string;
  title: string;
  value: string;
  area: string;
  problem: string;
  solution: string[];
  result: string[];
  // Issues found in testing. Text in `backticks` renders as code.
  findings?: { title: string; happened: string; fix: string }[];
  findingsIntro?: string;
  blog?: { title: string; url: string };
  role: string;
  tags: string[];
  repo: string;
  diagram: { src: string; alt: string };
  screenshots: { src: string; alt: string; caption: string }[];
  related?: string;
};
const shot = (name: string) => `/projects/canvas-vs-pcf/shots/${name}.webp`;
const inspectionRepo = "https://github.com/SRS014/canvas-vs-pcf-inspection";
const inspectionDiagram = {
  src: "/projects/canvas-vs-pcf/architecture.svg",
  alt: "Architecture: inspectors use App 1 (Canvas only) and App 2 (Canvas with two React code components). Both apps read and write seven Dataverse tables. Source and deployment scripts live in GitHub.",
};
export const projects: Project[] = [
  {
    slug: "canvas-equipment-inspections",
    title: "Equipment Inspections in Canvas",
    value: "A multi-stage inspection app in Power Apps Canvas and Dataverse, built to find exactly where Canvas stops.",
    area: "Power Apps Canvas + Dataverse",
    problem:
      "Inspectors check forklifts and conveyors across three warehouse sites. They need a checklist that changes with each answer, a live risk score with critical stops, photos of defects, and Dataverse as the record. The checklist and its rules live in tables, so a new template shouldn't need a new app.",
    solution: [
      "Seven Dataverse tables, with the checklist stored as a self-referencing question tree and the conditions held as data.",
      "Five Canvas screens: inspection list, guided start, staged checklist, photos with Pen markup, and review and submit.",
      "A live score in Power Fx: weights, an equipment-criticality multiplier, a cap at 100 and critical stops.",
      "Visibility is one named formula per level of the tree, because Power Fx functions can't call themselves.",
      "Every limit documented with evidence from the build, then confirmed in three test runs traced with Live monitor.",
    ],
    result: [
      "Signed off after three traced test runs.",
      "Ten documented limits. The biggest: Power Fx functions can't recurse, so the checklist stops at five levels and a sixth-level critical question never shows.",
      "Those limits became the brief for the PCF version.",
    ],
    role: "Sole builder: data model, provisioning scripts, Canvas app, testing and write-up.",
    tags: ["Power Apps (Canvas)", "Power Fx", "Dataverse", "Live monitor", "Git"],
    repo: inspectionRepo,
    diagram: inspectionDiagram,
    screenshots: [
      { src: shot("app1-01-home"), alt: "App 1 home screen: inspection counts, average risk score and a list of inspections with status and risk.", caption: "Home: every inspection with its status, risk band and which app built it." },
      { src: shot("app1-02-new-inspection"), alt: "New inspection screen with a site, a forklift and its criticality selected.", caption: "Guided start: pick a site, then the equipment. Criticality sets the score multiplier." },
      { src: shot("app1-03-critical-stop"), alt: "Checklist with the operator licence question answered No and the live risk panel showing 30 out of 100, Critical, critical stop.", caption: "One critical answer forces the Critical band, whatever the score." },
      { src: shot("app1-06-pen-markup"), alt: "Photo screen in annotate mode with freehand red strokes drawn over a photo of two spanners using the Pen input.", caption: "Canvas markup is the Pen input: freehand strokes only." },
      { src: shot("app1-07-pen-saved"), alt: "Saved photo with the freehand strokes and a note that strokes are stored as a separate image.", caption: "The strokes save as a separate image, apart from the photo." },
      { src: shot("app1-05-submitted"), alt: "Home screen with a banner confirming the inspection was submitted with risk 30.0, Critical.", caption: "Submitted to Dataverse, and the counts update straight away." },
    ],
    blog: { title: "When to Use Code Components in Canvas Apps", url: "https://thefusionplatform.wordpress.com/2026/10/19/when-to-use-code-components-in-canvas-apps/" },
    related: "canvas-pcf-rules-driven-inspections",
  },
  {
    slug: "canvas-pcf-rules-driven-inspections",
    title: "Canvas + PCF: Rules-Driven Inspections",
    value: "The same inspection app, with React + TypeScript code components where Canvas ran out.",
    area: "Power Apps Canvas + PCF code components",
    problem:
      "The Canvas version hit hard limits: a five-level checklist, a hard-coded cross-question rule, no compound risk rules, and freehand-only photo markup saved apart from the photo.",
    solution: [
      "InspectionChecklist: a React + TypeScript code component that walks the question tree recursively, evaluates rule trees stored as JSON and explains every point in the score.",
      "Compound risk rules held as Dataverse rows, so a new rule is a new row, not a new app version.",
      "PhotoAnnotator: numbered markers, arrows, boxes, freehand and notes, saved as a flattened JPEG plus editable mark data.",
      "Canvas still owns every Dataverse read and write, and passes data to the components as JSON. Code components in canvas apps have no Dataverse Web API.",
    ],
    result: [
      "No depth limit: the sixth-level critical question shows and scores.",
      "15 unit tests cover the scoring engine and the Canvas data contract.",
      "Testing in the real canvas app found three issues, all fixed. See What testing found below.",
    ],
    findingsIntro: "Found while testing the published canvas app on 18 October 2026. The local test harness showed none of them.",
    findings: [
      {
        title: "The screen didn't redraw after a click",
        happened: "In the canvas app, `updateView` didn't run after `notifyOutputChanged` when no input had changed, so a click saved the answer but the screen stayed the same. The local test harness did redraw, which hid it.",
        fix: "The React view re-renders itself through a small store.",
      },
      {
        title: "The wrong width inside auto-layout",
        happened: "Inside an auto-layout container, `allocatedWidth` matched the control's Width property, not its laid-out width, so the question column collapsed.",
        fix: "Both views fill 100% of the control's box.",
      },
      {
        title: "Columns Power Apps never fetched",
        happened: "The questions reached the component only through `JSON(DropColumns(colQ, Rec))`. A Live monitor trace showed the question query fetching 9 columns; the parent, condition, weight and option columns were never requested. Every question showed and the risk score stayed at 0.",
        fix: "Name every column: `JSON(ShowColumns(colQ, ...))`.",
      },
    ],
    role: "Sole builder: component design, React + TypeScript, Canvas integration, deployment and testing.",
    tags: ["Power Apps (Canvas)", "PCF", "React", "TypeScript", "Fluent UI v9", "Dataverse", "Power Platform CLI"],
    repo: inspectionRepo,
    diagram: inspectionDiagram,
    screenshots: [
      { src: shot("app2-01-home"), alt: "App 2 home screen listing inspections from both apps, one marked 30.0 Critical.", caption: "Same data, same screens: inspections from both apps side by side." },
      { src: shot("app2-03-checklist"), alt: "Checklist drawn by the React code component, with stage tabs, answers and a live risk panel explaining the score.", caption: "The checklist and live risk panel are one React code component inside the Canvas screen." },
      { src: shot("app2-05-annotator"), alt: "PhotoAnnotator code component with numbered markers, an arrow, a box and freehand marks on a photo of two spanners, and a toolbar of tools and colours.", caption: "The PhotoAnnotator component: numbered markers, arrows, boxes, freehand and notes." },
      { src: shot("app2-02-new-inspection"), alt: "New inspection screen in App 2 with a site and forklift selected.", caption: "Everything around the components stays plain Canvas." },
      { src: shot("app2-04-review"), alt: "Review screen in App 2 with 3 of 14 visible questions answered and a risk score of 0.0, Low.", caption: "Review reads the component's outputs: 14 visible questions, not the whole template." },
    ],
    blog: { title: "When to Use Code Components in Canvas Apps", url: "https://thefusionplatform.wordpress.com/2026/10/19/when-to-use-code-components-in-canvas-apps/" },
    related: "canvas-equipment-inspections",
  },
];

// Published posts on The Fusion Platform (from the blog archive). Add new posts at the top.
export const writing = [
  {
    title: "When to Use Code Components in Canvas Apps",
    url: "https://thefusionplatform.wordpress.com/2026/10/19/when-to-use-code-components-in-canvas-apps/",
    date: "19 October 2026",
  },
  {
    title: "Learning pro-code isn’t leaving low-code",
    url: "https://thefusionplatform.wordpress.com/2026/10/17/learning-pro-codeisnt-leavinglow-code/",
    date: "17 October 2026",
  },
  {
    title: "Stuck on a Power Platform build? Open the right tool",
    url: "https://thefusionplatform.wordpress.com/2026/10/14/stuck-on-a-power-platform-build-open-the-right-tool/",
    date: "14 October 2026",
  },
  {
    title: "Dataverse vs SharePoint Lists: How to Choose",
    url: "https://thefusionplatform.wordpress.com/2026/10/06/dataverse-vs-sharepoint-lists-how-to-choose/",
    date: "6 October 2026",
  },
  {
    title: "Power Apps Performance Killers — And How to Fix Them",
    url: "https://thefusionplatform.wordpress.com/2026/03/21/power-apps-performance-killers-and-how-to-fix-them/",
    date: "21 March 2026",
  },
  {
    title: "Power Apps: Low-Code vs Pro-Code — Where’s the Line?",
    url: "https://thefusionplatform.wordpress.com/2026/03/14/155/",
    date: "14 March 2026",
  },
  {
    title: "Microsoft Power Platform: The Business Game Changer",
    url: "https://thefusionplatform.wordpress.com/2025/08/03/microsoft-power-platform-the-business-game-changer/",
    date: "3 August 2025",
  },
];

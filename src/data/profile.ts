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

// Source: the owner's Microsoft Learn transcript (shared 2026-10-04). Every credential links to its public share page.
// level picks the official badge (public/images/badges/). Expired ones go in `previous`, never in `active`.
export type CertLevel = "Expert" | "Associate" | "Fundamentals";
export const certLevels: CertLevel[] = ["Expert", "Associate", "Fundamentals"];
const learn = (id: string) =>
  `https://learn.microsoft.com/api/credentials/share/en-us/SohanurRahmanSohan-6350/${id}?sharingId=6050A3080F881232`;
export type Cert = { name: string; exam: string; level: CertLevel; earned: string; expires: string | null; url: string };
export const certifications = {
  // Newest first within each level. expires: null = doesn't expire (Fundamentals).
  active: [
    { name: "Microsoft Certified: Agentic AI Business Solutions Architect Expert", exam: "AB-100", level: "Expert", earned: "12 May 2026", expires: "13 May 2027", url: learn("455EA028B11CE5E4") },
    { name: "Microsoft Certified: Power Platform Solution Architect Expert", exam: "PL-600", level: "Expert", earned: "31 August 2025", expires: "1 September 2027", url: learn("47C4CF67EF642C5") },
    { name: "Microsoft Certified: Power Automate RPA Developer Associate", exam: "PL-500", level: "Associate", earned: "2 February 2026", expires: "3 February 2027", url: learn("FFB2F518734A4975") },
    { name: "Microsoft Certified: Fabric Data Engineer Associate", exam: "DP-700", level: "Associate", earned: "3 May 2025", expires: "4 May 2027", url: learn("A26553B519AAF705") },
    { name: "Microsoft Certified: Fabric Analytics Engineer Associate", exam: "DP-600", level: "Associate", earned: "11 June 2024", expires: "12 June 2027", url: learn("187DFCF0B263DBE7") },
    { name: "Microsoft Certified: Power Platform Developer Associate", exam: "PL-400", level: "Associate", earned: "26 September 2023", expires: "27 September 2027", url: learn("183FB37E489E1790") },
    { name: "Microsoft Certified: Power BI Data Analyst Associate", exam: "PL-300", level: "Associate", earned: "16 August 2022", expires: "17 August 2027", url: learn("3EFA1375FA52416") },
    { name: "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals", exam: "AB-900", level: "Fundamentals", earned: "30 January 2026", expires: null, url: learn("6CD5EC1884E11FA0") },
    { name: "Microsoft Certified: Dynamics 365 Fundamentals (ERP)", exam: "MB-920", level: "Fundamentals", earned: "15 September 2025", expires: null, url: learn("3AC4E4A94B9BDF03") },
  ] as Cert[],
  // Expired certifications: shown with the Exam badge and an "Expired" label. None on the transcript as of 2026-10-04.
  previous: [] as { name: string; exam: string; level: CertLevel }[],
  appliedSkills: [
    { name: "Create and manage automated processes by using Power Automate", earned: "3 November 2024", url: learn("1230A3686CBA4398") },
    { name: "Create and manage canvas apps with Power Apps", earned: "25 November 2023", url: learn("49ADA1F6A1460A67") },
  ],
  training: [
    { provider: "SQLBI", courses: ["DAX Patterns", "Data Modeling for Power BI", "Introduction to Data Modeling for Power BI", "Power BI Dashboard Design"] },
    { provider: "Coursera", courses: ["Python Data Structures", "Programming for Everybody"] },
  ],
};

// PLACEHOLDERS: the owner will supply real projects. Never replace these with invented case studies.
export const projects = [
  { placeholder: true, title: "Project 1 — to be added", area: "Power Apps + D365 F&O integration" },
  { placeholder: true, title: "Project 2 — to be added", area: "Power Automate approvals and data sync" },
  { placeholder: true, title: "Project 3 — to be added", area: "Power BI reporting on Dataverse" },
];
export const projectFields = ["The problem", "What I built", "Tools", "Outcome"];

// Published posts on The Fusion Platform (from the blog archive). Add new posts at the top.
export const writing = [
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

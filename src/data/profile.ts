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

// 11 Microsoft certifications earned, 6 currently active. Expired ones are never shown as current.
export const certifications = {
  active: [
    { name: "Microsoft Certified: Agentic AI Business Solutions Architect", issued: "May 2026" },
    { name: "Microsoft Certified: Power Automate RPA Developer Associate", issued: "February 2026" },
    { name: "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals", issued: "January 2026" },
    { name: "Microsoft Certified: Dynamics 365 Fundamentals (ERP)", issued: "September 2025" },
    { name: "Microsoft Certified: Power Platform Fundamentals", issued: "December 2022" },
    { name: "Microsoft Certified: Azure Fundamentals", issued: "September 2022" },
  ],
  previous: [
    "Power Platform Solution Architect Expert (PL-600)",
    "Fabric Analytics Engineer Associate",
    "Power Platform Developer Associate",
    "Power Platform App Maker Associate",
    "Power BI Data Analyst Associate",
  ],
  appliedSkills: [
    "Create and manage automated processes by using Power Automate",
    "Create and manage canvas apps with Power Apps",
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

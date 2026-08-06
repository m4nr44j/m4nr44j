import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manraaj Singh",
  initials: "MS",
  location: "Palo Alto, CA",
  locationLink: "https://www.google.com/maps/place/Palo Alto, California",
  about: "Engineering @ Whop",
  summary:
    "Engineer @ Whop. \n Exited Founder, Clio (Acq by Whop)\nStudying Math @ Dartmouth College (On leave). \nInterested in product design, machine learning, and backend eng. I ship fast and can take ideas to execution.",
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl: "https://github.com/m4nr44j",
  resumeUrl: "/resume.pdf",
  contact: {
    email: "ms.28@dartmouth.edu",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/m4nr44j",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/manraaj-singh",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/m4nr44j",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Dartmouth College",
      degree: "Bachelor of Arts in Mathematics",
      start: "2024",
      end: "2027",
      gpa: "3.9",
      coursework:
        "Algorithms, Data Structures, Discrete Math, Math for Machine Learning, Computer Vision, Linear Algebra, Probability, Linear Models, Vector Calculus, Public Speaking",
    },
  ],
  work: [
    {
      company: "Whop",
      link: "https://whop.com",
      badges: [],
      title: "Engineer",
      logo: "/logos/whop.jpeg",
      location: "Palo Alto, CA",
      start: "Jan 2026",
      end: "Present",
      description:
        "Building fraud and risk systems for Whop's payments platform.",
    },
    {
      company: "Scale AI",
      link: "https://scale.com",
      badges: ["Intern"],
      title: "Engineer",
      logo: "/logos/scale.jpeg",
      location: "San Francisco, California",
      start: "Sep 2025",
      end: "Dec 2025",
      description:
        "Built evals to test how well frontier models use tools and where they fail.",
    },
    {
      company: "Kenvue",
      link: "https://www.kenvue.com",
      badges: ["Intern"],
      title: "Engineer",
      logo: "/logos/kenvue.png",
      location: "Summit, NJ",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Built models that forecast profit per ad campaign for Neutrogena, Aveeno, and OGX.",
    },
    {
      company: "Geisel School of Medicine at Dartmouth",
      link: "https://c-phai.org",
      badges: ["Part-time"],
      title: "Researcher",
      logo: "/logos/geisel.jpg",
      location: "Hanover, NH",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Created a dataset from raw pathology reports for fine-tuning a clinical pathology model.",
    },
    {
      company: "KhojGurbani",
      link: "https://khojgurbani.org",
      badges: ["Part-time"],
      title: "Engineer",
      logo: "/logos/khoj.png",
      location: "Boston, MA",
      start: "Jun 2023",
      end: "Aug 2024",
      description:
        "Rebuilt the mobile app end-to-end in Flutter, shipping a faster, redesigned experience to thousands of users.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Go",
    "PostgreSQL",
  ],
  topics: [
    "Golf",
    "Lifting",
    "Poker",
    "Cooking",
    "Prediction Markets",
    "NBA",
    "NFL",
    "Energy Drinks",
    "Matcha"
  ],
  projects: [
    {
      title: "RecruiterX",
      techStack: ["Next.js", "Supabase", "Python", "Grok API"],
      description:
        "Scoring engineers on X/Twitter using 8-signal analysis to source exceptional talent.",
      link: {
        label: "X",
        href: "https://x.com/SpaceXAI/status/1997875234796691460?s=20",
      },
    },
    {
      title: "Sodacan",
      techStack: ["Python", "Gemini API", "Snowflake", "Typer"],
      description:
        "CLI for transforming messy enterprise data into BI-ready insights via LLM pipelines.",
      link: {
        label: "Devpost",
        href: "https://devpost.com/software/sodacan?_gl=1*a3rphl*_gcl_au*NjA2NzQyNDI2LjE3NjI1NzU0MjE.*_ga*ODkzMDgyMzA4LjE3NjI1NzU0MjI.*_ga_0YHJK3Y10M*czE3NjUyNzUzNzMkbzkkZzEkdDE3NjUyNzU0MjQkajkkbDAkaDA.",
      },
    },
    {
      title: "NBA Props Algo",
      techStack: ["Python", "PostgreSQL", "Selenium", "Pandas"],
      description:
        "EV+ modeling and web scraping to predict player performance against sportsbooks.",
      link: {
        label: "GitHub",
        href: "https://github.com/m4nr44j/nba-betting",
      },
    },
    {
      title: "Docufy",
      techStack: ["TypeScript", "Tree-sitter", "Node.js"],
      description:
        "Converting repositories into machine-readable maps for high-level architecture analysis.",
      link: {
        label: "GitHub",
        href: "https://github.com/m4nr44j/docufy",
      },
    },
    {
      title: "Tiny Search Engine",
      techStack: ["C", "Bash", "Linux"],
      description:
        "A crawler, indexer, and boolean query engine built completely from scratch.",
      link: {
        label: "GitHub",
        href: "https://github.com/m4nr44j/TinySearchEngine",
      },
    },
    {
      title: "RFID Attendance",
      techStack: ["Arduino", "C++", "PHP", "MySQL"],
      description:
        "Hardware-software integration for real-time attendance tracking.",
      link: {
        label: "GitHub",
        href: "https://github.com/m4nr44j/rfid-attendance",
      },
    },
  ],
  papers: [
    {
      title: "Chemistry Under Pressure",
      awards: ["QSS 41 Research"],
      description:
        "Investigating how NBA team chemistry distributions (uniform vs. spiky) affect resilience to injuries.",
      link: {
        label: "Read Paper",
        href: "/qss41_paper.pdf",
      },
    },
    {
      title: "Classical Music Predictor",
      awards: ["Math 50 Final Project"],
      description:
        "Classifying composers (Bach, Haydn, Beethoven) using global feature entropy and statistical data.",
      link: {
        label: "Read Paper",
        href: "/math50_paper.pdf",
      },
    },
  ],
  certificates: [],
} as const;

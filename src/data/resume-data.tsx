import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manraaj Singh",
  initials: "MS",
  location: "Massachusetts",
  locationLink: "https://www.google.com/maps/place/Boston, Massachusetts",
  about: "CS & Applied Math at Dartmouth College",
  summary:
    "Studying CS and Math @ Dartmouth College. Interested in product design, machine learning, and backend eng. I ship fast and take ideas to execution. \nCurrently building something cool in computer vision + sports ;)",
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
        url: "https://x.com/manraaj_singh_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Dartmouth College",
      degree: "Bachelor of Arts in Computer Science & Mathematics",
      start: "June 2024",
      end: "Nov 2027",
      gpa: "3.90",
      coursework:
        "Algorithms, Data Structures, System Design, Math for Machine Learning, Computer Vision, Linear Algebra, Probability, Linear Models, Microeconomics, Public Speaking, Ethics",
    },
  ],
  work: [
    {
      company: "Scale AI",
      link: "https://scale.com",
      badges: [],
      title: "Technical Advisor Intern (GenAI)",
      logo: "/logos/scale.jpeg",
      start: "Mar 2025",
      end: "Present",
      description:
        "Authoring Olympiad-level code solutions to generate reasoning data for RLHF pipelines.",
    },
    {
      company: "Kenvue",
      link: "https://www.kenvue.com",
      badges: [],
      title: "Software Engineer Intern",
      logo: "/logos/kenvue.png",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Wrote an ML algorithm to model baseline sales and migrated ETL pipelines to Azure Data Factory.",
    },
    {
      company: "Dartmouth Center for Precision Health and AI",
      link: "https://c-phai.org",
      badges: [],
      title: "Data Engineer Intern",
      logo: "/logos/geisel.jpg",
      start: "Dec 2024",
      end: "Mar 2025",
      description:
        "Built OCR pipelines for 14k+ pathology reports and generated synthetic Q&A datasets.",
    },
    {
      company: "Khoj Gurbani Media",
      link: "https://khojgurbani.org",
      badges: [],
      title: "Software Engineer",
      logo: "/logos/khoj.png",
      start: "Jun 2023",
      end: "Aug 2024",
      description:
        "Revamped mobile UX with Flutter and optimized content delivery via CloudFront.",
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
    "Mechanical Keyboards",
    "Energy Drinks",
    "NBA",
    "NFL",
    "Tennis"
  ],
  projects: [
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
      title: "RecruiterX",
      techStack: ["Next.js", "Supabase", "Python", "Grok API"],
      description:
        "Scoring engineers on X/Twitter using 8-signal analysis to source exceptional talent.",
      link: {
        label: "GitHub",
        href: "https://github.com/m4nr44j",
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

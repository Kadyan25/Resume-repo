export const profile = {
  name: "Mohit Kadyan",
  title: "Full-Stack Developer · AI-Integrated Applications · TypeScript · Java · Python",
  location: "Rohtak, Haryana (Open to Remote & Delhi NCR)",
  phone: "+91 7988334269",
  email: "19bcs1615@gmail.com",
  linkedin: "https://linkedin.com/in/mohit-kdyn",
  github: "https://github.com/Kadyan25",
  portfolio: "https://mohit-resume20.netlify.app",
  summary: `Full-Stack Developer with production experience shipping complete web applications — from backend APIs and database architecture to responsive frontends and cloud deployment. Independently built and launched two live SaaS products: a unified marketing analytics dashboard and an AI-powered email client. Experienced with modern TypeScript stack (Next.js, Prisma, PostgreSQL) and Java/Spring Boot backend systems. Integrates AI (Claude, Gemini) as a product feature. Uses AI-assisted development (Claude Code, Cursor) as a core workflow multiplier to ship faster without sacrificing architectural ownership.`
};

export const skills = {
  Frontend: [
    "Next.js 14",
    "React.js",
    "TypeScript",
    "Tailwind CSS v4",
    "shadcn/ui",
    "PWA",
    "Service Workers"
  ],
  Backend: [
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Node.js",
    "REST APIs",
    "WebSockets",
    "Background Jobs"
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "Redis",
    "SQLite",
    "Spring Data JPA"
  ],
  "Auth & Security": [
    "NextAuth v5",
    "JWT",
    "OAuth2 (Google, Meta, TikTok, LinkedIn)",
    "AES-256 Encryption"
  ],
  "AI Integration": [
    "Claude API (Sonnet/Haiku)",
    "Gemini API",
    "OpenAI API",
    "LangChain",
    "Tool/Function Calling"
  ],
  Testing: [
    "Vitest (80+ unit tests)",
    "Playwright E2E",
    "TypeScript strict mode"
  ],
  DevOps: [
    "Docker",
    "Railway",
    "Render",
    "Vercel",
    "Netlify",
    "Git/GitHub"
  ],
  Automation: [
    "n8n",
    "GoHighLevel CRM",
    "Vapi (Voice AI)",
    "Apify",
    "Playwright Scraping"
  ]
};

export const experience = [
  {
    role: "Full-Stack Developer & AI Engineer",
    company: "Contract (Remote)",
    duration: "Feb 2026 – Present",
    location: "Remote",
    description: [
      "Independently built and launched Onelytics — a multi-tenant marketing analytics SaaS with OAuth integrations across 6 platforms (Google Analytics, Ads, Search Console, Meta, TikTok, LinkedIn), AES-256 token encryption, Redis caching, role-based workspace management, and AI-powered summaries via Claude API. Deployed on Railway.",
      "Built production SEO audit application using FastAPI, async Playwright crawler, background job queue, PDF/CSV report export, and Docker deployment — auditing 200+ pages per run with JS-rendered SPA support.",
      "Designed n8n marketing automation pipelines and LLM-integrated content workflows for client delivery."
    ]
  },
  {
    role: "Backend & Integration Engineer",
    company: "Contract (Remote + On-site)",
    duration: "Oct 2025 – Feb 2026",
    location: "Remote + On-site",
    description: [
      "Built backend API infrastructure for voice AI systems using Vapi — dynamic conversation flows, intent detection, CRM action triggers, and missed-call recovery pipelines integrated with GoHighLevel.",
      "Delivered client-facing automation systems connecting multiple third-party APIs and services, translating business requirements into production-ready technical solutions independently.",
      "Built reusable integration templates and webhook-driven workflows reducing client onboarding time significantly."
    ]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "HighRadius",
    duration: "Jan 2022 – Apr 2022",
    location: "Remote / Hybrid",
    description: [
      "Developed and tested REST APIs using Spring Boot for a cloud-based B2B fintech platform — data models, business logic, and database operations.",
      "Built reusable React components following design specifications, contributing to sprint reviews and feature delivery in an Agile team."
    ]
  }
];

export const projects = [
  {
    name: "Inboxd — AI-First Universal Email Client",
    image: "inboxd.jpg",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Claude API",
      "Gmail REST API",
      "IMAP",
      "PWA",
      "Railway"
    ],
    duration: "Live",
    description:
      "Unified inbox across Gmail, IMAP (Yahoo/AOL), and Outlook — Claude Sonnet powers AI email summaries, 3-strategy reply drafts, and priority triage (URGENT/NORMAL/LOW/NOISE) on every sync. Full PWA with service worker offline shell, installable on mobile. AES-256 encrypted OAuth token storage, full compose/reply/forward flow with quote threading. 80 Vitest unit tests + Playwright E2E test suite.",
    liveUrl: "https://inboxd-production-077c.up.railway.app",
    codeUrl: "https://github.com/Kadyan25/Inboxd"
  },
  {
    name: "Onelytics — Unified Marketing Analytics Dashboard",
    image: "onelytics.png",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Claude API",
      "NextAuth",
      "Railway"
    ],
    duration: "Live",
    description:
      "Multi-tenant SaaS connecting Google Analytics, Google Ads, Search Console, Meta Ads, TikTok Ads, LinkedIn Ads, and WordPress into a single workspace with AI-powered summaries via Claude Haiku. Role-based workspace management (Owner/Admin/Member/Viewer), invite system with expiring tokens, AES-256-GCM encrypted OAuth token storage, 6-hour API response caching via Redis.",
    liveUrl: "https://onelytics-production-693f.up.railway.app",
    codeUrl: "https://github.com/Mohit02026/onelytics"
  },
  {
    name: "Compass Registered Agent — LLC Formation Platform",
    image: "compass.jpg",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "NextAuth v5",
      "Cloudflare R2",
      "GoHighLevel",
      "Railway"
    ],
    duration: "Live",
    description:
      "Full-stack client platform for a Florida registered agent service — public LLC formation intake, Stripe checkout, customer portal with document downloads and compliance calendar, and an internal ops workbench for order management and PDF filing sheets. Bidirectional GoHighLevel CRM sync: Compass pushes new orders on payment, GHL stage changes webhook back to Compass. AES-256-GCM encryption, Resend transactional email, Cloudflare R2 document storage.",
    liveUrl: "https://compassregisteredagent.com",
    codeUrl: ""
  },
  {
    name: "AI Counsellor — University Admissions Platform",
    image: "ai-counsellor.jpg",
    tech: [
      "Spring Boot",
      "Next.js",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Gemini API",
      "OpenRouter",
      "Perplexity",
      "Tailwind CSS v4"
    ],
    duration: "Live",
    description:
      "Full-stack agentic AI platform — AI performs real database operations (shortlist/lock universities, create tasks) via validated JSON tool calling against live DB records. Multi-provider AI (Gemini, OpenRouter, Perplexity) with automatic fallback and hallucination prevention. Stage-based onboarding flow, conversation history, glassmorphism UI.",
    liveUrl: "https://ai-counsellor-umber.vercel.app",
    codeUrl: "https://github.com/Kadyan25/ai_counsellor"
  },
  {
    name: "Real-Time Chat Application",
    image: "chatapp.jpg",
    tech: [
      "Spring Boot",
      "React",
      "WebSocket",
      "Spring Security",
      "MySQL",
      "Docker",
      "Render"
    ],
    duration: "Live",
    description:
      "Full-stack real-time chat with public rooms and private one-to-one messaging — WebSocket protocol, Spring Security JWT auth, user online status indicators. Containerised with Docker, deployed on Render with persistent message history.",
    liveUrl: "https://chatapp-dylb.onrender.com",
    codeUrl: "https://github.com/Kadyan25/ChatApp"
  },
  {
    name: "SEO Audit Tool",
    image: "Sep-audit.jpg",
    tech: [
      "Python",
      "FastAPI",
      "Playwright",
      "Async httpx",
      "Docker",
      "Google PageSpeed API",
      "SQLite"
    ],
    duration: "Production",
    description:
      "Production-grade crawler auditing technical SEO — broken links, meta tags, heading structure, page speed scores, JS-rendered SPA pages, and sitemap validation. Background job queue with SQLite state management, concurrent multi-site audits, client-facing PDF reports and internal CSV/JSON exports. Fully Dockerised.",
    liveUrl: "",
    codeUrl: "https://github.com/Kadyan25/Seo-audit"
  },
  {
    name: "Automation Flows with n8n",
    image: "n8n.jpg",
    tech: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "GoHighLevel CRM",
      "Vapi (Voice AI)",
      "LLM Workflows"
    ],
    duration: "Ongoing",
    description:
      "Designed and delivered n8n marketing automation pipelines and LLM-integrated content workflows for clients. Built voice AI systems using Vapi with dynamic conversation flows, intent detection, CRM action triggers, and missed-call recovery pipelines. Created reusable webhook-driven integration templates reducing client onboarding time significantly.",
    liveUrl: "",
    codeUrl: ""
  },
  {
    name: "Busy Buy — E-Commerce Frontend",
    image: "busybuy.jpg",
    tech: [
      "React.js",
      "Tailwind CSS",
      "REST API",
      "Responsive Design"
    ],
    duration: "Live",
    description:
      "Responsive e-commerce UI with product listing, filtering, cart, and checkout flow. REST API integration with pagination, search, and category filtering.",
    liveUrl: "https://busybuy25.netlify.app",
    codeUrl: "https://github.com/Kadyan25/Busy-Buy"
  }
];

export const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    year: "2023",
    institute: "Chandigarh University, Mohali"
  },
  {
    degree: "12th – CBSE",
    year: "2018",
    institute: "B.R.P. School, Dujana"
  },
  {
    degree: "10th – CBSE",
    year: "2015",
    institute: "B.R.P. School, Dujana"
  }
];

export const certifications = [
  {
    name: "Coding Ninjas – Full Stack Web Development",
    issuer: "Coding Ninjas",
    year: "2024-25",
    links: [
      {
        label: "Frontend Certificate",
        url: "https://certificate.codingninjas.com/view/e04104ed86c5b316"
      },
      {
        label: "Backend Certificate",
        url: "https://certificate.codingninjas.com/view/1745221f22707ee3"
      }
    ]
  },
  {
    name: "Coding Ninjas – Java & Data Structures",
    issuer: "Coding Ninjas",
    year: "2023-24",
    links: [
      {
        label: "View Certificate",
        url: "https://certificate.codingninjas.com/view/b149b74b4c4e4fa6"
      }
    ]
  },
  {
    name: "Full-Stack Internship Certificate",
    issuer: "HighRadius",
    year: "2022",
    links: [
      {
        label: "Internship Certificate",
        url: "https://drive.google.com/file/d/1GitpmqClMf0g0L2RwAaYpKhyBNPm2rjM/view?usp=sharing"
      }
    ]
  }
];

export const roadmap = {
  text:
    "Actively upskilling in Docker, Kubernetes, cloud (AWS/GCP) and AI-assisted development. Upcoming focus: production-grade Java/Spring Boot microservices, React/Next.js frontends, DevOps (CI/CD, monitoring) and AI integrations for real client projects.",
  link: "",
  linkLabel: ""
};

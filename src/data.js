// src/data.js
export const profile = {
  name: "Mohit Kadian",
  title: "Java & Full‑Stack Developer",
  location: "Jhajjar, India",
  phone: "+91 79883 34269",
  email: "19bcs1615@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohit-kadian-38420b22a",
  summary: `
Enthusiastic Computer Science graduate (B.Tech CSE, Chandigarh University) with a strong foundation in Core Java, Data Structures, Spring Boot, React.js, and JavaScript. Completed a 90‑day full‑stack internship at HighRadius, building e‑commerce and B2B fintech applications and working across backend APIs, data models, and frontend components.
`.trim()
};

export const skills = {
  Backend: ["Core Java", "Spring Boot", "Spring MVC", "Spring Hibernate", "REST API", "Node.js"],
  Frontend: ["React.js", "JavaScript", "HTML", "CSS"],
  Core: ["Data Structures", "OOPs"],
  Tools: ["Git", "GitHub","n8n","Bolt.new","Lovable"],
  Other: ["Python"]
};

export const experience = [
  {
    role: "Full‑Stack Intern",
    company: "HighRadius",
    duration: "90 Days",
    description: [
      "Worked on a full‑stack web‑based B2B fintech cloud application.",
      "Implemented backend APIs, data models, and UI components.",
      "Gained end‑to‑end exposure to product development and user experience design."
    ]
  }
];

export const projects = [
  {
    name: "Basic Chat App",
    tech: ["Spring Boot", "JavaScript", "MySQL", "WebSockets", "JWT"],
    duration: "4 Weeks",
    description:
      "Real‑time chat app with user auth, public rooms, and private one‑to‑one messaging.",
    liveUrl: "https://your-chat-app-url.com",
    codeUrl: "https://github.com/Kadyan25/ChatApp.git"
  },
  {
    name: "E‑commerce Backend",
    tech: ["Spring Boot", "Java", "REST API"],
    duration: "31 Days",
    description:
      "Spring Boot e‑commerce backend exposing REST APIs for products, cart, and orders.",
    liveUrl: "https://your-ecommerce-api-url.com",
    codeUrl: "https://github.com/youruser/ecommerce-backend"
  },
  {
    name: "AI‑Enabled B2B Fintech App",
    tech: ["Full‑Stack", "Machine Learning", "Cloud"],
    duration: "90 Days",
    description:
      "End‑to‑end B2B fintech web app with data models, ML models, backend APIs, and UI.",
    liveUrl: "",
    codeUrl: ""
  },
  {
    name: "Busy Buy",
    tech: ["React.js", "JavaScript"],
    duration: "4 Weeks",
    description:
      "React e‑commerce UI where users browse items, manage cart, and complete a mock checkout.",
    liveUrl: "https://your-busybuy-url.com",
    codeUrl: "https://github.com/youruser/busy-buy"
  }
];

export const education = [
  {
    degree: "B.Tech/B.E. – Computer Science",
    year: "2023",
    institute: "Chandigarh University, Mohali"
  },
  {
    degree: "12th – CBSE, English",
    year: "2018"
  },
  {
    degree: "10th – CBSE, English",
    year: "2015"
  }
];

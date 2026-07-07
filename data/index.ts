// data/index.ts

export const personalInfo = {
  name: "Haedara Salloum",  // ✅ الاسم الصحيح
  title: "Full Stack Developer",
  email: "haedarahasan69@gmail.com",
  phone: "+963983796029",
  location: "Tartous - Elskehk badr, Syria",
  github: "github.com/ahmad655656",
  website: "haedara-salloum.vercelapp",
  bio: "Passionate developer with expertise in modern web technologies, building scalable and visually stunning applications."
};

export const experience = {
  company: "Arados",
  position: "Product Formatting & Web Developer",
  period: "10/2025 - Present",
  description: [
    "Manage product data and formatting within Odoo ERP.",
    "Built a custom algorithm to standardize and structure product names.",
    "Oversee website editing and content management.",
    "Redesigned the company website into a modern, professional interface."
  ]
};

export const skills = {
  frontend: [
    "JavaScript (ES6+)", "React.js", "Next.js (SSR/SSG)",
    "Framer Motion", "TypeScript", "Tailwind CSS"
  ],
  software: [
    "C/C++", "Java", "Python", "C#", "OOP", "Testing & Debugging"
  ],
  databases: [
    "MySQL", "Oracle", "PostgreSQL", "Performance Optimization"
  ],
  methodologies: [
    "Waterfall", "Agile", "Scrum", "SDLC", "Documentation"
  ],
  ai: [
    "AI Fundamentals", "Machine Learning", "Data Structures", "Algorithms"
  ]
};

export const projects = [
  {
    id: 1,
    title: "CarLand - Car Rental Platform",
    description: "Advanced car rental platform with smart filtering, price comparison, and seamless booking.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Urban Build - Construction Company",
    description: "Corporate website with project gallery and detailed service pages.",
    tech: ["React", "Tailwind CSS"],
    category: "Frontend"
  },
  {
    id: 3,
    title: "Software Landing - Product Page",
    description: "High-conversion landing page with attractive design and contact forms.",
    tech: ["Next.js", "Framer Motion"],
    category: "Frontend"
  },
  {
    id: 4,
    title: "AI Image Generator",
    description: "DALL-E powered image generation with text descriptions and customization.",
    tech: ["React", "DALL-E API"],
    category: "AI"
  },
  {
    id: 5,
    title: "Courses Platform - E-Learning",
    description: "Online learning with video courses, progress tracking, and quizzes.",
    tech: ["Next.js", "Prisma"],
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Virtual Museum - 360 Tours",
    description: "Immersive virtual tours of 13 landmarks across 9 countries with multilingual support.",
    tech: ["React", "Three.js"],
    category: "Frontend"
  },
  {
    id: 7,
    title: "Socially - Social Media Platform",
    description: "Full-stack social media with real-time updates, posts, and interactions.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    category: "Full Stack"
  },
  {
    id: 8,
    title: "SleepTracker - Sleep Analytics",
    description: "Health app for sleep pattern analysis with personalized insights.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack"
  },
  {
    id: 9,
    title: "Car Rental Platform - Complete Booking",
    description: "Comprehensive booking system with admin dashboard and authentication.",
    tech: ["Next.js", "Prisma", "Tailwind CSS"],
    category: "Full Stack"
  }
];
export const PROFILE = {
  name: "Huzaifa",
  role: "MERN Stack Developer",
  tagline: "Building responsive websites, custom admin panels, dashboards, ERP systems, and business software.",
  summary: "I am a MERN Stack Developer. I build web applications using React, Tailwind CSS, MongoDB, Express.js, and Node.js. I also know HTML, CSS, PHP, Laravel, Next.js, Angular, and Vue. Beyond standard websites, I specialize in developing custom admin panels, analytical dashboards, ERP systems, and business software.",
  contact: {
    email: "huzaifa77pr@gmail.com",
    phone: "+92 3140407955",
    whatsapp: "https://wa.me/923140407955",
    location: "Pakistan",
    availability: "Open for Jobs / Internships",
    freelance: "Available for Projects",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/muhammad-huzaifa-980bb3339?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  }
};

export const HERO_TITLES = [
  "MERN Stack Developer",
  "React Developer",
  "Backend Developer",
  "ERP Systems Engineer"
];

export const HERO_DESCRIPTIONS = [
  "Specializing in the MERN stack to build scalable, robust, and clean-coded digital products that solve complex problems and drive business growth.",
  "Crafting high-performance user interfaces, administrative dashboards, ERP software, and secure API microservices with modern tools."
];

export const TERMINAL_ABOUT = {
  command: "curl -X GET /api/huzaifa-dev/about",
  lines: [
    "{",
    '  "name": "Huzaifa",',
    '  "role": "MERN Stack Developer",',
    '  "experience": "2+ years",',
    '  "location": "Pakistan",',
    '  "skills": [',
    '    "React", "Tailwind CSS", "MongoDB", "Express.js", "Node.js",',
    '    "HTML5", "CSS3", "PHP", "Laravel", "Next.js",',
    '    "Angular", "Vue.js", "JavaScript", "REST APIs", "Git"',
    "  ],",
    '  "passion": "Building high-performance dashboards, ERP systems, and software solutions.",',
    '  "status": "Available for jobs, internships, and freelancing"',
    "}"
  ]
};

export const SKILL_NODES = [
  { id: "react", label: "React", category: ["frontend", "frameworks"], x: 50, y: 50, color: "#61DAFB", isCenter: true },
  { id: "html", label: "HTML", category: ["frontend"], x: 18, y: 25, color: "#00ED64" },
  { id: "css", label: "CSS", category: ["frontend"], x: 18, y: 45, color: "#00ED64" },
  { id: "tailwind", label: "Tailwind CSS", category: ["frontend", "frameworks"], x: 32, y: 58, color: "#00ED64" },
  { id: "js", label: "JavaScript", category: ["frontend"], x: 35, y: 35, color: "#00ED64" },
  { id: "node", label: "Node.js", category: ["backend"], x: 68, y: 35, color: "#EE9B00" },
  { id: "express", label: "Express", category: ["backend", "frameworks"], x: 82, y: 48, color: "#EE9B00" },
  { id: "mongodb", label: "MongoDB", category: ["backend"], x: 74, y: 65, color: "#EE9B00" },
  { id: "nextjs", label: "Next.js", category: ["frontend", "frameworks"], x: 50, y: 20, color: "#FFFFFF" },
  { id: "angular", label: "Angular", category: ["frontend", "frameworks"], x: 36, y: 15, color: "#DD0031" },
  { id: "vue", label: "Vue.js", category: ["frontend", "frameworks"], x: 64, y: 15, color: "#4FC08D" },
  { id: "php", label: "PHP", category: ["backend"], x: 85, y: 22, color: "#8892BF" },
  { id: "laravel", label: "Laravel", category: ["backend", "frameworks"], x: 93, y: 33, color: "#FF2D20" },
  { id: "git", label: "Git", category: ["tools"], x: 25, y: 80, color: "#38BDF8" },
  { id: "github", label: "GitHub", category: ["tools"], x: 44, y: 80, color: "#38BDF8" },
  { id: "vercel", label: "Vercel", category: ["tools"], x: 62, y: 78, color: "#38BDF8" }
];

export const SKILL_LINKS = [
  { from: "html", to: "css" },
  { from: "html", to: "js" },
  { from: "css", to: "tailwind" },
  { from: "css", to: "js" },
  { from: "js", to: "react" },
  { from: "js", to: "nextjs" },
  { from: "js", to: "angular" },
  { from: "js", to: "vue" },
  { from: "tailwind", to: "react" },
  { from: "nextjs", to: "react" },
  { from: "angular", to: "react" },
  { from: "vue", to: "react" },
  { from: "react", to: "node" },
  { from: "node", to: "express" },
  { from: "node", to: "mongodb" },
  { from: "node", to: "php" },
  { from: "php", to: "laravel" },
  { from: "laravel", to: "mongodb" },
  { from: "express", to: "mongodb" },
  { from: "git", to: "github" },
  { from: "github", to: "vercel" },
  { from: "react", to: "vercel" },
  { from: "nextjs", to: "vercel" },
  { from: "js", to: "github" },
  { from: "tailwind", to: "vercel" }
];

export const PROJECTS = [
  {
    _id: "p-1",
    title: "HATTech Media",
    category: "Business Websites",
    description: "A professional agency website showcase for HATTech Media, delivering digital solutions.",
    imageUrl: "hat.jpg",
    projectUrl: "https://hattechmedia.com/",
    githubUrl: "#"
  },
  {
    _id: "p-2",
    title: "Optimizers LLC",
    category: "Business Websites",
    description: "A modern corporate portal for Optimizers LLC offering software development and business consulting services.",
    imageUrl: "opt.jpg",
    projectUrl: "https://www.optimizersllc.com/",
    githubUrl: "#"
  },
  {
    _id: "p-3",
    title: "The Dome Food",
    category: "E-commerce",
    description: "A customized web ordering catalog and reservation hub for The Dome restaurant.",
    imageUrl: "dom.jpg",
    projectUrl: "https://the-dome-food.vercel.app/",
    githubUrl: "#"
  },
  {
    _id: "p-4",
    title: "Olympus Group LLC",
    category: "Business Websites",
    description: "Corporate hub showcasing business services, portfolios, and contact touchpoints for Olympus Group LLC.",
    imageUrl: "oly.jpg",
    projectUrl: "https://olympas-group-llc.vercel.app/",
    githubUrl: "#"
  },
  {
    _id: "p-5",
    title: "Limosine Renting",
    category: "Business Websites",
    description: "High-end luxury fleet presentation and booking reservation system for Limousine renting services.",
    imageUrl: "limo.jpg",
    projectUrl: "https://fleet-seven-ashy.vercel.app/",
    githubUrl: "#"
  },
  {
    _id: "p-6",
    title: "Brands River Clothing",
    category: "E-commerce",
    description: "A stylish storefront platform for Brands River, showcasing active fashion catalogs and accessories.",
    imageUrl: "brand.jpg",
    projectUrl: "https://brands-river.vercel.app/",
    githubUrl: "#"
  },
  {
    _id: "p-7",
    title: "USA Barber",
    category: "Business Websites",
    description: "Sleek barber shop display displaying styles, groom pricing, and appointment inquiries.",
    imageUrl: "barber.jpg",
    projectUrl: "https://barber-omega-ebon.vercel.app/",
    githubUrl: "#"
  },
  {
    _id: "p-8",
    title: "HNS Legal",
    category: "Business Websites",
    description: "Professional services landing page and counselor database for the HNS Legal lawyer firm.",
    imageUrl: "law.jpg",
    projectUrl: "https://hnslegal.org/",
    githubUrl: "#"
  }
];

export const EDUCATION = [
  
  {
    id: "edu-2",
    degree: "Intermediate in Pre-Medical",
    period: "2019 - 2021",
    status: "Completed",
    gpa: "Marks: 720/1100",
    inst: "Punjab Group of Colleges, Multan",
    tags: ["Biology", "Chemistry", "Physics"]
  },
  {
    id: "edu-3",
    degree: "Matriculation in Science",
    period: "2017 - 2019",
    status: "Completed",
    gpa: "Marks: 800/1100",
    inst: "Science School Multan",
    tags: ["Science", "Mathematics", "Physics"]
  }
];



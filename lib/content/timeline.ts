import type { TimelineItem } from "./types";

export const timeline: TimelineItem[] = [
  {
    year: 2022,
    title: "Computer Science Foundations & Problem Solving",
    headline: "Building core algorithmic skills and C++ practice",
    description:
      "Started CS undergraduate studies at RMSTU. Solved problem sets on Codeforces, LightOJ, and Beecrowd to build strong algorithm and data structure fundamentals in C++.",
    focus: "C++, Data Structures, Algorithms, Problem Solving",
    projects: [
      { title: "Codeforces Problem Archive", category: "Competitive Programming" },
      { title: "LightOJ Solutions", category: "Algorithms" },
      { title: "Beecrowd Repository", category: "C++ Practice" },
    ],
  },
  {
    year: 2023,
    title: "Web Development Practice",
    headline: "Learning web fundamentals and building utility tools",
    description:
      "Learned modern web technologies including JavaScript, React, and backend API basics. Focused on understanding how frontend user interfaces interact with database APIs.",
    focus: "JavaScript, React, HTML/CSS, REST APIs",
    projects: [
      { title: "Frontend Projects & UI Practice", category: "Web Engineering" },
      { title: "REST API Implementations", category: "Backend" },
    ],
  },
  {
    year: 2024,
    title: "Full-Stack Software Development",
    headline: "Building web applications for university needs",
    description:
      "Built full-stack applications using Next.js, Node.js, MongoDB, and authentication protocols. Focused on campus utilities such as archiving past examination question papers.",
    focus: "Next.js, MongoDB, Express, JWT Auth",
    projects: [
      {
        title: "Question Vault RMSTU",
        slug: "question-vault-rmstu",
        category: "University App",
      },
      {
        title: "Library Management System",
        slug: "library-management-system",
        category: "Full-Stack",
      },
      {
        title: "Prize Bond Checker",
        slug: "price-bond-checker",
        category: "Utility Tool",
      },
      {
        title: "IPTV Stream Proxy",
        slug: "personal-isp-iptv-server",
        category: "Networking",
      },
    ],
  },
  {
    year: 2025,
    title: "Real-Time Web & Containerization",
    headline: "Real-time transport tracking, PWAs, and Docker containers",
    description:
      "Built real-time web applications using WebSockets, offline-first news PWAs, Docker containerization, and operating system scheduling implementations.",
    focus: "WebSockets, PWA, Docker, Operating Systems",
    projects: [
      {
        title: "RMSTU Transport Management System",
        slug: "rmstu-bus-management-system",
        category: "Full-Stack Web App",
      },
      {
        title: "Offline-First News PWA",
        slug: "pwa-offline-news-app",
        category: "Web Application",
      },
      {
        title: "Students Attendance Tracker",
        slug: "students-attendance-tracker",
        category: "Utility Tool",
      },
      {
        title: "Docker Setup for Next.js 15",
        slug: "docker-nextjs-15",
        category: "DevOps",
      },
    ],
  },
  {
    year: 2026,
    title: "Computer Vision Research & Web Utilities",
    headline: "Undergraduate thesis in computer vision and active web platforms",
    description:
      "Conducted thesis research benchmarking vision transformers for zero-label cell microscopy anomaly detection. Simultaneously built production platforms like CGPA Buddy and Notice Hub.",
    focus: "PyTorch, Computer Vision, DINOv2, Next.js 16",
    projects: [
      {
        title: "Zero-Label Microscopy Anomaly Detection",
        slug: "zero-label-microscopy-thesis",
        category: "Vision Thesis Research",
      },
      {
        title: "CGPA Buddy",
        slug: "cgpa-buddy",
        category: "Web Application",
      },
      {
        title: "RMSTU Notice Hub Reimagined",
        slug: "rmstu-notice-hub-reimagined",
        category: "Web Application",
      },
      {
        title: "CSE Department Tour 2026",
        slug: "cse-department-tour-2026",
        category: "University App",
      },
    ],
  },
];

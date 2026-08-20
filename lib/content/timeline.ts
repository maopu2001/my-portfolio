import type { TimelineItem } from "./types";

export const timeline: TimelineItem[] = [
  {
    year: 2022,
    title: "Computer Science Foundations & Problem Solving",
    headline: "Building core algorithmic thinking and system fundamentals",
    description:
      "Started university studies at RMSTU. Dedicated time to fundamental data structures, C++ programming, memory management, and competitive problem solving on Codeforces, LightOJ, and Beecrowd.",
    focus: "C++, Data Structures, Algorithms, Problem Solving",
    projects: [
      { title: "Codeforces Problem Archive", category: "Competitive Programming" },
      { title: "LightOJ Problem Solutions", category: "Algorithms" },
      { title: "Beecrowd Problem Repository", category: "C++ Foundations" },
    ],
  },
  {
    year: 2023,
    title: "Web Development & Practical Engineering",
    headline: "Transitioning theoretical concepts into functional web applications",
    description:
      "Explored modern web development with JavaScript, React, and backend API design. Began crafting custom tools and learning how frontend state interacts with backend database models.",
    focus: "JavaScript, React, HTML/CSS, REST APIs",
    projects: [
      { title: "Web Frontend Fundamentals", category: "Web Development" },
      { title: "REST API Design Exercises", category: "Backend" },
    ],
  },
  {
    year: 2024,
    title: "Full-Stack Software & University Applications",
    headline: "Building production software for real campus problems",
    description:
      "Shifted to building complete full-stack web applications using Next.js, Node.js, MongoDB, and authentication protocols. Focused on real campus utility needs such as exam question archiving.",
    focus: "Next.js, MongoDB, Express, JWT Auth, Utility Tools",
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
    title: "Real-Time Systems, PWA & Infrastructure",
    headline: "Engineering scalable real-time systems, PWAs, and DevOps containers",
    description:
      "Investigated real-time communication protocols (WebSockets), progressive web applications with offline capabilities, containerization using Docker, and operating system scheduling principles.",
    focus: "WebSockets, PWA, Docker, Operating Systems, Real-Time Fleet Tracking",
    projects: [
      {
        title: "RMSTU Transport Management System",
        slug: "rmstu-bus-management-system",
        category: "Full-Stack Software",
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
    title: "Computer Vision Research, Thesis & Advanced Applications",
    headline: "Integrating machine learning research with production-grade engineering",
    description:
      "Conducted undergraduate thesis research benchmarking vision transformers and autoencoder models for zero-label cell microscopy anomaly detection. Simultaneously built production web platforms like CGPA Buddy and Notice Hub.",
    focus: "PyTorch, Computer Vision, DINOv2, Vision Transformers, Next.js 16",
    projects: [
      {
        title: "Zero-Label Microscopy Anomaly Detection",
        slug: "zero-label-microscopy-thesis",
        category: "AI / Vision Research",
      },
      {
        title: "CGPA Buddy",
        slug: "cgpa-buddy",
        category: "Web Utility",
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

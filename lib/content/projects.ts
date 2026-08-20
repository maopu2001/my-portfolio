import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "cgpa-buddy",
    title: "CGPA Buddy",
    tagline: "Academic GPA/CGPA calculator with department presets & PDF transcript export.",
    description:
      "A utility web application designed for university students to calculate semester GPA and overall CGPA using predefined department course structures or custom custom inputs.",
    longDescription:
      "CGPA Buddy was built to solve a recurring friction for university students: calculating semester GPA accurately when course credits and grading scales vary between departments. It offers three distinct workflows—predefined RMSTU department structures, a fully customizable semester/course builder, and a fast simple calculator.",
    category: "web",
    categoryLabel: "Web Application / Utility",
    year: 2026,
    status: "Production / Active",
    featured: true,
    displayOrder: 1,
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Recharts",
      "@react-pdf/renderer",
      "Zod",
    ],
    github: "https://github.com/maopu2001/cgpa_buddy",
    demo: "https://cgpa-buddy.maopu.com.bd",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Students at RMSTU lacked a single reliable calculator tailored to department-specific grading criteria and semester credit weights. Generic GPA tools required manual course entry every time.",
    features: [
      "Department-specific presets with pre-configured semester courses and credit breakdown",
      "Custom calculator mode allowing arbitrary semesters, course names, and theory/lab credit split",
      "Simple quick mode for rapid cumulative CGPA projection",
      "Interactive analytics dashboard showing GPA trends across completed semesters using Recharts",
      "Server-side transcript-style PDF generator with Zod payload validation and client download",
      "LocalStorage persistence for immediate resumption without user account requirements",
    ],
    architecture:
      "Built on Next.js 16 App Router. Client-side state managed via local storage hooks for zero-latency calculations. PDF summaries are processed via a server route POST handler (/api/pdf) that generates vector PDF buffers using @react-pdf/renderer.",
    challenges: [
      "Designing a state model flexible enough to handle fixed department templates alongside dynamic user-created semester grids.",
      "Ensuring precise IEEE floating point rounding alignment for standard university 4.00 grading scales.",
      "Optimizing PDF rendering performance for instant transcript exports across low-bandwidth mobile connections.",
    ],
    lessons: [
      "Utility apps succeed when friction is minimized—no mandatory authentication for basic tools dramatically increases adoption.",
      "Separating client UI state from data validation schemas (Zod) makes server PDF generation reliable.",
    ],
    relatedProjects: ["question-vault-rmstu", "rmstu-notice-hub-reimagined"],
  },

  {
    slug: "question-vault-rmstu",
    title: "Question Vault RMSTU",
    tagline: "Digital repository for archiving and searching university exam question papers.",
    description:
      "A centralized web platform for university students and faculty to archive, search, and manage semester mid-term and final examination questions.",
    longDescription:
      "Question Vault solves the problem of lost physical question papers during semester preparation. It provides structured indexing by faculty, department, degree program, course, and exam type (Mid vs. Final). Supports multi-role administrative workflows to ensure uploaded papers are reviewed.",
    category: "university",
    categoryLabel: "Web Application / University",
    year: 2024,
    status: "Production",
    featured: true,
    displayOrder: 2,
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "ImageBB API",
      "Nodemailer",
    ],
    github: "https://github.com/maopu2001/Question-Vault-Rmstu",
    demo: "https://question-vault-rmstu.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Exam preparation relied on fragmented physical copies or informal chat groups, making it difficult for junior students to access historical question papers across subjects.",
    features: [
      "Role-based access control (Super Admin, Admin, Student)",
      "Granular classification: Faculty → Department → Degree → Course → Exam Type",
      "Instant fuzzy search and filters by year, semester, and course code",
      "Exam question bundling to download combined mid/final sets",
      "Image upload integration via ImageBB API with fallback storage",
      "JWT-authenticated administrative dashboard for approving student uploads",
    ],
    architecture:
      "Next.js App Router frontend with MongoDB document database. Document schemas represent hierarchical academic structures and question metadata. Media hosted on image CDNs with secure authorization tokens.",
    challenges: [
      "Structuring MongoDB schemas to handle changing academic course codes without breaking historical question links.",
      "Implementing multi-tier role verification (Super Admin, Admin, Student) across Next.js API routes.",
    ],
    lessons: [
      "Data modeling for academic structures needs explicit revision control.",
      "Simple image hosting pipelines reduce database storage costs significantly.",
    ],
    relatedProjects: ["cgpa-buddy", "rmstu-bus-management-system"],
  },

  {
    slug: "rmstu-bus-management-system",
    title: "RMSTU Transport Management System",
    tagline: "Real-time fleet tracking, schedule management, and requisition system.",
    description:
      "A full-stack campus transport management system featuring real-time vehicle GPS updates, trip control for drivers, and requisition approvals for university events.",
    longDescription:
      "The RMSTU Transport System addresses campus transit uncertainty. It connects students, drivers, and transport administrators into one unified platform. Drivers broadcast GPS locations during active routes, students track bus arrival times, and admins handle vehicle assignments and trip requisitions.",
    category: "software",
    categoryLabel: "Full-Stack Web Application",
    year: 2025,
    status: "Completed",
    featured: true,
    displayOrder: 3,
    technologies: [
      "Next.js",
      "MongoDB",
      "WebSockets",
      "NextAuth.js",
      "Tailwind CSS",
      "Leaflet / Maps API",
    ],
    github: "https://github.com/maopu2001/rmstu-transport-management-system",
    demo: "https://rmstu-tms.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Students missed university buses due to lack of visibility into vehicle schedules and live delays on hilly mountain transit routes in Rangamati.",
    features: [
      "Live GPS location broadcasting from driver mobile devices",
      "Real-time route maps with bus markers and ETA estimates for students",
      "Admin fleet control panel for vehicle maintenance, driver assignments, and trip schedules",
      "Special bus requisition workflow with administrative approval tracking",
      "Status alerts (On Schedule, Delayed, Breakdown, Offline)",
      "NextAuth.js authentication with role-based routing",
    ],
    architecture:
      "Built with Next.js and MongoDB. Uses WebSocket connections for streaming low-latency driver GPS coordinate changes to client Leaflet maps.",
    challenges: [
      "Handling intermittent mobile cellular data signals along mountain transport corridors without dropping location updates.",
      "Optimizing WebSocket broadcast frequencies to prevent battery drain on mobile browser driver devices.",
    ],
    lessons: [
      "Real-time systems require fallback polling when WebSocket connections drop.",
      "User role authorization must be verified at the database query level, not just in UI wrappers.",
    ],
    relatedProjects: ["question-vault-rmstu", "pwa-offline-news-app"],
  },

  {
    slug: "zero-label-microscopy-thesis",
    title: "Zero-Label Microscopy Anomaly Detection",
    tagline: "Benchmarking CAE-IF, SQAFormer & DINOv2 for cellular anomaly detection.",
    description:
      "Undergraduate research thesis evaluating vision transformers and autoencoder architectures on 5,239 frames of unlabelled phase-contrast microscopy images.",
    longDescription:
      "Traditional automated quality control in live-cell microscopy relies on pixel-reconstruction autoencoders. Our research benchmarked CAE-IF, SQAFormer, and DINOv2 models on the LIVECell dataset, uncovering a critical failure mode: catastrophic score sign inversion (AUROC = 0.0151) in standard MSE models caused by optical defocus blur.",
    category: "computer-vision",
    categoryLabel: "Computer Vision / AI Research",
    year: 2026,
    status: "Undergraduate Thesis",
    featured: true,
    displayOrder: 4,
    technologies: [
      "PyTorch 2.2",
      "Python 3.12",
      "DINOv2",
      "SQAFormer",
      "CAE-IF",
      "OpenCV",
      "LIVECell Dataset",
    ],
    github: "https://github.com/maopu2001/zero-label-microscopy-thesis",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Unlabelled cell microscopy anomaly detection models often fail silently when corrupted or blurry images produce lower reconstruction error than detailed, healthy cell textures.",
    features: [
      "Benchmarking 3 core model paradigms (CAE-IF, SQAFormer, DINOv2 feature embeddings) across 5,239 LIVECell frames",
      "Discovery and empirical validation of catastrophic score sign inversion in pixel-reconstruction loss metrics",
      "Feature distribution extraction using self-supervised DINOv2 vision transformer backbones",
      "Zero-shot evaluation metrics pipeline including AUROC, AUPR, and Mahalanobis distance scoring",
      "Visualization suite for patch-level feature anomaly heatmaps",
    ],
    architecture:
      "Modular PyTorch framework. Input phase-contrast frames are processed through DINOv2 ViT feature extractors. Anomaly scoring uses distance metrics on latent space manifolds rather than pixel MSE reconstruction.",
    challenges: [
      "Managing high-dimensional feature embeddings across 8 distinct cell lines without supervision.",
      "Analyzing why traditional MSE loss favors smooth blurred corruptions over sharp cell membranes.",
    ],
    lessons: [
      "Pixel-level reconstruction error is a dangerous proxy for visual anomaly detection in complex biological domain images.",
      "Self-supervised vision foundation models provide far higher feature invariance than task-specific trained autoencoders.",
    ],
    relatedProjects: ["cgpa-buddy"],
  },

  {
    slug: "rmstu-notice-hub-reimagined",
    title: "RMSTU Notice Hub Reimagined",
    tagline: "High-speed server-rendered portal for official university notices and documents.",
    description:
      "A fast, responsive web portal that aggregates, parses, and formats official university announcements into a searchable, dark-mode accessible reader.",
    longDescription:
      "RMSTU Notice Hub scrapes and structures official university notice announcements, offering instant search, category filtering (Academic, News, Events, General), embedded PDF viewing, and offline caching.",
    category: "web",
    categoryLabel: "Web Application",
    year: 2026,
    status: "Completed",
    featured: true,
    displayOrder: 5,
    technologies: [
      "React 19",
      "TanStack Start",
      "TanStack Router",
      "TanStack Query",
      "Cheerio",
      "Tailwind CSS v4",
      "react-pdf",
    ],
    github: "https://github.com/maopu2001/rmstu_notice_hub_reimagined",
    demo: "https://rmstu-notice-hub-reimagined.vercel.app",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Official university web notices were slow to load on mobile networks, lacked search capabilities, and required downloading raw PDF files manually for every update.",
    features: [
      "Server-side web scraping and HTML parsing using Cheerio",
      "Category navigation across Academic, Events, News, and General notices",
      "Integrated canvas-based inline PDF reader via react-pdf",
      "Zero-flash dark/light mode toggle with persistent state",
      "Route prefetching and pagination using TanStack Router",
    ],
    architecture:
      "Built with TanStack Start SSR architecture. Server endpoints query university notice portals, extract metadata, and cache responses via TanStack Query.",
    challenges: [
      "Parsing inconsistent legacy HTML structures across different university department notice posts.",
      "Ensuring fast inline PDF rendering on mobile viewports.",
    ],
    lessons: [
      "Server-side content transformation drastically improves UX for unstructured public datasets.",
      "TanStack Start offers precise loader control for data-heavy applications.",
    ],
    relatedProjects: ["cgpa-buddy", "cse-department-tour-2026"],
  },

  {
    slug: "cse-department-tour-2026",
    title: "RMSTU CSE Department Tour 2026",
    tagline: "Bilingual web portal for university tour registration, itinerary, and payments.",
    description:
      "An official event web application for the Sundarban tour organized by the Department of CSE, RMSTU.",
    longDescription:
      "Designed for students and faculty attending the annual CSE Department tour. Includes full bilingual support (English & Bengali), itinerary schedule, budget breakdowns, bKash/Bank payment details, and registration forms.",
    category: "university",
    categoryLabel: "Web Application / University",
    year: 2026,
    status: "Completed",
    featured: true,
    displayOrder: 6,
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Lucide React",
      "next-themes",
    ],
    github: "https://github.com/maopu2001/CSE_Department_Tour_2026",
    demo: "https://cse-department-tour-2026.vercel.app",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Tour coordination across multiple student batches required repeating budget details, payment instructions, and scheduling across endless group chat messages.",
    features: [
      "Instant English and Bengali bilingual content switcher",
      "Detailed trip itinerary timeline and safety guidelines",
      "Payment destination cards with one-click copy functionality for bKash and Bank accounts",
      "Interactive promotional flyer modal",
      "Google Forms pre-registration integration",
    ],
    architecture:
      "Next.js App Router application using localized content dictionaries for zero-re-render language switching.",
    challenges: [
      "Creating a responsive layout that presents complex financial breakdowns cleanly on mobile screens.",
    ],
    lessons: [
      "Single-purpose event web apps dramatically reduce coordination overhead for student leadership.",
    ],
    relatedProjects: ["rmstu-notice-hub-reimagined"],
  },

  {
    slug: "pwa-offline-news-app",
    title: "Offline-First News PWA",
    tagline: "Progressive web application with service-worker offline article caching.",
    description:
      "A news reader application engineered with offline-first PWA architecture for low-connectivity environments.",
    longDescription:
      "Developed for Web Engineering Lab course (CSE-3106) at RMSTU. Uses custom service workers and IndexedDB storage to cache article headlines, images, and full text for offline reading.",
    category: "web",
    categoryLabel: "Web Application / Lab Project",
    year: 2025,
    status: "Completed",
    featured: false,
    displayOrder: 7,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "PWA Service Worker",
      "IndexedDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/maopu2001/pwa-offline-news-app",
    demo: "https://pwa-offline-news.vercel.app",
    problem:
      "Mobile news readers fail completely in remote areas with unstable network connectivity.",
    features: [
      "Automatic background caching of fetched news articles",
      "Service worker interceptor for seamless offline fallback",
      "Add to Home Screen (A2HS) PWA manifest support",
      "Background sync when connectivity is restored",
    ],
    challenges: [
      "Cache invalidation and state synchronization between browser Cache API and IndexedDB.",
    ],
    lessons: [
      "Offline UX requires clear network state indicators so users know when data is cached.",
    ],
  },

  {
    slug: "students-attendance-tracker",
    title: "Students Attendance Tracker",
    tagline: "Web utility for university course instructors to record and analyze attendance.",
    description:
      "A fast frontend application for logging student attendance across course sections, calculating attendance percentages, and identifying threshold alerts.",
    category: "tool",
    categoryLabel: "Utility / Software Tool",
    year: 2025,
    status: "Completed",
    featured: false,
    displayOrder: 8,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/maopu2001/StudentsAttendanceTracker",
    demo: "https://students-attendance-tracker.vercel.app",
    problem:
      "Manual paper-based attendance registers make calculating eligibility percentages at semester end tedious and prone to human error.",
    features: [
      "Grid-based student attendance ledger",
      "Automatic percentage calculation against minimum attendance rules",
      "Exportable summary reports",
    ],
    challenges: ["Optimizing large grid inputs for fast keyboard navigation."],
    lessons: ["Keyboard navigation shortcuts double data entry speed in utility tools."],
  },

  {
    slug: "error-detection-calculator",
    title: "Computer Networks Error Detection Tool",
    tagline: "Interactive simulator for Parity, CRC, and Hamming code algorithms.",
    description:
      "An educational computer science utility developed to simulate and visualize bit-level error detection and correction algorithms.",
    category: "tool",
    categoryLabel: "Utility / CS Tool",
    year: 2025,
    status: "Completed",
    featured: false,
    displayOrder: 9,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/maopu2001/error-detection-calculator",
    demo: "https://error-detection-calculator.vercel.app",
    problem:
      "Students studying Computer Networks often struggle to visualize binary polynomial division (CRC) and parity bit calculations step-by-step.",
    features: [
      "Single bit parity & 2D block parity calculator",
      "Cyclic Redundancy Check (CRC) binary division step visualization",
      "Hamming code error detection and 1-bit correction positioning",
    ],
    challenges: ["Displaying intermediate steps of binary arithmetic clearly."],
    lessons: ["Visualizing step-by-step execution builds deep theoretical intuition."],
  },

  {
    slug: "price-bond-checker",
    title: "Bangladesh Prize Bond Checker",
    tagline: "Automated tool for batch checking Bangladesh government prize bond numbers.",
    description:
      "A practical web utility that allows users to store prize bond numbers and automatically match them against official draw result lists.",
    category: "tool",
    categoryLabel: "Web Utility",
    year: 2024,
    status: "Completed",
    featured: false,
    displayOrder: 10,
    technologies: ["JavaScript", "Web Storage API", "Tailwind CSS"],
    github: "https://github.com/maopu2001/priceBondChecker",
    demo: "https://price-bond-checker.vercel.app",
    problem:
      "Manually cross-referencing prize bond numbers against multi-page PDF draw results is tedious and error-prone.",
    features: [
      "Batch entry of prize bond series and numbers",
      "Instant matching against historical draw databases",
      "Local browser storage persistence",
    ],
    challenges: ["Parsing unstructured draw result documents."],
    lessons: ["Solving small personal utility problems builds practical frontend engineering skills."],
  },

  {
    slug: "library-management-system",
    title: "Full-Stack Library Management System",
    tagline: "Node.js & Express REST backend with MongoDB database for cataloging books.",
    description:
      "A traditional full-stack web application built to manage book inventories, student borrowing records, and return due dates.",
    category: "software",
    categoryLabel: "Full-Stack Web Application",
    year: 2024,
    status: "Completed",
    featured: false,
    displayOrder: 11,
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "HTML/CSS"],
    github: "https://github.com/maopu2001/LibraryManagementSystem",
    demo: "https://librarymanagementsystem-mauve.vercel.app",
    problem:
      "Manual register keeping for book loans resulted in misplaced records and unknown stock availability.",
    features: [
      "CRUD operations for books, authors, and categories",
      "Student account authentication and borrow request tracking",
      "Admin panel for managing book stock and fine calculations",
    ],
    challenges: ["Designing relational constraints using Mongoose object references."],
    lessons: ["Building raw Express/MongoDB backends teaches fundamental HTTP lifecycle concepts."],
  },
];

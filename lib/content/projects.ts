import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "cgpa-buddy",
    title: "CGPA Buddy",
    tagline: "GPA/CGPA calculator tailored for university department credit structures.",
    description:
      "I built CGPA Buddy to make semester-wise CGPA calculation easier for RMSTU students, eliminating manual course entry by providing pre-configured department course structures.",
    longDescription:
      "I built CGPA Buddy to solve a practical issue for students at RMSTU: calculating semester GPA accurately when course credits and grading rules differ across departments. Instead of forcing users to re-type course names and credit weights every semester, it provides department presets alongside a custom structure builder and quick cumulative calculator.",
    category: "web",
    categoryLabel: "Web Application / Utility",
    year: 2026,
    status: "Active Production",
    featured: true,
    displayOrder: 1,
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Recharts",
      "@react-pdf/renderer",
      "Zod",
    ],
    github: "https://github.com/maopu2001/cgpa_buddy",
    demo: "https://cgpa-buddy.maopu.com.bd",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Students at RMSTU had no single tool configured for department-specific credit structures and theory/lab splits, requiring repetitive manual entry on generic calculator websites.",
    features: [
      "RMSTU department presets with pre-filled semester course lists and credit weights",
      "Custom calculator mode for building dynamic semester and course grids",
      "Simple calculator for quick cumulative GPA estimation",
      "GPA trend chart visualizations built with Recharts",
      "Server-side transcript PDF export via Next.js route handler and @react-pdf/renderer",
      "Local browser storage persistence without requiring account registration",
    ],
    architecture:
      "Built with Next.js 16 App Router. State is maintained locally in the browser for instant calculations, while PDF generation runs on a server POST route (/api/pdf) using Zod validation schemas.",
    challenges: [
      "Structuring state to handle both fixed department templates and arbitrary user-defined semester grids.",
      "Ensuring IEEE floating-point precision matches the university's official 4.00 grading scale.",
    ],
    lessons: [
      "Removing mandatory user sign-up increases utility app usage.",
      "Validating PDF payloads with Zod on the server prevents broken document renders.",
    ],
    relatedProjects: ["question-vault-rmstu", "rmstu-notice-hub-reimagined"],
  },

  {
    slug: "question-vault-rmstu",
    title: "Question Vault RMSTU",
    tagline: "Digital archive for searching and organizing university exam question papers.",
    description:
      "I developed Question Vault to centralize historical mid-term and final exam question papers for RMSTU students, categorized by faculty, department, and course.",
    longDescription:
      "Question Vault replaces informal chat groups and lost physical question copies with a structured digital archive. It organizes exam papers across faculties, departments, degrees, and courses, featuring search, paper bundling, and role-based access for student uploads and admin approvals.",
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
      "Students lacked a centralized repository for past examination papers, making exam revision dependent on scattered physical notes or senior students.",
    features: [
      "Role-based authorization (Super Admin, Admin, Student)",
      "Academic hierarchy: Faculty → Department → Degree → Course → Exam Type",
      "Search and filtering by year, semester, and course code",
      "Exam question bundling for single-click mid/final downloads",
      "Image upload integration using ImageBB API",
      "Admin moderation panel for reviewing student uploads",
    ],
    architecture:
      "Built with Next.js App Router and MongoDB. Question metadata and academic hierarchy are stored in MongoDB collections, while uploaded images are hosted via ImageBB API.",
    challenges: [
      "Designing document schemas that accommodate changing course codes without breaking historical paper links.",
      "Securing administrative API endpoints with JWT role verification.",
    ],
    lessons: [
      "Academic metadata needs explicit schema design for long-term consistency.",
      "Offloading image storage to external image CDNs keeps database size low.",
    ],
    relatedProjects: ["cgpa-buddy", "rmstu-bus-management-system"],
  },

  {
    slug: "rmstu-bus-management-system",
    title: "RMSTU Transport Management System",
    tagline: "Real-time bus tracking, route schedules, and trip requisitions.",
    description:
      "I built this transport management system to provide real-time bus location tracking, driver trip logs, and administrative vehicle management for RMSTU campus transit.",
    longDescription:
      "Designed for students, drivers, and transport officers at RMSTU. Drivers stream live GPS coordinates during active trips, students view live bus positions on a map, and admins handle vehicle schedules and special trip requisitions.",
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
      "Leaflet",
    ],
    github: "https://github.com/maopu2001/rmstu-transport-management-system",
    demo: "https://rmstu-tms.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    problem:
      "Students frequently missed campus buses along hilly mountain routes in Rangamati due to unpredictable delays and zero schedule visibility.",
    features: [
      "Live GPS tracking broadcasted from driver mobile browsers",
      "Interactive map with real-time bus positions and route stops",
      "Admin dashboard for fleet allocation, schedule updates, and driver assignments",
      "Bus requisition portal for special university events",
      "Real-time trip status alerts (On Schedule, Delayed, Breakdown, Offline)",
      "Role-based authentication using NextAuth.js",
    ],
    architecture:
      "Full-stack Next.js application backed by MongoDB. Uses WebSocket channels to stream driver GPS coordinates directly to student map views.",
    challenges: [
      "Managing intermittent cellular data connectivity along mountain transport routes.",
      "Balancing WebSocket update intervals to prevent mobile battery drain.",
    ],
    lessons: [
      "Real-time tracking systems require polling fallbacks for weak network conditions.",
      "Database queries must enforce authorization checks independently of UI views.",
    ],
    relatedProjects: ["question-vault-rmstu", "pwa-offline-news-app"],
  },

  {
    slug: "zero-label-microscopy-thesis",
    title: "Zero-Label Microscopy Anomaly Detection",
    tagline: "Benchmarking CAE-IF, SQAFormer & DINOv2 for cell anomaly detection.",
    description:
      "My undergraduate thesis benchmarks vision transformers and reconstruction autoencoders on 5,239 unlabelled phase-contrast cell microscopy frames from the LIVECell corpus.",
    longDescription:
      "Automated quality control in live-cell microscopy often relies on pixel-reconstruction autoencoders. My thesis benchmarked CAE-IF, SQAFormer, and DINOv2 models on LIVECell images, identifying a key limitation: pixel reconstruction models suffer from score sign inversion (AUROC = 0.0151) because optical blur corruptions are paradoxically easier to reconstruct than detailed cell structures.",
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
      "Pixel-reconstruction autoencoders fail on microscopy anomaly detection when corrupted images yield lower reconstruction error than sharp, high-contrast healthy cell membranes.",
    features: [
      "Benchmarking 3 model paradigms (CAE-IF, SQAFormer, DINOv2 ViT embeddings) across 5,239 LIVECell frames",
      "Empirical identification of catastrophic score sign inversion in reconstruction loss metrics",
      "Feature extraction using self-supervised DINOv2 vision transformer backbones",
      "Zero-shot metric evaluation including AUROC, AUPR, and Mahalanobis distance scoring",
      "Anomaly visualization maps for cell image patches",
    ],
    architecture:
      "PyTorch benchmarking pipeline. Cell frames pass through DINOv2 ViT backbones, and anomaly scoring is computed via latent feature space distances rather than pixel reconstruction error.",
    challenges: [
      "Handling high-dimensional embeddings across 8 distinct cell lines without supervision.",
      "Analyzing why mean squared error favors smooth blurred artifacts over sharp cell textures.",
    ],
    lessons: [
      "Pixel MSE reconstruction error is an unreliable metric for biological visual anomaly detection.",
      "Self-supervised vision foundation models capture structure far better than task-specific trained autoencoders.",
    ],
    relatedProjects: ["cgpa-buddy"],
  },

  {
    slug: "rmstu-notice-hub-reimagined",
    title: "RMSTU Notice Hub Reimagined",
    tagline: "Server-rendered portal for official university announcements.",
    description:
      "I built RMSTU Notice Hub to provide a fast, searchable portal for university announcements with category filters and inline PDF viewing.",
    longDescription:
      "Official university notices were previously posted across scattered web pages as raw PDF links. I built Notice Hub using TanStack Start to scrape, structure, and render announcements into a clean, searchable interface.",
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
      "University notice pages loaded slowly on mobile networks, lacked search capabilities, and required opening external PDF downloads for simple updates.",
    features: [
      "Server-side scraping and HTML parsing using Cheerio",
      "Notice categorization across Academic, Events, News, and General",
      "Inline PDF document viewing using react-pdf",
      "Theme toggle with persistent local storage",
      "Route prefetching and pagination with TanStack Router",
    ],
    architecture:
      "Built on TanStack Start. Server functions scrape official university notice feeds, extract titles and document attachments, and cache results with TanStack Query.",
    challenges: [
      "Parsing non-standard legacy HTML across different department posts.",
      "Rendering inline PDFs smoothly on mobile browsers.",
    ],
    lessons: [
      "Server-side scraping and caching significantly improve access to unstructured public data.",
    ],
    relatedProjects: ["cgpa-buddy", "cse-department-tour-2026"],
  },

  {
    slug: "cse-department-tour-2026",
    title: "RMSTU CSE Department Tour 2026",
    tagline: "Bilingual web portal for tour registration and payment details.",
    description:
      "I built this web application for the Sundarban tour organized by the CSE Department at RMSTU, featuring bilingual content, schedules, and payment info.",
    longDescription:
      "Coordinating the department tour required sharing schedules, guidelines, and bKash/Bank payment details. I built a dedicated bilingual web app so students and faculty could access all information and register easily.",
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
      "Tour information was lost in messaging groups, leading to repetitive questions regarding budget breakdowns, bank numbers, and registration links.",
    features: [
      "Bilingual English and Bengali content toggle",
      "Tour itinerary timeline and travel guidelines",
      "Payment account cards with one-click text copy for bKash and Bank accounts",
      "Tour promotional poster modal view",
      "Google Forms pre-registration integration",
    ],
    architecture:
      "Next.js App Router app using lightweight client dictionary state for instant language switching.",
    challenges: [
      "Designing clean financial table views readable on small mobile viewports.",
    ],
    lessons: [
      "A simple dedicated event page eliminates repetitive coordination questions in student groups.",
    ],
    relatedProjects: ["rmstu-notice-hub-reimagined"],
  },

  {
    slug: "pwa-offline-news-app",
    title: "Offline-First News PWA",
    tagline: "Progressive web application with service-worker article caching.",
    description:
      "I built an offline-first news reader PWA for Web Engineering Lab (CSE-3106) to allow reading articles without an active internet connection.",
    longDescription:
      "Built using custom service workers and IndexedDB. Articles fetched online are cached locally so users can continue reading during network disconnections.",
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
      "Mobile web readers stop functioning completely in areas with weak cellular coverage.",
    features: [
      "Automatic background caching of fetched news stories",
      "Service worker network interceptor for offline fallback",
      "PWA Web App Manifest for home screen installation",
    ],
    challenges: [
      "Managing cache state sync between browser Cache API and IndexedDB.",
    ],
    lessons: [
      "Offline applications require clear visual indicators so users know content is cached.",
    ],
  },

  {
    slug: "students-attendance-tracker",
    title: "Students Attendance Tracker",
    tagline: "Web utility for logging and calculating student course attendance.",
    description:
      "I built a frontend attendance tracker to help instructors record class attendance, calculate eligibility percentages, and flag low attendance.",
    category: "tool",
    categoryLabel: "Utility Tool",
    year: 2025,
    status: "Completed",
    featured: false,
    displayOrder: 8,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/maopu2001/StudentsAttendanceTracker",
    demo: "https://students-attendance-tracker.vercel.app",
    problem:
      "Calculating exam eligibility percentages manually from paper attendance sheets is slow and error-prone.",
    features: [
      "Grid-based student attendance register",
      "Automatic attendance percentage calculation",
      "Exportable summary data",
    ],
    challenges: ["Optimizing data grid inputs for rapid keyboard entry."],
    lessons: ["Keyboard shortcuts significantly improve data entry tools."],
  },

  {
    slug: "error-detection-calculator",
    title: "Computer Networks Error Detection Tool",
    tagline: "Interactive simulator for Parity, CRC, and Hamming code algorithms.",
    description:
      "I created an interactive simulator to visualize bit-level error detection and correction algorithms studied in Computer Networks.",
    category: "tool",
    categoryLabel: "CS Utility Tool",
    year: 2025,
    status: "Completed",
    featured: false,
    displayOrder: 9,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/maopu2001/error-detection-calculator",
    demo: "https://error-detection-calculator.vercel.app",
    problem:
      "Understanding binary polynomial division in CRC and parity bit calculations is easier when intermediate steps are visible.",
    features: [
      "Single and 2D block parity calculator",
      "CRC binary division step-by-step breakdown",
      "Hamming code error location and 1-bit correction",
    ],
    challenges: ["Formatting intermediate binary division steps cleanly on screen."],
    lessons: ["Step-by-step visualizations help solidify computer science concepts."],
  },

  {
    slug: "price-bond-checker",
    title: "Bangladesh Prize Bond Checker",
    tagline: "Web tool for batch checking government prize bond numbers.",
    description:
      "I built a tool to store prize bond numbers locally and automatically check them against draw result databases.",
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
      "Checking multi-page prize bond result lists manually line-by-line takes considerable time.",
    features: [
      "Batch entry of bond series and numbers",
      "Automatic matching against official draw results",
      "Local browser storage persistence",
    ],
    challenges: ["Parsing unstructured draw result documents."],
    lessons: ["Building simple tools for personal tasks develops solid web fundamentals."],
  },

  {
    slug: "library-management-system",
    title: "Full-Stack Library Management System",
    tagline: "Node.js & Express REST API with MongoDB for managing book loans.",
    description:
      "I built a RESTful full-stack application to track book inventory, student loans, and return dates.",
    category: "software",
    categoryLabel: "Full-Stack Application",
    year: 2024,
    status: "Completed",
    featured: false,
    displayOrder: 11,
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "HTML/CSS"],
    github: "https://github.com/maopu2001/LibraryManagementSystem",
    demo: "https://librarymanagementsystem-mauve.vercel.app",
    problem:
      "Paper-based book loan registers resulted in misplaced records and unclear stock availability.",
    features: [
      "Book and category CRUD management",
      "Student authentication and loan requests",
      "Admin stock control and return date tracking",
    ],
    challenges: ["Structuring relational data using Mongoose schemas."],
    lessons: ["Building custom REST backends clarifies HTTP request cycles."],
  },
];

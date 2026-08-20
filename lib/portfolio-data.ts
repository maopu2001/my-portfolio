export type NavigationItem = {
  label: string;
  href: string;
  shortLabel?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type FutureGoal = {
  title: string;
  points: string[];
};

export type Project = {
  title: string;
  image: string;
  imageAlt: string;
  stack: string[];
  repository: string;
  demo: string;
  problem: string;
  approach: string;
  learnings: string[];
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = {
  github: "https://github.com/maopu2001",
  linkedin: "https://www.linkedin.com/in/your-linkedin",
  email: "mailto:your-email@example.com",
};

export const heroTaglines = [
  "Building systems. Understanding theory. Exploring intelligence.",
  "Web Developer today. Researcher in progress. Professor in the making.",
  "From code to concepts - engineering, theory, and research.",
];

export const heroIntro =
  "I am a CSE undergraduate focused on building real-world web systems while developing a deep understanding of computer science and mathematics. I aim to bridge engineering + theory + research.";

export const homePillars = [
  {
    title: "Engineering",
    body: "Building fullstack products with practical system design, deployment discipline, and user-first thinking.",
  },
  {
    title: "Theory",
    body: "Studying algorithms, operating systems, databases, and networks to understand why software behaves the way it does.",
  },
  {
    title: "Research",
    body: "Applying mathematics and computation to computer vision and biomedical imaging questions with measurable impact.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Engineering",
    items: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "Next.js, Vite",
      "Fullstack System Design",
      "REST APIs, Authentication, Deployment",
    ],
  },
  {
    title: "Core Computer Science",
    items: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Theory of Computation (Basics)",
    ],
  },
  {
    title: "Mathematics",
    items: ["Linear Algebra", "Probability", "Statistics"],
  },
  {
    title: "Research and Tools",
    items: ["Python", "OpenCV", "Intro to Machine Learning", "Data Analysis"],
  },
];

export const futureGoals: FutureGoal[] = [
  {
    title: "Academia",
    points: [
      "Become a university professor",
      "Teach core CS and advanced topics",
      "Inspire students to think deeply",
    ],
  },
  {
    title: "Research",
    points: [
      "Publish papers in computer vision and imaging",
      "Work on impactful real-world problems",
      "Contribute to scientific knowledge",
    ],
  },
  {
    title: "Engineering",
    points: [
      "Build intelligent systems",
      "Connect rigorous theory with scalable applications",
      "Deliver software that supports long-term understanding",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Distributed Audit Trail",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Dark engineering workspace with multiple screens and code overlays",
    stack: ["Go", "gRPC", "PostgreSQL"],
    repository: "https://github.com/maopu2001",
    demo: "https://github.com/maopu2001",
    problem:
      "Financial compliance systems need immutable and chronologically ordered event logs across distributed services, but centralized write paths quickly become bottlenecks.",
    approach:
      "Designed an event-sourced pipeline with append-only storage, service-level signing, and partition-aware write paths. Added gRPC contracts for low-latency communication and deterministic message flow.",
    learnings: [
      "System design trade-offs matter more than framework choice.",
      "Consistency guarantees require deliberate event boundaries.",
      "Throughput gains come from architecture, not only optimization.",
    ],
  },
  {
    title: "Telemetry Aggregator",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Blue-toned network board representing high-frequency telemetry data",
    stack: ["Next.js", "Redis", "WebSockets"],
    repository: "https://github.com/maopu2001",
    demo: "https://github.com/maopu2001",
    problem:
      "High-frequency IoT telemetry streams overloaded client-side rendering, causing memory pressure and unstable dashboard performance.",
    approach:
      "Moved aggregation to the edge with buffering and decimation layers. Reworked the frontend render loop to reduce DOM churn and preserve responsiveness under load.",
    learnings: [
      "Performance starts with modeling data flow, not UI tweaks.",
      "Backpressure-aware design prevents fragile real-time systems.",
      "Observability is essential for scaling user-facing dashboards.",
    ],
  },
  {
    title: "Cell Image Insight Pipeline",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Microscopy-inspired image with layered visual patterns",
    stack: ["Python", "OpenCV", "FastAPI"],
    repository: "https://github.com/maopu2001",
    demo: "https://github.com/maopu2001",
    problem:
      "Biomedical image datasets are often noisy and high-dimensional, making manual inspection slow and error-prone.",
    approach:
      "Built a preprocessing and feature extraction pipeline with segmentation experiments, statistical filtering, and lightweight API endpoints for repeatable analysis workflows.",
    learnings: [
      "Math intuition improves model and feature decisions.",
      "Experiment tracking prevents misleading conclusions.",
      "Research engineering needs reproducibility from day one.",
    ],
  },
];

export const researchInterests = [
  "Computer Vision",
  "Image Processing",
  "Biomedical and Cell Imaging",
];

export const researchMindset = [
  "Asking why, not just how",
  "Connecting abstract theory with real-world problems",
  "Building intuition before implementation",
  "Rigorous empirical validation",
];

export const currentlyExploring = [
  {
    title: "Image Representation",
    description:
      "Investigating compact ways to encode high-dimensional visual data while preserving meaningful geometric structure.",
    tags: ["Tensors", "Manifolds"],
  },
  {
    title: "Feature Extraction",
    description:
      "Studying invariant feature methods that remain robust under illumination, scale, and viewpoint variation.",
    tags: ["SIFT/SURF", "Invariance"],
  },
  {
    title: "Deep Learning for Vision",
    description:
      "Exploring convolutional and transformer-based models for practical inference across constrained environments.",
    tags: ["CNNs", "ViT"],
  },
];

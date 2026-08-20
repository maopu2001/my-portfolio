import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", usedInSlugs: ["cgpa-buddy", "rmstu-notice-hub-reimagined", "cse-department-tour-2026", "pwa-offline-news-app"] },
      { name: "JavaScript (ES6+)", usedInSlugs: ["question-vault-rmstu", "rmstu-bus-management-system", "library-management-system", "price-bond-checker"] },
      { name: "Python", usedInSlugs: ["zero-label-microscopy-thesis", "personal-ai-agent-exploration"] },
      { name: "C++", usedInSlugs: ["competitive-programming-archive", "os-lab-simulations"] },
    ],
  },
  {
    category: "Web & Engineering",
    skills: [
      { name: "Next.js (App Router, SSR, Server Actions)", usedInSlugs: ["cgpa-buddy", "question-vault-rmstu", "rmstu-bus-management-system", "cse-department-tour-2026"] },
      { name: "React 19 & React Hook Form", usedInSlugs: ["cgpa-buddy", "rmstu-notice-hub-reimagined", "error-detection-calculator"] },
      { name: "Tailwind CSS (v3 & v4)", usedInSlugs: ["cgpa-buddy", "question-vault-rmstu", "rmstu-bus-management-system", "cse-department-tour-2026"] },
      { name: "TanStack Start / Query / Router", usedInSlugs: ["rmstu-notice-hub-reimagined"] },
      { name: "Node.js & Express", usedInSlugs: ["library-management-system", "personal-isp-iptv-server"] },
      { name: "PWA & Service Workers", usedInSlugs: ["pwa-offline-news-app"] },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "MongoDB & Mongoose", usedInSlugs: ["question-vault-rmstu", "rmstu-bus-management-system", "library-management-system"] },
      { name: "REST APIs & JSON Schemas", usedInSlugs: ["cgpa-buddy", "question-vault-rmstu", "personal-ai-agent-exploration"] },
      { name: "JWT & NextAuth.js Authentication", usedInSlugs: ["question-vault-rmstu", "rmstu-bus-management-system", "library-management-system"] },
      { name: "WebSockets / Real-Time Data", usedInSlugs: ["rmstu-bus-management-system"] },
      { name: "PDF Generation (@react-pdf/renderer)", usedInSlugs: ["cgpa-buddy", "rmstu-notice-hub-reimagined"] },
    ],
  },
  {
    category: "AI, Machine Learning & Vision",
    skills: [
      { name: "PyTorch 2.2", usedInSlugs: ["zero-label-microscopy-thesis"] },
      { name: "Vision Transformers (DINOv2, SQAFormer)", usedInSlugs: ["zero-label-microscopy-thesis"] },
      { name: "Computer Vision & Image Processing", usedInSlugs: ["zero-label-microscopy-thesis"] },
      { name: "Zero-Shot Anomaly Detection", usedInSlugs: ["zero-label-microscopy-thesis"] },
      { name: "OpenCV & NumPy", usedInSlugs: ["zero-label-microscopy-thesis"] },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "Git & GitHub", usedInSlugs: ["cgpa-buddy", "question-vault-rmstu", "zero-label-microscopy-thesis"] },
      { name: "Docker & Containerization", usedInSlugs: ["docker-nextjs-15"] },
      { name: "Linux Systems & CLI", usedInSlugs: ["os-lab-simulations", "docker-nextjs-15"] },
      { name: "Vercel Deployment", usedInSlugs: ["cgpa-buddy", "rmstu-notice-hub-reimagined", "cse-department-tour-2026"] },
    ],
  },
];

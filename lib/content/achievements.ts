import type { Achievement } from "./types";

export const achievements: Achievement[] = [
  {
    title: "Undergraduate Research Thesis in Computer Vision",
    category: "Academic",
    year: 2026,
    organization: "Department of CSE, RMSTU",
    description:
      "Benchmarked vision transformer models (DINOv2, SQAFormer, CAE-IF) for zero-label microscopy anomaly detection on 5,239 frames of the LIVECell corpus.",
  },
  {
    title: "Organizing Committee Lead — CSE Department Tour 2026",
    category: "Leadership",
    year: 2026,
    organization: "Department of CSE, RMSTU",
    description:
      "Coordinated trip logistics, participant registrations, financial records, and built the official bilingual web application for the department tour.",
  },
  {
    title: "Competitive Programming (100+ Solved Problems)",
    category: "Technical",
    year: 2022,
    organization: "Codeforces, LightOJ, Beecrowd",
    description:
      "Solved over 100 competitive programming problems in C++ covering graph algorithms, dynamic programming, and data structures.",
  },
  {
    title: "Web Engineering Course Project — Offline News PWA",
    category: "University Activity",
    year: 2025,
    organization: "RMSTU CSE-3106 Web Engineering Lab",
    description:
      "Built an offline-first Progressive Web Application with background synchronization and local storage caching under Assistant Professor Md. Mynoddin.",
  },
];

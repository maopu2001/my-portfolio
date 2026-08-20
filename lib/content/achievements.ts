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
      "Coordinated logistics, participant registrations, financial budgeting, and built the official bilingual web portal for the department tour.",
  },
  {
    title: "Competitive Programming Problem Solver (100+ Solved)",
    category: "Technical",
    year: 2022,
    organization: "Codeforces, LightOJ, Beecrowd",
    description:
      "Solved over 100 competitive programming challenges focusing on graph theory, dynamic programming, combinatorics, and data structures.",
  },
  {
    title: "Web Engineering Course Project Distinction — Offline News PWA",
    category: "University Activity",
    year: 2025,
    organization: "RMSTU CSE-3106 Web Engineering Lab",
    description:
      "Engineered an offline-first Progressive Web Application with background synchronization and local storage caching under Assistant Professor Md. Mynoddin.",
  },
];

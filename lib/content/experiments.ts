import type { Experiment } from "./types";

export const experiments: Experiment[] = [
  {
    slug: "docker-nextjs-15",
    title: "Multi-Stage Docker Setup for Next.js 15",
    summary:
      "I wrote a multi-stage Dockerfile for Next.js 15 to generate small production container images using standalone output.",
    rationale:
      "Standard Node container images are often over 1GB because they include full build dependencies. I wanted a small container for production deployments.",
    technology: ["Docker", "Next.js 15", "Node.js", "Alpine Linux"],
    outcome:
      "Reduced final image size from 1.2GB down to 140MB using Node-Alpine base images and standalone build output.",
    learned:
      "Using multi-stage builds and standalone output keeps production container sizes minimal.",
    github: "https://github.com/maopu2001/Docker-Setup-for-a-NextJS-15",
    year: 2025,
    category: "DevOps & Infrastructure",
  },
  {
    slug: "personal-ai-agent-exploration",
    title: "Personal AI Agent Exploration",
    summary:
      "I built a small CLI prototype to test tool calling, context buffers, and API execution with LLMs in TypeScript.",
    rationale:
      "I wanted to test how language models execute functions and parse structured JSON responses.",
    technology: ["TypeScript", "Next.js", "OpenAI / Gemini API"],
    outcome:
      "Built a CLI script that parses user inputs into function calls and executes API tasks.",
    learned:
      "Reliable agent behavior requires strict JSON Schema validation rather than relying only on system prompts.",
    github: "https://github.com/maopu2001/personal-ai-agent",
    year: 2025,
    category: "AI & Automation",
  },
  {
    slug: "os-lab-simulations",
    title: "Operating Systems Scheduling Simulations",
    summary:
      "I wrote implementations of CPU scheduling algorithms (FCFS, SJF, Priority, Round Robin) and IPC mechanisms.",
    rationale:
      "Coursework exercise to analyze CPU scheduler metrics, process turnaround times, and queue management.",
    technology: ["JavaScript", "C++", "Linux"],
    outcome:
      "Generated timing execution charts to compare scheduling algorithm behavior under different process loads.",
    learned:
      "Different scheduling algorithms present direct trade-offs between turnaround time and process fairness.",
    github: "https://github.com/maopu2001/OS-Lab",
    year: 2025,
    category: "Systems & Theory",
  },
  {
    slug: "personal-isp-iptv-server",
    title: "Local ISP IPTV Stream Proxy",
    summary:
      "I created a small local Node.js proxy to parse M3U playlists and re-transmit video streams across my home network.",
    rationale:
      "To resolve IPTV buffering issues caused by ISP header requirements on local smart TVs.",
    technology: ["Node.js", "Express", "HLS Video Streaming"],
    outcome:
      "Successfully routed local network television streams to home devices without playback drops.",
    learned:
      "Handling HLS manifests and custom HTTP headers is essential for reliable local video streaming.",
    github: "https://github.com/maopu2001/IPTV_for_Home",
    year: 2024,
    category: "Networking & Media",
  },
  {
    slug: "competitive-programming-archive",
    title: "Algorithm Problem Archive (Codeforces, LightOJ, Beecrowd)",
    summary:
      "I solved over 100 competitive programming problems in C++ covering graph algorithms, dynamic programming, and data structures.",
    rationale:
      "To practice core algorithms and problem-solving techniques during early undergraduate studies.",
    technology: ["C++", "Data Structures", "Algorithms", "STL"],
    outcome:
      "Implemented solutions for shortest paths, segment trees, disjoint set union, and modular arithmetic.",
    learned:
      "Regular problem-solving improves time complexity analysis and code correctness.",
    github: "https://github.com/maopu2001/Codeforces",
    year: 2022,
    category: "CS Foundations",
  },
];

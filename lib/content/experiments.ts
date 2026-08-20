import type { Experiment } from "./types";

export const experiments: Experiment[] = [
  {
    slug: "docker-nextjs-15",
    title: "Multi-Stage Docker Containerization for Next.js 15",
    summary:
      "Engineered an optimized production Dockerfile for Next.js 15 using multi-stage builds and standalone output.",
    rationale:
      "Standard Node container images are often 1GB+ in size and include unnecessary build toolchains. I wanted to create a lightweight, reproducible container deployment pipeline.",
    technology: ["Docker", "Next.js 15", "Node.js", "Alpine Linux"],
    outcome:
      "Reduced final image size from 1.2GB down to 140MB using Node-Alpine base images and standalone Next.js build output.",
    learned:
      "Understanding container layering, multi-stage build targets, and standalone bundle isolation is vital for production cloud deployments.",
    github: "https://github.com/maopu2001/Docker-Setup-for-a-NextJS-15",
    year: 2025,
    category: "DevOps & Infrastructure",
  },
  {
    slug: "personal-ai-agent-exploration",
    title: "Personal AI Agent Architecture",
    summary:
      "Explored tool-calling, context memory, and structured API integration with modern LLM models in TypeScript.",
    rationale:
      "To understand how LLMs act as autonomous agents using function declarations, memory buffers, and tool interfaces.",
    technology: ["TypeScript", "Next.js", "OpenAI / Gemini API", "Vector Embeddings"],
    outcome:
      "Built a prototype CLI and API harness that converts natural language intent into executed API calls.",
    learned:
      "Prompt engineering is insufficient; robust agent behavior requires strict JSON Schema validation and fallback handling.",
    github: "https://github.com/maopu2001/personal-ai-agent",
    year: 2025,
    category: "AI & Automation",
  },
  {
    slug: "os-lab-simulations",
    title: "Operating Systems Lab & Scheduling Algorithms",
    summary:
      "Implemented classical OS process scheduling algorithms (FCFS, SJF, Priority, Round Robin) and IPC mechanisms.",
    rationale:
      "Coursework exploration to gain intuitive understanding of CPU scheduling overhead, turnaround time calculation, and process synchronization.",
    technology: ["JavaScript", "C++", "Linux Systems Programming"],
    outcome:
      "Created visual execution charts and metrics comparators for process queues under varying burst time distributions.",
    learned:
      "CPU scheduler trade-offs directly impact system latency and throughput under heavy concurrent workloads.",
    github: "https://github.com/maopu2001/OS-Lab",
    year: 2025,
    category: "Systems & Theory",
  },
  {
    slug: "personal-isp-iptv-server",
    title: "Personal ISP IPTV Proxy & Stream Parser",
    summary:
      "Created a lightweight local proxy server that parses M3U stream playlists and re-transmits media streams locally.",
    rationale:
      "To solve local ISP IPTV network buffering by implementing custom header handling and playlist caching.",
    technology: ["Node.js", "Express", "HLS Video Streaming", "Vercel"],
    outcome:
      "Successfully streamed local network television broadcasts to home smart devices without ISP gateway drops.",
    learned:
      "Learned HLS manifest structures, HTTP chunked transfer encoding, and media stream header manipulation.",
    github: "https://github.com/maopu2001/IPTV_for_Home",
    year: 2024,
    category: "Networking & Media",
  },
  {
    slug: "competitive-programming-archive",
    title: "Algorithm & Data Structure Solutions (Codeforces, LightOJ, Beecrowd)",
    summary:
      "Archived over 100+ algorithmic problem solutions in C++ covering graph theory, dynamic programming, and math.",
    rationale:
      "Building core computer science problem-solving discipline during early undergraduate years.",
    technology: ["C++", "Data Structures", "Algorithms", "STL"],
    outcome:
      "Solved problems involving shortest paths, segment trees, disjoint set union (DSU), and modular arithmetic.",
    learned:
      "Asymptotic time complexity analysis ($O(N \\log N)$ vs $O(N^2)$) becomes second nature when writing competitive solutions.",
    github: "https://github.com/maopu2001/Codeforces",
    year: 2022,
    category: "Computer Science Foundations",
  },
];

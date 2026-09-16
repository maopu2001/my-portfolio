# ✦ M. Aktaruzzaman Opu — Portfolio

> Personal engineering portfolio, research archive, and software showcase of **M. Aktaruzzaman Opu** — Computer Science undergraduate (Rank 1st, CGPA 3.96/4.00, UGC Merit Scholar 2025) and software builder at Rangamati Science and Technology University (RMSTU).

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-Schema_Validation-3E67B1?style=flat&logo=zod)](https://zod.dev/)

Live Website: **[https://maopu.com.bd](https://maopu.com.bd)**

---

## 🧭 Architecture & Overview

This portfolio is built with Next.js 16 (App Router), React 19, and Tailwind CSS v4, prioritizing zero runtime overhead, high accessibility, Apple-grade motion polish, and search engine optimization.

```
portfolio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout, fonts, theme provider, preloader, metadata
│   ├── page.tsx                # Homepage (Hero, Marquee, Featured Works, Skills, Journey)
│   ├── projects/               # Projects archive & dynamic case study pages
│   │   ├── page.tsx            # Filterable project inventory
│   │   └── [slug]/page.tsx     # SSG dynamic project case study pages with JSON-LD
│   ├── research/               # IEEE publications, thesis spotlight, BibTeX copy tool
│   ├── experiments/            # Prototypes, benchmarks, and systems experiments
│   ├── journey/                # Chronological engineering timeline (2022–2026)
│   ├── about/                  # Academic direction, background, and verified credentials
│   ├── contact/                # Direct contact channels & collaboration info
│   ├── cv/                     # Interactive CV with PDF download link
│   ├── opengraph-image.tsx     # Dynamic OpenGraph social preview image generator
│   ├── icon.svg                # Vector app favicon and mobile touch icon
│   ├── manifest.ts             # Web App Manifest (PWA)
│   ├── robots.ts               # Crawler and AI search bot directives
│   └── sitemap.ts              # Dynamic XML sitemap with image metadata
├── components/                 # Reusable UI & presentation components
│   ├── ui/                     # Base UI primitives (Badge, Button, Card, Separator)
│   ├── animations/             # Motion wrappers (FadeIn, Marquee, StaggerContainer)
│   ├── CommandPalette.tsx      # Global ⌘K keyboard search modal
│   ├── FeaturedProjectCard.tsx # Detailed case-study showcase card
│   ├── Navbar.tsx              # Desktop floating header & mobile tab navigation
│   ├── Footer.tsx              # Comprehensive footer with CTA & social channels
│   ├── Preloader.tsx           # First-paint intro animation with reduced-motion check
│   ├── ScrollManager.tsx       # Smooth scroll restoration & hash management
│   ├── StructuredData.tsx      # Schema.org JSON-LD (Person, WebSite, ScholarlyArticle, Software)
│   └── ThemeProvider.tsx       # Light / Dark mode system with next-themes
├── data/                       # Content source-of-truth (Raw JSON)
│   ├── profile.json            # Bio, education, teaching history, references, social links
│   ├── projects.json           # All software projects, case studies, technologies
│   ├── publications.json       # IEEE peer-reviewed papers & DOI metadata
│   ├── experiments.json        # Prototypes, benchmarks, and lab exploration records
│   ├── timeline.json           # Chronological milestones by year
│   ├── skills.json             # Grouped technical proficiencies & project cross-references
│   └── achievements.json       # Academic awards, scholarships, and verified milestones
├── lib/                        # Core utilities & schema validation
│   ├── content/                # Zod schemas, types, and strongly-typed data accessors
│   ├── cdn.ts                  # Remote asset resolution with local dev fallbacks
│   └── utils.ts                # Class merger (`cn` utility with clsx + tailwind-merge)
└── public/                     # Static assets, CV PDF, and llms.txt (GEO profile)
```

---

## ✨ Key Features

- **⚡ Zero-Waterfall SSG**: Static Site Generation for all static routes and 14+ dynamic project case studies via `generateStaticParams`.
- **🛡️ Zod-Powered Content Layer**: All raw content in `data/*.json` is strictly validated against Zod schemas (`lib/content/schema.ts`) at build time to prevent missing fields or malformed links.
- **🔍 Global Command Palette (⌘K)**: Quick keyboard-driven search powered by Base UI and Lucide icons to jump to any project, research paper, or page instantly.
- **📜 Academic Citation Tools**: One-click BibTeX copying on the `/research` page for academic papers and IEEE proceedings.
- **🎨 Tailwind CSS v4 & Semantic Theming**: Modern CSS variable token architecture (`@import "tailwindcss";`), supporting high-contrast Dark and Light modes without hardcoded color classes.
- **🏎️ Motion & Performance Craft**:
  - Emil Kowalski / Apple-inspired spring physics and entry easing.
  - Zero-flash static preloader curtain with `prefers-reduced-motion` compliance.
  - Interactive skill ticker marquee.
- **🌐 Full-Spectrum SEO & GEO**:
  - Valid Schema.org JSON-LD for `Person`, `WebSite`, `ProfilePage`, `ScholarlyArticle`, `SoftwareApplication`, and `BreadcrumbList`.
  - Configured `robots.txt` with allowances for modern AI search engines (`GPTBot`, `ClaudeBot`, `PerplexityBot`).
  - Web App Manifest (`manifest.webmanifest`) and XML sitemap with image metadata.
  - Generative Engine Optimization profile (`public/llms.txt`).

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` |
| **UI Primitives** | [@base-ui/react](https://base-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) + `tw-animate-css` |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG brand marks |
| **Data Validation** | [Zod 4](https://zod.dev/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Typography** | Space Grotesk (display), Poppins (body), JetBrains Mono (labels) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [pnpm](https://pnpm.io/) (or `npm` / `bun` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maopu2001/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install
   ```

3. **Set environment variables (optional):**
   Create a `.env.local` file if using an external CDN for project images:
   ```env
   NEXT_PUBLIC_CDN_URL=https://your-cdn-endpoint.com
   ```

4. **Start the local development server:**
   ```bash
   pnpm dev
   # or npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deployment

### Production Build

Run the type checker, linter, and static generation pipeline:

```bash
pnpm build
# or npm run build
```

### Preview Build Locally

```bash
pnpm start
# or npm run start
```

### Linting

```bash
pnpm lint
```

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

Developed with ❤️ by **[M. Aktaruzzaman Opu](https://maopu.com.bd)**.

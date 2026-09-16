import type { Metadata } from "next";
import Link from "next/link";
import { BibtexCopyButton } from "@/components/BibtexCopyButton";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Section } from "@/components/Section";
import { ResearchStructuredData } from "@/components/StructuredData";
import { profile, projects, publications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Computer Vision & Research Exploration",
  description:
    "Undergraduate research in Computer Vision, Vision Transformers (DINOv2, SQAFormer), zero-label microscopy anomaly detection, and peer-reviewed IEEE publications by M. Aktaruzzaman Opu.",
  keywords: [
    "Computer Vision Research",
    "Vision Transformers",
    "DINOv2",
    "Zero-Label Anomaly Detection",
    "IEEE Publications",
    "SQAFormer",
    "LIVECell",
    profile.name,
  ],
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: `Research & Publications | ${profile.name}`,
    description:
      "Peer-reviewed IEEE publications, Vision Transformer thesis research, and zero-label anomaly detection.",
    url: "https://maopu.com.bd/research",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Research & Publications | ${profile.name}`,
    description:
      "Peer-reviewed IEEE publications and Vision Transformer anomaly detection research.",
    creator: "@maopu2001",
  },
};

const researchFocusAreas = [
  {
    title: "Zero-Label Anomaly Detection",
    description:
      "Investigating latent representation distances and feature distribution shifts in unlabelled cell microscopy frames without requiring manual annotation.",
    tags: ["DINOv2", "CAE-IF", "SQAFormer", "LIVECell Corpus"],
  },
  {
    title: "Vision Foundation Models (ViTs)",
    description:
      "Evaluating self-supervised vision transformers for robust feature extraction that remains invariant to optical blur and illumination noise.",
    tags: ["PyTorch", "Self-Supervised Learning", "Latent Space Analysis"],
  },
  {
    title: "Medical & Biological Cell Imaging",
    description:
      "Applying computer vision techniques to phase-contrast cellular imagery to automate quality control and benchmark model failure modes.",
    tags: ["OpenCV", "Biomedical Imaging", "Empirical Benchmarking"],
  },
  {
    title: "Multi-Criteria Decision Making (MCDM)",
    description:
      "Benchmarking mathematical MCDM frameworks for ranking and prioritizing sustainable energy infrastructure initiatives in the Chittagong Hill Tracts.",
    tags: ["MCDM", "Decision Systems", "IEEE PECCII 2026"],
  },
  {
    title: "Client-Side Typesetting & WASM",
    description:
      "Engineering in-browser WebAssembly XeLaTeX compilation pipelines for high-precision mathematical formulas and multilingual typography.",
    tags: ["WebAssembly", "XeLaTeX", "Exam Studio"],
  },
  {
    title: "Database Optimization & Distributed Systems",
    description:
      "Designing high-reliability role-based systems, relational document schemas, and transaction integrity for academic portals.",
    tags: ["MongoDB", "RBAC", "System Architecture"],
  },
];

export default function ResearchPage() {
  const thesisProject = projects.find(
    (p) => p.slug === "zero-label-microscopy-thesis",
  );

  return (
    <>
      <Section
        title="Research & Academic Publications"
        subtitle="Exploring where theoretical computer science, mathematical abstraction, computer vision, and decision systems converge."
      >
        <div className="space-y-8">
          {/* Peer-Reviewed Publications Section */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Peer-Reviewed Conference Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm transition-all duration-300 hover:border-accent/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-faint">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-accent-strong border border-border font-bold">
                      {pub.publisher} Conference Proceedings
                    </span>
                    <span>{pub.year}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    {pub.title}
                  </h3>

                  <p className="font-mono text-xs text-accent-strong">
                    Authors: {pub.authors.join(", ")}
                  </p>

                  <p className="text-xs text-muted-foreground font-medium">
                    Published in: <em>{pub.venue}</em>, {pub.location},{" "}
                    {pub.year}
                    {pub.pages ? `, pp. ${pub.pages}` : ""}.
                  </p>

                  {pub.abstract && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                    {pub.ieeeXploreUrl && (
                      <a
                        href={pub.ieeeXploreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary-hover transition-colors font-semibold shadow-sm active:scale-95"
                      >
                        IEEE Xplore Digital Library ↗
                      </a>
                    )}
                    {pub.doiUrl && (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-foreground hover:border-accent hover:text-accent-strong transition-colors active:scale-95"
                      >
                        DOI: {pub.doi} ↗
                      </a>
                    )}
                  </div>

                  {/* One-Click BibTeX Citation Tool */}
                  <div className="pt-2 border-t border-border/60">
                    <BibtexCopyButton publication={pub} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Thesis Spotlight */}
          {thesisProject && (
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-faint">
                <span className="rounded-full bg-muted px-3 py-1 text-accent-strong border border-border font-bold">
                  Undergraduate Research Thesis
                </span>
                <span>{thesisProject.year}</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                <Link
                  href={`/projects/${thesisProject.slug}`}
                  className="hover:text-accent-strong transition-colors"
                >
                  {thesisProject.title}
                </Link>
              </h2>

              <p className="text-sm font-medium text-accent-strong">
                {thesisProject.tagline}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {thesisProject.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
                <Link
                  href={`/projects/${thesisProject.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-accent-strong hover:underline"
                >
                  Read Full Research Case Study →
                </Link>
                {thesisProject.github && (
                  <a
                    href={thesisProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground active:scale-95 transition-transform"
                  >
                    <GithubIcon className="size-3.5" />
                    <span>GitHub Code Repository</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Research Focus Grid */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Research & Theoretical Focus Areas
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {researchFocusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-border bg-card p-6 space-y-3 shadow-sm transition-all duration-300 hover:border-accent/50"
                >
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-0.5 font-mono text-[0.68rem] text-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <ResearchStructuredData />
    </>
  );
}

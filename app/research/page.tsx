import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Computer Vision & Research Exploration",
  description:
 "Undergraduate research focus in Computer Vision, Vision Transformers (DINOv2, SQAFormer), and zero-label cell microscopy anomaly detection.",
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
];

export default function ResearchPage() {
  const thesisProject = projects.find(
    (p) => p.slug === "zero-label-microscopy-thesis"
  );

  return (
    <>
      <Section
        title="Computer Vision & AI Research"
        subtitle="Exploring where theoretical computer science, mathematical abstraction, and computer vision converge."
      >
        <div className="space-y-8">
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
                    className="text-muted-foreground hover:text-foreground"
                  >
                    GitHub Code Repository ↗
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Research Focus Grid */}
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
      </Section>
    </>
  );
}

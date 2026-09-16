import type { Metadata } from "next";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Section } from "@/components/Section";
import { experiments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiments & Learning",
  description:
 "Technical experiments, prototypes, containerization benchmarks, operating system lab work, and competitive programming archives by M. Aktaruzzaman Opu.",
};

export default function ExperimentsPage() {
  return (
    <>
      <Section
        title="Experiments & Technical Curiosity"
        subtitle="Not every technical endeavor needs to be a polished web product. This archive records focused experiments, infrastructure scripts, and algorithm explorations that built fundamental skills."
      >
        <div className="space-y-8">
          {experiments.map((exp) => (
            <article
              key={exp.slug}
              id={exp.slug}
              className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm transition-all duration-300 hover:border-accent/50"
            >
              {/* Header */}
              <div className="flex flex-col justify-between gap-2 border-b border-border pb-4 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-faint mb-1">
                    <span className="rounded-full bg-muted px-3 py-0.5 text-accent-strong font-semibold border border-border">
                      {exp.category}
                    </span>
                    <span>{exp.year}</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                    {exp.title}
                  </h2>
                </div>
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-strong hover:underline shrink-0 font-semibold active:scale-95 transition-transform"
                  >
                    <GithubIcon className="size-3.5" />
                    <span>View Code</span>
                  </a>
                )}
              </div>

              {/* Lightweight Format: What I tried, Why, Outcome, Learned */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-accent-strong uppercase tracking-wider">
                    What I Tried
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-accent-strong uppercase tracking-wider">
                    Why I Tried It
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.rationale}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-accent-strong uppercase tracking-wider">
                    What Happened & Outcome
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.outcome}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-accent-strong uppercase tracking-wider">
                    What I Learned
                  </h3>
                  <p className="text-xs text-accent-strong font-medium leading-relaxed">
                    {exp.learned}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border font-mono text-xs">
                <span className="text-faint">Tech:</span>
                {exp.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-0.5 text-foreground border border-border text-[0.7rem]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

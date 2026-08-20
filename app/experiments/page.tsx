import type { Metadata } from "next";
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
              className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 sm:p-8 space-y-6 shadow-sm transition-all duration-300 hover:border-[#ff4d00]/50"
            >
              {/* Header */}
              <div className="flex flex-col justify-between gap-2 border-b border-[#e8e2d2] dark:border-white/10 pb-4 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#6b7280] dark:text-[#737373] mb-1">
                    <span className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-3 py-0.5 text-[#ff4d00] font-semibold border border-[#e8e2d2] dark:border-white/10">
                      {exp.category}
                    </span>
                    <span>{exp.year}</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] sm:text-2xl">
                    {exp.title}
                  </h2>
                </div>
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#ff4d00] hover:underline shrink-0 font-semibold"
                  >
                    View Code on GitHub ↗
                  </a>
                )}
              </div>

              {/* Lightweight Format: What I tried, Why, Outcome, Learned */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-[#ff4d00] uppercase tracking-wider">
                    What I Tried
                  </h3>
                  <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-[#ff4d00] uppercase tracking-wider">
                    Why I Tried It
                  </h3>
                  <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
                    {exp.rationale}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-[#ff4d00] uppercase tracking-wider">
                    What Happened & Outcome
                  </h3>
                  <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
                    {exp.outcome}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-[#ff4d00] uppercase tracking-wider">
                    What I Learned
                  </h3>
                  <p className="text-xs text-[#ff4d00] font-medium leading-relaxed">
                    {exp.learned}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e8e2d2] dark:border-white/10 font-mono text-xs">
                <span className="text-[#6b7280] dark:text-[#737373]">Tech:</span>
                {exp.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-3 py-0.5 text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-white/10 text-[0.7rem]"
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

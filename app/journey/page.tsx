import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journey — Things I Built Over the Years",
  description:
 "Chronological engineering history of M. Aktaruzzaman Opu from 2022 to 2026, documenting foundational programming, full-stack software development, and computer vision research.",
};

export default function JourneyPage() {
  return (
    <>
      <Section
        title="Engineering & Learning Journey"
        subtitle="A chronological timeline recording how my technical interests developed—from core algorithms and competitive programming to full-stack web applications and computer vision thesis research."
      >
        <div className="relative border-l border-border pl-8 space-y-12 ml-4 pb-4">
          {timeline.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background transition-transform group-hover:scale-125" />

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="text-sm font-bold text-accent-strong">
                    {item.year}
                  </span>
                  <span className="text-faint">•</span>
                  <span className="text-muted-foreground font-medium">{item.focus}</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {item.title}
                </h2>

                <p className="font-serif text-sm text-accent-strong">
                  “{item.headline}”
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Associated Projects */}
                <div className="pt-2">
                  <h3 className="font-mono text-xs font-semibold text-accent-strong uppercase tracking-wider mb-2">
                    Key Work & Projects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.projects.map((p) => (
                      <div
                        key={p.title}
                        className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs text-foreground shadow-sm"
                      >
                        <span className="text-accent-strong font-bold">#</span>
                        {p.slug ? (
                          <Link
                            href={`/projects/${p.slug}`}
                            className="font-medium hover:text-accent-strong hover:underline"
                          >
                            {p.title}
                          </Link>
                        ) : (
                          <span>{p.title}</span>
                        )}
                        <span className="text-[0.68rem] text-faint">
                          ({p.category})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

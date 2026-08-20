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
        <div className="relative border-l border-[#e8e2d2] dark:border-white/10 pl-8 space-y-12 ml-4 py-4">
          {timeline.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[#ff4d00] bg-[#fffcf3] dark:bg-[#0a0a0a] transition-transform group-hover:scale-125" />

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="text-sm font-bold text-[#ff4d00]">
                    {item.year}
                  </span>
                  <span className="text-[#d1cbbd] dark:text-[#333333]">•</span>
                  <span className="text-[#4b5563] dark:text-[#a3a3a3] font-medium">{item.focus}</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#1a2332] dark:text-[#fffcf3]">
                  {item.title}
                </h2>

                <p className="font-serif text-sm italic text-[#ff4d00]">
                  "{item.headline}"
                </p>

                <p className="text-sm text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Associated Projects */}
                <div className="pt-2">
                  <h3 className="font-mono text-xs font-semibold text-[#ff4d00] uppercase tracking-wider mb-2">
                    Key Work & Projects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.projects.map((p) => (
                      <div
                        key={p.title}
                        className="flex items-center gap-1.5 rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] px-3.5 py-1 font-mono text-xs text-[#1a2332] dark:text-[#fffcf3] shadow-sm"
                      >
                        <span className="text-[#ff4d00] font-bold">#</span>
                        {p.slug ? (
                          <Link
                            href={`/projects/${p.slug}`}
                            className="font-medium hover:text-[#ff4d00] hover:underline"
                          >
                            {p.title}
                          </Link>
                        ) : (
                          <span>{p.title}</span>
                        )}
                        <span className="text-[0.68rem] text-[#6b7280] dark:text-[#737373]">
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

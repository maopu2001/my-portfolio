import type { Metadata } from "next";
import Link from "next/link";
import { Marquee } from "@/components/animations/Marquee";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import {
  experiments,
  profile,
  projects,
  skillGroups,
  timeline,
} from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} — Computer Science & Software Builder`,
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const featuredExperiments = experiments.slice(0, 3);
  const recentTimeline = timeline.slice(-3).reverse();

  const allSkills = skillGroups.flatMap((g) => g.skills);

  return (
    <>
      <Hero />

      {/* TECH SKILLS TICKER MARQUEE (ADITYA GUPTA STYLE) */}
      <div className="my-8 rounded-full border border-[#e8e2d2] bg-white/80 dark:border-white/10 dark:bg-[#121212]/80 py-3 backdrop-blur-md shadow-sm">
        <Marquee speed={30}>
          {allSkills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border border-[#e8e2d2] bg-[#f5f2e6] dark:border-white/10 dark:bg-[#1a1a1a] px-4 py-1.5 font-mono text-xs text-[#1a2332] dark:text-[#fffcf3]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              <span>{skill.name}</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <Section
        id="projects"
        title="Featured Works"
        subtitle="Key software systems, campus web platforms, and computer vision research engineering."
        action={
          <Link
            href="/projects"
            className="rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-neutral-900 px-4 py-1.5 font-mono text-xs text-[#ff4d00] hover:border-[#ff4d00] transition-colors"
          >
            All Projects ({projects.length}) →
          </Link>
        }
      >
        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              isFirst={idx === 0}
            />
          ))}
        </div>
      </Section>

      {/* WHAT I BUILD & EVIDENCE-BASED TECH */}
      <Section
        id="tech"
        title="Technical Skills & Evidence"
        subtitle="Technologies applied directly across production apps and thesis research."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 transition-all duration-300 hover:border-[#ff4d00]/40 hover:-translate-y-1 shadow-sm"
            >
              <h3 className="font-serif text-lg font-bold text-[#1a2332] dark:text-[#fffcf3] mb-4 border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3.5 text-sm">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col gap-0.5">
                    <span className="font-medium text-[#1a2332] dark:text-[#fffcf3]">{skill.name}</span>
                    {skill.usedInSlugs.length > 0 && (
                      <span className="font-mono text-[0.72rem] text-[#6b7280] dark:text-[#737373]">
                        Used in:{" "}
                        {skill.usedInSlugs.map((slug, idx) => {
                          const proj = projects.find((p) => p.slug === slug);
                          return (
                            <span key={slug}>
                              {idx > 0 ? ", " : ""}
                              <Link
                                href={`/projects/${slug}`}
                                className="text-[#6b7280] hover:text-[#ff4d00] dark:text-[#a3a3a3] dark:hover:text-[#ff4d00] hover:underline"
                              >
                                {proj ? proj.title : slug}
                              </Link>
                            </span>
                          );
                        })}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIMENTS & LEARNING TEASER */}
      <Section
        id="experiments"
        title="Experiments & Learning"
        subtitle="Lightweight technical explorations, infrastructure setups, and competitive problem solving."
        action={
          <Link
            href="/experiments"
            className="rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-neutral-900 px-4 py-1.5 font-mono text-xs text-[#ff4d00] hover:border-[#ff4d00] transition-colors"
          >
            All Experiments ({experiments.length}) →
          </Link>
        }
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExperiments.map((exp) => (
            <div
              key={exp.slug}
              className="flex flex-col justify-between rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 transition-all duration-300 hover:border-[#ff4d00]/40 hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[0.72rem] text-[#6b7280] dark:text-[#737373] mb-2">
                  <span className="text-[#ff4d00] font-semibold">{exp.category}</span>
                  <span>{exp.year}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#1a2332] dark:text-[#fffcf3] mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed mb-4">
                  {exp.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {exp.technology.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#f5f2e6] dark:bg-neutral-900 px-2.5 py-0.5 font-mono text-[0.68rem] text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[#ff4d00] hover:underline"
                  >
                    View Code ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4-YEAR JOURNEY TIMELINE PREVIEW */}
      <Section
        id="journey"
        title="Things Built Over the Years"
        subtitle="Chronological progression from programming foundations to research thesis."
        action={
          <Link
            href="/journey"
            className="rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-neutral-900 px-4 py-1.5 font-mono text-xs text-[#ff4d00] hover:border-[#ff4d00] transition-colors"
          >
            Full Journey →
          </Link>
        }
      >
        <div className="relative border-l border-[#e8e2d2] dark:border-neutral-800 pl-6 space-y-8 ml-3">
          {recentTimeline.map((item) => (
            <div key={item.year} className="relative group">
              <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#ff4d00] bg-[#fffcf3] dark:bg-[#0a0a0a] transition-transform duration-300 group-hover:scale-125" />
              <span className="font-mono text-xs font-semibold text-[#ff4d00]">
                {item.year}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1a2332] dark:text-[#fffcf3] mt-0.5">
                {item.title}
              </h3>
              <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] mt-1 max-w-xl">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.projects.map((p) => (
                  <span
                    key={p.title}
                    className="inline-flex items-center gap-1 rounded-full bg-[#f5f2e6] dark:bg-neutral-900 px-3 py-1 font-mono text-[0.72rem] text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-neutral-800"
                  >
                    <span className="text-[#ff4d00]">#</span>
                    {p.slug ? (
                      <Link href={`/projects/${p.slug}`} className="hover:underline">
                        {p.title}
                      </Link>
                    ) : (
                      p.title
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT & LONG-TERM ACADEMIC DIRECTION */}
      <Section id="about" title="Academic Direction & Vision">
        <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 sm:p-8 shadow-sm">
          <blockquote className="border-l-2 border-[#ff4d00] pl-4 font-serif text-xl italic text-[#1a2332] dark:text-[#fffcf3] sm:text-2xl mb-6">
            "{profile.statement}"
          </blockquote>

          <div className="space-y-4 text-sm sm:text-base text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed max-w-3xl">
            <p>
              I am a CSE undergraduate student at Rangamati Science and Technology University (RMSTU). My practical engineering journey started in full-stack web application development, building tools like <strong>CGPA Buddy</strong>, <strong>Question Vault</strong>, and the <strong>RMSTU Transport System</strong>.
            </p>
            <p>
              Over time, building applications led me to investigate theoretical foundations—computer vision, vision transformers (DINOv2, SQAFormer), and zero-label anomaly detection.
            </p>
            <p className="text-[#6b7280] dark:text-[#a3a3a3] font-serif italic border-t border-[#e8e2d2] dark:border-white/10 pt-4">
              Long-term goal: {profile.longTermGoal}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full border border-[#e8e2d2] bg-[#f5f2e6] dark:border-neutral-700 dark:bg-neutral-900 px-5 py-2 text-xs font-mono text-[#1a2332] dark:text-[#fffcf3] hover:border-[#ff4d00] hover:text-[#ff4d00] transition-colors"
            >
              Read Full About Page →
            </Link>
            <a
              href={profile.socialLinks.email}
              className="rounded-full border border-[#e8e2d2] bg-white dark:border-neutral-700 dark:bg-[#0a0a0a] px-5 py-2 text-xs font-mono text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#ff4d00] transition-colors"
            >
              Get in Touch ({profile.socialLinks.rawEmail})
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

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
  const featuredProjects = projects.filter((p) => p.featured);
  const featuredExperiments = experiments.slice(0, 3);
  const recentTimeline = timeline.slice(0, 3);

  const allSkills = skillGroups.flatMap((g) => g.skills);

  /* Skill evidence can come from projects OR experiments — experiments have no
     detail pages, so they deep-link to their anchor on /experiments instead. */
  const resolveUsedIn = (slug: string) => {
    const project = projects.find((p) => p.slug === slug);
    if (project) {
      return { href: `/projects/${project.slug}`, label: project.title };
    }
    const experiment = experiments.find((e) => e.slug === slug);
    if (experiment) {
      return { href: `/experiments#${experiment.slug}`, label: experiment.title };
    }
    return null;
  };

  return (
    <>
      <Hero />

      {/* TECH SKILLS TICKER MARQUEE (ADITYA GUPTA STYLE) */}
      <div className="my-8 rounded-full border border-border bg-card/80 py-3 backdrop-blur-md shadow-sm">
        <Marquee speed={30}>
          {allSkills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 font-mono text-xs text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{skill.name}</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <Section
        id="projects"
        index={1}
        title="Featured Works"
        subtitle="Key software systems, campus web platforms, and computer vision research engineering."
        action={
          <Link
            href="/projects"
            className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-accent-strong hover:border-accent transition-colors"
          >
            All Projects ({projects.length}) →
          </Link>
        }
      >
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* WHAT I BUILD & EVIDENCE-BASED TECH */}
      <Section
        id="tech"
        index={2}
        title="Technical Skills & Evidence"
        subtitle="Technologies applied directly across production apps and thesis research."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 shadow-sm"
            >
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3.5 text-sm">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    {skill.usedInSlugs.length > 0 && (
                      <span className="font-mono text-[0.72rem] text-faint">
                        Used in:{" "}
                        {skill.usedInSlugs
                          .map(resolveUsedIn)
                          .filter((ref): ref is NonNullable<typeof ref> => ref !== null)
                          .map((ref, idx) => (
                            <span key={ref.href}>
                              {idx > 0 ? ", " : ""}
                              <Link
                                href={ref.href}
                                className="text-faint hover:text-accent-strong hover:underline"
                              >
                                {ref.label}
                              </Link>
                            </span>
                          ))}
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
        index={3}
        title="Experiments & Learning"
        subtitle="Lightweight technical explorations, infrastructure setups, and competitive problem solving."
        action={
          <Link
            href="/experiments"
            className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-accent-strong hover:border-accent transition-colors"
          >
            All Experiments ({experiments.length}) →
          </Link>
        }
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExperiments.map((exp) => (
            <div
              key={exp.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[0.72rem] text-faint mb-2">
                  <span className="text-accent-strong font-semibold">{exp.category}</span>
                  <span>{exp.year}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {exp.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {exp.technology.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[0.68rem] text-foreground border border-border"
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
                    className="font-mono text-xs text-accent-strong hover:underline"
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
        index={4}
        title="Things Built Over the Years"
        subtitle="Chronological progression from programming foundations to research thesis."
        action={
          <Link
            href="/journey"
            className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-accent-strong hover:border-accent transition-colors"
          >
            Full Journey →
          </Link>
        }
      >
        <div className="relative border-l border-border pl-6 space-y-8 ml-3">
          {recentTimeline.map((item) => (
            <div key={item.year} className="relative group">
              <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background transition-transform duration-300 group-hover:scale-125" />
              <span className="font-mono text-xs font-semibold text-accent-strong">
                {item.year}
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground mt-0.5">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.projects.map((p) => (
                  <span
                    key={p.title}
                    className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 font-mono text-[0.72rem] text-foreground border border-border"
                  >
                    <span className="text-accent-strong">#</span>
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
      <Section id="about" index={5} title="Academic Direction & Vision">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <blockquote className="border-l-2 border-accent pl-4 font-serif text-xl text-foreground sm:text-2xl mb-6">
            “{profile.statement}”
          </blockquote>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              I am a CSE undergraduate student at Rangamati Science and Technology University (RMSTU). My practical engineering journey started in full-stack web application development and client-side systems, building tools like <strong>Exam Studio</strong>, <strong>CGPA Buddy</strong>, <strong>Question Vault</strong>, and the <strong>RMSTU Transport System</strong>.
            </p>
            <p>
              Over time, building applications led me to investigate theoretical foundations—computer vision, vision transformers (DINOv2, SQAFormer), and zero-label anomaly detection.
            </p>
            <p className="text-faint font-serif border-t border-border pt-4">
              Long-term goal: {profile.longTermGoal}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full border border-border bg-muted px-5 py-2 text-xs font-mono text-foreground hover:border-accent hover:text-accent-strong transition-colors"
            >
              Read Full About Page →
            </Link>
            <a
              href={profile.socialLinks.email}
              className="rounded-full border border-border bg-card px-5 py-2 text-xs font-mono text-muted-foreground hover:text-accent-strong transition-colors"
            >
              Get in Touch ({profile.socialLinks.rawEmail})
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

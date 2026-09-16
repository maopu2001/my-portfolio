import type { Metadata } from "next";
import { existsSync } from "fs";
import path from "path";
import Link from "next/link";
import { Section } from "@/components/Section";
import { achievements, profile, projects, skillGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV)",
  description:
 "Curriculum Vitae and summary resume of M. Aktaruzzaman Opu — Computer Science undergraduate, software engineer, and research explorer.",
};

export default function CVPage() {
  const featuredWork = projects.filter((p) => p.featured);
  /* Download button only renders when public/cv.pdf exists — no more dead link.
     Drop your PDF at public/cv.pdf and it appears automatically. */
  const hasPdf = existsSync(path.join(process.cwd(), "public", "cv.pdf"));

  return (
    <>
      <Section
        title="Curriculum Vitae"
        subtitle="A summary resume highlighting academic history, technical proficiencies, key engineering projects, and research focus."
        action={
          hasPdf ? (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-mono text-primary-foreground hover:bg-primary-hover transition-colors shadow-md shadow-accent/20"
            >
              Download PDF CV ↗
            </a>
          ) : undefined
        }
      >
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-10 shadow-sm">
          {/* HEADER */}
          <div className="border-b border-border pb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                {profile.name}
              </h1>
              <p className="font-mono text-sm text-accent-strong font-semibold mt-1">
                {profile.headline}
              </p>
              <p className="text-xs text-faint mt-2 max-w-xl">
                {profile.intro}
              </p>
            </div>
            <div className="font-mono text-xs text-faint space-y-1 sm:text-right shrink-0">
              <p>{profile.education.location}</p>
              <p>
                <a
                  href={profile.socialLinks.email}
                  className="text-accent-strong hover:underline"
                >
                  {profile.socialLinks.rawEmail}
                </a>
              </p>
              <p>
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  github.com/maopu2001
                </a>
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Education
            </h2>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-sans font-bold text-foreground text-base">
                  {profile.education.degree}
                </h3>
                <p className="text-sm text-faint">
                  {profile.education.institution}
                </p>
              </div>
              <div className="font-mono text-xs text-faint sm:text-right">
                <p>{profile.education.period}</p>
                <p>{profile.education.status}</p>
              </div>
            </div>
          </section>

          {/* RESEARCH & THESIS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Research & Academic Thesis
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                <h3 className="font-sans font-bold text-foreground text-base">
                  Beyond Pixel Reconstruction: Benchmarking CAE-IF, SQAFormer & DINOv2 Models for Zero-Label Microscopy Anomaly Detection
                </h3>
                <span className="font-mono text-xs text-faint shrink-0">
                  2026
                </span>
              </div>
              <p className="text-xs text-accent-strong font-mono font-medium">
                Department of CSE, RMSTU | LIVECell Dataset (5,239 frames)
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Evaluated vision transformer backbones and reconstruction autoencoders. Discovered and benchmarked catastrophic score sign inversion in standard pixel MSE loss metrics during phase-contrast cell imaging defocus corruptions.
              </p>
            </div>
          </section>

          {/* FEATURED PROJECTS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Key Engineering Projects
            </h2>
            <div className="space-y-6">
              {featuredWork.map((proj) => (
                <div key={proj.slug} className="space-y-1.5">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <h3 className="font-sans font-bold text-foreground text-base">
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="hover:text-accent-strong transition-colors"
                      >
                        {proj.title}
                      </Link>
                      <span className="text-xs font-normal text-faint ml-2 font-mono">
                        ({proj.categoryLabel})
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-faint shrink-0">
                      {proj.year}
                    </span>
                  </div>
                  <p className="text-xs text-accent-strong font-mono">
                    Tech: {proj.technologies.join(", ")}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Technical Proficiencies
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.category} className="space-y-1">
                  <h3 className="font-mono text-xs font-semibold text-accent-strong uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <p className="text-xs text-foreground leading-relaxed">
                    {group.skills.map((s) => s.name).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ACHIEVEMENTS & LEADERSHIP */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Leadership & Activities
            </h2>
            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-sans font-medium text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-faint">{item.description}</p>
                  </div>
                  <span className="font-mono text-xs text-faint shrink-0">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { existsSync } from "fs";
import path from "path";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  achievements,
  profile,
  projects,
  publications,
  skillGroups,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV)",
  description:
    "Curriculum Vitae and summary resume of M. Aktaruzzaman Opu — Computer Science undergraduate (Rank 1st, CGPA 3.96/4.00), software engineer, and research explorer.",
};

export default function CVPage() {
  const featuredWork = projects.filter((p) => p.featured);
  const pdfExists =
    existsSync(path.join(process.cwd(), "public", "CV.pdf")) ||
    existsSync(path.join(process.cwd(), "public", "cv.pdf"));

  return (
    <>
      <Section
        title="Curriculum Vitae"
        subtitle="A summary resume highlighting academic excellence (Rank 1st, CGPA 3.96/4.00), IEEE publication, teaching experience, competitive programming, and technical systems."
        action={
          pdfExists ? (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-mono text-primary-foreground hover:bg-primary-hover transition-colors shadow-md shadow-accent/20 font-semibold"
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
                {profile.education.degree} (RMSTU)
              </p>
              <p className="text-xs text-muted-foreground mt-2 max-w-xl">
                {profile.intro} {profile.subIntro}
              </p>
            </div>
            <div className="font-mono text-xs text-muted-foreground space-y-1 sm:text-right shrink-0">
              <p className="text-foreground font-semibold">{profile.education.location}</p>
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
              <p>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  linkedin.com/in/m-aktaruzzaman-opu
                </a>
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Education
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-muted/40 p-4 space-y-2">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-base">
                      {profile.education.degree}
                    </h3>
                    <p className="text-sm text-accent-strong font-medium">
                      {profile.education.department}, {profile.education.institution}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground sm:text-right">
                    <p>{profile.education.period}</p>
                    <p className="text-accent-strong font-semibold">
                      CGPA: {profile.education.cgpa} / {profile.education.scale}
                    </p>
                    <p className="font-semibold text-foreground">
                      Merit Standing: {profile.education.meritStanding}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside pt-1">
                  {profile.education.academicHighlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 font-mono text-xs">
                {profile.education.secondaryEducation.map((sec, idx) => (
                  <div key={idx} className="rounded-xl border border-border bg-card p-3.5 space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-foreground">{sec.degree}</span>
                      <span className="text-accent-strong font-semibold">GPA: {sec.gpa}</span>
                    </div>
                    <p className="text-faint">{sec.institution}</p>
                    <p className="text-faint">{sec.board} • {sec.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PEER-REVIEWED PUBLICATIONS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Peer-Reviewed Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-card p-5 space-y-2.5">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <h3 className="font-sans font-bold text-foreground text-base">
                      {pub.title}
                    </h3>
                    <span className="font-mono text-xs text-accent-strong font-semibold shrink-0">
                      {pub.publisher} {pub.year}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-accent-strong">
                    Authors: {pub.authors.join(", ")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Published in: <em>{pub.venue}</em>, {pub.location}, {pub.year}
                    {pub.pages ? `, pp. ${pub.pages}` : ""}.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1 font-mono text-xs">
                    {pub.ieeeXploreUrl && (
                      <a
                        href={pub.ieeeXploreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent-strong hover:underline font-semibold"
                      >
                        IEEE Xplore ↗
                      </a>
                    )}
                    {pub.doiUrl && (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        DOI: {pub.doi} ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TEACHING EXPERIENCE */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Teaching Experience & Academic Mentorship
            </h2>
            <div className="space-y-4">
              {profile.teachingExperience.map((exp, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-card p-5 space-y-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-sans font-bold text-foreground text-base">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-accent-strong font-medium">
                        {exp.institution}, {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside pt-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <div className="pt-2 font-mono text-xs text-faint">
                    <span className="text-foreground font-semibold">Modules Covered:</span>{" "}
                    {exp.topics.join(" • ")}
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-dashed border-border p-4 font-mono text-xs">
                <span className="text-foreground font-semibold">Teaching & Curriculum Interests:</span>
                <p className="text-muted-foreground mt-1">
                  {profile.teachingInterests.join(" • ")}
                </p>
              </div>
            </div>
          </section>

          {/* RESEARCH & UNDERGRADUATE THESIS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Undergraduate Research Thesis
            </h2>
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                <h3 className="font-sans font-bold text-foreground text-base">
                  Zero-Label Cell Microscopy: Anomaly Detection Using Vision Transformers and DINOv2
                </h3>
                <span className="font-mono text-xs text-faint shrink-0">
                  Nov 2025 — Aug 2026
                </span>
              </div>
              <p className="text-xs text-accent-strong font-mono font-medium">
                Supervisor: Assistant Professor Md. Mynoddin, Dept. of CSE, RMSTU
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Benchmarked vision transformer models (CAE-IF, SQAFormer, DINOv2 ViT embeddings) on 5,239 unlabelled phase-contrast cell microscopy frames from the LIVECell corpus. Identified score sign inversion in standard pixel MSE loss metrics during phase-contrast defocus corruptions.
              </p>
            </div>
          </section>

          {/* AWARDS, SCHOLARSHIPS & CERTIFICATIONS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Awards, Scholarships & Certifications
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-4 space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-accent-strong font-semibold border border-border text-[0.7rem]">
                      {item.category}
                    </span>
                    <span className="text-faint">{item.year}</span>
                  </div>
                  <h3 className="font-sans font-bold text-foreground text-sm">
                    {item.title}
                  </h3>
                  {item.organization && (
                    <p className="font-mono text-[0.72rem] text-faint">
                      {item.organization}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* KEY ENGINEERING PROJECTS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Key Engineering Projects & Systems
            </h2>
            <div className="space-y-4">
              {featuredWork.map((proj) => (
                <div key={proj.slug} className="rounded-xl border border-border bg-card p-4 sm:p-5 space-y-1.5">
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
                      {proj.year} • {proj.status}
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
                <div key={group.category} className="rounded-xl border border-border bg-card p-4 space-y-1">
                  <h3 className="font-mono text-xs font-bold text-accent-strong uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <p className="text-xs text-foreground leading-relaxed">
                    {group.skills.map((s) => s.name).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ACADEMIC REFERENCES */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
              Academic Supervisor & References
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.references.map((ref, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-card p-5 space-y-1.5 font-mono text-xs shadow-sm">
                  <h3 className="font-sans font-bold text-foreground text-sm">
                    {ref.name}
                  </h3>
                  <p className="text-accent-strong font-medium">{ref.designation}</p>
                  <p className="text-muted-foreground">{ref.department}</p>
                  <p className="text-muted-foreground">{ref.institution}, {ref.location}</p>
                  <p className="pt-1">
                    Email:{" "}
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-accent-strong hover:underline"
                    >
                      {ref.email}
                    </a>
                  </p>
                  <p className="text-faint">({ref.role})</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Section>
    </>
  );
}

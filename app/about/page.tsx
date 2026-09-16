import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Section } from "@/components/Section";
import { achievements, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Me & Future Direction",
  description:
 "Learn about M. Aktaruzzaman Opu — software builder, computer science undergraduate, machine learning explorer, and aspiring university professor.",
};

export default function AboutPage() {
  return (
    <>
      {/* WHO I AM */}
      <Section
        title="About M. Aktaruzzaman Opu"
        subtitle="Builder, software engineer, and computer science undergraduate with broad technical interests and academic aspirations."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Story Column */}
          <div className="space-y-6 lg:col-span-8 text-muted-foreground text-base leading-relaxed">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
                Who I Am
              </h2>
              <p>
                I am a Computer Science & Engineering undergraduate student at{" "}
                <strong className="text-foreground">
                  Rangamati Science and Technology University (RMSTU)
                </strong>
                , maintaining the <strong className="text-accent-strong">1st Merit Standing (Rank 1)</strong> with a <strong className="text-accent-strong">3.96 / 4.00 CGPA</strong> and recipient of the <strong className="text-foreground">2025 UGC Merit Scholarship</strong>. I enjoy building software that solves practical problems while continuously deepening my understanding of underlying computer science principles.
              </p>
              <p>
                My practical foundation lies in full-stack web application engineering and client-side systems (Next.js, TypeScript, WebAssembly, Node.js, MongoDB). Over the last several years, I have constructed platforms and utility applications used directly by students and faculty, including{" "}
                <Link
                  href="/projects/exam-ques-gen"
                  className="text-accent-strong hover:underline font-medium"
                >
                  Exam Studio
                </Link>
                ,{" "}
                <Link
                  href="/projects/teach-easy"
                  className="text-accent-strong hover:underline font-medium"
                >
                  Teach Easy
                </Link>
                ,{" "}
                <Link
                  href="/projects/cgpa-buddy"
                  className="text-accent-strong hover:underline font-medium"
                >
                  CGPA Buddy
                </Link>
                ,{" "}
                <Link
                  href="/projects/question-vault-rmstu"
                  className="text-accent-strong hover:underline font-medium"
                >
                  Question Vault RMSTU
                </Link>
                , and the{" "}
                <Link
                  href="/projects/rmstu-bus-management-system"
                  className="text-accent-strong hover:underline font-medium"
                >
                  RMSTU Transport System
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
                What I Want to Become (Academic Goal)
              </h2>
              <p className="font-serif text-lg text-accent-strong">
                “My long-term goal is to become a university professor. I want to combine teaching, technical work, and research.”
              </p>
              <p>
                I view software engineering not just as code execution, but as a discipline that requires clear mental models and rigorous mathematical intuition. Teaching complex topics—such as algorithms, operating systems, and computer vision—is something I find deeply rewarding.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2">
                What I Enjoy & Technical Interests
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent-strong font-bold">01.</span>
                  <span>
                    <strong className="text-foreground">Building Software:</strong> Transforming ideas into functional, deployed web applications with responsive design and fast APIs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent-strong font-bold">02.</span>
                  <span>
                    <strong className="text-foreground">Computer Vision & ML:</strong> Exploring vision transformers (DINOv2, SQAFormer), zero-shot anomaly detection, and image representations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent-strong font-bold">03.</span>
                  <span>
                    <strong className="text-foreground">Computer Science Foundations:</strong> Systems programming, process scheduling, operating systems, and network communication.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-accent-strong font-bold">04.</span>
                  <span>
                    <strong className="text-foreground">Teaching & Mentorship:</strong> Explaining technical concepts clearly through documentation, structured guides, and university leadership.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-3 font-mono text-xs shadow-sm">
              <h3 className="font-serif text-sm font-bold text-foreground border-b border-border pb-2">
                Education & Location
              </h3>
              <div>
                <span className="text-faint block">Degree</span>
                <span className="text-foreground font-sans font-medium">
                  {profile.education.degree}
                </span>
              </div>
              <div>
                <span className="text-faint block">Merit Standing</span>
                <span className="text-accent-strong font-sans font-bold">
                  Rank 1st (CGPA: {profile.education.cgpa} / {profile.education.scale})
                </span>
              </div>
              <div>
                <span className="text-faint block">Institution</span>
                <span className="text-foreground font-sans">
                  {profile.education.institution}
                </span>
              </div>
              <div>
                <span className="text-faint block">Status & Timeline</span>
                <span className="text-foreground">{profile.education.period}</span>
              </div>
              <div>
                <span className="text-faint block">Location</span>
                <span className="text-foreground">{profile.education.location}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-3 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-foreground border-b border-border pb-2">
                Direct Contact
              </h3>
              <div className="space-y-2.5 font-mono text-xs">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-3.5 text-accent-strong shrink-0" />
                  <a
                    href={profile.socialLinks.email}
                    className="text-foreground hover:text-accent-strong hover:underline truncate"
                  >
                    {profile.socialLinks.rawEmail}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <GithubIcon className="size-3.5 text-accent-strong shrink-0" />
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground hover:text-accent-strong hover:underline"
                  >
                    @maopu2001 ↗
                  </a>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <LinkedinIcon className="size-3.5 text-accent-strong shrink-0" />
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground hover:text-accent-strong hover:underline"
                  >
                    in/maopu2001 ↗
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* VERIFIED ACHIEVEMENTS & ACTIVITIES */}
      <Section
        id="achievements"
        title="Achievements & University Activities"
        subtitle="Verified academic milestones, leadership roles, and technical achievements."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 space-y-2.5 shadow-sm transition-all duration-300 hover:border-accent/50"
            >
              <div className="flex items-center justify-between font-mono text-xs text-faint">
                <span className="rounded-full bg-muted px-3 py-0.5 text-accent-strong font-semibold border border-border">
                  {item.category}
                </span>
                <span>{item.year}</span>
              </div>
              <h3 className="font-serif text-base font-bold text-foreground">
                {item.title}
              </h3>
              {item.organization && (
                <p className="font-mono text-xs text-faint">
                  {item.organization}
                </p>
              )}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

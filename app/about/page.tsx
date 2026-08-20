import type { Metadata } from "next";
import Link from "next/link";
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
          <div className="space-y-6 lg:col-span-8 text-[#4b5563] dark:text-[#a3a3a3] text-base leading-relaxed">
            <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                Who I Am
              </h2>
              <p>
                I am a Computer Science & Engineering undergraduate student at{" "}
                <strong className="text-[#1a2332] dark:text-[#fffcf3]">
                  Rangamati Science and Technology University (RMSTU)
                </strong>
                . I enjoy building software that solves practical problems while continuously deepening my understanding of underlying computer science principles.
              </p>
              <p>
                My practical foundation lies in full-stack web application engineering (Next.js, TypeScript, Node.js, MongoDB). Over the last several years, I have constructed utility applications used directly by students and faculty, including{" "}
                <Link
                  href="/projects/cgpa-buddy"
                  className="text-[#ff4d00] hover:underline font-medium"
                >
                  CGPA Buddy
                </Link>
                ,{" "}
                <Link
                  href="/projects/question-vault-rmstu"
                  className="text-[#ff4d00] hover:underline font-medium"
                >
                  Question Vault RMSTU
                </Link>
                , and the{" "}
                <Link
                  href="/projects/rmstu-bus-management-system"
                  className="text-[#ff4d00] hover:underline font-medium"
                >
                  RMSTU Transport System
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                What I Want to Become (Academic Goal)
              </h2>
              <p className="font-serif text-lg italic text-[#ff4d00]">
                "My long-term goal is to become a university professor. I want to combine teaching, technical work, and research."
              </p>
              <p>
                I view software engineering not just as code execution, but as a discipline that requires clear mental models and rigorous mathematical intuition. Teaching complex topics—such as algorithms, operating systems, and computer vision—is something I find deeply rewarding.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                What I Enjoy & Technical Interests
              </h2>
              <ul className="space-y-3 text-sm text-[#4b5563] dark:text-[#a3a3a3]">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#ff4d00] font-bold">01.</span>
                  <span>
                    <strong className="text-[#1a2332] dark:text-[#fffcf3]">Building Software:</strong> Transforming ideas into functional, deployed web applications with responsive design and fast APIs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#ff4d00] font-bold">02.</span>
                  <span>
                    <strong className="text-[#1a2332] dark:text-[#fffcf3]">Computer Vision & ML:</strong> Exploring vision transformers (DINOv2, SQAFormer), zero-shot anomaly detection, and image representations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#ff4d00] font-bold">03.</span>
                  <span>
                    <strong className="text-[#1a2332] dark:text-[#fffcf3]">Computer Science Foundations:</strong> Systems programming, process scheduling, operating systems, and network communication.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#ff4d00] font-bold">04.</span>
                  <span>
                    <strong className="text-[#1a2332] dark:text-[#fffcf3]">Teaching & Mentorship:</strong> Explaining technical concepts clearly through documentation, structured guides, and university leadership.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 space-y-3 font-mono text-xs shadow-sm">
              <h3 className="font-serif text-sm font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                Education & Location
              </h3>
              <div>
                <span className="text-[#6b7280] dark:text-[#737373] block">Degree</span>
                <span className="text-[#1a2332] dark:text-[#fffcf3] font-sans font-medium">
                  {profile.education.degree}
                </span>
              </div>
              <div>
                <span className="text-[#6b7280] dark:text-[#737373] block">Institution</span>
                <span className="text-[#1a2332] dark:text-[#fffcf3] font-sans">
                  {profile.education.institution}
                </span>
              </div>
              <div>
                <span className="text-[#6b7280] dark:text-[#737373] block">Status & Timeline</span>
                <span className="text-[#1a2332] dark:text-[#fffcf3]">{profile.education.period}</span>
              </div>
              <div>
                <span className="text-[#6b7280] dark:text-[#737373] block">Location</span>
                <span className="text-[#1a2332] dark:text-[#fffcf3]">{profile.education.location}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 space-y-3 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                Direct Contact
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-[#4b5563] dark:text-[#a3a3a3]">
                  Email:{" "}
                  <a
                    href={profile.socialLinks.email}
                    className="text-[#ff4d00] hover:underline"
                  >
                    {profile.socialLinks.rawEmail}
                  </a>
                </p>
                <p className="text-[#4b5563] dark:text-[#a3a3a3]">
                  GitHub:{" "}
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ff4d00] hover:underline"
                  >
                    @maopu2001 ↗
                  </a>
                </p>
                <p className="text-[#4b5563] dark:text-[#a3a3a3]">
                  LinkedIn:{" "}
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ff4d00] hover:underline"
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
              className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 space-y-2.5 shadow-sm transition-all duration-300 hover:border-[#ff4d00]/50"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[#6b7280] dark:text-[#737373]">
                <span className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-3 py-0.5 text-[#ff4d00] font-semibold border border-[#e8e2d2] dark:border-white/10">
                  {item.category}
                </span>
                <span>{item.year}</span>
              </div>
              <h3 className="font-serif text-base font-bold text-[#1a2332] dark:text-[#fffcf3]">
                {item.title}
              </h3>
              {item.organization && (
                <p className="font-mono text-xs text-[#6b7280] dark:text-[#a3a3a3]">
                  {item.organization}
                </p>
              )}
              <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

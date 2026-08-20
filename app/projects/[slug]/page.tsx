import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = project.relatedProjects
    ? projects.filter((p) => project.relatedProjects?.includes(p.slug))
    : [];

  return (
    <article className="space-y-12 py-4">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 font-mono text-xs text-[#52525b] dark:text-[#a3a3a3] hover:text-[#ff4d00] transition-colors"
        >
          ← Back to All Projects
        </Link>
      </div>

      {/* HEADER */}
      <header className="space-y-4 border-b border-[#e8e2d2] dark:border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-3 py-1 text-[#ff4d00] border border-[#e8e2d2] dark:border-white/10 font-semibold">
            {project.categoryLabel}
          </span>
          <span className="text-[#6b7280] dark:text-[#737373]">Year: {project.year}</span>
          <span className="text-[#6b7280] dark:text-[#737373]">•</span>
          <span className="text-[#6b7280] dark:text-[#737373]">Status: {project.status}</span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1a2332] dark:text-[#fffcf3] sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        <p className="font-serif text-xl font-medium text-[#ff4d00]">
          {project.tagline}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#1a1a1a] px-5 py-2.5 text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-white/10 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-colors shadow-sm"
            >
              Repository on GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#ff4d00] px-5 py-2.5 text-white hover:bg-[#e04400] transition-colors shadow-md shadow-[#ff4d00]/25 font-semibold"
            >
              Live Demo / Website ↗
            </a>
          )}
        </div>
      </header>

      {/* PROJECT HERO IMAGE */}
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#e8e2d2] dark:border-white/10 bg-[#f5f2e6] dark:bg-neutral-950 shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
            className="object-cover"
          />
        </div>
      )}

      {/* CONTENT SECTIONS */}
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Main Column */}
        <div className="space-y-10 lg:col-span-8">
          {/* Problem */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
              The Problem
            </h2>
            <p className="text-base text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Features */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
              What It Does
            </h2>
            <ul className="space-y-2.5 text-sm text-[#4b5563] dark:text-[#a3a3a3]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-[#ff4d00] shrink-0 mt-0.5 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture */}
          {project.architecture && (
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                How It Works & Architecture
              </h2>
              <p className="text-xs sm:text-sm text-[#1a2332] dark:text-[#fffcf3] leading-relaxed bg-white dark:bg-[#121212] p-5 rounded-2xl border border-[#e8e2d2] dark:border-white/10 font-mono shadow-sm">
                {project.architecture}
              </p>
            </section>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                Technical Challenges
              </h2>
              <ul className="space-y-2.5 text-sm text-[#4b5563] dark:text-[#a3a3a3]">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-[#ff4d00] shrink-0 mt-0.5 font-bold">!</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Lessons */}
          {project.lessons && project.lessons.length > 0 && (
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                What I Learned
              </h2>
              <ul className="space-y-2.5 text-sm text-[#4b5563] dark:text-[#a3a3a3]">
                {project.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-[#ff4d00] shrink-0 mt-0.5 font-bold">★</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6 lg:col-span-4">
          {/* Tech Stack */}
          <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 shadow-sm">
            <h3 className="font-serif text-sm font-bold text-[#1a2332] dark:text-[#fffcf3] mb-3 border-b border-[#e8e2d2] dark:border-white/10 pb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-3 py-1 font-mono text-xs text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-[#1a2332] dark:text-[#fffcf3] mb-3 border-b border-[#e8e2d2] dark:border-white/10 pb-2">
                Related Projects
              </h3>
              <ul className="space-y-3">
                {relatedProjects.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/projects/${rel.slug}`}
                      className="group block text-xs"
                    >
                      <span className="font-bold text-[#1a2332] dark:text-[#fffcf3] group-hover:text-[#ff4d00] transition-colors">
                        {rel.title}
                      </span>
                      <span className="block text-[0.7rem] text-[#6b7280] dark:text-[#737373] font-mono">
                        {rel.categoryLabel}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  ListCollapse,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ProjectStructuredData } from "@/components/StructuredData";
import { getCdnUrl } from "@/lib/cdn";
import { profile, projects } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

function resolveAbsoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const cleanPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `https://maopu.com.bd${cleanPath}`;
}

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

  const ogImageUrl = project.image
    ? resolveAbsoluteUrl(getCdnUrl(project.image))
    : "https://maopu.com.bd/opengraph-image";

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    keywords: [
      project.title,
      project.categoryLabel,
      ...project.technologies,
      profile.name,
      "Software Engineering",
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      url: `https://maopu.com.bd/projects/${slug}`,
      siteName: profile.name,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      images: [ogImageUrl],
      creator: "@maopu2001",
    },
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

  const tocItems = [
    { id: "problem", label: "The Problem", icon: AlertTriangle },
    { id: "features", label: "What It Does", icon: CheckCircle2 },
    ...(project.architecture
      ? [{ id: "architecture", label: "Architecture", icon: Cpu }]
      : []),
    ...(project.challenges && project.challenges.length > 0
      ? [{ id: "challenges", label: "Technical Challenges", icon: Layers }]
      : []),
    ...(project.lessons && project.lessons.length > 0
      ? [{ id: "lessons", label: "Key Learnings", icon: Sparkles }]
      : []),
  ];

  return (
    <>
      <article className="space-y-10 pb-8">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-accent-strong transition-colors group active:scale-95"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* HEADER */}
        <header className="space-y-4 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-accent-strong border border-border font-bold">
              {project.categoryLabel}
            </span>
            <span className="text-muted-foreground font-medium">
              Year {project.year}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-[0.7rem] text-foreground font-semibold border border-border">
              {project.status}
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl font-medium text-accent-strong">
            {project.tagline}
          </p>

          {/* Quick Spec Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="rounded-xl border border-border bg-card p-3 font-mono">
              <span className="text-[0.65rem] text-muted-foreground uppercase tracking-wider block">
                Domain
              </span>
              <span className="text-xs font-semibold text-foreground truncate block">
                {project.categoryLabel}
              </span>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 font-mono">
              <span className="text-[0.65rem] text-muted-foreground uppercase tracking-wider block">
                Timeline
              </span>
              <span className="text-xs font-semibold text-foreground block">
                {project.year}
              </span>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 font-mono">
              <span className="text-[0.65rem] text-muted-foreground uppercase tracking-wider block">
                Technologies
              </span>
              <span className="text-xs font-semibold text-foreground block">
                {project.technologies.length} Stack Tools
              </span>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 font-mono">
              <span className="text-[0.65rem] text-muted-foreground uppercase tracking-wider block">
                Status
              </span>
              <span className="text-xs font-semibold text-accent-strong block">
                {project.status}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3 font-mono text-xs">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary-hover transition-all shadow-md shadow-accent/25 font-semibold active:scale-95 cursor-pointer"
              >
                <span>Live Website / App</span>
                <ExternalLink className="size-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-5 py-2.5 text-foreground border border-border hover:border-accent hover:text-accent-strong transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <GithubIcon className="size-3.5" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* PROJECT HERO IMAGE */}
        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <Image
              src={getCdnUrl(project.image)}
              alt={project.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover"
            />
          </div>
        )}

        {/* CONTENT SECTIONS & SIDEBAR */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Main Column */}
          <div className="space-y-12 lg:col-span-8">
            {/* Problem */}
            <section id="problem" className="space-y-3 scroll-mt-24">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
                <AlertTriangle className="size-4 text-accent-strong" />
                <span>The Problem</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Features */}
            <section id="features" className="space-y-3 scroll-mt-24">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent-strong" />
                <span>What It Does</span>
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-accent-strong shrink-0 mt-0.5 font-bold">
                      ✓
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture */}
            {project.architecture && (
              <section id="architecture" className="space-y-3 scroll-mt-24">
                <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <Cpu className="size-4 text-accent-strong" />
                  <span>How It Works & Architecture</span>
                </h2>
                <div className="text-xs sm:text-sm text-foreground leading-relaxed bg-card p-5 sm:p-6 rounded-2xl border border-border font-mono shadow-sm">
                  <p className="whitespace-pre-wrap">{project.architecture}</p>
                </div>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <section id="challenges" className="space-y-3 scroll-mt-24">
                <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <Layers className="size-4 text-accent-strong" />
                  <span>Technical Challenges</span>
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-accent-strong shrink-0 mt-0.5 font-bold">
                        !
                      </span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Lessons */}
            {project.lessons && project.lessons.length > 0 && (
              <section id="lessons" className="space-y-3 scroll-mt-24">
                <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <Sparkles className="size-4 text-accent-strong" />
                  <span>What I Learned</span>
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-accent-strong shrink-0 mt-0.5 font-bold">
                        ★
                      </span>
                      <span className="leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6 lg:col-span-4 lg:sticky lg:top-28">
            {/* Quick Table of Contents Jump Links */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
              <h3 className="font-serif text-xs font-bold text-foreground mb-3 flex items-center gap-1.5 uppercase tracking-wider font-mono border-b border-border pb-2">
                <ListCollapse className="size-3.5 text-accent-strong" />
                <span>On This Page</span>
              </h3>
              <nav className="flex flex-col space-y-1.5 font-mono text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-muted-foreground hover:bg-muted hover:text-accent-strong transition-all"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-strong" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Tech Stack */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
              <h3 className="font-serif text-xs font-bold text-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider font-mono">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
                <h3 className="font-serif text-xs font-bold text-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider font-mono">
                  Related Projects
                </h3>
                <ul className="space-y-3">
                  {relatedProjects.map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        href={`/projects/${rel.slug}`}
                        className="group block text-xs"
                      >
                        <span className="font-bold text-foreground group-hover:text-accent-strong transition-colors block">
                          {rel.title}
                        </span>
                        <span className="block text-[0.7rem] text-muted-foreground font-mono">
                          {rel.categoryLabel} • {rel.year}
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
      <ProjectStructuredData project={project} />
    </>
  );
}

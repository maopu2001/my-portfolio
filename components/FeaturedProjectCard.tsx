"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/content/types";

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="group relative rounded-2xl border border-border bg-card p-4 sm:p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
    >
      <div className="grid gap-4 sm:gap-8 lg:grid-cols-12 items-start">
        {/* Project Thumbnail */}
        <div className="lg:col-span-6 relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-faint">
              No Preview
            </div>
          )}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 rounded-full bg-background/90 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[0.65rem] sm:text-[0.7rem] text-accent-strong border border-border backdrop-blur-md font-semibold">
            {project.categoryLabel}
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3 sm:gap-4 h-full">
          <div>
            <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-faint mb-1 sm:mb-2">
              <span>{project.year}</span>
              <span className="text-accent-strong font-semibold">{project.status}</span>
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent-strong sm:text-3xl">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>

            <p className="text-xs sm:text-sm font-medium text-accent-strong mt-0.5 sm:mt-1">
              {project.tagline}
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-3">
              {project.problem}
            </p>
          </div>

          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 my-2 sm:my-3">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[0.65rem] sm:text-[0.7rem] text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 font-mono text-xs">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 font-semibold text-accent-strong hover:underline"
              >
                Read Case Study →
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

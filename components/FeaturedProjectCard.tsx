"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/content/types";

type FeaturedProjectCardProps = {
  project: Project;
  isFirst?: boolean;
};

export function FeaturedProjectCard({
  project,
  isFirst = false,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="group relative rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-4 sm:p-8 transition-all duration-300 hover:border-[#ff4d00]/50 hover:shadow-lg hover:shadow-[#ff4d00]/5 hover:-translate-y-0.5"
    >
      <div className="grid gap-4 sm:gap-8 lg:grid-cols-12 items-start">
        {/* Project Thumbnail */}
        <div className="lg:col-span-6 relative aspect-video w-full overflow-hidden rounded-xl border border-[#e8e2d2] dark:border-white/10 bg-[#f5f2e6] dark:bg-neutral-950">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-[#6b7280] dark:text-[#737373]">
              No Preview
            </div>
          )}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 rounded-full bg-[#fffcf3]/90 dark:bg-[#0a0a0a]/90 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[0.65rem] sm:text-[0.7rem] text-[#ff4d00] border border-[#e8e2d2] dark:border-white/10 backdrop-blur-md font-semibold">
            {project.categoryLabel}
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3 sm:gap-4 h-full">
          <div>
            <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-[#6b7280] dark:text-[#737373] mb-1 sm:mb-2">
              <span>{project.year}</span>
              <span className="text-[#ff4d00] font-semibold">{project.status}</span>
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-[#1a2332] dark:text-[#fffcf3] transition-colors group-hover:text-[#ff4d00] sm:text-3xl">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>

            <p className="text-xs sm:text-sm font-medium text-[#ff4d00] mt-0.5 sm:mt-1">
              {project.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed mt-2 sm:mt-3">
              {project.problem}
            </p>
          </div>

          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 my-2 sm:my-3">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[0.65rem] sm:text-[0.7rem] text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 font-mono text-xs">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 font-semibold text-[#ff4d00] hover:underline"
              >
                Read Case Study →
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4b5563] hover:text-[#1a2332] dark:text-[#a3a3a3] dark:hover:text-[#fffcf3]"
                >
                  GitHub ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4b5563] hover:text-[#1a2332] dark:text-[#a3a3a3] dark:hover:text-[#fffcf3]"
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

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/types";

type ProjectsArchiveProps = {
  initialProjects: Project[];
};

const CATEGORIES: { label: string; value: string }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Applications", value: "web" },
  { label: "Software & Systems", value: "software" },
  { label: "AI & Machine Learning", value: "ai" },
  { label: "Computer Vision", value: "computer-vision" },
  { label: "University Projects", value: "university" },
  { label: "Developer Tools", value: "tool" },
];

export function ProjectsArchive({ initialProjects }: ProjectsArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" ||
        project.category === selectedCategory ||
        (selectedCategory === "ai" &&
          (project.category === "ai" || project.category === "computer-vision"));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return categoryMatch && searchMatch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* FILTER CONTROLS */}
      <div className="flex flex-col gap-3 sm:gap-4 border-b border-[#e8e2d2] dark:border-white/10 pb-5 sm:pb-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects (e.g. Next.js, PyTorch)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm text-[#1a2332] dark:text-[#fffcf3] placeholder-[#6b7280] dark:placeholder-[#737373] outline-none transition-colors focus:border-[#ff4d00] shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-2.5 sm:top-3 text-xs text-[#6b7280] dark:text-[#737373] hover:text-[#1a2332] dark:hover:text-[#fffcf3]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[0.7rem] sm:text-xs">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`rounded-full px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-200 ${
                  active
                    ? "bg-[#ff4d00] font-semibold text-white shadow-md shadow-[#ff4d00]/25"
                    : "bg-white dark:bg-[#1a1a1a] text-[#52525b] dark:text-[#a3a3a3] border border-[#e8e2d2] dark:border-white/10 hover:border-[#ff4d00] hover:text-[#1a2332] dark:hover:text-[#fffcf3]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS SUMMARY */}
      <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-[#6b7280] dark:text-[#737373]">
        <span>
          Showing {filteredProjects.length} of {initialProjects.length} projects
        </span>
        {selectedCategory !== "all" && (
          <span className="text-[#ff4d00]">Filter: {selectedCategory}</span>
        )}
      </div>

      {/* PROJECT LIST */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#e8e2d2] dark:border-white/10 py-10 text-center text-xs sm:text-sm text-[#6b7280] dark:text-[#737373]">
          No projects matched your current search criteria.
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col gap-4 sm:gap-6 rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-4 sm:p-6 transition-all duration-300 hover:border-[#ff4d00]/50 lg:flex-row lg:items-start"
            >
              {/* Thumbnail */}
              {project.image && (
                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-[#e8e2d2] dark:border-white/10 bg-[#f5f2e6] dark:bg-neutral-950 lg:w-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 256px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-[#6b7280] dark:text-[#737373] mb-1">
                    <span className="text-[#ff4d00] font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a2332] dark:text-[#fffcf3] transition-colors group-hover:text-[#ff4d00]">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs font-medium text-[#ff4d00] mt-0.5 sm:mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 sm:mt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#f5f2e6] dark:bg-[#1a1a1a] px-2.5 py-0.5 font-mono text-[0.65rem] sm:text-[0.7rem] text-[#1a2332] dark:text-[#fffcf3] border border-[#e8e2d2] dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4 font-mono text-xs">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-semibold text-[#ff4d00] hover:underline"
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

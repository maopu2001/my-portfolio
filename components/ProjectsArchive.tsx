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
          (project.category === "ai" ||
            project.category === "computer-vision"));

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
      <div className="flex flex-col gap-3 sm:gap-4 border-b border-border pb-5 sm:pb-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects (e.g. Next.js, PyTorch)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by title, description or technology"
            className="w-full rounded-full border border-border bg-card px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm text-foreground placeholder-faint outline-none transition-colors focus:border-accent shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-2.5 sm:top-3 text-xs text-faint hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[0.7rem] sm:text-xs"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                aria-pressed={active}
                className={`rounded-full px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-200 ${
                  active
                    ? "bg-primary font-semibold text-primary-foreground shadow-md shadow-accent/25"
                    : "bg-card text-muted-foreground border border-border hover:border-accent hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS SUMMARY */}
      <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-faint">
        <span role="status">
          Showing {filteredProjects.length} of {initialProjects.length} projects
        </span>
        {selectedCategory !== "all" && (
          <span className="text-accent-strong">Filter: {selectedCategory}</span>
        )}
      </div>

      {/* PROJECT LIST */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-10 text-center text-xs sm:text-sm text-faint">
          No projects matched your current search criteria.
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col gap-4 sm:gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-accent/50 lg:flex-row lg:items-start"
            >
              {/* Thumbnail */}
              {project.image && (
                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:w-70 lg:h-full">
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
                  <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-faint mb-1">
                    <span className="text-accent-strong font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-accent-strong">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs font-medium text-accent-strong mt-0.5 sm:mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 sm:mt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[0.65rem] sm:text-[0.7rem] text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4 font-mono text-xs">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-semibold text-accent-strong hover:underline"
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

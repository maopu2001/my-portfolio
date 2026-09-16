"use client";

import { useState, useMemo, useDeferredValue } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  SlidersHorizontal,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { getCdnUrl } from "@/lib/cdn";
import type { Project } from "@/lib/content/types";

type ProjectsArchiveProps = {
  initialProjects: Project[];
};

const CATEGORIES: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Systems & Software", value: "software" },
  { label: "AI & ML", value: "ai" },
  { label: "Computer Vision", value: "computer-vision" },
  { label: "University", value: "university" },
  { label: "Dev Tools", value: "tool" },
];

export function ProjectsArchive({ initialProjects }: ProjectsArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Defer search value to prevent UI blocking during fast typing
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Compute item count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: initialProjects.length };
    CATEGORIES.forEach((cat) => {
      if (cat.value === "all") return;
      counts[cat.value] = initialProjects.filter((p) => {
        if (cat.value === "ai") {
          return p.category === "ai" || p.category === "computer-vision";
        }
        return p.category === cat.value;
      }).length;
    });
    return counts;
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" ||
        project.category === selectedCategory ||
        (selectedCategory === "ai" &&
          (project.category === "ai" ||
            project.category === "computer-vision"));

      // Search match using deferred value
      const query = deferredSearchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return categoryMatch && searchMatch;
    });
  }, [initialProjects, selectedCategory, deferredSearchQuery]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* FILTER CONTROLS */}
      <div className="flex flex-col gap-4 border-b border-border pb-6">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 size-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects (e.g. Next.js, PyTorch, WASM, DINOv2)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by title, description or technology"
            className="w-full rounded-full border border-border bg-card pl-11 pr-12 py-2.5 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3.5 flex size-6 cursor-pointer items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[0.7rem] sm:text-xs"
          role="group"
          aria-label="Filter projects by category"
        >
          <div className="hidden sm:flex items-center gap-1 text-muted-foreground mr-1">
            <SlidersHorizontal className="size-3.5" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.value;
            const count = categoryCounts[cat.value] ?? 0;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                aria-pressed={active}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-150 active:scale-95 ${
                  active
                    ? "bg-primary font-semibold text-primary-foreground shadow-sm shadow-accent/25"
                    : "bg-card text-muted-foreground border border-border hover:border-accent hover:text-foreground"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[0.62rem] ${
                    active
                      ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS SUMMARY */}
      <div className="flex items-center justify-between font-mono text-[0.72rem] sm:text-xs text-muted-foreground">
        <span role="status">
          Showing{" "}
          <strong className="text-foreground">{filteredProjects.length}</strong>{" "}
          of {initialProjects.length} projects
        </span>
        {selectedCategory !== "all" && (
          <button
            onClick={() => setSelectedCategory("all")}
            className="cursor-pointer text-accent-strong hover:underline"
          >
            Reset filter (active: {selectedCategory})
          </button>
        )}
      </div>

      {/* PROJECT LIST */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-14 text-center">
          <p className="text-sm font-medium text-foreground">
            No projects matched your criteria.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Try adjusting keywords or selecting &ldquo;All&rdquo; categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 inline-flex cursor-pointer items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover active:scale-95 transition-all"
          >
            Reset Search
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col gap-4 sm:gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 lg:flex-row lg:items-start active:scale-[0.995]"
            >
              {/* Thumbnail */}
              {project.image && (
                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:w-64 lg:h-full">
                  <Image
                    src={getCdnUrl(project.image)}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 256px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-background/90 px-2.5 py-0.5 font-mono text-[0.65rem] text-accent-strong border border-border backdrop-blur-md font-semibold">
                    {project.categoryLabel}
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between font-mono text-[0.7rem] sm:text-xs text-muted-foreground mb-1">
                    <span className="text-accent-strong font-semibold">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span className="text-foreground font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-accent-strong">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs font-medium text-accent-strong mt-0.5 sm:mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
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
                      className="inline-flex items-center gap-1 font-semibold text-accent-strong hover:underline active:scale-95"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground active:scale-95"
                      >
                        <GithubIcon className="size-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground active:scale-95"
                      >
                        <ExternalLink className="size-3.5" />
                        <span>Live Demo</span>
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

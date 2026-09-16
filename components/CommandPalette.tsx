"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  FolderGit2,
  BookOpen,
  Sparkles,
  Compass,
  FileText,
  Mail,
  Sun,
  Moon,
  ExternalLink,
  Command,
  ArrowRight,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { projects, experiments, publications, profile } from "@/lib/content";

type SearchItem = {
  id: string;
  title: string;
  subtitle?: string;
  category: "Pages" | "Projects" | "Research" | "Experiments" | "Actions" | "Links";
  href?: string;
  action?: () => void;
  external?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Open/close keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Reset index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Build searchable index
  const items: SearchItem[] = useMemo(() => {
    const pageItems: SearchItem[] = [
      { id: "p-home", title: "Home", subtitle: "Overview & summary", category: "Pages", href: "/", icon: Compass },
      { id: "p-projects", title: "Projects", subtitle: "Software archive & web systems", category: "Pages", href: "/projects", icon: FolderGit2 },
      { id: "p-research", title: "Research & Publications", subtitle: "Computer vision & IEEE papers", category: "Pages", href: "/research", icon: BookOpen },
      { id: "p-experiments", title: "Experiments & Learning", subtitle: "Explorations & prototypes", category: "Pages", href: "/experiments", icon: Sparkles },
      { id: "p-journey", title: "Journey & Timeline", subtitle: "Chronological engineering progress", category: "Pages", href: "/journey", icon: Compass },
      { id: "p-about", title: "About Me", subtitle: "Background, education & vision", category: "Pages", href: "/about", icon: FileText },
      { id: "p-cv", title: "Curriculum Vitae", subtitle: "Academic & software CV", category: "Pages", href: "/cv", icon: FileText },
      { id: "p-contact", title: "Contact", subtitle: "Get in touch & direct email", category: "Pages", href: "/contact", icon: Mail },
    ];

    const projectItems: SearchItem[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.title,
      subtitle: `${p.categoryLabel} • ${p.technologies.slice(0, 3).join(", ")}`,
      category: "Projects",
      href: `/projects/${p.slug}`,
      icon: FolderGit2,
    }));

    const researchItems: SearchItem[] = publications.map((pub, idx) => ({
      id: `pub-${idx}`,
      title: pub.title,
      subtitle: `${pub.venue} (${pub.year})`,
      category: "Research",
      href: pub.ieeeXploreUrl || pub.doiUrl || "/research",
      external: !!(pub.ieeeXploreUrl || pub.doiUrl),
      icon: BookOpen,
    }));

    const experimentItems: SearchItem[] = experiments.map((exp) => ({
      id: `exp-${exp.slug}`,
      title: exp.title,
      subtitle: `${exp.category} • ${exp.technology.join(", ")}`,
      category: "Experiments",
      href: `/experiments#${exp.slug}`,
      icon: Sparkles,
    }));

    const actionItems: SearchItem[] = [
      {
        id: "act-theme",
        title: "Toggle Dark / Light Theme",
        subtitle: `Currently: ${theme || "system"}`,
        category: "Actions",
        action: () => setTheme(theme === "dark" ? "light" : "dark"),
        icon: theme === "dark" ? Sun : Moon,
      },
      {
        id: "act-copy-email",
        title: `Copy Email (${profile.socialLinks.rawEmail})`,
        subtitle: "Copy to clipboard",
        category: "Actions",
        action: () => navigator.clipboard.writeText(profile.socialLinks.rawEmail),
        icon: Mail,
      },
    ];

    const linkItems: SearchItem[] = [
      {
        id: "link-gh",
        title: "GitHub Profile",
        subtitle: "github.com/Aktaruzzaman-Opu",
        category: "Links",
        href: profile.socialLinks.github,
        external: true,
        icon: GithubIcon,
      },
      {
        id: "link-li",
        title: "LinkedIn Profile",
        subtitle: "linkedin.com/in/aktaruzzaman-opu",
        category: "Links",
        href: profile.socialLinks.linkedin,
        external: true,
        icon: LinkedinIcon,
      },
    ];

    return [...pageItems, ...actionItems, ...projectItems, ...researchItems, ...experimentItems, ...linkItems];
  }, [theme, setTheme]);

  // Filter items based on query
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return items.slice(0, 14);

    return items
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [items, query]);

  // Handle select action
  const handleSelect = useCallback(
    (item: SearchItem) => {
      setIsOpen(false);
      setQuery("");
      if (item.action) {
        item.action();
      } else if (item.href) {
        if (item.external) {
          window.open(item.href, "_blank", "noreferrer");
        } else {
          router.push(item.href);
        }
      }
    },
    [router]
  );

  // Keyboard navigation inside list
  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5 sm:px-5">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, research, pages, actions..."
            aria-label="Search command palette"
            className="flex-1 bg-transparent font-sans text-sm text-foreground placeholder-muted-foreground outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search query"
              className="rounded p-1 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="size-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center font-mono text-xs text-muted-foreground">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    aria-selected={isSelected}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg border ${
                          isSelected
                            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
                            : "border-border bg-muted/60 text-muted-foreground"
                        }`}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div className="truncate">
                        <div className="truncate text-xs font-semibold leading-tight sm:text-sm">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div
                            className={`truncate text-[0.7rem] ${
                              isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                            }`}
                          >
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <span
                        className={`rounded-full px-2 py-0.5 font-mono text-[0.65rem] border ${
                          isSelected
                            ? "border-primary-foreground/30 bg-primary-foreground/20 text-primary-foreground"
                            : "border-border bg-muted text-muted-foreground"
                        }`}
                      >
                        {item.category}
                      </span>
                      {item.external ? (
                        <ExternalLink className="size-3 opacity-60" />
                      ) : (
                        <ArrowRight className="size-3 opacity-60" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2 font-mono text-[0.68rem] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-border bg-card px-1 py-0.5 text-[0.62rem]">↑</kbd>
              <kbd className="rounded border border-border bg-card px-1 py-0.5 text-[0.62rem]">↓</kbd>
              Navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-[0.62rem]">↵</kbd>
              Select
            </span>
          </div>
          <div className="inline-flex items-center gap-1">
            <Command className="size-3" />
            <span>K anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function openCommandPalette() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }
}

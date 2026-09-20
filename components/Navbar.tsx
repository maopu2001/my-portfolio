"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, BookOpen, User, Mail, Search } from "lucide-react";
import { openCommandPalette } from "@/components/CommandPalette";
import { ThemeCustomizer } from "@/components/ThemeCustomizer";
import { profile } from "@/lib/content";

// Complete desktop navigation items (Home is represented by brand logo)
const DESKTOP_NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Journey", href: "/journey" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderGit2 },
  { label: "Research", href: "/research", icon: BookOpen },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* 1. DESKTOP FLOATING NAVBAR (lg+) - Full, spacious, comfortable proportions */}
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 max-lg:hidden">
        <div className="flex items-center justify-between gap-6 xl:gap-8 rounded-full border border-border bg-background/90 px-6 py-2.5 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-accent/50">
          {/* Logo / Home Link */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-foreground pr-1"
            aria-label={`${profile.name} Home`}
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-semibold text-sm xl:text-base group-hover:text-accent-strong transition-colors">
              {profile.name}
            </span>
          </Link>

          {/* Primary Navigation Links */}
          <nav
            className="flex items-center gap-1.5"
            aria-label="Main Navigation"
          >
            {DESKTOP_NAV_ITEMS.map((item) => {
              const active = isLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-150 ${
                    active
                      ? "bg-primary font-semibold text-primary-foreground shadow-sm shadow-accent/25"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Utility Cluster: Search + Theme + CV */}
          <div className="flex items-center gap-2.5 pl-3 border-l border-border/80">
            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette (Press ⌘K)"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground hover:border-accent hover:text-foreground transition-all duration-150 active:scale-95"
            >
              <Search className="size-3.5 text-muted-foreground" />
              <span className="text-xs">Search</span>
              <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[0.62rem] text-faint">
                ⌘K
              </kbd>
            </button>

            <ThemeCustomizer />

            <Link
              href="/cv"
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-mono text-foreground transition-all duration-150 hover:border-accent hover:text-accent-strong active:scale-95"
            >
              CV ↗
            </Link>
          </div>
        </div>
      </header>

      {/* 2. MOBILE TOP BAR (Mobile only: Logo on left + Search & Theme on right) */}
      <header className="fixed inset-x-0 top-3 z-40 flex items-center justify-between px-4 lg:hidden pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-1.5 backdrop-blur-xl shadow-sm font-mono text-xs font-semibold text-foreground active:scale-95 transition-transform"
          aria-label={`${profile.name} Home`}
        >
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span>{profile.name}</span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border bg-background/90 p-1 backdrop-blur-xl shadow-sm">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Search portfolio"
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground active:scale-90 transition-transform cursor-pointer"
          >
            <Search className="size-4" />
          </button>
          <div className="flex-1 size-8 items-center justify-center m-0 p-0">
            <ThemeCustomizer />
          </div>
        </div>
      </header>

      {/* 3. MOBILE BOTTOM NAVIGATION (5 Core Tabs: Home, Projects, Research, About, Contact) */}
      <nav
        className="fixed inset-x-0 bottom-2.5 z-50 mx-auto max-w-md px-3 lg:hidden"
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-around rounded-full border border-border bg-background/95 px-1.5 py-1 pb-[calc(env(safe-area-inset-bottom)+0.3rem)] backdrop-blur-xl shadow-lg">
          {MOBILE_NAV_ITEMS.map((item) => {
            const active = isLinkActive(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-1 transition-all active:scale-95 ${
                  active
                    ? "text-accent-strong font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon
                  className={`size-4 transition-transform ${active ? "scale-110" : ""}`}
                />
                <span className="text-[0.65rem] leading-none font-medium tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

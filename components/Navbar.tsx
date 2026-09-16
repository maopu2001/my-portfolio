"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { mobileNavigationItems, navigationItems, profile } from "@/lib/content";

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Floating Pill Desktop Header Navigation (lg and up) */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 max-lg:hidden">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border bg-background/90 px-5 py-2.5 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-accent/50">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm tracking-tight text-foreground"
            aria-label="M. Aktaruzzaman Opu Home"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-semibold group-hover:text-accent-strong transition-colors">
              {profile.name}
            </span>
          </Link>

          <nav className="flex items-center gap-0.5" aria-label="Main Navigation">
            {navigationItems.map((item, i) => {
              const active = isLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    active
                      ? "bg-primary font-semibold text-primary-foreground shadow-md shadow-accent/25"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="hidden xl:inline font-mono text-[0.6rem] opacity-60 mr-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/cv"
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-mono text-foreground transition-all duration-200 hover:border-accent hover:text-accent-strong"
            >
              CV ↗
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation — max 5 destinations per UX guideline */}
      <nav
        className="fixed inset-x-0 bottom-3 z-50 flex items-center justify-around rounded-full border border-border bg-background/95 mx-3 px-2 py-1.5 backdrop-blur-xl shadow-lg lg:hidden"
        aria-label="Mobile Navigation"
      >
        {mobileNavigationItems.map((item) => {
          const active = isLinkActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-[44px] min-w-[52px] flex-col items-center justify-center gap-0.5 rounded-full px-2 py-1 text-[0.72rem] font-medium transition-all ${
                active
                  ? "text-accent-strong font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{item.shortLabel || item.label}</span>
              {active && (
                <span className="h-1 w-1 rounded-full bg-accent" />
              )}
            </Link>
          );
        })}
        <div className="flex min-h-[44px] items-center">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}

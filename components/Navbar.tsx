"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navigationItems, profile } from "@/lib/content";

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
      {/* Floating Pill Desktop Header Navigation */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 max-md:hidden">
        <div className="flex items-center justify-between gap-6 rounded-full border border-[#e8e2d2] bg-[#fffcf3]/90 dark:border-white/10 dark:bg-[#0a0a0a]/90 px-6 py-2.5 backdrop-blur-xl shadow-sm dark:shadow-2xl transition-all duration-300 hover:border-[#ff4d00]/50">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm tracking-tight text-[#1a2332] dark:text-[#fffcf3]"
            aria-label="M. Aktaruzzaman Opu Home"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#ff4d00] animate-pulse" />
            <span className="font-semibold group-hover:text-[#ff4d00] transition-colors">
              {profile.name}
            </span>
          </Link>

          <nav className="flex items-center gap-1" aria-label="Main Navigation">
            {navigationItems.map((item) => {
              const active = isLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#ff4d00] font-semibold text-white shadow-md shadow-[#ff4d00]/25"
                      : "text-[#52525b] hover:bg-[#f5f2e6] hover:text-[#1a2332] dark:text-[#a3a3a3] dark:hover:bg-[#1f1f1f] dark:hover:text-[#fffcf3]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#1a1a1a] px-4 py-1.5 text-xs font-mono text-[#1a2332] dark:text-[#fffcf3] transition-all duration-200 hover:border-[#ff4d00] hover:text-[#ff4d00] dark:hover:border-[#ff4d00] dark:hover:text-[#ff4d00]"
            >
              CV ↗
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed inset-x-0 bottom-3 z-50 flex items-center justify-around rounded-full border border-[#e8e2d2] bg-[#fffcf3]/95 dark:border-white/10 dark:bg-[#0a0a0a]/95 mx-3 px-3 py-2 backdrop-blur-xl shadow-lg dark:shadow-2xl md:hidden"
        aria-label="Mobile Navigation"
      >
        {navigationItems.map((item) => {
          const active = isLinkActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center px-2 py-0.5 rounded-full text-[0.7rem] font-medium transition-all ${
                active
                  ? "text-[#ff4d00] font-bold"
                  : "text-[#52525b] dark:text-[#a3a3a3] hover:text-[#1a2332] dark:hover:text-[#fffcf3]"
              }`}
            >
              <span>{item.shortLabel || item.label}</span>
              {active && (
                <span className="mt-0.5 h-1 w-1 rounded-full bg-[#ff4d00]" />
              )}
            </Link>
          );
        })}
        <div className="pl-1">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}

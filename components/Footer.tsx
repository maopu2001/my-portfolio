import Link from "next/link";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-neutral-300/80 bg-[#fffcf3]/80 dark:border-neutral-800 dark:bg-[#0a0a0a] px-6 py-10 text-center max-md:pb-24 transition-colors">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-left max-md:text-center">
          <p className="font-serif text-base font-semibold text-neutral-900 dark:text-zinc-200">
            {profile.name}
          </p>
          <p className="text-xs text-neutral-500 dark:text-zinc-500">
            {profile.headline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-600 dark:text-zinc-400">
          <Link href="/projects" className="hover:text-[#ff4d00] transition-colors">
            Projects
          </Link>
          <Link href="/experiments" className="hover:text-[#ff4d00] transition-colors">
            Experiments
          </Link>
          <Link href="/journey" className="hover:text-[#ff4d00] transition-colors">
            Journey
          </Link>
          <Link href="/about" className="hover:text-[#ff4d00] transition-colors">
            About
          </Link>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff4d00] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff4d00] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.socialLinks.email}
            className="hover:text-[#ff4d00] transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-neutral-200 dark:border-neutral-900 pt-6 text-xs text-neutral-500 dark:text-zinc-600">
        <p>© {new Date().getFullYear()} {profile.name}. Personal Engineering Portfolio.</p>
      </div>
    </footer>
  );
}

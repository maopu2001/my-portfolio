import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { FadeIn } from "@/components/animations/FadeIn";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 transition-colors max-md:pb-24">
      {/* Big CTA band — Aditya Gupta language: giant uppercase closing question */}
      <div className="px-6 py-16 sm:py-20 text-center">
        <FadeIn direction="up" duration={0.45}>
          <p className="font-mono text-[0.68rem] sm:text-xs font-semibold text-accent-strong tracking-widest uppercase mb-3">
            Interested in
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase leading-[0.95]">
            Working Together?
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 shadow-md shadow-accent/25"
            >
              Get in Touch →
            </Link>
            <CopyEmail />
          </div>
        </FadeIn>
      </div>

      {/* Link rows */}
      <div className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-left max-md:text-center">
            <p className="font-serif text-base font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="text-xs text-faint">
              {profile.headline}
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground"
            aria-label="Footer"
          >
            <Link href="/projects" className="hover:text-accent-strong transition-colors">
              Projects
            </Link>
            <Link href="/research" className="hover:text-accent-strong transition-colors">
              Research
            </Link>
            <Link href="/experiments" className="hover:text-accent-strong transition-colors">
              Experiments
            </Link>
            <Link href="/journey" className="hover:text-accent-strong transition-colors">
              Journey
            </Link>
            <Link href="/about" className="hover:text-accent-strong transition-colors">
              About
            </Link>
            <Link href="/cv" className="hover:text-accent-strong transition-colors">
              CV
            </Link>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-strong transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-strong transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mx-auto mt-8 max-w-4xl border-t border-border pt-6 text-xs text-faint text-center">
          <p>© {new Date().getFullYear()} {profile.name}. Personal Engineering Portfolio.</p>
        </div>
      </div>
    </footer>
  );
}

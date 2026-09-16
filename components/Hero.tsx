"use client";

import Link from "next/link";
import { GithubIcon } from "@/components/icons/BrandIcons";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { usePreloaderDone } from "@/components/Preloader";
import { profile } from "@/lib/content";

export function Hero() {
  const revealed = usePreloaderDone();

  return (
    <section className="mb-10 sm:mb-16">
      {/* key forces a remount on reveal so the stagger replays after the preloader */}
      <StaggerContainer
        key={revealed ? "live" : "hold"}
        hold={!revealed}
        staggerDelay={0.1}
        className="flex flex-col gap-4 sm:gap-6"
      >
        {/* Status Pill Badge */}
        <StaggerItem>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[0.7rem] sm:text-xs font-medium text-muted-foreground backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-105">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping shrink-0" />
            <span className="text-accent-strong font-semibold">
              CSE Undergraduate
            </span>
            <span className="text-faint">|</span>
            <span className="truncate">Software &amp; Vision</span>
          </div>
        </StaggerItem>

        {/* Name Title */}
        <StaggerItem>
          <div className="space-y-1 sm:space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-faint">
              Hello, I am
            </h2>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight sm:leading-none">
              <span className="text-accent-strong">{profile.name}.</span>
            </h1>
          </div>
        </StaggerItem>

        {/* Headline */}
        <StaggerItem>
          <p className="font-sans text-lg font-semibold text-foreground sm:text-2xl lg:text-3xl max-w-3xl leading-snug">
            {profile.headline}
          </p>
        </StaggerItem>

        {/* Intros */}
        <StaggerItem>
          <div className="max-w-2xl space-y-2 sm:space-y-3 text-sm sm:text-lg text-muted-foreground leading-relaxed">
            <p>{profile.intro}</p>
            <p className="text-xs sm:text-sm text-faint font-mono">
              {profile.subIntro}
            </p>
          </div>
        </StaggerItem>

        {/* Action Buttons */}
        <StaggerItem>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-accent/25"
            >
              Explore Projects →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent-strong hover:-translate-y-0.5 shadow-sm"
            >
              About Me
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-[0.72rem] sm:text-xs text-muted-foreground hover:border-accent hover:text-foreground transition-colors active:scale-95"
            >
              CV ↗
            </Link>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-[0.72rem] sm:text-xs text-muted-foreground hover:border-accent hover:text-foreground transition-colors active:scale-95"
            >
              <GithubIcon className="size-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="mb-10 sm:mb-16 pt-2 sm:pt-6">
      <StaggerContainer staggerDelay={0.1} className="flex flex-col gap-4 sm:gap-6">
        {/* Status Pill Badge */}
        <StaggerItem>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e8e2d2] bg-white/90 dark:border-white/10 dark:bg-[#121212] px-3.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[0.7rem] sm:text-xs font-medium text-[#4b5563] dark:text-[#a3a3a3] backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-105">
            <span className="h-2 w-2 rounded-full bg-[#ff4d00] animate-ping shrink-0" />
            <span className="text-[#ff4d00] font-semibold">CSE Undergraduate</span>
            <span className="text-[#d1cbbd] dark:text-[#333333]">|</span>
            <span className="truncate">Software & Vision</span>
          </div>
        </StaggerItem>

        {/* Name Title */}
        <StaggerItem>
          <div className="space-y-1 sm:space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#6b7280] dark:text-[#a3a3a3] italic">
              Hello, I am
            </h2>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1a2332] dark:text-[#fffcf3] sm:text-6xl lg:text-7xl leading-tight sm:leading-none">
              <span className="text-[#ff4d00]">{profile.name}.</span>
            </h1>
          </div>
        </StaggerItem>

        {/* Headline */}
        <StaggerItem>
          <p className="font-sans text-lg font-semibold text-[#1a2332] dark:text-[#f5f5f5] sm:text-2xl lg:text-3xl max-w-3xl leading-snug">
            {profile.headline}
          </p>
        </StaggerItem>

        {/* Intros */}
        <StaggerItem>
          <div className="max-w-2xl space-y-2 sm:space-y-3 text-sm sm:text-lg text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
            <p>{profile.intro}</p>
            <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#737373] font-mono">{profile.subIntro}</p>
          </div>
        </StaggerItem>

        {/* Action Buttons */}
        <StaggerItem>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#ff4d00] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e04400] hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-[#ff4d00]/25"
            >
              Explore Projects →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-[#1a2332] dark:text-[#fffcf3] transition-all duration-300 hover:border-[#ff4d00] hover:text-[#ff4d00] dark:hover:border-[#ff4d00] dark:hover:text-[#ff4d00] hover:-translate-y-0.5 shadow-sm"
            >
              About Me
            </Link>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#e8e2d2] dark:border-white/10 px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-[0.72rem] sm:text-xs text-[#52525b] dark:text-[#a3a3a3] hover:border-[#ff4d00] hover:text-[#1a2332] dark:hover:text-[#fffcf3] transition-colors"
            >
              CV ↗
            </a>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#e8e2d2] dark:border-white/10 px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-[0.72rem] sm:text-xs text-[#52525b] dark:text-[#a3a3a3] hover:border-[#ff4d00] hover:text-[#1a2332] dark:hover:text-[#fffcf3] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

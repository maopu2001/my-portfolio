import type { ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  subtitle,
  action,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`my-10 sm:my-16 ${className}`}>
      <FadeIn direction="up" duration={0.4}>
        <div className="mb-6 sm:mb-8 flex flex-col justify-between gap-2 border-b border-[#e8e2d2] dark:border-white/10 pb-3 sm:pb-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-[0.68rem] sm:text-xs font-semibold text-[#ff4d00] tracking-widest uppercase block mb-0.5 sm:mb-1">
              Section Breakdown
            </span>
            <h2 className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#1a2332] dark:text-[#fffcf3]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-[#4b5563] dark:text-[#a3a3a3] max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </div>
          {action && <div className="shrink-0 pt-1 sm:pt-0">{action}</div>}
        </div>
        {children}
      </FadeIn>
    </section>
  );
}

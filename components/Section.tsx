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
    <section
      id={id}
      className={`mb-12 sm:mb-16 mt-8 sm:mt-12 first:mt-0 first-of-type:mt-0 ${className}`}
    >
      <FadeIn direction="up" duration={0.4}>
        <div className="mb-6 sm:mb-8 flex flex-col justify-between gap-2 border-b border-border pb-3 sm:pb-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0 pt-1 sm:pt-0">{action}</div>}
        </div>
        {children}
      </FadeIn>
    </section>
  );
}

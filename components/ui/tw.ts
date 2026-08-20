import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const primaryActionButton = cn(
  buttonVariants({ variant: "default", size: "lg" }),
  "h-auto rounded-full bg-[#ff4d00] px-6 py-3 text-xs font-mono uppercase tracking-wider text-white hover:bg-[#e04400] hover:-translate-y-0.5 shadow-md shadow-[#ff4d00]/25 transition-all duration-300",
);

export const textActionButton = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-auto rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#1a2332] dark:text-[#fffcf3] hover:border-[#ff4d00] hover:text-[#ff4d00] dark:hover:border-[#ff4d00] dark:hover:text-[#ff4d00] hover:-translate-y-0.5 transition-all duration-300 shadow-sm",
);

export const navContactButton = cn(
  buttonVariants({ variant: "outline", size: "sm" }),
  "h-auto rounded-full border border-[#e8e2d2] dark:border-white/10 px-4 py-1.5 text-xs font-mono text-[#ff4d00] hover:border-[#ff4d00] hover:bg-[#ff4d00]/10 transition-colors",
);

export const sectionTitle =
  "m-0 font-serif text-2xl font-bold tracking-tight text-[#1a2332] dark:text-[#fffcf3] sm:text-3xl";

export const sectionSubtitle =
  "mt-1 text-sm text-[#4b5563] dark:text-[#a3a3a3] max-w-2xl";

export const subhead =
  "mb-2 mt-0 font-serif text-xl font-bold text-[#1a2332] dark:text-[#fffcf3]";

export const bodyCopy = "m-0 text-sm text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed";

export const label =
  "mb-2 mt-0 text-xs font-mono uppercase tracking-wider text-[#ff4d00] font-semibold";

export const surfaceCard =
  "rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 text-foreground shadow-sm transition-all duration-300 hover:border-[#ff4d00]/50";

export const surfaceCardContent = "p-0";

export const simpleList = "m-0 grid gap-2 pl-4 text-xs text-[#4b5563] dark:text-[#a3a3a3]";

export const chipRow = "flex flex-wrap gap-1.5";

export const chip = cn(
  badgeVariants({ variant: "secondary" }),
  "h-auto rounded-full border border-[#e8e2d2] bg-[#f5f2e6] dark:border-white/10 dark:bg-[#1a1a1a] px-3 py-1 text-[0.7rem] font-mono text-[#1a2332] dark:text-[#fffcf3]",
);

export const detailLabel =
  "mb-1 mt-0 text-xs font-mono uppercase tracking-wider text-[#ff4d00] font-semibold";

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Palette, Check } from "lucide-react";
import {
  DEFAULT_PALETTE,
  PALETTES,
  usePalette,
  type PaletteId,
} from "@/lib/themes";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void | Promise<void>) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

export function ThemeCustomizer({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [currentPalette, setCurrentPalette] = usePalette();
  const mounted = useMounted();

  // Close on escape key and outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div
        className={cn(
          "size-8 rounded-full border border-border bg-card",
          className,
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const runWithTransition = (
    nextStateAction: () => void,
    transitionType: "light" | "dark" | "palette",
  ) => {
    if (
      typeof document === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nextStateAction();
      return;
    }

    const doc = document as ViewTransitionDocument;
    if (!doc.startViewTransition) {
      nextStateAction();
      return;
    }

    document.documentElement.getAnimations().forEach((anim) => anim.cancel());
    document.documentElement.setAttribute(
      "data-theme-transition",
      transitionType,
    );

    const rect = triggerRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => {
      nextStateAction();
    });

    let activeAnim: Animation | null = null;

    transition.ready.then(() => {
      if (transitionType === "light") {
        activeAnim = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 450,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
            fill: "forwards",
          },
        );
      } else if (transitionType === "dark") {
        activeAnim = document.documentElement.animate(
          {
            clipPath: [
              `circle(${endRadius}px at ${x}px ${y}px)`,
              `circle(0px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 450,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-old(root)",
            fill: "forwards",
          },
        );
      } else {
        // Palette cross-fade
        activeAnim = document.documentElement.animate(
          { opacity: [0.3, 1] },
          {
            duration: 250,
            easing: "ease-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      }
    });

    transition.finished.finally(() => {
      if (activeAnim) activeAnim.cancel();
      document.documentElement.removeAttribute("data-theme-transition");
    });
  };

  const handleModeChange = (nextMode: "light" | "dark") => {
    if (nextMode === resolvedTheme) return;
    runWithTransition(() => setTheme(nextMode), nextMode);
  };

  const handlePaletteChange = (paletteId: PaletteId) => {
    if (paletteId === currentPalette) return;
    runWithTransition(() => setCurrentPalette(paletteId), "palette");
  };

  const activePaletteMeta =
    PALETTES.find((p) => p.id === currentPalette) ?? PALETTES[0];

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-200 hover:border-accent hover:text-accent-strong active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Customize theme & palette"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Theme settings"
      >
        {isDark ? (
          <Moon className="size-4 text-accent-strong transition-transform duration-300 group-hover:-rotate-12" />
        ) : (
          <Sun className="size-4 text-accent-strong transition-transform duration-300 group-hover:rotate-45" />
        )}
        {/* Palette dot indicator */}
        <span
          className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full ring-1 ring-background shadow-xs"
          style={{ backgroundColor: activePaletteMeta.primaryColor }}
          aria-hidden="true"
        />
      </button>

      {/* Popover Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Theme settings"
          className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-border bg-card p-4 shadow-xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
            <div className="flex items-center gap-2">
              <Palette className="size-4 text-accent-strong" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider font-mono">
                Theme System
              </span>
            </div>
          </div>

          {/* Axis 1: Color Scheme / Mode */}
          <div className="space-y-2 mb-4">
            <label className="text-[0.7rem] font-mono font-medium text-muted-foreground block">
              COLOR MODE
            </label>
            <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-muted/50 p-1">
              <button
                type="button"
                onClick={() => handleModeChange("light")}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer active:scale-95",
                  !isDark
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-pressed={!isDark}
              >
                <Sun className="size-3.5" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => handleModeChange("dark")}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer active:scale-95",
                  isDark
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-pressed={isDark}
              >
                <Moon className="size-3.5" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Axis 2: Palette Selection */}
          <div className="space-y-2">
            <label className="text-[0.7rem] font-mono font-medium text-muted-foreground block">
              COLOR PALETTE
            </label>
            <div className="space-y-1.5">
              {PALETTES.map((palette) => {
                const isSelected = currentPalette === palette.id;
                return (
                  <button
                    key={palette.id}
                    type="button"
                    onClick={() => handlePaletteChange(palette.id)}
                    className={cn(
                      "group flex w-full items-center justify-between rounded-xl border p-2.5 text-left transition-all duration-150 cursor-pointer active:scale-[0.99]",
                      isSelected
                        ? "border-accent bg-accent/10 shadow-xs"
                        : "border-border hover:border-accent/40 hover:bg-muted/40",
                    )}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Swatch Pill */}
                      <div className="flex -space-x-1 shrink-0">
                        <span
                          className="size-4 rounded-full border border-background shadow-xs"
                          style={{ backgroundColor: palette.primaryColor }}
                          aria-hidden="true"
                        />
                        <span
                          className="size-4 rounded-full border border-background shadow-xs"
                          style={{ backgroundColor: palette.secondaryColor }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={cn(
                              "text-xs font-medium leading-none",
                              isSelected
                                ? "text-foreground font-semibold"
                                : "text-muted-foreground group-hover:text-foreground",
                            )}
                          >
                            {palette.name}
                          </span>
                          {palette.id === DEFAULT_PALETTE && (
                            <span className="rounded-full bg-muted px-1.5 py-0.5 text-[0.6rem] font-mono text-muted-foreground border border-border">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-[0.65rem] text-muted-foreground truncate mt-0.5">
                          {palette.description}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="size-4 text-accent-strong shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-neutral-900" />
    );
  }

  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark";

    // Fallback if View Transitions API or prefers-reduced-motion is active
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    // Clean up any lingering animations on documentElement before starting a new one
    document.documentElement.getAnimations().forEach((anim) => anim.cancel());

    // Set deterministic theme transition direction dataset attribute
    document.documentElement.dataset.themeTransition = nextTheme;

    // Get click position or button center
    const rect = buttonRef.current?.getBoundingClientRect() || {
      left: e.clientX,
      top: e.clientY,
      width: 0,
      height: 0,
    };
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    // Calculate maximum radius to cover the viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Start View Transition
    const transition = (document as any).startViewTransition(() => {
      setTheme(nextTheme);
    });

    let activeAnim: Animation | null = null;

    transition.ready.then(() => {
      if (nextTheme === "light") {
        // LIGHT THEME: Light expands outwards from button to full page
        activeAnim = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
            fill: "forwards",
          }
        );
      } else {
        // DARK THEME: Light shrinks back into button from full page
        activeAnim = document.documentElement.animate(
          {
            clipPath: [
              `circle(${endRadius}px at ${x}px ${y}px)`,
              `circle(0px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-old(root)",
            fill: "forwards",
          }
        );
      }
    });

    transition.finished.finally(() => {
      if (activeAnim) {
        activeAnim.cancel();
      }
      delete document.documentElement.dataset.themeTransition;
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d2] bg-white text-neutral-800 transition-all duration-300 hover:border-[#ff4d00] hover:text-[#ff4d00] dark:border-white/10 dark:bg-neutral-900 dark:text-zinc-200 dark:hover:border-[#ff4d00] dark:hover:text-[#ff4d00] shadow-sm"
      aria-label="Toggle light/dark theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-[#ff4d00] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-[#ff4d00] transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}

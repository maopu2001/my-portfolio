"use client";

import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

/** False during SSR/hydration, true on the client — avoids hydration mismatch
 *  without setState-in-effect (which the React lint rules reject). */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void | Promise<void>) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full border border-border bg-card" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark";

    // Fallback if View Transitions API is unavailable or reduced motion is set
    if (
      typeof document === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const doc = document as ViewTransitionDocument;
    if (!doc.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    // Clean up any lingering animations on documentElement before starting a new one
    document.documentElement.getAnimations().forEach((anim) => anim.cancel());

    // Set deterministic theme transition direction dataset attribute
    document.documentElement.dataset.themeTransition = nextTheme;

    // Get click position or button center
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = e.clientX || (rect ? rect.left + rect.width / 2 : 0);
    const y = e.clientY || (rect ? rect.top + rect.height / 2 : 0);

    // Calculate maximum radius to cover the viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Start View Transition
    const transition = doc.startViewTransition(() => {
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
      className="relative flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-accent hover:text-accent-strong shadow-sm cursor-pointer"
      aria-label="Toggle light/dark theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-accent-strong transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-accent-strong transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}

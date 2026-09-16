"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/content";

/* Replicates aditya-gupta.com.np's GSAP preloader with framer-motion:
   orange overlay -> blurred letter stagger -> line sweep -> subtitle ->
   letters scatter out -> overlay slides up. Shown once per session,
   skipped on reloads and for prefers-reduced-motion users. */

const BRAND = (profile.shortName || profile.name).split("");
const SUBTITLE = "SOFTWARE · VISION · WEB";

// GSAP-equivalent easing curves
const POWER3_OUT = [0.215, 0.61, 0.355, 1] as const;
const POWER2_IN_OUT = [0.45, 0, 0.55, 1] as const;
const POWER2_IN = [0.55, 0.06, 0.68, 0.19] as const;
const POWER4_IN_OUT = [0.77, 0, 0.175, 1] as const;

type Phase = "pending" | "playing" | "leaving" | "done";

declare global {
  interface Window {
    __preloaderDone?: boolean;
  }
}

function notifyPreloaderDone() {
  window.__preloaderDone = true;
  window.dispatchEvent(new Event("preloader:done"));
}

export function Preloader() {
  const [phase, setPhase] = useState<Phase>("pending");
  const timers = useRef<number[]>([]);
  const shouldReduceMotion = useReducedMotion();

  /* The static SSR cover is only needed until the real overlay exists —
     drop the boot class pre-paint so it never shows through the slide-up. */
  useLayoutEffect(() => {
    if (phase === "playing" || phase === "done") {
      document.documentElement.classList.remove("preloader-boot");
    }
  }, [phase]);

  useEffect(() => {
    const nav = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";
    const seen = sessionStorage.getItem("preloaderSeen");

    if (seen || isReload || shouldReduceMotion) {
      notifyPreloaderDone();
      return;
    }

    document.body.style.overflow = "hidden";
    const t: number[] = [];
    // Timeline mirrors the original GSAP positions:
    // letters in @0.6, line @1.34, subtitle @1.74, hold, out @2.84, slide @3.43
    t.push(window.setTimeout(() => setPhase("playing"), 0));
    t.push(window.setTimeout(() => setPhase("leaving"), 3430));
    t.push(
      window.setTimeout(() => {
        document.body.style.overflow = "";
        sessionStorage.setItem("preloaderSeen", "1");
        notifyPreloaderDone();
        setPhase("done");
      }, 4300)
    );
    timers.current = t;

    return () => {
      t.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  if (phase === "pending" || phase === "done") return null;

  const leaving = phase === "leaving";

  return (
    <motion.div
      className="preloader-overlay"
      aria-hidden="true"
      initial={{ y: 0 }}
      animate={leaving ? { y: "-100%" } : { y: 0 }}
      transition={
        leaving ? { duration: 0.8, ease: [...POWER4_IN_OUT] } : undefined
      }
    >
      <div className="preloader-grain" />
      <div className="preloader-content">
        <div className="preloader-brand">
          {BRAND.map((letter, i) => (
            <motion.span
              key={i}
              className="preloader-letter"
              initial="hidden"
              animate={leaving ? "out" : "visible"}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.85, filter: "blur(12px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: [...POWER3_OUT],
                    delay: 0.6 + i * 0.08,
                  },
                },
                out: {
                  opacity: 0,
                  scale: 1.08,
                  filter: "blur(4px)",
                  transition: {
                    duration: 0.5,
                    ease: [...POWER2_IN],
                    delay: i * 0.03,
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="preloader-line"
          initial="hidden"
          animate={leaving ? "out" : "visible"}
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.6, ease: [...POWER2_IN_OUT], delay: 1.34 },
            },
            out: {
              opacity: 0,
              transition: { duration: 0.3, ease: [...POWER2_IN] },
            },
          }}
        />

        <motion.p
          className="preloader-subtitle"
          initial="hidden"
          animate={leaving ? "out" : "visible"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [...POWER2_IN_OUT], delay: 1.74 },
            },
            out: {
              opacity: 0,
              transition: { duration: 0.3, ease: [...POWER2_IN] },
            },
          }}
        >
          {SUBTITLE}
        </motion.p>
      </div>
    </motion.div>
  );
}

/** True once the preloader has finished (or was skipped) — lets above-the-fold
 *  sections hold their entrance animations until the reveal happens. */
export function usePreloaderDone() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.__preloaderDone) {
      const id = window.setTimeout(() => setDone(true), 0);
      return () => window.clearTimeout(id);
    }
    const onDone = () => setDone(true);
    window.addEventListener("preloader:done", onDone, { once: true });
    return () => window.removeEventListener("preloader:done", onDone);
  }, []);

  return done;
}

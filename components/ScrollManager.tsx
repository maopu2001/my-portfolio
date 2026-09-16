"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

/* Route-change scroll manager:
   Next.js resets the scroll to 0 synchronously during navigation commit —
   before any effect can observe the old position. So we track the latest
   scroll offset continuously, and on each push navigation restore that
   offset (pre-paint, invisible) and glide to the exact top ourselves.

   - back/forward keeps native scroll restoration
   - hash links (/experiments#slug) stay with the browser
   - prefers-reduced-motion jumps instantly
   - user input (wheel / touch / keys) cancels the glide */

export function ScrollManager() {
  const pathname = usePathname();
  const popped = useRef(false);
  const lastY = useRef(0);
  const raf = useRef<number | null>(null);

  /* Track the most recent scroll offset at all times */
  useEffect(() => {
    const onScroll = () => {
      lastY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Detect back/forward so they keep native restoration */
  useEffect(() => {
    const onPop = () => {
      popped.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useLayoutEffect(() => {
    if (raf.current !== null) {
      cancelAnimationFrame(raf.current);
      raf.current = null;
    }

    if (popped.current) {
      popped.current = false;
      return;
    }

    if (typeof window === "undefined" || window.location.hash) return;

    const currentY = window.scrollY;
    /* Router may have already reset to 0 — fall back to the tracked offset */
    const startY = Math.max(currentY, lastY.current);

    if (startY === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      lastY.current = 0;
      return;
    }

    /* Restore the old offset before the browser paints this frame */
    if (currentY !== startY) {
      window.scrollTo(0, startY);
    }

    const duration = Math.max(280, Math.min(680, startY * 0.45));
    const start = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let cancelled = false;
    const aborters: [string, () => void][] = [
      ["wheel", () => { cancelled = true; }],
      ["touchstart", () => { cancelled = true; }],
      ["keydown", () => { cancelled = true; }],
    ];
    aborters.forEach(([ev, fn]) =>
      window.addEventListener(ev, fn, { passive: true })
    );

    const finish = () => {
      window.scrollTo(0, 0); /* guarantee an exact landing */
      lastY.current = 0;
      aborters.forEach(([ev, fn]) => window.removeEventListener(ev, fn));
    };

    const step = (now: number) => {
      if (cancelled) {
        aborters.forEach(([ev, fn]) => window.removeEventListener(ev, fn));
        return;
      }
      const progress = Math.min(1, (now - start) / duration);
      window.scrollTo(0, Math.round(startY * (1 - easeInOutCubic(progress))));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        finish();
      }
    };
    raf.current = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      aborters.forEach(([ev, fn]) => window.removeEventListener(ev, fn));
    };
  }, [pathname]);

  return null;
}

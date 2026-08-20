"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Smoothly scroll completely to top (0, 0) on every page change
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}

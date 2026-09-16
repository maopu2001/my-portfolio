"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

export function Marquee({
  children,
  direction = "left",
  speed = 25,
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        ref={containerRef}
        className={`overflow-x-auto whitespace-nowrap flex ${className}`}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap flex ${className}`}
    >
      <motion.div
        className="flex shrink-0 items-center gap-6"
        animate={
          inView
            ? { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }
            : {}
        }
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        {/* Duplicate copy for the seamless loop — hidden from screen readers */}
        <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

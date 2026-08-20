"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

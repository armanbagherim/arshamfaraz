"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Subtle viewport reveal. Motion is disabled for users who prefer reduced
 * motion and neutralised in print via CSS ([data-reveal]).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} data-reveal>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      data-reveal
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

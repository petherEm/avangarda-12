"use client";

import { motion } from "framer-motion";

interface AnimatedDecorativeBarProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedDecorativeBar({
  className = "w-20 h-2 bg-avangarda mb-6",
  width = "5rem",
  height,
  color,
  duration = 0.8,
  delay = 0,
}: AnimatedDecorativeBarProps) {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      whileInView={{ width }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration, ease: "easeOut", delay }}
    />
  );
}

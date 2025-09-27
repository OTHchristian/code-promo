"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down"; // direction d'apparition
  delay?: number;
  duration?: number;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0.2,
  duration = 0.8,
}: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // n’anime qu’une fois
    threshold: 0.1, // visible à 10%
  });

  // définir la translation initiale en fonction de la direction
  const variants: Record<string, { hidden: any; visible: any }> = {
    up: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

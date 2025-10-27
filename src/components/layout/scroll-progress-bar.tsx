"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

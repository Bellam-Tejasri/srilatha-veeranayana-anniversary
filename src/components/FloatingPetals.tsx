"use client";

import { motion, useReducedMotion } from "framer-motion";

const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: (i % 7) * 1.2,
  duration: 12 + (i % 5) * 2,
  size: 12 + (i % 4) * 5,
}));

export default function FloatingPetals() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.7, 0.7, 0],
            rotate: 360,
            x: [0, 35, -25, 20],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0"
          style={{
            left: petal.left,
            fontSize: petal.size,
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}
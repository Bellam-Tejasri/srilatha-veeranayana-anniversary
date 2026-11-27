"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const milestones = [
  { number: "24", label: "Beautiful Years" },
  { number: "288", label: "Months Together" },
  { number: "1", label: "Beautiful Family" },
  { number: "∞", label: "Unconditional Love" },
];

export default function AnniversaryCounter() {
  return (
    <section id="countdown" className="section-padding rose-gradient">
      <div className="mx-auto max-w-5xl text-center">
        <Heart className="mx-auto mb-5 h-7 w-7 fill-petal text-petal" />

        <h2 className="serif text-4xl text-heading md:text-5xl">
          24 Years, Countless Memories
        </h2>

        <p className="mt-5 text-ink-soft">
          Your love only becomes more beautiful with time.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {milestones.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl border border-line bg-card/60 p-6"
            >
              <h3 className="serif text-4xl text-rose md:text-5xl">
                {item.number}
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
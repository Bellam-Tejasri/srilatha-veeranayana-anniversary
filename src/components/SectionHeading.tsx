"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export default function SectionHeading({
  Icon,
  eyebrow,
  title,
  date,
  children,
}: {
  Icon?: LucideIcon;
  eyebrow: string;
  title: ReactNode;
  date?: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12 text-center sm:mb-16"
    >
      {Icon && (
        <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-card text-rose shadow-sm">
          <Icon size={22} />
        </span>
      )}

      <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-rose">
        {eyebrow}
      </span>

      <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h2>

      {date && (
        <p className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full border border-line bg-card px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-rose-deep shadow-sm">
          {date}
        </p>
      )}

      {children && (
        <div className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
          {children}
        </div>
      )}
    </motion.div>
  );
}

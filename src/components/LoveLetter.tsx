"use client";

import { motion } from "framer-motion";
import { Heart, Flower2 } from "lucide-react";

export default function LoveLetter() {
  return (
    <section id="wishes" className="section-padding rose-gradient">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl rounded-3xl border border-line bg-page px-7 py-14 text-center shadow-sm md:px-16"
      >
        <Flower2 className="mx-auto mb-6 h-9 w-9 text-rose" />

        <p className="text-xs uppercase tracking-[0.35em] text-rose">
          A Message From Your Chinnu
        </p>

        <h2 className="serif mt-5 text-4xl text-heading">
          Dear Mammuluu & Daddyluu
        </h2>

        <div className="my-8 flex justify-center">
          <Heart className="h-6 w-6 fill-petal text-petal" />
        </div>

        <div className="space-y-6 text-base leading-9 text-ink-soft">
          <p>
            Happy 24th Wedding Anniversary, Mammuluu and Daddyluu!
          </p>

          <p>
            From November 28, 2002, to November 28, 2026,
            your journey has been a beautiful example of
            love, trust, patience and togetherness.
          </p>

          <p>
            Thank you for being my strength, my inspiration
            and my greatest blessing. Your love has given
            me a home filled with warmth, happiness and
            beautiful memories.
          </p>

          <p>
            I may never be able to express how much you
            both mean to me, but I hope you always know
            how deeply you are loved.
          </p>

          <p className="serif text-2xl italic text-rose-deep">
            May your love continue to bloom forever.
          </p>
        </div>

        <p className="serif mt-10 text-2xl text-heading">
          With endless love, your Chinnu ❤️
        </p>
      </motion.div>
    </section>
  );
}
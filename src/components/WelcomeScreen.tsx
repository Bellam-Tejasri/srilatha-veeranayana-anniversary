
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[200] flex min-h-screen items-center justify-center overflow-hidden bg-page px-5 text-center"
        >
          {/* Background decorations */}
          <div className="absolute left-8 top-12 text-petal-soft">
            <Sparkles size={30} />
          </div>

          <div className="absolute bottom-16 right-10 text-petal">
            <Heart size={35} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 mx-auto max-w-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-7 flex justify-center text-rose"
            >
              <Heart size={48} fill="currentColor" />
            </motion.div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-rose">
              A Special Celebration
            </p>

            <h1 className="font-serif text-4xl leading-tight text-ink sm:text-6xl">
              A Surprise Awaits You
            </h1>

            <p className="mt-6 text-lg text-ink-soft">
              Celebrating your 24 beautiful years of love, togetherness
              and countless memories.
            </p>

            <div className="my-8">
              <p className="font-serif text-3xl italic text-rose-deep">
                Srilatha & Veeranarayana
              </p>
              <p className="mt-3 text-sm tracking-widest text-ink-faint">
                NOVEMBER 28, 2002 — NOVEMBER 28, 2026
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsVisible(false)}
              className="rounded-full bg-rose px-9 py-4 font-semibold text-on-rose shadow-lg shadow-rose/30 transition hover:bg-rose-deep"
            >
              Open the Celebration
              <span className="ml-2">♡</span>
            </motion.button>

            <p className="mt-5 text-xs tracking-wide text-ink-faint">
              Made with love, by your Chinnu
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

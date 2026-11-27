"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Mail,
  X,
  Sparkles,
  Flower2,
} from "lucide-react";

export default function AnniversarySurprise() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <>
      <section
        id="surprise"
        className="relative overflow-hidden bg-page-alt px-6 py-28 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <Flower2 className="mx-auto mb-6 h-9 w-9 text-rose" />

          <p className="text-xs uppercase tracking-[0.35em] text-rose">
            Something Special For You
          </p>

          <h2 className="serif mt-5 text-4xl text-heading md:text-5xl">
            A Little Surprise
          </h2>

          <p className="mt-5 text-base leading-8 text-ink-soft">
            Some feelings are too special to express in words.
            But today, I have written you a little letter straight from my heart.
          </p>

          {!isOpen && (
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mx-auto mt-16 block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-petal"
              aria-label="Open your special anniversary letter"
            >
              <div className="relative flex h-44 w-64 items-center justify-center rounded-xl border border-line-strong bg-blush-deep shadow-xl md:h-52 md:w-80">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-deep text-on-rose shadow-md">
                    <Heart className="h-6 w-6 fill-on-rose" />
                  </div>

                  <span className="serif text-xl text-heading">
                    For Mammuluu & Daddyluu
                  </span>

                  <span className="text-xs tracking-widest text-rose-deep">
                    CLICK TO OPEN
                  </span>
                </motion.div>

                <div className="absolute -bottom-3 -right-3 rounded-full bg-card p-3 shadow-md">
                  <Mail className="h-5 w-5 text-rose-deep" />
                </div>
              </div>
            </motion.button>
          )}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto mt-14 max-w-2xl rounded-3xl border border-line bg-card p-8 shadow-xl md:p-14"
              >
                <div className="absolute right-5 top-5">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close letter"
                    className="rounded-full p-2 text-rose-deep transition hover:bg-page-alt"
                  >
                    <X size={20} />
                  </button>
                </div>

                <Flower2 className="mx-auto mb-6 h-9 w-9 text-rose" />

                <p className="text-xs uppercase tracking-[0.3em] text-rose">
                  A Letter From My Heart
                </p>

                <h3 className="serif mt-5 text-3xl text-heading md:text-4xl">
                  Dearest Mammuluu & Daddyluu,
                </h3>

                <div className="my-7 flex justify-center">
                  <Heart className="h-6 w-6 fill-petal text-petal" />
                </div>

                <div className="space-y-5 text-left text-base leading-8 text-ink-soft">
                  <p>
                    Twenty-four years ago today, a beautiful
                    journey began. Today, I celebrate
                    not just your anniversary, but the love and
                    happiness you have created together.
                  </p>

                  <p>
                    Mammuluu, your love, care and sacrifices have made
                    our house a home. Daddyluu, your strength,
                    guidance and support have always been my
                    inspiration.
                  </p>

                  <p>
                    Through every smile, every challenge and
                    every little moment, you have shown me what
                    it means to stand beside someone and love
                    them unconditionally.
                  </p>

                  <p>
                    I am so lucky to call you my parents.
                    Your journey is my inspiration, and your
                    happiness means the world to me.
                  </p>

                  <p className="serif text-center text-2xl italic text-rose-deep">
                    May you hold each other&apos;s hands forever,
                    just as you did on your beautiful first day.
                  </p>
                </div>

                <p className="serif mt-9 text-2xl text-heading">
                  I love you both endlessly!
                </p>

                <p className="mt-3 text-xs uppercase tracking-widest text-rose">
                  With all my love, your Chinnu ❤️
                </p>

                <motion.button
                  type="button"
                  onClick={() => setShowCelebration(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-rose px-8 py-4 text-sm font-medium text-on-rose shadow-lg transition hover:bg-rose-deep"
                >
                  Open Your Celebration
                  <Sparkles size={17} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-y-auto bg-page-alt px-6 py-12 text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="celebration-title"
          >
            <button
              type="button"
              onClick={() => setShowCelebration(false)}
              aria-label="Close celebration"
              className="absolute right-6 top-6 rounded-full bg-card/80 p-3 text-rose-deep shadow-sm"
            >
              <X size={22} />
            </button>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {Array.from({ length: 24 }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{
                    y: "110vh",
                    x: `${(index * 43) % 100}vw`,
                    opacity: 0,
                    rotate: 0,
                  }}
                  animate={{
                    y: "-15vh",
                    opacity: [0, 1, 1, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 7 + (index % 5),
                    repeat: Infinity,
                    delay: (index % 8) * 0.5,
                    ease: "linear",
                  }}
                  className="absolute text-2xl"
                >
                  {index % 2 === 0 ? "❤️" : "🌸"}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 mx-auto max-w-3xl"
            >
              <Sparkles className="mx-auto mb-8 h-12 w-12 text-rose" />

              <p className="text-xs uppercase tracking-[0.4em] text-rose">
                A Lifetime of Love
              </p>

              <h1
                id="celebration-title"
                className="serif mt-7 text-5xl leading-tight text-heading md:text-7xl"
              >
                Happy 24th
                <span className="mt-3 block italic text-rose">
                  Anniversary!
                </span>
              </h1>

              <div className="my-9 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-line-strong" />
                <Heart className="h-7 w-7 fill-petal text-petal" />
                <span className="h-px w-12 bg-line-strong" />
              </div>

              <h2 className="serif text-3xl text-heading md:text-4xl">
                Srilatha & Veeranarayana
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-lg leading-9 text-ink-soft">
                24 years of holding hands, sharing dreams,
                overcoming challenges and building a beautiful
                family. May the next chapters of your love story
                be even more wonderful.
              </p>

              <p className="serif mt-10 text-3xl italic text-rose-deep">
                Forever together. Forever loved. ❤️
              </p>

              <p className="mt-8 text-xs tracking-[0.3em] text-rose">
                NOVEMBER 28, 2026
              </p>

              <button
                type="button"
                onClick={() => {
                  setShowCelebration(false);
                  setIsOpen(false);
                }}
                className="mt-12 rounded-full border border-rose px-8 py-3 text-sm text-rose-deep transition hover:bg-rose hover:text-on-rose"
              >
                Relive the Surprise
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
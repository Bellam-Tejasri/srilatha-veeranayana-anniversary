"use client";

import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoTile from "@/components/PhotoTile";
import { useLightbox } from "@/components/Lightbox";

export default function FinalAnniversary() {
  // The three of us together, with its own caption (no date line).
  const featured = {
    ...photos.family1,
    caption: "My dear Cute couple",
    date: undefined,
  };

  const { open, lightbox } = useLightbox([featured]);

  return (
    <section
      id="forever"
      className="relative overflow-hidden bg-gradient-to-b from-page-alt via-blush to-blush-deep px-5 py-24 sm:py-32"
    >
      <Flower2 className="flower-decoration absolute -left-6 top-16 h-28 w-28 rotate-12" />
      <Flower2 className="flower-decoration absolute -right-6 bottom-16 h-32 w-32 -rotate-12" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep">
            28 November 2002 — 28 November 2026
          </p>
          <h2 className="serif mt-5 text-5xl leading-tight text-heading md:text-7xl">
            Happy 24th <span className="italic text-rose">Anniversary</span>
          </h2>
          <p className="serif mt-4 text-2xl italic text-rose-deep md:text-3xl">
            Mammuluu & Daddyluu
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-0 rotate-3 rounded-[2.5rem] bg-card/50" />
            <div className="relative">
              <PhotoTile
                photo={featured}
                onOpen={open}
                variant="polaroid"
                frameClassName="aspect-[4/5]"
                sizes="(max-width: 1024px) 90vw, 450px"
                className="-rotate-1"
              />
            </div>
            <Heart className="absolute -right-4 -top-4 h-12 w-12 rotate-12 fill-petal text-petal drop-shadow" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] border border-line bg-page/90 p-7 shadow-sm backdrop-blur sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-rose">
              A message from your Chinnu
            </p>

            <div className="mt-6 space-y-5 text-base leading-8 text-ink-soft">
              <p>Dear Mammuluu and Daddyluu,</p>
              <p>
                From a wedding in 2002 to a home in Tirupati, a decade in
                Nellore, and the shop you built together in Inkollu — I have
                watched you turn nothing into something, one day at a time.
              </p>
              <p>
                Every lesson I know about love, I learned by watching the two
                of you: sharing the work, carrying each other through the hard
                days, and celebrating every small joy together.
              </p>
              <p>
                Thank you for every sacrifice, every early morning, and every
                hug. Being your daughter is the greatest blessing of my life.
              </p>
            </div>

            <p className="serif mt-8 text-2xl italic text-heading">
              With all my love,
              <span className="mt-1 block text-3xl text-rose-deep">Chinnu ❤️</span>
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <div className="mb-6 flex justify-center gap-2 text-rose">
            <Sparkles size={18} />
            <Heart size={18} fill="currentColor" />
            <Sparkles size={18} />
          </div>
          <p className="serif text-3xl italic text-heading sm:text-5xl">
            From Nothing to Something
          </p>
          <p className="serif mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-rose-deep sm:text-2xl">
            Two hearts, one family, countless responsibilities, endless love,
            and a beautiful journey built together.
          </p>
        </motion.blockquote>
      </div>

      {lightbox}
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ChevronDown, Flower2 } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoFrame from "@/components/PhotoFrame";
import { usePhotoAvailability } from "@/components/PhotoProvider";

export default function Hero() {
  const hasPhoto = usePhotoAvailability();
  const couple = photos.couple;
  const showBackdrop = hasPhoto(couple.src);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden rose-gradient px-6 pb-24 pt-28 text-center"
    >
      {/* Soft, blurred copy of their photo as a romantic backdrop */}
      {showBackdrop && (
        <div aria-hidden className="absolute inset-0">
          <Image
            src={couple.src}
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-35 blur-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-page/80 via-blush/70 to-page/95" />
        </div>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Their photograph */}
        <motion.figure
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 1.1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.2rem] bg-blush-deep/60" />
          <div className="rounded-[2rem] bg-card p-3 shadow-[0_25px_60px_-20px_rgba(137,83,102,0.45)] sm:p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <PhotoFrame
                photo={couple}
                preload
                sizes="(max-width: 1024px) 90vw, 560px"
              />
              {/* Gentle romantic glow at the edges, faces left untouched */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(169,87,115,0.28)_100%)]" />
            </div>
            <figcaption className="serif px-2 pt-3 text-center text-base italic text-rose-deep sm:text-lg">
              {couple.caption}
            </figcaption>
          </div>
          <Heart className="absolute -right-3 -top-3 h-10 w-10 rotate-12 fill-petal text-petal drop-shadow" />
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl lg:text-left"
        >
          <Flower2 className="mx-auto mb-6 h-9 w-9 text-rose lg:mx-0" />

          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-rose-deep">
            From your Chinnu, with love
          </p>

          <h1 className="serif text-5xl leading-tight text-heading md:text-7xl">
            Srilatha
            <span className="my-2 block text-3xl italic text-rose md:text-5xl">
              &
            </span>
            Veeranarayana
          </h1>

          <div className="my-8 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-12 bg-line-strong" />
            <Heart className="h-5 w-5 fill-petal text-petal" />
            <span className="h-px w-12 bg-line-strong" />
          </div>

          <h2 className="serif text-2xl italic text-rose-deep md:text-3xl">
            24 Years of Love & Togetherness
          </h2>

          <p className="mt-5 text-sm tracking-widest text-ink-soft">
            NOVEMBER 28, 2002 — TILL DATE
          </p>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-ink-soft lg:mx-0">
            Mammuluu, Daddyluu — this is your story, told by me. Two hearts, one
            beautiful journey, countless memories and a lifetime of
            unconditional love.
          </p>

          <a
            href="#our-story"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-rose bg-card/60 px-8 py-4 text-sm text-rose-deep backdrop-blur transition-all hover:bg-rose hover:text-on-rose"
          >
            Relive Your Story
            <Heart size={16} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 z-10 animate-bounce text-rose">
        <ChevronDown size={26} />
      </div>

      <Flower2 className="flower-decoration absolute left-8 top-20 h-20 w-20 rotate-12" />
      <Flower2 className="flower-decoration absolute bottom-20 right-8 h-24 w-24 -rotate-12" />
    </section>
  );
}

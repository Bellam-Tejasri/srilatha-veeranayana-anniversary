"use client";

import { motion } from "framer-motion";
import { Heart, Home, Sparkles } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoTile from "@/components/PhotoTile";
import { useLightbox } from "@/components/Lightbox";

const album = [photos.wedding2, photos.wedding3, photos.wedding4];

const tilts = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function OurStory() {
  const { open, lightbox } = useLightbox([photos.wedding1, ...album]);

  return (
    <section
      id="our-story"
      className="section-padding relative overflow-hidden bg-page py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-rose">
            A story written with love
          </span>

          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            More Than 24 Years of <span className="italic text-rose">Togetherness</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            Every beautiful journey has a beginning. Yours began with two
            hearts, a promise, and a dream of building a life together.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          {/* Wedding photograph with the date card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -bottom-4 -right-3 -z-10 h-full w-full rounded-[2rem] border border-line" />

            <PhotoTile
              photo={photos.wedding1}
              onOpen={open}
              variant="polaroid"
              frameClassName="aspect-[3/4]"
              sizes="(max-width: 768px) 90vw, 400px"
              className="-rotate-1"
            />

            <div className="relative z-10 mx-auto -mt-6 w-[88%] rounded-2xl border border-line bg-page-alt/95 px-6 py-5 text-center shadow-md backdrop-blur">
              <p className="font-serif text-2xl italic text-rose-deep">
                Srilatha <span className="text-base text-ink-faint">&</span> Veeranarayana
              </p>
              <div className="mx-auto my-3 h-px w-24 bg-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-faint">
                Married on
              </p>
              <p className="mt-1 font-serif text-2xl text-ink">
                28 November 2002
              </p>
              <div className="mt-3 flex justify-center gap-2 text-rose">
                <Sparkles size={15} />
                <Heart size={15} fill="currentColor" />
                <Sparkles size={15} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-ink-soft"
          >
            <p className="text-lg leading-9">
              On <strong className="text-rose-deep">28 November 2002</strong>,
              Mammuluu and Daddyluu, you began a new chapter as husband and wife. You
              didn&apos;t know every turn life would take, but you chose to face
              every moment together.
            </p>

            <p className="text-lg leading-9">
              On <strong className="text-rose-deep">23 November 2003</strong>,
              your world became even more beautiful — I arrived. Your
              daughter, <strong>Tejasri</strong>, the one you lovingly call{" "}
              <strong className="text-rose-deep">Chinnu</strong>.
            </p>

            <p className="text-lg leading-9">
              From our years in Tirupati to a new chapter in Nellore, and
              eventually to building <strong className="text-rose-deep">TEJA Dryfruits</strong>{" "}
              in Inkollu, you have shared every responsibility, supported each
              other&apos;s dreams, and stood beside one another through every
              change. I watched it all, and I am so proud of you.
            </p>

            <p className="text-lg leading-9">
              Your journey was never about having everything from the
              beginning. It was about making the most of what you had,
              working hard, caring deeply, and building something meaningful
              together.
            </p>

            <div className="rounded-2xl border-l-4 border-rose bg-page-alt p-5">
              <div className="mb-2 flex items-center gap-2 text-rose-deep">
                <Home size={19} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Your beautiful journey
                </span>
              </div>
              <p className="font-serif text-2xl italic leading-relaxed text-ink">
                From nothing to something — built with love, trust, patience,
                and togetherness.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Wedding album */}
        <div className="mt-20 rounded-[2rem] bg-page-alt px-5 py-12 shadow-inner sm:px-10">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-rose">
              From the wedding album
            </p>
            <h3 className="serif mt-3 text-3xl italic text-heading sm:text-4xl">
              The Day Your Forever Began
            </h3>
            <p className="mt-3 text-sm tracking-widest text-ink-soft">
              28 NOVEMBER 2002
            </p>
          </div>

          <div className="mx-auto grid max-w-xs gap-8 sm:max-w-none sm:grid-cols-3">
            {album.map((photo, index) => (
              <PhotoTile
                key={photo.src}
                photo={photo}
                onOpen={open}
                variant="polaroid"
                compact
                frameClassName="aspect-[4/5]"
                sizes="(max-width: 640px) 80vw, 320px"
                className={`${tilts[index % tilts.length]} transition-transform hover:rotate-0`}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox}
    </section>
  );
}

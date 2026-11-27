"use client";

import { motion } from "framer-motion";
import { MapPin, Home, Heart } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoTile from "@/components/PhotoTile";
import SectionHeading from "@/components/SectionHeading";
import { useLightbox } from "@/components/Lightbox";

const group = [photos.tirupatiFamily, photos.tirupati1, photos.tirupati2];

export default function TirupatiChapter() {
  const { open, lightbox } = useLightbox(group);

  return (
    <section id="tirupati" className="relative overflow-hidden bg-page py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          Icon={MapPin}
          eyebrow="Chapter one · Tirupati"
          title={
            <>
              Building a Home in{" "}
              <span className="italic text-rose">Tirupati</span>
            </>
          }
          date="2002 – 2010"
        />

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 -z-0 h-full w-full rounded-[2rem] bg-blush" />
            <div className="relative">
              <PhotoTile
                photo={photos.tirupatiFamily}
                onOpen={open}
                frameClassName="aspect-[3/4]"
                sizes="(max-width: 768px) 90vw, 450px"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-ink-soft"
          >
            <p className="text-lg leading-9">
              Tirupati is where it all began. As newlyweds, you started your
              family life here with little more than each other and a dream.
            </p>
            <p className="text-lg leading-9">
              It is where you welcomed me, where you celebrated my first
              birthdays, and where, as two young parents, you learned together
              what it means to build a home.
            </p>

            <div className="flex items-start gap-4 rounded-2xl bg-page-alt p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-rose shadow-sm">
                <Home size={20} />
              </span>
              <p className="serif text-xl italic leading-relaxed text-ink">
                The early years of your marriage and parenthood — when the
                three of us grew together as a family.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <PhotoTile
                photo={photos.tirupati1}
                onOpen={open}
                compact
                frameClassName="aspect-square"
                sizes="(max-width: 768px) 45vw, 260px"
              />
              <PhotoTile
                photo={photos.tirupati2}
                onOpen={open}
                compact
                frameClassName="aspect-square"
                sizes="(max-width: 768px) 45vw, 260px"
                delay={0.1}
              />
            </div>

            <p className="flex items-center gap-2 text-sm text-rose-deep">
              <Heart size={14} fill="currentColor" />
              Growing together as a family
            </p>
          </motion.div>
        </div>
      </div>

      {lightbox}
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Baby, Heart } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoTile from "@/components/PhotoTile";
import SectionHeading from "@/components/SectionHeading";
import { useLightbox } from "@/components/Lightbox";

const group = [photos.chinnuBaby, photos.chinnuChildhood1, photos.chinnuChildhood2];

export default function ChinnuChapter() {
  const { open, lightbox } = useLightbox(group);

  return (
    <section id="chinnu" className="relative overflow-hidden rose-gradient py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          Icon={Baby}
          eyebrow="Your daughter — me, Chinnu"
          title={
            <>
              Your Little World Became{" "}
              <span className="italic text-rose">Complete</span>
            </>
          }
          date="23 November 2003"
        >
          The day your greatest blessing arrived — and the day I got the best
          parents in the world. To everyone else I am Tejasri; to you, I will
          always be your Chinnu.
        </SectionHeading>

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1.1fr] md:gap-10">
          {/* Birthday photo strip, shown in full */}
          <PhotoTile
            photo={photos.chinnuChildhood1}
            onOpen={open}
            frameClassName="aspect-[9/16] max-h-[78vh] mx-auto bg-[#1d1418]"
            sizes="(max-width: 768px) 90vw, 480px"
          />

          <div className="flex flex-col gap-6">
            <PhotoTile
              photo={photos.chinnuBaby}
              onOpen={open}
              frameClassName="aspect-[4/3]"
              sizes="(max-width: 768px) 90vw, 560px"
              delay={0.1}
            />

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl border border-line bg-card/80 p-6 text-center shadow-sm backdrop-blur"
            >
              <Heart className="mx-auto mb-3 h-6 w-6 fill-petal text-petal" />
              <p className="serif text-xl italic leading-relaxed text-heading sm:text-2xl">
                &ldquo;Two became three, and every birthday since has been a
                celebration of the family you built around me.&rdquo;
              </p>
            </motion.blockquote>

            <PhotoTile
              photo={photos.chinnuChildhood2}
              onOpen={open}
              frameClassName="aspect-[4/3]"
              sizes="(max-width: 768px) 90vw, 560px"
              delay={0.2}
            />
          </div>
        </div>
      </div>

      {lightbox}
    </section>
  );
}

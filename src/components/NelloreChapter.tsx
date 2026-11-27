"use client";

import { MapPin } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoTile from "@/components/PhotoTile";
import SectionHeading from "@/components/SectionHeading";
import { useLightbox } from "@/components/Lightbox";

const group = [photos.nelloreFamily];

export default function NelloreChapter() {
  const { open, lightbox } = useLightbox(group);

  return (
    <section id="nellore" className="relative overflow-hidden bg-page py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          Icon={MapPin}
          eyebrow="Chapter two · Nellore"
          title={
            <>
              A New Chapter in <span className="italic text-rose">Nellore</span>
            </>
          }
          date="2011 – 2021"
        >
          We moved to Nellore — a decade of adapting, working hard, and
          supporting each other.
        </SectionHeading>

        <div className="mx-auto max-w-2xl">
          <PhotoTile
            photo={photos.nelloreFamily}
            onOpen={open}
            frameClassName="aspect-[4/3]"
            sizes="(max-width: 640px) 90vw, 672px"
          />
        </div>
      </div>

      {lightbox}
    </section>
  );
}

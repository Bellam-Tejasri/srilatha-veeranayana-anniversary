"use client";

import { Heart, ZoomIn } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoTile from "@/components/PhotoTile";
import { useLightbox } from "@/components/Lightbox";

const smallPhotos = [photos.family2, photos.family3, photos.family4, photos.family5];

export default function Memories() {
  const { open, lightbox } = useLightbox([photos.family1, ...smallPhotos]);

  return (
    <section
      id="memories"
      className="section-padding overflow-hidden bg-page"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <Heart className="mx-auto mb-5 h-7 w-7 fill-petal text-petal" />

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-rose">
            Family Memories · Today
          </p>

          <h2 className="serif text-4xl text-heading md:text-5xl">
            A Gallery of Love
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-ink-soft">
            Mammuluu, Daddyluu and me — every picture tells a story, and every
            memory is a treasure I hold close.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Feature family photo */}
          <PhotoTile
            photo={photos.family1}
            onOpen={open}
            frameClassName="aspect-[3/4]"
            sizes="(max-width: 1024px) 95vw, 560px"
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {smallPhotos.map((photo, index) => (
              <PhotoTile
                key={photo.src}
                photo={photo}
                onOpen={open}
                compact
                frameClassName="aspect-[4/5]"
                sizes="(max-width: 1024px) 45vw, 270px"
                delay={(index + 1) * 0.08}
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-rose">
          <ZoomIn className="mr-1 inline h-4 w-4" />
          Select any photograph to view it in full size.
        </p>
      </div>

      {lightbox}
    </section>
  );
}

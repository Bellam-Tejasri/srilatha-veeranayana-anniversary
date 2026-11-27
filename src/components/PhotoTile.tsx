"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import type { Photo } from "@/data/photos";
import PhotoFrame from "@/components/PhotoFrame";
import { usePhotoAvailability } from "@/components/PhotoProvider";

type PhotoTileProps = {
  photo: Photo;
  onOpen?: (photo: Photo) => void;
  /** Classes for the image box — set the aspect ratio here, e.g. "aspect-[3/4]". */
  frameClassName?: string;
  /** Classes for the outer card. */
  className?: string;
  sizes?: string;
  preload?: boolean;
  showCaption?: boolean;
  compact?: boolean;
  /** "polaroid" gives a vintage white-border print look. */
  variant?: "card" | "polaroid";
  delay?: number;
};

/**
 * A framed photo with an optional caption. Supplied photos are clickable and
 * open the lightbox; missing ones show a labelled placeholder.
 */
export default function PhotoTile({
  photo,
  onOpen,
  frameClassName = "aspect-[4/5]",
  className = "",
  sizes = "(max-width: 640px) 100vw, 50vw",
  preload,
  showCaption = true,
  compact = false,
  variant = "card",
  delay = 0,
}: PhotoTileProps) {
  const hasPhoto = usePhotoAvailability();
  const clickable = Boolean(onOpen) && hasPhoto(photo.src);
  const polaroid = variant === "polaroid";

  const inner = (
    <>
      <div
        className={`relative overflow-hidden bg-blush ${
          polaroid ? "rounded-sm" : "rounded-xl"
        } ${frameClassName}`}
      >
        <PhotoFrame
          photo={photo}
          sizes={sizes}
          preload={preload}
          compact={compact}
          className={clickable ? "transition duration-700 group-hover:scale-105" : ""}
        />

        {clickable && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#593e47]/0 transition group-hover:bg-[#593e47]/20">
            <ZoomIn className="h-8 w-8 text-white opacity-0 drop-shadow transition group-hover:opacity-100" />
          </div>
        )}
      </div>

      {showCaption && (
        <figcaption className={polaroid ? "px-1 pb-1 pt-3 text-center" : "px-2 pb-1 pt-3"}>
          <p
            className={`serif italic leading-snug text-heading ${
              compact ? "text-sm" : "text-base md:text-lg"
            }`}
          >
            {photo.caption}
          </p>
          {photo.date && (
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose">
              {photo.date}
            </p>
          )}
        </figcaption>
      )}
    </>
  );

  const cardClasses = `group block w-full text-left ${
    polaroid
      ? "rounded-md bg-card p-2.5 pb-3 shadow-[0_10px_30px_-12px_rgba(89,62,71,0.35)]"
      : "rounded-2xl bg-card p-2 shadow-sm"
  } transition-shadow ${clickable ? "hover:shadow-xl" : ""} ${className}`;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="m-0"
    >
      {clickable ? (
        <button
          type="button"
          onClick={() => onOpen?.(photo)}
          aria-label={`Enlarge photograph: ${photo.caption}`}
          className={`${cardClasses} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-line-strong`}
        >
          {inner}
        </button>
      ) : (
        <div className={cardClasses}>{inner}</div>
      )}
    </motion.figure>
  );
}

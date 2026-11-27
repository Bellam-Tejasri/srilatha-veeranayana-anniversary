"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/data/photos";
import { usePhotoAvailability } from "@/components/PhotoProvider";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(subscribe, () => true, () => false);

/**
 * Click-to-enlarge gallery for a group of photos. Only supplied photos can be
 * opened; placeholders are skipped.
 *
 *   const { open, lightbox } = useLightbox([photos.a, photos.b]);
 *   <PhotoTile photo={photos.a} onOpen={open} />
 *   {lightbox}
 */
export function useLightbox(group: Photo[]) {
  const hasPhoto = usePhotoAvailability();
  const viewable = group.filter((photo) => hasPhoto(photo.src));
  const [index, setIndex] = useState<number | null>(null);

  const open = (photo: Photo) => {
    const i = viewable.findIndex((p) => p.src === photo.src);
    if (i >= 0) setIndex(i);
  };

  const lightbox = (
    <Lightbox photos={viewable} index={index} onChange={setIndex} />
  );

  return { open, lightbox };
}

function Lightbox({
  photos,
  index,
  onChange,
}: {
  photos: Photo[];
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const isClient = useIsClient();
  const count = photos.length;

  const close = useCallback(() => onChange(null), [onChange]);
  const step = useCallback(
    (delta: number) => {
      if (index === null || count === 0) return;
      onChange((index + delta + count) % count);
    },
    [index, count, onChange]
  );

  useEffect(() => {
    if (index === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  if (!isClient) return null;

  const current = index !== null ? photos[index] : undefined;

  return createPortal(
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#281b22]/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {count > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photograph"
              className="absolute left-2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-8"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <motion.figure
            key={current.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[68vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
                preload
              />
            </div>

            <figcaption className="mt-5 px-10 text-center">
              <p className="serif text-xl italic text-white md:text-2xl">
                {current.caption}
              </p>
              {current.date && (
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
                  {current.date}
                </p>
              )}
              {count > 1 && (
                <p className="mt-3 text-xs text-white/50">
                  {(index ?? 0) + 1} / {count}
                </p>
              )}
            </figcaption>
          </motion.figure>

          {count > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next photograph"
              className="absolute right-2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-8"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

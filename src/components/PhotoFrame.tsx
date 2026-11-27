"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import type { Photo } from "@/data/photos";
import { usePhotoAvailability } from "@/components/PhotoProvider";

type PhotoFrameProps = {
  photo: Photo;
  sizes?: string;
  preload?: boolean;
  /** Extra classes for the <img> (e.g. hover zoom). */
  className?: string;
  /** Smaller placeholder text for small tiles. */
  compact?: boolean;
};

/**
 * Fills its (relatively positioned) parent with a photo.
 * If the photo hasn't been supplied yet (or fails to load), a soft
 * placeholder names exactly which file is needed.
 */
export default function PhotoFrame({
  photo,
  sizes = "100vw",
  preload,
  className = "",
  compact = false,
}: PhotoFrameProps) {
  const hasPhoto = usePhotoAvailability();
  const [failed, setFailed] = useState(false);

  if (failed || !hasPhoto(photo.src)) {
    return <PhotoPlaceholder photo={photo} compact={compact} />;
  }

  const fit = photo.fit ?? "cover";

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      onError={() => setFailed(true)}
      style={{ objectPosition: photo.position ?? "50% 50%" }}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}

export function PhotoPlaceholder({
  photo,
  compact = false,
}: {
  photo: Photo;
  compact?: boolean;
}) {
  const file = photo.src.replace(/^\//, "public/");

  return (
    <div
      role="img"
      aria-label={`${photo.needed} (photo coming soon)`}
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-page-alt via-page-alt to-blush p-3 text-center"
    >
      <div className="absolute inset-2 rounded-[inherit] border border-dashed border-line-strong" />
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-rose shadow-sm">
        <Camera size={compact ? 16 : 20} />
      </span>
      <span
        className={`serif italic leading-snug text-ink-faint ${
          compact ? "text-xs" : "text-sm sm:text-base"
        }`}
      >
        {photo.needed}
      </span>
      <code
        className={`max-w-full break-all rounded-md bg-card/70 px-2 py-1 text-ink-faint ${
          compact ? "text-[9px]" : "text-[10px] sm:text-xs"
        }`}
      >
        {file}
      </code>
    </div>
  );
}

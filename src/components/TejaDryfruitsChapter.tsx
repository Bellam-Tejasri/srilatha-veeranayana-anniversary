"use client";

import { motion } from "framer-motion";
import { Store, MapPin, HandHeart, Sparkles, ZoomIn } from "lucide-react";
import { photos } from "@/data/photos";
import PhotoFrame from "@/components/PhotoFrame";
import PhotoTile from "@/components/PhotoTile";
import SectionHeading from "@/components/SectionHeading";
import { useLightbox } from "@/components/Lightbox";
import { usePhotoAvailability } from "@/components/PhotoProvider";

const group = [photos.inkolluFamily, photos.inkollu1];

function ShopTitle({ overPhoto }: { overPhoto: boolean }) {
  return (
    <div
      className={`pointer-events-none p-6 text-left sm:p-10 ${
        overPhoto
          ? "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3d2530]/85 via-[#3d2530]/40 to-transparent pt-24 text-white"
          : "bg-card text-ink"
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          overPhoto ? "bg-white/20 backdrop-blur" : "bg-page-alt text-rose-deep"
        }`}
      >
        <Store size={13} /> Since September 2021 · Still open
      </span>
      <h3 className="serif mt-4 text-4xl sm:text-6xl">TEJA Dryfruits</h3>
      <p
        className={`mt-2 max-w-xl text-sm leading-7 sm:text-base ${
          overPhoto ? "text-white/85" : "text-ink-soft"
        }`}
      >
        Your shared achievement — built with hard work, shared
        responsibilities, and belief in each other.
      </p>
    </div>
  );
}

export default function TejaDryfruitsChapter() {
  const hasPhoto = usePhotoAvailability();
  // Banner shows the shop front; until that's added, the shop interior.
  const shopPhoto = hasPhoto(photos.shopFront.src)
    ? photos.shopFront
    : photos.shopInterior;
  const shopFrontReady = hasPhoto(shopPhoto.src);
  const { open, lightbox } = useLightbox([...group, shopPhoto]);

  return (
    <section id="teja-dryfruits" className="relative overflow-hidden bg-page py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          Icon={MapPin}
          eyebrow="Chapter three · Inkollu"
          title={
            <>
              A Fresh Start in <span className="italic text-rose">Inkollu</span>
            </>
          }
          date="September 2021"
        >
          In September 2021 we moved to Inkollu — and together, the two of
          you started something entirely your own.
        </SectionHeading>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <PhotoTile
            photo={photos.inkolluFamily}
            onOpen={open}
            frameClassName="aspect-[3/4]"
            sizes="(max-width: 640px) 90vw, 440px"
          />
          <PhotoTile
            photo={photos.inkollu1}
            onOpen={open}
            frameClassName="aspect-[3/4]"
            sizes="(max-width: 640px) 90vw, 440px"
            delay={0.1}
          />
        </div>

        {/* Full-width feature: the shop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-blush shadow-[0_30px_70px_-30px_rgba(89,62,71,0.55)]"
        >
          <div className="relative aspect-[4/5] sm:aspect-[3/2]">
            <PhotoFrame photo={shopPhoto} sizes="(max-width: 1200px) 100vw, 1150px" />

            {shopFrontReady && (
              <button
                type="button"
                onClick={() => open(shopPhoto)}
                aria-label={`Enlarge photograph: ${shopPhoto.caption}`}
                className="absolute right-4 top-4 z-10 rounded-full bg-card/80 p-2.5 text-rose-deep shadow transition hover:bg-card"
              >
                <ZoomIn size={20} />
              </button>
            )}

            {shopFrontReady && <ShopTitle overPhoto />}
          </div>

          {/* While the shop photo is missing, keep the title clear of the placeholder */}
          {!shopFrontReady && <ShopTitle overPhoto={false} />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-5 sm:grid-cols-3"
        >
          {[
            {
              Icon: Store,
              title: "Started together",
              text: "Opened in Inkollu in September 2021 — a dream you chose to build side by side.",
            },
            {
              Icon: HandHeart,
              title: "Run together",
              text: "Every day you share the work, the responsibilities, and the pride.",
            },
            {
              Icon: Sparkles,
              title: "Still growing",
              text: "TEJA Dryfruits is open today, and your partnership keeps it growing.",
            },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-card p-6 text-center shadow-sm"
            >
              <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-page-alt text-rose">
                <Icon size={20} />
              </span>
              <h4 className="serif text-xl text-ink">{title}</h4>
              <p className="mt-2 text-sm leading-7 text-ink-soft">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {lightbox}
    </section>
  );
}

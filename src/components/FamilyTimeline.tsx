
"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Baby,
  MapPin,
  Store,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { photos, type Photo } from "@/data/photos";
import PhotoFrame from "@/components/PhotoFrame";
import { usePhotoAvailability } from "@/components/PhotoProvider";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  highlight: string;
  Icon: LucideIcon;
  /** The first supplied photo in this list becomes the milestone thumbnail. */
  photos: Photo[];
  /** Section holding the full photo chapter. */
  href: string;
};

const milestones: TimelineItem[] = [
  {
    year: "28 November 2002",
    title: "The Beginning of Forever",
    description:
      "Mammuluu and Daddyluu, you began your journey as husband and wife. Two people, one promise, and a lifetime of dreams waiting to be built.",
    highlight: "The beginning of your togetherness",
    Icon: Heart,
    photos: [photos.wedding1],
    href: "#our-story",
  },
  {
    year: "23 November 2003",
    title: "Your Little World Became Complete",
    description:
      "I came into your lives. To the world I am Tejasri; to you, Mammuluu and Daddyluu, I will always be your Chinnu.",
    highlight: "A new chapter in our family",
    Icon: Baby,
    photos: [photos.chinnuBaby, photos.chinnuChildhood1],
    href: "#chinnu",
  },
  {
    year: "2002 – 2010",
    title: "Building a Home in Tirupati",
    description:
      "Tirupati became the place where you built our early family life, shared everyday moments, raised me, and made memories that will last forever.",
    highlight: "Growing together as a family",
    Icon: MapPin,
    photos: [photos.tirupatiFamily, photos.tirupati1],
    href: "#tirupati",
  },
  {
    year: "2011 – 2021",
    title: "A New Chapter in Nellore",
    description:
      "We moved to Nellore. It was another chapter of adapting, working hard, and supporting each other.",
    highlight: "A decade of our family memories",
    Icon: MapPin,
    photos: [photos.nelloreFamily],
    href: "#nellore",
  },
  {
    year: "September 2021",
    title: "A Dream Called TEJA Dryfruits",
    description:
      "We moved to Inkollu and you started TEJA Dryfruits together. With hard work, shared responsibilities, and belief in each other, you began building a business of your own.",
    highlight: "A dream you created through teamwork",
    Icon: Store,
    photos: [photos.shopFront, photos.inkolluFamily],
    href: "#teja-dryfruits",
  },
  {
    year: "2021 – Present",
    title: "Still Building, Still Together",
    description:
      "Your journey with TEJA Dryfruits continues in Inkollu. You keep supporting each other, sharing responsibilities, and growing together through every new day.",
    highlight: "Your partnership continues",
    Icon: HandHeart,
    photos: [photos.shopFront, photos.shopInterior, photos.family1],
    href: "#teja-dryfruits",
  },
  {
    year: "28 November 2026",
    title: "24 Years of Love & Togetherness",
    description:
      "From your first promise in 2002 to the life you have built today, your story reminds me that the strongest things are built together.",
    highlight: "24 years — and a lifetime still ahead",
    Icon: Heart,
    photos: [photos.anniversary, photos.inkollu1, photos.couple],
    href: "#forever",
  },
];

export default function FamilyTimeline() {
  const hasPhoto = usePhotoAvailability();

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-page py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-rose">
            Every place, every memory
          </span>

          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Your Journey Through <span className="italic text-rose">Time</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            From a new beginning in 2002 to the family and business you built
            together — every milestone tells a story of your love, courage, and
            partnership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-[23px] top-8 w-px bg-line-strong sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-9 sm:space-y-12">
            {milestones.map((item, index) => {
              const isRight = index % 2 === 1;
              const thumbnail = item.photos.find((photo) => hasPhoto(photo.src));

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative flex items-start gap-5 pl-1 sm:w-1/2 sm:gap-0 sm:pl-0 ${
                    isRight
                      ? "sm:ml-auto sm:pl-12"
                      : "sm:pr-12 sm:text-right"
                  }`}
                >
                  {/* Timeline icon */}
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-page bg-rose text-on-rose shadow-md sm:absolute ${
                        isRight ? "sm:left-[-24px]" : "sm:right-[-24px]"
                        }`}>
                    {isRight ? (
                      <item.Icon size={19} />
                    ) : (
                      <item.Icon size={19} />
                    )}
                  </div>

                  <div
                    className={`min-w-0 flex-1 rounded-2xl border border-line bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 ${
                      !isRight ? "sm:mr-0" : ""
                    }`}
                  >
                    {thumbnail && (
                      <a
                        href={item.href}
                        aria-label={`See photos: ${item.title}`}
                        className="group relative mb-4 block aspect-[16/10] overflow-hidden rounded-xl bg-blush"
                      >
                        <PhotoFrame
                          photo={thumbnail}
                          sizes="(max-width: 640px) 85vw, 420px"
                          className="transition duration-700 group-hover:scale-105"
                        />
                      </a>
                    )}

                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-rose">
                      {item.year}
                    </p>

                    <h3 className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
                      {item.description}
                    </p>

                    <div
                      className={`mt-4 inline-flex items-center gap-2 rounded-full bg-page-alt px-3 py-2 text-xs font-semibold text-rose-deep ${
                        !isRight ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <Heart size={13} fill="currentColor" />
                      {item.highlight}
                    </div>

                    <a
                      href={item.href}
                      className="mt-3 block text-xs font-semibold text-rose underline-offset-4 hover:underline"
                    >
                      See the photos →
                    </a>
                  </div>

                  {/* Centre marker on desktop */}
                  <div
                    className={`absolute top-5 hidden h-2.5 w-2.5 rounded-full bg-rose-deep sm:block ${
                      isRight ? "left-[-5px]" : "right-[-5px]"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-line bg-card px-6 py-10 text-center shadow-sm sm:px-12"
        >
          <Heart
            className="mx-auto mb-4 text-rose"
            size={30}
            fill="currentColor"
          />

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-rose">
            The heart of your story
          </p>

          <h3 className="font-serif text-3xl italic leading-relaxed text-ink sm:text-4xl">
            From Nothing to Something
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink-soft">
            You built more than a home and a business. You built a life
            filled with shared dreams, endless care, responsibility, strength,
            and a love that keeps growing.
          </p>

          <p className="mt-6 font-serif text-xl italic text-rose-deep">
            Your greatest achievement is the life you built together — and I
            am so lucky to be part of it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

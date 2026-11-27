/**
 * Every photograph on the website is listed here.
 *
 * To add a photo, drop it into `public/images/` using the exact path below.
 * The site checks which files exist when the page is built (or on every
 * reload during `npm run dev`). Missing photos show a placeholder that names
 * the file it is waiting for, so nothing is ever replaced by a stock image.
 *
 * `position` is the CSS object-position used when a photo is cropped to fit
 * its frame. Tune it so faces stay inside the frame (e.g. "50% 20%" keeps
 * the top of a portrait photo visible).
 */
export type Photo = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  /** Shown on the placeholder while the photo is missing. */
  needed: string;
  position?: string;
  /** "contain" shows the whole photo (good for scans and photo strips). */
  fit?: "cover" | "contain";
};

const photo = (p: Photo) => p;

export const photos = {
  /* ---------------------------------------------------------------- parents */
  couple: photo({
    src: "/images/parents/couple.jpg",
    alt: "Srilatha and Veeranarayana sitting together at a temple",
    caption: "Your first photograph together",
    needed: "Mammuluu & Daddyluu together",
    position: "35% 30%",
  }),
  anniversary: photo({
    src: "/images/parents/anniversary.jpg",
    alt: "Srilatha and Veeranarayana today",
    caption: "Still choosing each other, every day",
    date: "28 November 2026",
    needed: "A recent photo of Mammuluu & Daddyluu",
    position: "50% 30%",
  }),

  /* ---------------------------------------------------------------- wedding */
  wedding1: photo({
    src: "/images/wedding/wedding-1.jpg",
    alt: "Veeranarayana and Srilatha in wedding garlands, surrounded by family",
    caption: "You two, garlanded and looking up at your future",
    date: "28 November 2002",
    needed: "Wedding photo 1",
    position: "50% 20%",
  }),
  wedding2: photo({
    src: "/images/wedding/wedding-2.jpg",
    alt: "Veeranarayana as the groom in a white suit and turban, standing on the flower-decorated wedding stage",
    caption: "Daddyluu, the proud groom",
    date: "28 November 2002",
    needed: "Wedding photo 2",
    position: "50% 15%",
  }),
  wedding3: photo({
    src: "/images/wedding/wedding-3.jpg",
    alt: "Srilatha as the bride in a white and red silk saree with flowers in her hair",
    caption: "Mammuluu, the beautiful bride",
    date: "28 November 2002",
    needed: "Wedding photo 3",
    position: "60% 20%",
  }),
  wedding4: photo({
    src: "/images/wedding/wedding-4.jpg",
    alt: "Veeranarayana leaning over Srilatha during a sacred wedding ritual while she sits with her head bowed",
    caption: "The sacred moment — two hearts, one promise",
    date: "28 November 2002",
    needed: "Wedding photo 4",
    position: "50% 30%",
  }),

  /* -------------------------------------------------------------- childhood */
  chinnuBaby: photo({
    src: "/images/childhood/chinnu-baby.jpg",
    alt: "Baby Chinnu laughing in a garden full of flowers",
    caption: "Little me, always laughing — your greatest blessing",
    date: "Born 23 November 2003",
    needed: "Baby Chinnu",
    position: "57% 40%",
  }),
  chinnuChildhood1: photo({
    src: "/images/childhood/chinnu-childhood-1.jpg",
    alt: "Little Chinnu cutting her birthday cake with Mammuluu and Daddyluu",
    caption: "My birthday — cutting the cake with you both",
    date: "Birthday memories",
    needed: "Chinnu childhood photo 1",
    fit: "contain",
  }),
  chinnuChildhood2: photo({
    src: "/images/childhood/chinnu-grown-up.jpg",
    alt: "Grown-up Chinnu in a pink half saree standing between Daddyluu and Mammuluu at a wedding hall",
    caption: "All grown up — and still your Chinnu",
    needed: "Chinnu grown-up photo with Mammuluu & Daddyluu",
    position: "50% 30%",
  }),

  /* ----------------------------------------------------------------- family */
  family1: photo({
    src: "/images/family/family-1.jpg",
    alt: "Veeranarayana, Chinnu and Srilatha standing together in traditional clothes",
    caption: "Daddyluu, me & Mammuluu — the family you built",
    needed: "Family photo 1",
    position: "50% 30%",
  }),
  family2: photo({
    src: "/images/family/family-2.jpg",
    alt: "Three photos from a family function: Daddyluu, Mammuluu and Chinnu in festive silks with family in front of a floral stage",
    caption: "Celebrating together, in our festive best",
    needed: "Family photo 2",
    fit: "contain",
  }),
  family3: photo({
    src: "/images/family/family-3.jpg",
    alt: "Mammuluu, Daddyluu and Chinnu lighting a sparkler together on the terrace under Diwali lamp lights",
    caption: "Diwali nights, lit up together",
    needed: "Family photo 3",
    fit: "contain",
  }),
  family4: photo({
    src: "/images/family/family-4.jpg",
    alt: "Smiling selfie of Daddyluu, Chinnu and Mammuluu with kumkum on their foreheads, seated at a temple",
    caption: "Blessed smiles after darshan",
    needed: "Family photo 4",
    fit: "contain",
  }),
  family5: photo({
    src: "/images/family/family-5.jpg",
    alt: "Temple selfie of Chinnu, Daddyluu and Mammuluu — Chinnu in a navy and gold dress, Mammuluu in a green and pink saree",
    caption: "Love, laughter and togetherness",
    needed: "Family photo 5",
    fit: "contain",
  }),

  /* --------------------------------------------------------------- tirupati */
  tirupatiFamily: photo({
    src: "/images/tirupati/tirupati-family.jpg",
    alt: "Veeranarayana and Srilatha holding baby Chinnu in Tirupati",
    caption: "You both with baby me in Tirupati",
    date: "Tirupati · early years",
    needed: "Family photo from Tirupati",
    position: "50% 18%",
  }),
  tirupati1: photo({
    src: "/images/tirupati/tirupati-1.jpg",
    alt: "Daddyluu holding baby Chinnu, who is sticking her tongue out, in front of a flowering bush",
    caption: "Daddyluu and his cheeky little girl — me!",
    date: "Tirupati",
    needed: "Tirupati memory 1",
    position: "50% 30%",
  }),
  tirupati2: photo({
    src: "/images/tirupati/tirupati-2.jpg",
    alt: "Srilatha and Veeranarayana standing side by side in their early years",
    caption: "You two in our Tirupati days",
    date: "Tirupati",
    needed: "Tirupati memory 2",
    position: "55% 35%",
  }),

  /* ---------------------------------------------------------------- nellore */
  nellore1: photo({
    src: "/images/nellore/nellore-1.jpg",
    alt: "A memory from Nellore",
    caption: "Our decade of memories in Nellore",
    date: "Nellore",
    needed: "Nellore memory",
    position: "50% 30%",
  }),
  nelloreFamily: photo({
    src: "/images/nellore/nellore-family.jpg",
    alt: "Family selfie at a celebration in Nellore, with Mammuluu, Daddyluu, Chinnu, family and children around a table of cakes",
    caption: "Our home, full of celebrations in Nellore",
    date: "Nellore",
    needed: "Family photo from Nellore",
    position: "50% 40%",
  }),

  /* ---------------------------------------------------------------- inkollu */
  inkolluFamily: photo({
    src: "/images/inkollu/inkollu-family.jpg",
    alt: "Mammuluu, Chinnu and Daddyluu with a little girl on a family outing at a hilltop temple",
    caption: "Our family outings in the Inkollu years",
    date: "2021 – Present",
    needed: "Family photo from Inkollu",
    position: "50% 35%",
  }),
  inkollu1: photo({
    src: "/images/inkollu/inkollu-couple.jpg",
    alt: "Srilatha standing with her hands on Veeranarayana's shoulders as he sits smiling on their balcony",
    caption: "You both at our home in Inkollu",
    date: "Inkollu",
    needed: "Inkollu memory",
    position: "55% 30%",
  }),

  /* --------------------------------------------------------- TEJA Dryfruits */
  shopFront: photo({
    src: "/images/teja-dryfruits/shop-front.jpg",
    alt: "The front of the TEJA Dryfruits shop in Inkollu",
    caption: "TEJA Dryfruits, Inkollu",
    date: "Since September 2021",
    needed: "TEJA Dryfruits shop front",
    position: "50% 50%",
  }),
  shopInterior: photo({
    src: "/images/teja-dryfruits/shop-interior.png",
    alt: "Inside TEJA Dryfruits: shelves stocked with almonds, cashews, raisins, dates and snacks",
    caption: "Every shelf stocked with care",
    date: "TEJA Dryfruits, Inkollu",
    needed: "Shop interior",
    position: "50% 40%",
  }),
};

export type PhotoKey = keyof typeof photos;

export const allPhotos: Photo[] = Object.values(photos);

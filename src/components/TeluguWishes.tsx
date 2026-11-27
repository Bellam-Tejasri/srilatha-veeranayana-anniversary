
"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Flower2 } from "lucide-react";

const wishes = [
  {
    title: "ఒక అందమైన ఆరంభం",
    text: "2002 నవంబర్ 28న మొదలైన మీ ప్రయాణం... ఎన్నో ఆశలు, కలలు, నమ్మకాలు, ప్రేమతో సాగిన ఒక అద్భుతమైన జీవిత ప్రయాణం.",
  },
  {
    title: "మీ జీవితంలోకి వచ్చిన చిన్ని ప్రపంచం",
    text: "2003 నవంబర్ 23న మీ జీవితాల్లోకి అడుగుపెట్టిన మీ కూతురు తేజశ్రీ... మీ ముద్దుల చిన్ని. మీ ప్రేమకు ప్రతిరూపం, మీ జీవితంలో వెలుగైన చిరునవ్వు.",
  },
  {
    title: "ప్రతి ఊరు ఒక జ్ఞాపకం",
    text: "తిరుపతిలో మొదలైన కుటుంబ జీవితం... నెల్లూరులో గడిపిన అందమైన రోజులు... ఒకే పాఠశాలలో అమ్మ టీచర్‌గా, నేను విద్యార్థినిగా గడిపిన ప్రత్యేకమైన జ్ఞాపకం.",  },
  {
    title: "కలిసి కట్టుకున్న కల",
    text: "2021లో ఇంకొల్లుకు వచ్చి TEJA Dryfruits ప్రారంభించిన మీ ప్రయాణం... కష్టాన్ని నమ్మకంగా, బాధ్యతలను భాగస్వామ్యంగా మార్చుకుని కలిసి నిర్మించుకున్న మీ కల.",
  },
  {
    title: "ఇదే మీ ప్రేమకు అర్థం",
    text: "ఒకరి కోసం మరొకరు నిలబడటం... సంతోషాల్లోనూ, కష్టాల్లోనూ తోడుగా ఉండటం... ప్రేమను మాటల్లో కాదు, ప్రతిరోజూ చేసే పనుల్లో చూపించడం.",
  },
];

export default function TeluguWishes() {
  return (
    <section
      id="telugu-wishes"
      className="relative overflow-hidden bg-page px-5 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-5 top-12 text-petal-soft">
        <Flower2 size={55} />
      </div>

      <div className="pointer-events-none absolute bottom-10 right-5 text-petal-soft">
        <Flower2 size={65} />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-rose">
            మనస్ఫూర్తిగా మీ ఇద్దరికీ
          </span>

          <h2 className="telugu-text font-serif text-4xl text-ink sm:text-5xl">
            అమ్మా నాన్నలకు ప్రేమతో...
          </h2>

          <p className="mt-5 text-base text-ink-soft">
            A little message from your Chinnu, with endless love.
          </p>
        </motion.div>

        <div className="space-y-5">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-page-alt text-rose">
                  <Heart size={19} fill="currentColor" />
                </div>

                <h3 className="telugu-text text-xl font-semibold text-rose-deep sm:text-2xl">
                  {wish.title}
                </h3>
              </div>

              <p className="telugu-text text-base leading-[2.2] text-ink-soft sm:text-lg">
                {wish.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl bg-page-alt px-6 py-10 text-center sm:px-12"
        >
          <Sparkles className="mx-auto mb-5 text-rose" size={30} />

          <h3 className="telugu-text font-serif text-3xl leading-relaxed text-ink sm:text-4xl">
            మీ ప్రయాణం నాకు స్ఫూర్తి...
          </h3>

          <p className="telugu-text mt-5 text-lg leading-[2.2] text-ink-soft">
            అమ్మా... నాన్నా...
            <br />
            మీరు నాకు ఇచ్చింది కేవలం ఒక కుటుంబం మాత్రమే కాదు.
            <br />
            ప్రేమ అంటే ఏమిటో, బాధ్యత అంటే ఏమిటో,
            <br />
            ఒకరికొకరు తోడుగా ఎలా ఉండాలో మీ జీవితంతో నేర్పించారు.
            <br />
            మీ ఇద్దరూ ఎప్పుడూ ఇలాగే నవ్వుతూ, ఆరోగ్యంగా,
            <br />
            ఆనందంగా కలిసి ఉండాలని కోరుకుంటున్నాను.
          </p>

          <div className="my-7 flex justify-center text-rose">
            <Heart size={28} fill="currentColor" />
          </div>

          <p className="telugu-text font-serif text-3xl italic text-rose-deep">
            మీ చిన్ని ❤️
          </p>

          <p className="mt-3 text-sm tracking-widest text-ink-faint">
            HAPPY 24TH WEDDING ANNIVERSARY
          </p>
        </motion.div>
      </div>
    </section>
  );
}

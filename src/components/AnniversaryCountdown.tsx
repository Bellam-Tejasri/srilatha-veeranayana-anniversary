"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-11-28T00:00:00+05:30").getTime();

export default function AnniversaryCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [celebrationStarted, setCelebrationStarted] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setCelebrationStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="section-padding bg-page text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-rose">
        The Special Day
      </p>

      <h2 className="serif mt-4 text-4xl text-heading">
        Counting Down to Forever
      </h2>

      {celebrationStarted ? (
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="serif mt-12 text-3xl text-rose"
        >
          Happy 24th Wedding Anniversary! ❤️
        </motion.h3>
      ) : (
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-line bg-page-alt p-6"
            >
              <div className="serif text-4xl text-rose md:text-5xl">
                {String(unit.value).padStart(2, "0")}
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      <p className="mt-8 text-sm italic text-ink-faint">
        November 28, 2026 · A day to celebrate your 24 years of love.
      </p>
    </section>
  );
}
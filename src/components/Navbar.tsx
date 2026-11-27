"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Chinnu", href: "#chinnu" },
  { label: "TEJA Dryfruits", href: "#teja-dryfruits" },
  { label: "Memories", href: "#memories" },
  { label: "Journey", href: "#journey" },
  { label: "Countdown", href: "#countdown" },
  { label: "Telugu Wishes", href: "#telugu-wishes" },
  { label: "Surprise", href: "#surprise" },
  { label: "Forever", href: "#forever" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-card text-rose-deep shadow-sm transition hover:border-rose hover:text-rose focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-line-strong"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {/* Shows the mode you are in: sun for light, moon for dark. */}
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 border-b border-line bg-page/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="serif text-xl text-rose-deep"
          onClick={() => setOpen(false)}
        >
          S & V <Heart className="inline h-4 w-4 fill-petal" />
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition hover:text-rose"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-rose-deep xl:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex max-h-[75vh] flex-col gap-5 overflow-y-auto border-t border-line bg-page px-6 py-6 xl:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
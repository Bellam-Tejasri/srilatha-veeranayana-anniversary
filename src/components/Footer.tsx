import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-footer px-6 py-14 text-center text-white">
      <Heart className="mx-auto mb-5 h-7 w-7 fill-petal text-petal" />

      <h2 className="serif text-3xl">
        Srilatha & Veeranarayana
      </h2>

      <p className="mt-4 text-sm text-white/75">
        24 Years of Love, Laughter & Togetherness
      </p>

      <p className="mt-8 text-xs tracking-widest text-white/60">
        MADE WITH ❤️ BY CHINNU, FOR THE MOST SPECIAL PEOPLE IN MY LIFE
      </p>

      <p className="mt-4 text-xs text-white/50">
        November 28, 2026
      </p>
    </footer>
  );
}
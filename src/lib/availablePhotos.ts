import fs from "node:fs";
import path from "node:path";
import { allPhotos } from "@/data/photos";

/**
 * Server-only: returns the src of every listed photo that actually exists in
 * `public/`. Synchronous file checks run during prerender, so the result is
 * baked into the static page at build time (and refreshed on reload in dev).
 */
export function getAvailablePhotos(): string[] {
  const publicDir = path.join(process.cwd(), "public");

  return allPhotos
    .map((photo) => photo.src)
    .filter((src) => fs.existsSync(path.join(publicDir, src)));
}

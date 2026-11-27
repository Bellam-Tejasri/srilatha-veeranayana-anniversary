"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

const PhotoContext = createContext<Set<string> | null>(null);

export function PhotoProvider({
  available,
  children,
}: {
  available: string[];
  children: ReactNode;
}) {
  const set = useMemo(() => new Set(available), [available]);
  return <PhotoContext.Provider value={set}>{children}</PhotoContext.Provider>;
}

/** Returns a checker telling whether a photo file has been supplied. */
export function usePhotoAvailability() {
  const available = useContext(PhotoContext);
  // Without a provider, assume the photo exists; PhotoFrame still falls back
  // to a placeholder if the file fails to load.
  return (src: string) => (available ? available.has(src) : true);
}

"use client";

import { useSyncExternalStore } from "react";

export type PaletteId = "oceanic" | "warm" | "heritage";

export interface PaletteMeta {
  id: PaletteId;
  name: string;
  description: string;
  primaryColor: string; // Preview color for indicator
  secondaryColor: string;
}

export const DEFAULT_PALETTE: PaletteId = "oceanic";

export const PALETTES: readonly PaletteMeta[] = [
  {
    id: "oceanic",
    name: "Oceanic Azure",
    description: "Deep azure, teal accent, clear slate surfaces",
    primaryColor: "#0284c7",
    secondaryColor: "#14b8a6",
  },
  {
    id: "warm",
    name: "Warm Studio",
    description: "Warm cream, signature international orange",
    primaryColor: "#ff4d00",
    secondaryColor: "#c2410c",
  },
  {
    id: "heritage",
    name: "Heritage Pine",
    description: "Deep evergreen, warm stone, terracotta accent",
    primaryColor: "#1e3a34",
    secondaryColor: "#b46a55",
  },
] as const;

const PALETTE_STORAGE_KEY = "theme-palette";

function getSnapshot(): PaletteId {
  if (typeof window === "undefined") return DEFAULT_PALETTE;
  const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
  if (stored === "oceanic" || stored === "warm" || stored === "heritage") return stored;
  return DEFAULT_PALETTE;
}

function getServerSnapshot(): PaletteId {
  return DEFAULT_PALETTE;
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handleStorage = (e: StorageEvent) => {
    if (e.key === PALETTE_STORAGE_KEY) {
      callback();
    }
  };
  const handleCustom = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener("palette-change", handleCustom);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("palette-change", handleCustom);
  };
}

export function setPalette(palette: PaletteId): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PALETTE_STORAGE_KEY, palette);
  document.documentElement.dataset.palette = palette;
  window.dispatchEvent(new CustomEvent("palette-change", { detail: palette }));
}

export function usePalette(): [PaletteId, (palette: PaletteId) => void] {
  const current = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return [current, setPalette];
}

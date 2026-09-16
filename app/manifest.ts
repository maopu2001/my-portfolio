import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: profile.shortName,
    description: profile.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#fffcf3",
    theme_color: "#ff4d00",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

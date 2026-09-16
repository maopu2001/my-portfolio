import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable Next.js server-side image optimization proxy globally.
    // Images are served directly as-is from their original CDN / static source.
    unoptimized: true,
  },
};

export default nextConfig;

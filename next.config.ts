import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json higher up the tree would otherwise be picked as the workspace root.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Serve modern formats; the optimizer picks AVIF (smallest), then WebP, per the browser's Accept header.
    formats: ["image/avif", "image/webp"],
    // Allowed quality values: 75 is the default/showcase quality, 40 is the blurred room-hero backdrop.
    qualities: [40, 75],
    // Cache each optimized variant for 31 days so repeat views and other visitors skip re-optimization.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;

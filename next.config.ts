import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",

  eslint: {
    // ✅ Ignore ESLint errors during Netlify build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


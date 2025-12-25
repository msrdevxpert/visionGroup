import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: false,
  output: "export", // ✅ enable static HTML export
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

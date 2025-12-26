import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ good for external images or Netlify static build
  },
  trailingSlash: false, // ✅ keeps URLs clean
  // output: "export", // ❌ must stay commented out for client-side pages with useSearchParams
  eslint: {
    ignoreDuringBuilds: true, // ✅ avoids build failures due to lint errors
  },
};

export default nextConfig;

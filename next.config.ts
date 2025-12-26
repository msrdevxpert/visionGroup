const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: false,
  eslint: { ignoreDuringBuilds: true },
  sassOptions: {
    includePaths: ["./node_modules"],
  },
};

export default nextConfig;

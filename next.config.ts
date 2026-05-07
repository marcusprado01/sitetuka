import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sitetuka",
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
};

export default nextConfig;

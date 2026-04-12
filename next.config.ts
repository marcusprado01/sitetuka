import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sitetuka",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

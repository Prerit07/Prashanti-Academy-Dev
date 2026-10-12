import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.prashantiacademy.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

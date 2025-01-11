import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // This will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
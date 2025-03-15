import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDocumentPreloading: true,
  },
  reactStrictMode: true,
  swcMinify: true, 
  images: {
    domains: ['img.freepik.com'], // Add the hostname here
  },
};

export default nextConfig;

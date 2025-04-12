import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDocumentPreloading: true, // Improves page load speed
  },
  reactStrictMode: true,
  swcMinify: true, // Enables faster minification with SWC
  
  images: {
    domains: ['img.freepik.com', 'yourdomain.com'], // Add your allowed image domains
    formats: ['image/avif', 'image/webp'], // Use modern formats for smaller file sizes
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Fix for certain packages
    }

    // Remove unused JavaScript (Tree Shaking)
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 30 * 1024, // Minimum 30 KB
      maxSize: 250 * 1024, // Maximum 250 KB per chunk
    };

    return config;
  },



};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    // Compress images more aggressively
    unoptimized: false,
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  // swcMinify: true,
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-*",
      "lucide-react",
      "react-icons",
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
        // Brotli compression for better performance
        {
          key: "Content-Encoding",
          value: "gzip, br",
        },
      ],
    },
    // Disable smooth scroll on mobile via headers
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
      ],
    },
  ],
  // Turbopack is enabled by default in Next.js 16
  turbopack: {},
};

export default nextConfig;

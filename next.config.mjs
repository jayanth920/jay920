/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'private-user-images.githubusercontent.com',
        pathname: '/**',
      },
            {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "i.gyazo.com",
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
      },
    ],
  },
    eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during production builds
  },
};

export default nextConfig;

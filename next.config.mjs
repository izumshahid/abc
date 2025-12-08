/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  transpilePackages: ['antd', '@ant-design/icons', '@ant-design/cssinjs'],
  experimental: {
    optimizePackageImports: ['antd', '@ant-design/icons'],
  },
};

export default nextConfig;

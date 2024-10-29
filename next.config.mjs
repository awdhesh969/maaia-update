/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all domains
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],

   images: {
    domains: ['facebook.com', 'fbcdn.net'],
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Keep images safe (local images in /public work automatically)
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "img.youtube.com",
      "ashallendesign.ams3.cdn.digitaloceanspaces.com",
    ],
  },
};

module.exports = nextConfig;

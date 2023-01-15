/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "ashallendesign.ams3.cdn.digitaloceanspaces.com",
    ],
  },
};

module.exports = nextConfig;

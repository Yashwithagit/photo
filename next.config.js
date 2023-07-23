/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  trailingSlash: true,
  basePath: "/out",

  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

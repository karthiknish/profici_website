/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.argv.includes("export") ? "./" : "",

  images: { unoptimized: true },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/profici" : "",
  basePath: process.env.NODE_ENV === "production" ? "/profici" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;

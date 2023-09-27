/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.argv.includes("export") ? "/profici" : "",
  basePath: process.argv.includes("export") ? "/profici" : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;

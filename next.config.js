/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.argv.includes("export") ? "/profici" : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;

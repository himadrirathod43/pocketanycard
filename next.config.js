/** @type {import('next').NextConfig} */
const path = require('node:path');

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })  
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'styles'),
    };
    return config
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const path = require('node:path');

const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
      generator: {
          filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'styles'),
    };
    return config
  },
}

module.exports = nextConfig

const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        dns: 'empty',
        net: 'empty',
        tls: 'empty',
      }
    }

    return config
  },
}

module.exports = withPlugins([
    withSass,
    [withOptimizedImages, { optimizeImagesInDev: true}],
    [withPWA, {  pwa: { dest: 'public' }}]
], nextConfig);


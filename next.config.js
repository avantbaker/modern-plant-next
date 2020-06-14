const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    withSass,
    [withOptimizedImages, { optimizeImagesInDev: true}],
    [withPWA, {  pwa: { dest: 'public' }}]
])

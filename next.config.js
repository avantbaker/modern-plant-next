const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
module.exports = withSass(
    withOptimizedImages({
        optimizeImagesInDev: true
    })
);

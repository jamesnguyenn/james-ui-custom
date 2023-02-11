/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        runtime: 'edge',
    },
};

module.exports = {
    nextConfig,
};
// const withTypeScript = require('next-tsc');
// module.exports = withTypeScript();

// next.config.js
const withTM = require('next-transpile-modules')(['james-ui-custom']); // pass the modules you would like to see transpiled

module.exports = withTM({});

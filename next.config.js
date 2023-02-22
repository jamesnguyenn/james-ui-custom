/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    // other settings...
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    transpilePackages: ['james-ui-custom'],
    webpack(config) {
        config.module.rules.forEach((rule) => {
            const { oneOf } = rule;
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes('_app')) return;
                    one.issuer.and = [path.resolve(__dirname)];
                });
            }
        });
        return config;
    },
};
// const withTypeScript = require('next-tsc');
// module.exports = withTypeScript();

// next.config.js
// const withTM = require('next-transpile-modules')(['james-ui-custom']); // pass the modules you would like to see transpiled

module.exports = nextConfig;

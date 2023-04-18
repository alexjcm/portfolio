// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  compiler: {
    styledComponents: true,
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
  },

  //To add support for Docker. Next.js can automatically create a .next/standalone folder that copies only the necessary files
  //for a production deployment including select files in node_modules.
  //To leverage this automatic copying you can enable it in your next.config.js:
  output: 'standalone', // This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules.
  // Additionally, a minimal server.js file is also output which can be used instead of next start. This minimal server does not copy
  // the public or .next/static folders by default as these should ideally be handled by a CDN instead, although these folders can be copied
  // to the standalone/public and standalone/.next/static folders manually, after which server.js file will serve these automatically.
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer(nextConfig);

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true },
);

// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sentry: {
    hideSourceMaps: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
  },

  // To add support for Docker. Next.js can automatically create a .next/standalone folder that copies only
  // the necessary files for a production deployment including select files in node_modules.
  // To take advantage of this automatic copy use the following option:
  output: 'standalone', // This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules.
  // Additionally, a minimal server.js file is also output which can be used instead of next start. This minimal server
  // does not copy the public or .next/static folders by default, although these folders can be copied to the standalone/public
  // and standalone/.next/static folders manually, after which server.js file will serve these automatically.

  i18n,
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

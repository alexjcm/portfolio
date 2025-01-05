// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
import { withSentryConfig } from '@sentry/nextjs';
import nextI18NextConfig from './next-i18next.config.js';

const { i18n } = nextI18NextConfig;
// const { i18n } = require('./next-i18next.config.js');


/** @type {import('next').NextConfig} */
const nextConfig = {
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

const sentryOptions = {
  org: 'ajcm',
  project: 'portfolio-web',

  // An auth token is required for uploading source maps.
  // authToken: process.env.SENTRY_AUTH_TOKEN,

  // Only print logs for uploading source maps in CI
  // silent: !process.env.CI,
  silent: true,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryOptions);

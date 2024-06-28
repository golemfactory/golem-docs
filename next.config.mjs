import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  experimental: {
    scrollRestoration: true,
  },
  distDir: 'dist',
  i18n: {
    locales: ['en', 'ja'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localeDetection: false, // Disable automatic locale detection
  },
}

// if (!process.env.VERCEL) {
//   nextConfig.output = 'export'
//   nextConfig.images = {
//     unoptimized: true,
//   }
// }

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)
)

import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  experimental: {
    scrollRestoration: true,
  },
  distDir: 'dist',
  async redirects() {
    return [
      {
        source: '/docs/providers/gpu/gpu-golem-live',
        destination: '/docs/providers/provider-installation',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'origin',
          },
        ],
      },
    ]
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

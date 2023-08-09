import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { GoogleAnalytics } from 'nextjs-google-analytics'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'
function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(
  nodes,
  slugify = slugifyWithCounter(),
  lastNodes = []
) {
  let sections = []
  for (let node of nodes) {
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.name)) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        let level = parseInt(node.name.slice(1))
        let newNode = { ...node.attributes, title, children: [], level }
        if (lastNodes[level - 2]) {
          lastNodes[level - 2].children.push(newNode)
        } else {
          sections.push(newNode)
        }
        lastNodes[level - 1] = newNode
        lastNodes.length = level
      }
    }
    sections.push(...collectHeadings(node.children ?? [], slugify, lastNodes))
  }
  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title
  let type = pageProps.markdoc?.frontmatter.type
  let tags = pageProps.markdoc?.frontmatter.tags

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title}`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <GoogleAnalytics trackPageViews />

      <div className={inter.className}>
        <Head>
          <title>{pageTitle}</title>
          {description && <meta name="description" content={description} />}
          <meta
            name="google-site-verification"
            content="_AoJ-bZkWRFuikUYy_DE51TeMgqwPurevNapFTxcLbE"
          />
        </Head>
        <Layout
          title={title}
          tableOfContents={tableOfContents}
          type={type}
          tags={tags}
        >
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}

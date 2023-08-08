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

function collectHeadings(nodes, slugify = slugifyWithCounter(), lastNode) {
  let sections = []

  for (let node of nodes) {
    if (
      node.name === 'h1' ||
      node.name === 'h2' ||
      node.name === 'h3' ||
      node.name === 'h4' ||
      node.name === 'h5' ||
      node.name === 'h6'
    ) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        let level = parseInt(node.name.slice(1))
        if (level > 2) {
          if (!lastNode || level !== lastNode.level + 1) {
            // throw new Error(
            //   `Cannot add '${node.name}' without preceding 'h${level - 1}'`
            // )
          }
          console.warn(
            `Cannot add '${node.name}' without preceding 'h${level - 1}'`
          )
        }
        let newNode = { ...node.attributes, title, children: [], level }
        if (lastNode && level - 1 === lastNode.level) {
          lastNode.children.push(newNode)
        } else {
          sections.push(newNode)
        }
        lastNode = newNode
      }
    }
    sections.push(...collectHeadings(node.children ?? [], slugify, lastNode))
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

  console.log(tableOfContents)

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

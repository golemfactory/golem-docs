import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

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

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title
  let type = pageProps.markdoc?.frontmatter.type
  let tags = pageProps.markdoc?.frontmatter.tags

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <div className={inter.className}>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta
          name="google-site-verification"
          content="_AoJ-bZkWRFuikUYy_DE51TeMgqwPurevNapFTxcLbE"
        />
      </Head>
      <Layout title={title} tableOfContents={tableOfContents} type={type} tags={tags}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
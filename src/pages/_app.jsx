import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { GoogleAnalytics } from 'nextjs-google-analytics'

import { Layout } from '@/components/Layout'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
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
  lastNodes = [],
  idMap = {}
) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'Heading') {
      let { level, id } = node.attributes

      let title = getNodeText(node)

      if (title) {
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

    sections.push(
      ...collectHeadings(node.children ?? [], slugify, lastNodes, idMap)
    )
  }
  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title
  if (!title) {
    let file = pageProps.markdoc.file.path
    throw new Error(
      'The file ' +
        file +
        ' is missing a title. Please add a title to the frontmatter.'
    )
  }
  let type = pageProps.markdoc?.frontmatter.type
  if (!type) {
    throw new Error(
      'The file ' +
        file +
        ' is missing a type. Please add a type to the frontmatter.'
    )
  }

  let tags = pageProps.markdoc?.frontmatter.tags

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title}`

  let description = pageProps.markdoc?.frontmatter.description

  if (!description) {
    let file = pageProps.markdoc.file.path
    throw new Error(
      'The file ' +
        file +
        ' is missing a description. Please add a description to the frontmatter.'
    )
  }

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  useEffect(() => {
    if (!localStorage.getItem('GDocsUUID')) {
      localStorage.setItem('GDocsUUID', uuidv4())
    }
  }, [])

  return (
    <>
      <GoogleAnalytics trackPageViews />

      <div className={inter.className}>
        <Head>
          <title>{pageTitle}</title>
          {description && <meta name="description" content={description} />}
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

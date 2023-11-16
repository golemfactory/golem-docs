import { createLoader } from 'simple-functional-loader'
import glob from 'fast-glob'
import * as url from 'url'
import * as path from 'path'
import * as fs from 'fs'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import Markdoc from '@markdoc/markdoc'

const __filename = url.fileURLToPath(import.meta.url)
const slugify = slugifyWithCounter()

function toString(node) {
  let str =
    node.type === 'text' && typeof node.attributes?.content === 'string'
      ? node.attributes.content
      : ''
  if ('children' in node) {
    for (let child of node.children) {
      str += toString(child)
    }
  }
  return str
}

function extractSections(node, sections, isRoot = true) {
  if (isRoot) {
    slugify.reset()
  }

  if (node.type === 'tag' && node.tag === 'partial' && node.attributes.file) {
    const fileContent = fs.readFileSync(
      `./src/markdoc/partials/${node.attributes.file}`,
      'utf8'
    )
    const partialAst = Markdoc.parse(fileContent)
    for (const child of partialAst.children) {
      extractSections(child, sections, false)
    }
  }

  if (node.type === 'tag' && node.tag === 'defaultvalue') {
    let content = node.attributes.title
    let hash = node.attributes?.id ?? slugify(content)
    sections.push([content, hash, []])
  } else if (node.type === 'heading' || node.type === 'paragraph') {
    let content = toString(node).trim()
    if (node.type === 'heading' && node.attributes.level <= 2) {
      let hash = node.attributes?.id ?? slugify(content)
      sections.push([content, hash, []])
    } else {
      sections.at(-1)[2].push(content)
    }
  }

  if ('children' in node) {
    for (let child of node.children) {
      extractSections(child, sections, false)
    }
  }
}

export default function (nextConfig = {}) {
  let cache = new Map()

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: __filename,
        use: [
          createLoader(function () {
            let pagesDir = path.resolve('./src/pages')
            this.addContextDependency(pagesDir)

            let files = glob.sync('**/*.md', { cwd: pagesDir })
            let data = files
              .map((file) => {
                if (file.startsWith('docs/templates/')) {
                  // Dont index templates
                  console.log('Skipping', file)
                  return
                }
                let url =
                  file === 'index.md'
                    ? '/'
                    : `/${file.replace(/\.md$/, '').replace(/\/index$/, '')}`
                let md = fs.readFileSync(path.join(pagesDir, file), 'utf8')

                let sections

                if (cache.get(file)?.[0] === md) {
                  sections = cache.get(file)[1]
                } else {
                  let ast = Markdoc.parse(md)
                  let title =
                    ast.attributes?.frontmatter?.match(
                      /^title:\s*(.*?)\s*$/m
                    )?.[1]
                  let type = ast.attributes?.frontmatter
                    ?.match(/^type:\s*(.*?)\s*$/m)?.[1]
                    .replace('"', '')
                    .replace('"', '')
                    .toLowerCase()
                  if (
                    type === 'noindex' ||
                    type === 'page' ||
                    type === 'noicon'
                  ) {
                    // Dont index these pages
                    return
                  }

                  const articleFor = file.startsWith('docs/creators/')
                    ? 'Requestor'
                    : file.startsWith('docs/providers/')
                    ? 'Provider'
                    : file.startsWith('docs/quickstarts/')
                    ? 'Requestor'
                    : file.startsWith('docs/golem-js/')
                    ? 'Requestor'
                    : 'General'

                  const codeLanguage = file.startsWith('docs/creators/dapps')
                    ? 'YAML'
                    : file.startsWith('docs/creators/javascript')
                    ? 'Javascript'
                    : file.startsWith('docs/creators/python')
                    ? 'Python'
                    : file.startsWith('docs/creators/ray')
                    ? 'Ray'
                    : file.startsWith('docs/golem-js')
                    ? 'Javascript'
                    : null

                  sections = [[title, null, [], type, articleFor, codeLanguage]]

                  extractSections(ast, sections)
                  cache.set(file, [md, sections])
                }

                return { url, sections }
              })
              .filter((item) => item !== undefined)

            // When this file is imported within the application
            // the following module is loaded:
            return `
              import FlexSearch from 'flexsearch'

              let sectionIndex = new FlexSearch.Document({
                tokenize: 'full',
                document: {
                  id: 'url',
                  index: 'content',
                  store: ['title', 'pageTitle', 'type', 'articleFor', 'codeLanguage'],
                },
                context: {
                  resolution: 9,
                  depth: 2,
                  bidirectional: true
                }
              })

              let data = ${JSON.stringify(data)}

              for (let { url, sections } of data) {
               
                for (let [title, hash, content] of sections) {
                  if (title === [title, ...content].join('\\n')) continue
                  sectionIndex.add({
                    url: url + (hash ? ('#' + hash) : ''),
                    title,
                    content: [title, ...content].join('\\n'),
                    pageTitle: hash ? sections[0][0] : undefined,
                    type: sections[0][3],
                    articleFor: sections[0][4],
                    codeLanguage: sections[0][5],
                  })
                }
              }

              export function search(query, options = {}) {
                let result = sectionIndex.search(query, {
                  ...options,
                  enrich: true,
                })
                if (result.length === 0) {
                  return []
                }
                return result[0].result.map((item) => ({
                  url: item.id,
                  title: item.doc.title,
                  pageTitle: item.doc.pageTitle,
                  type: item.doc.type,
                  articleFor: item.doc.articleFor,
                  codeLanguage: item.doc.codeLanguage,
                }))
              }
            `
          }),
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

const fs = require('fs')
const path = require('path')
const marked = require('marked')
const glob = require('glob')

let flag = true
let errors = []
const root = path.join(__dirname, 'src/pages')

const foldersToCheck = [
  'src/pages/docs/en/**/*.md',
  'src/pages/docs/ja/**/*.md',
  'src/markdoc/partials/**/*.md',
]

const filesToSkipExternalLinkCheck = [
  'src/pages/docs/en/golem/payload-manifest/computation-payload-manifest.schema.md',
  'src/pages/docs/en/golem/payload-manifest/index.md',
  'src/pages/docs/ja/golem/payload-manifest/computation-payload-manifest.schema.md',
  'src/pages/docs/ja/golem/payload-manifest/index.md',
]

const isPrivateOrLocalhost = (url) => {
  // Regular expression to match private IP addresses and localhost
  const privateIpPattern =
    /^(http:\/\/|https:\/\/)?(10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2[0-9]|3[0-1])\.\d{1,3}\.\d{1,3}|127\.\d{1,3}\.\d{1,3}\.\d{1,3}|localhost)/i

  return privateIpPattern.test(url)
}

const validateExternalLink = async (href) => {
  if (isPrivateOrLocalhost(href)) {
    return
  }

  try {
    const response = await fetch(href, { signal: AbortSignal.timeout(2000) })
    if (!response.ok) {
      errors.push(`Broken external link: ${href}`)
    }
  } catch {
    errors.push(`Broken external link: ${href}`)
  }
}

foldersToCheck.forEach((folder) => {
  glob(folder, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
      const data = fs.readFileSync(file, 'utf8')
      const renderer = new marked.Renderer()

      renderer.image = function (href, title, text) {
        if (text === '') {
          errors.push(`Missing image name in file ${file}: ${href} \n`)
          flag = false
        }

        if (href.startsWith('http')) {
          if (!process.env.VERCEL) {
            validateExternalLink(href)
          }
        } else if (!href.startsWith('/')) {
          errors.push(`Missing / in image link in file ${file}: ${href} \n`)
          flag = false
        } else {
          const imagePath = path.join(
            __dirname,
            'public',
            href.replace('/', '')
          )
          if (!fs.existsSync(imagePath)) {
            errors.push(`Broken image in file ${file}: linking to ${href} \n`)
            flag = false
          }
        }
      }

      renderer.link = async function (href) {
        const dirname = path.dirname(file)
        if (filesToSkipExternalLinkCheck.includes(file)) {
          return
        }

        if (href.startsWith('http')) {
          if (
            dirname.includes('/docs/en/golem-sdk-task-executor/reference') ||
            dirname.includes('/docs/ja/golem-sdk-task-executor/reference') ||
            dirname.includes('/docs/en/golem-js/reference') ||
            dirname.includes('/docs/ja/golem-js/reference') ||
            dirname.includes('/docs/en/templates') ||
            dirname.includes('/docs/ja/templates')
          ) {
            return
          }
          if (!process.env.VERCEL) {
            await validateExternalLink(href)
          }
        } else if (!href.startsWith('#')) {
          if (dirname.includes('/markdoc/partials/')) {
            // Special handling for partials
            let enPath, jaPath, enIndexPath, jaIndexPath

            if (href.startsWith('/docs/en/') || href.startsWith('/docs/ja/')) {
              // If the href already contains a locale, use it directly
              const localePath = href.split('#')[0]
              const otherLocalePath = localePath
                .replace('/docs/en/', '/docs/ja/')
                .replace('/docs/ja/', '/docs/en/')

              enPath = path.join(
                root,
                localePath.replace(/^\/docs\/(en|ja)\//, 'docs/en/') + '.md'
              )
              jaPath = path.join(
                root,
                localePath.replace(/^\/docs\/(en|ja)\//, 'docs/ja/') + '.md'
              )
              enIndexPath = path.join(
                root,
                localePath.replace(/^\/docs\/(en|ja)\//, 'docs/en/'),
                'index.md'
              )
              jaIndexPath = path.join(
                root,
                localePath.replace(/^\/docs\/(en|ja)\//, 'docs/ja/'),
                'index.md'
              )
            } else {
              // If the href doesn't contain a locale, add both en and ja
              const cleanHref = href.replace(/^\/docs\//, '').split('#')[0]
              enPath = path.join(root, 'docs/en', `${cleanHref}.md`)
              jaPath = path.join(root, 'docs/ja', `${cleanHref}.md`)
              enIndexPath = path.join(root, 'docs/en', cleanHref, 'index.md')
              jaIndexPath = path.join(root, 'docs/ja', cleanHref, 'index.md')
            }

            if (
              (!fs.existsSync(enPath) && !fs.existsSync(enIndexPath)) ||
              (!fs.existsSync(jaPath) && !fs.existsSync(jaIndexPath))
            ) {
              errors.push(
                `Broken link in partial file ${file}: linking to ${href} (missing in en or ja) \n`
              )
            }
          } else {
            const lang = file.includes('/docs/en/') ? 'en' : 'ja'
            const basePath = path.join(root, 'docs', lang)

            // Remove leading '/docs/en/' or '/docs/ja/' from href if present
            const cleanHref = href.replace(/^\/docs\/(en|ja)\//, '')

            if (dirname.includes('/reference/')) {
              // Handle reference links differently
              const referenceBasePath = path.dirname(file)
              const newHref = path.join(
                referenceBasePath,
                cleanHref.split('#')[0] + '.md'
              )
              if (!fs.existsSync(newHref)) {
                // Check if it's linking to a section within the same file
                const currentFile = path.basename(file)
                if (
                  !href.startsWith('../') &&
                  !currentFile.includes(cleanHref.split('#')[0])
                ) {
                  errors.push(
                    `Broken link in file ${file}: linking to ${href} \n`
                  )
                }
              }
              return
            }

            const newHref = path.join(basePath, `${cleanHref.split('#')[0]}.md`)
            const indexHref = path.join(
              basePath,
              `${cleanHref.split('#')[0]}/index.md`
            )

            if (href.endsWith('index') && !href.endsWith('#index')) {
              errors.push(
                `Broken link in file ${file}: linking to ${href} --> Links ending with index are not allowed due to Next.js routing. \n`
              )
            }

            if (href.startsWith('../')) {
              const relativeHref = path.join(dirname, cleanHref)
              if (
                !fs.existsSync(relativeHref + '.md') &&
                !fs.existsSync(path.join(relativeHref, 'index.md'))
              ) {
                errors.push(
                  `Broken link in file ${file}: linking to ${href} \n`
                )
              }
              return
            }

            if (!fs.existsSync(newHref) && !fs.existsSync(indexHref)) {
              if (
                dirname.includes('/docs/en/golem-js/reference') ||
                dirname.includes('/docs/ja/golem-js/reference') ||
                dirname.includes(
                  '/docs/en/golem-sdk-task-executor/reference'
                ) ||
                dirname.includes('/docs/ja/golem-sdk-task-executor/reference')
              ) {
                return
              }

              errors.push(`Broken link in file ${file}: linking to ${href} \n`)
            }
          }
        }
      }

      marked.parse(data, { renderer })
    })
  })
})

process.on('exit', () => {
  if (errors.length) {
    console.error(errors.join('\n'))
    process.exit(1)
  } else {
    console.log('All links are valid')
  }
})

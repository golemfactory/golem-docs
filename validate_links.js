const fs = require('fs')
const path = require('path')
const marked = require('marked')
const glob = require('glob')

let flag = true
let errors = []
const root = path.join(__dirname, 'src/pages')

const foldersToCheck = [
  'src/pages/docs/**/*.md',
  'src/markdoc/partials/**/*.md',
]

const filesToSkipExternalLinkCheck = [
  'src/pages/docs/golem/payload-manifest/computation-payload-manifest.schema.md',
  'src/pages/docs/golem/payload-manifest/index.md',
]

const isPrivateOrLocalhost = (url) => {
  // Regular expression to match private IP addresses and localhost
  const privateIpPattern =
    /^(http:\/\/|https:\/\/)?(10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2[0-9]|3[0-1])\.\d{1,3}\.\d{1,3}|127\.\d{1,3}\.\d{1,3}\.\d{1,3}|localhost)/i

  return privateIpPattern.test(url)
}

const validateExternalLink = async (href) => {
  // Added errors as a parameter, assuming it's an array.
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
          validateExternalLink(href)
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
            dirname.startsWith('src/pages/docs/golem-js/reference') ||
            dirname.startsWith('src/pages/docs/templates')
          ) {
            return
          }

          await validateExternalLink(href)
        } else if (!href.startsWith('#')) {
          const newHref = path.join(root, `${href.split('#')[0]}.md`)
          const indexHref = path.join(root, `${href.split('#')[0]}/index.md`)

          if (href.endsWith('index') && !href.endsWith('#index')) {
            errors.push(
              `Broken link in file ${file}: linking to ${href} --> Links ending with index are not allowed due to Next.js routing. \n`
            )
          }

          if (href.startsWith('../')) {
            const cleanHref = href.split('#')[0]
            const newHref =
              path.join(dirname, '..', cleanHref.replace('../', '')) + '.md'
            if (!fs.existsSync(newHref)) {
              errors.push(`Broken link in file ${file}: linking to ${href} \n`)
            }
            return
          }

          if (!fs.existsSync(newHref) && !fs.existsSync(indexHref)) {
            if (dirname.startsWith('src/pages/docs/golem-js/reference')) {
              return
            }

            errors.push(`Broken link in file ${file}: linking to ${href} \n`)
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

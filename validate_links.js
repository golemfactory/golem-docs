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

        if (!href.startsWith('http')) {
          if (!href.startsWith('/')) {
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
      }

      renderer.link = function (href) {
        if (!(href.startsWith('http') || href.startsWith('#'))) {
          const dirname = path.dirname(file)
          const newHref = path.join(root, `${href.split('#')[0]}.md`)
          const indexHref = path.join(root, `${href.split('#')[0]}/index.md`)

          if (href.endsWith('index') && !href.endsWith('#index')) {
            errors.push(
              `Broken link in file ${file}: linking to ${href} --> Links ending with index are not allowed due to Next.js routing. \n`
            )
            flag = false
          }

          if (href.startsWith('../')) {
            const cleanHref = href.split('#')[0]
            const newHref =
              path.join(dirname, '..', cleanHref.replace('../', '')) + '.md'
            if (!fs.existsSync(newHref)) {
              errors.push(`Broken link in file ${file}: linking to ${href} \n`)
              flag = false
            }
            return
          }

          if (!fs.existsSync(newHref) && !fs.existsSync(indexHref)) {
            // Skip reference links as it machine generated
            if (dirname.startsWith('src/pages/docs/golem-js/reference')) {
              return
            }

            errors.push(`Broken link in file ${file}: linking to ${href} \n`)
            flag = false
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

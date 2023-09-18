const fs = require('fs')
const marked = require('marked')
const glob = require('glob')

let isValid = true

glob('src/pages/docs/**/*.md', (err, files) => {
  if (err) throw err

  files.forEach((file) => {
    const data = fs.readFileSync(file, 'utf8')
    const renderer = new marked.Renderer()

    renderer.heading = (text) => {
      if (file.startsWith('src/pages/docs/golem-js/reference/')) return

      if (/(\*\*__)|([^\\]\*)|(`+)|(\[+)|(\]+)/g.test(text.trim())) {
        console.error(
          `Invalid heading in file ${file}: ${text} contains markdown syntax \n`
        )
        isValid = false
      }
    }

    marked.parse(data, { renderer })
  })
})

process.on('exit', () => {
  if (isValid) console.log('All headings are valid')
})

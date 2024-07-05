#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import { createRequire } from 'module' // built-in module
const require = createRequire(import.meta.url) // construct the require function for this ES module

const branchPrefix = process.argv[2]
const repoName = process.argv[3]

import { dirname } from 'path' // Importing dirname
import { fileURLToPath } from 'url' // Importing fileURLToPath
// Retrieve the current file's absolute path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if (!branchPrefix) {
  console.error('Please provide branch name as argument.')
  process.exit(1)
}

if (!repoName) {
  console.error('Please provide repo name as argument.')
  process.exit(1)
}

const docsPaths = {
  en: path.resolve(`./src/pages/docs/en/${repoName}/reference`),
  ja: path.resolve(`./src/pages/docs/ja/${repoName}/reference`),
}

async function main() {
  console.log(`Switching to branch ${branchPrefix} ...`)

  console.log('Generating typedoc ...')
  await generateTypedoc(branchPrefix)

  const navigation = await generateNavigation([branchPrefix])
  await fs.promises.writeFile(
    `./src/navigation/${repoName}-jsreference.js`,
    'export const navigation = ' + navigation
  )

  // Move default-values.md to the correct location, so we don't overwrite it with reference generation
  for (const lang of Object.keys(docsPaths)) {
    const sourcePath = `${__dirname}/src/navigation/customPages/default-values.md`
    const destPath = `${__dirname}/src/pages/docs/${lang}/${repoName}/reference/default-values.md`
    await fs.promises.copyFile(sourcePath, destPath)
  }
}

const util = require('util')
const glob = util.promisify(require('glob'))

async function generateTypedoc(branchPrefix) {
  for (const lang of Object.keys(docsPaths)) {
    const outputPath = docsPaths[lang]

    // Once typedoc is done, start looking for .md files and remove ".md" mentions.
    const files = await glob(outputPath + '/**/*.md')

    console.log(`Starting to remove '.md' mentions from ${lang} files.`)

    await Promise.all(
      files.map(async (file) => {
        let data = await fs.promises.readFile(file, 'utf8')
        const result = data.replace(/\.md/g, '')
        await fs.promises.writeFile(file, result, 'utf8')
      })
    )
  }
}

async function generateNavigation(versions) {
  try {
    const navigation = await Promise.all(
      versions.map(async (version) => {
        const title = `${version}`
        const links = await Promise.all(
          Object.keys(docsPaths).map(async (lang) => {
            const childrenDirs = getChildrenDirectories(docsPaths[lang])
            return {
              lang,
              links: [
                {
                  title: 'Content overview',
                  href: `/docs/${lang}/${repoName}/reference/overview`,
                },
                {
                  title: 'Default values',
                  href: `/docs/${lang}/${repoName}/reference/default-values`,
                },
                ...(await Promise.all(
                  childrenDirs.map(async (item) => {
                    const hrefPrefix = `/docs/${lang}/${repoName}/reference/${item}`
                    return {
                      title: item,
                      children: await getMarkdownTitles(
                        path.join(docsPaths[lang], item),
                        hrefPrefix
                      ),
                    }
                  })
                )),
              ],
            }
          })
        )

        return {
          title,
          links,
        }
      })
    )

    return stringifyArray(navigation)
  } catch (error) {
    console.error('Error in generateNavigation:', error)
  }
}

function getChildrenDirectories(parentDir) {
  try {
    const entries = fs.readdirSync(parentDir, { withFileTypes: true })

    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  } catch (error) {
    console.error('Error in getChildrenDirectories:', error)
  }
}

async function getMarkdownTitles(dirPath, hrefPrefix) {
  try {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })
    const directlyNestedMarkdownFiles = entries.filter(
      (entry) => entry.isFile() && entry.name.endsWith('.md')
    )

    return directlyNestedMarkdownFiles.map((file) => {
      let title = getTitleFromFile(file.name)

      // If title contains a ".", return the part after it.
      // Otherwise, leave the title as it is.
      const splitTitle = title.split('.')
      if (splitTitle.length > 1) {
        title = splitTitle.slice(1).join('.')
      }

      const href = path.join(hrefPrefix, file.name.replace('.md', ''))

      return {
        title,
        href,
      }
    })
  } catch (error) {
    console.error('Error in getMarkdownTitles:', error)
  }
}

function getTitleFromFile(filename) {
  try {
    return filename
      .replace(/-/g, ' ')
      .replace('.md', '')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  } catch (error) {
    console.error('Error in getTitleFromFile:', error)
  }
}

function stringifyObject(obj, indent = '  ') {
  const entries = Object.entries(obj)
    .map(([key, value]) => {
      const formattedValue =
        value.constructor === Object
          ? stringifyObject(value, indent + '  ')
          : Array.isArray(value)
          ? stringifyArray(value, indent + '  ')
          : JSON.stringify(value)
      return `${indent}${key}: ${formattedValue}`
    })
    .join(',\n')
  return `{\n${entries}\n${indent.slice(2)}}`
}

function stringifyArray(array, indent = '  ') {
  const entries = array
    .map((entry) => {
      return Array.isArray(entry)
        ? stringifyArray(entry, indent + '  ')
        : entry.constructor === Object
        ? stringifyObject(entry, indent + '  ')
        : JSON.stringify(entry)
    })
    .join(',\n')
  return `[\n${entries}\n${indent.slice(2)}]`
}

main().catch((error) => console.error(error))

export default undefined

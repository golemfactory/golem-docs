#!/usr/bin/env node
import * as fs from 'fs'

import * as path from 'path'
import { createRequire } from 'module' // built-in module
const require = createRequire(import.meta.url) // construct the require function for this ES module

const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')

const repoURL = 'https://github.com/golemfactory/yajsapi.git'
const tempPath = path.resolve('./temp')

const fsPromises = fs.promises

async function main() {
  if (fs.existsSync(tempPath)) {
    rimraf.sync(tempPath)
  }

  console.log('Cloning repo...')

  await git.clone({
    url: repoURL,
    dir: tempPath,
    ref: 'master',
    corsProxy: '',
    fs: fsPromises,
    http,
    depth: null,
  })

  let remoteBranches = await git.listBranches({
    fs,
    dir: tempPath,
    remote: 'origin',
  })

  const branchPrefix = 'b0'

  const branchFormat = new RegExp(`^${branchPrefix}\\.\\d+$`)

  const filteredBranches = remoteBranches.filter((branch) =>
    branchFormat.test(branch)
  )

  let errors = 0

  console.log(`\nFound ${filteredBranches.length} branches.`)

  for (const branch of filteredBranches) {
    try {
      console.log(`\nSwitching to branch ${branch} ...`)
      await git.checkout({ dir: tempPath, ref: branch, fs })
      console.log('Generating typedoc...')
      await generateTypedoc(branch)
    } catch (error) {
      console.error(`Error with branch ${branch}:`, error.message)
      errors++
    }
  }

  console.log(`\nFinished with ${errors} errors.`)
  rimraf.sync(tempPath)
  console.log('SCANNING FOR NAMES!!!!')
  const navigation = await generateNavigation(filteredBranches)
  await fs.promises.writeFile(
    './src/navigation/jsreference.js',
    'export const navigation = ' + navigation
  )
}

const util = require('util')
const rimraf = util.promisify(require('rimraf'))
const exec = util.promisify(require('child_process').exec)
const glob = util.promisify(require('glob'))

async function generateTypedoc(branchPrefix) {
  const outputPath = './src/pages/docs/yajsapi/reference'

  if (fs.existsSync(outputPath + '/' + branchPrefix)) {
    await rimraf(outputPath + '/' + branchPrefix)
  }
  console.log(
    `Generating typedoc for branch ${branchPrefix}... at ${outputPath}/${branchPrefix}`
  )
  const command = `typedoc --entryPoints ./yajsapi/yajsapi/index.ts --exclude ./yajsapi/yajsapi/**/*.spec.ts --tsconfig ./yajsapi/tsconfig.json --plugin typedoc-plugin-markdown  --excludePrivate --excludeProtected --excludeExternals --readme none --out ${outputPath}/${branchPrefix}`

  const { stdout } = await exec(command)
  console.log(`TypeDoc STDOUT: ${stdout}`)

  // Once typedoc is done, start looking for .md files and remove ".md" mentions.
  const files = await glob(outputPath + '/' + branchPrefix + '/**/*.md')

  console.log("Starting to remove '.md' mentions from files.")

  await Promise.all(
    files.map(async (file) => {
      let data = await fs.promises.readFile(file, 'utf8')
      const result = data.replace(/\.md/g, '')
      await fs.promises.writeFile(file, result, 'utf8')
    })
  )
}

const docsPath = path.resolve('./src/pages/docs/yajsapi/reference')

async function generateNavigation(versions) {
  try {
    const navigation = await Promise.all(
      versions.map(async (version) => {
        const basePath = path.join(docsPath, version)
        const title = `${version}`
        const childrenDirs = getChildrenDirectories(basePath)
        const links = await Promise.all(
          childrenDirs.map(async (item) => {
            const hrefPrefix = `/docs/yajsapi/reference/${version}/${item}`
            return {
              title: item,
              children: await getMarkdownTitles(
                path.join(basePath, item),
                hrefPrefix
              ),
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
      const title = getTitleFromFile(file.name)
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

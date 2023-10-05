---
description: Accessing the Internet
title: Accessing the Internet
type: Example
---

# JS Task API Examples: accessing the internet

## Introduction

In this article, we will present methods that let you access the Internet.

**Outbound feature**

For the requestor to be able to use the outbound feature, (initiate a connection to `target_url`), the following minimal conditions must be met:

- The requestor must request the outbound feature in the demand and include a Computation Manifest there. The manifest must declare the `target_url`.
- The provider offers the service at least for the `target_url`. (So either outbound for unrestricted URLs or the `target_url` is included in the whitelist).

You can find more information about the feature and the manifest in the following articles: [Accessing the Internet](/docs/creators/javascript/guides/accessing-internet) and [Payload Manifes](/docs/golem/payload-manifest).

The requestor is responsible for:

- Manifest creation
- Defining demand for outbound access

<!-- - Transfer method (WIP) -->

## Prerequisites

Yagna service is installed and running with `try_golem` app-key configured.

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above

{% /alert %}

### How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/golem-js
```

Next, install `Golem SDK CLI` - a companion tool that will facilitate manifest creation.

```shell
npm install -g @golem-sdk/cli
```

To run the examples provided below, copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Manifest creation

To create a new manifest run:

```bash
golem-sdk manifest create golem/curl
```

This will create a basic `manifest.json` file. You will use it to inform the provider what GVMI image we will be using. The manifest contains also your application version, application name, and description, all read from your `package.json` file (you can edit this information if you want).

### Adding outbound configuration

The next step is to configure our manifest, so you can access a public URL. The CLI also has a handy command that will take care of that for you:

```bash
golem-sdk manifest net add-outbound https://github.com
```

This has added `https://github.com` as the URL you want to access from the provider node. The command can be run multiple times to add more URLs or you can pass them all at once.

Your manifest is ready and stored in the `manifest.json` file.

## Defining the demand for the Outbound access

The example below demonstrates how to define the demand that will get access to the Internet.

```javascript
import { TaskExecutor } from '@golem-sdk/golem-js'
import { readFile } from 'fs/promises'

const url =
  'https://github.com/golemfactory/golem-js/archive/refs/tags/v0.11.2.tar.gz';

(async function main() {
  // Load the manifest.
  const manifest = await readFile(`./manifest.json`)

  // Create and configure a TaskExecutor instance.
  const executor = await TaskExecutor.create({
    capabilities: ['inet', 'manifest-support'],
    yagnaOptions: { apiKey: 'try_golem' },
    manifest: manifest.toString('base64'),
  })

  try {
    await executor.run(async (ctx) => {
      const result = await ctx.run(`curl ${url} -o /golem/work/golem-js.tar.gz`)

      if (result.result === 'Ok') {
        console.log('SDK downloaded!')
      } else {
        console.error('Failed to download the SDK!', result.stderr)
      }
    })
  } catch (err) {
    console.error('The task failed due to', err)
  } finally {
    await executor.end()
  }
})()
```

Note the most important part:

```javascript
// Load the manifest file.
const manifest = await readFile(`./manifest.json`)

// Create and configure a TaskExecutor instance.
const executor = await TaskExecutor.create({
  capabilities: ['inet', 'manifest-support'],
  yagnaOptions: { apiKey: 'try_golem' },
  manifest: manifest.toString('base64'),
})
```

First, it is specifying additional requirements to the demand:

- 'inet' - indicates the script requires outbound service
- 'manifest-support' - indicates, requestor uses a manifest to specify a demand.

Instead of providing an image tag or hash, it uses a manifest file that describes what will be run on providers.

Please note the loaded manifest is encoded to base64.

`yagnaOptions: { apiKey: 'try_golem' }` - defined the api key, to get access to the Yagna service. This particular key is available if you start the yagna according to the procedure provided in the installation example, you can also configure your own unique keys. See [here](/docs/creators/javascript/examples/using-app-keys) for instructions.

Then you can use the applications that connects to the `target_urls` specified in the manifest in the standard way:

```javascript
const result = await ctx.run(`curl ${url} -o /golem/work/golem-js.tar.gz`)
```

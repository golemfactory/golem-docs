---
title: Golem JS Task API - Internet Access
description: Learn to access the internet using Golem's JS Task API. Discusses the Outbound feature and includes steps for manifest creation, demand definition, and running Node.js examples.
pageTitle: Utilize Golem's JS Task API for Internet Connectivity - Complete Guide
type: Example
---

# JS Task API Examples: accessing the internet

## Introduction

In this article, we will present methods that let you access the Internet.

**Outbound feature**

For the requestor to be able to use the outbound feature, (initiate a connection to `target_url`), the following minimal conditions must be met:

- The requestor must request the outbound feature in the demand and include a Computation Manifest there. The manifest must declare the `target_url`.
- The provider offers the service at least for the `target_url`. (So either outbound for unrestricted URLs or the `target_url` is included in the whitelist).

You can find more information about the feature and the manifest in the following articles: [Accessing the Internet](/docs/creators/javascript/guides/accessing-internet) and [Payload Manifest](/docs/golem/payload-manifest).

The requestor is responsible for:

- Manifest creation
- Defining demand for outbound access

Both examples are accessing urls included in the Whitelist. For the current Whitelist see [https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist).


<!-- - Transfer method (WIP) -->

## Prerequisites

Yagna service is installed and running with `try_golem` app-key configured.

### How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/task-executor` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
```

Next, install `Golem SDK CLI` - a companion tool that will facilitate manifest creation.

```shell
npm install -g @golem-sdk/cli
```

To run the examples provided below, copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Basic outbound access

In this example we will download a file from `ipfs.io`. This is one of the domain included in the whitelist.

### Manifest creation

To create a new manifest run:

```bash
golem-sdk manifest create golem/examples-outbound:latest
```

This will create a basic `manifest.json` file. You will use it to inform the provider what GVMI image we will be using. The manifest contains also your application version, application name, and description, all read from your `package.json` file (you can edit this information if you want).

#### Adding outbound configuration

The next step is to configure our manifest, so you can access a public URL. The CLI also has a handy command that will take care of that for you:

```bash
golem-sdk manifest net add-outbound https://ipfs.io
```

This has added 'https://ipfs.io' as the URL you want to access from the provider node. The command can be run multiple times to add more URLs or you can pass them all at once.

Your manifest is ready and stored in the `manifest.json` file.

### Defining demand for outbound access 

The example below demonstrates how to define the demand that will get access to the Internet.

Here's the manifest

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/outbound/manifest.json" language="javascript" /%}

And the requestor code:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/outbound/outbound-basic.mjs" language="javascript" /%}

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

Then you can use the applications that connects to the target `url` specified in the manifest in the standard way:

```javascript
const result = await ctx.run(`curl ${url} -o /golem/work/example.jpg`)
```

## Using outbound to install node.js packages

Note: This example shows how to use the outbound whitelist to install a npm package on a provider. It is recommended to install additional packages in a directory that is defined as `VOLUME` in the image definition, to avoid filesystem capacity limits. 
If you have a large number of packages you should rather install them during the image build phase - you will avoid installing them on each provider separately and get your providers ready in a shorter time.   

Here's the manifest:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/outbound/manifest_npm_install.json" language="javascript" /%}

And the requestor code:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/outbound/npm-install.mjs" language="javascript" /%}
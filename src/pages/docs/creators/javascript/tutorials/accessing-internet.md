---
title: Tutorial on how to access Internet from Provider
description: Accessing the Internet from Provider Tutorial
type: tutorial
---

## Introduction

In this tutorial, you will learn how to quickly access the internet when running code on Golem network. You will get familiar with the concept of Golem manifest, outbound and some security policies that are in place to protect the providers from malicious code.

{% alert level="info" %}

This tutorial is designed for: OS X 10.14+, Ubuntu 18.04 or 20.04, and Windows

{% /alert %}

## Prerequisites

- Yagna service installed and running with the `try_golem` app-key configured ([see instructions](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors)).

## Overview

In this tutorial you will create a requestor script that will download a code from `github.com` site to a provider. To achive the goal you will use the outbound feature.

The github.com URL was selected as a target URL for the example, as it is included in the default provider’s whitelist. You can check [here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist) for other entries. Please note that a provider can choose to add, remove or completely wipe the whitelist.

As the requestor needs to list all URLs they want to access in a manifest file, you need to create one and provide it whene when creating a new TaskExecutor. There is a CLI tool that we will use to create this manifest.

You can read more about outbound [here](/docs/creators/javascript/guides/accessing-internet).

Let’s code.

## Initialize the project

First we need to create project directory and navigate there:

```bash
mkdir outbound-example
cd outbound-example
```

Then inittialise the projcet and install JS SDK.

```bash
npm init
npm install @golem-sdk/golem-js
```

We will also install `Golem SDK CLI` - a companion tool that will facilitate manifest creation.

```shell
npm install -g @golem-sdk/cli
```

## Manifest creation

Once you have the project, open a terminal

```bash
golem-sdk manifest create golem/curl
```

This will create a basic `manifest.json` file. We wil use it to inform the provider what GVMI image we will be using. Teh manifest contains also our application version, application name and description, read from our `package.json` file (you can edit this information if you want).

### Adding outbound configuration

The next step is to configure our manifest, so we can access a public URL. The CLI also has a handy command that will take care of that for us:

```bash
golem-sdk manifest net add-outbound https://github.com
```

We have added https://github.com as the URL we will want to access from the provider node. The command can be run multiple times to add more URLs or you can pass them all at once.

Now our manifest is ready, we can start coding the application.

### Requestor script

Our application will be very simple. We will use `curl` to download a release of Golem SDK from github. While this can be achieved without using Golem, this is just a demonstration of how we can enable and access the internet from the Golem SDK.

Let’s start with a simple boilerplate, copy the following code to a javascript file:

```javascript
import { TaskExecutor } from '@golem-sdk/golem-js'
import { readFile } from 'fs/promises'
;(async function main() {
  const executor = await TaskExecutor.create({})

  try {
    // Your code goes here
  } catch (err) {
    console.error('The task failed due to', err)
  } finally {
    await executor.end()
  }
})()
```

We are using async/await to synchronize asynchronous calls, for simplicity and compatibility, we wrap all the code into an asynchronous main function.
The next thing to do is to correctly initialize the `TaskExecutor``. For this purpose, we will use the manifest file we’ve just created.

At the top of the main function replace the executor initialization with the following:

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

This is the most important part.
First we add to out demand additional requirements:

- 'inet' - indicates we require outbound service available
- 'manifest-support' - informs, that we will use manifest to specify depamnd.

Instead of providing an image tag or hash, we are using a manifest file that describes what we will be running on providers.

Please note the loaded manifest is encoded to base64.

`yagnaOptions: { apiKey: 'try_golem' }` - defined the api key, to get access to the Yagna service. This particular key is available if you start the yagna according to the procedure provided in the installation example, you can also configure your unique keys. See [here](/docs/creators/javascript/examples/using-app-keys) for instructions.

In this example, we will simply fetch a release of Golem SDK from GitHub using curl command, available in our GVMI image. So first let’s save the URL near the top of the file (just after the imports):

```javascript
import { TaskExecutor } from '@golem-sdk/golem-js'
import { readFile } from 'fs/promises'

const url =
  'https://github.com/golemfactory/golem-js/archive/refs/tags/v0.11.2.tar.gz'
```

And finally let’s execute some code on the provider. We will run a single task on the provider, using the TaskExecutor.run() function. To make this work, put the following code in the try/catch block:

```javascript
await executor.run(async (ctx) => {
  const result = await ctx.run(`curl ${url} -o /golem/work/golem-js.tar.gz`)

  if (result.result === 'Ok') {
    console.log('SDK downloaded!')
  } else {
    console.error('Failed to download the SDK!', result.stderr)
  }
})
```

And that’s it! Now, make sure you yagna service is running and you can start this script.

This is how the entire file should look like:

```javascript
import { TaskExecutor } from '@golem-sdk/golem-js'
import { readFile } from 'fs/promises'

const url =
  'https://github.com/golemfactory/golem-js/archive/refs/tags/v0.11.2.tar.gz'

;(async function main() {
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

You can run it now. In the output, you should see “SDK downloaded!” between log lines. That means the code works.

{% docnavigation title="Next steps" %}

- Another [outbound example](https://github.com/golemfactory/golem-js/tree/master/examples/external-request)

{% /docnavigation %}

{% docnavigation title="See also" %}

- Default Golem [whitelist](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist)

- More on the [Payload Manifest](/docs/golem/payload-manifest)

{% /docnavigation %}

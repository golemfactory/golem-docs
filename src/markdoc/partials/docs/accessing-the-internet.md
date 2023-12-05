## Introduction

In this tutorial, you will learn how to quickly access the internet when running code on the Golem network. You will get familiar with the concept of Golem manifest, outbound, and some security policies that are in place to protect the providers from malicious code.

{% alert level="info" %}

This tutorial is designed for: OS X, Ubuntu, and Windows.

{% /alert %}

## Prerequisites

- Yagna service installed and running with the `try_golem` app-key configured ([see instructions](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors)).

## Overview

In this tutorial, you will create a requestor script that will download a code from the `github.com` site to a provider. To achieve the goal you will use the outbound feature.

The github.com URL was selected as a target URL for the example, as it is included in the default provider’s whitelist. You can check [here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist) for other entries. Please note that a provider can choose to add, remove, or completely wipe the whitelist.

As the requestor needs to list all URLs they want to access in a manifest file, you need to create one and provide it when creating a new TaskExecutor. There is a CLI tool that we will use to create this manifest.

You can read more about outbound [here](/docs/creators/javascript/guides/accessing-internet).

Let’s code.

## Initialize the project

First, create a project directory and navigate there:

```bash
mkdir outbound-example
cd outbound-example
```

Then initialise the project and install JS SDK.

```bash
npm init
npm install @golem-sdk/golem-js
```

Next, install `Golem SDK CLI` - a companion tool that will facilitate manifest creation.

```shell
npm install -g @golem-sdk/cli
```

## Manifest creation

Once you have the project, open a terminal and run:

```bash
golem-sdk manifest create golem/examples-outbound:latest
```

This will create a basic `manifest.json` file. You will use it to inform the provider what Golem VM image (GVMI) we will be using. The manifest contains also your application version, application name, and description, all read from your `package.json` file (you can edit this information if you want).

### Adding outbound configuration

The next step is to configure our manifest, so you can access a public URL. The CLI also has a handy command that will take care of that for you:

```bash
golem-sdk manifest net add-outbound https://github.com
```

This has added https://github.com as the URL you want to access from the provider node. The command can be run multiple times to add more URLs or you can pass them all at once.

Now our manifest is ready, you can start coding the application.

### Requestor script

The application will be very simple. It will use `curl` to download a release of the Golem SDK from GitHub. While this can be achieved without using Golem, this is just a demonstration of how to enable and access the internet from the Golem SDK.

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

The snippet above is using async/await to synchronize asynchronous calls, for simplicity and compatibility, we wrap all the code into an asynchronous main function.
The next thing to do is to correctly initialize the `TaskExecutor``. For this purpose, let's use the manifest file we’ve just created.

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
First, it is specifying additional requirements to the demand:

- 'inet' - indicates the script requires outbound service
- 'manifest-support' - informs, that it will use a manifest to specify the demand.

Instead of providing an image tag or hash, it uses a manifest file that describes what will be run on providers.

Please note the loaded manifest is encoded to base64.

`yagnaOptions: { apiKey: 'try_golem' }` - defined the api key, to get access to the Yagna service. This particular key is available if you start the yagna according to the procedure provided in the installation example, you can also configure your own unique keys. See [here](/docs/creators/javascript/examples/using-app-keys) for instructions.

In this example, you will simply fetch a release of the Golem SDK from GitHub using the `curl` command, available in our Golem VM image. So first let’s save the URL near the top of the file (just after the imports):

```javascript
import { TaskExecutor } from '@golem-sdk/golem-js'
import { readFile } from 'fs/promises'

const url =
  'https://github.com/golemfactory/golem-js/archive/refs/tags/v0.11.2.tar.gz'
```

And finally, let’s execute some code on the provider. You will run a single task on the provider, using the TaskExecutor.run() function. To make this work, put the following code in the try/catch block:

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

And that’s it! Now, make sure your yagna service is running and you can start this script.

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

You can run it now. In the output, you should see “SDK downloaded!” between the log lines. That means the code works.

{% docnavigation title="Next steps" %}

- Another [outbound example](https://github.com/golemfactory/golem-js/tree/master/examples/external-request)

{% /docnavigation %}

{% docnavigation title="See also" %}

- Default Golem [whitelist](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist)

- More on the [Payload Manifest](/docs/golem/payload-manifest)

{% /docnavigation %}

---
description: Create your own JavaScript application on Golem
title: Golem Node.js QuickStart
type: Quickstart
---

# Introduction

In this article, we'll show you how to run a simple task on the Golem Network.

As a QuickStart, we will perform a simple task: running a basic shell command on a rented provider.

It should take just a few minutes to complete, and you will see the command output printed in your terminal.

{% alert level="info" %}
This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above
{% /alert %}

## Installing and running Yagna

Yagna is a service that communicates and performs operations on the Golem Network. Let's get started by installing it.

## Install Yagna

{% tabs %}
{% tab label="Easy installation" %}

On Linux/ MacOS, you can install it using our installation script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}
{% tab label="Windows Manual installation" %}

Alternatively, if you can't install it in an easy way, you will do it manually in the following way:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Unzip the archive to extract the two files: `yagna.exe` and `gftp.exe`.
3. Copy those files to `C:\Windows\System32`.
{% /tab %}
{% tab label="Unix Manual installation" %}

Alternatively, if you can't install it in an easy way, you will do it manually in the following way:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Unpack `yagna` and `gftp` binaries and put them somewhere in your PATH (e.g. copy them to /usr/local/bin on Unix-like systems) or add the directory you placed the binaries into your PATH.

{% /tab %}
{% /tabs %}

{% alert level="info" %}

Should you encounter any problems, please reach out to us via our [Discord channel](https://chat.golem.network/) or consult the following resource for [troubleshooting](/docs/creators/javascript/guides/troubleshooting).
{% /alert %}

## Start the Yagna service

Open a terminal (command line window) and define the app-key that will allow our script to use the Yagna API:

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
export YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% tab label="Windows" %}

```shell
set YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% /tabs %}

Then start the `yagna` service:

```bash
yagna service run
```

## Get test GLM tokens

Requesting tasks on the Golem Network requires GLM tokens.
As this example will run on a test network, you can use test GLM.

Open another terminal and run the following command to complete the configuration:

```bash
yagna payment fund
```

It will top up your account with test GLM tokens. These tokens can only be used on the `testnet`.

## Building your first Golem Network App

Create a new Node.js project and install the Golem SDK by entering the following commands in your terminal:

```bash
mkdir try_golem
cd try_golem
npm init
npm install @golem-sdk/golem-js
```

Create a file named `requestor.mjs` and copy the following content into it. The code defines a task that runs the command `node -v` on the Golem Network and prints the result to your terminal.

```js
import { TaskExecutor } from '@golem-sdk/golem-js'

;(async () => {
  const executor = await TaskExecutor.create({
    package: '529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4',
    yagnaOptions: { apiKey: 'try_golem' },
  })
  const result = await executor.run(
    async (ctx) => (await ctx.run('node -v')).stdout
  )
  await executor.end()

  console.log('Task result:', result)
})()
```

{% alert level="info" %}

You can find a detailed explanation of the above code [here](/docs/creators/javascript/tutorials/quickstart-explained)
{% /alert %}

## Running the script on Golem Network

Run the command:

```bash
node requestor.mjs
```

The output of the script should look very similar to the one below:

![Output logs](/js-tutorial-05.gif)

You can find information regarding the `node.js` version used on the remote computer - `v.16.14.0` - at the end of the script's logs. This version is incorporated into the current standard Golem image used to execute the task.

## Summary

You've installed the Yagna service and executed a simple task on the Golem Network.
However, you can accomplish much more. Here are some suggested next steps to explore the Golem Network world:

{% docnavigation title="Next steps" %}

- [QuickStart Explained](/docs/creators/javascript/tutorials/quickstart-explained)
{% /docnavigation %}
{% docnavigation title="See also" %}
- [Simple introduction to the Golem Network and Task Model](/docs/creators/javascript/guides/task-model)
- [Parallel processing tutorial](/docs/creators/javascript/tutorials/running-parallel-tasks)
{% /docnavigation %}

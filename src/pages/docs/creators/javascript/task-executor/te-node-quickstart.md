---
title: Node.js Development on Golem Network
pageTitle: Easily Build JavaScript Apps Using Golem Network - Node.js Quickstart
description: Learn to build JavaScript applications with this quickstart for the Golem Network, featuring installation steps, code examples, and easy integration.
type: Quickstart
---

# Task Executor Quickstart

## Introduction

In this article, we'll show you how to run a simple task on the Golem Network.

As a Quickstart, we will perform a simple task: running a basic shell command on a rented provider.

It should take just a few minutes to complete, and you will see the command output printed in your terminal.

## Installing and running Yagna

Yagna is a service that communicates and performs operations on the Golem Network. Let's get started by installing it.

### Install Yagna

{% tabs %}
{% tab label="Linux/Mac" %}

On Linux/ MacOS, you can install it using our installation script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}
{% tab label="Windows" %}

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

Should you encounter any problems, please reach out to us via our [Discord channel](https://chat.golem.network/) or consult the following resource for [troubleshooting](/docs/troubleshooting/js-requestor).
{% /alert %}

### Start the Yagna service

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

### Get test GLM tokens

Requesting tasks on the Golem Network requires GLM tokens.
As this example will run on a test network, you can use test GLM.

Open another terminal and run the following command to complete the configuration:

```bash
yagna payment fund
```

It will top up your account with test GLM tokens. These tokens can only be used on the `testnet`.

### Building your first Golem Network App

Create a new Node.js project and install the Golem SDK by entering the following commands in your terminal:

```bash
mkdir try_golem
cd try_golem
npm init
npm install @golem-sdk/task-executor
npm install @golem-sdk/pino-logger
```

Please note: This application requires Node.js version 18.0.0 or higher.

Create a file named `requestor.mjs` and copy the following content into it. The code defines a task that runs the command `node -v` on the Golem Network and prints the result to your terminal.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/quickstarts/quickstart/requestor.mjs" language="javascript" /%}

{% alert level="info" %}

You can find a detailed explanation of the above code [here](/docs/creators/javascript/task-executor/te-node-quickstart-explained)

{% /alert %}

### Running the script on Golem Network

Run the command:

```bash
node requestor.mjs
```

The output of the script should look very similar to the one below:

![Output logs](/te/quickstart.gif)

The information about the `node.js` version included in the image that our script deploys on the remote computer, can be found at the end of the script's logs.

### Summary

You've installed the Yagna service and executed a simple task on the Golem Network.
However, you can accomplish much more. Here are some suggested next steps to explore the Golem Network world:

{% docnavigation title="Next steps" %}

- [Quickstart Explained](/docs/creators/javascript/task-executor/te-node-quickstart-explained)

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Simple introduction to the Golem Network and Task Model](/docs/creators/javascript/guides/task-model)
- [Parallel processing tutorial](/docs/creators/javascript/tutorials/running-parallel-tasks)

{% /docnavigation %}

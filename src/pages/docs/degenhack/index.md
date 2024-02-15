---
title: Golem Network manual for Degen Hack hackathon - List of Content
hide:
  - navigation
description: Materials for hackathon participants
type: noindex
---

# Golem Network manual for Degen Hack hackathon participants.

{% alert level="info" %}
This section contains an extract from the Golem Network documentation for Degen Hack hackathon participants. The full version is available on the [Golem Docs portal](https://docs.golem.network/) and specifically JS related documentation can be found [here](https://docs.golem.network/docs/creators/javascript).

Should you encounter any problems, please reach out to us via our [Degen Hack hackathon Discord channel](https://chat.golem.network/#degen-hack) or consult the Golem representative present on-site during the event.
{% /alert %}

## Intro to Golem Network and JS API.

**Golem Network** is a P2P network that consists of many nodes. Each node is a system with a `Yagna` service running on it. The nodes that offer their resources to others are called **providers**. The nodes that rent resources are called **requestors**.

**Yagna** is a service that enables the user to interact with the network. In practice, the user creates a **requestor script** utilizing one of the available Golem SDKs. The script is used to define what resources are needed and what should be run on the provider's node, and to orchestrate all activities.

For the resources consumed on the Golem Network, you pay in **GLM**. GLM is an ERC-20 utility token. When you run Yagna for the first time on your computer, it will create a wallet for you. It will have an address on supported blockchains and you can export the wallet address to an external application.

When developing your code on the Golem Network you do not necessarily need to acquire GLM tokens. You can use the `testnet` network, which while consisting of providers of some limited performance allows you to pay in tGLM available for free. Once your code is ready for production, you switch to `mainnet`, where you need true GLM.

## Getting started:

### Installing Yagna

{% tabs %}
{% tab label="Linux/Mac" %}

On Linux/ MacOS, you can install it using our installation script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | YA_INSTALLER_CORE=v0.13.2 bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}
{% tab label="Windows" %}

For Windows, follow these steps for manual installation:

Visit the [release page](https://github.com/golemfactory/yagna/releases) on GitHub, find a release [v0.13.2](https://github.com/golemfactory/yagna/releases/tag/v0.13.2) and download the package named **golem-requestor** for Windows.
Extract the downloaded archive to retrieve yagna.exe and gftp.exe.
Copy these files to `C:\Windows\System32` to complete the installation.
Note: Windows installation is manual as there is no package manager integration.
{% /tab %}
{% tab label="Unix Manual installation" %}

If you prefer manual installation on Unix-like systems:

Download the [golem-requestor](https://github.com/golemfactory/yagna/releases/tag/v0.13.2) package suitable for your platform from the latest releases on GitHub.
Unpack the yagna and gftp binaries and place them in your PATH, for example, in `/usr/local/bin`, or alternatively add the directory containing these binaries to your `PATH`.
{% /tab %}
{% /tabs %}

### Start the Yagna service

To start the `yagna` service, open a terminal and type:

```bash
yagna service run
```

### Get test GLM tokens

Requesting tasks on the Golem Network requires GLM tokens. When you use `testnet` you use test GLM.
Open another terminal and run the following command:

```bash
yagna payment fund
```

It will top up your account with test GLM tokens. These tokens can only be used on the testnet.

### A few additional useful steps and yagna commands

The steps below are not part of the installation process, however they will be useful at later stages:

#### Creating a unique app-key

The app-key purpose is to allow your requestor script to securely access and interact with the Yagna API
Open a terminal (command line window) and create the app-key named `requestor`:

```bash
yagna app-key create requestor
```

After running this command, make sure to copy its output. This output is your app-key, which you will need to use for setting up the `YAGNA_APPKEY` environment variable.

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
export YAGNA_APPKEY=<32-char>
```

{% /tab %}
{% tab label="Windows" %}

```shell
set YAGNA_APPKEY=<32-char>
```

{% /tab %}
{% /tabs %}

Note: If you need to find your key value again at any time, you can retrieve it using the following command:

```bash
yagna app-key list
```

and locate the desired value in the 'key' column for copying.

#### Getting the address of your wallet

To find out where to transfer funds for your Yagna wallet, you can easily obtain the address of your wallet with this command:

```bash
yagna payment accounts
```

This command is not only used to find your wallet address, but it also serves as the unique identifier of your node within the network.

#### Verifying Your Wallet's Balance

```bash
yagna payment status --network=goerli --driver=erc20
```

#### Backing up your Golem wallet

To create a backup of your Golem wallet, export the keystore with:

```bash
yagna id export --file-path=./key.json
```

This will generate a file named `key.json` in the directory where the command was run. This file contains the private key of your Golem wallet.

{% alert level="warning" %}
Please store the key in a secure location and not share it with anyone as it gives full control over your Golem wallet and funds.
{% /alert %}

### Running a Quickstart

Create a new Node.js project and install the Golem SDK by entering the following commands in your terminal:

```bash
npm init @golem-sdk/golem-app@latest my-golem-app
```

Make sure you have created an app-key and exported its value as [`YAGNA_APPKEY`](http://localhost:3000/docs/degen#creating-a-unique-app-key).

In `src` folder you will find a reaquestor script. This script sets up a task to execute node -v on the Golem Network and displays the result in your terminal.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-cli/master/data/project-templates/ts-node/src/index.ts" language="typescript" %}

{% /codefromgithub %}

To execute the script, run:

```bash
npm start
```

You can find an explanation of the structure of the typical requestor script [here](/docs/creators/javascript/tutorials/quickstart-explained).

The standard quickstart example has been altered with the following modifications:

- payment: {
  network: 'goerli',
  }, indicates that we would like to run the task on the `testnet`.

- it also utilizes a unique app-key stored in the `YAGNA_APPKEY` variable.

{% alert level="info" %}

Please note that the default examples provided in the Golem Documentation are set up to use an automatically configured APP-KEY and are also intended to run on the `testnet`. You can adapt these examples to run on the `mainnet` by changing value of the `payment.network` option to `polygon`.

{% /alert %}

## Golem JS SDK:

### Components of the JS SDK

The JS SDK consists of the following components:

**@golem-sdk/golem-js** - a JavaScript API for developers allowing them to connect to their Golem nodes and manage their distributed, computational loads through Golem Network.

[GitHub Repo](https://github.com/golemfactory/golem-js)
[Documentation](https://docs.golem.network/docs/creators/javascript)

**@golem-sdk/cli** - a companion tool for the Golem SDK. It facilitates a fast start with Golem Network by creating a new template for new applications, assisting with manifest creation for outbound networking, and lets you interactively test your custom image in the fastest way possible all without coding.

[GitHub Repo](https://github.com/golemfactory/golem-sdk-cli)
[Documentation](https://docs.golem.network/docs/creators/javascript/guides/golem-sdk-cli)

**@golem-sdk/react** - a set of React hooks for working with the Golem Network.

[GitHub Repo](https://github.com/golemfactory/golem-sdk-react)
[Documentation](https://docs.golem.network/docs/creators/javascript/guides/golem-sdk-cli)

### JS API documentation including examples and API Reference:

[Documentation](https://docs.golem.network/docs/creators/javascript)

[Examples](https://docs.golem.network/docs/creators/javascript/examples)

[API Reference](https://docs.golem.network/docs/golem-js/reference/overview)

### JS SDK example projects

**tesseract-ocr-golem** - a golem-js based library for running Tesseract OCR jobs on the Golem Network.

[GitHub Repo](https://github.com/golemfactory/tesseract-ocr-golem)

**react-image-classifier** - a reference implementation of a React app using Golem underneath

[GitHub Repo](https://github.com/golemfactory/react-image-classifier)

**music-on-golem** - a reference implementation of a next.js app that uses Golem to generate music. The project contains everything you'd find in a typical full-stack application, including a database, design system, authentication, and more.

[GitHub Repo](https://github.com/golemfactory/music-on-golem)

## Golem tools

**Yagna** - the foundational service that allows users to connect with and interact with the Golem Network.

**Gvmkit-build** - a tool designed to create custom images for virtual machines on provider nodes within the Golem Network. It specifically converts Dockerfiles into Golem-compatible VM images, known as GVMI.

You find a list of available instructions for Golem tools [here](https://docs.golem.network/docs/creators/javascript/examples/tools).

**Golem Registry** - a repository of already built images that can be utilized by Golem Network users [is here](https://registry.golem.network/explore).

---
title: Golem Network manual for Degen Hackathon - List of Content
hide:
  - navigation
description: Materials for hackathon participants
type: noindex
---

# Golem Network manual for DeGen Hackathon participants.

{% alert level="info" %}
This section contains an extract from the Golem Network documentation for Degen Hackathon participants.

Should you encounter any problems, please reach out to us via our [Degen Discord channel](https://chat.golem.network/) or consult the Golem representative present on-site during the event.
{% /alert %}

## Intro to Golem Network and JS API.

**Golem Network** is a P2P network that consists of many nodes. Each node is a system with a `Yagna` service running on it. The nodes that offer their resources to others are called **providers**. The nodes that rents resources are called **requestors**.

**Yagna** is a service that enables the user to interact with the network. In practice, the user creates a **requestor script** utilizing one of the available Golem SDK's. The script is used to define what resources are needed, and what should be run on the provider's node and to orchestrate all activities.

For the resources consumed on the Golem Network, you pay in **GLM**. GLM is an ERC-20 utility token. When you run Yagna for the first time on your computer, it will create a wallet for you.

Degen hackathon participants do not need to fund their activities on the Golem Network during the event. They can apply for funds using the following process:

1. Validate eligibility.
2. Create a metamask wallet for your team.
3. Apply for funds from the Golem factory using this [link]()
4. Split the funds to Yagna wallets used by team members.

## Getting started:

### Installing Yagna

{% tabs %}
{% tab label="Linux/Mac" %}

On Linux/ MacOS, you can install it using our installation script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}
{% tab label="Windows" %}

For Windows, follow these steps for manual installation:

Visit the [latest release page](https://github.com/golemfactory/yagna/releases) on GitHub and download the package named **golem-requestor** for Windows.
Extract the downloaded archive to retrieve yagna.exe and gftp.exe.
Copy these files to `C:\Windows\System32` to complete the installation.
Note: Windows installation is manual as there is no package manager integration.
{% /tab %}
{% tab label="Unix Manual installation" %}

If you prefer manual installation on Unix-like systems:

Download the [golem-requestor](https://github.com/golemfactory/yagna/releases) package suitable for your platform from the latest releases on GitHub.
Unpack the yagna and gftp binaries and place them in your PATH, for example, in `/usr/local/bin`, or alternatively add the directory containing these binaries to your `PATH`.
{% /tab %}
{% /tabs %}

### Start the Yagna service

To start the `yagna` service, open a terminal and type:

```bash
yagna service run
```

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
yagna id show
```

This command is not only used to find your wallet address, but it also serves as the unique identifier of your node within the network.

#### Verifying your wallet's balance

```bash
yagna payment status --network=polygon --driver=erc20
```

#### Backing Up Your Golem Wallet

To create a backup of your Golem wallet, export the keystore with:

```bash
yagna id export --file-path=./key.json
```

This will generate a file named `key.json` in the directory where the command was run. This file contains the private key of your Golem wallet.

#### Flushing your payments to providers

[Philip noticed that development work will result in potential requestor termination before payments are accepted, causing annoyance amongst providers. Maybe we can:

- provide intructions how to accept outstanding payments
- advise participants to thank the community to support their hackathon efforts and flush the payments at the end of the event (possible with a script that would do it automatically)
  ]

### Running a Quickstart

Create a new Node.js project and install the Golem SDK by entering the following commands in your terminal:

```bash
mkdir my_project
cd my_project
npm init
npm install @golem-sdk/golem-js
```

Next, create a file named requestor.mjs and paste the following content into it. This script sets up a task to execute node -v on the Golem Network and displays the result in your terminal.

```js
import {
  TaskExecutor,
  ProposalFilters,
  MarketHelpers,
} from '@golem-sdk/golem-js'

// Prepare the price filter, prices are in GLM
const acceptablePrice = ProposalFilters.limitPriceFilter({
  start: 1,
  cpuPerSec: 1 / 3600,
  envPerSec: 1 / 3600,
})

// Collect the whitelist
const verifiedProviders = await MarketHelpers.getHealthyProvidersWhiteList()

// Prepare the whitelist filter
const whiteList = ProposalFilters.whiteListProposalIdsFilter(verifiedProviders)

;(async function main() {
  const executor = await TaskExecutor.create({
    // The image you'd like to run on the provider(s)
    package: 'golem/node:latest',

    // How much you wish to spend
    budget: 0.5,
    proposalFilter: async (proposal) =>
      (await acceptablePrice(proposal)) && (await whiteList(proposal)),

    // Which network you want to spend GLM on
    payment: {
      network: 'polygon',
    },
  })

  try {
    const result = await executor.run(
      async (ctx) => (await ctx.run('node -v')).stdout
    )
    console.log('Task result:', result)
  } catch (err) {
    console.error('An error occurred:', err)
  } finally {
    await executor.shutdown()
  }
})()
```

To execute the script, run:

```bash
node requestor.mjs
```

You can find an explanation of the structure of the above requestor script [here](/docs/creators/javascript/tutorials/quickstart-explained).

The standard quickstart example has been altered with the following modifications:

- acceptablePrice filter sets the upper price limit for providers.
- The verifiedProviders filter is specifically designed to connect with the most trustworthy and reliable providers in the network. This feature is particularly beneficial during events like hackathons, where it's essential to focus on coding without unnecessary interruptions. By selecting only the most reliable providers, you significantly reduce the likelihood of encountering network-related issues or disruptions that could arise from less dependable providers, thus streamlining your development and troubleshooting process.
- payment: { network: 'polygon' } indicates that we would like to run the task on the `mainnet`.

{% alert level="info" %}

Please note that the default examples provided in the Golem Documentation are set up to use an automatically configured APP-KEY and are intended to run on the testnet. However, you can adapt these examples to run on the mainnet by implementing the modifications outlined above.

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

## Golem tools

**Yagna** - the foundational service that allows users to connect with and interact with the Golem Network.

**Gvmkit-build** - a tool designed to create custom images for virtual machines on provider nodes within the Golem Network. It specifically converts Dockerfiles into Golem-compatible VM images, known as GVMI.

You find a list of available instructions for Golem tools [here](https://docs.golem.network/docs/creators/javascript/examples/tools).

**Golem Registry** - a repository of already built images that can be utilized by Golem Network users [is here](https://registry.golem.network/explore).

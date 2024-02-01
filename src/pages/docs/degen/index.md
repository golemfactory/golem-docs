---
title: Golem Network Manual for Degen Hackathon - List of Content
hide:
  - navigation
description: Materials for hackathon participants
type: noindex
---

# Golem Network Manual for DeGen Hackhaton participants.

{% alert level="warning" %}
This section contains an extract from Golem Network documentation for Degen Hackathon participants.

Should you encounter any problems, please reach out to us via our [Degen Discord channel](https://chat.golem.network/) or consult the Golem representative present on-site during the event.
{% /alert %}

## Intro to Golem Network and JS API.

**Golem Network** is a P2P network that consists of many nodes. Each node is a system with a `Yagna` service running on it. The nodes that offer their resources to others are called **providers**. The nodes that hire resources are called **requestors**.

**Yagna** is a service that enables the user to interact with the network. In practice, the user creates a `requestor script` utilizing one of the Golem SDKs. The script is used to define what resources are needed, and what should be run on the provider's node and to orchestrate all activities.

For the resources consumed on the Golem Network, you pay in **GLMs**. GLM is an ERC-20 utility token. When you run Yagna for the first time on your computer, it will create a wallet for you.

Degen hackathon participants do not need to fund their activities on the Golem Network during the event. They can apply for funds using the following process:

1. Validate eligibility.
2. Create a metamask wallet for your team.
3. Apply for funds from the Golme factory using this [link]()
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

### Start the Yagna service

To start the `yagna` service, open a terminal and type:

```bash
yagna service run
```

### A few additional useful steps and yagna commands

The steps below are not part of installation process, however they will be useful at later stages:

#### Creation of unique api-key

The api-key will let your requestor script use the Yagna API.
Open a terminal (command line window) and create the app-key named `requestor`:

```bash
shell yagna app-key create requestor
```

Copy the value output of this command and use it to set up YAGNA_APPKEY variable.

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
export YAGNA_APPKEY==<32-char>
```

{% /tab %}
{% tab label="Windows" %}

```shell
set YAGNA_APPKEY==<32-char>
```

{% /tab %}
{% /tabs %}

Note: you can check you key value any time by using:

```bash
yagna app-key list
```

and copy the value listed in the key column.

#### Getting the address of your address wallet

This may be useful to know where to transfer funds to supply your Yagna wallet:

```bash
yagna id show
```

#### Checking the status of your account

```bash
yagna payment status --network=polygon --driver=erc20
```

#### Securing the Yagna Wallet

To create a backup of your Golem wallet, export the keystore with:

```bash
yagna id export --file-path=./key.json
```

The resultant key.json file in the directory you ran the command from will contain the private key for your Golem wallet.

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

Create a file named `requestor.mjs` and copy the following content into it. The code defines a task that runs the command `node -v` on the Golem Network and prints the result to your terminal.

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
    // What do you want to run
    package: 'golem/node:latest',

    // How much you wish to spend
    budget: 0.5,
    proposalFilter: async (proposal) =>
      (await acceptablePrice(proposal)) && (await whiteList(proposal)),

    // Where you want to spend
    payment: {
      network: 'polygon',
      //network: 'holesky', - to be removed
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

Run the command:

```bash
node requestor.mjs
```

You can find an explanation of the structure of the above requestor script [here](/docs/creators/javascript/tutorials/quickstart-explained).

The standard quickstart example has been modified by the following elements:

The `acceptablePrice` filter is defined to set the upper limit for the provider prices.

The `verifiedProviders` filter is used to engage only the most reliable providers. That can be useful during hackathon, as it lets you minimize the effort of troubleshooting your code for potential issues caused by events on the network caused by less reliable providers.

`payment: { network: 'polygon', }` - informs Yagna that you want to run your tasks on the `mainnet``.

{% alert level="info" %}

The standard examples on the Golem Documentation portal are designed to use autoconfigured APP-KEY and to run on the test network. All these axamples can be modified according to changes specified above to run on the mainnet.

{% /alert %}

## Golem JS SDK:

### Components of JS SDK

JS SDK consists of the following components:

**@golem-sdk/golem-js** - a JavaScript API for developers allowing them to connect to their Golem nodes and manage their distributed, computational loads through Golem Network.

[GitHub Repo](https://github.com/golemfactory/golem-js) [Documentation](https://docs.golem.network/docs/creators/javascript)

**@golem-sdk/cli** - a companion tool for the Golem SDK. It facilitates a fast start with Golem Network by creating a new template for a new application, assisting with manifest creation, and letting you interactively test your custom image.

[GitHub Repo](https://github.com/golemfactory/golem-sdk-cli) [Documentation](https://docs.golem.network/docs/creators/javascript/guides/golem-sdk-cli)

**@golem-sdk/react** - a set of React hooks for working with the Golem Network.

[GitHub Repo](https://github.com/golemfactory/golem-sdk-react) [Documentation](https://docs.golem.network/docs/creators/javascript/guides/golem-sdk-cli)

### JS API documentation including examples and API Reference:

[Documentation](https://docs.golem.network/docs/creators/javascript)

[Examples](https://docs.golem.network/docs/creators/javascript/examples)

[API Reference](https://docs.golem.network/docs/golem-js/reference/overview)

### JS SDK example projects

**tesseract-ocr-golem** - a golem-js based library allowing running Tesseract OCR jobs on top of Golem Network.

[GitHub Repo](https://github.com/golemfactory/tesseract-ocr-golem)

**react-image-classifier** - a reference implementation of a React app using Golem underneath

[GitHub Repo](https://github.com/golemfactory/react-image-classifier)

## Golem tools:

**Yagna** - this is a core service that enables the user to connect and interact with the network.

**Gvmkit-build** - a tool that allows you to create custom images (used to build a vm on the provider's node).

You find a list of available instructions for Golem tools [here](https://docs.golem.network/docs/creators/javascript/examples/tools).

**Golem Registry** - a repository of already built images that can be utilized by Golem Network users [is here](https://registry.golem.network/explore).

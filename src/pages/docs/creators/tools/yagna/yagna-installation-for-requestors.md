---
title: Guide to Installing Yagna for Golem Network Interaction
pageTitle: Install Yagna - Connect with the Golem Network - Requestor Setup Instructions
description: Step-by-step instructions for installing Yagna to enable applications to interact with the Golem Network, tailored for OS X, Ubuntu, and Windows users.
type: Instructions
---

# Yagna installation for requestors

## Introduction

In this article, we'll show you how to install and configure Yagna in case you want to enable your applications to connect to the network.

## Installing and running Yagna

Yagna is a service that will let you communicate with the Golem Network and perform operations on it. Let's install it.

#### Install Yagna

{% tabs %}
{% tab label="Linux/Mac" %}

On Linux/ MacOS you can install it using our helper script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.

{% /tab %}
{% tab label="Windows Manual installation" %}

There's no easy installer for Windows, thus you must install it manually yourself using the instructions below.

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Unzip the archive to extract the two files: `yagna.exe` and `gftp.exe`.
3. Copy those files to `C:\Windows\System32`.

Note: the link will lead you to the latest stable release, you can go to: [https://github.com/golemfactory/yagna/releases](https://github.com/golemfactory/yagna/releases) and select another version if you want to explore the preview features.

{% /tab %}
{% tab label="Unix Manual installation" %}

Alternatively, if you can't install it easily, you can do it manually in the following way:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Unpack `yagna` and `gftp` binaries and put them somewhere in your PATH (e.g. copy them to /usr/local/bin on Unix-like systems) or add the directory where you placed the binaries into your PATH.

Note: the link will lead you to the latest stable release, you can go to: [https://github.com/golemfactory/yagna/releases](https://github.com/golemfactory/yagna/releases) and select another version if you want to explore the preview features.

{% /tab %}
{% /tabs %}

{% alert level="info" %}

    If you have encountered problems, contact us on [Discord channel](https://chat.golem.network/).

{% /alert  %}

#### Start the service

Open a terminal (command line window) and define the app-key that will allow our script to use the Yagna API:

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
export YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% tab label="Windows" %}

```bash
set YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% /tabs %}

{% alert level="warning" %}
The instructions above allow you to set a temporary app-key that will disappear after the Yagna service restart. That is good for experiments and for running examples and tutorials. For production deployment, it is recommended to use a unique app-key generated using `yagna app-key create <key-name>` command. See [Yagna mostly used commands](/docs/creators/tools/yagna/yagna-mostly-used-commands) for details.

{% /alert %}

Then start the service:

```bash
yagna service run
```

#### Get some funds

Requesting tasks on the Golem Network requires some funds - GLM tokens - on the network.
While running on a test network, you can use freely available testnet tokens.

Open another terminal and run the following command to complete the configuration:

```bash
yagna payment fund
```

{% docnavigation title="Next steps" %}

- You can learn more about the Golem architecture, production and test networks, and GLM tokens [here](/docs/golem/overview):

{% /docnavigation %}

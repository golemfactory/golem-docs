---
description: Your Golem wallet and Yagna setup for Mainnet payments.
title: Yagna management for requestors
---

# Yagna management for requestors

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows

{% /alert %}

## Prerequisites

Yagna service is installed and running.


## Introduction

In this article, we present commands related to the daily management of your Yagna.

- Checking the wallet address
- Enabling mainnet accounts
- Checking the status of the wallet
- Getting test funds
- Generating the unique app-keys


## Your Golem wallet address

Golem's wallet is automatically initialized for you the first time you start your `yagna` service and thus, an address associated with it is also generated automatically.

To have any kind of funds transferred to your Golem's wallet, you'll need its address. You may obtain it using the `id` command:

```bash
yagna id show
```

The value described as `nodeId` in the output is the Ethereum address of your Golem node and it's also the address of its wallet. Note it down so you can use it to supply your node with funds.


## Enable the mainnet account

In the current version of the requestor's set-up, the service is configured to use the Goerli testnet by default. Also, all accounts are initialized in the receiver mode by default so you need to enable them as a sender (that's the reason we're adding the `--sender` flag below).

To enable the service to use the mainnet, you'll need to instruct it to use a command appropriate to your desired mainnet payment platform.

{% tabs %}

{% tab label="Polygon" %}
```bash
yagna payment init --sender --network=polygon --driver=erc20
```
{% /tab %}
{% tab label="Ethereum mainnet" %}
```bash
yagna payment init --sender --network=mainnet --driver=erc20
```
{% /tab %}
{% /tabs %}

{% alert level="warning" %}

Again, unless you have good reasons not to, we recommend using Polygon for the lowest transaction fees.
{% /alert %}


{% alert level="info" %}

The initialization must be performed after every restart of the `yagna` service.
{% /alert %}

## Checking the status of your accounts

Depending on whether you're mainly running a provider node or a requestor one, your default network (blockchain) may be different.

Because of that, when you run `yagna payment status` to verify the state of your payment account and the amount of GLM tokens you have at your disposal, you may need to add the specific `network` and `driver` parameters to point to the network/driver combination that you're interested in.

In the context of running Golem on mainnet, here are the commands for each of the supported mainnet platforms:

{% tabs %}

{% tab label="Polygon" %}
```bash
yagna payment status --network=polygon --driver=erc20
```
{% /tab %}
{% tab label="Ethereum mainnet" %}
```bash
yagna payment status --network=mainnet --driver=erc20
```
{% /tab %}
{% /tabs %}


## Sending test funds to your account

You can top up your wallet with test GLMs by running:

```bach
yagna payment fund
```

Golem will transfer test tokens from our custom faucet (a service that transfers test tokens to an address that asks for them).
Note, you also need to enable your accounts' sender mode, which is done using `yagna payment init`. 

## Generating the app key

With the service running, enter the service's directory using another shell and generate the yagna app key that will be used by your requestor agent to access yagna's REST API.
Note that the `requestor` in the command is a tag of the key.

```bash
yagna app-key create requestor
```

This should produce a 32-character-long hexadecimal app key that you need to note down as it will be needed to run the requestor agent.

{% alert level="warning" %}

If you intend to expose your yagna service's REST API port to the outside world (which we strongly discourage), you should absolutely ensure that you keep this key secret, as anyone with access to the key and the port will have complete control over your service.

{% /alert %}

In case you lose your app key, you can retrieve it with:

```bash
yagna app-key list
```

the value in the key column is the key you need.
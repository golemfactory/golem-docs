---
description: Master the transition from Golem testnet to mainnet with our in-depth guide. Learn all about payment platforms, Ethereum vs Layer-2, wallet security and funds acquisition while enhancing your Mainnet Golem experience.
title: Using Golem on the mainnet
type: Guide
---

# Using Golem on Mainnet

## Introduction

{% alert level="warning" %}

This section is aimed mainly at **requestors** wishing to switch from running simple test tasks on our development subnet (testnet) to launching production payloads utilizing the vast number of providers on the public subnet.

{% /alert %}

If you are a requestor:

- You need to configure your requestor agent to negotiate Polygon or Ethereum as a payment platform. You can find a JS example [here](/docs/creators/javascript/examples/switching-to-mainnet).

Okay, so while technically we now know how to hand out tasks to providers on paid networks, in the context of running **Golem on the mainnet**, a few important questions remain largely unanswered:

- How to **choose a payment platform** - Ethereum vs Layer-2
- How to **monitor the status of your wallet**
- How to **secure access to the funds** in your Golem wallet if things go haywire?
- How do you **get funds to your requestor** so you can use them to pay for the tasks?
- How do you **get funds out of a Golem node** if you don't need them there anymore?

## Ethereum vs Layer-2

The most important decision you need to make when it comes to Golem payments (both between Requestors <-> Providers, as well as getting funds in and out of Golem Network) is whether to use Ethereum or its Layer-2 scaling sidechain: Polygon.

While direct, on-chain transactions using ERC-20-based tokens have long become the daily bread for the Ethereum mainnet and constitute a significant part of more than a million transactions passing through the chain each day, current ETH's price and the average gas fees make it extremely hard to use as a mean of exchange. This is because Golem payments will usually be orders of magnitude smaller than the typical transaction fee on Ethereum.

Of course, if you're willing to accept that disproportion, you may continue to use the Ethereum mainnet payments but for the majority of Golem users, **Polygon** will be the preferred platform both when paying for tasks and receiving payments for their execution.

For more information regarding Layer 2 and Polygon, please refer to our introduction to [Layer 2 payments](/docs/golem/payments/layer-2-payments):

## How to monitor the status of your wallet

There are a number of `yagna` commands that will enable you to monitor the status of your wallet. They will let you verify the address of the wallet, check the status, and enable payments from it. Their usage is illustrated [here](/docs/creators/tools/yagna/managing-golem-wallet)

## Securing your Golem wallet

Golem provides a procedure to backup your wallet in a secure way, as well as to restore it to the new Yagna installation.

Please follow the instructions provided in [Golem wallet backup](/docs/creators/tools/yagna/golem-wallet-backup) and [Restore Golem wallet](/docs/creators/tools/yagna/restoring-golem-wallet) tutorials.

## Getting funds to your requestor

Golem Network payments are done on Blockchain with GLM tokens. Consequently, to enable such payments you will need:

- GLM tokens to pay the Provider
- Native token of the chosen blockchain to pay for the gas a.k.a. transaction fees

Ethereum's native token is ETH, whereas Polygon Network has MATIC.

### On test network

You can top up your wallet with the following command:

```bash
yagna payment fund
```

### On paid network

{% alert level="info" %}

It may be useful to export your Golem wallet address to an external application that enables transactions on the internet. You can find instructions on how to back up and restore your wallet and export wallet address [here](/docs/creators/tools/yagna/golem-wallet-backup).

{% /alert %}

#### Acquiring MATIC directly on Polygon and converting some of them to GLMs

1. Find an exchange platform that enables you to buy MATIC for FIAT i.e. [Ramp](https://ramp.network/)
2. Buy MATICs on Polygon
3. Swap some of MATICs to GLMs on [quickswap](https://quickswap.exchange) or [uniswap](https://uniswap.org/)

#### Acquiring MATIC or GLM tokens on Polygon from Ethereum Mainnet

**Go to** [**Polygon Website**](https://wallet.polygon.technology)

1. Select **Proof of Stake** and then **Native Bridge** (in the Wallet Features section)
2. Connect your wallet
3. Choose the token you want to get and follow the instructions

### Swapping GLM tokens for MATIC on Polygon

**Go to** [**Polygon Website**](https://wallet.polygon.technology)

1. Select **Proof of Stake** and then **Swap** (in the Wallet Features section)
2. Connect your wallet
3. Choose the token you want to get and follow the instructions

## Getting your funds out of the Golem node

You can consider one of the following options:

- swapping GLM tokens to MATIC and selling them directly on a trading platform or
- bridging them to Ethereum Mainnet

{% alert level="info" %}
It is easier to access your ERC-20 tokens by exporting your wallet (in Ethereum wallet v3 format) and then importing it into MetaMask.
{% /alert %}

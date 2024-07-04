---
title: Golem Provider Maintenance Guide
description: A practical guide on managing and updating your Golem Network provider, including wallet monitoring and node updates.

type: Guide
---

# Provider maintenance

## Introduction

Managing your provider efficiently is vital for optimal performance and profitability in the Golem Network. This guide covers essential management tasks such as:

- Checking your wallet address
- Monitoring your wallet's status
- Updating to the latest provider version

## Getting a general overview

Providers should familiarize themselves with `golemsp status`, the primary command that displays essential node information. This command outputs details such as the number of tasks computed, your earnings, and your current wallet address.

```bash
➜  ~ golemsp status
┌──────────────────────────────┬──────────────────────────────────────────────┬───────────────────────────┐
│  Status                      │  Wallet                                      │  Tasks                    │
│                              │  0x9f5b6832e221585266836271a5023b6745aa9409  │                           │
│  Service    is running       │                                              │  last 1h processed     0  │
│  Version    0.13.1-rc3       │  network               mainnet               │  last 1h in progress   0  │
│  Commit     a8c4ccb0         │  amount (total)        0 GLM                 │  total processed       0  │
│  Date       2023-10-11       │      (on-chain)        0 GLM                 │  (including failures)     │
│  Build      331              │      (polygon)         0 GLM                 │                           │
│                              │      (zksync)          0 GLM                 │                           │
│  Node Name  future-argument  │                                              │                           │
│  Subnet     public           │  pending               0 GLM (0)             │                           │
│  VM         valid            │  issued                0 GLM (0)             │                           │
└──────────────────────────────┴──────────────────────────────────────────────┴───────────────────────────┘
```

## Updating Your Provider to the Latest Version

With the ongoing development of the Golem Network, new and improved versions of the Golem Provider are frequently released. It is advisable to update your provider to the newest version to ensure enhanced performance and access to the latest features. To initiate an update, you should first halt the current operations of your provider. This can be done by pressing `CTRL + C` in the command-line interface where your provider is active, or by executing the `golemsp stop` command.

After successfully stopping the provider, proceed with the update by executing the installation command below, which will automatically fetch and apply the latest version of the software.

```bash
curl -sSf https://join.golem.network/as-provider | bash -
```

{% docnavigation title="See also" %}

- [Sending GLM from the Ethereum Mainnet to Polygon and back.](/docs/golem/payments/golem-token-conversion)

{% /docnavigation %}

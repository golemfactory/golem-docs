---
title: Configuring the basics of your Golem Provider Node
description: Step-by-step instructions for configuring settings on a Golem provider node, including resource allocation and pricing strategies.
pageTitle: How to Configure Golem Provider Node Settings - A Comprehensive Guide
type: Instructions
---

# Configuring Your Provider

This article outlines the process of configuring the settings for your Golem provider node. Whether you're setting up a new node or modifying an existing one, the following instructions will help you configure various aspects of your node, such as resource allocation and pricing

## Showing Node Settings

To see the settings of your provider node, use the `golemsp settings show` command in the terminal:

```bash
➜  ~ golemsp settings show
node name: "future-argument"
Shared resources:
	cores:	3
	memory:	42.87843778729439 GiB
	disk:	294.8792449951172 GiB


Pricing for preset "wasmtime":

	0.025000000000000001 GLM per cpu hour
	0.005000000000000000 GLM per hour
	0.000000000000000000 GLM for start
```

## Accessing Node Settings

To begin configuring your node, use the `golemsp settings` command in your terminal:

```bash
$ golemsp settings
golemsp-settings 0.3.0
Manage settings

USAGE:
    golemsp settings <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    set     Change settings
    show    Show current settings
    help    Prints this message or the help of the given subcommand(s)

```

## Adjusting Settings

You can adjust your provider node's settings using the `set` subcommand:

```bash
golemsp settings set [OPTIONS]
```

### Configurable Parameters

The table below lists the parameters you can configure:

| Value(s)          | Value description                                                                                                                                                                                                      |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --node-name       | The name of your provider                                                                                                                                                                                              |
| --cores           | The number of threads allocated to the provider service                                                                                                                                                                |
| --memory          | The amount of RAM (in bytes) allocated to the provider service (note: prefixes such as GiB are OK)                                                                                                                     |
| --disk            | The amount of HDD/SDD (in bytes) allocated to the provider service (note: prefixes such as GiB are OK)                                                                                                                 |
| --starting-fee    | A decimal number of how much GLM you want to start a task/service                                                                                                                                                      |
| --env-per-hour    | A decimal number of how much GLM you want for misc. activities such as downloading a Golem image or finalizing a task                                                                                                  |
| --cpu-per-hour    | A decimal number of how much GLM you want for every one allocated thread while working (note: this value is multiplied automatically afterwards, 256-thread CPU's can reasonably have the same value as 2-thread CPUs) |
| --account         | Yagna account (Ethereum address) for payments                                                                                                                                                                          |
| --payment-network | The network where you want to be paid in, e.g., mainnet or testnet                                                                                                                                                     |

### Important notice

Please remember to restart your node after making changes to settings for them to take effect.

### Resource Allocation

To allocate threads (cores), memory, and disk space:

```bash
golemsp settings set --cores <number> --memory <amount> --disk <amount>
```

### Pricing Strategy

To configure the pricing of your provider:

```bash
golemsp settings set --starting-fee <amount> --env-per-hour <amount> --cpu-per-hour <amount>
```

### Changing Ethereum Wallet

To update your payment account address:

```bash
golemsp settings set --account <address>
```

### Running on the Testnet

To operate your provider node on the testnet:

```bash
golemsp run --payment-network testnet

```

---
description: Step-by-step configuration process for Providers on Golem Network
title: Comprehensive configuration guide for Golem Provider Nodes
type: Instructions
---

# Configuring Your Provider

This article outlines the process of configuring the settings for your Golem provider node. Whether you're setting up a new node or modifying an existing one, the following instructions will help you configure various aspects of your node, such as resource allocation and pricing

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

# Managing Outbound Traffic Rules for Golem Provider Nodes

As a Golem provider, it’s essential to manage the traffic that flows through your node. This section guides you through listing, modifying, and removing outbound traffic rules, ensuring your node communicates only with approved domains.


## Managing your keystore

The provider has an embedded certificate keystore which is used to validate any additional permissions for the payload launched by the requestors.

By default, it contains only Golem Factory's public certificate which allows executing examples in tutorials and apps from trusted by Golem creators.

Run `ya-provider keystore --help` to see possible subcommands

## Listing Outbound Rules

Your node comes pre-configured to permit outbound traffic to domains whitelisted by Golem Factory, viewable [here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist). To view the current outbound rules:

```bash
➜  ~ ya-provider whitelist list
┌────────────┬───────────────────────────────────┬──────────┐
│  ID        │  Pattern                          │  Type    │
├────────────┼───────────────────────────────────┼──────────┤
│  76d0c6c5  │  hub.docker.com                   │  strict  │
│  7be32065  │  geth2.golem.network              │  strict  │
│  5bb2d274  │  api.zksync.io                    │  strict  │
│  2638d3ab  │  13.36.40.74                      │  strict  │
│  31fdb1f1  │  polygon-rpc.com                  │  strict  │
│  cee0d2fc  │  ^geth\.testnet\.golem\.network$  │  regex   │
│  86e63d78  │  mainnet.infura.io                │  strict  │
│  d0720712  │  3.122.207.83                     │  strict  │
│  aa099643  │  polygon-mainnet.infura.io        │  strict  │
│  a56c7b26  │  dl.dropboxusercontent.com        │  strict  │
│  0b505db7  │  docker.io                        │  strict  │
│  fe19499a  │  .*\.dev\.golem\.network$         │  regex   │
│  a579f319  │  registry.hub.docker.com          │  strict  │
│  6e36eceb  │  ^bor[0-9]*\.golem\.network$      │  regex   │
│  52c7327f  │  52.48.158.112                    │  strict  │
│  d82e1791  │  api.github.com                   │  strict  │
│  bf217630  │  arb1.arbitrum.io                 │  strict  │
│  99cd2175  │  github.com                       │  strict  │
│  44503f3f  │  crates.io                        │  strict  │
│  1025ca38  │  ^geth[0-9]*\.golem\.network$     │  regex   │
│  0c827bca  │  geth.golem.network               │  strict  │
│  056917f8  │  registry.golem.network           │  strict  │
│  1c08fad1  │  ipfs.io                          │  strict  │
└────────────┴───────────────────────────────────┴──────────┘
```

## Removing an Outbound Rule

To remove an outbound rule, you must reference the rule's `ID`:

```bash
➜  ~ ya-provider whitelist remove "76d0c6c5"
Removed patterns:
┌────────────┬──────────────────┬──────────┐
│  ID        │  Pattern         │  Type    │
├────────────┼──────────────────┼──────────┤
│  76d0c6c5  │  hub.docker.com  │  strict  │
└────────────┴──────────────────┴──────────┘
```

## Whitelisting a Strict Domain

Strict domain rules allow your node to communicate with specific domains. You can add a strict domain to your whitelist with the following command:

```bash
➜  ~ ya-provider whitelist add -p coinmarket.cap -t strict
Added patterns:
┌────────────┬──────────────────┬──────────┐
│  ID        │  Pattern         │  Type    │
├────────────┼──────────────────┼──────────┤
│  1e112a6b  │  coinmarket.cap  │  strict  │
└────────────┴──────────────────┴──────────┘
```

When you add a domain as `strict`, the node's outbound traffic is permitted exclusively to that exact domain, ensuring a precise control over the node's interactions.

## Adding Regex Domain Rules

Regex (regular expression) rules provide a flexible way of defining which domains your node can access. They are especially useful when you want to allow communication with a range of domains following a certain pattern. To add a regex rule to your whitelist, use the -t regex option:

```bash
ya-provider whitelist add -p '.*\.dev\.golem\.network$' -t regex
```

Using regex patterns can significantly enhance your node's operability by allowing a set of domains that share a common naming convention without adding each one individually. However, it requires careful consideration to avoid overly broad rules that could expose your node to unwanted traffic.

By employing strict and regex domain rules appropriately, you can ensure that your Golem provider node maintains an optimal balance between connectivity and security.

{% docnavigation title="See also" %}

- [Golem Provider Troubleshooting](/docs/troubleshooting/provider)


{% /docnavigation %}

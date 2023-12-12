---
title: Configuring Provider Outbound Network Settings on Golem
description: Key guide for Golem network providers to configure and manage outbound traffic settings, ensuring secure and efficient node communication.
type: Instructions
---

# Outbound Networking

As a Golem provider, it’s essential to manage the traffic that flows through your node. This section guides you through listing, modifying, and removing whitelisted domains, ensuring your node communicates only with approved domains.

## Managing the general outbound settings

By default a provider will automatically have outbound networking enabled, but only towards domains that's included in the [default whitelist](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist). It's a whitelist maintained by the Golem Factory which has strict requirements to ensure the safety of providers.

### Enabling outbound networking for everything

{% alert level="danger" %}
Enabling unrestricted access to everything on the internet can be considered dangerous! Enabling this setting pose the same risk as running an exit node on Tor. Please make sure you know what you're doing before enabling unrestricted access for everyone.
{% /alert %}
As a provider you have the option to enable all outbound traffic from your node, which might result in an increase of tasks received by your node. You can enable outbound traffic towards **anything** using:

```bash
ya-provider rule set outbound everyone --mode all
```

### Enabling outbound traffic for whitelisted domains

As a provider you have the option to only enable outbound networking for the whitelisted domains that you decide. This way of providing outbound traffic allows you to be in charge of the situation. You can enable outbound traffic for whitelisted domains only, using the command:

```bash
ya-provider rule set outbound everyone --mode whitelist
```

### Disabling all outbound traffic

As a provider you have the option to completely disable all outbound traffic from your provider. Please be aware that completely disabling this might result in your provider receiving less tasks.

To disable outbound completely, run the following command:

```bash
ya-provider rule set outbound everyone --mode none
```

## Managing your outbound whitelist

If you're using the whitelist mode for outbound networking, it's handy knowing how to manage the list of domains in it. Below you will find the commands to view, add and delete domains in it.

### Listing whitelisted domains

Your node comes pre-configured to permit outbound traffic to domains whitelisted by Golem Factory, viewable [here](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist). To view the current whitelist, run the command below:

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

### Whitelisting a specific Domain

Whitelisting a specific domain using the `strict` type allows your node to communicate with specific domain. You can add a strict domain to your whitelist with the following command:

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

### Whitelisting multiple domains using Regex

The Regex (regular expression) pattern provide a flexible way of defining which domains your node can access. They are especially useful when you want to allow communication with a range of domains following a certain pattern. To add a regex pattern to your whitelist, use the -t regex option:

```bash
ya-provider whitelist add -p '.*\.dev\.golem\.network$' -t regex
```

Using regex patterns can significantly enhance your node's operability by allowing a set of domains that share a common naming convention without adding each one individually. However, it requires careful consideration to avoid overly broad patterns that could expose your node to unwanted traffic.

By employing strict and regex domain patterns appropriately, you can ensure that your Golem provider node maintains an optimal balance between connectivity and security.

### Removing a whitelisted domain

To remove a whitelisted domain, you must reference the pattern's `ID`:

```bash
➜  ~ ya-provider whitelist remove "76d0c6c5"
Removed patterns:
┌────────────┬──────────────────┬──────────┐
│  ID        │  Pattern         │  Type    │
├────────────┼──────────────────┼──────────┤
│  76d0c6c5  │  hub.docker.com  │  strict  │
└────────────┴──────────────────┴──────────┘
```

## Managing your keystore

The provider has an embedded certificate keystore which is used to validate any additional permissions for the payload launched by the requestors.

By default, it contains only Golem Factory's public certificate which allows executing examples in tutorials and apps from trusted by Golem creators.

Run `ya-provider keystore --help` to see possible subcommands

{% docnavigation title="See also" %}

- [Golem Provider Troubleshooting](/docs/troubleshooting/provider)

{% /docnavigation %}

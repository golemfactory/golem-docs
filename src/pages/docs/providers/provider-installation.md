---
description: Yagna installation for providers
title: Yagna installation for providers
type: Instructions
---

# Yagna provider installation

{% alert level="info" %}
- The provider works on: Ubuntu 18.04 or 20.04
{% /alert %}

This article will show you how to set up and run a provider node on Golem to start earning GLM tokens.

## Installation

### Installation command

Open your terminal and type:

```bash
curl -sSf https://join.golem.network/as-provider | bash -
```

### Setting values

After installing all required components, you will be asked to set up your node, by providing configuration values. If you leave them empty, the default values (presented in brackets) will be applied. Press Enter for each entry to save it.


|||
|:------------------------|:---------------------------------------------------------------------|
|`Node name (default=generated-name)` |Type in the name of your new node. If you leave this space empty, a random auto-generated name will be used.|
|`Ethereum wallet address (default=internal wallet)`|Paste your own Ethereum address to which you have private keys stored. If you leave this space empty, an address will be created for you on your local system.|
|`price GLM per hour (default=0.1)`|Type in the value of renting your computer power as a provider. You can use the default price (0.1 GLM per hour) by leaving this field empty. This command shows up only when running GolemSP for the first time.|

### Modifying your PATH

You might be asked to modify your PATH afterward for future terminal sessions. Modifying your PATH is helpful to run the command in an easier way, without having to search for the executable file for every instance.

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Update your active shell(s) with: 
```bash
export PATH="$HOME/.local/bin:$PATH"
```

## Running the provider

To run the Golem provider on the main/production network, type the following command into the terminal:

```bash
golemsp run
```


## Verifying node status

To check your node's status and see if it is active and computing tasks from the network, open a new terminal window and type:

```bash
golemsp status
```

As an output, you will get the information about your node's current state as shown below. The following, more important values are given and correspond to:

|Value(s)                  |   Value  description  |
|:----------------------|:----------------------------------------|
|Service|Shows the running status of the provider|
|Wallet|The ERC-20 wallet address where you receive your GLM|
|Network|Which network you are on, e.g., mainnet or testnet|
|Amount|For each respective network, it shows how much GLM is owned|
|Tasks|Information of how much work your provider has done|

```bash
$ golemsp status
┌─────────────────────────┬──────────────────────────────────────────────┬─────────────────────────────┐
│  Status                 │  Wallet                                      │  Tasks                      │
│                         │  0x2a14f8ae0272bd4c38ed1b40c66e88ed719dab69  │                             │
│  Service    is running  │                                              │  last 1h processed     0    │
│  Version    0.12.2      │  network               mainnet               │  last 1h in progress   0    │
│  Commit     37060503    │  amount (total)        0 GLM                 │  total processed       509  │
│  Date       2023-06-06  │      (on-chain)        0 GLM                 │  (including failures)       │
│  Build      296         │      (polygon)         0 GLM                 │                             │
│                         │      (zksync)          0 GLM                 │                             │
│  Node Name  lato        │                                              │                             │
│  Subnet     public      │  pending               0 GLM (0)             │                             │
│  VM         valid       │  issued                0 GLM (0)             │                             │
└─────────────────────────┴──────────────────────────────────────────────┴─────────────────────────────┘
```

## Port forwarding

Yagna service is using the UDP protocol on port 11500 for communication. 
To help the Golem Network grow and become more resilient and stable it needs more nodes with public IP addresses.
Nodes with an IP address offer better network performance and are more attractive for Requestors. 
If you want to help, and at the same time improve communication of your node with the Golem Network, you need to manually open the port on your router and set up port forwarding. 

For router specific instructions on how to forward your ports go to:: [https://portforward.com/](https://portforward.com/). 

To check if your ports are forwarded correctly you can use [https://canyouseeme.org/](https://canyouseeme.org/). If port forwarding doesn't work, you may need to call your ISP to change settings on your router. 


{% docnavigation title="Next steps" %}

- [Provider basic configuration](/docs/providers/provider-basic-configuration)

- [Provider CLI Reference](/docs/providers/yagna-cli-reference)

{% /docnavigation %}


---
title: Yagna installation for providers
description: 
---

# Yagna provider installation

!!! info

    * The provider works on: Ubuntu 18.04 or 20.04

## Installation

### Installation command

Open your terminal and type:

```bash
curl -sSf https://join.golem.network/as-provider | bash -
```

### Setting values

After installing all required components you will be asked to set up your node. If you leave them empty the default values presented in brackets will be applied.

Node name (default=generated-name): - Type in the name of your new node and press Enter

Ethereum wallet address (default=internal wallet): - Paste your own Ethereum address to which you have private keys stored. If you leave this space empty, an address will be created for you on your local system.

price GLM per hour (default=0.1): - Type in the value of renting your computer power as a provider. You can use default price (0.1 GLM per hour) by leaving this field empty. This command shows up only when running GolemSP for the first time.

### Modifying your PATH

You might be asked to modify your PATH afterwards for future terminal sessions:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Update your active shell(s) with: 
```bash
export PATH="$HOME/.local/bin:$PATH"
```

## Running the provider

### Mainnet

To run the Golem provider on the mainnet, type the following in the terminal:

```bash
golemsp run
```

### Testnet

To run the Golem provider on the mainnet, type the following in the terminal:

```bash
golemsp run --payment-network testnet
```

!!! info

    Please keep in mind that golemsp run will remember the parameters used the last time so after you finish your tests, you may want to change them back to the public network:

    ```bash
    golemsp run --subnet public --payment-network mainnet
    ```

## Verifying node status

To check your node's status and see if it is active and actually computing tasks from the network, open a new terminal window and type:

```bash
golemsp status
```

As an output you will get the information about your node's current state as shown below:

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

!!! golem-icon "Next steps:"

    [Provider configuration in CLI](config.md){ .md-button .md-button--primary }
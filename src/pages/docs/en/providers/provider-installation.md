---
title: Earn GLM as a Golem Network Provider - Complete Setup Guide
description: Step-by-step guide to set up a Linux-based Golem provider. Learn installation, configuration, and running tips to earn GLM tokens efficiently.
type: Instructions
---

# Golem Provider installation guide

Welcome to the Golem Provider installation guide. This guide provides step-by-step instructions on how to become a provider in the Golem Network and earn GLM tokens.

## Getting Started

### Prerequisites

To follow this tutorial, you will need the following:

- A linux machine with the x86-64 architecture
- Nested virtualization enabled in your BIOS

### Install the provider

Launch your terminal and execute the following command to run the installer:

```bash
curl -sSf https://join.golem.network/as-provider | bash -
```

### Configuring your node

After installing all required components, you will be asked to set up your node, by providing configuration values. If you leave them empty, the default values (presented in brackets) will be applied. Press Enter for each entry to save it.

|                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Node name (default=generated-name)`                | Type in the name of your new node. If you leave this space empty, a random auto-generated name will be used.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Ethereum wallet address (default=internal wallet)` | Paste your own Ethereum address to which you have private keys stored. If you leave this space empty, an address will be created for you on your local system.                                                                                                                                                                                                                                                                                                                                                           |
| `price GLM per hour (default=0.1)`                  | When configuring your pricing, consider the current market conditions. The initial default rate is set at 0.1 GLM per hour, per thread, which might be high given the current market rates. To ensure your pricing is competitive, you can refer to the list of online providers and their earnings on the [Golem Network Stats page](https://stats.golem.network/network/providers/online). The table of providers is automatically sorted by earnings, which can help you gauge and set a more market-aligned pricing. |

### Modifying your PATH

Post-installation, you may need to update your system's PATH. This step ensures that you can run Golem commands directly from the terminal without having to specify the full path to the executable each time.

{% tabs %}

{% tab label="Bash" %}
For users utilizing the bash shell, you can modify your `.bashrc` file to update your PATH with the following command:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Then, refresh your shell environment with the new PATH using:

```bash
source ~/.bashrc
```

{% /tab %}

{% tab label="Zsh" %}
If you're using the Zsh shell, you'll want to update your `.zshrc` file instead:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
```

To apply the changes to your current session, source the `.zshrc` file:

```bash
source ~/.zshrc
```

{% /tab %}

{% /tabs %}

### Running the provider

To run the Golem provider on the mainnet, type the following command into the terminal:

```bash
golemsp run
```

### Verifying node status

To check your node's status and see if it is active and computing tasks from the network, open a new terminal window and type:

```bash
golemsp status
```

As an output, you will get the information about your node's current state as shown below. The following, more important values are given and correspond to:

| Value(s) | Value description                                           |
| :------- | :---------------------------------------------------------- |
| Service  | Shows the running status of the provider                    |
| Wallet   | The ERC-20 wallet address where you receive your GLM        |
| Network  | Which network you are on, e.g., mainnet or testnet          |
| Amount   | For each respective network, it shows how much GLM is owned |
| Tasks    | Information of how much work your provider has done         |

```bash
$ golemsp status
┌─────────────────────────┬──────────────────────────────────────────────┬─────────────────────────────┐
│  Status                 │  Wallet                                      │  Tasks                      │
│                         │  0x2a14f8ae0272bd4c38ed1b40c66e88ed719dab69  │                             │
│  Service    is running  │                                              │  last 1h processed     0    │
│  Version    0.15.0      │  network               mainnet               │  last 1h in progress   0    │
│  Commit     d2d88ad3    │  amount (total)        0 GLM                 │  total processed       509  │
│  Date       2024-04-03  │      (on-chain)        0 GLM                 │  (including failures)       │
│  Build      420         │      (polygon)         0 GLM                 │                             │
│                         │                                              │                             │
│  Node Name  lato        │  pending               0 GLM (0)             │                             │
│  Subnet     public      │  issued                0 GLM (0)             │                             │
│  VM         valid       │                                              │                             │
│                         │                                              │                             │
│  Driver     Ok          │                                              │                             │
└─────────────────────────┴──────────────────────────────────────────────┴─────────────────────────────┘
```

## How to keep the provider running when closing the terminal

Screen is a utility that lets you run commands or programs in the background of your terminal. It's like having a separate workspace that keeps going even if you close the terminal window. This is handy for keeping `golemsp run` active at all times.

**Why Screen?** Normally, if you close the terminal, any running commands stop. With Screen, your `golemsp run` command will keep on working in its own space, uninterrupted, no matter if you log out or lose connection.

### Install Screen

To install Screen on your system, use the package manager:

{% tabs %}
{% tab label="Debian/Ubuntu" %}

```bash
sudo apt-get install screen
```

{% /tab %}
{% tab label="Fedora" %}

```bash
sudo dnf install screen
```

{% /tab %}
{% tab label="CentOS/RHEL" %}

```bash
sudo yum install screen
```

{% /tab %}
{% /tabs %}

### Starting golemsp in Screen

1. Open your terminal.
2. Enter `screen -S provider` to begin a new named session `provider`.
3. Start the Golem provider:
   ```bash
   golemsp run
   ```
   Your Golem provider is now running within a Screen session.

### Detaching from Screen

To detach and leave `golemsp run` running in the background:

Press `Ctrl-A` followed by `D`.

### Attaching to Screen

To reattach to the session:

1. Open a terminal.
2. Type `screen -r provider` and press Enter.

### Stopping `golemsp run`

1. Reattach to your Screen session as above.
2. Stop `golemsp run` by pressing `Ctrl-C`.
3. Exit Screen by typing `exit` or pressing `Ctrl-D`.

## Port forwarding

The Yagna service utilizes UDP protocol on port 11500 to facilitate communication. While the Golem Network can relay data through nodes without direct port forwarding, configuring your node to have a public IP address significantly strengthens the network's resilience and stability. Nodes with a public IP can provide better performance and are generally more desirable to Requestors.

Although not mandatory, setting up port forwarding is highly encouraged as it contributes to a more robust network. To do this, you'll need to manually open UDP port 11500 on your router.

For detailed instructions tailored to your router model, visit [PortForward.com](https://portforward.com/)

To verify if port forwarding is correctly configured, check [CanYouSeeMe.org](https://canyouseeme.org/). Should you encounter any difficulties, contacting your Internet Service Provider (ISP) for assistance with your router's settings may be necessary.

{% docnavigation title="Next steps" %}

- [Configuring your provider](/docs/en/providers/configuration/general)

{% /docnavigation %}

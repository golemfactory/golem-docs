---
title: Earn GLM as a Golem Network Provider - Complete Setup Guide
description: Step-by-step guide to run a Golem provider in Docker. Learn installation, configuration, and running tips to earn GLM tokens efficiently.
type: Instructions
---

# Golem Provider installation guide

Welcome to the Golem Provider installation guide. This guide provides step-by-step instructions on how to become a provider in the Golem Network and earn GLM tokens.

The recommended way to run a provider is with Docker. A container keeps your provider running after you close the terminal, restarts it automatically when the machine reboots or the process crashes, and lets you update to a new release with a single command.

If you prefer to install the software directly on your system, see [installing directly on your system](#installing-directly-on-your-system) at the end of this guide.

## Getting Started

### Prerequisites

To follow this tutorial, you will need the following:

- A linux machine with the x86-64 architecture
- Nested virtualization enabled in your BIOS, so that the host exposes the `/dev/kvm` device
- [Docker Engine](https://docs.docker.com/engine/install/) with the [Compose plugin](https://docs.docker.com/compose/install/)

{% alert level="warning" %}
The provider runs its tasks inside virtual machines, so the container needs access to the host's KVM module. This means your Docker host has to be a physical machine, or a virtual machine with nested virtualization enabled. Check that `/dev/kvm` exists on the host before you start.
{% /alert %}

{% alert level="warning" %}
Linux is the only supported platform for running a provider. macOS is not supported at all, on Docker or otherwise. Running the provider on Docker Desktop for Windows (including the WSL 2 backend) may work, but it is not a supported setup and we do not provide support for problems with deployments running on Docker on Windows.

If you are on macOS or Windows, run the provider inside a Linux virtual machine with nested virtualization enabled instead. That setup generally works fine, but it is not officially supported either.
{% /alert %}

### Choosing the image version

Always run the most recent stable release of the provider image. You can find the available tags on [Docker Hub](https://hub.docker.com/r/golemfactory/provider/tags), and the accompanying release notes on the [yagna releases page](https://github.com/golemfactory/yagna/releases).

### Setting up the provider

Create a directory for your provider and add a `docker-compose.yml` file inside it:

```yaml
services:
  provider:
    image: golemfactory/provider:0.17.9
    container_name: golem-provider
    command: ['golemsp', 'run', '--no-interactive']
    restart: unless-stopped
    network_mode: 'host'
    devices:
      - /dev/kvm:/dev/kvm
    volumes:
      - golem-yagna:/root/.local/share/yagna
      - golem-provider:/root/.local/share/ya-provider
    environment:
      NODE_NAME: 'my-golem-provider'
      YA_ACCOUNT: '0xYourEthereumAddress'
      YA_PAYMENT_NETWORK_GROUP: 'mainnet'
      SUBNET: 'public'
      YA_RT_CORES: 4
      YA_RT_MEM: 8.0
      YA_RT_STORAGE: 40

volumes:
  golem-yagna:
  golem-provider:
```

A few of these settings are worth explaining:

| Setting                              | Why it is there                                                                                                                                                                                                     |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `command: golemsp run --no-interactive` | The image does not start the provider on its own, so the command has to be given explicitly. The `--no-interactive` flag is required, because a container has no terminal to answer the setup prompts on.        |
| `restart: unless-stopped`            | This is what keeps your provider running after you close the terminal, and brings it back up after a crash or a reboot.                                                                                              |
| `network_mode: host`                 | The provider communicates over UDP port 11500. Host networking avoids an extra layer of NAT, which keeps [port forwarding](#port-forwarding) working the same way it does for a direct installation.                 |
| `devices: /dev/kvm`                  | Gives the container access to the host's KVM module, which the VM runtime needs to compute tasks.                                                                                                                     |
| `volumes`                            | Named volumes hold your node's identity, wallet keys and settings. Without them you would lose your wallet every time the container is recreated.                                                                     |

{% alert level="warning" %}
The `golem-yagna` volume contains your node's private keys. Do not remove it, and do not run `docker compose down -v`, which deletes the volumes along with the containers. Back your keys up by following the [wallet backup guide](/docs/providers/wallet/backup).
{% /alert %}

### Configuring your node

Adjust the environment variables in `docker-compose.yml` to match your setup:

|                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NODE_NAME`                | The name of your new node, as it will appear on the network.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `YA_ACCOUNT`               | Your own Ethereum address, to which you have the private keys stored. If you leave this out, an address will be created for you inside the `golem-yagna` volume.                                                                                                                                                                                                                                                                                                                                                          |
| `YA_PAYMENT_NETWORK_GROUP` | The network you want to be paid on. Set this to `mainnet` to earn real GLM.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `SUBNET`                   | The subnet your node joins. Leave it as `public` unless you have a reason to change it.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `YA_RT_CORES`              | The number of threads you share with the network.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `YA_RT_MEM`                | The amount of RAM you share, in GiB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `YA_RT_STORAGE`            | The amount of disk space you share, in GiB.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

{% alert level="warning" %}
The image defaults to the **testnet**, where the GLM you earn has no real value. If you want to earn on the mainnet, you have to set `YA_PAYMENT_NETWORK_GROUP` to `mainnet` explicitly, as shown above.
{% /alert %}

The resource values are yours to decide - they determine how much of your machine you offer to the network. The image ships with deliberately small defaults (2 cores, 1 GiB of RAM and 20 GiB of disk), so set them to values that reflect what you actually want to share. Remember to leave enough headroom for the host system itself.

### Starting the provider

From the directory containing your `docker-compose.yml`, run:

```bash
docker compose up -d
```

The provider now runs in the background. You can close your terminal, and it will keep computing tasks.

### Verifying node status

To check your node's status and see if it is active and computing tasks from the network, run:

```bash
docker compose exec provider golemsp status
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
┌───────────────────────────────────────────────────┐
│  Status                                           │
│                                                   │
│  Service    is running                            │
│  Version    0.17.9                                │
│  Commit     4575190df                             │
│  Date       2026-07-31                            │
│  Build      1468                                  │
│                                                   │
│  Node Name  my-golem-provider                     │
│  Subnet     public                                │
│  VM         valid                                 │
│                                                   │
│  Driver     Ok                                    │
├───────────────────────────────────────────────────┤
│  Wallet                                           │
│  0x2a14f8ae0272bd4c38ed1b40c66e88ed719dab69       │
│                                                   │
│  network                mainnet                   │
│  amount (total)         0 GLM                     │
│      (on-chain)         0 GLM                     │
│      (polygon)          0 GLM                     │
│                                                   │
│  pending                0 GLM (0)                 │
│  issued                 0 GLM (0)                 │
├───────────────────────────────────────────────────┤
│  Tasks                                            │
│                                                   │
│  last 1h processed     0                          │
│  last 1h in progress   0                          │
│  total processed       0                          │
│  (including failures)                             │
└───────────────────────────────────────────────────┘
```

A healthy node reports `Service is running`, `VM valid` and `Driver Ok`. If `VM` is not valid, the container most likely cannot reach `/dev/kvm` - see the [provider troubleshooting guide](/docs/troubleshooting/provider) for details.

### Setting your prices

Pricing is stored in the `golem-provider` volume rather than passed as an environment variable, so it is set with `golemsp settings set` inside the running container:

```bash
docker compose exec provider golemsp settings set --cpu-per-hour 0.1 --env-per-hour 0.005 --starting-fee 0
```

When configuring your pricing, consider the current market conditions. The initial default rate is set at 0.1 GLM per hour, per thread, which might be high given the current market rates. To ensure your pricing is competitive, you can refer to the list of online providers and their earnings on the [Golem Network Stats page](https://stats.golem.network/network/providers/online). The table of providers is automatically sorted by earnings, which can help you gauge and set a more market-aligned pricing.

Your settings persist across restarts and updates, because they live in a named volume. The full list of options is described in [configuring your provider](/docs/providers/configuration/general).

### Following the logs

To watch what your provider is doing:

```bash
docker compose logs -f
```

### Stopping the provider

```bash
docker compose stop
```

To start it again, use `docker compose start`. Use `docker compose down` if you also want to remove the container - your wallet and settings stay safe in the named volumes, as long as you do not add the `-v` flag.

### Updating your provider

With the ongoing development of the Golem Network, new and improved versions of the Golem Provider are frequently released. To update, check the newest stable tag on [Docker Hub](https://hub.docker.com/r/golemfactory/provider/tags), change the `image:` line in your `docker-compose.yml` to that version, and then run:

```bash
docker compose pull
docker compose up -d
```

Compose recreates the container with the new image. Your node identity, wallet and settings are preserved in the volumes.

## Port forwarding

The Yagna service utilizes UDP protocol on port 11500 to facilitate communication. While the Golem Network can relay data through nodes without direct port forwarding, configuring your node to have a public IP address significantly strengthens the network's resilience and stability. Nodes with a public IP can provide better performance and are generally more desirable to Requestors.

Although not mandatory, setting up port forwarding is highly encouraged as it contributes to a more robust network. To do this, you'll need to manually open UDP port 11500 on your router.

Because the container uses host networking, port forwarding is configured exactly as it would be for a provider installed directly on the machine - there are no Docker port mappings involved.

For detailed instructions tailored to your router model, visit [PortForward.com](https://portforward.com/)

To verify if port forwarding is correctly configured, check [CanYouSeeMe.org](https://canyouseeme.org/). Should you encounter any difficulties, contacting your Internet Service Provider (ISP) for assistance with your router's settings may be necessary.

## Installing directly on your system

If you would rather not use Docker, you can install the provider straight onto your machine.

{% alert level="info" %}
`golemsp run` stays attached to your terminal, and stops when that terminal is closed. If you go this route, run it under a process manager such as a systemd service so that it survives logouts and reboots.
{% /alert %}

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

To check the node's status, open a second terminal window and run `golemsp status`.

{% docnavigation title="Next steps" %}

- [Configuring your provider](/docs/providers/configuration/general)

{% /docnavigation %}

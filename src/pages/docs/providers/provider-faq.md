---
description: Provider FAQ
title: Provider FAQ
type: Guide
---

# Provider FAQ

Welcome to the Provider FAQ for Golem users. Below you will find a series of commonly asked questions and straightforward answers to help you navigate the Golem network as a provider.

## Getting Started

### When will I start receiving tasks?

Receiving tasks can vary based on several factors, like the match of your hardware to requestors' demands and how competitively you've priced your provider. If tasks aren't coming in, consider adjusting your pricing.

For a benchmark, you can refer to the list of online providers and their earnings on the [Golem Network Stats page](https://stats.golem.network/network/providers/online). The table of providers is automatically sorted by earnings, which can help you gauge and set a more market-aligned pricing.

Joining the community discussion on [Discord](https://chat.golem.network/) might also provide insights into effective pricing strategies.

### Is port forwarding necessary to run Golem?

While port forwarding is not strictly required, it is strongly recommended. Port forwarding helps enhance network performance by making your node more accessible to requesters. By allowing UDP traffic on port 11500 through your router, you improve the strength and efficiency of the network.

For step-by-step guidance on setting up port forwarding on your router, check [PortForward.com](https://portforward.com/). To confirm that port forwarding is set up correctly, use [CanYouSeeMe.org](https://canyouseeme.org/). If you encounter any setup issues, don't hesitate to reach out to your ISP for help.

### Can I run multiple providers from the same IP address?

Yes, you can run multiple provider nodes from a single IP address without any issues.

## Pricing and Payments

### Can I change my prices once I've started executing tasks?

You can update your node's pricing at any time; however, any changes will only affect new agreements with requestors. Ongoing tasks will be completed at the original agreed-upon rate.

**Please remember that for the changes to take effect, you must restart your provider.**

### How is CPU/h calculated?

Pricing is based on Thread utilization. If you set your rate at 0.1 GLM per CPU/h and a requestor uses four threads, it would cost them 0.4 GLM to use those threads for one hour.

### What is the difference between Layer 1 and Layer 2?

Simply put, Layer 1 refers to the primary blockchain structure where all transaction details are recorded. Layer 2 solutions are built on top of Layer 1 and handle transactions with less on-chain data, usually resulting in lower transaction fees.

### What are tGLM and GLM?

- **GLM**: The actual tradeable token with real-world value.
- **tGLM**: A test token used for experimenting with the Golem network. It has no monetary value.

## Technicalities and Operations

### How are providers chosen for a task?

When a requestor creates a task, they define specific criteria that provider nodes must meet to be considered for the task. If your provider node meets these criteria, it becomes eligible for selection. However, which eligible provider is chosen is determined by the requestor’s preference and can vary based on different attributes they consider important. These could for example be:

- The number of processor cores available
- The reputation or past performance of the provider
- The unique identifier (ID) of the provider node
- The pricing offered by the provider
- The provider’s name, if it holds significance for the requestor

The requestor has the flexibility to select providers based on any set of criteria they value. While the process includes randomization among eligible providers, ultimately, the requestor's specific preferences play a decisive role in the final selection.

### What hardware do I need to be a Golem provider?

There's no strict requirements for running a provider node except for the following:

- A linux machine with the x86-64 architecture
- Nested virtulization enabled in the BIOS

### Does Golem automatically remove task data?

Yes, by default, Golem clears task data after 30 days. You can alter this setting using the command `ya-provider clean –help`.

### Can I operate Golem on cloud platforms like OVH or AWS?

Golem functions on hosting platforms that support Kernel-based Virtual Machine (KVM) access. For example, OVH supports KVM access while AWS does not. Please consult this with the cloud providers support if you're unsure about the availability.

### Where can I find Yagna logs?

Logs for Yagna and the provider module can be found at the following locations on your system:

```bash
$HOME/.local/share/yagna/yagna_rCURRENT.log
$HOME/.local/share/ya-provider/ya-provider_rCURRENT.log
```

### Why would someone run a node on the testnet?

Running a testnet node typically helps requestors test and refine their applications at no cost, which can speed up the overall development and migration to the mainnet.

### What is KVM?

KVM stands for Kernel-based Virtual Machine. It's a virtualization module for Linux systems, allowing for the creation of a virtual machine where Golem tasks are executed securely inside.

### How do I update Golem to the latest version?

To update, simply terminate the running provider service and re-run the installation script:

```bash
curl -sSf https://join.golem.network/as-provider | bash -
```

If you have further questions or need assistance, community support channels are a helpful resource. Happy computing on the Golem network!

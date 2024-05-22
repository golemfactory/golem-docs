---
description: Learn about the Golem Network Reputation System, a system that helps requestors find reliable providers based on performance and availability.
title: Golem Network Reputation System - Provider Performance and Availability
type: Introduction
---

# Golem Network Reputation System

When running a task on the Golem Network, you're exposed to hundreds or thousands of different providers with varying specs, performance, and reliability. This can be overwhelming for requestors, making it challenging to find the right provider for their needs. To simplify this process, the Golem Network offers a reputation system. This acts like a trusted guide, helping you find the best providers for your specific requirements.

## Building Trust: Focusing on Provider Reputation

Initially, we've focused on creating a reputation system that assesses providers' performance. This was a strategic choice for several reasons:

- **Attracting Requestors:** A strong reputation system for providers is crucial for attracting more requestors to the network. It provides a level of trust and transparency that makes the Golem network more appealing.
- **Streamlined Implementation:** Implementing a robust reputation system for requestors requires significant changes to our protocol. We wanted to start with a system that could be released quickly and efficiently, focusing on a key need: helping requestors find reliable providers.

## How the System Works

The Golem Reputation System helps requestors choose providers who are more likely to complete tasks successfully. To do this, it continuously collects data on provider performance, which is used to filter providers based on various criteria:

- **Task Success Rate:** The percentage of tasks the provider has completed successfully.
- **Provider Age:** Excludes newer providers that may have a high uptime percentage simply due to their short operational period.
- **Uptime:** The percentage of time a provider has been online and available for tasks.
- **CPU Performance:** Both single-core and multi-core CPU performance scores.
- **Memory Performance:** Sequential and random read and write speeds of the provider's memory.
- **Disk Speed:** Random and sequential read and write speeds of the provider's storage.
- **Network Throughput:** Network download speeds.
- **Location-based Ping Times:** The average ping times from specific regions (Europe, Asia, US) and whether the ping should be conducted peer-to-peer (p2p) or through the relay.
- **GPU Performance (coming soon):** Performance tracking for providers who offer GPUs, which will be part of the reputation system in the near future as our beta program for GPUs expands.

This data is collected through ongoing tests and benchmarks that are run daily. The system then uses this information to help requestors find providers that match their specific needs and requirements.

**Choosing Which Providers to Track:**
The system doesn't track all providers. As the system runs on mainnet and processes actual paid tasks, we need to protect against potential malicious providers attempting to game the system by specifying high prices. Therefore, the system comapares each provider's price against similar machine on other marketplaces to ensure that it aligns with market standards.

## Benefits for Requestors:

The Golem Reputation System helps requestors find the perfect provider for their task by making it possible to filter for the exact requirements that make their computation run most optimally which you can read about [here](/docs/reputation/finding-the-best-providers). Currently, this is a manual process, but in the future, you will be able to automatically find the best providers using "schemas."

**Schemas: Defining Your Ideal Computation Environment**

Schemas are like blueprints for your ideal computation environment. They allow you to specify the exact hardware and software requirements for your task, ensuring that it runs smoothly and efficiently on the Golem Network. Imagine being able to define your computation needs in a simple and intuitive way, and then having the system automatically find the perfect providers for you.

**The Power of Schemas**

Schemas offer a powerful way to:

- **Simplify Provider Selection:** Instead of manually filtering through provider profiles, you can simply define your schema and let the system do the work.
- **Optimize Task Performance:** By matching your computation needs with the right provider resources, schemas ensure that your tasks run as quickly and efficiently as possible.
- **Discover New Possibilities:** Schemas open up a world of possibilities for more complex and demanding computations, as you can easily find providers that meet your specific requirements.

**Examples of Potential Schemas**

Here are some examples of schemas that could be created to address various computational needs:

- **Schema for Training a Large Language Model:** This schema could prioritize providers with powerful GPUs, large amounts of RAM, high-speed storage, and high network bandwidth.
- **Schema for Running a Blockchain Node:** This schema could emphasize providers with high uptime, reliable hardware and strong security measures.
- **Schema for Decentralized AI Model Training:** This schema could focus on providers with GPUs, specialized software libraries, and a high-throughput network to enable collaborative training of large AI models.
- **Schema for Rendering Complex 3D Graphics with Blender:** This schema could prioritize providers with high-end GPUs, large amounts of RAM, and fast storage to efficiently handle demanding rendering tasks in Blender.

**The Future of Computation**

The potential applications of schemas are vast and constantly evolving. As the Golem Network develops, we can expect to see even more specialized schemas emerge, catering to a wide range of computational needs. Imagine a future where you can easily define your computational requirements, and the network will instantly match you with the perfect provider for your task. This is the power of schemas, and the future we are working towards.

## Expanding the System: A Look to the Future

While our current focus is on building a strong foundation for provider reputation, we have big plans for the future. The goal is to expand the system to include a comprehensive reputation system for requestors as well. This will create a more balanced and robust ecosystem for all participants in the Golem network.

However, implementing a robust system for requestors requires significant changes to our protocol. This is something we're actively working on, and we're excited to share more about it as we develop it.

For now, we're confident that the current reputation system is a valuable resource for requestors. It helps them make informed decisions about which providers to use, ensuring a smoother and more reliable experience on the Golem network.

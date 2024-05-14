---
description: Learn about the Golem Network Reputation System, a system that helps requestors find reliable providers based on performance and availability.
title: Golem Network Reputation System - Provider Performance and Availability
type: Introduction
---

# Golem Network Reputation System

The Golem Network is a decentralized cloud computing network. It's like a global marketplace where people can rent out their computer power (providers) and others can use it for tasks (requestors). Since this network is spread across the world, providers have different levels of reliability and availability.
To make this system work smoothly, Golem has a reputation system module. It's like a rating system for providers, helping requestors find the best ones for their needs.

## How It Works

The Golem Reputation System helps requestors choose providers who are more likely to complete tasks successfully. It does this by keeping track of how providers perform over time.
Every day, the system runs tests on providers, measuring their speed, stability, and other important factors. It also tracks whether providers are online and available.

**Choosing Which Providers to Track:**
The system doesn't track all providers. It focuses on providers with fair prices. This is done by comparing their prices to similar services offered by established cloud providers like AWS, allowing for some flexibility.
The goal here isn't to judge providers as expensive or cheap, but to make sure the system is fair. By focusing on providers with reasonable prices, the system ensures that it's not being manipulated by providers who charge too much.

**Benefits for Requestors:**
The reputation system is especially helpful when projects move from a testing phase (testnet) to a live environment (mainnet). It helps identify providers who might cause problems because of their setup or pricing.
Requestors can customize the importance of different factors in the reputation system. For example, if uptime is crucial for their project, they can give it a higher weight. This helps them find providers who are a good match for their specific needs.

## What the Reputation System Tracks

The reputation system collects data on several key aspects of a provider's performance:

- **Performance Benchmarks:**

  - **CPU Speed:** Measures how quickly the provider's processor can handle tasks, both for single tasks and multiple tasks running at the same time.
  - **Memory Performance:** Assesses how fast the provider's memory can read and write data, using different patterns (sequential, random) and thread configurations (single, multi).
  - **Disk Speed:** Evaluates the provider's storage performance, including read and write speeds for both random and sequential access patterns.
  - **Network Throughput:** Determines how quickly data can be transferred to and from the provider, which is crucial for tasks that involve large files or data streams.
  - **GPU Performance is coming soon:** We are currently working on adding performance tracking for providers who offer GPUs. This will be part of the reputation system in the near future as our beta program for GPUs expands.

- **Reliability and Availability:**

  - **Uptime:** Tracks how often the provider is online and available for tasks.
  - **Task Success Rate:** Records the percentage of tasks that the provider completes without errors. Differentiable between CPU / GPU soon.

By gathering and analyzing this information, the reputation system provides requestors with a comprehensive picture of each provider's capabilities and reliability. This helps them make informed decisions about which providers to use.

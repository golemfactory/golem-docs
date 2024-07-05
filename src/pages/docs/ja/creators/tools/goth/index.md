---
title: Golem Test Harness (goth) Overview
description: Explore Golem's integration testing framework, goth, for local simulation of Golem network interactions, debugging, and end-to-end testing of applications.
pageTitle: Golem's Integration Testing Framework - Simulate & Debug with goth

type: Introduction
---

# Interactive testing environment

## Introduction

Hello Developer! So you've implemented your awesome, new Golem app and would like to deploy it to the Golem network and see your tasks executed there?

{% youtube link="https://www.youtube.com/watch?v=HP6VVBUdkm8" %}

{% /youtube %}

But of course, your app may still be far from perfect, the network may be congested, information from the execution units on providers next-to-impossible to acquire or maybe those nodes currently available to you are ill-suited to your particular task at hand.

All that means that testing your shiny new app by running it in on the actual Golem network may prove a slightly frustrating endeavor.

## Enter goth

This is where Golem's Test Harness (or `goth` for short) comes in to help.

`Goth` is our carefully-tailored integration testing framework that is able to run a minimal, simulated network of Golem requestors and providers locally on a single machine, while at the same time providing a developer with some additional tools that allow them to inspect both the application itself and the communications between the nodes in an isolated, controlled environment.

This environment is self-contained and independent of any external components that the regular Golem nodes use - such as the Ethereum blockchain, the central communications hub or any other Golem nodes in the public network.

{% alert level="info" %}

#### Goth features

- transactions between nodes on a local Ethereum blockchain ([Ganache](https://github.com/trufflesuite/ganache)),
- automated, configurable deployment of yagna and its components,
- all network components running in an isolated Docker Compose network,
- easy access to logs from the requestor and all the providers along with the history of HTTP traffic between them,
- support for running your own, local requestor agent that connects to this network

{% /alert %}

The TL;DR from the above is that with `goth` you can run your app on your machine in the same way as you'd run it on the Golem network, but with extra tools for debugging and investigating potential issues.

So, now that you know what `goth` is and how it can help you as the developer, let's follow up with what it takes to actually run the thing!

{% alert level="warning" %}

Word of caution though - currently, Golem provider nodes requires Linux with access to the KVM module, in order to run.

Because of that, while it may be possible to utilize a subset of our integration testing framework on Mac or Windows, for the time being, local end-to-end testing of Golem applications is only fully supported on Linux.

{% /alert %}

{% docnavigation title="Next steps" %}

- [Running Goth](/docs/ja/creators/tools/goth/running-goth)

- If you have already run the Golem Test Harness, you may proceed directly to our tutorial on testing your own apps with it: [Running Goth in interactive mode](/docs/ja/creators/tools/goth/running-goths-interactive-mode)

{% /docnavigation %}

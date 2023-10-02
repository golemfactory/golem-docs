---
description: Using Golem Test Harness a.k.a. goth for fun and profit
---

# Interactive testing environment

{% embed url="https://www.youtube.com/watch?v=HP6VVBUdkm8" %}
Golem Test Harness introduction video
{% /embed %}

## Introduction

Hello Developer! So you've implemented your awesome, new Golem app and would like to deploy it to the Golem network and see your tasks executed there?

But of course, your app may still be far from perfect, the network may be congested, information from the execution units on providers next-to-impossible to acquire or maybe those nodes currently available to you are ill-suited to your particular task at hand.

All that means that testing your shiny new app by running it in on the actual Golem network may prove a slightly frustrating endeavor.

## Enter goth

This is where Golem's Test Harness (or `goth` for short) comes in to help.

`Goth` is our carefully-tailored integration testing framework that is able to run a minimal, simulated network of Golem requestors and providers locally on a single machine, while at the same time providing a developer with some additional tools that allow them to inspect both the application itself and the communications between the nodes in an isolated, controlled environment.

This environment is self-contained and independent of any external components that the regular Golem nodes use - such as the Ethereum blockchain, the central communications hub or any other Golem nodes in the public network.

{% hint style="info" %}
#### Goth features

* transactions between nodes on a local Ethereum blockchain ([Ganache](https://github.com/trufflesuite/ganache)),
* automated, configurable deployment of yagna and its components,
* all network components running in an isolated Docker Compose network,
* easy access to logs from the requestor and all the providers along with the history of HTTP traffic between them,
* support for running your own, local requestor agent that connects to this network
{% /hint %}

The TL;DR from the above is that with `goth` you can run your app on your machine in the same way as you'd run it on the Golem network, but with extra tools for debugging and investigating potential issues.

So, now that you know what `goth` is and how it can help you as the developer, let's follow up with what it takes to actually run the thing!

{% hint style="warning" %}
Word of caution though - currently, Golem provider nodes require actual Linux machines to run.

Because of that, while it may be possible to utilize a subset of our integration testing framework on Mac or Windows, for the time being, local end-to-end testing of Golem applications is only fully supported on Linux.
{% /hint %}

{% content-ref url="running-goth.md" %}
[running-goth.md](running-goth.md)
{% /content-ref %}

Or, if you have already run the Golem Test Harness, you may proceed directly to our tutorial on testing your own apps with it:

{% content-ref url="running-goths-interactive-mode.md" %}
[running-goths-interactive-mode.md](running-goths-interactive-mode.md)
{% /content-ref %}

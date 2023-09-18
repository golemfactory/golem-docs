---
description: Solution architecture and details.
title: Golem Overview
type: Guide
---

## Golem overview

Golem is a network of nodes that implement the Golem Network protocol. We provide the default implementation of such a node in the form of the Golem service, called [Yagna](https://github.com/golemfactory/yagna).

The nodes in the network can act as __providers__ or __requestors__. Both the requestor and the provider share the same implementation of the Golem service.

[//]: <> (The diagram above shows the architecture of the network. For the sake of simplicity, it shows just one requestor and one provider.)


### Provider

__Provider__ is a node that is sharing its temporarily unused computer resources for Requestors within the Golem Network in return for GLM tokens.

In general, almost any computer might act as a provider. It can be a laptop, desktop, or server machine. The particular resource details (for example, the number of CPUs or their memory limit) that are subject to sharing can be configured by the hardware owner.

Resources can be utilized in different scenarios: it might be a computation requiring heavy lifting right away but it could also be getting a service up and running and ready to serve requests coming from requestors whenever they come. 

In exchange for the resource sharing, you will receive payment in GLM, and the payment is most commonly executed through [Polygon](https://polygon.technology/).

To become a provider, one needs to install a provider agent - a specific piece of code that implements the Golem Network protocol, thus the machine running it acts as a Golem node. Golem Factory provides the provider binaries as a pre-built Linux installation package. You do not need to perform any development or extensive configuration to have a Golem provider up and running on your Linux machine.

Providers are recommended to upgrade their nodes to the latest package version available. This strategy shall provide the widest market coverage and therefore ensure the highest probability of profit.

- Provider installation and configuration instructions are [here](/docs/providers/provider-installation).
- More details on how the provider works [here](/docs/golem/overview/provider).

### Requestor

__Requestor__ is a node that wants to use hardware resources that are available in the Golem Network, shared by its providers.

The main or most typical benefit for the requestor is to have instant access to a very large pool of hardware. Instead of using local hardware, the requestor can use the IT resources available on the decentralized market. What's more, one requestor can use the hardware from many providers at the same time and run its tasks in prallel.

- More details on how the requestor works: [here](/docs/golem/overview/requestor).

### How do Requestors and Providers interact?

{% alert level="info" %}

It is a simplified description of the process, provided to illustrate the relationship between the provider and the requestor in a scenario when the payments take place on the [Polygon](https://polygon.technology/) network. The whole process is handled by Golem's software Yagna along with its SDK.

{% /alert %}


1. The Provider announces the availability of its resources in the Golem market. This is called an __Offer__.
2. Requestor defines his needs in a form of a __Demand__ and publishes it on the Golem market.
2. The Golem market performs the matching between the provider side \(Offers\) and the requestor side  \(Demands\).
3. If a Requestor is willing to use the Provider's resources, the Agreement is signed.
4. The resources are used by the Requestor \(for example by transferring input/output files and running a particular Golem VM Image, which is derived from the Docker image, on the Provider's hardware\).
5. The Provider bills the Requestor in GLM tokens.
6. The Requestor sends a Polygon payment for resource usage.


### Payments

The last step in the interactions is a payment between requestors and providers for the usage of the resources. There are many possible payment scenarios. Currently, the default is to use the [Polygon](https://polygon.technology/), a Layer2 solution that greatly improves cost-effectiveness. However, a user can also opt to use the Ethereum mainnet, should they wish to do so.

More on the payment process you can find: [here](/docs/golem/payments).

### Networks

As a Provider, you will probably tend to operate in networks where payments are done in real GLM tokens. Your provider's Yagna by default is configured to work in these networks and use Polygon and Ethereum Mainnet as payment platforms.

If you are a requestor, you would rather start in a development environment - your Yagna installation is by default configured to do payments in Goerli Network. Thus you work in the testnet. You pay there in test GLM tokens that are available from a faucet. It is free, but you cannot expect capacity and performance. Once you have tested your application you should consider switching to mainnet.



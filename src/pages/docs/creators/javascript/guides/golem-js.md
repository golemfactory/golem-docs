---
description: Introduction to Resource Rental Model
title: Introduction to Resource Rental Model
type: Guide
---

# Introduction to Golem Network and Introduction to Resource Rental Model

## Introduction

This article will introduce you to the Resource Rental model leveraged by the `golem-js` library.

## Golem Network

Golem connects computers in a peer-to-peer network, enabling both application owners and individual users **requestor** to rent resources of other users’ **providers** machines. These resources can be used to complete tasks requiring any amount of computation time and capacity.

To rent resources you need to create an `order` that describes your needs then rent the resources from the network using the Yagna service. This is done using a **requestor script** (or simply **Golem app**) that will utilize Golem JS SDK. When you define the `order` you define the software environment in which you will run your commands on a provider. This is done by specifying a software package in the form of a Docker-like **image**.

So, to run your app on Golem Network, you need:

- connection to a Yagna service that will let you interact with the Golem Network.
- A Docker-like [Image](/docs/creators/javascript/guides/golem-images), that defines an environment where you will run your commands.
- A [requestor script](/docs/creators/javascript/tutorials/quickstart-explained), in which you orchestrate the whole process and define commands run on rented resources.

As the script will use API and model provided by the JS SDK `golem-js` library, let’s get familiar with the Resource Rental model.

## Resource Rental Model

Since version 3.0, golem-js leverages the notion of renting compute resources and accordingly exposes domain APIs around it.

The `GolemNetwork` is the point of entry that represents a connection to the Yagna service and thus the Golem Network. It lets you rent resources and (if you need to implement more customized logic) get access to the core modules (market, activity, payment, network, rental).

The act of renting resources from a provider is represented by a `ResourceRental` object that incorporates all processes and activities required to engage and proceed with a provider. You can get an instance of a `ResourceRental` directly from GolemNetwork or via a pool of rentals.

A `ResourceRental` lets you access an `ExeUnit` - a representation of a container where your workload is run. The `ExeUnit` exposes methods as implemented by specific types of runtimes (vm, wasm, nvidia-vm). You can use them to run commands in the remote execution environment and transfer data until you decide to stop and finalize the rental.

While there is a variety of runtimes types that can be run in the Golem Network, our examples use a VM type. In such a case your execution environment is defined by the image deployed.  Golem Network uses a custom `Golem Virtual Machine Image` image format (GVMI). GVMI images are defined using Dockerfiles and then converted to Golem format using Golem's provided tool. In our examples, we use Golem standard images, but we also offer a tutorial on how to create custom images.

You can learn more details about the model in this [article](/docs/creators/javascript/tutorials/quickstart-explained) where we explain in detail the code of the quickstart example.

<!-- Orders and pools are explained in the tutorial article -->

## Main `golem-js` API features:

Features exposed by a high-level generic purpose API allow you to:

- rent single or multiple machines and run commands on them (in parallel when multiple rentals are used),
- obtain results after the command's completion or as a stream,
- transfer files to and from the remote machine, so you can provide input files or retrieve the results of the computation,
- connect your node and multiple providers to a VPN network, This enables communication between the nodes.
- listen to various events that are emitted by the SDK. This enables reaction to certain conditions, like calculating the total cost of all invoices received,
- use a predefined filter for common use cases, to select more suitable providers,
- define custom filters to select the providers that he wants to work with. This enables you to blacklist or whitelist certain providers,
- define a method that will select which proposal should be chosen first. This is useful when you want to prioritize certain providers over others,
- avoid uploading a GVMI image directly to the provider instead of using the `registry` service. This is useful when you want to quickly prototype your image without having to update the registry with every change,
- define a setup method that will be executed the first time a provider is rented and a teardown method that will be executed before the rental is done. This is useful when you want to avoid doing the same work multiple times when running multiple tasks on the same provider.

`Golem-js` also exposes low-level api modules representing Yagna domains in for of glm.market, glm.activity, glm.payment properties of the GolemNetwork object.

{% docnavigation title="Next steps" %}

<!-- to define next steps -->

The [examples](https://github.com/golemfactory/golem-js/tree/master/examples) directory in the repository contains various usage patterns for the SDK. You can browse through them and learn about the recommended practices. All examples are automatically tested during our release process.


You can also start exploting [API reference]().

<!-- to do: fix the link for api -->

{% /docnavigation %}

{% docnavigation title="See also" %}

If you wish to learn more about how the SDK functions under the hood, please check out our more [advanced examples](https://github.com/golemfactory/golem-js/tree/beta/examples/advanced)

If you wish to learn more about the usage for low-level features of the SDK, please check out our [low level API examples](https://github.com/golemfactory/golem-js/tree/beta/examples/advanced)

<!-- to do: fix the link for low-level -->

{% /docnavigation %}

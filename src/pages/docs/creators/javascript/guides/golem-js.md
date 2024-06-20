---
description: Introduction to Golem JS SDK
title: Introduction to Golem JS SDK
type: Guide
---

# Introduction to Golem Network and Task model

## Introduction

This article will explain Golem Network and details around the `golem-js`.

## Golem Network

Golem Network is a p2p network that consists of many nodes. Each node is a system with a **Yagna** service running on it. The nodes that offer their resources to others are called **providers**. The nodes that hire resources are called **requestors**.

To get things done (the Job) in the Network, you need to define it, split it into task(s), and send it to the network using the Yagna service. This is done using a **requestor script** (or simply **Golem app**) that will utilize Golem JS SDK. You also need to define the software environment in which you will run your tasks on a provider. This is done by specifying a software package in the form of a Docker-like **image**.

Let's get familiar with other terms that will help you navigate through Golem docs and find relevant information more easily.

A most simple operation, like running a command or sending a file, is called a **command**. We **compose** tasks from commands. Tasks are **executed** on **providers** a.k.a. **remote computers**.

So, to run your app on Golem Network, you need:

- A Yagna service that will let you connect to the Golem Network.
- A Docker-like [Image](/docs/creators/javascript/guides/golem-images), that constitutes an environment in which you will run your commands.
- A [requestor script](/docs/creators/javascript/tutorials/quickstart-explained), in which you will define tasks and execute them.

The script will use Task API provided by JS SDK lib, so let’s get familiar with the Task model.

## Golem-js model

GolemNetwork
Orders
Pools
Lease
Exeunit

## Main Task API features:

{% alert level="info" %}
Click on the links to go to the usage examples.
{% /alert %}

{% /docnavigation %}

{% docnavigation title="See also" %}

You can explore our [tutorials](/docs/creators/javascript/tutorials) to see how to use these features in a defined scenario.

{% /docnavigation %}

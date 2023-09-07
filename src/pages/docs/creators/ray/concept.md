---
description: guide on what Ray and Ray on Golem is, listing all pieces needed to use them 
title: Ray on Golem Concept
type: article
---

# About Ray and Ray on Golem
This doc explains Ray and Ray on Golem basic concepts.

## Introduction

Ray is an open-source framework for scaling Python applications. 
It specializes in tooling for AI/ML applications, but at the same time is based on Ray Core which understands every piece of generic Python code.

Ray uses concepts of tasks, actors, and objects for building and scaling distributed applications.
It can be used to parallelize your Python code to use all cores for your own computer and also offers Ray Cluster interface to run your payload on more machines.

You can learn about Ray Core mechanisms on [Ray docs website](https://docs.ray.io/en/latest/ray-core/walkthrough.html).

Golem on the other hand is a decentralized marketplace for computing power. The providers let the requestors use their machines for a small fee.

Ray on Golem makes it super easy to set up and use Golem Network to run your Ray application.

## What do you need

In order to use Ray on Golem, you need to install the Ray framework and Golem Ray cluster manager.
For the time being you also need yagna - Golem daemon facilitating communication with the Golem network.

When you have the software installed you need a cluster configuration yaml. We provide an example yaml which contains everything needed to start up a small free cluster running on the Golem test network.
When your application is ready, and you need more power you can get GLMs (to pay the providers) and MATICs (for payment transaction fees) and can move your cluster to the Golem network mainnet.

Check out [the machines](https://stats.golem.network/network/providers/online) ready to execute your payloads.

## Life cycle of Ray on Golem cluster

The basic flow of working with Ray and Ray on Golem consists of:

- Parallelizing your Python code with Ray (or writing a Ray app from scratch)
- Testing your Ray app on your own computer (Ray helps you utilize all your machine's cores)
- Starting up a Ray on Golem cluster initially consisting of only one node
- Executing your app on Ray on Golem cluster which automatically scales up and down to accommodate your app's needs
- Stopping down your Ray on Golem cluster to free resources and limit the cost

## Ray on Golem cluster configuration yaml & Ray CLI

Ray uses configuration yaml to define the characteristics of the cluster.
There is cluster provider-specific information (node definitions, payment platforms, etc.) and generic ones (number of nodes, autoscaling parameters, cluster name, etc.).

Ray also exposes a command line interface to manage the cluster (and nodes).

While `ray start` & `ray stop` are for manual node setup there are also many cluster commands
- `ray up cluster.yaml` starts up the cluster specified by the yaml
- `ray down cluster.yaml` terminates the cluster
- `ray submit cluster.yaml ray-app.py` executes the app on the cluster
- `ray exec cluster.yaml 'shell-command-line'` executes shell commands on the head node
- `ray attach cluster.yaml` gives you shell access to the head node

## How to start

Basically, you need a piece of code to execute on Golem. Once you have a Ray app you can immediately proceed to [launching it on Golem](/docs/creators/ray/setup-tutorial).
You can also use [our example apps](https://github.com/golemfactory/golem-ray/tree/main/examples) to play with Ray on Golem. 

You can also check out a more detailed explanation of [simple ray tasks app](/docs/creators/ray/basic-ray-tasks-usage-tutorial) and more sophisticated [bridge simulation app](/docs/creators/ray/practical-bridge-simulation-tutorial).

If you have any questions, comments insights, praises, or doubts about these docs and Ray on Golem in general please don't hesitate to reach out to us either on
- [Ray on Golem discord channel](https://discord.com/channels/684703559954333727/1136986696907505775)
- [Ray on Golem general feedback form](TODO)



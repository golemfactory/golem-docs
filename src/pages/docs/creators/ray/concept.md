---
description: guide on what Ray and Ray on Golem is, listing all pieces needed to use them 
title: Ray on Golem Concept
type: article
---

# About Golem, Ray and Ray on Golem
This doc explains Golem, Ray and Ray on Golem basic concepts.

## Introduction

Golem is a decentralized marketplace for computing power, where the providers let the requestors use their machines for a small fee.

Ray on Golem makes it super easy to set up and use Golem Network to run your Ray application.

Ray on the other hand is an open-source framework for scaling Python applications. 
It specializes in tooling for AI/ML applications, but at the same time, it is based on Ray Core which understands every piece of generic Python code.

Ray uses concepts of tasks, actors, and objects for building and scaling distributed applications.
It can be used to parallelize your Python code to use all cores on your own computer, but more importantly, it also offers Ray Cluster interface to run your payload on several, remote machines.

You can learn about Ray Core mechanisms on [Ray docs website](https://docs.ray.io/en/latest/ray-core/walkthrough.html).


## What do you need

In order to use Ray on Golem, you need to install the Ray framework and Golem Ray cluster manager.
For the time being, you also need yagna - Golem daemon facilitating communication with the Golem network.

When you have the software installed, you need a cluster configuration yaml file. We provide an example yaml, which contains everything needed to start up a small, free cluster running on the Golem test network.

When your application is ready, and you need more power, you should move to the mainnet - there are more nodes, and the nodes themselves are more powerful, but you have to pay to use them.

Payments within Golem Network happen on blockchain called [Polygon](https://polygon.technology), you need tokens named GLM (to pay the providers) and MATIC (for payment transaction fees).
Please read more about [mainnet payments and funding your Ray on Golem](/docs/creators/javascript/guides/switching-to-mainnet) (it is called Requestor on Golem Network)

When you have the tokens you need to configure `network: "polygon"` in cluster yaml ([more details](/docs/creators/ray/cluster-yaml-reference#network))

Check out [the machines](https://stats.golem.network/network/providers/online) ready to execute your payloads.

## Life cycle of working with Ray on Golem

The basic flow of working with Ray and Ray on Golem consists of:

- Parallelizing your Python code with Ray (or writing a Ray app from scratch)
- Testing your Ray app on your own computer (Ray helps you utilize all of your machine's CPU cores)
- Starting up a Ray on Golem cluster initially consisting of only one node
- Executing your app on Ray on Golem cluster, which automatically scales up and down to accommodate your app's needs
- Stopping down your Ray on Golem cluster to free resources and to limit the cost

## Ray on Golem cluster configuration yaml & Ray CLI

Ray uses a configuration yaml file to define the characteristics of the cluster.
There are provider-specific pieces of information (node definitions, payment platforms, etc.) and cluster-wide ones (number of nodes, autoscaling parameters, cluster name, etc.).

Ray also exposes a command line interface to manage the cluster (and nodes).

While `ray start` & `ray stop` are for manual node setup there are also many cluster commands
- `ray up golem-cluster.yaml` starts up a cluster specified by the yaml
- `ray down golem-cluster.yaml` terminates the cluster
- `ray submit golem-cluster.yaml ray-app.py` executes an app on the cluster
- `ray exec golem-cluster.yaml 'ray status'` show cluster status
- `ray exec golem-cluster.yaml 'shell-command-line'` executes shell commands on the head node
- `ray attach golem-cluster.yaml` gives you shell access to the head node

## How to start

Basically, you need a piece of code to execute on Golem. Once you have a Ray app, you can immediately proceed to [launching it on Golem](/docs/creators/ray/setup-tutorial).
You can also use [our example apps](https://github.com/golemfactory/golem-ray/tree/main/examples) to play with Ray on Golem. 

You can also check out a more detailed explanation of [simple ray tasks app](/docs/creators/ray/basic-ray-tasks-usage-tutorial) and a more sophisticated [bridge simulation app](/docs/creators/ray/practical-bridge-simulation-tutorial).

If you have any questions, comments, insights, praises, or doubts about these docs and Ray on Golem in general please don't hesitate to reach out to us either on
- [`#Ray on Golem` discord channel](https://chat.golem.network/) 
- [Ray on Golem general feedback form](https://qkjx8blh5hm.typeform.com/to/GtaCVz0b)


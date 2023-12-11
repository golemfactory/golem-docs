---
title: Ray on Golem Introduction
pageTitle: Scale Python code on Golem Network Using Ray - Developer's Guide
description: Explore how to use Ray with Golem for scaleable Python code execution. Quickstarts, tutorials, and troubleshooting tips for developers.

type: article
---

# Run Python code on Ray on Golem

This documentation is designed for developers wanting to run their **Python code** on Golem.
We will use **Ray** to parallelize the code and **Ray on Golem** to execute it.

- [Quickstart](/docs/creators/ray/quickstart) - quick and easy, copy and run instructions on launching and decommissioning the Ray on Golem cluster
- [Setup tutorial](/docs/creators/ray/setup-tutorial) - step-by-step explanation of the quickstart instructions
- [Supported versions and other limitations](/docs/creators/ray/supported-versions-and-other-limitations) - list of supported Python and Ray versions, and other known issues
- [Basic Ray tasks usage tutorial](/docs/creators/ray/basic-ray-tasks-usage-tutorial) - anatomy of Ray application based on a simple code showcasing Ray tasks
- [Converting a real-life use case to Ray on Golem](/docs/creators/ray/conversion-to-ray-on-golem-tutorial) - example of a little bit more practical Ray on Golem usage
- [Running on the mainnet](/docs/creators/ray/mainnet) - all you need to run your cluster on the mainnet
- [Accessing the Internet tutorial](/docs/creators/ray/outbound) - enabling your Ray app to use the Internet (from within the cluster nodes)
- [Cluster yaml](/docs/creators/ray/cluster-yaml) - details of configuration options of Ray on Golem cluster yaml
- [Ray CLI](/docs/creators/ray/ray-cli) - details of Ray command line options used with Ray on Golem
- [Ray on Golem CLI](/docs/creators/ray/ray-on-golem-cli) - details of Ray on Golem command line options
- [Troubleshooting](/docs/creators/ray/troubleshooting) - hopefully helpful tips on what to do when something goes wrong


## Introduction

Golem is a decentralized marketplace for computing power, where the providers let the requestors use their machines for a small fee.

Ray on Golem makes it super easy to set up and use Golem Network to run your Ray application.

Ray on the other hand is an open-source framework for scaling Python applications. 
It specializes in tooling for AI/ML applications, but at the same time, it is based on Ray Core which understands every piece of generic Python code.


## Why Ray?

The best thing about Ray is that it makes it straightforward to parallelize existing Python code even if you are not an expert in distributed programming.

Ray uses concepts of tasks, actors, and objects to enable efficient building and scaling of distributed applications.
It can be used to parallelize your Python code to use all cores on your computer, but more importantly, it also offers a Ray Cluster interface to run your payload on several, remote machines.

The beauty of the solution is that you can run the app locally, and when you are ready, you can execute the same app on the cluster without changing a single line of your code.

{% partial file="ray/learn-more-about-ray.md" /%}

## What do you need

You only need to install Ray on Golem - by default, it also installs the Golem daemon and the Ray framework as dependencies.

Check out [Supported versions and other limitations](/docs/creators/ray/supported-versions-and-other-limitations) to make sure Ray on Golem supports your environment.

Once the software is installed, you need a cluster configuration yaml file. 
We provide an example yaml, which contains everything needed to start a small, free cluster running on the Golem test network.
Check out articles about Ray on Golem [cluster yaml](/docs/creators/ray/cluster-yaml) and [Ray CLI](/docs/creators/ray/ray-cli) used to manage the cluster.

When your application is ready, and you need more power, you should move to the mainnet - there are more nodes, and the nodes themselves are more powerful, but you have to pay to use them.
Check out the [Running on the mainnet](/docs/creators/ray/mainnet) guide to get a full overview.

Payments within the Golem Network take place on the [Polygon](https://polygon.technology) blockchain and require some GLM tokens (to pay the providers) and MATIC (for payment transaction fees).
We encourage you to learn more about [mainnet payments and funding your Ray on Golem](/docs/creators/javascript/guides/switching-to-mainnet).

When you have the tokens you need to configure `payment_network: "polygon"` in the cluster yaml file ([more details](/docs/creators/ray/cluster-yaml#network))

Check out [the machines](https://stats.golem.network/network/providers/online) ready to execute your payloads.

## Life cycle of working with Ray on Golem

The basic flow of working with Ray and Ray on Golem consists of:

- Parallelizing your Python code with Ray (or writing a Ray app from scratch)
- Testing your Ray app on your computer (Ray helps you utilize all of your machine's CPU cores)
- Starting up a Ray on Golem cluster initially consisting of only one node
- Executing your app on Ray on Golem cluster, which automatically scales up and down to accommodate your app's needs
- Stopping down your Ray on Golem cluster to free resources and to limit the cost

## How to start

You'll need a piece of code to execute on Golem. If you already have some Ray application, you can immediately proceed to [launching it on Golem](/docs/creators/ray/setup-tutorial).
Otherwise, feel free to experiment with [our example apps](https://github.com/golemfactory/ray-on-golem/tree/main/examples). 

Once you get the hang of it, we invite you to have a look at the detailed explanation of [simple ray tasks app](/docs/creators/ray/basic-ray-tasks-usage-tutorial) and a more sophisticated [bridge simulation app](/docs/creators/ray/conversion-to-ray-on-golem-tutorial).

If you have any questions, comments, insights, praises, or doubts about these docs and Ray on Golem in general please don't hesitate to reach out to us either on
- [`#Ray on Golem` discord channel](https://chat.golem.network/) 
- [Ray on Golem general feedback form](https://qkjx8blh5hm.typeform.com/to/GtaCVz0b)


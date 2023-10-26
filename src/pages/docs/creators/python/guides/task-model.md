---
description: Introduction to Golem Network and Task model
title: Introduction to the Task model
type: Guide
---

# Introduction

This article explains how to use the Task API to create task-based applications using Golem.

Task-based API assumes that the developer starts with a problem that requires splitting into fragments in order to parallelize the execution using multiple providers. Therefore your application will run in a kind of a batch mode: it executes certain computations and finishes once the results are ready.

## The task model

As explained in [Golem application fundamentals](/docs/creators/python/guides/application-fundamentals) your application consists of 2 major components:

1. A requestor script - a piece of code that will implement the application logic and orchestrate the execution on providers.
2. An image that will run as a container on providers.

Your requestor script will have to:

- Translate the problem fragments into input data for a task that can be processed independently on each of the provider nodes.
- Execute the tasks (it might require sending data to and from providers)
- Combine the individual outputs into the final solution of the problem at hand.

It's worth noting here that the number of fragments does not necessarily need to depend on the number of provider nodes commissioned to perform our tasks. You can specify the maximum number of providers by the `max_workers` parameter of `execute_tasks` and the high-level API will spawn activities such number of providers as long as there are enough providers available to be engaged you have enough tasks to execute. If the eventual number of fragments is higher than the number of workers, the API will take care of distributing those fragments against the available nodes in an optimal way.

The requestor agent will use the API provided by the Golem SDK. One of the APIs implemented there is the Task API based on the Task Model.

The Task model is designed to address problems that can be resolved by parallel execution. You will get most advantage if you find a way to divide the whole problem into fragments that can be processed independently from other fragments.

Each of these fragments is associated with a certain set of data that constitutes individual **tasks**.

Your **tasks** are executed by the `execute_tasks` method of the Golem object. The Golem object is the main entry point of Golem’s high-level API. Its principal role is providing an interface to run the requestor’s payload using one of two modes of operation - executing tasks and running services.

The `execute_task` method is responsible for running the **worker** function for each of the **tasks** using the defined **payload**. The payload defines the environment run on the provider machine, where your tasks will be executed. In a simple simplified approach it is a **image**. The particular image is identified by its `tag` or `hash`.

The **worker** function uses the `work generator pattern` explained [here](/docs/creators/python/guides/application-fundamentals#work-generator-pattern-and-workcontext). It is used to define steps required to do tasks like sending data to and from a provider, running specified commands, etc.

{% docnavigation title="Next steps" %}

- We explain the mechanics of task-based requestor development, with a simple example in [Hello World tutorial](/docs/creators/python/tutorials/task-example-0-hello).

- Try a more complicated thing with a proof-of-concept [hash cracker](/docs/creators/python/tutorials/task-example-1-cracker).

- Learn how to run `hashcat` in parallel using Golem in [this example](/docs/creators/python/tutorials/task-example-2-hashcat).

{% /docnavigation %}

{% docnavigation title="See also" %}

- Introduction to [Service Model](/docs/creators/python/guides/service-model) that allows you to launch and control interactive services.

{% /docnavigation %}

{% alert level="info" %}

You can always reach out to us via our [Discord channel](https://chat.golem.network/) or consult the following resource for [troubleshooting](/docs/troubleshooting/python).
{% /alert %}

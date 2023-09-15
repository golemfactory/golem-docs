---
description: Introduction to Golem Network and Task model
title: Introduction to Golem Network and Task model
---


# Introduction to Task model

## Task Model

## Apps structure

## Major features / examples / tutorials


# Introduction to the task model

As explained in [Golem application fundamentals](/docs/creators/python/guides/application-fundamentals) your application consists of 2 major components:

1. a requestor agent - a piece of code that will implement the application logic and orchestrate the execution on providers.
2. an image that will run as a container on providers.

The requestor agent will use the API provided by the Golem SDK. One of APIs implemented there is the Task API based on the Task Model. 

The Task models is desiged to address problems that can be resolved by parallel execution. You will get most advantage if you find a way to divide the whole problem into fragments that can be processed independently from other fragments. 

Therefore your requestor script will have to:
- Translate the problem fragments into input data for a task that can be processed independently on each of the provider nodes.
- Execute the tasks (ti might requre sending data to and from providers)
- Combine the individual outputs into the final solution of the problem at hand.


It's worth noting here that the number of fragments does not necessarily need to depend on the number of provider nodes commissioned to perform our tasks. You can specify the maximum number of providers by `max_workers` parameter of `execute_tasks` and the high-level API will spawn activities such number of providers as long as there are eenough providers available to be engaged you you have enough tasks to execute. If the eventual number of fragments is higher than the number of workers, the API will take care of distributing those fragments against the available nodes in an optimal way.



Worker.
package.
Golem.
The main entrypoint of Golem’s high-level API.

Its principal role is providing an interface to run the requestor’s payload using one of two modes of operation - executing tasks and running services.

Problem.
Script.
Command.
Task.


When it comes to the implementation itself, any VM-based application for Golem is made up of two components:





## What do I need to create a VM application for Golem?



{% hint style="success" %}
Now you know what a Golem VM application is and how it works.
{% /hint %}


# Task Model development

{% hint style="warning" %}
The documentation is undergoing work. For the NodeJS or dApp articles, refer to the [new creator documentation](https://docs.golem.network/creators/).
{% /hint %}

## Introduction

This section shows a typical experience of a developer who would like to create their own task-based application using Golem.

{% hint style="info" %}
In case of any doubts or problems, you can always contact us on Discord.

[https://chat.golem.network](https://chat.golem.network/)
{% /hint %}

In order to make the journey through this tutorial easier to follow we divided it into sections.

The first one is a general introduction, pointing the developer's mind to the rails of Golem application development.

{% page-ref page="task-model-introduction.md" /%}

Next we explain the mechanics of task-based requestor development, with a simple example running on the VM runtime:

{% page-ref page="task-example-0-hello.md" /%}

Then we proceed to complicate things a bit by showing you how to use Golem with a proof-of-concept hash cracker:

{% page-ref page="task-example-1-cracker.md" /%}

Last but not least, we describe `hashcat` and show how we are going to make it work in parallel using Golem.

{% page-ref page="task-example-2-hashcat.md" /%}




See example [here](/docs/creators/javascript/examples/switching-to-mainnet).    

{% docnavigation title="Next steps" %}

See our [JS Examples](/docs/creators/javascript/examples)


{% /docnavigation %}


{% docnavigation title="See also" %}

You can explore our [tutorials](/docs/creators/javascript/tutorials) to see how to use these features in a defined scenario.

{% /docnavigation %}





   

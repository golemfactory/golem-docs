---
title: Golem Network Python API Overview
pageTitle: Master Golem's Python SDK - Build Decentralized Applications with Ease
description: Explore the high-level Python API for the Golem Network, simplifying service-oriented app development for the decentralized web.
type: Introduction
---

Our Services API provides an abstraction over Golem low-level APIs, which is aimed at making the building of service-oriented applications straightforward for a developer. The abstraction is based on a logical concept of a Service, in other words, an entity that implements the logic of a service application, and which, from Requestor's perspective, follows a certain sequence of states.

## High-level API library

The low-level mechanics of the Golem market are quite complex, and building robust applications directly using the low-level APIs, while possible, may not be the most efficient approach. For this reason, a concept of High-level API libraries has been designed, as "bindings" of specific programming languages with Golem platform.

The purpose of a high-level API is to wrap the intricacies of Golem APIs with more efficient programming models, based on computation models more intuitive than Golem market, activity and payment concepts. A developer using these libraries should have a basic understanding of Golem platform's fundamental concepts (Demand/Offer market matching, activity execution, payment-related logic), but all the low-level logic is implemented in a high-level [API library](https://yapapi.readthedocs.io/en/latest/api.html).

## Basic concepts

[Golem Appplication Fundamentals](/docs/ja/creators/python/guides/application-fundamentals).

[Networking concept](/docs/ja/creators/python/guides/vpn).

[Golem Images](/docs/ja/creators/python/guides/golem-images).

## Task Model vs Service Model

Two basic computation models are supported by Golem high-level APIs.

- **Task model** is designed to support **batch processing**, where an application is expected to perform a set of "computation jobs" on Golem network. A high-level API library provides structure for a developer to define batch tasks, which are then efficiently distributed across a selected number of providers available in Golem network. Batch jobs may require input data to be transferred to the provider side, and may produce output data, which needs to be fetched once the computation is complete.
- **Service model** is an abstraction over **interactive processes** which get launched, and operate in order to respond to requests. A service generally is expected to be active until explicitly stopped, however all the concepts of input/output data transfer also do apply.

Please refer to following sections for a dive into those two Golem programming models:

[Task Model](/docs/ja/creators/python/guides/task-model)

[Service Model](/docs/ja/creators/python/guides/service-model)

## Debugging

There is also a dedicated to [debugging](/docs/ja/creators/python/guides/debugging) topic.

{% docnavigation title="See also" %}

- [Golem overview](/docs/ja/golem/overview) in General Info section

{% /docnavigation %}

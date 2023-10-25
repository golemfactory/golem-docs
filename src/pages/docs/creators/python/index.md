---
description: Create Python applications on Golem
title: Python SDK Introduction
type: Toc
---

# Create your task application using Python

Welcome to the docs page for Golem Python SDK.

The core of the Python SDK is the **@golem-sdk/yapapi** library that enables interaction with the Golem Network. The library offers:

- Task API
- Service API

Task-based API assumes that the developer starts with a problem that requires splitting into fragments to parallelize the execution using multiple providers. Therefore your application will run in a kind of batch mode: it executes certain computations and finishes once the results are ready.

The services API assumes the user would like to treat provider nodes as something like service-hosting platforms, where each activity corresponds to a single instance of some service.

You can start your journey with Golem and create great decentralized apps the way that suits your style and preference:

| Title          | Description                                                                                                                                                                                                                                                                                                                                      |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| QuickStarts    | If you like to start with something quick and simple - go to [Python QuickStart](/docs/creators/python/quickstarts/run-first-task-on-golem).                                                                                                                                                                                                     |
| Tutorials      | If you prefer to learn how to write apps on Golem through practical use cases - try one of our [tutorials](/docs/creators/python/tutorials).                                                                                                                                                                                                     |
| Guides         | If you prefer to begin by understanding the Golem Application Fundamentals and Network concepts or have an overview of the Task API and Service API models - check out the [Guides](/docs/creators/python/guides) section. You can also find an explanation of Golem images and how to create custom ones.                                       |
| Tools examples | [Golem tools examples](/docs/creators/python/examples/tools) contains instructions on how to install and use tools such as the Yagna (this is the piece that makes you part of the Golem Network), `gvmkit-build` (a tool that allows you to create your custom Golem images) and other important components of building and running Golem apps. |
| API Reference  | We also provide a reference where you can explore details of the [API](https://yapapi.readthedocs.io).                                                                                                                                                                                                                                           |

---
description: Create your JS application on Golem
title: JS SDK Introduction
type: Introduction
---

# Create your JS apps using @golem-sdk/golem-js

Welcome to the docs page for Golem JS SDK. JS SDK enables JS and TS developer to interact with the Golem Network and run their scripts in Node.js and web browsers. Here you will find information on the main components, the documentation package, and the essential tools.

##  JS SDK libraries

The core of JS SDK is the **@golem-sdk/golem-js** library that allows developers to connect to the Golem Network, acquire computational resources from Providers using a convenient API, run their workloads with these resources, and get the results back to your machine. `golem-js` leverages both the high level _Renting Compute Resources_ model and low-level model reflecting objects from the internal Golem domain. Go here to learn about it [here](/docs/creators/javascript/guides/golem-js).

The **@golem-sdk/task-executor** implements the so-called _Task Model_, which is oriented around the notion of a _Task_ defined as a series of commands to be executed that have to succeed altogether for the task to be considered successful. This is particularly suitable for use cases involving the batch-map-reduce type of operations that can be distributed across many rented resources. Task Model is described [here](/docs/creators/javascript/task-executor/task-model).

The **@golem-sdk/cli** is a companion tool for the Golem SDK. It facilitates a fast start with Golem Network by creating a new template for new applications, assisting with manifest creation for outbound networking, and letting you interactively test your custom image in the fastest way possible all without coding. It also enables you to review your invoices and if needed, accept outstanding payments. You can find more information in this [guide](/docs/creators/javascript/guides/golem-sdk-cli).

The **@golem-sdk/react** provides you with a set of React hooks for working with the Golem Network.

The **@golem-sdk/pino-logger** is a library designed for use with `@golem-sdk/golem-js` based libraries and applications. It provides logging capabilities useful when testing your applications.

### JS SDK example projects

Here you have several projects that leverage our libraries:

**tesseract-ocr-golem** - a `golem-js` based library for running Tesseract OCR jobs on the Golem Network.

[GitHub Repo](https://github.com/golemfactory/tesseract-ocr-golem)

**react-image-classifier** - a reference implementation of a React app using Golem underneath.

[GitHub Repo](https://github.com/golemfactory/react-image-classifier)

**music-on-golem** - a reference implementation of a next.js app that uses Golem to generate music. The project contains everything you would find in a typical full-stack application, including a database, design system, authentication, and more.

[GitHub Repo](https://github.com/golemfactory/music-on-golem)

### Golem tools

The creation and running application on the Golem Network may require using of other Golem tools:

**Yagna** - the foundational service that allows users to connect with and interact with the Golem Network.

**Gvmkit-build** - a tool designed to create custom images for virtual machines on provider nodes within the Golem Network. It specifically converts Dockerfiles into Golem-compatible VM images, known as GVMI.

You will find a list of instructions for Golem tools [here](https://docs.golem.network/docs/creators/javascript/examples/tools).

**Golem Registry** - a repository of already built images that can be utilized by Golem Network users [is here](https://registry.golem.network/explore).

## How the documentation is organized

- [Quickstarts](/docs/creators/javascript/quickstarts). If you like to start with something quick and simple for both Node.js and browsers. Just copy the code and follow the instructions.

- [Tutorials](/docs/creators/javascript/tutorials). Start here if you prefer to learn how to write apps on Golem through practical use cases. In the [Running tasks in parallel tutorial](/docs/creators/javascript/tutorials/running-parallel-tasks) you will create an app that recovers passwords using the `hashcat` utility. You will learn how to split the job into multiple smaller tasks and run them in parallel on the Golem Network. You will also create a custom image with the software dedicated to the task and run the app on the network.

- [Guides](/docs/creators/javascript/guides). They are intended for those who prefer to begin by understanding the Golem Network concept and have an overview of the model used. You can also find an explanation of Golem images and instructions on how to create custom ones or how to access the internet from a remote node.

- **JS Task API** agregates introduction to the Task model API, Task API quickstarts, [examples](/docs/creators/javascript/examples) and its [API Reference](/docs/golem-js/reference/overview). It will let you explore Task API and find ready-to-run examples with explanations that will help you add these new features to your apps.

- Documentation and usage examples for the common **Golem tools** are available in the `Common developer tools` section.

- You may also find it interesting to learn about common **Golem concepts** shared in the `Golem concepts for developers` section in the side left menu.

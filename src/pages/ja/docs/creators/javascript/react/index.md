---
title: React SDK Introduction
description: Introduction to the Golem React SDK
type: Introduction
---

# React SDK Introduction

Welcome to the docs page for Golem React SDK. Before you get started, make sure you have read the [Introduction to the Task Model](/docs/creators/javascript/guides/task-model) to get familiar with the Golem Network and the task model.

## Who is this SDK for?

The Golem React SDK is for developers who want to build React applications that interact with the Golem Network directly, without having to write any backend code. It is a wrapper around the [Golem JavaScript SDK](/docs/creators/javascript/quickstarts/quickstart) that provides React hooks and components for common tasks such as connecting to Yagna, initializing executors, running tasks, etc. It's important to keep in mind that the React SDK is meant to be used with your user's local yagna installation. If you want to build a web app that interacts with the Golem Network without requiring your users to deal with yagna, you should use the [Golem JavaScript SDK](/docs/creators/javascript/quickstarts/quickstart) instead.

## What can I build with this SDK?

The Golem React SDK provides a set of React hooks and components that make it easy to perform common tasks such as:

- Connecting to Yagna - use the [useYagna](/docs/creators/javascript/react/use-yagna) hook to connect display the connection status and reconnect to Yagna if the connection is lost.
- Running tasks on the network - use the [useExecutor](/docs/creators/javascript/react/use-executor) hook to initialize and terminate executors and the [useTask](/docs/creators/javascript/react/use-task) hook to run tasks on the network.
- Listing and handling invoices - use the [useInvoices](/docs/creators/javascript/react/use-invoices) hook to list invoices and the [useHandleInvoice](/docs/creators/javascript/react/use-handle-invoice) hook to handle invoices.

{% docnavigation title="API reference" %}

If you want to learn more about each of the hooks and components provided by the SDK, check out the [API reference](/docs/creators/javascript/react/api-reference-overview).

{% /docnavigation %}

## Example application

To help you get started we have created an example application that uses every hook and component provided by the SDK. You can find the source code for the example app on [GitHub](https://github.com/golemfactory/golem-sdk-react/tree/master/examples/react-with-vite). Feel free to clone the repository and play around with the code. Follow the instructions in the README to run the app locally.

To see the example app in action, you can also visit the [live demo](https://golem-react-showcase.vercel.app/).

## GitHub repository

The source code for the SDK along with an example app is available on [GitHub](https://github.com/golemfactory/golem-sdk-react) and we welcome contributions.

## Reporting issues

If you encounter any issues with the SDK please report them on [GitHub](https://github.com/golemfactory/golem-sdk-react/issues) or [Discord](https://chat.golem.network).

{% docnavigation title="Next steps" %}

To get started with the SDK, check out the [Getting started](/docs/creators/javascript/react/getting-started) guide.

{% /docnavigation %}

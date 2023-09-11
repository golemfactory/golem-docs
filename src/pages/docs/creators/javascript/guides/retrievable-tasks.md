---
description: Introduction to retrievable tasks on Golem Network
title: Retrievable tasks (Job API)
---

# Retrievable tasks (Job API)

## Introduction

The [Task Model](/docs/creators/javascript/guides/task-model) is a great way to get started with Golem Network. It allows you to run tasks on the network in a simple and straightforward way - you just need to call the `run()` method and await the promise. However, it has some limitations. With more complex and time-consuming tasks, you may want to have access to the state, results and/or error messages of the task outside of the function scope. This is where the Job API comes in handy.

## Job API

The Job API is a set of methods that allow you to run tasks on the network and get access to their state, results and error messages. It is based on the Task API, so you can use all the methods that are available in the Task API.

{% alert level="info" %}
To see the Job API in action take a look at [this quickstart](/docs/creators/javascript/quickstarts/retrievable-task). To see how this API is used in a real-world scenario, check out [the express tutorial](/docs/creators/javascript/tutorials/rest-api-with-express)
{% /alert %}

## Storage

By default, the Job API stores all information about each job in an in-memory store. This means that if you stop the script, all the information will be lost. This is not a problem for some use cases, but if you want the information to persist, you should implement your custom `JobStorage` class. You can use any storage you want, as long as it implements the `JobStorage` interface. You can find the interface definition [here](https://github.com/golemfactory/golem-js/blob/master/src/job/storage.ts#L9) and an example implementation [here](https://github.com/golemfactory/golem-js/blob/master/src/job/storage.ts#L14).

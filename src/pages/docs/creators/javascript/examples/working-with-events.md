---
title: Managing Events
description: Learn to receive events to get better control of your Tasks.
pageTitle: Mastering Event Management in Golem SDK JavaScript API
type: Example
---

# JS Task API Examples: working with events

## Introduction

This example will show you available event types and how to subscribe the certain types of events and extract their details.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install libraries.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Working with events

You can use events to react to specific actions. The following example shows how to subscribe to different types of events and extract their details.

In the Task Executor context, you can have two types of events:

- `golemEvents` that are common for all libraries using `golem-js` and
- Task Executor specific events like: `taskStarted` or `taskCompleted`.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/executing-tasks/observing-events.mjs" language="javascript" /%}

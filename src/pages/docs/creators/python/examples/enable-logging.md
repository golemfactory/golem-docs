---
description: Working with results
title: Working with results
---


# JS Task API Examples: working with results

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above

{% /alert %}

## Prerequisites

Yagna service is installed and running with `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/golem-js
```
{% alert level="info" %}

Some of the examples require a simple `worker.mjs` script that can be created with the following command:
```bash
echo console.log("Hello Golem World!"); > worker.mjs
```

{% /alert  %}

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```


## Introduction

For each command that is run, you can obtain a result object.

## How to enable logging?

The logging infrastructure in Golem's high-level API is quite universal and thus somewhat complex, but for most of the cases using the `SummaryLogger` will do the job.

{% hint style="info" %}
The `SummaryLogger`is an event listener that listens to all the atomic events and combines them into the more aggregated track of events that is easier to grasp by humans.
{% /hint %}

{% tabs %}
{% tab title="Python" %}
To enable logging to a file we need two things.

```python
enable_default_logger(log_file=args.log_file)
```

**1.** The`enable_default_logger` call which enables the default logger, which:

- outputs to the Requestor application's `stderr` all the log messages with the level `INFO`
- if the `log_file` is specified, outputs to the file specified all the log messages with the level `INFO` and `DEBUG`

**2.** Then in the `Executor`we add:

```python
async with Executor(
    ...
    event_consumer=log_summary(log_event_repr),
    ...
) as executor:
```

Here, the `log_summary` creates `SummaryLogger` instance that is passed as event consumer to the Executor we are creating.
{% /tab %}

{% tab title="JS" %}
To enable logging to a file we need two things:

```javascript
utils.changeLogLevel('debug')
```

This command performs the following:

- Enables debugging into a file. The time-stamped `*.log` files are stored in `/logs` directory.
- All the log messages on the screen are of `info` and `debug` levels.
- All the log messages in `*.log` file are of `info`, `debug`, `warn` and `silly` levels.
- `*.log` file additionally contains string content of all the `stderr` and `stdout` outputs from the Provider. This is what we are looking for.

Then in the `Executor`we need to:

```javascript
new Executor({
    ...
    event_consumer: logUtils.logSummary(),
}),
```

{% /tab %}
{% /tabs %}

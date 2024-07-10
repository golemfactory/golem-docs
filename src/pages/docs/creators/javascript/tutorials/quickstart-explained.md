---
title: Node.js Application Development on Golem Network
description: Learn to create a JavaScript application using the Golem Network with our tutorial where we explain the Quickstart example and steps for setting up Node.js projects and utilizing Task Executors.
pageTitle: Mastering Node.js on Golem Network - Interactive Tutorial for Developers
type: Tutorial
---

# JS Quickstart Explained

## Introduction

This tutorial is based on the same example as [Quickstart](/docs/creators/javascript/quickstarts/quickstart) and includes thorough explanations of the script code.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## Setting up the project

Create a project folder, initialize a Node.js project, and install the JS SDK libraries.

```bash
mkdir try_golem
cd try_golem
npm init
npm install @golem-sdk/golem-js
npm install @golem-sdk/pino-logger
```

## JS script structure

The basic structure of the script:

```js
import { GolemNetwork } from '@golem-sdk/golem-js'
import { pinoPrettyLogger } from '@golem-sdk/pino-logger'
// order definition will be placed here
;(async () => {
  //... Function body in here
})().catch(console.error)
```

Here we do two things:

- import `GolemNetwork` from @golem-sdk/golem-js and `pinoPrettyLogger` from "@golem-sdk/pino-logger" libraries,
- create IIAFE (Immediately Invoked Async Function Expression). It has an async function declaration because `GolemNetwork` provides async methods.

## Utilizing the GolemNetwork instance

The `GolemNetwork` is the main entry point for `golem-js`. We will create a new instance of this object, then use the `.connect()` method before interacting with the network and `.disconnect()` to properly close all dealings.

```js
import { GolemNetwork } from '@golem-sdk/golem-js'

const glm = new GolemNetwork()

try {
  await glm.connect() // Do your work here
} catch (err) {
  // Handle any errors
} finally {
  await glm.disconnect()
}
```

The `GolemNetwork` constructor accepts some parameters:

```js
const glm = new GolemNetwork({
  logger: pinoPrettyLogger({
    level: 'info',
  }),
  api: { key: 'try_golem' },
})
```

- api-key value - a key that will give us access to `yagna` REST API. `yagna` is a service that connects us to the network. In this example, we will use api-key that was generated in the process of [Yagna installation](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors)
- logger instance - we use a special logger that produces logs easier to read and understand when scripts are run in the terminal, without this line a default logger would be used, which is the [debug logger](https://www.npmjs.com/package/debug). 

Once we connect to the network (in reality, connecting to the locally installed `yagna`), we can leverage the API of the `GolemNetwork` object. In this example, we will use `.manyOf()` to acquire computational resources, if we needed a single provider we could alternatively get a `rental` directly from the `GolemNetowk` using the `.oneOf()` method. (Note, there is also a low-level API available, that lets you dive deep into various subdomains within the Golem Network domain space.)

```js
const pool = await glm.manyOf({
  // I want to have a minimum of one machine in the pool, but only a maximum of 3 machines can work at the same time
  poolSize: { min: 1, max: 3 },
  order,
})
```

The `manyOf()` method returns us a pool of `ResourceRental` aggregates. The `ResourceRental` wraps around the details of different entities and processes needed to manage the rental of resources. If you are interested in the details (also accessible from the Golem Network object) and would like to learn more about Agreements, Allocations, Activities, Invoices, DebitNotes, and related conversations required by the protocol please read articles like [this one](/docs/creators/common/requestor-provider-interaction#the-story).

Our pool will consist of a minimum of 1 and a maximum of 3 providers available at the same time. Providers will have their environments defined by the `order`. It is an object that contains information about the environment we want to run on the provider, and potentially, criteria for the provider selection.
In our example, when describing resources needed, we will only indicate the image to be run on a remote node. We will use an image publicly available on the [registry](https://registry.golem.network) portal, therefore it is enough to provide a tag 'golem/alpine:latest' - it indicates an image based on `alpine` distribution. Users can also specify other parameters like the number of threads, memory, or disk size.
For the provider selection, our example precises also the maximum acceptable prices using the `linear` price model. Finally, the `rentHour` defines the maximum duration of the engagements with providers before automatic termination.

```js
const order = {
  demand: {
    workload: { imageTag: 'golem/alpine:latest' },
  },
  market: {
    rentHours: 0.5,
    pricing: {
      model: 'linear',
      maxStartPrice: 0.5,
      maxCpuPerHourPrice: 1.0,
      maxEnvPerHourPrice: 0.5,
    },
  },
}
```

The pool's `.withRental()` method wraps operations on the pool exposing a rental instance. The rental gives us access to the `ExeUnit` - a representation of the execution environment on the provider node. The `ExeUnit` models the commands supported by the runtime. In our example, we will execute a command in the default shell using the `.run()` method. The command: `echo ${exe.provider.name} && cat /proc/cpuinfo | grep 'model name'` is a Linux command that will produce filtered content of the `/proc/cpuinfo` file from the node. Note how we accessed the name of the provider node: the `ExeUnit` instance offers the whole context including the provider's details.

```js
pool.withRental((rental) =>
  rental
    .getExeUnit()
    .then((exe) =>
      exe.run(
        ` echo ${exe.provider.name} && cat /proc/cpuinfo | grep 'model name' `
      )
    )
)
```

The output of the commands executed on the remote node is a `Promise` of a `result` object. Once it is resolved and `fulfilled` it contains the output of the command we run, available as a `stdout` property.

To run the command 5 times, parallelly on the maximum of 3 providers, we utilize the `map()` method and for each `data` array element we will acquire a `rental` and its `exe` to execute the command. We use `allSettled()` to handle all promises from each `exe.run()` and produce the `result` array. Then we can iterate over the `result` and get the actual command outputs (if the command execution succeeded).

```js
const data = [...Array(5).keys()]
const results = await Promise.allSettled(
  data.map((item) =>
    pool.withRental((rental) =>
      rental
        .getExeUnit()
        .then((exe) =>
          exe.run(
            ` echo ${exe.provider.name} && cat /proc/cpuinfo | grep 'model name' `
          )
        )
    )
  )
)
results.forEach((result) => {
  if (result.status === 'fulfilled') {
    console.log('Success', result.value.stdout)
  } else {
    console.log('Failure', result.reason)
  }
})
```

Here there is the whole code:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/mgordel/JST-926/new-quickstart/examples/docs-examples/quickstarts/quickstart/requestor.mjs" language="javascript" /%}

## Summary

We had created the simple requestor script, that ran the same command on a number of remote computers.
To achieve it we had:

- imported `@golem-sdk/golem-js` lib
- utilized Immediately Invoked Async Function Expression
- created GolemNetwork instance
- created a pool of `rental` objects
- acquired `rentals` and accessed related `ExeUnits`, where we ran the command
- finally, we collected the results from the `result` objects and provided them to the user.

In this example, we ran a simple command in a shell on the remote computer. You can run other executable programs in more advanced scenarios. See other examples for other interesting features.

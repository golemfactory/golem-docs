---
description: A minimal example of a functional Golem requestor agent
---

# Task Example 0: Hello World!

!!! info

    This example demonstrates the following Golem features and aspects:
    
    - VM runtime
    - Task execution
    - Retrieving command output from the provider's exe unit


## Prerequisites

This article assumes that you have some basic understanding of Golem application concepts. If you need a refresher, here's a good starting point:


[Golem Application Fundamentals](https://handbook.golem.network/requestor-tutorials/golem-application-fundamentals){ .md-button .md-button--primary }


To follow along and/or experiment with the code in this article, you'll need to have the following set up:

- A local `yagna` node (instructions can be found here: [Requestor development: a quick primer](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development)
- The JS Golem high-level API on your machine (instructions here: [Run first task on Golem](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development/run-first-task-on-golem))

## Requestor Agent Code

Here's the code for the example:

!!! info

    This example uses the standard VM runtime.

```javascript
(async function main() {
  const executor = await TaskExecutor.create("9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae");
  await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
  await executor.end();
})();
```

This is all you need to run a task on Golem!

### How It Works

The following interactions need to occur between the requestor and the provider(s) in order for a task to be completed:

![Sequence diagram of requestor -> provider interactions](/assets/js-tutorial-04.jpeg)

From a high-level perspective, running the above program performs the following steps:

1. Schedule a single task to be executed in the Golem network.
2. Once a suitable provider is found in the market, launch a lightweight VM on that node.
3. Run the requestor's script inside the execution environment once it's ready.
4. Retrieve the result from the provider and display it to the terminal once the script has finished.

In this minimal example, the script consists of a single command: the Linux echo utility. The program returns the string Hello World.

## The `main()` Function

This function is the entry point for the program and performs the following three steps:

1. Create a TaskExecutor instance.
2. Define and execute the Worker function.
3. End the TaskExecutor object.

### Task Executor

A TaskExecutor can be created by passing in the necessary initial parameters, including but not limited to: `package`, `budget`, `subnetTag`, `payment` (which includes `driver` and `network`). One required parameter is the `package`, which can be specified in two ways:

```javascript
const executor = await TaskExecutor.create("9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae"); 
```
Alternatively, you can pass in some optional parameters, as shown below:

```javascript
const executor = await TaskExecutor.create({
  subnetTag: "public",
  payment: { driver: "erc-20", network: "sepolia" },
  package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
});
```

Currently, Golem utilizes a public repository to store both official and community-contributed virtual machine (VM) images. An image that has been uploaded to this repository can be referenced by its hash.

In the code snippets above, the `package` parameter is set to a specific hash, which serves as a payload definition for the providers. This hash refers to a pre-uploaded, minimal image based on Alpine Linux. Instead of passing a hash, you can also pass in a `Package` instance created with the `Package.create` utility class. Currently, only VM ExeUnit Runtime is supported.

!!! info

    If you want to learn more about creating and uploading your own Golem images, check out this article: [Converting a Docker Image into a Golem Image](https://handbook.golem.network/requestor-tutorials/vm-runtime)

### Worker Function

The `executor` API allows you to execute tasks on the Golem network. You can run a simple worker function as follows:

```javascript
await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
```

The worker function passed to `executor.run()` defines the interaction between the requestor node and each provider node computing one or more tasks. This function is called once per provider node with which the requestor node has established an agreement.

The `WorkContext` object provides a simple interface to construct a script that translates directly into commands that interact with the execution unit on the provider's end. Using this object, you can schedule commands such as transferring files and running programs.

In this example, the entire script consists of a single command, `ctx.run`, which instructs the provider's exe unit to run `/bin/sh -c echo "Hello World"`.

!!! warning

    Commands run with `ctx.run` are executed in the `/bin/sh` shell by default. 
    Ensure that the vm image contains this shell, or specify the full binary path or run the command through a shell manually (e.g., `/bin/sh ...`).


Once the worker's promise is resolved, a `Result` object is returned, containing the `stdout` and `stderr` of the specified command.

### Terminating an executor Instance

Finally, you should complete the process by terminating the contracts with the provider and paying all invoices by using the following code:

```js
await executor.end();
```

## Conclusion

That's it for the example! To run it on your local machine, make sure you have a `yagna` node running and set up as a requestor (refer to [Requestor development: a quick primer](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development) for more information). 
Then, run the following command in the directory containing the `hello.js` file:

```
YAGNA_APPKEY={your_appkey_here} node ./hello.js
```

Replace `{your_appkey_here}` with your actual app key. If everything goes well, you should see a log similar to the following:

```
2023-01-23 13:45:49.645+01:00 [yajsapi] info: Agreement proposed to provider 'someone'
2023-01-23 13:45:49.650+01:00 [yajsapi] info: Agreement confirmed by provider 'someone'
2023-01-23 13:45:51.261+01:00 [yajsapi] info: Task 1 sent to provider 'someone' Data: undefined
Hello World

2023-01-23 13:45:53.992+01:00 [yajsapi] info: Task 1 computed by provider 'someone'. Data: undefined
2023-01-23 13:45:56.537+01:00 [yajsapi] info: Invoice accepted from 'someone'
2023-01-23 13:45:59.408+01:00 [yajsapi] info: Computation finished in 7.2s
```

The output "Hello World" is the result received from executing the `echo "Hello World"` command inside the provider's exe unit.

!!! example

    Ready for a more complex scenario? Take a look at the next article which implements a slightly more complicated case.

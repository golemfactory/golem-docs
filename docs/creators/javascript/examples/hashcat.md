---
description: List of actions needed to execute the hashcat example.
---

# Task Example 2: Hashcat on Golem

This section outlines the steps required to run the hashcat password-recovery example in Golem.

## Overview

This example demonstrates the following Golem features:

* VM runtime
* Task execution
* Parallel task execution across multiple providers
* Submitting multiple task sequences to a single Golem engine
* Setting timeouts for commands executed on a provider
* Reading output from commands executed on a provider
* File transfer to/from a provider's exe unit

### What is hashcat?

[Hashcat](https://hashcat.net/hashcat/) is a command-line utility that cracks unknown passwords from their known hashes. Hashcat supports 320 hashing algorithms and 5 different attack types, but for this example, we'll use only the "phpass" algorithm and a simple brute-force attack.

Phpass is used as a hashing method by popular web frameworks such as WordPress and Drupal. These frameworks run PHP-based websites.

### Problem Definition

In this example, we have a hash obtained from an unknown password processed using the "phpass" algorithm. The password hash is stored in a file named `in.hash` and its contents are:

```
$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/
```

We also know the password mask:

```
?a?a?a
```

This means the password consists of three alphanumeric characters. To find the password that matches the given hash and mask, we run the following command:

```
hashcat -a 3 -m 400 in.hash ?a?a?a
```

The parameters used in the command are:

* `-a 3` specifies a brute-force attack. There are 5 other types of attacks.
* `-m 400` specifies the phpass algorithm. There are 320 other algorithms supported by hashcat.
* `in.hash` is the name of the file that contains the hashed password.
* `?a?a?a` is the mask to use.

For more information on hashcat arguments, see the complete reference: [https://hashcat.net/wiki/doku.php?id=hashcat](https://hashcat.net/wiki/doku.php?id=hashcat)

As a result of the above command, the file `hashcat.potfile` will be created and contain the following content:

```
$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/:pas
```

where `pas` is the password that was previously unknown but has now been retrieved by hashcat.

### Parallel Processing with hashcat

To speed up hashcat, you can use the concept of the keyspace to process in parallel. Here's an example on how to determine the size of the keyspace for a given mask and algorithm:

```
hashcat --keyspace -a 3 ?a?a?a -m 400
```

The output of the above command will be the size of the keyspace, for example: `9025`.

Next, you can divide the keyspace into smaller fragments and process each fragment in parallel with separate workers. Here's an example for dividing the keyspace into 3 parts:

* `0..3008`
* `3009..6016`
* `6017..9025`

To process each fragment, you can use the `--skip` and `--limit` options:

```
hashcat -a 3 -m 400 in.hash --skip 3009 --limit 6016  ?a?a?a
```

The above command will process the `3009..6016` fragment, and any results in that range will be written to the `hashcat.potfile`.

## Before we begin

Before diving into the example, make sure you have the necessary environment set up. Here's what you need:

* Install `yagna` daemon on your machine
* Familiarize yourself with the setup of the environment required to run Python high-level API examples by going through the [Flash Tutorial of Requestor Development](../../../requestor-tutorials/flash-tutorial-of-requestor-development/)
* Set the `YAGNA_APPKEY` environment variable to the value of the generated app key
* Initialize payment with `yagna payment init -sender` (Note: payment needs to be initialized after each launch of `yagna service run`)
* Activate the virtual python environment for the tutorial
* Install dependencies and clone the `yajsapi` repository (which contains the tutorial examples)

Then, navigate to `examples/yacat`:

```
cd examples/yacat
```

In the `examples/yacat` directory, you'll find two files that will be used in this example:

* `yacat.Dockerfile` - the Docker file used for the definition of the provider's container images
* `yacat.ts` - requestor agent's entry point which deals with orchestration of the container runs.

!!! success

    Please note that the following should be in place before starting the example:
    
    * The `yagna` daemon is running in the background
    * The virtual python environment for the tutorial is activated
    * Dependencies are installed


## Let's get to work - the Dockerfile

Golem is designed to use existing Docker images, so you can use any existing docker image that meets your needs. However, if a suitable image is not available on the [docker hub](https://hub.docker.com/), you will have to create a custom one.

### Adjusting the Dockerfile

For the `yacat` example, we're going to use an off-the-shelf hashcat image (`dizcza/docker-hashcat:intel-cpu)` and modify it slightly for Golem. The resultant Dockerfile is included in the example as `yacat.Dockerfile`:

```Dockerfile
FROM dizcza/docker-hashcat:intel-cpu

VOLUME /golem/input /golem/output
WORKDIR /golem/entrypoint
```

The only important aspect to consider while preparing the Dockerfile is to define a place in the container's file system that will be used for file transfer. For this example, the volume is defined as `/golem/input` and `/golem/output` for input and output file transfer respectively. The requestor agent code will need to use these locations as directories for file transfers.

```Dockerfile
VOLUME /golem/input /golem/output
```

This makes `/golem/input` and `/golem/output` locations we will use for our input/output file transfer. For the requestor agent code, which we are going to discuss in the next chapter, we need to know the volume (or volumes) name(s) and use it as a directory for the file transfers.

![](/assets/js-tutorial-03.jpeg)

It's worth noting that all changes in other (non-VOLUME mounted) container directories are kept in RAM. Only the contents of the VOLUME directories are stored in the provider's OS file system. This means that if your provider-side code creates large temporary files, you should store them in the directory defined as a VOLUME to avoid running out of RAM.

Keep in mind that tasks within a single worker instance run within the same virtual machine and share the contents of a VOLUME. This means that files in the VOLUME left over from one task execution will be present in a subsequent run as long as the execution takes place on the same provider and thus, the same file system.

Docker's `ENTRYPOINT` statement is ignored and replaced by the exeunit's own entrypoint, so you cannot rely on this feature in your Dockerfiles. You will need to pass the relevant commands from the requestor agent as part of the execution script after the image is deployed and started on the provider's VM.

### Creating image hash

To build the Docker image, you can use the following commands:

```shell
docker build . -f yacat.Dockerfile -t yacat
pip install gvmkit-build
gvmkit-build yacat
gvmkit-build yacat --push
```

The last command will provide you with a `gvmkit` image hash, which will identify your image when your Golem application is run.

```
2c17589f1651baff9b82aa431850e296455777be265c2c5446c902e9
```

!!! info

    Make sure to save this hash as you will need it in the requestor agent code.

The details of docker image conversion are described here:

[Converting an image from Docker to Golem GVMI](https://handbook.golem.network/requestor-tutorials/vm-runtime/convert-a-docker-image-into-a-golem-image){ .md-button .md-button--primary }

## The requestor agent code

The following is the core of our hashcat example - the requestor agent.

!!! info

    The critical parts of the code will be described in the following sections of the tutorial. For now, you can simply scan over the code.

```typescript
import { TaskExecutor } from "yajsapi";
import { program } from "commander";
async function main(args) {
  const executor = await TaskExecutor.create({
    package: "055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
    maxParallelTasks: args.numberOfProviders,
    budget: 10,
    subnetTag: args.subnetTag,
    payment: { driver: args.paymentDriver, network: args.paymentNetwork },
    logLevel: args.debug ? "debug" : "info",
  });
  const keyspace = await executor.run<number>(async (ctx) => {
    const result = await ctx.run(`hashcat --keyspace -a 3 ${args.mask} -m 400`);
    return parseInt(result.stdout || "");
  });

  if (!keyspace) throw new Error(`Cannot calculate keyspace`);
  console.log(`Keyspace size computed. Keyspace size = ${keyspace}.`);
  const step = Math.floor(keyspace / args.numberOfProviders + 1);
  const range = [...Array(Math.floor(keyspace / step)).keys()].map((i) => i + step);

  const results = executor.map(range, async (ctx, skip = 0) => {
    const results = await ctx
            .beginBatch()
            .run(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${skip + step} -o pass.potfile`)
            .run("cat pass.potfile")
            .end()
            .catch((err) => console.error(err));
    if (!results?.[1]?.stdout) return false;
    return results?.[1]?.stdout.split(":")[1];
  });

  let password = "";
  for await (const result of results) {
    if (result) {
      password = result;
      break;
    }
  }
  if (!password) console.log("No password found");
  else console.log(`Password found: ${password}`);
  await executor.end();
}

program
  .option("--subnet-tag <subnet>", "set subnet name, for example 'public'")
  .option("--payment-driver, --driver <driver>", "payment driver name, for example 'erc20'")
  .option("--payment-network, --network <network>", "network name, for example 'rinkeby'")
  .option("-d, --debug", "output extra debugging")
  .option("--number-of-providers <number_of_providers>", "number of providers", (value) => parseInt(value), 3)
  .option("--mask <mask>")
  .requiredOption("--hash <hash>");
program.parse();
const options = program.opts();
main(options).catch((e) => console.error(e));

```

### So what is happening here?

We start with a high-level overview of the steps performed by the requestor agent. In the [next section](hashcat.md#how-does-the-code-work) we'll dig into the implementation details.

#### Compute keyspace size

The first step in the computation is to **check the keyspace size**. For this, we only need to execute `hashcat` with `--keyspace` and read the command's output.

#### Define the tasks

Knowing the keyspace size, we define the list of **tasks** to execute on providers. We can run `hashcat` on a fragment of the whole keyspace, using the `--skip` and `--limit` parameters, as described in a previous section. In this step, for each such fragment, we define a separate task.

We also determine the number of providers required to execute the tasks in parallel. In this example, we decided that the number of providers contracted for the work will be equal to the number of tasks divided by two. This does not mean that every provider will get exactly two tasks, even if the overall number of tasks is even, because:

!!! info

    When a provider is ready to execute a task, it takes up the next task from a common pool of tasks, so a fast provider may end up executing more tasks than a slow one.

#### Perform mask attack

Next, we can start looking for the password using multiple **workers**, executing the tasks on multiple providers simultaneously.

For each worker, we perform the following steps:

1. Execute `hashcat` with proper `--skip` and `--limit` values on the provider.
2. Get the `hashcat_{skip}.potfile` from the provider to the requestor.
3. Parse the result from the `.potfile`.

### How does the code work?

#### The argument parser

We use the `commander` library to pass arguments such as `--mask` and `--max-workers`. This library will print a nice argument description and an example invocation when we run the requestor script with `--help`.

#### The `main` function

The `main` function contains the main body of the requestor app. Its sole argument, `args`, contains information on the command-line arguments read by the argument parser.

```typescript
async function main(args)
```

**Task Executor and package definition**

To execute our tasks on the Golem network, we need to create a `TaskExecutor` instance.

```typescript
const executor = await TaskExecutor.create({
    package: "055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
    minMemGib: 1,
    minStorageGib: 1,
    maxParallelTasks: args.numberOfProviders,
    budget: 10,
    subnetTag: args.subnetTag,
    payment: { driver: args.paymentDriver, network: args.paymentNetwork },
    logLevel: args.debug ? "debug" : "info",
  });
```

The `package` parameter is required and points to the image that we want the containers to run. In this example, the hash received from `gvmkit-build` is used.

The other parameters are:

* `minMemGib`: minimum memory requirement for the provider
* `minStorageGib`: minimum storage requirement for the provider
* `maxParallelTasks`: the maximum number of parallel tasks
* `budget`: the maximum spendings for executing all the tasks with Golem
* `subnetTag`: the providers subnet to be used; leave the default value unless you want to run your own network of test providers
* `payment.driver` and `payment.network`: the Ethereum blockchain and payment driver, respectively; use the mainnet network for real-live tasks to be able to use all the providers in the Golem network
* `logLevel`: the level of logging for the default logger

**First call to `executor.run`: Computing keyspace size**

With the `TaskExecutor` instance running, we can now send tasks to the providers using the run method:

```typescript
  const keyspace = await executor.run<number>(async (ctx) => {
  const result = await ctx.run(`hashcat --keyspace -a 3 ${args.mask} -m 400`);
  return parseInt(result.stdout || "");
});
```

This call tells the `TaskExecutor` to execute a single task defined by the worker function `async (ctx) =>`. The `ctx` object allows us to run single or batch commands on the provider side.

The keyspace size can be obtained from the `result` attribute of the executed command.

**Second call to `executor.map`: Performing the attack**

Next, we can split the whole `keyspace` into chunks based on the maximum number of providers and prepare a range of computations for each task:

```typescript
  const step = Math.floor(keyspace / args.numberOfProviders + 1);
  const range = [...Array(Math.floor(keyspace / step)).keys()].map((i) => i + step);
```

With the `range`, we use the `executor.map` method to run the split tasks simultaneously on the Golem Network:

```typescript
const results = executor.map(range, async (ctx, skip = 0) => {
    const results = await ctx
      .beginBatch()
      .run(`hashcat -a 3 -m 400 '${args.hash}' '${args.mask}' --skip=${skip} --limit=${skip + step} -o pass.potfile`)
      .run("cat pass.potfile")
      .end()
      .catch((err) => console.error(err));
    if (!results?.[1]?.stdout) return false;
    return results?.[1]?.stdout.split(":")[1];
  });
```

The `results` object is type of `AsyncIterable`, that can be iterated with the `for await` statement:

```typescript
for await (const result of results) {
    if (result) {
      password = result;
      break;
    }
  }
```

### Example run

To demonstrate the usage of `yacat.ts` script, let's consider a scenario where you have a hash `$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/` and a mask `?a?a?a`. The goal is to crack the password for the given hash.

To run `yacat.ts` and recover the password, follow the below steps:

1. Navigate to the directory `/examples/yacat`
2. Run the following command in the terminal:

```sh
ts-node yacat.ts  --mask '?a?a?a' --hash '$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/'
```

This will start the cracking process and should return the password as "pas".

!!! danger

    It's important to note that in order to run `.ts` files directly, you must have `ts-node` installed. 
    Alternatively, you can compile the `.ts` file to `.js` using `tsc` and run the `.js` file with the standard Node.js interpreter.

In case you want to know about the optional parameters supported by `yacat.ts`, run the following command in the terminal:

```sh
ts-node yacat.ts --help
```

This will display the help message with information on all the optional parameters supported by `yacat.ts`.

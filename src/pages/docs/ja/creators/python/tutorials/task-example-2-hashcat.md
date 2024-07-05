---
title: Running Hashcat on Golem Network - Password Recovery Tutorial
pageTitle: Golem Task API Tutorial - Secure Password Recovery with Hashcat
description: Discover how to use Hashcat for effective password recovery by leveraging Golem's parallel task execution capabilities in this comprehensive tutorial.
type: Tutorial
---

# Task Example 2: Hashcat on Golem

## Introduction

This section contains steps you need to execute in order to run our hashcat password-recovery example. As this tutorial is designed to inspire you to create your own Golem applications, we will explain all the needed details of Golem application implementation.

This example illustrates following Golem features & aspects:

- VM runtime
- Task execution
- Parallel task execution on multiple provider
- Submitting multiple task sequences to a single `Golem` engine
- Setting timeout for commands run on a provider
- Reading output from commands run on a provider
- File transfer to/from provider's exe unit

## What is hashcat?

[_Hashcat_](https://hashcat.net/hashcat/) is a command-line utility that finds unknown passwords from their known hashes.

{% alert level="info" %}
Hashcat is a very powerful tool. It supports 320 hashing algorithms and 5 different attack types. We will use only the "phpass" algorithm and a simple brute-force attack.

{% /alert %}

First, we need to precisely define the "finding a password" problem. Let's assume we have a hash obtained from processing of an unknown password using the "phpass" algorithm.

{% alert level="info" %}
Phpass is used as a hashing method by e.g. WordPress and Drupal. Those are free/open-source web frameworks used to run PHP-based websites.
{% /alert %}

The password hash is stored in `in.hash` file and the hash is:

```
$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/
```

We're going to assume that we know the password mask. It is:

```
?a?a?a
```

That means that the password consists of 3 alphanumeric characters.

Now we can try to find the password, matching the given hash and mask, by calling:

```
hashcat -a 3 -m 400 in.hash ?a?a?a
```

The parameters are:

- `a 3` - use a brute-force attack. There are 5 other types of attacks.
- `m 400` - password is hashed with the phpass algorithm. There are 320 other alghoritms supported by hashcat.
- `in.hash` - name of a file containing the hashed password
- `?a?a?a` - mask to use

{% alert level="info" %}
The complete hashcat arguments reference is available here: [https://hashcat.net/wiki/doku.php?id=hashcat](https://hashcat.net/wiki/doku.php?id=hashcat)
{% /alert %}

As a result of the above call, the `hashcat.potfile` will be created with the following content:

```
$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/:pas
```

where `pas` is the password which had been unknown to us and was just retrieved by hashcat.

{% alert level="info" %}
Obviously, for longer passwords, the presented usage of hashcat could be problematic as it would require a lot more processing time (e.g. days or even months) to find a password with such a naive method.
{% /alert %}

To showcase how a similar problem can be resolved faster, we created the Golem version of hashcat. It uses the computing power of many providers at the same time. Parallelized password recovery can be much quicker - instead of days or months, this Golem version is likely to solve the problem in hours.

## Doings things in parallel

How to make hashcat work in parallel? The answer is quite simple: the keyspace concept. We can ask the tool to tell us what the size of the possibility space (keyspace) is for the given mask and algorithm:

```
hashcat --keyspace -a 3 ?a?a?a -m 400
```

As a result, we will receive an answer in the standard output. In our case it is `9025`.

Now we can divide the `0..9025` space into separate fragments. Assuming we want to allow our app to use up to 3 separate workers (which means up to 3 providers), those parts would be:

- `0..3008`
- `3009..6016`
- `6017..9025`

To process only the part of the whole `0..9025` space, we use the `--skip` and `--limit` options:

```
hashcat -a 3 -m 400 in.hash --skip 3009 --limit 6016  ?a?a?a
```

The above call will process the `3009..6016` part. If there is any result in that range it will be written to the `hashcat.potfile`.

## Before we begin

In order to develop applications for the Golem network, you need to install yagna daemon on your machine. We're going to assume you're already familiar with the setup of the environment required to run Python high-level API examples. If you're not, please make sure you proceed through our [Quickstart](/docs/ja/creators/python/quickstarts/run-first-task-on-golem) to get up to speed.

Once you're done with the tutorial above, make sure you're again in yapapi's main directory and move to:

```
cd examples/yacat
```

{% alert level="success" %}

So now, we're going to assume that:

- The `yagna` deamon is running in the background.
- The `YAGNA_APPKEY` environment variable is set to the value of the generated app key.
- The payment is initialized with `yagna payment init -sender` (please keep in mind that it needs initialization after each launch of `yagna service run`).
- The virtual python environment for our tutorial is activated.
- Dependencies are installed and the `yapapi` repository (containing the tutorial examples) is cloned.
- In your current directory (`examples/yacat`) there are two files that will be used and discussed in this example:
  - `yacat.Dockerfile` - the Docker file used for the definition of the provider's container images
  - `yacat.py` - requestor agent's entry point which deals with orchestration of the container runs.

{% /alert %}

## Let's get to work - the Dockerfile

Let's start with the Dockerfile (`yacat.Dockerfile`). Do we always need a dedicated Dockerfile for our own Golem application?

{% alert level="info" %}
Golem is designed to use existing Docker images, so you can use any existing docker image. There are no Golem-specific conditions that need to be met by the image.
{% /alert %}

If there is (for example on the [docker hub](https://hub.docker.com/)) no docker image that you need, you will have to create a custom one.

For the yacat example we're going to use an off-the-shelf hashcat image (`dizcza/docker-hashcat:intel-cpu)` and just slightly modify it for Golem. Resultant Dockerfile is included in the example as `yacat.Dockerfile`:

```
FROM dizcza/docker-hashcat:intel-cpu

VOLUME /golem/input /golem/output
WORKDIR /golem/entrypoint
```

{% alert level="warning" %}
As the latest docker image tagged 'dizcza/docker-hashcat:intel-cpu' takes significantly more disk space, you might encounter technical issues with building this Docker image. In such case, please skip this section and use the Golem image hash provided here: '2c17589f1651baff9b82aa431850e296455777be265c2c5446c902e9'.
{% /alert %}

As Golem does not need any specific elements in the Dockerfile,`yacat.Dockerfile`is more or less a standard Dockerfile.

### VOLUME: the input/output

The one thing we need to remember while preparing the Dockerfile is to define a place (or places) in the container file system that will be used for the file transfer. We are going to use input (from requestor to the provider) and output (from provider to the requestor) file transfers here.

The volume is defined in the last line of the above Dockerfile:

```
VOLUME /golem/input /golem/output
```

This makes `/golem/input` and `/golem/output` locations we will use for our input/output file transfer. For the requestor agent code, which we are going to discuss in the next chapter, we need to know the volume (or volumes) name(s) and use it as a directory for the file transfers.

![Requestor to VM communication](/requestor-vm-comms.jpg)

{% alert level="info" %}
On the provider side, all the content of the VOLUME directories is stored in the provider's os file system.

All the changes in other (non VOLUME mounted) container directories content are kept in RAM. The rest of the VM image file system (not changed, non VOLUME mounted) content is stored as VM image in the provider's os file system.
{% /alert %}

{% alert level="danger" %}
Please mind that tasks within a single worker instance - so effectively part of the same activity on a given provider node - run within the same virtual machine and share the contents of a VOLUME between each other.

That means that as long as the execution takes place on the same provider, and thus, on the same filesystem, files in the VOLUME left over from one task execution will be present in a subsequent run.
{% /alert %}

{% alert level="warning" %}
If your provider-side code creates large temporary files, you should store them in the directory defined as VOLUME. Otherwise, the large files will be stored in RAM. RAM usually has a capacity limit much lower than disk space.
{% /alert %}

### Important note about Docker's ENTRYPOINT

Because of how Golem's VM execution unit works, the Docker's usual `ENTRYPOINT` statement present in the Dockerfiles is effectively ignored and replaced with the exeunit's own entrypoint.

The net effect for you, the developer, is that - at least for the time being - you cannot rely on that feature in your Dockerfiles. Instead, you can pass the relevant commands from the requestor agent as part of the execution script after the image is deployed and started on provider's VM. This will be shown in the next step of this tutorial.

### Build process

Now we may proceed with a regular Docker build, using `yacat.Dockerfile`:

```python
docker build . -f yacat.Dockerfile -t yacat
```

As Golem cannot currently use raw docker images and uses its own, optimized `gvmkit` image format, we have to convert our Docker image the following way:

```python
pip install gvmkit-build
gvmkit-build yacat
gvmkit-build yacat --push
```

The important fact is that the last of the above commands, will provide us with a `gvmkit` image hash, that looks like this:

```python
2c17589f1651baff9b82aa431850e296455777be265c2c5446c902e9
```

{% alert level="info" %}
This hash will identify our image when our Golem application is run. Please copy and save it somewhere as in the requestor agent code, we will need to pass it to the `Engine` in order to have providers use the correct image for the container instances.
{% /alert %}

The details of docker image conversion are described [here](/docs/ja/creators/tools/gvmkit/converting-docker-image-to-golem-format).

## The requestor agent code

Let's look at the core of our hashcat example - the requestor agent. Please check the `yacat.py` file below.

{% alert level="info" %}
The critical fragments of `yacat.py` will be described in the following sections of the tutorial so now, you can just do a quick scan over the big code block below.
{% /alert %}

```python
#!/usr/bin/env python3
import argparse
import asyncio
from datetime import datetime, timedelta
import math
from pathlib import Path
import sys
from tempfile import gettempdir
from typing import AsyncIterable, List, Optional

from yapapi import Golem, Task, WorkContext
from yapapi.events import CommandExecuted
from yapapi.payload import vm
from yapapi.rest.activity import CommandExecutionError

examples_dir = Path(__file__).resolve().parent.parent
sys.path.append(str(examples_dir))

from utils import (
    build_parser,
    TEXT_COLOR_CYAN,
    TEXT_COLOR_DEFAULT,
    TEXT_COLOR_GREEN,
    TEXT_COLOR_RED,
    TEXT_COLOR_YELLOW,
    print_env_info,
    run_golem_example,
)

HASHCAT_ATTACK_MODE = 3  # stands for mask attack, hashcat -a option
KEYSPACE_OUTPUT_PATH = Path("/golem/output/keyspace")

# Ideally, this value should depend on the chunk size
MASK_ATTACK_TIMEOUT: timedelta = timedelta(minutes=30)
KEYSPACE_TIMEOUT: timedelta = timedelta(minutes=10)

arg_parser = build_parser("Run a hashcat attack (mask mode) on Golem network.")
arg_parser.epilog = (
    "Example invocation: ./yacat.py --mask '?a?a?a' --hash '$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/'"
)
arg_parser.add_argument("--hash", type=str, help="Target hash to be cracked", required=True)
arg_parser.add_argument(
    "--mask",
    type=str,
    help="Hashcat mask to be used for the attack. Example: a value of '?a?a?a' will "
    "try all 3-character combinations, where each character is mixalpha-numeric "
    "(lower and upper-case letters + digits) or a special character",
    required=True,
)
arg_parser.add_argument(
    "--chunk-size",  # affects skip and limit hashcat parameters
    type=int,
    help="Limit for the number of words to be checked as part of a single activity",
    default=4096,
)
arg_parser.add_argument(
    "--hash-type",
    type=int,
    help="Type of hashing algorithm to use (hashcat -m option). Default: 400 (phpass)",
    default=400,
)
arg_parser.add_argument(
    "--max-workers",
    type=int,
    help="The maximum number of nodes we want to perform the attack on (default is dynamic)",
    default=None,
)

# Container object for parsed arguments
args = argparse.Namespace()


async def compute_keyspace(context: WorkContext, tasks: AsyncIterable[Task]):
    """Worker script which computes the size of the keyspace for the mask attack.

    This function is used as the `worker` parameter to `Golem#execute_tasks`.
    It represents a sequence of commands to be executed on a remote provider node.
    """
    async for task in tasks:
        cmd = f"hashcat --keyspace " f"-a {HASHCAT_ATTACK_MODE} -m {args.hash_type} {args.mask}"
        s = context.new_script(timeout=KEYSPACE_TIMEOUT)
        s.run("/bin/bash", "-c", cmd)

        try:
            future_result = yield s

            # each item is the result of a single command on the provider (including setup commands)
            result: List[CommandExecuted] = await future_result
            # we take the last item since it's the last command that was executed on the provider
            cmd_result: CommandExecuted = result[-1]

            keyspace = int(cmd_result.stdout)
            task.accept_result(result=keyspace)
        except CommandExecutionError as e:
            raise RuntimeError(f"Failed to compute attack keyspace: {e}")


async def perform_mask_attack(ctx: WorkContext, tasks: AsyncIterable[Task]):
    """Worker script which performs a hashcat mask attack against a target hash.

    This function is used as the `worker` parameter to `Golem#execute_tasks`.
    It represents a sequence of commands to be executed on a remote provider node.
    """
    async for task in tasks:
        skip = task.data
        limit = skip + args.chunk_size

        output_name = f"yacat_{skip}.potfile"
        worker_output_path = f"/golem/output/{output_name}"

        script = ctx.new_script(timeout=MASK_ATTACK_TIMEOUT)
        script.run(f"/bin/sh", "-c", _make_attack_command(skip, limit, worker_output_path))
        try:
            output_file = Path(gettempdir()) / output_name
            script.download_file(worker_output_path, str(output_file))

            yield script

            with output_file.open() as f:
                result = f.readline()
                task.accept_result(result)
        finally:
            output_file.unlink()


def _make_attack_command(skip: int, limit: int, output_path: str) -> str:
    return (
        f"touch {output_path}; "
        f"hashcat -a {HASHCAT_ATTACK_MODE} -m {args.hash_type} "
        f"--self-test-disable --potfile-disable "
        f"--skip={skip} --limit={limit} -o {output_path} "
        f"'{args.hash}' '{args.mask}' || true"
    )


def _parse_result(potfile_line: str) -> Optional[str]:
    """Helper function which parses a single .potfile line and returns the password part.

    Hashcat uses its .potfile format to report results. In this format, each line consists of the
    hash and its matching word, separated with a colon (e.g. `asdf1234:password`).
    """
    if potfile_line:
        return potfile_line.split(":")[-1].strip()
    return None


async def main(args):
    package = await vm.repo(
        image_hash="055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
        min_mem_gib=0.5,
        min_storage_gib=2.0,
    )

    async with Golem(
        budget=10.0,
        subnet_tag=args.subnet_tag,
        payment_driver=args.payment_driver,
        payment_network=args.payment_network,
    ) as golem:
        print_env_info(golem)

        start_time = datetime.now()

        completed = golem.execute_tasks(
            compute_keyspace,
            [Task(data="compute_keyspace")],
            payload=package,
            max_workers=1,
            timeout=KEYSPACE_TIMEOUT,
        )

        keyspace = 0
        async for task in completed:
            keyspace = task.result

        print(
            f"{TEXT_COLOR_CYAN}"
            f"Task computed: keyspace size count. The keyspace size is {keyspace}"
            f"{TEXT_COLOR_DEFAULT}"
        )

        data = [Task(data=c) for c in range(0, keyspace, args.chunk_size)]
        max_workers = args.max_workers or math.ceil(keyspace / args.chunk_size) // 2

        completed = golem.execute_tasks(
            perform_mask_attack,
            data,
            payload=package,
            max_workers=max_workers,
            timeout=MASK_ATTACK_TIMEOUT,
        )

        password = None

        async for task in completed:
            print(
                f"{TEXT_COLOR_CYAN}Task computed: {task}, result: {task.result}{TEXT_COLOR_DEFAULT}"
            )

            result = _parse_result(task.result)
            if result:
                password = result

        if password:
            print(f"{TEXT_COLOR_GREEN}Password found: {password}{TEXT_COLOR_DEFAULT}")
        else:
            print(f"{TEXT_COLOR_RED}No password found{TEXT_COLOR_DEFAULT}")

        print(f"{TEXT_COLOR_CYAN}Total time: {datetime.now() - start_time}{TEXT_COLOR_DEFAULT}")


if __name__ == "__main__":
    args = arg_parser.parse_args()
    run_golem_example(main(args), log_file=args.log_file)
```

## So what is happening here?

We start with a high-level overview of the steps performed by the requestor agent. In the [next section](/docs/ja/creators/python/tutorials/task-example-2-hashcat#how-does-the-code-work) we'll dig into the implementation details.

### Compute keyspace size

The first step in the computation is to **check the keyspace size**. For this we only need to execute `hashcat` with `--keyspace`, as show in the section [Doing things in parallel](/docs/ja/creators/python/tutorials/task-example-2-hashcat#doings-things-in-parallel) and read that command's output.

### Define the tasks

Knowing the keyspace size we define the list of **tasks** to execute on providers. Recall from the section [Doing things in parallel](/docs/ja/creators/python/tutorials/task-example-2-hashcat#doings-things-in-parallel) that we can run `hashcat` on a fragment of the whole keyspace, using the `--skip` and `--limit` parameters. In this step for each such fragment we define a separate task.

Knowing the number of tasks we can also determine the number of providers required to execute them in parallel. In this example we decided that the number of providers contracted for the work will be equal to the number of tasks divided by two. This does not necessarily mean that every provider will get exactly two tasks, even if the overall number of tasks is even, because:

{% alert level="info" %}
When a provider is ready to execute a task, it takes up the next task from a common pool of tasks, so a fast provider may end up executing more tasks than a slow one.
{% /alert %}

### Perform mask attack

Next, we can start looking for the password using multiple **workers**, executing the tasks on multiple providers at the same time.

In order to look for passwords in the given keyspace range, for each of the workers employed to perform our job, we are executing the following steps:

- Execute`hashcat` with proper `--skip` and `--limit` values on the provider
- Get the `hashcat_{skip}.potfile` from the provider to the requestor
- Parse the result from the `.potfile`

![hashcat example communication](/tutorial-03.jpg)

## How does the code work?

### The argument parser

The first big chunk of code, after imports and constants, is the definition of the argument parser that uses the `argparse` module for Python's standard library. The parser will allow us to pass arguments such as `--mask` and `--max-workers`, and it will print a nice argument description and an example invocation when we run the requestor script with `--help`.

### The `main` function

Let's now jump to the `main` function which contains the main body of the requestor app. Its sole argument, `args`, contains information on the command-line arguments read by the argument parser.

```python
async def main(args):
```

#### Package definition

To tell the Golem platform what our requirements against the providers are, we are using the `package` object. The `image_hash` parameter points to the image that we want the containers to run - here we use the hash received from `gvmkit-build`. The `min_mem_gib` and `min_storage_gib` parameters specify memory and storage requirements for the provider.

```python
 package = await vm.repo(
     image_hash="055911c811e56da4d75ffc928361a78ed13077933ffa8320fb1ec2db",
     min_mem_gib=0.5,
     min_storage_gib=2.0,
 )
```

#### Golem engine

To run our tasks on the Golem network we need to create a `Golem` instance.

```python
async with Golem(
    budget=10.0,
    subnet_tag=args.subnet_tag,
    payment_driver=args.payment_driver,
    payment_network=args.payment_network,
) as golem:
```

The arguments are as follows:

- `budget`defines maximal spendings for executing all the tasks with `Golem`
- `subnet_tag` specifies the providers subnet to be used; it's best to leave the default value in place unless you mean to run your own network of test providers to test the app against,
- next are the `driver` and `network` parameters that select the Ethereum blockchain and the payment driver for you; for example, you would not use the mainnet network for tests but you'll probably want to run the real-live tasks on the mainnet to be able to use all the providers that participate in the Golem network.

#### First call to `execute_tasks`: Computing keyspace size

With `Golem` instance running we may proceed with sending tasks to providers. For this we use the `execute_tasks` method.

```python
completed = golem.execute_tasks(
    compute_keyspace,
    [Task(data="compute_keyspace")],
    payload=package,
    max_workers=1,
    timeout=KEYSPACE_TIMEOUT,
)
```

This call tells `Golem` to execute a single task `Task(data="compute_keyspace")`. The task's `data` is not really used for keyspace size computation, it will be however printed to the console when the requestor app logs its progress, so we set it to be an informative description of the task.

The other arguments are:

- the **worker** function that tells `Golem` what steps to perform on a provider in order to execute the tasks (in our case, there's only one task); here we pass the `compute_keyspace` function,
- the `package` that we defined before,
- the maximum number of worker instances we'd like to create -- or the maximum number of providers we want the tasks to be distributed to (for executing just one task it makes no sense to request more than one provider, so it's a bit redundant),
- the total `timeout` for executing all tasks.

{% alert level="danger" %}
Due to limitations of the current Golem market implementation, please use `timeout` value between 8 minutes and 3 hours.
{% /alert %}

{% alert level="info" %}
You can also specify the timeout value for the particular provider-side execution batch that is triggered by `ctx.new_script(timeout=...)`.
{% /alert %}

The keyspace size can be read from the `result` attribute of the executed task. We use `async for` loop here to iterate over the completed tasks (even though we expect only one task).

```python
        async for task in completed:
            keyspace = task.result
```

#### Second call to `execute_tasks`: Performing the attack

Now we can split the whole `keyspace` into chunks of size `args.chunk_size`. For each chunk we create a separate `Task`. We've also decided to use the number of providers equal to the number of tasks divided by 2, so we define `max_workers` accordingly:

```python
data = [Task(data=c) for c in range(0, keyspace, args.chunk_size)]
max_workers = args.max_workers or math.ceil(keyspace / args.chunk_size) // 2
```

With the list of tasks prepared, we call `golem.execute_tasks` once more. This time, our worker function is `perform_mask_attack`:

```python
        completed = golem.execute_tasks(
            perform_mask_attack,
            data,
            payload=package,
            max_workers=max_workers,
            timeout=MASK_ATTACK_TIMEOUT,
        )
```

Each completed task will contain `hashcat`'s output for the keyspace chunk represented by the task. We can parse this output using the auxiliary `parse_result` function:

```python
        async for task in completed:
            print(
                f"{TEXT_COLOR_CYAN}Task computed: {task}, result: {task.result}{TEXT_COLOR_DEFAULT}"
            )

            result = _parse_result(task.result)
            if result:
                password = result
```

### Worker functions

With the `main` function covered, let's now have a look at the worker functions `compute_keyspace` and `perform_mask_attack`. Recall that worker functions are passed as arguments to `execute_tasks`, and are called once for each provider on which tasks are executed (more precisely, once for each **activity**, but in a typical scenario, including the current example, each provider executes just one activity).

#### compute_keyspace

The first worker is similar to the one that we've seen in [Hello World!](/docs/ja/creators/python/tutorials/task-example-0-hello) example, but the command we need to run on the provider is not `date` but `hashcat` with appropriate options:

```python
hashcat --keyspace -a {HASHCAT_ATTACK_MODE} -m {args.hash_type} {args.mask}
```

This instructs `hashcat` to compute and print the keyspace size. The following code sends the command to the provider, waits until it completes, and retrieves it's standard output:

```python
    cmd = f"hashcat --keyspace " f"-a {HASHCAT_ATTACK_MODE} -m {args.hash_type} {args.mask}"
    s = context.new_script(timeout=KEYSPACE_TIMEOUT)
    s.run("/bin/bash", "-c", cmd)

    try:
        future_result = yield s

        # each item is the result of a single command on the provider (including setup commands)
        result: List[CommandExecuted] = await future_result
        # we take the last item since it's the last command that was executed on the provider
        cmd_result: CommandExecuted = result[-1]

        keyspace = int(cmd_result.stdout)
        task.accept_result(result=keyspace)
    except CommandExecutionError as e:
        raise RuntimeError(f"Failed to compute attack keyspace: {e}")
```

#### perform_mask_attack

The second worker function, `perform_mask_attack` is more interesting. Unlike `compute_keyspace`, we make use of the `data` attribute that each `task` carries and use it to set `--skip` and `--limit`parameters to `hashcat`:

```python
async for task in tasks:
    skip = task.data
    limit = skip + args.chunk_size

    output_name = f"yacat_{skip}.potfile"
    worker_output_path = f"/golem/output/{output_name}"

    script = ctx.new_script(timeout=MASK_ATTACK_TIMEOUT)
    script.run(f"/bin/sh", "-c", _make_attack_command(skip, limit, worker_output_path))
```

{% alert level="warning" %}
The commands here are passed to an explicitly referenced `/bin/sh` shell. That's because any commands specified within `script.run()` are not, by themselves, run inside any shell.
{% /alert %}

The exact command to be run spans multiple lines so we construct it in a separate function `_make_attack_command` to make the worker code easier to follow. Let's take a look!

```python
def _make_attack_command(skip: int, limit: int, output_path: str) -> str:
    return (
        f"touch {output_path}; "
        f"hashcat -a {HASHCAT_ATTACK_MODE} -m {args.hash_type} "
        f"--self-test-disable --potfile-disable "
        f"--skip={skip} --limit={limit} -o {output_path} "
        f"'{args.hash}' '{args.mask}' || true"
    )
```

Couple of things to note here. The command `touch {output_path}` is there to make sure that the file `{output_path}` exists even if `hashcat` does not write any output (that happens if it does not find any password matching given hash).

The trailing `|| true` is a standard trick to make sure that the exit code from the whole command is always `0`-- `hashcat` returns a non-zero exit code if it fails to find any matching password and it causes the exe unit to report a command error to the requestor.

The option `-o {output_path}` tells `hashcat` to write output to a file. In the worker function we download the contents of this file to a temporary file created on the requestor:

```python
output_file = Path(gettempdir()) / output_name
script.download_file(worker_output_path, str(output_file))
```

The first line of this file (or the empty string) becomes the result of the completed task:

```python
with output_file.open() as f:
    result = f.readline()
    task.accept_result(result)
```

### Running `main` in the event loop

Golem high-level API that we use to interact with the Golem network uses asynchronous programming a lot. The asynchronous execution starting point is the line

```python
loop.run_until_complete(task)
```

which schedules execution of `main(args)` in the event loop. This code resides in the `run_golem_example` function which abstracts some boilerplate necessary to run and handle errors while running the examples but which does little to illustrate interactions with Golem and its high-level API.

{% alert level="success" %}
Now, as we know how `yacat.py` works, let's run it!
{% /alert %}

## Example run

While in the `/examples/yacat` directory, type the following:

```python
python3 yacat.py  --mask '?a?a?a' --hash '$P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/'
```

{% alert level="danger" %}
Please note that on Windows, you need to:

- use `python` instead of `python3`
- not use the quote character in the command

So the windows version is:

```python
python yacat.py ?a?a?a $P$5ZDzPE45CLLhEx/72qt3NehVzwN2Ry/
```

{% /alert %}

The above run should return "pas" as the recovered password.

A more computation-intensive example is:

```python
python3 yacat.py --mask '?a?a?a?a' --hash '$H$5ZDzPE45C.e3TjJ2Qi58Aaozha6cs30' --chunk-size 10000
```

The above command should execute 86 tasks on up to 43 providers and return "ABCD".

`yacat.py` supports a few optional parameters. To get help on those, please type:

```python
python3 yacat.py --help
```

One of the interesting options is to have log output to a file. This can be achieved by adding the following option to the `yacat.py` run:

```python
--log-file LOG_FILE_NAME
```

## Next steps

{% docnavigation title="Next steps" %}

- The complete reference of the Python High-Level API (yapapi) is available here: [Python API reference](https://yapapi.readthedocs.io/en/latest/api.html).

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Service Model](/docs/ja/creators/python/guides/service-model)
- And in case you get stuck or need help, please reach out to us on our [Discord chat](https://chat.golem.network/) and we'll be delighted to help you out :)

{% /docnavigation %}

## Closing words

{% alert level="success" %}
Golem is waiting to serve your applications. Our decentralized - and open to everyone - platform is here (now in alpha).

We did our best to make developing Golem applications super easy.

Now it's time for your move!
{% /alert %}

---
title: Golem Network - Decentralized Hash Cracking Tutorial
pageTitle: Build a Distributed Hash Cracker on Golem Network - A Step-By-Step Guide
description: Master the Golem Network with this tutorial to build a simple, decentralized hash cracker leveraging parallel task execution and VM runtime for efficient dictionary attacks.
type: Tutorial
---

# Task Example 1: Simple hash cracker

## Introduction

This example illustrates following Golem features & aspects:

- VM runtime
- Task execution
  - Parallel task execution
  - Low-level work item timeouts
  - Early exit from task execution
- File transfer to/from Provider exe unit

_This tutorial is the textual counterpart to a workshop originally prepared by Jakub Mazurek, a Software Developer at Golem Factory and presented during the Hello Decentralization conference in February, 2021._

{% youtube link="https://www.youtube.com/watch?v=gWRqu7IvYfk" %}

{% /youtube %}

Jakub's workshop during Hello Decentralization.

Now that we've seen how easy it is to [run a Golem requestor agent](/docs/creators/python/quickstarts/run-first-task-on-golem), then had a look at[ how this stuff works under the hood](/docs/creators/python/guides/application-fundamentals) we can put this knowledge to the test and build a simple Golem app that is a bit more realistic than our [Hello World](/docs/creators/python/tutorials/task-example-0-hello).

{% alert level="info" %}
If you'd rather like to have a more general introduction on the idea behind Golem or would like to learn what components constitute a Golem node and the Golem network, please have a look at [Golem Overview](/docs/golem/overview)

{% /alert %}

## Step 0. What are we building?

The application we'll build and run on Golem will be a very simple, quick-and-dirty, **distributed hash cracker** implemented purely in Python that will perform a dictionary attack on a specific hash that we'd like to decipher.

{% alert level="info" %}
For the sake of clarity for those less versed with the terminology, a short explanation is due.

A [**dictionary attack**](https://en.wikipedia.org/wiki/Dictionary_attack) involves running some (usually known) hashing function on each word from some input dictionary in the hope that one of the resulting hashes will match the one that we're matching against. Getting a match means we have found the original plain text string that's hidden behind that hash.

The string might have been a password or some other secret that's usually stored only in an encrypted (well, technically, hashed) form to prevent someone who got into possession of such a string from being able to read the secret directly.

The only way to recover the original password then would be to perform a brute-force attack against such a hash, using _all_ possible character combinations up until some arbitrary character length. The caveat is that such attacks are usually - and by design - prohibitively expensive computation-time-wise.

Hence, an attacker may try a dictionary attack, constructing hashes out of a limited set of words, assuming that the person who defined the password used some regular word from a dictionary.
{% /alert %}

We'll use this idea mainly because it scales in a very straightforward manner - the input dictionary can be easily sliced and each slice sent to a different provider to be processed simultaneously. That makes it an excellent example of an application that leverages the most fundamental feature of Golem - the ability to distribute computational loads.

We chose it also because we can do it using Python's bundled modules, without depending on any external libraries (apart from `yapapi` - [Golem's high-level API](https://github.com/golemfactory/yapapi) - and its dependencies in the requestor agent, of course).

For your convenience, we're providing some boilerplate code in a Github repository created specifically for the purpose of the original workshop and our piece [here](https://github.com/golemfactory/hash-cracker).

We're going to be using the code from this repository later on in the course of this tutorial.

### Anatomy of a Golem app

To give you a quick glimpse into what a typical Golem application looks like (you can read about this topic at length in our guides [here](/docs/creators/python/guides/application-fundamentals) and [here](/docs/creators/python/guides/task-model)), what you need to know for now is that it consists of two distinct components:

- the **requestor agent** part that runs on your requestor node and is responsible for preparing the tasks for the providers and processing their output,
- the **worker** part that runs within VMs on the provider nodes and performs the actual computations.

### Our simple hash cracker

In our dictionary attack example, the **requestor agent**'s task will be to take the list of words within which we hope to find the one that matches the provided hash and split that list into smaller pieces that will be sent as part of the execution package to the providers.

On the other end, the **worker** part will go through the specific part of the list it received, compute hashes for each word and compare it to the original hash. In case it finds the matching one, it will return the match to the requestor.

Finally, the requestor agent will present the solution to the user.

### Prerequisites

#### Docker

Since we're building the whole app from scratch, that includes preparing the worker code and the VM image that includes it. To prepare such image, we'll need [Docker](https://www.docker.com/products/docker-desktop).

#### Python 3.7+

Our example requires Python 3.7 or higher. You may use [pyenv](https://github.com/pyenv/pyenv) (preferably using [pyenv-installer](https://github.com/pyenv/pyenv-installer)) to install an appropriate Python version without affecting your system.

#### Dependencies

Let's now install the dependencies that will be used throughout the remainder of the tutorial.

We'll start by cloning the example app's repo and checking out the `workshop` branch:

```bash
git clone https://github.com/golemfactory/hash-cracker.git
cd hash-cracker
git checkout workshop
```

{% alert level="info" %}
The`workshop` branch contains a template for the application with some boilerplate filled in for you. If you'd like to take a look at the finished implementation instead, please use the repo's `master` branch.

{% /alert %}

Next, we'll create the virtual environment and install the project's dependencies. In order to do that, please ensure your Python interpreter is the active one in your shell and then go with:

```bash
python3 -m venv cracker-venv
source cracker-venv/bin/activate
pip install -r requirements.txt
```

## Step 1. The worker

Now it's time to get our hands dirty. :)

We'll start with the piece that's going to perform the heavy lifting and, of course, we'll want that to be executed on the providers.

### The boilerplate

When you open the `worker.py` file from the `workshop` branch, you'll see the following boilerplate:

```python
#!/usr/bin/env python3
"""
This file contains the script that will be run on provider nodes executing our task.
It is included in the image built from this project's Dockerfile.
"""

import json
from pathlib import Path
from typing import List

ENCODING = "utf-8"

HASH_PATH = Path("/golem/input/hash.json")
WORDS_PATH = Path("/golem/input/words.json")
RESULT_PATH = Path("/golem/output/result.json")

if __name__ == "__main__":
    result = ""

    with HASH_PATH.open() as f:
        target_hash: str = json.load(f)

    with WORDS_PATH.open() as f:
        words: List[str] = json.load(f)
        # TODO Compare target hash with sha256 of each word

    with RESULT_PATH.open(mode="w", encoding=ENCODING) as f:
        json.dump(result, f)
```

As the comment at the top of this boilerplate mentions, this code is included in the VM image of the app that's run on the provider nodes.

Skipping over the imports at the top, what we have there are a couple of constants - `HASH_PATH`, `WORDS_PATH` and `RESULT_PATH` - those are the paths to the locations _**within the Docker image**_ that contain the hash to be cracked, the slice of the dictionary we want this node to process and finally, the path to the result file - in case a result is found within the processed slice of the dictionary.

The reason these paths refer to the locations within the Docker image and not on your local machine is that this code will run on the virtual machine on the provider node. We'll show you a way to map and transfer them there later on.

Next, we have your standard-issue invocation of a Python context manager for a `Path` object:

```python
    with HASH_PATH.open() as f:
        target_hash: str = json.load(f)
```

which, basically, loads the hash from the JSON-serialized file in the VM's work directory.

Then:

```python
    with WORDS_PATH.open() as f:
        words: List[str] = json.load(f)
```

that does the same with the list of words.

And finally:

```python
    with RESULT_PATH.open(mode="w", encoding=ENCODING) as f:
        json.dump(result, f)
```

which writes the result to the path defined as the output that's going to be transferred back to the requestor.

Of course, if the result is not found in the given slice, it will just pass back an empty string.

### The heavy lifting

Now, let's focus on the part marked with `TODO`:

```python
# TODO Compare target hash with sha256 of each word
```

Let's replace it with code that performs the hashing and comparison:

```python
        for line in words:
            line_bytes = bytes(line.strip(), ENCODING)
            line_hash = sha256(line_bytes).hexdigest()
            if line_hash == target_hash:
                result = line
                break
```

What the above does is:

- it iterates through the lines in input slice of the dictionary,
- converts each of those lines into a UTF-8-encoded string of bytes (`line_bytes` variable),
- then, it computes a SHA-256 hash of those bytes and converts that to a hexadecimal string (`line_hash` variable),
- compares the resultant hex-encoded hash to the hash we're trying to find a match for,
- and finally, if a match is found it saves the corresponding word as the result and finishes processing.

One last thing - since the code uses the `sha256` function from the `hashlib` library (bundled with Python), we need to import it by adding a line to our imports at the top of the file:

```python
from hashlib import sha256
```

{% alert level="success" %}
We're done with our worker code!
{% /alert %}

### The test run

As an option, before we bundle that code into the VM image, we may want to run it locally first.

Here, we're going to test it with a shorter list of words (`data/words-short.json`), which is also included in our example alongside with a sample hash derived from one of the words in that shorter list (`data/hash-short.json`). The hash should match the word `test` from that list.

{% alert level="info" %}
The input list of words (`data/words-short.json`) is a JSON file as this is the format which our `worker.py` script expects. It corresponds to a single slice of the original word list.
{% /alert %}

Before we run our test we need to **temporarily** modify the `worker.py`'s input paths. Let's replace the constants in the beginning of the file to point to our shorter lists:

```python
# HASH_PATH = Path("/golem/input/hash.json")
# WORDS_PATH = Path("/golem/input/words.json")
# RESULT_PATH = Path("/golem/output/result.json")
HASH_PATH = Path("data/hash-short.json")
WORDS_PATH = Path("data/words-short.json")
RESULT_PATH = Path("data/out.json")
```

Now, let's try running the `worker.py` script (needs to be executed from the project's root directory):

```bash
python worker.py
cat data/out.json
```

The result should be: `"test"` which matches the expected password as mentioned above.

{% alert level="warning" %}
Before we proceed, if you have run the above local test, remember to revert that three-line change of constants which point to the file paths.
{% /alert %}

{% alert level="success" %}
Nice! The first step is behind us - we have defined and tested the most basic building block of our first Golem app. :)
{% /alert %}

## Step 2. The VM image

With the `worker.py` script ready, it's time to take a look at the VM image which will be used to run our code on providers.

### The Dockerfile

Here's what our `Dockerfile` looks like:

```bash
# Dockerfile used to build the VM image which will be downloaded by providers.
# The file must specify a workdir and at least one volume.

# We're using python slim image in this example to limit the time it takes for the
# resultant image to be first downloaded by providers, given the fact that our example
# here is limited to barebones Python installation.
FROM python:3.8.7-slim

VOLUME /golem/input /golem/output

# For the sake of completeness, we're including `worker.py` as part of the VM image.
#
# During development though, a developer could choose to send `worker.py` to the provider
# as part of the task, to eliminate the need to build and upload the VM image each time.
COPY worker.py /golem/entrypoint/
WORKDIR /golem/entrypoint
```

Let's go through these instructions one by one.

```
FROM python:3.8.7-slim
```

Here we specify our base Docker image. We use the official `python` image since we want it to run our `worker.py` script and choose the `slim` variant to reduce the image's size.

```
VOLUME /golem/input /golem/output
```

This line defines two volumes in the image: `/golem/input` and `/golem/output`. Volumes are directories that can be shared with the host machine and, more importantly, through which the execution environment supervisor (the process on the provider's host machine) will be able to transfer data to and out of the VM. For a Golem VM, the image must define at least one volume.

{% alert level="warning" %}
Contrarily to what you may expect and, notably, differently from Docker's own behavior, the paths within the Docker image associated with volumes **will always mask** any content under those paths in the image itself.

Therefore, be sure to provide different paths for any files already contained in your VM image and for the paths that will be mounted as volumes that are shared with the host environment.
{% /alert %}

```
COPY worker.py /golem/entrypoint/
```

This line will copy our `worker.py` script to the path `/golem/entrypoint` within the image. Later on we'll see how the requestor code uses this path to run our script.

{% alert level="warning" %}
During development, it may be beneficial not to include the Python script (`worker.py` above) in the image itself. Instead, one can push it to individual providers at runtime using the work context's `.run()` command.

Each update of any content that goes inside the VM image necessitates rebuilding the image, regenerating the GVMI file, re-uploading the file into the repository and finally, updating the image hash that your requestor agent uses.
{% /alert %}

```
WORKDIR /golem/entrypoint
```

Defines `/golem/entrypoint` as the working directory of the image. It will be the default location for commands executed by this image.

{% alert level="info" %}
Since version **0.2.5** of Golem's VM runtime execution environment - and of the compatible `gvmkit-build` tool - the `WORKDIR` _doesn't_ _need_ to be present, in which case the working directory will be set to `/` and the paths to the binaries run will need to be absolute.

{% /alert %}

### Important note about Docker's ENTRYPOINT

As previously stated in the Hashcat example, because of how Golem's VM execution unit works, the Docker's usual `ENTRYPOINT` statement - if present in your Dockerfile - is effectively ignored and replaced with the exeunit's own entrypoint.

That means that at present, if you need some initialization to be done, you can pass the relevant commands from the requestor agent as part of the execution script after the image is deployed and started on provider's VM. This will be shown in Step 3 of this tutorial.

### Building and publishing the image

To make our image available to providers within the Golem network we need to take the following steps:

1. Build a Docker image using our `Dockerfile`.
2. Convert the Docker image to a `.gvmi` file using `gvmkit-build`.
3. Push the `.gvmi` file to Golem's image repository.

`gvmkit-build` is included in `requirements.txt`, so it should be installed in the virtual environment used for this example.

The three steps above translate to the following shell commands.

{% alert level="danger" %}
Make sure **Docker** is running on your machine before you execute them. Otherwise you'll get a nasty-looking error message.

{% /alert %}

```
docker build . -t hash-cracker
gvmkit-build hash-cracker:latest
gvmkit-build hash-cracker:latest --push
```

{% alert level="warning" %}
The command containing the `--push` option needs to be a discrete step.

{% /alert %}

After that last step completes, make sure to **note down the hash of the image**. It's used in the next step's code to specify the image loaded by the providers.

{% alert level="success" %}
We have now created and made public the VM image that our providers will utilize when running our computational payload.

{% /alert %}

## Step 3. The requestor agent

All right, our payload is ready and the most important remaining piece is the requestor agent part which will be responsible for handling our computational task on the requestor's end - distributing fragments of the task to providers and getting results back from them.

The low-level part of the requestor agent's job - that is - keeping and processing information about the providers' market, choosing offers, signing agreements, executing payments and basically communicating with all the other nodes in the network is performed by the `yagna` daemon and handled by our high-level API via the daemon's REST API.

However, there are two main responsibilities that are too specific for each application to be provided by our high- or low-level APIs or by the daemon itself. Those are:

- **splitting the computation** and wrapping its fragments with `Task` objects that directly represent the singular jobs that are given to provider nodes.
- **specifying the exe-script** - or in other words - the sequence of operations like sending files or parameters, calling commands within the VM on provider's end, requesting results back, etc - which in their entirety cause the specific task to get successfully executed on provider's end.

We will need to supply the code for them as part of our app's **requestor agent** and, fortunately, we already have the perfect place designed for them in our `requestor.py` file.

### The boilerplate, again

Again, let's start with the template that's more or less agnostic about the specific purpose of the given application. When you open `requestor.py` from the `workshop` branch, you'll see the following boilerplate:

```python
#!/usr/bin/env python3
"""
This file contains the requestor part of our application. There are three areas here:
1. Splitting the data into multiple tasks, each of which can be executed by a provider.
2. Defining what commands must be run within the provider's VM.
3. Scheduling the tasks via a yagna node running locally.
"""

import argparse
import asyncio
from datetime import timedelta
import json
from pathlib import Path
from typing import AsyncIterable, Iterator

from yapapi import Task, WorkContext
from yapapi.log import enable_default_logger
from yapapi.payload import vm

import worker

# CLI arguments definition
arg_parser = argparse.ArgumentParser()
arg_parser.add_argument("--hash", type=Path, default=Path("data/hash.json"))
arg_parser.add_argument("--subnet", type=str, default="public")
arg_parser.add_argument("--words", type=Path, default=Path("data/words.txt"))

# Container object for parsed arguments
args = argparse.Namespace()

ENTRYPOINT_PATH = Path("/golem/entrypoint/worker.py")
TASK_TIMEOUT = timedelta(minutes=10)

def data(words_file: Path, chunk_size: int = 100_000) -> Iterator[Task]:
    """Split input data into chunks, each one being a single `Task` object.
    A single provider may compute multiple tasks.
    Return an iterator of `Task` objects.
    """
    # TODO

async def steps(context: WorkContext, tasks: AsyncIterable[Task]):
    """Prepare a sequence of steps which need to happen for a task to be computed.
    `WorkContext` is a utility which allows us to define a series of commands to
    interact with a provider.
    Tasks are provided from a common, asynchronous queue.
    The signature of this function cannot change, as it's used internally by `Executor`.
    """
    # TODO

async def main():
    # Set of parameters for the VM run by each of the providers
    package = await vm.repo(
        image_hash="1e53d1f82b4c49b111196fcb4653fce31face122a174d9c60d06cf9a",
        min_mem_gib=1.0,
        min_storage_gib=2.0,
    )

    # TODO Run Executor using data and steps functions

if __name__ == "__main__":
    args = arg_parser.parse_args()

    loop = asyncio.get_event_loop()
    task = loop.create_task(main())

    # yapapi debug logging to a file
    enable_default_logger(log_file="yapapi.log")

    try:
        loop.run_until_complete(task)
    except KeyboardInterrupt:
        # Make sure Executor is closed gracefully before exiting
        task.cancel()
        loop.run_until_complete(task)
```

As you can see, there are a couple of imports at the top.

Then, it seems we have missed the truth just a tiny bit by claiming the boilerplate to be application-agnostic since it does contain two parameters that _are_ specific to our app - `hash` and `words` . These are paths to files containing the hash we're looking for and the dictionary which we hope to find the hash in, respectively. Otherwise, it's just a regular Python argument parser invocation using `argparse`.

Then, we have those two, so far empty, functions - `data` and `steps` - the filling of which will be our main task in this section.

Furthermore, we have our `main` which we will _also_ need to supplement with a proper call to our API's `Golem` class to bind the previous two together.

And finally, we have some code that actually launches the `main` routine and does some rudimentary error handling just in case something goes amiss and we're forced to abort our task with a somewhat rude Ctrl-C.

### The task fragments

First, let's fill in the `data` function. It accepts the `words_file` path and the `chunk_size`, which is the size of each dictionary slice defined by its line count. `data` function produces a generator yielding `Task` objects that describe each task fragment.

To perform the above, we can use following piece of code:

```python
   with words_file.open() as f:
        chunk = []
        for line in f:
            chunk.append(line.strip())
            if len(chunk) == chunk_size:
                yield Task(data=chunk)
                chunk = []
        if chunk:
            yield Task(data=chunk)
```

As you can see, it first opens the file containing the input dictionary - which is a plain text file in which each line is a potential candidate for a password that would match the hash.

With the file open, it creates an empty list (`chunk`) which it fills with the lines from said file, stripping them of any preceding or trailing whitespace or newline characters (`line.strip()`).

Once the number of appended lines reaches the `chunk_size`- or once all lines have been read from the input file - it then yields the respective `Task` with its `data` set to the just-constructed list.

That's all we need for those fragments to be defined.

### The recipe for each step

Let's now proceed to the recipe that defines what exactly needs to happen in order for the provider node to process each `Task`.

The function performing this job is called `steps` in our example. It accepts `context`, which is a `WorkContext` instance and `tasks` - an iterable of `Tasks` which will be filled with task fragments coming from our `data` function that we defined in the previous step.

`WorkContext` gives us a simple interface to construct a script that translates directly to commands interacting with the execution unit on provider's end. Each such work context refers to one activity started on one provider node. While constructing such a script, we can define those steps that need to happen once per a worker run (in other words, _once per provider node_) - those are placed outside of the loop iterating over `tasks`.

So now, let's take a look at how we're going to define those:

```python
context.send_file(str(args.hash), str(worker.HASH_PATH))

async for task in tasks:
    context.send_json(str(worker.WORDS_PATH), task.data)

    context.run(str(ENTRYPOINT_PATH))

    # Create a temporary file to avoid overwriting incoming results
    output_file = NamedTemporaryFile()
    context.download_file(str(worker.RESULT_PATH), output_file.name)

    # Pass the prepared sequence of steps to Executor
    yield context.commit()

    # Mark task as accepted and set its result
    task.accept_result(result=json.load(output_file))
    output_file.close()
```

As you can see, there's one command that's uniform for all tasks - the first `.send_file()` invocation. It transfers the file containing the hash we'd like to crack and instructs the execution unit to store it under `worker.HASH_PATH` , which is a location _within_ _the_ _VM container_ that we had previously defined in our `worker.py` script. We perform this step just once here because that piece of task input doesn't change.

Then we define a few steps that will take place for each task in our list:

- `.send_json()` which tells the exe-unit to store the given subset of words as a JSON-serialized file in another path within the VM that we had defined in `worker.py` (`worker.WORDS_PATH`, note that in this function the destination comes first, followed by an object to be serialized),
- `.run()` call which is the one that actually executes the `worker.py` script inside the provider's VM, which in turn produces output (as you remember, this may be empty or may contain our solution),
- then we have `.download_file()` call which transfers that solution file back to a temporary file on the requestor's end,

{% alert level="warning" %}
Please keep in mind that any commands specified in the `.run()` call to the VM execution unit must directly refer to a given executable, which usually means specifying their full, absolute path. There's no shell (and hence, no PATH) there to rely upon.

{% /alert %}

With the steps ready, we call `.commit()` on our work context and yield that to the calling code (the processing inside the `Golem` class) which takes our script and orchestrates its execution on provider's end.

When the execution returns to our `steps` function, the `task` has already been completed. Now, we only need to call `Task.accept_result()` with the result coming from the temporary file transferred from the provider. This ensures that the result is what's yielded from the `Golem` to the final loop in our `main` function that we'll define next.

### The execution

So, here comes the last remaining part of the **requestor agent** code that we need to throw into the mix to arrive at a fully-functioning implementation of our app's requestor part. This part goes into the `main` function in the boilerplate.

#### Defining the VM image for provider-end execution

If you followed through the whole of our tutorial so far, you have also built and published the VM image of your app. We asked you then to "note down the hash of the published image". If you have done that, you may replace the hash in the `vm.repo()` invocation with the noted-down one:

```python
package = await vm.repo(
    image_hash="your-noted-down-hash",
    min_mem_gib=1.0,
    min_storage_gib=2.0,
)
```

{% alert level="info" %}
Later on, when you work on your _own_ app, this is also the place that defines the memory and storage requirements of the provider node's execution environment that your app needs to run successfully.

{% /alert %}

If you have _not_ published your image, for the purpose of this workshop you can just use the one we have made available and the hash of which we have given in our boilerplate code already.

#### Executing the tasks

And then, the remaining code is the following and the explanation comes below:

{% alert level="info" %}
There has been some changes in the Golem's high-level API since Jakub recorded the workshop video. The code below has been updated to reflect those changes and is different from the corresponding code snippet shown in the video. (The following explanation has also been updated accordingly.)

{% /alert %}

```python
async with Golem(budget=1, subnet_tag=args.subnet) as golem:

    result = ""

    async for task in golem.execute_tasks(
        steps,
        data(args.words),
        payload=package,
        timeout=TASK_TIMEOUT
    ):
        # Every task object we receive here represents a computed task
        if task.result:
            result = task.result
            # Exit early once a matching word is found
            break

    if result:
        print(f"Found matching word: {result}")
    else:
        print("No matching words found.")
```

In the first line we instantiate our `Golem` engine. It is given our GLM `budget` and the `subnet_tag` - a subnet identifier for the collection of nodes that we want to utilize to run our tasks - unless you know what you're doing, you're better-off leaving this at the value defined as the default parameter in our boilerplate code.

Our `golem` is used with `async with`as an [asynchronous context manager](https://docs.python.org/3/reference/datamodel.html#async-context-managers). This guarantees that all internal mechanisms the engine needs for computing our tasks are started before the code in the body of `async with`is executed, and are properly shut down afterwards.

With `golem` started, we are ready to call its `execute_tasks` method. Here we instruct `golem` to use the `steps` function for producing commands for each task, and the iterator produced by `data(args.words)` to provide the tasks themselves. We also tell it that the provider nodes need to use the `payload` specified by the `package` we defined above. And finally, there's the `timeout` in which we expect the whole processing on all nodes to have finished.

With `async for` we iterate over tasks computed by `execute_tasks` and check their results. As soon as we encounter a task with `task.result` set to a non-empty string we can `break` from the loop instead of waiting until the remaining tasks are computed.

Once the loop completes, the `result` should contain our solution and the solution is printed to your console. (Unless of course it happens that the hash we're trying to break is not found within the dictionary that we have initially assumed it would come from - which we assure you is _not_ the case for our example hash ;) ).

{% alert level="success" %}
Having completed the **requestor agent** part, you now have all the pieces of your first Golem application ready to be run.

{% /alert %}

## Step 4. The daemon

Now, it's time for the final piece of infrastructure necessary for our requestor node setup - the `yagna` daemon itself.

{% alert level="warning" %}
Unless you have actually done it before, you'll need to first install and fund your `yagna`deamon. Please go to:

and proceed with the initial part. You can stop before the "Running the requestor and your first task on the New Golem Network" as we're going to take it from there here.

{% /alert %}

For those who _had_ already initialized their daemon and/or completed the quick primer, just start your daemon:

```
yagna service run
```

{% alert level="success" %}
Cool, that was quick! Your yagna daemon is now running and ready to serve as the back-end to your requestor agent that we're going to start soon.

{% /alert %}

## Step 5. The liftoff

With all pieces ready in their positions, it's now time to set our app to motion!

To do that, we need to be sure that:

- our app's VM image has been published and that it matches what we're referring to in `requestor.py` (in the `image_hash` parameter to `vm.repo()`),
- our `yagna` daemon is running and is properly funded and initialized as a requestor.
- our Python virtual environment has been properly set-up, activated and requirements of our `hash-cracker` app installed

Now for the big moment! Make sure you're in the directory containing the `requestor.py` script within the checked-out repo and run:

```bash
python requestor.py
```

This will launch your app on the Golem Network. You should see a lot of messages announcing subsequent phases of the execution of your computation and finally, if all goes according to the plan, you'll get the result (which, of course, depends on the current availability of the provider nodes and the amount of work performed by the network in the given moment).

In case you wonder, the result should have something to do with the name of the conference this workshop has been first presented on.

{% alert level="success" %}
You have completed and successfully run your first app on Golem! Welcome to our constantly growing community of app developers! :)

{% /alert %}

## Final words, next steps

During this workshop we have lead you through all stages of implementation of a typical Golem application:

- we showed you how to prepare the innermost piece of your app - the very **code that runs within the VM** on the provider's end,
- enabled you to **publish the VM image** containing that code to Golem's image repository,
- went through the process of writing the **requestor agent** to orchestrate the execution of your computational task,
- showed you how to **prepare your yagna daemon** to handle the interactions with the rest of the Golem world,
- and finally how to launch your app to Golem.

Of course, the app was very simple - as it should be for that kind of example - but we hope it gave you some confidence and some basic knowledge of what to expect when you get to implement _your_ _own_ ideas.

{% docnavigation title="Next steps" %}

- A slightly more advanced [tutorial](/docs/creators/python/tutorials/task-example-2-hashcat)
- Design and then implement your own Golem app.

{% /docnavigation %}

{% docnavigation title="See also" %}

- Our high-level [Python API reference](https://yapapi.readthedocs.io/en/latest/api.html) to help you on your way.
- [Service Model](/docs/creators/python/guides/service-model)
- And in case you get stuck or need help, please reach out to us on our [Discord chat](https://chat.golem.network/) and we'll be delighted to help you out :)

{% /docnavigation %}

**Have fun with Golem!**

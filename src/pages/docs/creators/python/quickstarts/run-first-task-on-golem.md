---
description: Run first Python task on Golem
title: Golem Python TASK API QuickStart
type: Quickstart
---

# Introduction

In this article, we'll show you how to run a simple task on the Golem Network usgin Python SDK.

We perform a simple tasks for QuickStart: will render six scenes in parallel on rented providers.

It should take just a few minutes to complete, and you will see generated output files which are `PNG` images in your folder.

{% alert level="info" %}
This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Python >= 3.7 or above with `venv` module installed
- `git` installed

{% /alert %}

## Installing and running Yagna

Yagna is a service that aims to communicate and perform operations on the Golem Network. Let's get started by installing it.

### Install Yagna

{% tabs %}
{% tab label="Easy installation" %}

On Linux/ MacOS, you can install it using our helper script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}
{% tab label="Windows Manual installation" %}

Alternatively, if you can't install it in an easy way, you will do it manually in the following way:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Unzip the archive to extract the two files: `yagna.exe` and `gftp.exe`.
3. Copy those files to `C:\Windows\System32`.

{% /tab %}
{% tab label="Unix Manual installation" %}

Alternatively, if you can't install it in an easy way, you will do it manually in the following way:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Unpack `yagna` and `gftp` binaries and put them somewhere in your PATH (e.g. copy them to /usr/local/bin on Unix-like systems) or add the directory you placed the binaries into your PATH.

{% /tab %}
{% /tabs %}

{% alert level="info" %}

Should you encounter any problems, please reach out to us via our [Discord channel](https://chat.golem.network/) or consult the following resource for [troubleshooting](/docs/troubleshooting/yagna).

{% /alert %}

### Start the Yagna service

```bash
yagna service run
```

## Running the your first task on the Golem Network

Now you have the `yagna` daemon running, you may proceed with running a task as a requestor.

Create a new project folder:

```bash
mkdir yagna-python-tutorial
cd yagna-python-tutorial
```

Prepare a virtual environment for the tutorial script:

{% tabs %}
{% tab label="Linux/MacOS" %}

```bash
python3 -m venv --clear ~/.envs/yagna-python-tutorial
source ~/.envs/yagna-python-tutorial/bin/activate
```

{% /tab  %}
{% tab label="Windows" %}

```
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\yagna-python-tutorial
%HOMEDRIVE%%HOMEPATH%\.envs\yagna-python-tutorial\Scripts\activate.bat
```

{% /tab %}
{% /tabs %}

and install the Golem SDK by typing in the command line:

{% tabs %}
{% tab label="Linux/MacOS" %}

```bash
pip install -U pip
pip install yapapi
```

{% /tab  %}
{% tab label="Windows" %}

```bash
python -m pip install --upgrade pip
pip install yapapi
```

{% /tab %}
{% /tabs %}

### Get the requestor agent's code

Check out or download the `yapapi` repository:

```bash
git clone -b b0.10 https://github.com/golemfactory/yapapi.git
cd yapapi
```

### Set the yagna app key

In order for the requestor agent to connect with the `yagna` daemon, you need to provide it with the previously-generated app key. You do that by setting the appropriate environment variable. Create a new app-key:

```bash
yagna app-key create requestor
```

This should produce a 32-character-long hexadecimal app key that you need to note down as it will be needed to run the requestor agent.

{% tabs %}
{% tab label="Linux/MacOS" %}

```bash
export YAGNA_APPKEY=insert-your-32-char-app-key-here
```

{% /tab  %}
{% tab label="Windows" %}

```bash
set YAGNA_APPKEY=your-32-char-app-key
```

{% /tab %}
{% /tabs %}

### Run the example

The example we're showcasing here resides in the `examples/blender` directory within `yapapi`'s codebase so, ensure that you're in the checked-out repository's directory and run:

```bash
cd examples/blender
python blender.py
```

Once you launch the example, you should see some messages reflecting the progress of your tasks' execution - agreement confirmations, task dispatches and finally task completions.

The example in question generates six discrete tasks for providers to execute so after those six activities are completed and results returned, the whole job is finished.

If everything goes right, after what could be anything from half-a-minute to a few minutes, you'll hopefully see the message announcing the successful completion of your assignment including a short summary of what had happened during the execution, which providers took part in the execution and the accumulated GLM cost of the whole task, e.g.:

`Computation finished in 77.5s`\
`Negotiated 1 agreements with 1 providers`\
`Provider 'odra' computed 6 tasks`\
`Total cost: 0.218290307253`

{% hint style="success" %}
**Yay! With this, you have completed your first job as a requestor in the new Golem network!**
{% /hint %}

#### Output

You can verify that the task is indeed done by examining the generated output files which are `PNG` images with the selected frames of the rendered animation that should appear in the directory from which you ran the example script (`examples/blender` within the cloned repository's path if you followed the tutorial precisely) .

Here is an example rendered frame, provided here for reference:

![Task result example](/output_0.png)

#### Payments

Finally, you can verify that the providers have been paid for the work they contributed to get that output to you. First, acquire your Ethereum address - you can do that by running:

```bash
yagna app-key list
```

The value in the `id` column is your the Ethereum address of your yagna node on the `testnet`. Once you have that address, you can check that the transactions have been sent.

{% docnavigation title="Next steps" %}

- [Task Model](/docs/creators/python/guides/task-model)
- [Python Task API Tutorial ](/docs/creators/python/tutorials/service-example-0-hello-world)

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Service Model](/docs/creators/python/guides/service-model)

{% /docnavigation %}

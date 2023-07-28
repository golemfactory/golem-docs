---
title: Run a dapp
description: Quick start to running your first decentralized application on Golem
---

# Quick start

## What's in it for me?

By following this tutorial, you'll see how easy it is to deploy web applications to Golem.

You should be able to complete it regardless of your level of experience. However, it will help if you have some fluency using basic unix tools like `curl` or `git` and are not afraid of running console commands.

## Prerequisites

To launch applications on Golem, you request computational resources from the network. Therefore, you need the following prerequisites prior to execution:

- a running `yagna` daemon (v0.12 or higher)
- your requestor app key

Setting these up is a part of the tutorial linked below. You only need to complete the first part, and omit "Run first task on Golem". Once you have your yagna daemon running and your application key copied, feel free to proceed here.

<a href="https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development" style="border: 1px solid black; padding: 10px 25px; border-radius: 5px; display: flex; align-items: center; gap: 10px">
    <img height="20" width="20" src="https://user-images.githubusercontent.com/5244214/223086561-ae7422f6-d7c5-49ff-b29c-b7293df482b1.png" alt="gh-icon">
    <span>Requestor development: a quick primer</span>
</a>

Please also ensure you have `curl` available on your system.

```shell
curl --version
```

If not, please install it using the instructions appropriate for your system from: https://curl.se/download.html.

## Installation

### Get the virtual environment set up

It's best to run any Python applications in a virtual environment so as not to clutter your system's Python installation with unnecessary packages.

Ensure you're running Python >= 3.8, and you have the `venv` module installed (it's normally included in the Python distribution).

Prepare a virtual environment for the tutorial script:

```bash
python3 -m venv --clear ~/.envs/dapps
source ~/.envs/dapps/bin/activate
```

{% alert level="warning" %}

On Windows in the regular `cmd` shell, you need to replace the above with:

```
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\dapps
%HOMEDRIVE%%HOMEPATH%\.envs\dapps\Scripts\activate.bat
```

{% /alert %}

### Install `dapp-runner`

The tool which deploys apps to Golem, `dapp-runner` is installable from the PyPi repository with the following command:

```shell
pip install -U pip dapp-runner
```

## Running a dApp on Golem

### Get the sample app

```
curl https://raw.githubusercontent.com/golemfactory/dapp-store/81e3f50aba90a84d335a26cb9cc2ea778193be11/apps/todo-app.yaml > webapp.yaml
```

### And the default config file

```
curl https://raw.githubusercontent.com/golemfactory/dapp-runner/main/configs/default.yaml > config.yaml
```

### Export your application key to the environment

```bash
export YAGNA_APPKEY=<your key>
```

{% alert level="warning" %}

On Windows, you'll need to use:

```
set YAGNA_APPKEY=<your key>
```

{% /alert %}

### Run the app

Having the above setup complete, you can verify it by running a sample application that comes together with `dapp-runner` repository using the following commands:

```shell
dapp-runner start --config config.yaml webapp.yaml
```

Once the app is deployed on Golem, you should see a line reading:

```json
{ "web": { "local_proxy_address": "http://localhost:8080" } }
```

This means that the app is ready and can be viewed at: [http://localhost:8080](http://localhost:8080)

(The port on your machine may be different)

_**That's it :smile: **_

Now that you've been able to experience launching decentralized apps on Golem, you might wish to learn what it takes to build one yourself.

<a href="../hello-world-dapp" style="border: 1px solid black; padding: 10px 25px; border-radius: 5px; display: flex; align-items: center; gap: 10px">
    <img height="20" width="20" src="https://user-images.githubusercontent.com/5244214/223086561-ae7422f6-d7c5-49ff-b29c-b7293df482b1.png" alt="gh-icon">
    <span>Hello World dApp</span>
</a>

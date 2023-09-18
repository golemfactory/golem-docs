---
description: Quick start to running your first decentralized application on Golem
title: QuickStart to running your first decentralized application
type: QuickStart
---

# QuickStart

## What's in it for me?

By following this tutorial, you'll see how easy it is to deploy web applications on Golem.

You should be able to complete it regardless of your level of experience. However, it will help if you have some fluency using basic unix tools like `curl` or `git` and are not afraid of running console commands.

## Prerequisites

To launch applications on Golem, you request computational resources from the network. Therefore, you need the following prerequisites prior to execution:

* a running `yagna` service (v0.12 or higher)
* your requestor app key

Setting these up is a part of the [Yagna installation instructions](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors). 

Please also ensure you have `curl` available on your system.

```shell
curl --version
```

If not, please install it using the instructions appropriate for your system from [here](https://curl.se/download.html).

## Installation

### Get the virtual environment set up

It's best to run any Python application in a virtual environment. It will let you avoid cluttering your system's Python installation with unnecessary packages.

Ensure you're running Python >= 3.8, and you have the `venv` module installed (it's normally included in the Python distribution).

Prepare a virtual environment for the tutorial script:

{% tabs %}

{% tab label="Linux / MacOS" %}
```bash
python3 -m venv --clear ~/.envs/dapps
source ~/.envs/dapps/bin/activate
```
{% /tab %}
{% tab label="Windows" %}
```shell
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\dapps
%HOMEDRIVE%%HOMEPATH%\.envs\dapps\Scripts\activate.bat
```
{% /tab %}
{% /tabs %}



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

Generate an unique api-key with the `yagna` command:

{% alert level="info" %}

If you followed [Yagna installation instructions](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors) you can use 'try_golem' key.
 
{% /alert %}

```bash
yagna app-key create dapp-runner
```
It will produce a 32-char key. 

Copy and export it:

{% tabs %}

{% tab label="Linux / MacOS" %}
```bash
export YAGNA_APPKEY=<your key>
```
{% /tab %}
{% tab label="Windows" %}
```bash
set YAGNA_APPKEY=<your key>
```
{% /tab %}
{% /tabs %}

### Run the app

Having the above setup complete, you can verify it by running a sample application that comes together with `dapp-runner` repository using the following commands:

```shell
dapp-runner start --config config.yaml webapp.yaml 
```

Once the app is deployed on Golem, you should see a line reading:

```json
{"web": {"local_proxy_address": "http://localhost:8080"}}
```

This means that the app is ready and can be viewed at: [http://localhost:8080](http://localhost:8080)

(The port on your machine may be different)

That's it!


{% docnavigation title="Next steps" %}

- Now that you've been able to experience launching decentralized apps on Golem, you might wish to learn what it takes to build one yourself: [Hello World dApp](/docs/creators/dapps/hello-world-dapp)


{% /docnavigation %}
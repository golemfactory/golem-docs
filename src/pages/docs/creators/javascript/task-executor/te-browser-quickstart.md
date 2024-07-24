---
description: Learn how to set up a Golem requestor agent in your browser, including Yagna service configuration and running scripts in a web context.
title: Browser-Based Golem Requestor Quickstart
pageTitle: Implementing Golem Requestor Agents in Web Browsers - Quickstart
type: Quickstart
---

# Task Executor requestor in browser Quickstart

## Introduction

In most of our examples, we demonstrate how to run a requestor script in Node.js. However, you can also run your scripts in a browser context. This example will explain how to do it.

Before getting started, you need to install and launch the Yagna service in version 0.15.2 or later. It can be installed using instructions for manual Yagna installation available [here](/docs/creators/tools/yagna/yagna-installation-for-requestors).

{% alert level="warning" %}
In addition, follow the instructions to [set up the app-key](/docs/creators/tools/yagna/yagna-installation-for-requestors#start-the-service), but start the Yagna with a parameter that allows you to handle REST API requests with a CORS policy. You can do this by running the following command:

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
yagna service run --api-allow-origin='http://localhost:8080'
```

{% /tab %}
{% tab label="Windows" %}

```console
yagna service run --api-allow-origin=http://localhost:8080
```

{% /tab %}

{% /tabs %}

The `--api-allow-origin` value should be set to the URL where your web application will be served.
In this example, we will use `http-server`.

{% /alert %}

## Setting up the project

```bash
mkdir web_golem
cd web_golem
npm install --global http-server
```

This will install the `http-server` utility to host our web page, where we will run our Golem app.

## HTML page

Next, we'll create the main `index.html` file with the following content:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/quickstarts/web-quickstart/index.html" language="html" /%}

In this layout, there are three elements:

- A "Echo Hello World" button, which executes the script on Golem
- A "Results" container, which displays the results
- A "Logs" container, which displays the API logs

## Requestor script

Next, we'll create a `requestor.mjs` file with the following content:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/quickstarts/web-quickstart/requestor.mjs" language="javascript" /%}

Note the file contains the `run()` function that creates the body of the requestor script (similar to the one we use in Node.js) and a set of helper functions that will let us present the logs and results in the browser window.

Now, ensure you:

- have your Yagna APP key set to `try_golem` (as shown in the yagna installation instruction) and
- have a running Yagna service started with the `--api-allow-origin` properly set to `http://localhost:8080`

Launch `http-server` in the project folder.

```bash
http-server
```

{% alert level="warning" %}

If, instead of using the `try_golem` app key defined by using the `YAGNA_AUTOCONF_APPKEY` variable, you have created a unique app key, make sure you update the requestor.mjs code and set the proper value there. See [here](/docs/creators/javascript/examples/using-app-keys#js-task-api-examples-using-app-keys) for deails.

{% /alert %}

We should see our app available in the browser.

[Open localhost](http://localhost:8080/index)

If you click the **Echo Hello World** button, after a while, in the result container, you should get the result of the script: `Hello World` and see the logs of executed commands in the log container.

![Output logs](/browser_log.png)

{% docnavigation title="Next steps" %}

- [Golem in web browser example explained](/docs/creators/javascript/task-executor/te-browser-quickstart-explained)

{% /docnavigation %}

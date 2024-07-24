---
description: Step-by-step tutorial on integrating Golem network Task Executor with a browser, covering installation, setup, and script execution.
title: Task Executor in browser Quickstart explained
type: Tutorial
---

# JS Task Executor in browser Quickstart explained

## Introduction

In this tutorial, you will create a simple web page that will trigger your requestor script and display the results and output logs in the browser window.

In the Quickstart, the js script is in an external file. In this tutorial we will keep both HTML and js script in the same file.

## Prerequisites

Before proceeding, you'll need to install and launch the Yagna service, version 0.15.2 or later. Installation instructions can be found through the manual Yagna installation guide available [here](/docs/creators/tools/yagna/yagna-installation-for-requestors).

In addition, you need to start Yagna with a parameter that allows you to handle REST API requests with a CORS policy. You can do this by running the following command:

{% tabs %}

{% tab label="MacOS / Linux" %}

```shell
yagna service run --api-allow-origin='http://localhost:8080'
```

{% /tab %}
{% tab label="Windows" %}

```shell
yagna service run --api-allow-origin=http://localhost:8080
```

{% /tab %}
{% /tabs %}

{% alert level="warning" %}

The `--api-allow-origin` value should be set to the URL where your web application will be served.
In this example, we will use `http-server`.

{% /alert  %}

## Setting up the project

```bash
mkdir web_golem
cd web_golem

```

next

```shell
npm install --global http-server
```

This will install the `http-server` utility to host our web page, where we will run our Golem app.

## HTML page

Next, we'll create the main `index.html` file with a minimal layout:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>WebRequestor Task API</title>
  </head>
  <body>
    <h1>WebRequestor - Hello World</h1>
    <div class="container">
      <div class="col-6">
        <h3>Options</h3>
        <div class="column">
          <div>
            <label for="YAGNA_API_BASEPATH">Yagna Api BaseUrl: </label>
            <input
              id="YAGNA_API_BASEPATH"
              type="text"
              value="http://127.0.0.1:7465"
            />
          </div>
          <div>
            <label for="SUBNET_TAG">Subnet Tag: </label>
            <input id="SUBNET_TAG" type="text" value="public" />
          </div>
        </div>
        <h3>Actions</h3>
        <div class="row vertical">
          <div>
            <button id="echo">Echo Hello World</button>
          </div>
        </div>
        <div class="results console">
          <h3>Results</h3>
          <ul id="results"></ul>
        </div>
      </div>
      <div class="col-6 border-left">
        <div class="logs console">
          <h3>Logs</h3>
          <ul id="logs"></ul>
        </div>
      </div>
    </div>

    <script type="module">
      // replace with script code
    </script>
  </body>
</html>
```

In this layout, there are three elements:

- A "Echo Hello World" button, which executes the script on Golem
- A "Results" container, which displays the results
- A "Logs" container, which displays the API logs

Take note of the `<script>` tag in the `<head>` section; this is where we'll place our JavaScript code.

## Using the @golem-sdk/task-executor bundle library

First, we will import the `@golem-sdk/task-executor` library:

```html
<script type="module">
    import { TaskExecutor } from "https://unpkg.com/@golem-sdk/task-executor";
</script>
```

### Task Executor

When the user presses the `Echo Hello World` button, the `run()` function will be invoked. The body of this function should contain the typical sequence necessary to run TaskExecutor. We will first create it, then execute the task function, and finally, we will shutdown it.

Let's look at the `create` method parameters.

```js
const executor = await TaskExecutor.create({
  logger,
  api: { key: "try_golem" },
  ...
```

- `logger` - we use our own logger implementation, which displays the logs in an html logs container.
- `api: {key: }` - a key that will give us access to `yagna` REST API. `yagna` is a service that connects us to the network. In this example, we will use api-key that was generated in the process of [Yagna installation](/docs/creators/tools/yagna/yagna-installation-for-requestors).

```js
...
  demand: {
    workload: {
      imageTag: "golem/node:20-alpine",
    },
  },
...
```

- In the `demand` section we define the environment needed to run our task. We do it by indicating what image is to be run on a remote node. We will use an image publicly available on the [registry](https://registry.golem.network) portal, therefore it is enough to provide a tag `golem/node:20-alpine` - it indicates an image based on `alpine` distribution and has `node.js` installed.

When defining the demand users can also specify other parameters like the minimal number of threads, memory, or disk size as needed.

```js
...
    market: {
      rentHours: 0.5,
      pricing: {
        model: "linear",
        maxStartPrice: 0.5,
        maxCpuPerHourPrice: 1.0,
        maxEnvPerHourPrice: 0.5,
      },
    }
```

Finally, we define `market` parameters.

- The `rentHour` defines the maximum duration of the engagements with providers before automatic termination.
- In `pricing` we also precise the maximum acceptable prices using the `linear` price model. It will be used to select offers from providers and let you manage the costs of running your tasks.


The body of the `executor.run()` method is identical as in the case of the Node.js executor script:
It is a task function that receives the `ExeUnit` object. It is designed to execute the command `echo 'Hello World'`. The `exe.run()` method returns a `Promise` which resolves to a result object. This object has a `stdout` property that holds the output of our command.

The result is passed as an input parameter of the `appendResults()` function that will be responsible for displaying the result on the screen.

## Getting results

Now let's create the `appendResults()` function which will put the output of our application into the designated `results` container.

```html
<script type="module">
  //
  // .. previously added import statement
  //
  export function appendResults(result) {
    const results_el = document.getElementById('results')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(result))
    results_el.appendChild(li)
  }

  //
  // .. async function run ....
  //
</script>
```

## Getting logs

The TaskExecutor offers an optional `logger` parameter. It will accept an object that implements the [Logger](/docs/golem-js/reference/interfaces/shared_utils_logger_logger.Logger) interface. The `logger` will utilize an `appendLog` function to add applicable records to the log storage area.

```html
<script type="module">
  //
  // .. previously added code
  //
  function appendLog(msg, level = "info") {
      const logs = document.getElementById("logs");
      const div = document.createElement("div");
      div.appendChild(document.createTextNode(`[${new Date().toISOString()}] [${level}] ${msg}`));
      logs.appendChild(div);
  }

  const logger = {
      error: (msg) => appendLog(msg, "error"),
      info: (msg) => appendLog(msg, "info"),
      warn: (msg) => appendLog(msg, "warn"),
      debug: (msg) => appendLog(msg, "debug"),
      child: () => logger,
  };

  //
  // .. async function run ....
  //
</script>
```

## Run the script

Now that we have all the necessary components defined, the code between `<script>` tags should look like this:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/tutorials/running-from-browser/index.html" language="javascript" /%}

Now if we have:

- The Yagna service is running, and it's started with the `--api-allow-origin` parameter correctly set to `http://localhost:8080`.
- Your Yagna app-key is either set to `try_golem`, or the `apiKey` has been assigned a value of another valid 32-character key (More details [here](/docs/creators/javascript/examples/using-app-keys))."

Run `http-server` to start the webserver.

You should see the app available in the browser.

[ Open localhost ](http://localhost:8080/index)

If you click the `Echo Hello World` button, after a while in the result container, we should get the result of the script, and in the log container we should see the logs of executed commands.

![Output logs](/browser_log.png)

{% docnavigation title="Next steps" %}

Other [tutorials](/docs/creators/javascript/tutorials).

{% /docnavigation %}

{% docnavigation title="See also" %}

Introduction to [JS Task API](/docs/creators/javascript/guides/task-model)

{% /docnavigation %}

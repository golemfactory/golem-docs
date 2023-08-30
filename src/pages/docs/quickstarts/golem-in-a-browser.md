---
description: A minimal example of a functional Golem requestor agent in a browser
title: Requestor in a browser QuickStart
---


# Requestor in browser QuickStart

## Introduction

In most of our examples, we demonstrate how to run a requestor script in Node.js. However, you can also run your scripts in a browser context. This example will explain how to do it.
   

{% alert level="info" %}

Before getting started, you need to install and launch the Yagna service in version 0.13.0+. Note such a version is available as `release candidate`. It can be installed using instructions for manual Yagna installation available [here](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors). 

{% /alert %}

{% alert level="warning" %}
In addition, follow the instructions to [set up the app-key](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors), but start the Yagna with a parameter that allows you to handle REST API requests with a CORS policy. You can do this by running the following command:

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

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>WebRequestor QuickStart</title>

  </head>
  <body>
    <h1>WebRequestor - QuickStart</h1>
    <div class="container">
      <div class="col-6">
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
    <script type="module" src="requestor.mjs"></script>
    </body>
</html>     
```

In this layout, there are three elements:

- A "Run" button, which executes the script on Golem
- A "Results" container, which displays the results
- A "Logs" container, which displays the API logs


## Requestor script


Next, we'll create a `requestor.mjs` file with the following content:

```js
import * as golem from "https://unpkg.com/@golem-sdk/golem-js"


function appendResults(result) {
    const results = document.getElementById('results');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(result));
    results.appendChild(div);
}
function appendLog(msg, level = 'info') {
    const logs = document.getElementById('logs');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(`[${new Date().toISOString()}] [${level}] ${msg}`));
    logs.appendChild(div);
}
const logger = {
    log: (msg) => appendLog(msg),
    warn: (msg) => appendLog(msg, 'warn'),
    debug: (msg) => appendLog(msg, 'debug'),
    debug: (msg) => console.log(msg),
    error: (msg) => appendLog(msg, 'error'),
    info: (msg) => appendLog(msg, 'info'),
    table: (msg) => appendLog(JSON.stringify(msg, null, "\t")),
}
async function run() {

    const executor = await golem.TaskExecutor.create({
        package: "dcd99a5904bebf7ca655a833b73cc42b67fd40b4a111572e3d2007c3",
        yagnaOptions: { apiKey: 'try_golem' },
        logger
    }).catch(e => logger.error(e));

    await executor
        .run(async (ctx) => appendResults((await ctx.run("echo 'Hello World'")).stdout))
        .catch(e => logger.error(e));

    await executor.end();
}

document.getElementById('echo').onclick = run;

```

Note the file contains the `run()` function that creates the body of the requestor script (similar to the one we use in Node.js) and a set of helper functions that will let us present the logs and results in the browser window.

Now, if we have:
- have your Yagna APP key set to `try_golem` and
- a running Yagna service started with the `--api-allow-origin` properly set to `http://localhost:8080`

Launch `http-server` in the project folder.

```
http-server
```

You should see our app available in the browser.

[ Open localhost ](http://localhost:8080/index)

If you click the __Run__ button, after a while, in the result container, you should get the result of the script: `Hello World` and see the logs of executed commands in the log container.

![Output logs](/browser_log.png)

{% docnavigation title="Next steps" %}

- [Golem in web browser example explained](/docs/creators/javascript/tutorials/running-in-browser)

{% /docnavigation %}



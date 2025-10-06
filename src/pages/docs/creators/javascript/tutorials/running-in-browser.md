---
description: Step-by-step tutorial on integrating Golem network with a browser, covering installation, setup, and script execution.
title: Golem in browser Quickstart explained
type: Tutorial
---

# Golem in browser Quickstart explained

## Introduction

In this tutorial, you will create a simple web page that will trigger your requestor script and display the results and output logs in the browser window.

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
In this example, we will use `http-server` with a default port 8080.

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
    <title>Requestor in browser</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <h1 class="pb-4">Hello Golem</h1>
      <div class="row pb-4">
        <h3>Options</h3>
        <div id="options" class="row">
          <div class="col-4 form-group">
            <label for="YAGNA_APPKEY">Yagna AppKey: </label>
            <input
              id="YAGNA_APPKEY"
              class="form-control"
              type="text"
              value=""
            />
          </div>
          <div class="col-4 form-group">
            <label for="YAGNA_API_BASEPATH">Yagna Api Url: </label>
            <input
              id="YAGNA_API_BASEPATH"
              class="form-control"
              type="text"
              value="http://127.0.0.1:7465"
            />
          </div>
        </div>
        <div class="row pb-4">
          <div class="col-4 form-group">
            <label for="IMAGE_TAG">Image Tag: </label>
            <input
              id="IMAGE_TAG"
              type="text"
              class="form-control"
              value="golem/alpine:latest"
            />
          </div>
          <div class="col-4 form-group">
            <label for="SUBNET_TAG">Subnet Tag: </label>
            <input
              id="SUBNET_TAG"
              type="text"
              class="form-control"
              value="public"
            />
          </div>
          <div class="col-4 form-group">
            <label for="PAYMENT_NETWORK">Payment Network: </label>
            <input
              id="PAYMENT_NETWORK"
              type="text"
              class="form-control"
              value="hoodi"
            />
          </div>
        </div>
      </div>
      <div class="row pb-4">
        <h3>Actions</h3>
        <div>
          <button id="echo" class="btn btn-primary" onclick="run()">
            Echo Hello World
          </button>
        </div>
      </div>
      <div class="row">
        <div class="alert alert-info" role="alert">
          <h4 class="alert-heading">Debugging</h4>
          <p>
            You can see <code>@golem-sdk/golem-js</code> logs in your
            browser&apos;s <code>console</code> :)
          </p>
        </div>
        <h3>Results</h3>
        <div class="col">
          <ul id="results"></ul>
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

- An `Options` form, where you can define input params,
- An `Actions` section with "Echo Hello World" button, which executes such a command on the remote Golem node,
- A `Results` container, which displays the results

Take note of the `<script>` tag at the end of the `<body>` section, this is where we'll place our JavaScript code.

## Using the @golem-sdk/golem-js bundle library

First, we will import the `@golem-sdk/golem-js` library:

```html
<script type="module">
  import { GolemNetwork } from 'https://unpkg.com/@golem-sdk/golem-js'
</script>
```

## Requestor script

When the user presses the `Echo Hello World` button, the `run()` function will be invoked. The body of this function should contain the typical sequence necessary to run requestor script.
First, we define our `order` and create the `GolemNetwork` object, then we rent a machine and execute the `echo Hello World` command on it.

The `order` object contains information about the environment we want to run on the provider, and potentially, criteria for the provider selection.
The user can define an image tag that will be used in our order. Users can also specify other parameters like the number of threads, memory, or disk size.
All possible options are described here: [MarketOrderSpec](/docs/golem-js/reference/interfaces/golem_network_golem_network.MarketOrderSpec).

For the provider selection, our example precises also the maximum acceptable prices using the `linear` price model. Finally, the `rentHour` defines the maximum duration of the engagements with providers before automatic termination.

We take some of these values from the corresponding inputs.

```javascript
const key = document.getElementById('YAGNA_APPKEY').value
const url = document.getElementById('YAGNA_API_BASEPATH').value
const subnetTag = document.getElementById('SUBNET_TAG').value
const imageTag = document.getElementById('IMAGE_TAG').value
const network = document.getElementById('PAYMENT_NETWORK').value

const order = {
  demand: {
    workload: {
      imageTag,
    },
    subnetTag,
  },
  market: {
    rentHours: 0.5,
    pricing: {
      model: 'linear',
      maxStartPrice: 0.5,
      maxCpuPerHourPrice: 1.0,
      maxEnvPerHourPrice: 0.5,
    },
  },
  payment: { network },
}
```

Next, we need to create a `GolemNetwork` object, which is the primary entry point to our application.
To connect to the `GolemNetwork`, two parameters are required: `apiKey` and `url`.
Additionally, we set the listener on the payment event to collect the cost of our task when the provider issues an invoice.

```javascript
const glm = new GolemNetwork({
  api: { key, url },
})

glm.payment.events.on('invoiceAccepted', ({ invoice }) =>
  appendResults(`Total cost: ${invoice.amount} GLM`)
)
```

After defining the `order` parameters and creating the `GolemNetwork` object, we connect to the network and using the `oneOf` method we rent a single resource on which we can execute the `echo Hello World` command.
The result is passed as an input parameter of the `appendResults()` function that will be responsible for displaying the result on the screen.

```javascript
try {
  appendResults('Establishing a connection to the Golem Network')
  await glm.connect()
  appendResults('Request for renting a provider machine')
  const rental = await glm.oneOf({ order })
  await rental
    .getExeUnit()
    .then(async (exe) =>
      appendResults(
        'Reply: ' +
          (
            await exe.run(`echo 'Hello Golem! 👋 from ${exe.provider.name}!'`)
          ).stdout
      )
    )
  await rental.stopAndFinalize()
  appendResults('Finalized renting process')
} catch (err) {
  console.error('Failed to run the example', err)
} finally {
  await glm.disconnect()
}
```

## Getting results

The results are displayed on the page using a special function `appendResults()` that inserts the appropriate elements on the page.

```javascript
export function appendResults(result) {
  const resultsEl = document.getElementById('results')
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(result))
  resultsEl.appendChild(li)
}
```

## Getting logs

The default logger, if the user does not specify another one, for `GolemNetwork` is the `debug` logger. All logs for the specified namespace will be visible in the browser console. To limit the scope of logs, you can define the appropriate namespace using the 'debug' variable in local storage - according to the documentation of [debug](https://www.npmjs.com/package/debug)

```javascript
localStorage.debug = 'golem-js:*'
```

## Run the script

Now that we have all the necessary components defined, all the code should look like this:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/web/hello.html" language="html" /%}

Now if we have:

- The Yagna service is running, and it's started with the `--api-allow-origin` parameter correctly set to `http://localhost:8080`.
- Your Yagna app-key is either set to `try_golem`, or the `apiKey` has been assigned a value of another valid 32-character key (More details [here](/docs/creators/javascript/examples/using-app-keys))."

Run `http-server` to start the webserver.

You should see the app available in the browser.

[ Open localhost ](http://localhost:8080/index)

If you click the 'Echo Hello World' button, after a while in the result container, we should get the result of the script, and in the log container we should see the logs of executed commands.

![Output logs](/webrequestor.gif)

{% docnavigation title="Next steps" %}

Other [tutorials](/docs/creators/javascript/tutorials).

{% /docnavigation %}

{% docnavigation title="See also" %}

Introduction to [JS Task API](/docs/creators/javascript/guides/task-model)

{% /docnavigation %}

## Introduction

In most of our examples, we demonstrate how to run a requestor script in Node.js. However, you can also run your scripts in a browser context. This example will explain how to do it.

Before getting started, you need to install and launch the Yagna service in version 0.15.2 or later. It can be installed using instructions for manual Yagna installation available [here](/docs/creators/tools/yagna/yagna-installation-for-requestors).

{% alert level="warning" %}
Follow the Yagna installation instructions including the [set up the app-key](/docs/creators/tools/yagna/yagna-installation-for-requestors) step.

Then, start the Yagna with a `--api-allow-origin` that allows you to handle REST API requests with a CORS policy:

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

In this example, we will use `http-server` with a default port 8080.

{% /alert %}

## Setting up the project

```bash
mkdir web_golem
cd web_golem
npm install --global http-server
```

This will install the `http-server` utility to host our web page, where we will run our Golem app.

## HTML page with embeded requestor script

Next, we'll create the main `index.html` file with the following content:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/web/hello.html" language="html" /%}

In this layout, there are three elements:

- An `Options` form, where you can define input params,
- An `Actions` section with "Echo Hello World" button, which executes such a command on the remote Golem node,
- A `Results` container, which displays the results

The js script defines:

- the `run()` function that creates the body of the requestor script
- a helper functions that will let us present the results in the browser window.

Now, ensure you:

- have your Yagna APP key set to `try_golem` (as shown in the yagna installation instruction) and
- have a running Yagna service started with the `--api-allow-origin` properly set to `http://localhost:8080`

Launch `http-server` in the project folder.

```bash
http-server
```

{% alert level="info" %}

If, instead of using the `try_golem` app key defined by using the `YAGNA_AUTOCONF_APPKEY` variable, you have created a unique app key, make sure you update appkey value in the respective Option field.

{% /alert %}

We should see our app available in the browser:

[Open localhost](http://localhost:8080/index)

If you click the **Echo Hello World** button, after a while, in the result container, you should get the result of the script:

- the result of executing the script in the Results container
- debug logs in the console window

![Output logs](/webrequestor.gif)

{% docnavigation title="Next steps" %}

- [Golem in web browser example explained](/docs/creators/javascript/tutorials/running-in-browser)

{% /docnavigation %}

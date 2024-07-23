---
description: Guide on using app-keys with JS Task API in Yagna REST API, including creating, listing, and integrating unique keys for secure access.
title: Using app-keys
pageTitle: Secure Your Yagna REST API Access - JS Task API App-Key Integration Examples
type: Example
---

# JS Task API Examples: using app-keys

## Introduction

To use Yagna REST API, your application must identify itself by api-key.
In our examples we utilize the `try_golem` key, which is automatically created if you have the `YAGNA_AUTOCONF_APPKEY` variable set in the terminal where you start the Yagna service.

The `try_golem` api-key is easy to read and remember, and useful for quickstarts and testing examples. However, normally you should rather use unique 32-char api-keys to better protect access to your requestor and its wallet.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install libraries.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
npm i @golem-sdk/pino-logger
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

### Creating unique app-keys

You can generate a unique api-key with the `yagna` command:

```bash
yagna app-key create requestor
```

In the command above `requestor` is the name of the key. The output is the 32-char app-key.

### Listing available app-keys

You can list available app-keys in your `yagna` instance with:

```bash
yagna app-key list
```

You can identify your key by `name` and copy the value from the `key` column.

### Using app-key in JS requestors scripts

Once you have created an app-key you can use it in your requestor script replacing `insert-your-32-char-app-key-here` with the actual key.

{% alert level="info" %}
Note that from the `yagna` perspective we are talking about an application accessing its API, therefore `yagna` uses the `app-key` term, while from an application's perspective they obtain the access to REST API, and therefore they have `apiKey` attribute.
{% /alert %}

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/beta/examples/docs-examples/examples/using-app-keys/index.mjs" language="javascript" /%}

### Using app-key from environment variable

There is yet another option to set the `apiKey`. By default, the JS SDK will try to read the value from the `YAGNA_APPKEY` environment variable and set it as the `apiKey`.

To assign an app-key value to the `YAGNA_APPKEY` environment variable use this command:

{% tabs %}

{% tab label="linux / macOS" %}

```bash
export YAGNA_APPKEY=insert-your-32-char-app-key-here
```

{% /tab %}
{% tab label="Windows" %}

```bash
set YAGNA_APPKEY=insert-your-32-char-app-key-here
```

{% /tab %}
{% /tabs %}

and then remove the following line from the example script:

```js
api: {
  key: 'insert-your-32-char-app-key-here'
}
```

### Using YAGNA_AUTOCONF_APPKEY environment variable

When the Yagna service starts, if the environment variable `YAGNA_AUTOCONF_APPKEY` has been set, its value will be used to create an autoconfigured app-key. However, this app-key isn't permanent; it will vanish upon restarting the service unless the `YAGNA_AUTOCONF_APPKEY` variable is set again. While this approach is handy for tutorials and demonstrations, for regular use it's recommended to have a distinct app-key. This provides better management over access to your Yagna REST API.

{% tabs %}

{% tab label="linux / macOS" %}

```bash
export YAGNA_AUTOCONF_APPKEY=insert-your-desired-app-key-here
```

{% /tab %}
{% tab label="Windows" %}

```bash
set YAGNA_AUTOCONF_APPKEY=insert-your-desired-app-key-here
```

{% /tab %}
{% /tabs %}

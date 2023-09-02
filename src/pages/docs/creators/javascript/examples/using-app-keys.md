---
description: Using app-keys
title: Using app-keys
---

# JS Task API Examples: using app-keys

## Introduction

This example will show you the different ways of using different sorts of app-keys when requesting.

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above

{% /alert %}

## Prerequisites

Yagna service is installed and running with `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/golem-js
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Introduction

To use Yagna REST API, your application must identify itself by api-key.
In our examples we utilize the `try_golem` key, which is automatically created if you have the `YAGNA_AUTOCONF_APPKEY` variable set in the terminal where you start the Yagna service.

Such an api-key is easy to read and remember, and useful for quickstarts and testing examples. However, normally you should rather use unique 32-char api-keys to better protect access to your requestor and its wallet.

### Creating unique app-keys

You can generate an unique api-key with the `yagna` command:

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

```js
(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'insert-your-32-char-app-key-here' }
    });

const result = await executor.run(
    async (ctx) => (await ctx.run("node -v")).stdout);
 await executor.end();

 console.log("Task result:", result);
})();
```

### Using app-key from environment variable

There is yet another option, to read the `apiKey` value from the `YAGNA_APPKEY` environment variable. JS SDK library will read the value of this variable. Therefore you do need to specify it inside the script and you can skip the 

```js
yagnaOptions: { apiKey: 'insert-your-32-char-app-key-here' }
```
line when you create TaskExecutor.

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

### Using YAGNA_AUTO_CONF environment variable

If you have the `YAGNA_AUTO_CONF` variable set at the moment the Yagna service starts its value will be used to define autoconfigured app-key.
This app-key is not stored and will disappear after restart (unless the variable is still set). While this is convenient for examples and tutorials, normally it is recommended to use a unique app-key to manage access of apps to your Yagna REST API.

{% tabs %}

{% tab label="linux / macOS" %}
```bash
export YAGNA_AUTO_CONF=insert-your-desired-app-key-here
```
{% /tab %}
{% tab label="Windows" %}

```bash
set YAGNA_AUTO_CONF=insert-your-desired-app-key-here
```
{% /tab %}
{% /tabs %}

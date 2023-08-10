---
description: Using app-key
title: Using app-key
---

{% alert level="info" %}

# Prerequisites 
Yagna service installed and running with `try_golem` app-key configured.

# Setting up project

Create a project folder, initialize a Node.js project, and install the `yajsapi` library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```
{% /alert %}

## Introduction

To use `Yagna` REST API you application must identify itself by api-key.
In our examples we utilize `try_golem` key, that is automatically created if you have `YAGNA_AUTOCONF_APPKEY` variable set in the terminal where you start the Yagna service.

Such an api-key is easy to read and remember, and useful for quickstarts and testing examples, but normally you should rather use unique api-keys to protect access to your requstor and its wallet.

### Creating unique app-keys

You can generate an unique api-key with the `Yagna` command:

```bash
yagna app-key create requestor
```

In the command above `requestor` is a name of the key.

### Listing available app-keys

You can list available app-keys in your `Yagna` instance with:

```bash
yagna app-key list
```

You can identify your key by `name` and copy value from  `key` column.

### Using app-key in JS requestors scripts

Once you have created an app-key you can use it in your requestor script replacing `insert-your-32-char-app-key-here` with the actual key.

{% alert level="info" %}
Note that while from the `Yagna` perspective we are talking about an applications accessing its API, therefore `Yagna` uses the `app-key` term, while from applications perspective they obtain the access to REST API, and therefore the have `apikey` attribute.
{% /alert %}

```js
(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'insert-your-32-char-app-key-here' }});

const result = await executor.run(
    async (ctx) => (await ctx.run("node -v")).stdout);
 await executor.end();

 console.log("Task result:", result);
})();
```

### Using app-key from environment variable

There is yet another option, to read the apikey value from the `YAGNA_APPKEY` environemnt variable.

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


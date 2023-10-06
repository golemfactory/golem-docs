---
title: React SDK Introduction
description: Introduction to the Golem React SDK
type: Introduction
---

# React SDK Introduction

Welcome to the docs page for Golem React SDK. Before you get started, make sure you have read the [Introduction to the Task Model](/docs/creators/javascript/guides/task-model) to get familiar with the Golem Network.

## Getting started

To add the SDK to an existing react project simply install it using your favorite package manager:

{% tabs %}

{% tab label="npm" %}
```bash
npm install @golem-sdk/react
```
{% /tab %}
{% tab label="yarn" %}
```bash
yarn add @golem-sdk/react
```
{% /tab %}
{% tab label="pnpm" %}
```bash
pnpm add @golem-sdk/react
```
{% /tab %}
{% tab label="bun" %}
```bash
bun add @golem-sdk/react
```
{% /tab %}

{% /tabs %}

Then make sure to wrap your app with the `YagnaProvider` component:

```jsx
<YagnaProvider config={{ yagnaAppKey: 'myApiKey' }}>
  <App />
</YagnaProvider>
```

See the [YagnaProvider API reference](/docs/creators/javascript/react/yagna-provider) for the list of all available configuration options.

## Connecting to Yagna

Yagna blocks all requests from external origins by default. To allow the SDK to communicate with it you need start Yagna with `--api-allow-origin='<your-domain>'` flag. For example:

```shell
yagna service run --api-allow-origin='http://localhost:3000'
```

## GitHub repository

The source code for the SDK along with an example app is available on [GitHub](https://github.com/golemfactory/golem-sdk-react) and we welcome contributions.

## Reporting issues

If you encounter any issues with the SDK please report them on [GitHub](https://github.com/golemfactory/golem-sdk-react/issues) or [Discord](https://chat.golem.network).

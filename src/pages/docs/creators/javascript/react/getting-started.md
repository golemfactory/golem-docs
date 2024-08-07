---
title: React SDK Introduction - Installation, Configuration, and Usage
description: Comprehensive guide to installing and configuring the React SDK for Golem, including prerequisites, installation steps, and a practical example to connect with Yagna.
type: Introduction
---

# Get started with the React SDK

## Prerequisites

Before you get started, make sure you have installed [yagna](/docs/creators/tools/yagna/yagna-installation-for-requestors) and [created an app-key](/docs/creators/javascript/examples/using-app-keys#creating-unique-app-keys)

{% alert level="info" %}

The React SDK is designed to work with the yagna version 0.13.0 or above. If you have an older version installed, please update it before proceeding.

{% /alert %}

## Installation

To add the SDK to an existing React project simply install it and it's peer dependencies using your favorite package manager:

{% tabs %}

{% tab label="npm" %}

```bash
npm install @golem-sdk/react @golem-sdk/task-executor@2 @golem-sdk/golem-js@3
```

{% /tab %}
{% tab label="yarn" %}

```bash
yarn add @golem-sdk/react @golem-sdk/task-executor@2 @golem-sdk/golem-js@3
```

{% /tab %}
{% tab label="pnpm" %}

```bash
pnpm add @golem-sdk/react @golem-sdk/task-executor@2 @golem-sdk/golem-js@3
```

{% /tab %}
{% tab label="bun" %}

```bash
bun add @golem-sdk/react @golem-sdk/task-executor@2 @golem-sdk/golem-js@3
```

{% /tab %}

{% /tabs %}

## Configuring the SDK

Then make sure to wrap your app with the `YagnaProvider` component:

```jsx
<YagnaProvider>
  <App />
</YagnaProvider>
```

This provides context for the rest of the SDK. See the [YagnaProvider API reference](/docs/creators/javascript/react/yagna-provider) for the list of all available configuration options.

## Connecting to Yagna

Yagna blocks all requests from external origins by default. To allow the SDK to communicate with it you need start Yagna with `--api-allow-origin='<your-domain>'` flag. For example:

{% tabs %}

{% tab label="MacOS / Linux" %}

```shell
yagna service run --api-allow-origin='http://localhost:3000'
```

{% /tab %}
{% tab label="Windows" %}

```shell
yagna service run --api-allow-origin=http://localhost:3000
```

{% /tab %}
{% /tabs %}

## Putting it all together

Now that you have the SDK installed and configured, you can start using it in your app. Let's start with a simple example that displays the connection status to Yagna:

```jsx
function YagnaStatus() {
  const { isConnected, setYagnaOptions } = useYagna()
  const inputRef = useRef(null)
  if (isConnected) {
    return <span>Connected to Yagna!</span>
  }
  return (
    <div>
      <div>Enter your app key to connect to Yagna</div>
      <input ref={inputRef} />
      <button
        onClick={() => setYagnaOptions({ apiKey: inputRef.current.value })}
      >
        Set app key
      </button>
    </div>
  )
}
```

Add this component to your application and refresh the page. Enter your app-key and if you have set up everything correctly you should see "Connected to Yagna!".

{% docnavigation title="Next steps" %}

To learn more about the SDK, check out the [API reference](/docs/creators/javascript/react/api-reference-overview).

If you'd like to see the SDK in action before you start using it, check out the [example application](/docs/creators/javascript/react/#example-application).

{% /docnavigation %}

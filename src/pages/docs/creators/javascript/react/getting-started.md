---
title: Get started with the React SDK
description: Get started with the React SDK
type: Introduction
---

# Get started with the React SDK

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

This provides context for the rest of the SDK. See the [YagnaProvider API reference](/docs/creators/javascript/react/yagna-provider) for the list of all available configuration options.

## Connecting to Yagna

Yagna blocks all requests from external origins by default. To allow the SDK to communicate with it you need start Yagna with `--api-allow-origin='<your-domain>'` flag. For example:

```shell
yagna service run --api-allow-origin='http://localhost:3000'
```

## Putting it all together

Now that you have the SDK installed and configured, you can start using it in your app. Let's start with a simple example that displays the connection status to Yagna:

```jsx
function YagnaStatus() {
  const { isConnected, reconnect, isLoading, error } = useYagna()
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>Yagna is {isConnected ? 'connected' : 'disconnected'}</div>
      <button onClick={reconnect} disabled={isConnected}>
        Reconnect
      </button>
      {error && <div>Error: {error.toString()}</div>}
    </div>
  )
}
```

Add this component to your application and refresh the page. If you have set up everything correctly you should see "Yagna is connected"

{% docnavigation title="Next steps" %}

To learn more about the SDK, check out the [API reference](/docs/creators/javascript/react/api-reference-overview).

{% /docnavigation %}

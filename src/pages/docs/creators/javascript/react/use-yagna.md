---
title: useYagna
description: React hook for connecting to Yagna
type: reference
---

# useYagna

`useYagna` is a hook that provides information about the Yagna connection status. If connection cannot be established the hook will retry using an [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) algorithm. It returns an object with the following properties:

| Name        | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| isConnected | Boolean indicating whether the connection to Yagna is established.                           |
| isLoading   | Boolean indicating whether the connection to Yagna is being established.                     |
| error       | Error object containing information about the error that occurred while connecting to Yagna. |
| reconnect   | A function that can be used to reconnect to Yagna.                                           |

## Props

This hook doesn't accept any props.

## Example

```jsx
function MyComponent() {
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

---
title: useYagna
description: React hook for connecting to Yagna
type: React Reference
---

# useYagna

`useYagna` is a hook that provides information about the Yagna connection status. If the connection cannot be established, the hook will retry using an [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) algorithm. It returns an object with the following properties:

| Name            | Description                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| isConnected     | Boolean indicating whether the connection to Yagna is established.                           |
| isLoading       | Boolean indicating whether the connection to Yagna is being established.                     |
| error           | Error object containing information about the error that occurred while connecting to Yagna. |
| reconnect       | A function that can be used to reconnect to Yagna.                                           |
| setYagnaOptions | A function that can be used to set the app-key and base path for Yagna.                      |
| isAppKeySet     | Boolean indicating whether the app-key for Yagna is set.                                     |
| appKey          | The current app-key for Yagna.                                                               |
| basePath        | The current url for Yagna.                                                                   |

## Parameters

This hook doesn't accept any parameters.

## Example

```jsx
function MyComponent() {
  const { isConnected, appKey, setYagnaOptions } = useYagna()
  const inputRef = useRef(null)
  return (
    <div>
      <div>Connected to Yagna: {isConnected ? 'yes' : 'no'}</div>
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

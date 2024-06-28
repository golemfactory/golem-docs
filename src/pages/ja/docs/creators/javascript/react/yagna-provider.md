---
title: YagnaProvider
description: React component that provides context for the Golem React SDK
type: React Reference
---

# YagnaProvider

`YagnaProvider` is a React component that provides context for the rest of the Golem React SDK. It should be used as a wrapper for your app.

## Props

The component accepts a single prop `config` which is an object with the following properties:

| Name                   | Description                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| yagnaAppkey (optional) | Your 32-character Yagna app-key. If you haven't genereated one already use the command `yagna app-key create <key-name>` to generate one. If you don't provide an app-key here, you can set it later using the `useYagna` hook. |
| yagnaUrl (optional)    | The URL of the Yagna service. Defaults to `http://127.0.0.1:7465`. If you don't provide a URL here, you can set it later using the `useYagna` hook.                                                                             |
| swrKey (optional)      | The key used to prefix all SWR cache keys. Defaults to "golem-sdk"                                                                                                                                                              |

## Example

```jsx
// your app entry point
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { YagnaProvider } from "@golem-sdk/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YagnaProvider>
      <App />
    </YagnaProvider>
  </React.StrictMode>,
);
```

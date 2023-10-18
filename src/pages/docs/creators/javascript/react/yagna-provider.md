---
title: YagnaProvider
description: React component that provides context for the Golem React SDK
type: reference
---

# YagnaProvider

`YagnaProvider` is a React component that provides context for the rest of the Golem React SDK. It should be used as a wrapper for your app.

## Props

The component accepts a single prop `config` which is an object with the following properties:

| Name                   | Description                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| yagnaAppkey (required) | Your 32-character Yagna app-key. If you haven't genereated one already use the command `yagna app-key create <key-name>` to generate one. |
| yagnaUrl (optional)    | The URL of the Yagna service. Defaults to `http://127.0.0.1:7465`.                                                                        |
| swrKey (optional)      | The key used to prefix all SWR cache keys. Defaults to "golem-sdk"                                                                        |

## Example

```jsx
// your app entry point
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { YagnaProvider } from "@golem-sdk/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YagnaProvider
      config={{
        yagnaAppKey: 'your-yagna-app-key',
      }}
    >
      <App />
    </YagnaProvider>
  </React.StrictMode>,
);
```

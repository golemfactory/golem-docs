---
title: "Interface TcpProxyOptions"
pageTitle: "Interface TcpProxyOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface TcpProxyOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: TcpProxyOptions

[network/tcpProxy](../modules/network_tcpProxy).TcpProxyOptions

Configuration required by the TcpProxy to work properly

## Table of contents

### Properties

- [logger](network_tcpProxy.TcpProxyOptions#logger)
- [heartBeatSec](network_tcpProxy.TcpProxyOptions#heartbeatsec)

## Properties

### logger

• **logger**: [`Logger`](shared_utils_logger_logger.Logger)

The logger instance to use for logging

#### Defined in

[src/network/tcpProxy.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/tcpProxy.ts#L18)

___

### heartBeatSec

• **heartBeatSec**: `number`

Number of seconds to wait between heart-beating the WS connection ot yagna

**`Default`**

```ts
10
```

#### Defined in

[src/network/tcpProxy.ts:25](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/tcpProxy.ts#L25)

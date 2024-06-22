---
title: "Class TcpProxy"
pageTitle: "Class TcpProxy - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class TcpProxy within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: TcpProxy

[network/tcpProxy](../modules/network_tcpProxy).TcpProxy

Allows proxying of TCP traffic to a service running in an activity on a provider via the requestor

**IMPORTANT**

This feature is supported only in the Node.js environment. In has no effect in browsers.

## Table of contents

### Constructors

- [constructor](network_tcpProxy.TcpProxy#constructor)

### Properties

- [events](network_tcpProxy.TcpProxy#events)

### Methods

- [listen](network_tcpProxy.TcpProxy#listen)
- [close](network_tcpProxy.TcpProxy#close)

## Constructors

### constructor

• **new TcpProxy**(`wsUrl`, `appKey`, `options`): [`TcpProxy`](network_tcpProxy.TcpProxy)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wsUrl` | `string` | The URL to the WebSocket implementing the communication transport layer |
| `appKey` | `string` | The yagna app-key used to authenticate the WebSocket connection |
| `options` | `Partial`\<[`TcpProxyOptions`](../interfaces/network_tcpProxy.TcpProxyOptions)\> | Additional options of the proxy |

#### Returns

[`TcpProxy`](network_tcpProxy.TcpProxy)

#### Defined in

[src/network/tcpProxy.ts:44](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/tcpProxy.ts#L44)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`TcpProxyEvents`](../interfaces/network_tcpProxy.TcpProxyEvents), `any`\>

#### Defined in

[src/network/tcpProxy.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/tcpProxy.ts#L38)

## Methods

### listen

▸ **listen**(`port`, `abort?`): `Promise`\<`void`\>

Start the proxy in listening mode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `port` | `number` | The port number to use on the requestor |
| `abort?` | `AbortController` | The abort controller to use in order to control cancelling requests |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/network/tcpProxy.ts:134](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/tcpProxy.ts#L134)

___

### close

▸ **close**(): `Promise`\<`void`\>

Gracefully close the proxy

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/network/tcpProxy.ts:163](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/tcpProxy.ts#L163)

---
title: "Class NetworkNode"
pageTitle: "Class NetworkNode - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class NetworkNode within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: NetworkNode

[network/node](../modules/network_node).NetworkNode

Describes a node in a VPN, mapping a Golem node id to an IP address

## Table of contents

### Constructors

- [constructor](network_node.NetworkNode#constructor)

### Properties

- [id](network_node.NetworkNode#id)
- [ip](network_node.NetworkNode#ip)
- [getNetworkInfo](network_node.NetworkNode#getnetworkinfo)
- [yagnaBaseUri](network_node.NetworkNode#yagnabaseuri)

### Methods

- [getNetworkConfig](network_node.NetworkNode#getnetworkconfig)
- [getWebsocketUri](network_node.NetworkNode#getwebsocketuri)

## Constructors

### constructor

• **new NetworkNode**(`id`, `ip`, `getNetworkInfo`, `yagnaBaseUri`): [`NetworkNode`](network_node.NetworkNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `ip` | `string` |
| `getNetworkInfo` | () => [`NetworkInfo`](../interfaces/network_network.NetworkInfo) |
| `yagnaBaseUri` | `string` |

#### Returns

[`NetworkNode`](network_node.NetworkNode)

#### Defined in

[src/network/node.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L7)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/network/node.ts:8](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L8)

___

### ip

• `Readonly` **ip**: `string`

#### Defined in

[src/network/node.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L9)

___

### getNetworkInfo

• **getNetworkInfo**: () => [`NetworkInfo`](../interfaces/network_network.NetworkInfo)

#### Type declaration

▸ (): [`NetworkInfo`](../interfaces/network_network.NetworkInfo)

##### Returns

[`NetworkInfo`](../interfaces/network_network.NetworkInfo)

#### Defined in

[src/network/node.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L10)

___

### yagnaBaseUri

• **yagnaBaseUri**: `string`

#### Defined in

[src/network/node.ts:11](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L11)

## Methods

### getNetworkConfig

▸ **getNetworkConfig**(): `Object`

Generate a dictionary of arguments that are required for the appropriate
`Deploy` command of an exescript in order to pass the network configuration to the runtime
on the provider's end.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `net` | \{ `nodeIp`: `string` ; `id`: `string` ; `ip`: `string` ; `mask`: `string` ; `gateway?`: `string` ; `nodes`: \{ `[ip: string]`: `string`;  }  }[] |

#### Defined in

[src/network/node.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L19)

___

### getWebsocketUri

▸ **getWebsocketUri**(`port`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`string`

#### Defined in

[src/network/node.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/node.ts#L30)

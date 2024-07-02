---
title: "Interface NetworkModule"
pageTitle: "Interface NetworkModule - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface NetworkModule within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: NetworkModule

[network/network.module](../modules/network_network_module).NetworkModule

## Implemented by

- [`NetworkModuleImpl`](../classes/network_network_module.NetworkModuleImpl)

## Table of contents

### Properties

- [events](network_network_module.NetworkModule#events)

### Methods

- [createNetwork](network_network_module.NetworkModule#createnetwork)
- [removeNetwork](network_network_module.NetworkModule#removenetwork)
- [createNetworkNode](network_network_module.NetworkModule#createnetworknode)
- [removeNetworkNode](network_network_module.NetworkModule#removenetworknode)

## Properties

### events

• **events**: `EventEmitter`\<[`NetworkEvents`](network_api.NetworkEvents), `any`\>

#### Defined in

[src/network/network.module.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L39)

## Methods

### createNetwork

▸ **createNetwork**(`options?`): `Promise`\<[`Network`](../classes/network_network.Network)\>

Creates a new network with the specified options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`NetworkOptions`](network_network_module.NetworkOptions) | NetworkOptions |

#### Returns

`Promise`\<[`Network`](../classes/network_network.Network)\>

#### Defined in

[src/network/network.module.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L45)

___

### removeNetwork

▸ **removeNetwork**(`network`): `Promise`\<`void`\>

Removes an existing network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) | The network to be removed. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/network/network.module.ts:51](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L51)

___

### createNetworkNode

▸ **createNetworkNode**(`network`, `nodeId`, `nodeIp?`): `Promise`\<[`NetworkNode`](../classes/network_node.NetworkNode)\>

Creates a new node within a specified network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) | The network to which the node will be added. |
| `nodeId` | `string` | The ID of the node to be created. |
| `nodeIp?` | `string` | Optional IP address for the node. If not provided, the first available IP address will be assigned. |

#### Returns

`Promise`\<[`NetworkNode`](../classes/network_node.NetworkNode)\>

#### Defined in

[src/network/network.module.ts:59](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L59)

___

### removeNetworkNode

▸ **removeNetworkNode**(`network`, `node`): `Promise`\<`void`\>

Removes an existing node from a specified network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) | The network from which the node will be removed. |
| `node` | [`NetworkNode`](../classes/network_node.NetworkNode) | The node to be removed. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/network/network.module.ts:66](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L66)

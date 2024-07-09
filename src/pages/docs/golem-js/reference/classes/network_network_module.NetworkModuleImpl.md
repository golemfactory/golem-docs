---
title: "Class NetworkModuleImpl"
pageTitle: "Class NetworkModuleImpl - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class NetworkModuleImpl within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: NetworkModuleImpl

[network/network.module](../modules/network_network_module).NetworkModuleImpl

## Implements

- [`NetworkModule`](../interfaces/network_network_module.NetworkModule)

## Table of contents

### Constructors

- [constructor](network_network_module.NetworkModuleImpl#constructor)

### Properties

- [events](network_network_module.NetworkModuleImpl#events)

### Methods

- [createNetwork](network_network_module.NetworkModuleImpl#createnetwork)
- [removeNetwork](network_network_module.NetworkModuleImpl#removenetwork)
- [createNetworkNode](network_network_module.NetworkModuleImpl#createnetworknode)
- [removeNetworkNode](network_network_module.NetworkModuleImpl#removenetworknode)

## Constructors

### constructor

• **new NetworkModuleImpl**(`deps`): [`NetworkModuleImpl`](network_network_module.NetworkModuleImpl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deps` | `Object` |
| `deps.logger?` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |
| `deps.networkApi` | [`INetworkApi`](../interfaces/network_api.INetworkApi) |

#### Returns

[`NetworkModuleImpl`](network_network_module.NetworkModuleImpl)

#### Defined in

[src/network/network.module.ts:78](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L78)

## Properties

### events

• **events**: `EventEmitter`\<[`NetworkEvents`](../interfaces/network_api.NetworkEvents), `any`\>

#### Implementation of

[NetworkModule](../interfaces/network_network_module.NetworkModule).[events](../interfaces/network_network_module.NetworkModule#events)

#### Defined in

[src/network/network.module.ts:70](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L70)

## Methods

### createNetwork

▸ **createNetwork**(`options?`): `Promise`\<[`Network`](network_network.Network)\>

Creates a new network with the specified options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`NetworkOptions`](../interfaces/network_network_module.NetworkOptions) | NetworkOptions |

#### Returns

`Promise`\<[`Network`](network_network.Network)\>

#### Implementation of

[NetworkModule](../interfaces/network_network_module.NetworkModule).[createNetwork](../interfaces/network_network_module.NetworkModule#createnetwork)

#### Defined in

[src/network/network.module.ts:85](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L85)

___

### removeNetwork

▸ **removeNetwork**(`network`): `Promise`\<`void`\>

Removes an existing network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](network_network.Network) | The network to be removed. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[NetworkModule](../interfaces/network_network_module.NetworkModule).[removeNetwork](../interfaces/network_network_module.NetworkModule#removenetwork)

#### Defined in

[src/network/network.module.ts:121](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L121)

___

### createNetworkNode

▸ **createNetworkNode**(`network`, `nodeId`, `nodeIp?`): `Promise`\<[`NetworkNode`](network_node.NetworkNode)\>

Creates a new node within a specified network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](network_network.Network) | The network to which the node will be added. |
| `nodeId` | `string` | The ID of the node to be created. |
| `nodeIp?` | `string` | Optional IP address for the node. If not provided, the first available IP address will be assigned. |

#### Returns

`Promise`\<[`NetworkNode`](network_node.NetworkNode)\>

#### Implementation of

[NetworkModule](../interfaces/network_network_module.NetworkModule).[createNetworkNode](../interfaces/network_network_module.NetworkModule#createnetworknode)

#### Defined in

[src/network/network.module.ts:136](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L136)

___

### removeNetworkNode

▸ **removeNetworkNode**(`network`, `node`): `Promise`\<`void`\>

Removes an existing node from a specified network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](network_network.Network) | The network from which the node will be removed. |
| `node` | [`NetworkNode`](network_node.NetworkNode) | The node to be removed. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[NetworkModule](../interfaces/network_network_module.NetworkModule).[removeNetworkNode](../interfaces/network_network_module.NetworkModule#removenetworknode)

#### Defined in

[src/network/network.module.ts:167](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.module.ts#L167)

---
title: "Interface INetworkApi"
pageTitle: "Interface INetworkApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface INetworkApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: INetworkApi

[network/api](../modules/network_api).INetworkApi

## Implemented by

- [`NetworkApiAdapter`](../classes/shared_yagna_adapters_network_api_adapter.NetworkApiAdapter)

## Table of contents

### Methods

- [createNetwork](network_api.INetworkApi#createnetwork)
- [removeNetwork](network_api.INetworkApi#removenetwork)
- [createNetworkNode](network_api.INetworkApi#createnetworknode)
- [removeNetworkNode](network_api.INetworkApi#removenetworknode)
- [getIdentity](network_api.INetworkApi#getidentity)

## Methods

### createNetwork

▸ **createNetwork**(`options`): `Promise`\<[`Network`](../classes/network_network.Network)\>

Creates a new network with the specified options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`NetworkOptions`](network_network_module.NetworkOptions) | NetworkOptions |

#### Returns

`Promise`\<[`Network`](../classes/network_network.Network)\>

#### Defined in

[src/network/api.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L24)

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

[src/network/api.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L30)

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

[src/network/api.ts:39](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L39)

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

[src/network/api.ts:46](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L46)

___

### getIdentity

▸ **getIdentity**(): `Promise`\<`string`\>

Returns the identifier of the requesor

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/network/api.ts:51](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L51)

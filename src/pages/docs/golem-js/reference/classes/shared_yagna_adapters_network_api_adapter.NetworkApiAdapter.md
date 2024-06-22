---
title: "Class NetworkApiAdapter"
pageTitle: "Class NetworkApiAdapter - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class NetworkApiAdapter within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: NetworkApiAdapter

[shared/yagna/adapters/network-api-adapter](../modules/shared_yagna_adapters_network_api_adapter).NetworkApiAdapter

## Implements

- [`INetworkApi`](../interfaces/network_api.INetworkApi)

## Table of contents

### Constructors

- [constructor](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter#constructor)

### Methods

- [createNetwork](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter#createnetwork)
- [removeNetwork](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter#removenetwork)
- [createNetworkNode](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter#createnetworknode)
- [removeNetworkNode](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter#removenetworknode)
- [getIdentity](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter#getidentity)

## Constructors

### constructor

• **new NetworkApiAdapter**(`yagnaApi`): [`NetworkApiAdapter`](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `yagnaApi` | [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi) |

#### Returns

[`NetworkApiAdapter`](shared_yagna_adapters_network_api_adapter.NetworkApiAdapter)

#### Defined in

[src/shared/yagna/adapters/network-api-adapter.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/network-api-adapter.ts#L6)

## Methods

### createNetwork

▸ **createNetwork**(`options`): `Promise`\<[`Network`](network_network.Network)\>

Creates a new network with the specified options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | NetworkOptions |
| `options.ip` | `string` | - |
| `options.mask?` | `string` | - |
| `options.gateway?` | `string` | - |

#### Returns

`Promise`\<[`Network`](network_network.Network)\>

#### Implementation of

[INetworkApi](../interfaces/network_api.INetworkApi).[createNetwork](../interfaces/network_api.INetworkApi#createnetwork)

#### Defined in

[src/shared/yagna/adapters/network-api-adapter.ts:8](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/network-api-adapter.ts#L8)

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

[INetworkApi](../interfaces/network_api.INetworkApi).[removeNetwork](../interfaces/network_api.INetworkApi#removenetwork)

#### Defined in

[src/shared/yagna/adapters/network-api-adapter.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/network-api-adapter.ts#L22)

___

### createNetworkNode

▸ **createNetworkNode**(`network`, `nodeId`, `nodeIp`): `Promise`\<[`NetworkNode`](network_node.NetworkNode)\>

Creates a new node within a specified network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | [`Network`](network_network.Network) | The network to which the node will be added. |
| `nodeId` | `string` | The ID of the node to be created. |
| `nodeIp` | `string` | Optional IP address for the node. If not provided, the first available IP address will be assigned. |

#### Returns

`Promise`\<[`NetworkNode`](network_node.NetworkNode)\>

#### Implementation of

[INetworkApi](../interfaces/network_api.INetworkApi).[createNetworkNode](../interfaces/network_api.INetworkApi#createnetworknode)

#### Defined in

[src/shared/yagna/adapters/network-api-adapter.ts:35](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/network-api-adapter.ts#L35)

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

[INetworkApi](../interfaces/network_api.INetworkApi).[removeNetworkNode](../interfaces/network_api.INetworkApi#removenetworknode)

#### Defined in

[src/shared/yagna/adapters/network-api-adapter.ts:56](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/network-api-adapter.ts#L56)

___

### getIdentity

▸ **getIdentity**(): `Promise`\<`string`\>

Returns the identifier of the requesor

#### Returns

`Promise`\<`string`\>

#### Implementation of

[INetworkApi](../interfaces/network_api.INetworkApi).[getIdentity](../interfaces/network_api.INetworkApi#getidentity)

#### Defined in

[src/shared/yagna/adapters/network-api-adapter.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/adapters/network-api-adapter.ts#L70)

---
title: "Class Network"
pageTitle: "Class Network - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Network within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Network

[network/network](../modules/network_network).Network

## Table of contents

### Constructors

- [constructor](network_network.Network#constructor)

### Properties

- [id](network_network.Network#id)

### Methods

- [getNetworkInfo](network_network.Network#getnetworkinfo)
- [addNode](network_network.Network#addnode)
- [hasNode](network_network.Network#hasnode)
- [removeNode](network_network.Network#removenode)
- [markAsRemoved](network_network.Network#markasremoved)
- [getFirstAvailableIpAddress](network_network.Network#getfirstavailableipaddress)
- [isIpInNetwork](network_network.Network#isipinnetwork)
- [isNodeIdUnique](network_network.Network#isnodeidunique)
- [isNodeIpUnique](network_network.Network#isnodeipunique)
- [isRemoved](network_network.Network#isremoved)

## Constructors

### constructor

• **new Network**(`id`, `ip`, `mask?`, `gateway?`): [`Network`](network_network.Network)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `ip` | `string` |
| `mask?` | `string` |
| `gateway?` | `string` |

#### Returns

[`Network`](network_network.Network)

#### Defined in

[src/network/network.ts:27](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L27)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/network/network.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L28)

## Methods

### getNetworkInfo

▸ **getNetworkInfo**(): [`NetworkInfo`](../interfaces/network_network.NetworkInfo)

Returns information about the network.

#### Returns

[`NetworkInfo`](../interfaces/network_network.NetworkInfo)

#### Defined in

[src/network/network.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L45)

___

### addNode

▸ **addNode**(`node`): `void`

Adds a node to the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`NetworkNode`](network_node.NetworkNode) | The network node to be added. |

#### Returns

`void`

#### Defined in

[src/network/network.ts:59](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L59)

___

### hasNode

▸ **hasNode**(`node`): `boolean`

Checks whether the node belongs to the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`NetworkNode`](network_node.NetworkNode) | The network node to check. |

#### Returns

`boolean`

#### Defined in

[src/network/network.ts:80](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L80)

___

### removeNode

▸ **removeNode**(`node`): `void`

Removes a node from the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`NetworkNode`](network_node.NetworkNode) | The network node to be removed. |

#### Returns

`void`

#### Defined in

[src/network/network.ts:88](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L88)

___

### markAsRemoved

▸ **markAsRemoved**(): `void`

#### Returns

`void`

#### Defined in

[src/network/network.ts:102](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L102)

___

### getFirstAvailableIpAddress

▸ **getFirstAvailableIpAddress**(): `IPv4`

Returns the first available IP address in the network.

#### Returns

`IPv4`

#### Defined in

[src/network/network.ts:112](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L112)

___

### isIpInNetwork

▸ **isIpInNetwork**(`ip`): `boolean`

Checks if a given IP address is within the network range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ip` | `IPv4` | The IPv4 address to check. |

#### Returns

`boolean`

#### Defined in

[src/network/network.ts:127](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L127)

___

### isNodeIdUnique

▸ **isNodeIdUnique**(`id`): `boolean`

Checks if a given node ID is unique within the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The node ID to check. |

#### Returns

`boolean`

#### Defined in

[src/network/network.ts:135](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L135)

___

### isNodeIpUnique

▸ **isNodeIpUnique**(`ip`): `boolean`

Checks if a given IP address is unique within the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `IPv4` |

#### Returns

`boolean`

#### Defined in

[src/network/network.ts:142](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L142)

___

### isRemoved

▸ **isRemoved**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/network/network.ts:149](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/network.ts#L149)

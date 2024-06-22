---
title: "Interface NetworkEvents"
pageTitle: "Interface NetworkEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface NetworkEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: NetworkEvents

[network/api](../modules/network_api).NetworkEvents

## Table of contents

### Properties

- [networkCreated](network_api.NetworkEvents#networkcreated)
- [errorCreatingNetwork](network_api.NetworkEvents#errorcreatingnetwork)
- [networkRemoved](network_api.NetworkEvents#networkremoved)
- [errorRemovingNetwork](network_api.NetworkEvents#errorremovingnetwork)
- [nodeCreated](network_api.NetworkEvents#nodecreated)
- [errorCreatingNode](network_api.NetworkEvents#errorcreatingnode)
- [nodeRemoved](network_api.NetworkEvents#noderemoved)
- [errorRemovingNode](network_api.NetworkEvents#errorremovingnode)

## Properties

### networkCreated

• **networkCreated**: (`network`: [`Network`](../classes/network_network.Network)) => `void`

#### Type declaration

▸ (`network`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L6)

___

### errorCreatingNetwork

• **errorCreatingNetwork**: (`error`: `Error`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:7](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L7)

___

### networkRemoved

• **networkRemoved**: (`network`: [`Network`](../classes/network_network.Network)) => `void`

#### Type declaration

▸ (`network`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:9](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L9)

___

### errorRemovingNetwork

• **errorRemovingNetwork**: (`network`: [`Network`](../classes/network_network.Network), `error`: `Error`) => `void`

#### Type declaration

▸ (`network`, `error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L10)

___

### nodeCreated

• **nodeCreated**: (`network`: [`Network`](../classes/network_network.Network), `node`: [`NetworkNode`](../classes/network_node.NetworkNode)) => `void`

#### Type declaration

▸ (`network`, `node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |
| `node` | [`NetworkNode`](../classes/network_node.NetworkNode) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L12)

___

### errorCreatingNode

• **errorCreatingNode**: (`network`: [`Network`](../classes/network_network.Network), `error`: `Error`) => `void`

#### Type declaration

▸ (`network`, `error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:13](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L13)

___

### nodeRemoved

• **nodeRemoved**: (`network`: [`Network`](../classes/network_network.Network), `node`: [`NetworkNode`](../classes/network_node.NetworkNode)) => `void`

#### Type declaration

▸ (`network`, `node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |
| `node` | [`NetworkNode`](../classes/network_node.NetworkNode) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L15)

___

### errorRemovingNode

• **errorRemovingNode**: (`network`: [`Network`](../classes/network_network.Network), `node`: [`NetworkNode`](../classes/network_node.NetworkNode), `error`: `Error`) => `void`

#### Type declaration

▸ (`network`, `node`, `error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](../classes/network_network.Network) |
| `node` | [`NetworkNode`](../classes/network_node.NetworkNode) |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/network/api.ts#L16)

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

• **networkCreated**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:6](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L6)

___

### errorCreatingNetwork

• **errorCreatingNetwork**: (`event`: \{ `error`: `Error`  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L7)

___

### networkRemoved

• **networkRemoved**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L9)

___

### errorRemovingNetwork

• **errorRemovingNetwork**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network) ; `error`: `Error`  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |
| `event.error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:10](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L10)

___

### nodeCreated

• **nodeCreated**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network) ; `node`: [`NetworkNode`](../classes/network_node.NetworkNode)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |
| `event.node` | [`NetworkNode`](../classes/network_node.NetworkNode) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L12)

___

### errorCreatingNode

• **errorCreatingNode**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network) ; `error`: `Error`  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |
| `event.error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:13](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L13)

___

### nodeRemoved

• **nodeRemoved**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network) ; `node`: [`NetworkNode`](../classes/network_node.NetworkNode)  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |
| `event.node` | [`NetworkNode`](../classes/network_node.NetworkNode) |

##### Returns

`void`

#### Defined in

[src/network/api.ts:15](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L15)

___

### errorRemovingNode

• **errorRemovingNode**: (`event`: \{ `network`: [`Network`](../classes/network_network.Network) ; `node`: [`NetworkNode`](../classes/network_node.NetworkNode) ; `error`: `Error`  }) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.network` | [`Network`](../classes/network_network.Network) |
| `event.node` | [`NetworkNode`](../classes/network_node.NetworkNode) |
| `event.error` | `Error` |

##### Returns

`void`

#### Defined in

[src/network/api.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/network/api.ts#L16)

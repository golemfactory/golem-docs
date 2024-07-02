---
title: "Interface GolemNetworkEvents"
pageTitle: "Interface GolemNetworkEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface GolemNetworkEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: GolemNetworkEvents

[golem-network/golem-network](../modules/golem_network_golem_network).GolemNetworkEvents

## Table of contents

### Properties

- [connected](golem_network_golem_network.GolemNetworkEvents#connected)
- [error](golem_network_golem_network.GolemNetworkEvents#error)
- [disconnected](golem_network_golem_network.GolemNetworkEvents#disconnected)

## Properties

### connected

• **connected**: () => `void`

Fires when all startup operations related to GN are completed

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/golem-network/golem-network.ts:151](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L151)

___

### error

• **error**: (`error`: `Error`) => `void`

Fires when an error will be encountered

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/golem-network/golem-network.ts:154](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L154)

___

### disconnected

• **disconnected**: () => `void`

Fires when all shutdown operations related to GN are completed

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/golem-network/golem-network.ts:157](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/golem-network/golem-network.ts#L157)

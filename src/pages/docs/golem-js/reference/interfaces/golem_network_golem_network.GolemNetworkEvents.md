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

[src/golem-network/golem-network.ts:135](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L135)

___

### error

• **error**: (`err`: `Error`) => `void`

Fires when an error will be encountered

#### Type declaration

▸ (`err`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

##### Returns

`void`

#### Defined in

[src/golem-network/golem-network.ts:138](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L138)

___

### disconnected

• **disconnected**: () => `void`

Fires when all shutdown operations related to GN are completed

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/golem-network/golem-network.ts:141](https://github.com/golemfactory/golem-js/blob/570126bc/src/golem-network/golem-network.ts#L141)

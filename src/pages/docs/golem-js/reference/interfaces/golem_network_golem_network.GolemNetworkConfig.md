---
title: "Interface GolemNetworkConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface GolemNetworkConfig within the golem-js SDK for the Golem Network."
type: "reference"
---
# Interface: GolemNetworkConfig

[golem_network/golem_network](../modules/golem_network_golem_network).GolemNetworkConfig

## Table of contents

### Properties

- [image](golem_network_golem_network.GolemNetworkConfig#image)
- [demand](golem_network_golem_network.GolemNetworkConfig#demand)
- [enableLogging](golem_network_golem_network.GolemNetworkConfig#enablelogging)
- [beforeEachJob](golem_network_golem_network.GolemNetworkConfig#beforeeachjob)

## Properties

### image

• `Optional` **image**: `string`

#### Defined in

[src/golem_network/golem_network.ts:6](https://github.com/golemfactory/golem-js/blob/0448b6b/src/golem_network/golem_network.ts#L6)

___

### demand

• `Optional` **demand**: `Pick`<[`PackageOptions`](../modules/package_package#packageoptions), ``"minMemGib"`` \| ``"minStorageGib"`` \| ``"minCpuThreads"`` \| ``"minCpuCores"`` \| ``"capabilities"``\>

#### Defined in

[src/golem_network/golem_network.ts:7](https://github.com/golemfactory/golem-js/blob/0448b6b/src/golem_network/golem_network.ts#L7)

___

### enableLogging

• `Optional` **enableLogging**: `boolean`

#### Defined in

[src/golem_network/golem_network.ts:8](https://github.com/golemfactory/golem-js/blob/0448b6b/src/golem_network/golem_network.ts#L8)

___

### beforeEachJob

• `Optional` **beforeEachJob**: [`Worker`](../modules/task_work#worker)<`unknown`, `unknown`\>

#### Defined in

[src/golem_network/golem_network.ts:9](https://github.com/golemfactory/golem-js/blob/0448b6b/src/golem_network/golem_network.ts#L9)

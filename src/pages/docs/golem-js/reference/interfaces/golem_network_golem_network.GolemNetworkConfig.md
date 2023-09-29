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
- [yagnaOptions](golem_network_golem_network.GolemNetworkConfig#yagnaoptions)
- [demand](golem_network_golem_network.GolemNetworkConfig#demand)
- [enableLogging](golem_network_golem_network.GolemNetworkConfig#enablelogging)
- [beforeEachJob](golem_network_golem_network.GolemNetworkConfig#beforeeachjob)
- [jobStorage](golem_network_golem_network.GolemNetworkConfig#jobstorage)

## Properties

### image

• `Optional` **image**: `string`

Image that will be uploaded to the provider and used to run the task. Defaults to `golem/alpine:latest`.

#### Defined in

[src/golem_network/golem_network.ts:10](https://github.com/golemfactory/golem-js/blob/4d68c3f/src/golem_network/golem_network.ts#L10)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

Yagna options. See [YagnaOptions](../modules/executor_executor#yagnaoptions) for more information.

#### Defined in

[src/golem_network/golem_network.ts:14](https://github.com/golemfactory/golem-js/blob/4d68c3f/src/golem_network/golem_network.ts#L14)

___

### demand

• `Optional` **demand**: `Pick`<[`PackageOptions`](../modules/package_package#packageoptions), ``"minMemGib"`` \| ``"minStorageGib"`` \| ``"minCpuThreads"`` \| ``"minCpuCores"`` \| ``"capabilities"``\>

Minimum hardware requirements for the provider. The available options are:
- `minMemGib` - minimum required RAM in GiB
- `minStorageGib` - minimum required storage in GiB
- `minCpuThreads` - minimum required CPU threads
- `minCpuCores` - minimum required CPU cores
- `capabilities` - required provider capabilities

#### Defined in

[src/golem_network/golem_network.ts:23](https://github.com/golemfactory/golem-js/blob/4d68c3f/src/golem_network/golem_network.ts#L23)

___

### enableLogging

• `Optional` **enableLogging**: `boolean`

If you want to see logs from the Golem node set this to true. Defaults to `false`.

#### Defined in

[src/golem_network/golem_network.ts:27](https://github.com/golemfactory/golem-js/blob/4d68c3f/src/golem_network/golem_network.ts#L27)

___

### beforeEachJob

• `Optional` **beforeEachJob**: [`Worker`](../modules/task_work#worker)<`unknown`, `unknown`\>

Function that will be run before each job. You can use it to set up the environment for your job. For example, you can upload a file to the provider.

#### Defined in

[src/golem_network/golem_network.ts:31](https://github.com/golemfactory/golem-js/blob/4d68c3f/src/golem_network/golem_network.ts#L31)

___

### jobStorage

• `Optional` **jobStorage**: [`JobStorage`](job_storage.JobStorage)

Job storage. By default Golem Network uses a simple in-memory storage for job statuses and results. In a real application you should use some persistent storage (e.g. a database). See [JobStorage](job_storage.JobStorage) for more information.

#### Defined in

[src/golem_network/golem_network.ts:35](https://github.com/golemfactory/golem-js/blob/4d68c3f/src/golem_network/golem_network.ts#L35)

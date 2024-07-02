---
title: "Class WorkloadDemandDirectorConfig"
pageTitle: "Class WorkloadDemandDirectorConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WorkloadDemandDirectorConfig within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: WorkloadDemandDirectorConfig

[market/demand/directors/workload-demand-director-config](../modules/market_demand_directors_workload_demand_director_config).WorkloadDemandDirectorConfig

Basic config utility class

Helps in building more specific config classes

## Hierarchy

- [`BaseConfig`](market_demand_directors_base_config.BaseConfig)

  ↳ **`WorkloadDemandDirectorConfig`**

## Table of contents

### Constructors

- [constructor](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#constructor)

### Properties

- [packageFormat](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#packageformat)
- [engine](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#engine)
- [minMemGib](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#minmemgib)
- [minStorageGib](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#minstoragegib)
- [minCpuThreads](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#mincputhreads)
- [minCpuCores](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#mincpucores)
- [capabilities](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#capabilities)
- [expirationSec](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#expirationsec)
- [manifest](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifest)
- [manifestSig](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifestsig)
- [manifestSigAlgorithm](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifestsigalgorithm)
- [manifestCert](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifestcert)
- [useHttps](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#usehttps)
- [imageHash](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#imagehash)
- [imageTag](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#imagetag)
- [imageUrl](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#imageurl)

### Methods

- [isPositiveInt](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#ispositiveint)

## Constructors

### constructor

• **new WorkloadDemandDirectorConfig**(`options`): [`WorkloadDemandDirectorConfig`](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`WorkloadDemandDirectorConfigOptions`](../modules/market_demand_options#workloaddemanddirectorconfigoptions)\> & `RequiredWorkloadDemandConfigOptions` |

#### Returns

[`WorkloadDemandDirectorConfig`](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig)

#### Overrides

[BaseConfig](market_demand_directors_base_config.BaseConfig).[constructor](market_demand_directors_base_config.BaseConfig#constructor)

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:34](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L34)

## Properties

### packageFormat

• `Readonly` **packageFormat**: `string` = `PackageFormat.GVMKitSquash`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:15](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L15)

___

### engine

• `Readonly` **engine**: `string` = `"vm"`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:16](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L16)

___

### minMemGib

• `Readonly` **minMemGib**: `number` = `0.5`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:17](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L17)

___

### minStorageGib

• `Readonly` **minStorageGib**: `number` = `2`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:18](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L18)

___

### minCpuThreads

• `Readonly` **minCpuThreads**: `number` = `1`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L19)

___

### minCpuCores

• `Readonly` **minCpuCores**: `number` = `1`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:20](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L20)

___

### capabilities

• `Readonly` **capabilities**: `string`[] = `[]`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:21](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L21)

___

### expirationSec

• `Readonly` **expirationSec**: `number`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:23](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L23)

___

### manifest

• `Optional` `Readonly` **manifest**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:25](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L25)

___

### manifestSig

• `Optional` `Readonly` **manifestSig**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:26](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L26)

___

### manifestSigAlgorithm

• `Optional` `Readonly` **manifestSigAlgorithm**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:27](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L27)

___

### manifestCert

• `Optional` `Readonly` **manifestCert**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L28)

___

### useHttps

• `Optional` `Readonly` **useHttps**: `boolean` = `false`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:29](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L29)

___

### imageHash

• `Optional` `Readonly` **imageHash**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L30)

___

### imageTag

• `Optional` `Readonly` **imageTag**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:31](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L31)

___

### imageUrl

• `Optional` `Readonly` **imageUrl**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:32](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/workload-demand-director-config.ts#L32)

## Methods

### isPositiveInt

▸ **isPositiveInt**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Inherited from

[BaseConfig](market_demand_directors_base_config.BaseConfig).[isPositiveInt](market_demand_directors_base_config.BaseConfig#ispositiveint)

#### Defined in

[src/market/demand/directors/base-config.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/base-config.ts#L7)

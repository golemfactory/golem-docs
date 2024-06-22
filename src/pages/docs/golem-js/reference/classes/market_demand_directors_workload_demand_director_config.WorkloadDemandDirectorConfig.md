---
title: "Class WorkloadDemandDirectorConfig"
pageTitle: "Class WorkloadDemandDirectorConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class WorkloadDemandDirectorConfig within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: WorkloadDemandDirectorConfig

[market/demand/directors/workload-demand-director-config](../modules/market_demand_directors_workload_demand_director_config).WorkloadDemandDirectorConfig

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
- [manifest](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifest)
- [manifestSig](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifestsig)
- [manifestSigAlgorithm](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifestsigalgorithm)
- [manifestCert](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#manifestcert)
- [useHttps](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#usehttps)
- [imageHash](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#imagehash)
- [imageTag](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#imagetag)
- [imageUrl](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig#imageurl)

## Constructors

### constructor

• **new WorkloadDemandDirectorConfig**(`options?`): [`WorkloadDemandDirectorConfig`](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`WorkloadDemandDirectorConfigOptions`](../modules/market_demand_options#workloaddemanddirectorconfigoptions)\> |

#### Returns

[`WorkloadDemandDirectorConfig`](market_demand_directors_workload_demand_director_config.WorkloadDemandDirectorConfig)

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:25](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L25)

## Properties

### packageFormat

• `Readonly` **packageFormat**: `string` = `PackageFormat.GVMKitSquash`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:9](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L9)

___

### engine

• `Readonly` **engine**: `string` = `"vm"`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:10](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L10)

___

### minMemGib

• `Readonly` **minMemGib**: `number` = `0.5`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:11](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L11)

___

### minStorageGib

• `Readonly` **minStorageGib**: `number` = `2`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:12](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L12)

___

### minCpuThreads

• `Readonly` **minCpuThreads**: `number` = `1`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:13](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L13)

___

### minCpuCores

• `Readonly` **minCpuCores**: `number` = `1`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:14](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L14)

___

### capabilities

• `Readonly` **capabilities**: `string`[] = `[]`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:15](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L15)

___

### manifest

• `Optional` `Readonly` **manifest**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L16)

___

### manifestSig

• `Optional` `Readonly` **manifestSig**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L17)

___

### manifestSigAlgorithm

• `Optional` `Readonly` **manifestSigAlgorithm**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:18](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L18)

___

### manifestCert

• `Optional` `Readonly` **manifestCert**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:19](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L19)

___

### useHttps

• `Optional` `Readonly` **useHttps**: `boolean` = `false`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L20)

___

### imageHash

• `Optional` `Readonly` **imageHash**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:21](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L21)

___

### imageTag

• `Optional` `Readonly` **imageTag**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L22)

___

### imageUrl

• `Optional` `Readonly` **imageUrl**: `string`

#### Defined in

[src/market/demand/directors/workload-demand-director-config.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/directors/workload-demand-director-config.ts#L23)

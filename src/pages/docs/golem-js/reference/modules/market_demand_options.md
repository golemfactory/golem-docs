---
title: "Module market/demand/options"
pageTitle: "Module market/demand/options - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/demand/options within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/demand/options

## Table of contents

### Type Aliases

- [ResourceDemandOptions](market_demand_options#resourcedemandoptions)
- [RuntimeDemandOptions](market_demand_options#runtimedemandoptions)
- [ManifestDemandOptions](market_demand_options#manifestdemandoptions)
- [ImageDemandOptions](market_demand_options#imagedemandoptions)
- [WorkloadDemandDirectorConfigOptions](market_demand_options#workloaddemanddirectorconfigoptions)

## Type Aliases

### ResourceDemandOptions

Ƭ **ResourceDemandOptions**: `Object`

Specifies a set of options related to computation resources that will be used to form the demand

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `minMemGib` | `number` | Minimum required memory to execute application GB |
| `minStorageGib` | `number` | Minimum required disk storage to execute tasks in GB |
| `minCpuThreads` | `number` | Minimum required CPU threads |
| `minCpuCores` | `number` | Minimum required CPU cores |

#### Defined in

[src/market/demand/options.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/options.ts#L6)

___

### RuntimeDemandOptions

Ƭ **RuntimeDemandOptions**: `Object`

Specifies a set of options related to runtime configuration that will be used to form the demand

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `engine` | `string` | Type of engine required: vm, wasm, vm-nvidia, etc... |
| `capabilities` | `string`[] | Required providers capabilities to run application: example: ["vpn"] |

#### Defined in

[src/market/demand/options.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/options.ts#L20)

___

### ManifestDemandOptions

Ƭ **ManifestDemandOptions**: `Object`

Specifies a set of options related to computation manifest that can be used to form the demand

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `manifest` | `string` | - |
| `manifestSig` | `string` | Signature of base64 encoded Computation Payload Manifest * |
| `manifestSigAlgorithm` | `string` | Algorithm of manifest signature, e.g. "sha256" * |
| `manifestCert` | `string` | Certificate - base64 encoded public certificate (DER or PEM) matching key used to generate signature * |

#### Defined in

[src/market/demand/options.ts:31](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/options.ts#L31)

___

### ImageDemandOptions

Ƭ **ImageDemandOptions**: `Object`

Specifies a set of options related to the Golem VM Image (GVMI) that will be used to form the demand

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageUrl?` | `string` | If you want a provider to download the image from your local filesystem or a different registry than the default one, you can provide the image url here. Note that to use this option you need to also provide the image SHA3-224 hash. |
| `imageHash?` | `string` | finds package by its contents hash |
| `imageTag?` | `string` | finds package by registry tag |
| `useHttps?` | `boolean` | Force the image download url that will be passed to the provider to use HTTPS. This option is only relevant when you use `imageHash` or `imageTag` options. Default is false |

#### Defined in

[src/market/demand/options.ts:44](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/options.ts#L44)

___

### WorkloadDemandDirectorConfigOptions

Ƭ **WorkloadDemandDirectorConfigOptions**: [`RuntimeDemandOptions`](market_demand_options#runtimedemandoptions) & [`ResourceDemandOptions`](market_demand_options#resourcedemandoptions) & [`RequireAtLeastOne`](shared_utils_types#requireatleastone)\<[`ImageDemandOptions`](market_demand_options#imagedemandoptions) & [`ManifestDemandOptions`](market_demand_options#manifestdemandoptions), ``"imageHash"`` \| ``"imageTag"`` \| ``"imageUrl"`` \| ``"manifest"``\>

#### Defined in

[src/market/demand/options.ts:66](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/demand/options.ts#L66)

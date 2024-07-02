---
title: "Module market/scan/types"
pageTitle: "Module market/scan/types - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/scan/types within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/scan/types

## Table of contents

### Type Aliases

- [ScanOptions](market_scan_types#scanoptions)
- [ScanSpecification](market_scan_types#scanspecification)

## Type Aliases

### ScanOptions

Ƭ **ScanOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `workload?` | \{ `engine?`: `string` ; `capabilities?`: `string`[] ; `minMemGib?`: `number` ; `maxMemGib?`: `number` ; `minStorageGib?`: `number` ; `maxStorageGib?`: `number` ; `minCpuThreads?`: `number` ; `maxCpuThreads?`: `number` ; `minCpuCores?`: `number` ; `maxCpuCores?`: `number`  } |
| `workload.engine?` | `string` |
| `workload.capabilities?` | `string`[] |
| `workload.minMemGib?` | `number` |
| `workload.maxMemGib?` | `number` |
| `workload.minStorageGib?` | `number` |
| `workload.maxStorageGib?` | `number` |
| `workload.minCpuThreads?` | `number` |
| `workload.maxCpuThreads?` | `number` |
| `workload.minCpuCores?` | `number` |
| `workload.maxCpuCores?` | `number` |
| `subnetTag?` | `string` |
| `payment?` | \{ `network`: `string` ; `driver?`: `string` ; `token?`: `string`  } |
| `payment.network` | `string` |
| `payment.driver?` | `string` |
| `payment.token?` | `string` |

#### Defined in

[src/market/scan/types.ts:1](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/types.ts#L1)

___

### ScanSpecification

Ƭ **ScanSpecification**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constraints` | `string`[] |

#### Defined in

[src/market/scan/types.ts:24](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/scan/types.ts#L24)

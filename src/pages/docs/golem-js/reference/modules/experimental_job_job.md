---
title: "Module experimental/job/job"
pageTitle: "Module experimental/job/job - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module experimental/job/job within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: experimental/job/job

## Table of contents

### Enumerations

- [JobState](../enums/experimental_job_job.JobState)

### Classes

- [Job](../classes/experimental_job_job.Job)

### Interfaces

- [JobEventsDict](../interfaces/experimental_job_job.JobEventsDict)

### Type Aliases

- [RunJobOptions](experimental_job_job#runjoboptions)
- [WorkFunction](experimental_job_job#workfunction)

## Type Aliases

### RunJobOptions

Ƭ **RunJobOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payment?` | [`PaymentModuleOptions`](../interfaces/payment_payment_module.PaymentModuleOptions) |
| `network?` | [`NetworkOptions`](../interfaces/network_network_module.NetworkOptions) |
| `workload?` | [`WorkloadDemandDirectorConfigOptions`](market_demand_options#workloaddemanddirectorconfigoptions) |
| `work?` | [`ExeUnitOptions`](../interfaces/activity_exe_unit_exe_unit.ExeUnitOptions) |

#### Defined in

[src/experimental/job/job.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L19)

___

### WorkFunction

Ƭ **WorkFunction**\<`OutputType`\>: (`exe`: [`ExeUnit`](../classes/activity_exe_unit_exe_unit.ExeUnit)) => `Promise`\<`OutputType`\>

#### Type parameters

| Name |
| :------ |
| `OutputType` |

#### Type declaration

▸ (`exe`): `Promise`\<`OutputType`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `exe` | [`ExeUnit`](../classes/activity_exe_unit_exe_unit.ExeUnit) |

##### Returns

`Promise`\<`OutputType`\>

#### Defined in

[src/experimental/job/job.ts:26](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/experimental/job/job.ts#L26)

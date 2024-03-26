---
title: "Class GolemNetwork"
pageTitle: "Class GolemNetwork - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemNetwork within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemNetwork

[experimental/golem\_network/golem\_network](../modules/experimental_golem_network_golem_network).GolemNetwork

This API is experimental and subject to change. Use at your own risk.

The Golem Network class provides a high-level API for running jobs on the Golem Network.

## Table of contents

### Constructors

- [constructor](experimental_golem_network_golem_network.GolemNetwork#constructor)

### Methods

- [isInitialized](experimental_golem_network_golem_network.GolemNetwork#isinitialized)
- [init](experimental_golem_network_golem_network.GolemNetwork#init)
- [createJob](experimental_golem_network_golem_network.GolemNetwork#createjob)
- [getJobById](experimental_golem_network_golem_network.GolemNetwork#getjobbyid)
- [close](experimental_golem_network_golem_network.GolemNetwork#close)

## Constructors

### constructor

• **new GolemNetwork**(`config`): [`GolemNetwork`](experimental_golem_network_golem_network.GolemNetwork)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`GolemNetworkConfig`](../modules/experimental_golem_network_golem_network#golemnetworkconfig) | Configuration options that will be passed to all jobs created by this instance. |

#### Returns

[`GolemNetwork`](experimental_golem_network_golem_network.GolemNetwork)

#### Defined in

[src/experimental/golem_network/golem_network.ts:22](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/golem_network/golem_network.ts#L22)

## Methods

### isInitialized

▸ **isInitialized**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/experimental/golem_network/golem_network.ts:24](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/golem_network/golem_network.ts#L24)

___

### init

▸ **init**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/golem_network/golem_network.ts:28](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/golem_network/golem_network.ts#L28)

___

### createJob

▸ **createJob**\<`Output`\>(`options?`): [`Job`](experimental_job_job.Job)\<`Output`\>

Create a new job and add it to the list of jobs managed by this instance.
This method does not start any work on the network, use [Job.startWork](experimental_job_job.Job#startwork) for that.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`RunJobOptions`](../modules/experimental_job_job#runjoboptions) | Configuration options for the job. These options will be merged with the options passed to the constructor. |

#### Returns

[`Job`](experimental_job_job.Job)\<`Output`\>

#### Defined in

[src/experimental/golem_network/golem_network.ts:40](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/golem_network/golem_network.ts#L40)

___

### getJobById

▸ **getJobById**(`id`): `undefined` \| [`Job`](experimental_job_job.Job)\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Job`](experimental_job_job.Job)\<`unknown`\>

#### Defined in

[src/experimental/golem_network/golem_network.ts:50](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/golem_network/golem_network.ts#L50)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close the connection to the Yagna service and cancel all running jobs.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/golem_network/golem_network.ts:59](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/golem_network/golem_network.ts#L59)

---
title: "Class GolemNetwork"
pageTitle: "Class GolemNetwork - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemNetwork within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: GolemNetwork

[golem\_network/golem\_network](../modules/golem_network_golem_network).GolemNetwork

This API is experimental and subject to change. Use at your own risk.

The Golem Network class provides a high-level API for running jobs on the Golem Network.

## Table of contents

### Constructors

- [constructor](golem_network_golem_network.GolemNetwork#constructor)

### Methods

- [isInitialized](golem_network_golem_network.GolemNetwork#isinitialized)
- [init](golem_network_golem_network.GolemNetwork#init)
- [createJob](golem_network_golem_network.GolemNetwork#createjob)
- [getJobById](golem_network_golem_network.GolemNetwork#getjobbyid)
- [close](golem_network_golem_network.GolemNetwork#close)

## Constructors

### constructor

• **new GolemNetwork**(`config`): [`GolemNetwork`](golem_network_golem_network.GolemNetwork)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`GolemNetworkConfig`](../modules/golem_network_golem_network#golemnetworkconfig) | Configuration options that will be passed to all jobs created by this instance. |

#### Returns

[`GolemNetwork`](golem_network_golem_network.GolemNetwork)

#### Defined in

[src/golem_network/golem_network.ts:24](https://github.com/golemfactory/golem-js/blob/7cee55b/src/golem_network/golem_network.ts#L24)

## Methods

### isInitialized

▸ **isInitialized**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/golem_network/golem_network.ts:28](https://github.com/golemfactory/golem-js/blob/7cee55b/src/golem_network/golem_network.ts#L28)

___

### init

▸ **init**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/golem_network/golem_network.ts:32](https://github.com/golemfactory/golem-js/blob/7cee55b/src/golem_network/golem_network.ts#L32)

___

### createJob

▸ **createJob**\<`Output`\>(`options?`): [`Job`](job_job.Job)\<`Output`\>

Create a new job and add it to the list of jobs managed by this instance.
This method does not start any work on the network, use [Job.startWork](job_job.Job#startwork) for that.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`RunJobOptions`](../modules/job_job#runjoboptions) | Configuration options for the job. These options will be merged with the options passed to the constructor. |

#### Returns

[`Job`](job_job.Job)\<`Output`\>

#### Defined in

[src/golem_network/golem_network.ts:43](https://github.com/golemfactory/golem-js/blob/7cee55b/src/golem_network/golem_network.ts#L43)

___

### getJobById

▸ **getJobById**(`id`): `undefined` \| [`Job`](job_job.Job)\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Job`](job_job.Job)\<`unknown`\>

#### Defined in

[src/golem_network/golem_network.ts:53](https://github.com/golemfactory/golem-js/blob/7cee55b/src/golem_network/golem_network.ts#L53)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close the connection to the Yagna service and cancel all running jobs.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/golem_network/golem_network.ts:62](https://github.com/golemfactory/golem-js/blob/7cee55b/src/golem_network/golem_network.ts#L62)

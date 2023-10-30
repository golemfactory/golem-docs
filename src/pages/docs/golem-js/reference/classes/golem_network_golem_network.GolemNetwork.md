---
title: "Class GolemNetwork - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class GolemNetwork within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: GolemNetwork

[golem_network/golem_network](../modules/golem_network_golem_network).GolemNetwork

The starting point for using Golem Network.

**`Description`**

The GolemNetwork class is the best way to get started with developing on Golem Network. It provides a simple interface for creating jobs and running tasks.

**`Example`**

```typescript
import { GolemNetwork } from "@golem-sdk/golem-js";
const network = new GolemNetwork();
network.init().then(() => {
 // network is ready to use
 const result = await network.runTask(async (ctx) => {
  // do some work
  return (await ctx.run("echo 'Hello from Golem'")).stdout;
 });
 console.log(result);
});
```

## Table of contents

### Constructors

- [constructor](golem_network_golem_network.GolemNetwork#constructor)

### Methods

- [isInitialized](golem_network_golem_network.GolemNetwork#isinitialized)
- [init](golem_network_golem_network.GolemNetwork#init)
- [createJob](golem_network_golem_network.GolemNetwork#createjob)
- [getJobById](golem_network_golem_network.GolemNetwork#getjobbyid)
- [runTask](golem_network_golem_network.GolemNetwork#runtask)
- [close](golem_network_golem_network.GolemNetwork#close)

## Constructors

### constructor

• **new GolemNetwork**(`config`): [`GolemNetwork`](golem_network_golem_network.GolemNetwork)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`GolemNetworkConfig`](../interfaces/golem_network_golem_network.GolemNetworkConfig) |

#### Returns

[`GolemNetwork`](golem_network_golem_network.GolemNetwork)

#### Defined in

[src/golem_network/golem_network.ts:58](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L58)

## Methods

### isInitialized

▸ **isInitialized**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/golem_network/golem_network.ts:67](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L67)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/golem_network/golem_network.ts:71](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L71)

___

### createJob

▸ **createJob**<`Output`\>(`worker`): `Promise`<[`Job`](job_job.Job)<`Output`\>\>

Create a job on Golem Network.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | [`Worker`](../modules/task_work#worker)<`unknown`, `Output`\> | Worker function to run |

#### Returns

`Promise`<[`Job`](job_job.Job)<`Output`\>\>

Job object

**`Description`**

Create a job on Golem Network. You can use the job object to fetch the job status, results and errors. For more information see Job.

**`Example`**

```typescript
const job = await network.createJob(async (ctx) => {
// do some work
return (await ctx.run("echo 'Hello from Golem'")).stdout;
});
console.log(job.id);
const status = await job.fetchState();
console.log(status);
```

#### Defined in

[src/golem_network/golem_network.ts:101](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L101)

___

### getJobById

▸ **getJobById**(`id`): [`Job`](job_job.Job)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Job`](job_job.Job)<`unknown`\>

#### Defined in

[src/golem_network/golem_network.ts:105](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L105)

___

### runTask

▸ **runTask**<`Output`\>(`worker`): `Promise`<`undefined` \| `Output`\>

Run a task on Golem Network.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | [`Worker`](../modules/task_work#worker)<`undefined`, `Output`\> | Worker function to run |

#### Returns

`Promise`<`undefined` \| `Output`\>

Worker function result

**`Description`**

The runTask method is the simplest way to run some code on Golem Network. Simply call `runTask` and await the promise to get your result.

#### Defined in

[src/golem_network/golem_network.ts:116](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L116)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/golem_network/golem_network.ts:120](https://github.com/golemfactory/golem-js/blob/552d481/src/golem_network/golem_network.ts#L120)

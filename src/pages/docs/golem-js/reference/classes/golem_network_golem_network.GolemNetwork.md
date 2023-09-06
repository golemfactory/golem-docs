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

• **new GolemNetwork**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`GolemNetworkConfig`](../interfaces/golem_network_golem_network.GolemNetworkConfig) |

#### Defined in

[src/golem_network/golem_network.ts:36](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L36)

## Methods

### isInitialized

▸ **isInitialized**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/golem_network/golem_network.ts:50](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L50)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/golem_network/golem_network.ts:54](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L54)

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

[src/golem_network/golem_network.ts:82](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L82)

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

[src/golem_network/golem_network.ts:86](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L86)

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

[src/golem_network/golem_network.ts:97](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L97)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/golem_network/golem_network.ts:101](https://github.com/golemfactory/golem-js/blob/2e4ff2e/src/golem_network/golem_network.ts#L101)

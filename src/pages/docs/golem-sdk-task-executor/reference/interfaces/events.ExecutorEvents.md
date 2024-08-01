---
title: "Interface ExecutorEvents"
pageTitle: "Interface ExecutorEvents - Task API Reference"
description: "Explore the detailed API reference documentation for the Interface ExecutorEvents within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Interface: ExecutorEvents

[events](../modules/events).ExecutorEvents

This interface describes events emitted by `TaskExecutor` through `TaskExecutor.events` object.

## Table of contents

### Properties

- [executorReady](events.ExecutorEvents#executorready)
- [executorBeforeEnd](events.ExecutorEvents#executorbeforeend)
- [criticalError](events.ExecutorEvents#criticalerror)
- [executorEnd](events.ExecutorEvents#executorend)
- [taskQueued](events.ExecutorEvents#taskqueued)
- [taskStarted](events.ExecutorEvents#taskstarted)
- [taskRetried](events.ExecutorEvents#taskretried)
- [taskCompleted](events.ExecutorEvents#taskcompleted)
- [taskFailed](events.ExecutorEvents#taskfailed)

## Properties

### executorReady

• **executorReady**: (`timestamp`: `number`) => `void`

#### Type declaration

▸ (`timestamp`): `void`

Fires when task executor is initialized and ready to be used.

##### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

##### Returns

`void`

#### Defined in

[events.ts:10](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L10)

___

### executorBeforeEnd

• **executorBeforeEnd**: (`timestamp`: `number`) => `void`

#### Type declaration

▸ (`timestamp`): `void`

Fires when task executor is about to shut down, immediately after TaskExecutor.shutdown() is called.

##### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

##### Returns

`void`

#### Defined in

[events.ts:15](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L15)

___

### criticalError

• **criticalError**: (`err`: `Error`) => `void`

#### Type declaration

▸ (`err`): `void`

Fires when task executor encountered an unrecoverable error and is about to shut down.

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

##### Returns

`void`

#### Defined in

[events.ts:20](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L20)

___

### executorEnd

• **executorEnd**: (`timestamp`: `number`) => `void`

#### Type declaration

▸ (`timestamp`): `void`

Fires when task executor is completely terminated.

##### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

##### Returns

`void`

#### Defined in

[events.ts:25](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L25)

___

### taskQueued

• **taskQueued**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

Fires when a task is placed in the internal queue via TaskExecutor.run

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[events.ts:32](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L32)

___

### taskStarted

• **taskStarted**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

Fires when the task gets picked up from the internal queue and is getting executed

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[events.ts:39](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L39)

___

### taskRetried

• **taskRetried**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

Fires when the task had to be re-tried due to an error check - [error](../modules/task#error) for details of the issue

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[events.ts:46](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L46)

___

### taskCompleted

• **taskCompleted**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

Fires when a task is successfully completed

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[events.ts:53](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L53)

___

### taskFailed

• **taskFailed**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

Fires when a task has failed and won't be re-tried any longer

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[events.ts:60](https://github.com/golemfactory/golem-sdk-task-executor/blob/a31d1c9/src/events.ts#L60)

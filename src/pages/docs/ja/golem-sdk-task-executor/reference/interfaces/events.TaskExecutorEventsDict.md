---
title: "Interface TaskExecutorEventsDict"
pageTitle: "Interface TaskExecutorEventsDict - Task API Reference"
description: "Explore the detailed API reference documentation for the Interface TaskExecutorEventsDict within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Interface: TaskExecutorEventsDict

[events](../modules/events).TaskExecutorEventsDict

This interface describes events emitted by `TaskExecutor` through `TaskExecutor.events` object.

## Table of contents

### Properties

- [start](events.TaskExecutorEventsDict#start)
- [ready](events.TaskExecutorEventsDict#ready)
- [beforeEnd](events.TaskExecutorEventsDict#beforeend)
- [criticalError](events.TaskExecutorEventsDict#criticalerror)
- [end](events.TaskExecutorEventsDict#end)
- [taskQueued](events.TaskExecutorEventsDict#taskqueued)
- [taskStarted](events.TaskExecutorEventsDict#taskstarted)
- [taskRetried](events.TaskExecutorEventsDict#taskretried)
- [taskCompleted](events.TaskExecutorEventsDict#taskcompleted)
- [taskFailed](events.TaskExecutorEventsDict#taskfailed)
- [golemEvents](events.TaskExecutorEventsDict#golemevents)

## Properties

### start

• **start**: (`timestamp`: `number`) => `void`

#### Type declaration

▸ (`timestamp`): `void`

Fires when task executor is created, before initialization services.

##### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

##### Returns

`void`

#### Defined in

[src/events.ts:11](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L11)

___

### ready

• **ready**: (`timestamp`: `number`) => `void`

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

[src/events.ts:16](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L16)

___

### beforeEnd

• **beforeEnd**: (`timestamp`: `number`) => `void`

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

[src/events.ts:21](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L21)

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

[src/events.ts:26](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L26)

___

### end

• **end**: (`timestamp`: `number`) => `void`

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

[src/events.ts:31](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L31)

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

[src/events.ts:38](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L38)

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

[src/events.ts:45](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L45)

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

[src/events.ts:52](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L52)

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

[src/events.ts:59](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L59)

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

[src/events.ts:66](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L66)

___

### golemEvents

• **golemEvents**: (`event`: `BaseEvent`<`unknown`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Exposes internal @golem-sdk/golem-js events

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `BaseEvent`<`unknown`\> |

##### Returns

`void`

**`Deprecated`**

This options is deprecated and will be removed. Alternative ways to reach these events will be provided.

#### Defined in

[src/events.ts:75](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/events.ts#L75)

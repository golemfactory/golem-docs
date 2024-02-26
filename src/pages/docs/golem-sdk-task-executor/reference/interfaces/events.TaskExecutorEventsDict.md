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
- [end](events.TaskExecutorEventsDict#end)
- [taskQueued](events.TaskExecutorEventsDict#taskqueued)
- [taskStarted](events.TaskExecutorEventsDict#taskstarted)
- [taskRetried](events.TaskExecutorEventsDict#taskretried)
- [taskCompleted](events.TaskExecutorEventsDict#taskcompleted)
- [taskFailed](events.TaskExecutorEventsDict#taskfailed)
- [golemEvents](events.TaskExecutorEventsDict#golemevents)

## Properties

### start

• **start**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is created, before initialization services.

##### Returns

`void`

#### Defined in

[src/events.ts:11](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L11)

___

### ready

• **ready**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is initialized and ready to be used.

##### Returns

`void`

#### Defined in

[src/events.ts:16](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L16)

___

### beforeEnd

• **beforeEnd**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is about to shut down, immediately after TaskExecutor.shutdown() is called.

##### Returns

`void`

#### Defined in

[src/events.ts:21](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L21)

___

### end

• **end**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is completely terminated.

##### Returns

`void`

#### Defined in

[src/events.ts:26](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L26)

___

### taskQueued

• **taskQueued**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[src/events.ts:28](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L28)

___

### taskStarted

• **taskStarted**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[src/events.ts:29](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L29)

___

### taskRetried

• **taskRetried**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[src/events.ts:30](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L30)

___

### taskCompleted

• **taskCompleted**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[src/events.ts:31](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L31)

___

### taskFailed

• **taskFailed**: (`task`: [`TaskDetails`](../modules/task#taskdetails)) => `void`

#### Type declaration

▸ (`task`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`TaskDetails`](../modules/task#taskdetails) |

##### Returns

`void`

#### Defined in

[src/events.ts:32](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L32)

___

### golemEvents

• **golemEvents**: (`event`: `BaseEvent`<`unknown`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `BaseEvent`<`unknown`\> |

##### Returns

`void`

#### Defined in

[src/events.ts:34](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/events.ts#L34)

---
title: "Interface TaskExecutorEventsDict"
pageTitle: "Interface TaskExecutorEventsDict - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface TaskExecutorEventsDict within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: TaskExecutorEventsDict

[executor/events](../modules/executor_events).TaskExecutorEventsDict

This interface describes events emitted by `TaskExecutor` through `TaskExecutor.events` object.

## Table of contents

### Properties

- [ready](executor_events.TaskExecutorEventsDict#ready)
- [beforeEnd](executor_events.TaskExecutorEventsDict#beforeend)
- [end](executor_events.TaskExecutorEventsDict#end)

## Properties

### ready

• **ready**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is initialized and ready to be used.

##### Returns

`void`

#### Defined in

[src/executor/events.ts:8](https://github.com/golemfactory/golem-js/blob/a42794e/src/executor/events.ts#L8)

___

### beforeEnd

• **beforeEnd**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is about to shut down, immediately after TaskExecutor.shutdown() is called.

##### Returns

`void`

#### Defined in

[src/executor/events.ts:14](https://github.com/golemfactory/golem-js/blob/a42794e/src/executor/events.ts#L14)

___

### end

• **end**: () => `void`

#### Type declaration

▸ (): `void`

Fires when task executor is completely terminated.

##### Returns

`void`

#### Defined in

[src/executor/events.ts:19](https://github.com/golemfactory/golem-js/blob/a42794e/src/executor/events.ts#L19)

---
title: "Interface ActivityOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ActivityOptions within the golem-js SDK for the Golem Network."
type: "reference"
---
# Interface: ActivityOptions

[activity/activity](../modules/activity_activity).ActivityOptions

## Hierarchy

- **`ActivityOptions`**

  ↳ [`TaskServiceOptions`](task_service.TaskServiceOptions)

## Table of contents

### Properties

- [activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)
- [activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)
- [activityExeBatchResultPollIntervalSeconds](activity_activity.ActivityOptions#activityexebatchresultpollintervalseconds)
- [logger](activity_activity.ActivityOptions#logger)
- [eventTarget](activity_activity.ActivityOptions#eventtarget)

## Properties

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[src/activity/activity.ts:27](https://github.com/golemfactory/golem-js/blob/5c570c3/src/activity/activity.ts#L27)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[src/activity/activity.ts:29](https://github.com/golemfactory/golem-js/blob/5c570c3/src/activity/activity.ts#L29)

___

### activityExeBatchResultPollIntervalSeconds

• `Optional` **activityExeBatchResultPollIntervalSeconds**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/activity.ts:31](https://github.com/golemfactory/golem-js/blob/5c570c3/src/activity/activity.ts#L31)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Defined in

[src/activity/activity.ts:33](https://github.com/golemfactory/golem-js/blob/5c570c3/src/activity/activity.ts#L33)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[src/activity/activity.ts:35](https://github.com/golemfactory/golem-js/blob/5c570c3/src/activity/activity.ts#L35)

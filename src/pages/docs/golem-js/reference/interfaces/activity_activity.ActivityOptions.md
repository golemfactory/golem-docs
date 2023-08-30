# Interface: ActivityOptions

[activity/activity](../modules/activity_activity).ActivityOptions

## Hierarchy

- **`ActivityOptions`**

  ↳ [`TaskOptions`](task_service.TaskOptions)

## Table of contents

### Properties

- [activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)
- [activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions#activityexebatchresultsfetchinterval)
- [logger](activity_activity.ActivityOptions#logger)
- [eventTarget](activity_activity.ActivityOptions#eventtarget)

## Properties

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[src/activity/activity.ts:32](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L32)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[src/activity/activity.ts:34](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L34)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/activity.ts:36](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L36)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Defined in

[src/activity/activity.ts:38](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L38)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[src/activity/activity.ts:40](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/activity/activity.ts#L40)

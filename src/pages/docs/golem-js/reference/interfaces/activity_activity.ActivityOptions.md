# Interface: ActivityOptions

[activity/activity](../modules/activity_activity).ActivityOptions

## Hierarchy

- **`ActivityOptions`**

  ↳ [`TaskServiceOptions`](task_service.TaskServiceOptions)

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

[src/activity/activity.ts:26](https://github.com/golemfactory/golem-js/blob/491c0c9/src/activity/activity.ts#L26)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[src/activity/activity.ts:28](https://github.com/golemfactory/golem-js/blob/491c0c9/src/activity/activity.ts#L28)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/activity.ts:30](https://github.com/golemfactory/golem-js/blob/491c0c9/src/activity/activity.ts#L30)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Defined in

[src/activity/activity.ts:32](https://github.com/golemfactory/golem-js/blob/491c0c9/src/activity/activity.ts#L32)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[src/activity/activity.ts:34](https://github.com/golemfactory/golem-js/blob/491c0c9/src/activity/activity.ts#L34)

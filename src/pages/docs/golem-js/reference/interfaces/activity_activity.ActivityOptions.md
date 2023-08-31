# Interface: ActivityOptions

[activity/activity](../modules/activity_activity).ActivityOptions

## Hierarchy

- **`ActivityOptions`**

  ↳ [`TaskOptions`](task_service.TaskOptions)

## Table of contents

### Properties

- [yagnaOptions](activity_activity.ActivityOptions#yagnaoptions)
- [activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)
- [activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions#activityexebatchresultsfetchinterval)
- [logger](activity_activity.ActivityOptions#logger)
- [eventTarget](activity_activity.ActivityOptions#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | Yagna Api Key |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Defined in

[src/activity/activity.ts:24](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/activity/activity.ts#L24)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[src/activity/activity.ts:31](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/activity/activity.ts#L31)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[src/activity/activity.ts:33](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/activity/activity.ts#L33)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/activity.ts:35](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/activity/activity.ts#L35)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Defined in

[src/activity/activity.ts:37](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/activity/activity.ts#L37)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[src/activity/activity.ts:39](https://github.com/golemfactory/golem-js/blob/cbc3a8c/src/activity/activity.ts#L39)

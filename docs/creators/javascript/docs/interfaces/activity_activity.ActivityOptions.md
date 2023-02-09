# Interface: ActivityOptions

[activity/activity](../modules/activity_activity.md).ActivityOptions

## Hierarchy

- **`ActivityOptions`**

  ↳ [`TaskOptions`](task_service.TaskOptions.md)

## Table of contents

### Properties

- [yagnaOptions](activity_activity.ActivityOptions.md#yagnaoptions)
- [activityRequestTimeout](activity_activity.ActivityOptions.md#activityrequesttimeout)
- [activityExecuteTimeout](activity_activity.ActivityOptions.md#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](activity_activity.ActivityOptions.md#activityexebatchresultsfetchinterval)
- [logger](activity_activity.ActivityOptions.md#logger)
- [eventTarget](activity_activity.ActivityOptions.md#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | Yagna Api Key |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Defined in

[yajsapi/activity/activity.ts:33](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L33)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[yajsapi/activity/activity.ts:40](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L40)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[yajsapi/activity/activity.ts:42](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L42)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Defined in

[yajsapi/activity/activity.ts:44](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L44)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

Logger module

#### Defined in

[yajsapi/activity/activity.ts:46](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L46)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[yajsapi/activity/activity.ts:48](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L48)

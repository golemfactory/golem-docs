[JavaScript API reference](../README) / ActivityOptions

# Interface: ActivityOptions

## Table of contents

### Properties

- [yagnaOptions](ActivityOptions#yagnaoptions)
- [activityRequestTimeout](ActivityOptions#activityrequesttimeout)
- [activityExecuteTimeout](ActivityOptions#activityexecutetimeout)
- [activityExeBatchResultsFetchInterval](ActivityOptions#activityexebatchresultsfetchinterval)
- [logger](ActivityOptions#logger)
- [eventTarget](ActivityOptions#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | Yagna Api Key |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Defined in

[activity/activity.ts:33](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L33)

___

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[activity/activity.ts:40](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L40)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[activity/activity.ts:42](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L42)

___

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Defined in

[activity/activity.ts:44](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L44)

___

### logger

• `Optional` **logger**: [`Logger`](Logger)

Logger module

#### Defined in

[activity/activity.ts:46](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L46)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[activity/activity.ts:48](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L48)

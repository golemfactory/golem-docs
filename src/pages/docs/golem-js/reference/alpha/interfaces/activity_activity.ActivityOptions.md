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

| Name        | Type     | Description                          |
| :---------- | :------- | :----------------------------------- |
| `apiKey?`   | `string` | Yagna Api Key                        |
| `basePath?` | `string` | Yagna base path to Activity REST Api |

#### Defined in

[src/activity/activity.ts:30](https://github.com/golemfactory/golem-js/blob/614ea72/src/activity/activity.ts#L30)

---

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[src/activity/activity.ts:37](https://github.com/golemfactory/golem-js/blob/614ea72/src/activity/activity.ts#L37)

---

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[src/activity/activity.ts:39](https://github.com/golemfactory/golem-js/blob/614ea72/src/activity/activity.ts#L39)

---

### activityExeBatchResultsFetchInterval

• `Optional` **activityExeBatchResultsFetchInterval**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/activity.ts:41](https://github.com/golemfactory/golem-js/blob/614ea72/src/activity/activity.ts#L41)

---

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Defined in

[src/activity/activity.ts:43](https://github.com/golemfactory/golem-js/blob/614ea72/src/activity/activity.ts#L43)

---

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[src/activity/activity.ts:45](https://github.com/golemfactory/golem-js/blob/614ea72/src/activity/activity.ts#L45)

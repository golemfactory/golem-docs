---
title: "Interface ActivityOptions"
pageTitle: "Interface ActivityOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ActivityOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ActivityOptions

[activity/activity](../modules/activity_activity).ActivityOptions

## Table of contents

### Properties

- [activityRequestTimeout](activity_activity.ActivityOptions#activityrequesttimeout)
- [activityExecuteTimeout](activity_activity.ActivityOptions#activityexecutetimeout)
- [activityExeBatchResultPollIntervalSeconds](activity_activity.ActivityOptions#activityexebatchresultpollintervalseconds)
- [logger](activity_activity.ActivityOptions#logger)

## Properties

### activityRequestTimeout

• `Optional` **activityRequestTimeout**: `number`

timeout for sending and creating batch

#### Defined in

[src/activity/activity.ts:36](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L36)

___

### activityExecuteTimeout

• `Optional` **activityExecuteTimeout**: `number`

timeout for executing batch

#### Defined in

[src/activity/activity.ts:38](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L38)

___

### activityExeBatchResultPollIntervalSeconds

• `Optional` **activityExeBatchResultPollIntervalSeconds**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/activity.ts:40](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L40)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Defined in

[src/activity/activity.ts:42](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L42)

---
title: "Interface ExecutionOptions"
pageTitle: "Interface ExecutionOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ExecutionOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ExecutionOptions

[activity/exe-script-executor](../modules/activity_exe_script_executor).ExecutionOptions

## Table of contents

### Properties

- [activityExeBatchResultPollIntervalSeconds](activity_exe_script_executor.ExecutionOptions#activityexebatchresultpollintervalseconds)
- [activityExeBatchResultMaxRetries](activity_exe_script_executor.ExecutionOptions#activityexebatchresultmaxretries)
- [signalOrTimeout](activity_exe_script_executor.ExecutionOptions#signalortimeout)

## Properties

### activityExeBatchResultPollIntervalSeconds

• `Optional` **activityExeBatchResultPollIntervalSeconds**: `number`

interval for fetching batch results while polling

#### Defined in

[src/activity/exe-script-executor.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L20)

___

### activityExeBatchResultMaxRetries

• `Optional` **activityExeBatchResultMaxRetries**: `number`

maximum number of retries retrieving results when an error occurs, default: 10

#### Defined in

[src/activity/exe-script-executor.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L22)

___

### signalOrTimeout

• `Optional` **signalOrTimeout**: `number` \| `AbortSignal`

The timeout in milliseconds or an AbortSignal that will be used to cancel the execution

#### Defined in

[src/activity/exe-script-executor.ts:24](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/exe-script-executor.ts#L24)

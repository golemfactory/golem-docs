---
title: "Interface WorkOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface WorkOptions within the golem-js SDK for the Golem Network."
type: "reference"
---
# Interface: WorkOptions

[task/work](../modules/task_work).WorkOptions

## Table of contents

### Properties

- [activityPreparingTimeout](task_work.WorkOptions#activitypreparingtimeout)
- [activityStateCheckingInterval](task_work.WorkOptions#activitystatecheckinginterval)
- [provider](task_work.WorkOptions#provider)
- [storageProvider](task_work.WorkOptions#storageprovider)
- [networkNode](task_work.WorkOptions#networknode)
- [logger](task_work.WorkOptions#logger)
- [initWorker](task_work.WorkOptions#initworker)

## Properties

### activityPreparingTimeout

• `Optional` **activityPreparingTimeout**: `number`

#### Defined in

[src/task/work.ts:31](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L31)

___

### activityStateCheckingInterval

• `Optional` **activityStateCheckingInterval**: `number`

#### Defined in

[src/task/work.ts:32](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L32)

___

### provider

• `Optional` **provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `id` | `string` |
| `networkConfig?` | `object` |

#### Defined in

[src/task/work.ts:33](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L33)

___

### storageProvider

• `Optional` **storageProvider**: [`StorageProvider`](storage_provider.StorageProvider)

#### Defined in

[src/task/work.ts:34](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L34)

___

### networkNode

• `Optional` **networkNode**: [`NetworkNode`](../classes/network_node.NetworkNode)

#### Defined in

[src/task/work.ts:35](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L35)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Defined in

[src/task/work.ts:36](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L36)

___

### initWorker

• `Optional` **initWorker**: [`Worker`](../modules/task_work#worker)\<`undefined`, `unknown`\>

#### Defined in

[src/task/work.ts:37](https://github.com/golemfactory/golem-js/blob/effec9a/src/task/work.ts#L37)

---
title: "Module executor"
pageTitle: "Module executor - Task API Reference"
description: "Explore the detailed API reference documentation for the Module executor within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Module: executor

## Table of contents

### Classes

- [TaskExecutor](../classes/executor.TaskExecutor)

### Type Aliases

- [ExecutorOptions](executor#executoroptions)
- [ExecutorOptionsMixin](executor#executoroptionsmixin)
- [YagnaOptions](executor#yagnaoptions)

## Type Aliases

### ExecutorOptions

Ƭ **ExecutorOptions**: { `package?`: `string` \| `Package` ; `taskTimeout?`: `number` ; `subnetTag?`: `string` ; `logger?`: `Logger` ; `enableLogging?`: `boolean` ; `yagnaOptions?`: [`YagnaOptions`](executor#yagnaoptions) ; `maxTaskRetries?`: `number` ; `storageProvider?`: `StorageProvider` ; `activityPreparingTimeout?`: `number` ; `skipProcessSignals?`: `boolean` ; `startupTimeout?`: `number` ; `exitOnNoProposals?`: `boolean`  } & `Omit`<`PackageOptions`, ``"imageHash"`` \| ``"imageTag"``\> & `MarketOptions` & `PaymentOptions` & `NetworkServiceOptions` & `AgreementServiceOptions` & `WorkOptions` & [`TaskServiceOptions`](../interfaces/service.TaskServiceOptions)

#### Defined in

[src/executor.ts:41](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L41)

___

### ExecutorOptionsMixin

Ƭ **ExecutorOptionsMixin**: `string` \| [`ExecutorOptions`](executor#executoroptions)

Contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](executor#executoroptions)

#### Defined in

[src/executor.ts:96](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L96)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[src/executor.ts:98](https://github.com/golemfactory/golem-sdk-task-executor/blob/6ac08ea/src/executor.ts#L98)

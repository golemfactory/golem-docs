---
title: "Module executor/executor"
pageTitle: "Module executor/executor - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module executor/executor within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: executor/executor

## Table of contents

### Classes

- [TaskExecutor](../classes/executor_executor.TaskExecutor)

### Type Aliases

- [ExecutorOptions](executor_executor#executoroptions)
- [ExecutorOptionsMixin](executor_executor#executoroptionsmixin)
- [YagnaOptions](executor_executor#yagnaoptions)

## Type Aliases

### ExecutorOptions

Ƭ **ExecutorOptions**: \{ `package?`: `string` \| [`Package`](../classes/package_package.Package) ; `taskTimeout?`: `number` ; `subnetTag?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger) ; `logLevel?`: [`LogLevel`](../enums/utils_logger_logger.LogLevel) \| `string` ; `enableLogging?`: `boolean` ; `yagnaOptions?`: [`YagnaOptions`](executor_executor#yagnaoptions) ; `eventTarget?`: `EventTarget` ; `maxTaskRetries?`: `number` ; `storageProvider?`: [`StorageProvider`](../interfaces/storage_provider.StorageProvider) ; `isSubprocess?`: `boolean` ; `activityPreparingTimeout?`: `number` ; `jobStorage?`: [`JobStorage`](../interfaces/job_storage.JobStorage) ; `skipProcessSignals?`: `boolean` ; `startupTimeout?`: `number` ; `exitOnNoProposals?`: `boolean`  } & `Omit`\<[`PackageOptions`](package_package#packageoptions), ``"imageHash"`` \| ``"imageTag"``\> & [`MarketOptions`](../interfaces/market_service.MarketOptions) & [`TaskServiceOptions`](../interfaces/task_service.TaskServiceOptions) & [`PaymentOptions`](../interfaces/payment_service.PaymentOptions) & [`NetworkServiceOptions`](network_service#networkserviceoptions) & [`AgreementServiceOptions`](../interfaces/agreement_service.AgreementServiceOptions) & `Omit`\<[`WorkOptions`](../interfaces/task_work.WorkOptions), ``"isRunning"``\>

#### Defined in

[src/executor/executor.ts:25](https://github.com/golemfactory/golem-js/blob/9c218b4/src/executor/executor.ts#L25)

___

### ExecutorOptionsMixin

Ƭ **ExecutorOptionsMixin**: `string` \| [`ExecutorOptions`](executor_executor#executoroptions)

Contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](executor_executor#executoroptions)

#### Defined in

[src/executor/executor.ts:94](https://github.com/golemfactory/golem-js/blob/9c218b4/src/executor/executor.ts#L94)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[src/executor/executor.ts:96](https://github.com/golemfactory/golem-js/blob/9c218b4/src/executor/executor.ts#L96)

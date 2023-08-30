# Module: executor/executor

## Table of contents

### Classes

- [TaskExecutor](../classes/executor_executor.TaskExecutor.md)

### Type Aliases

- [ExecutorOptions](executor_executor.md#executoroptions)
- [ExecutorOptionsMixin](executor_executor.md#executoroptionsmixin)
- [YagnaOptions](executor_executor.md#yagnaoptions)

## Type Aliases

### ExecutorOptions

Ƭ **ExecutorOptions**: { `package?`: `string` \| [`Package`](../classes/package_package.Package.md) ; `taskTimeout?`: `number` ; `subnetTag?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger.md) ; `logLevel?`: [`LogLevel`](../enums/utils_logger_logger.LogLevel.md) \| `string` ; `yagnaOptions?`: [`YagnaOptions`](executor_executor.md#yagnaoptions) ; `eventTarget?`: `EventTarget` ; `maxTaskRetries?`: `number` ; `storageProvider?`: [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) ; `isSubprocess?`: `boolean` ; `activityPreparingTimeout?`: `number`  } & `Omit`<`PackageOptions`, ``"imageHash"`` \| ``"imageTag"``\> & [`MarketOptions`](../interfaces/market_service.MarketOptions.md) & [`TaskOptions`](../interfaces/task_service.TaskOptions.md) & [`PaymentOptions`](../interfaces/payment_service.PaymentOptions.md) & [`NetworkServiceOptions`](network_service.md#networkserviceoptions) & [`AgreementServiceOptions`](../interfaces/agreement_service.AgreementServiceOptions.md) & `Omit`<[`WorkOptions`](../interfaces/task_work.WorkOptions.md), ``"isRunning"``\>

#### Defined in

[src/executor/executor.ts:22](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/executor/executor.ts#L22)

___

### ExecutorOptionsMixin

Ƭ **ExecutorOptionsMixin**: `string` \| [`ExecutorOptions`](executor_executor.md#executoroptions)

Contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](executor_executor.md#executoroptions)

#### Defined in

[src/executor/executor.ts:59](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/executor/executor.ts#L59)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[src/executor/executor.ts:61](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/executor/executor.ts#L61)

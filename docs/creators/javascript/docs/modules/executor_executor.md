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

Ƭ **ExecutorOptions**: { `package?`: `string` \| [`Package`](../classes/package_package.Package.md) ; `taskTimeout?`: `number` ; `subnetTag?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger.md) ; `logLevel?`: [`LogLevel`](../enums/utils_logger_logger.LogLevel.md) \| `string` ; `yagnaOptions?`: [`YagnaOptions`](executor_executor.md#yagnaoptions) ; `eventTarget?`: `EventTarget` ; `maxTaskRetries?`: `number` ; `storageProvider?`: [`StorageProvider`](../interfaces/storage_provider.StorageProvider.md) ; `isSubprocess?`: `boolean` ; `activityPreparingTimeout?`: `number`  } & `Omit`<[`PackageOptions`](package_package.md#packageoptions), ``"imageHash"`` \| ``"imageTag"``\> & [`MarketOptions`](../interfaces/market_service.MarketOptions.md) & [`TaskOptions`](../interfaces/task_service.TaskOptions.md) & [`PaymentOptions`](../interfaces/payment_service.PaymentOptions.md) & [`NetworkServiceOptions`](network_service.md#networkserviceoptions) & [`AgreementServiceOptions`](../interfaces/agreement_service.AgreementServiceOptions.md) & `Omit`<[`WorkOptions`](../interfaces/task_work.WorkOptions.md), ``"isRunning"``\>

#### Defined in

[yajsapi/executor/executor.ts:23](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/executor/executor.ts#L23)

___

### ExecutorOptionsMixin

Ƭ **ExecutorOptionsMixin**: `string` \| [`ExecutorOptions`](executor_executor.md#executoroptions)

Contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](executor_executor.md#executoroptions)

#### Defined in

[yajsapi/executor/executor.ts:60](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/executor/executor.ts#L60)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[yajsapi/executor/executor.ts:62](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/executor/executor.ts#L62)

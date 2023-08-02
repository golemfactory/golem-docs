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

Ƭ **ExecutorOptions**: { `package?`: `string` \| `Package` ; `taskTimeout?`: `number` ; `subnetTag?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger) ; `logLevel?`: [`LogLevel`](../enums/utils_logger_logger.LogLevel) \| `string` ; `yagnaOptions?`: [`YagnaOptions`](executor_executor#yagnaoptions) ; `eventTarget?`: `EventTarget` ; `maxTaskRetries?`: `number` ; `storageProvider?`: [`StorageProvider`](../interfaces/storage_provider.StorageProvider) ; `isSubprocess?`: `boolean` ; `activityPreparingTimeout?`: `number`  } & `MarketOptions` & `ActivityOptions` & `AgreementOptions` & `PaymentOptions` & `DemandOptions` & `Omit`<`PackageOptions`, ``"imageHash"`` \| ``"imageTag"``\> & [`TaskOptions`](../interfaces/task_service.TaskOptions) & `NetworkServiceOptions` & [`AgreementServiceOptions`](../interfaces/agreement_service.AgreementServiceOptions) & `Omit`<[`WorkOptions`](../interfaces/task_work.WorkOptions), ``"isRunning"``\>

#### Defined in

[yajsapi/executor/executor.ts:23](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/executor/executor.ts#L23)

___

### ExecutorOptionsMixin

Ƭ **ExecutorOptionsMixin**: `string` \| [`ExecutorOptions`](executor_executor#executoroptions)

Contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](executor_executor#executoroptions)

#### Defined in

[yajsapi/executor/executor.ts:60](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/executor/executor.ts#L60)

___

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |

#### Defined in

[yajsapi/executor/executor.ts:62](https://github.com/golemfactory/yajsapi/blob/2663a15/yajsapi/executor/executor.ts#L62)

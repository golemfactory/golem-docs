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

Ƭ **ExecutorOptions**: { `package?`: `string` \| [`Package`](../classes/package_package.Package) ; `taskTimeout?`: `number` ; `subnetTag?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger) ; `logLevel?`: [`LogLevel`](../enums/utils_logger_logger.LogLevel) \| `string` ; `yagnaOptions?`: [`YagnaOptions`](executor_executor#yagnaoptions) ; `eventTarget?`: `EventTarget` ; `maxTaskRetries?`: `number` ; `storageProvider?`: [`StorageProvider`](../interfaces/storage_provider.StorageProvider) ; `isSubprocess?`: `boolean` ; `activityPreparingTimeout?`: `number` } & `Omit`<`PackageOptions`, `"imageHash"` \| `"imageTag"`\> & [`MarketOptions`](../interfaces/market_service.MarketOptions) & [`TaskOptions`](../interfaces/task_service.TaskOptions) & [`PaymentOptions`](../interfaces/payment_service.PaymentOptions) & [`NetworkServiceOptions`](network_service#networkserviceoptions) & [`AgreementServiceOptions`](../interfaces/agreement_service.AgreementServiceOptions) & `Omit`<[`WorkOptions`](../interfaces/task_work.WorkOptions), `"isRunning"`\>

#### Defined in

[src/executor/executor.ts:22](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/executor/executor.ts#L22)

---

### ExecutorOptionsMixin

Ƭ **ExecutorOptionsMixin**: `string` \| [`ExecutorOptions`](executor_executor#executoroptions)

Contains information needed to start executor, if string the imageHash is required, otherwise it should be a type of [ExecutorOptions](executor_executor#executoroptions)

#### Defined in

[src/executor/executor.ts:59](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/executor/executor.ts#L59)

---

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name        | Type     |
| :---------- | :------- |
| `apiKey?`   | `string` |
| `basePath?` | `string` |

#### Defined in

[src/executor/executor.ts:61](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/executor/executor.ts#L61)

---
title: "Module shared/utils/logger/defaultLogger"
pageTitle: "Module shared/utils/logger/defaultLogger - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/utils/logger/defaultLogger within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/utils/logger/defaultLogger

## Table of contents

### Type Aliases

- [DefaultLoggerOptions](shared_utils_logger_defaultLogger#defaultloggeroptions)

### Functions

- [defaultLogger](shared_utils_logger_defaultLogger#defaultlogger)

## Type Aliases

### DefaultLoggerOptions

Ƭ **DefaultLoggerOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableAutoPrefix` | `boolean` | Disables prefixing the root namespace with golem-js **`Default`** ```ts false ``` |

#### Defined in

[src/shared/utils/logger/defaultLogger.ts:4](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/utils/logger/defaultLogger.ts#L4)

## Functions

### defaultLogger

▸ **defaultLogger**(`namespace`, `opts?`): [`Logger`](../interfaces/shared_utils_logger_logger.Logger)

Creates a logger that uses the debug library. This logger is used by default by all entities in the SDK.

If the namespace is not prefixed with `golem-js:`, it will be prefixed automatically - this can be controlled by `disableAutoPrefix` options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `opts` | [`DefaultLoggerOptions`](shared_utils_logger_defaultLogger#defaultloggeroptions) |

#### Returns

[`Logger`](../interfaces/shared_utils_logger_logger.Logger)

#### Defined in

[src/shared/utils/logger/defaultLogger.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/utils/logger/defaultLogger.ts#L26)

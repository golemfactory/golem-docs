# Module: utils/logger/jsonLogger

## Table of contents

### Functions

- [jsonLogger](utils_logger_jsonLogger.md#jsonlogger)

## Functions

### jsonLogger

▸ **jsonLogger**(`filename?`): [`Logger`](../interfaces/utils_logger_logger.Logger.md)

Create a logger that writes a JSON object for every log line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename?` | `string` | path to the file to write to, if not specified, logs are written to stdout |

#### Returns

[`Logger`](../interfaces/utils_logger_logger.Logger.md)

#### Defined in

[src/utils/logger/jsonLogger.ts:8](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/utils/logger/jsonLogger.ts#L8)

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

[yajsapi/utils/logger/jsonLogger.ts:8](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/utils/logger/jsonLogger.ts#L8)

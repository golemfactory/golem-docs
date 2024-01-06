---
title: "Module utils/logger/jsonLogger"
pageTitle: "Module utils/logger/jsonLogger - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module utils/logger/jsonLogger within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: utils/logger/jsonLogger

## Table of contents

### Functions

- [jsonLogger](utils_logger_jsonLogger#jsonlogger)

## Functions

### jsonLogger

▸ **jsonLogger**(`filename?`): [`Logger`](../interfaces/utils_logger_logger.Logger)

Create a logger that writes a JSON object for every log line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename?` | `string` | path to the file to write to, if not specified, logs are written to stdout |

#### Returns

[`Logger`](../interfaces/utils_logger_logger.Logger)

#### Defined in

[src/utils/logger/jsonLogger.ts:8](https://github.com/golemfactory/golem-js/blob/9c218b4/src/utils/logger/jsonLogger.ts#L8)

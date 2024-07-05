---
title: "Module logger"
pageTitle: "Module logger - Task API Reference"
description: "Explore the detailed API reference documentation for the Module logger within the Task API SDK for the Golem Network."
type: "JS Task API Reference"
---
# Module: logger

## Table of contents

### Functions

- [pinoLogger](logger#pinologger)
- [pinoPrettyLogger](logger#pinoprettylogger)

## Functions

### pinoLogger

▸ **pinoLogger**(`optionsOrStream?`): `Logger`

Golem Logger interface implementation using the Pino library
https://github.com/pinojs/pino

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `optionsOrStream?` | `LoggerOptions`<`never`\> \| `DestinationStream` | https://github.com/pinojs/pino/blob/master/docs/api#options https://github.com/pinojs/pino/blob/master/docs/api#destination |

#### Returns

`Logger`

#### Defined in

[src/logger.ts:53](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/logger.ts#L53)

___

### pinoPrettyLogger

▸ **pinoPrettyLogger**(`options?`): `Logger`

Golem Logger interface implementation using the Pino-Pretty library
Default set: `ignore: "pid,hostname,namespace", singleLine: true`
https://github.com/pinojs/pino-pretty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `PrettyOptions_` | https://github.com/pinojs/pino-pretty?tab=readme-ov-file#options |

#### Returns

`Logger`

#### Defined in

[src/logger.ts:63](https://github.com/golemfactory/golem-sdk-task-executor/blob/f6ae452/src/logger.ts#L63)

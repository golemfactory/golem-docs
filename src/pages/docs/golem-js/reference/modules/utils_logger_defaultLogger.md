---
title: "Module utils/logger/defaultLogger"
pageTitle: "Module utils/logger/defaultLogger - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module utils/logger/defaultLogger within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: utils/logger/defaultLogger

## Table of contents

### Functions

- [defaultLogger](utils_logger_defaultLogger#defaultlogger)

## Functions

### defaultLogger

▸ **defaultLogger**(`namespace`, `opts?`): `Object`

Creates a logger that uses the debug library. This logger is used by default by all entities in the SDK.

If the namespace is not prefixed with `golem-js:`, it will be prefixed automatically - this can be controlled by `disableAutoPrefix` options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `opts` | `DefaultLoggerOptions` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `child` | (`childNamespace`: `string`) => \{ child: (childNamespace: string) =\> ...; info: (msg: string) =\> void; error: (msg: string) =\> void; warn: (msg: string) =\> void; debug: (msg: string) =\> void; log: (msg: string, ctx?: Error \| Record\<...\> \| undefined) =\> void; } |
| `info` | (`msg`: `string`) => `void` |
| `error` | (`msg`: `string`) => `void` |
| `warn` | (`msg`: `string`) => `void` |
| `debug` | (`msg`: `string`) => `void` |
| `log` | (`msg`: `string`, `ctx?`: `Error` \| `Record`\<`string`, `unknown`\>) => `void` |

#### Defined in

[src/utils/logger/defaultLogger.ts:25](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/defaultLogger.ts#L25)

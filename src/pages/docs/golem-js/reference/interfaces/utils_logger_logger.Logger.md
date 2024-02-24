---
title: "Interface Logger"
pageTitle: "Interface Logger - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface Logger within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: Logger

[utils/logger/logger](../modules/utils_logger_logger).Logger

## Table of contents

### Methods

- [child](utils_logger_logger.Logger#child)
- [debug](utils_logger_logger.Logger#debug)
- [info](utils_logger_logger.Logger#info)
- [warn](utils_logger_logger.Logger#warn)
- [error](utils_logger_logger.Logger#error)

## Methods

### child

▸ **child**(`namespace`): [`Logger`](utils_logger_logger.Logger)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

[`Logger`](utils_logger_logger.Logger)

#### Defined in

[src/utils/logger/logger.ts:2](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L2)

___

### debug

▸ **debug**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:3](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L3)

▸ **debug**(`msg`, `ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `ctx` | `Error` \| `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:4](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L4)

___

### info

▸ **info**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:5](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L5)

▸ **info**(`msg`, `ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `ctx` | `Error` \| `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:6](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L6)

___

### warn

▸ **warn**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:7](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L7)

▸ **warn**(`msg`, `ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `ctx` | `Error` \| `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:8](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L8)

___

### error

▸ **error**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:9](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L9)

▸ **error**(`msg`, `ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `ctx` | `Error` \| `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/utils/logger/logger.ts:10](https://github.com/golemfactory/golem-js/blob/9789a95/src/utils/logger/logger.ts#L10)

# Class: ConsoleLogger

[utils/consoleLogger](../modules/utils_consoleLogger.md).ConsoleLogger

Helper class implements simple logger prints all messages to console

## Implements

- [`Logger`](../interfaces/utils_logger.Logger.md)

## Table of contents

### Constructors

- [constructor](utils_consoleLogger.ConsoleLogger.md#constructor)

### Properties

- [level](utils_consoleLogger.ConsoleLogger.md#level)

### Methods

- [debug](utils_consoleLogger.ConsoleLogger.md#debug)
- [error](utils_consoleLogger.ConsoleLogger.md#error)
- [info](utils_consoleLogger.ConsoleLogger.md#info)
- [log](utils_consoleLogger.ConsoleLogger.md#log)
- [setLevel](utils_consoleLogger.ConsoleLogger.md#setlevel)
- [warn](utils_consoleLogger.ConsoleLogger.md#warn)
- [table](utils_consoleLogger.ConsoleLogger.md#table)

## Constructors

### constructor

• **new ConsoleLogger**()

## Properties

### level

• **level**: `string` = `"debug"`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[level](../interfaces/utils_logger.Logger.md#level)

#### Defined in

[yajsapi/utils/consoleLogger.ts:7](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L7)

## Methods

### debug

▸ **debug**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[debug](../interfaces/utils_logger.Logger.md#debug)

#### Defined in

[yajsapi/utils/consoleLogger.ts:9](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L9)

___

### error

▸ **error**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[error](../interfaces/utils_logger.Logger.md#error)

#### Defined in

[yajsapi/utils/consoleLogger.ts:13](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L13)

___

### info

▸ **info**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[info](../interfaces/utils_logger.Logger.md#info)

#### Defined in

[yajsapi/utils/consoleLogger.ts:17](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L17)

___

### log

▸ **log**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[log](../interfaces/utils_logger.Logger.md#log)

#### Defined in

[yajsapi/utils/consoleLogger.ts:21](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L21)

___

### setLevel

▸ **setLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `string` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[setLevel](../interfaces/utils_logger.Logger.md#setlevel)

#### Defined in

[yajsapi/utils/consoleLogger.ts:25](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L25)

___

### warn

▸ **warn**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[warn](../interfaces/utils_logger.Logger.md#warn)

#### Defined in

[yajsapi/utils/consoleLogger.ts:29](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L29)

___

### table

▸ **table**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

[Logger](../interfaces/utils_logger.Logger.md).[table](../interfaces/utils_logger.Logger.md#table)

#### Defined in

[yajsapi/utils/consoleLogger.ts:33](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/utils/consoleLogger.ts#L33)

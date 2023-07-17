[JavaScript API reference](../README) / ConsoleLogger

# Class: ConsoleLogger

Helper class implements simple logger prints all messages to console

## Implements

- [`Logger`](../interfaces/Logger)

## Table of contents

### Constructors

- [constructor](ConsoleLogger#constructor)

### Properties

- [level](ConsoleLogger#level)

### Methods

- [debug](ConsoleLogger#debug)
- [error](ConsoleLogger#error)
- [info](ConsoleLogger#info)
- [log](ConsoleLogger#log)
- [setLevel](ConsoleLogger#setlevel)
- [warn](ConsoleLogger#warn)
- [table](ConsoleLogger#table)

## Constructors

### constructor

• **new ConsoleLogger**()

## Properties

### level

• **level**: `string` = `"debug"`

#### Implementation of

[Logger](../interfaces/Logger).[level](../interfaces/Logger#level)

#### Defined in

[utils/consoleLogger.ts:7](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L7)

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

[Logger](../interfaces/Logger).[debug](../interfaces/Logger#debug)

#### Defined in

[utils/consoleLogger.ts:9](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L9)

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

[Logger](../interfaces/Logger).[error](../interfaces/Logger#error)

#### Defined in

[utils/consoleLogger.ts:13](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L13)

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

[Logger](../interfaces/Logger).[info](../interfaces/Logger#info)

#### Defined in

[utils/consoleLogger.ts:17](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L17)

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

[Logger](../interfaces/Logger).[log](../interfaces/Logger#log)

#### Defined in

[utils/consoleLogger.ts:21](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L21)

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

[Logger](../interfaces/Logger).[setLevel](../interfaces/Logger#setlevel)

#### Defined in

[utils/consoleLogger.ts:25](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L25)

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

[Logger](../interfaces/Logger).[warn](../interfaces/Logger#warn)

#### Defined in

[utils/consoleLogger.ts:29](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L29)

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

[Logger](../interfaces/Logger).[table](../interfaces/Logger#table)

#### Defined in

[utils/consoleLogger.ts:33](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/utils/consoleLogger.ts#L33)

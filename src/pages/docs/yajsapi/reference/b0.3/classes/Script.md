[JavaScript API reference](../README) / Script

# Class: Script

## Table of contents

### Constructors

- [constructor](Script#constructor)

### Methods

- [create](Script#create)
- [add](Script#add)
- [before](Script#before)
- [after](Script#after)
- [getExeScriptRequest](Script#getexescriptrequest)

## Constructors

### constructor

• **new Script**(`commands?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commands` | `Command`[] | `[]` |

#### Defined in

[script/script.ts:11](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/script.ts#L11)

## Methods

### create

▸ `Static` **create**(`commands?`): [`Script`](Script)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands?` | `Command`[] |

#### Returns

[`Script`](Script)

#### Defined in

[script/script.ts:8](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/script.ts#L8)

___

### add

▸ **add**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Command` |

#### Returns

`void`

#### Defined in

[script/script.ts:12](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/script.ts#L12)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[script/script.ts:15](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/script.ts#L15)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[script/script.ts:18](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/script.ts#L18)

___

### getExeScriptRequest

▸ **getExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Defined in

[script/script.ts:21](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/script/script.ts#L21)

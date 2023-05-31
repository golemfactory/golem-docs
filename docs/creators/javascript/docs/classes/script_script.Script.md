# Class: Script

[script/script](../modules/script_script.md).Script

## Table of contents

### Methods

- [create](script_script.Script.md#create)
- [add](script_script.Script.md#add)
- [before](script_script.Script.md#before)
- [after](script_script.Script.md#after)
- [getExeScriptRequest](script_script.Script.md#getexescriptrequest)

### Constructors

- [constructor](script_script.Script.md#constructor)

## Methods

### create

▸ `Static` **create**(`commands?`): [`Script`](script_script.Script.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands?` | [`Command`](script_command.Command.md)[] |

#### Returns

[`Script`](script_script.Script.md)

#### Defined in

[yajsapi/script/script.ts:8](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/script.ts#L8)

___

### add

▸ **add**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`Command`](script_command.Command.md) |

#### Returns

`void`

#### Defined in

[yajsapi/script/script.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/script.ts#L12)

___

### before

▸ **before**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/script/script.ts:15](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/script.ts#L15)

___

### after

▸ **after**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/script/script.ts:18](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/script.ts#L18)

___

### getExeScriptRequest

▸ **getExeScriptRequest**(): `ExeScriptRequest`

#### Returns

`ExeScriptRequest`

#### Defined in

[yajsapi/script/script.ts:21](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/script.ts#L21)

## Constructors

### constructor

• **new Script**(`commands?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commands` | [`Command`](script_command.Command.md)[] | `[]` |

#### Defined in

[yajsapi/script/script.ts:11](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/script/script.ts#L11)

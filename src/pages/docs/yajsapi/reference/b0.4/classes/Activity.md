[JavaScript API reference](../README) / Activity

# Class: Activity

Activity module - an object representing the runtime environment on the provider in accordance with the `Package` specification.
As part of a given activity, it is possible to execute exe script commands and capture their results.

## Table of contents

### Properties

- [id](Activity#id)
- [agreementId](Activity#agreementid)

### Methods

- [create](Activity#create)
- [execute](Activity#execute)
- [stop](Activity#stop)
- [getState](Activity#getstate)

## Properties

### id

• `Readonly` **id**: `any`

activity ID

#### Defined in

[activity/activity.ts:66](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L66)

___

### agreementId

• `Readonly` **agreementId**: `any`

agreement ID

#### Defined in

[activity/activity.ts:66](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L66)

## Methods

### create

▸ `Static` **create**(`agreementId`, `options?`, `secure?`): `Promise`<[`Activity`](Activity)\>

Create activity for given agreement ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` |  |
| `options?` | [`ActivityOptions`](../interfaces/ActivityOptions) | `undefined` | [ActivityOptions](../interfaces/ActivityOptions) |
| `secure` | `boolean` | `false` | defines if activity will be secure type |

#### Returns

`Promise`<[`Activity`](Activity)\>

Activity

#### Defined in

[activity/activity.ts:78](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L78)

___

### execute

▸ **execute**(`script`, `stream?`, `timeout?`): `Promise`<`Readable`\>

Execute script

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `script` | `ExeScriptRequest` | exe script request |
| `stream?` | `boolean` | define type of getting results from execution (polling or streaming) |
| `timeout?` | `number` | execution timeout |

#### Returns

`Promise`<`Readable`\>

#### Defined in

[activity/activity.ts:90](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L90)

___

### stop

▸ **stop**(): `Promise`<`boolean`\>

Stop and destroy activity

#### Returns

`Promise`<`boolean`\>

boolean

#### Defined in

[activity/activity.ts:115](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L115)

___

### getState

▸ **getState**(): `Promise`<[`ActivityStateEnum`](../enums/ActivityStateEnum)\>

Getting current state of activity

**`Throws`**

Error when cannot query the state

#### Returns

`Promise`<[`ActivityStateEnum`](../enums/ActivityStateEnum)\>

state

#### Defined in

[activity/activity.ts:127](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/activity/activity.ts#L127)

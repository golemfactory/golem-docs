# Class: Activity

[activity/activity](../modules/activity_activity.md).Activity

Activity module - an object representing the runtime environment on the provider in accordance with the `Package` specification.
As part of a given activity, it is possible to execute exe script commands and capture their results.

## Table of contents

### Methods

- [create](activity_activity.Activity.md#create)
- [execute](activity_activity.Activity.md#execute)
- [stop](activity_activity.Activity.md#stop)
- [getState](activity_activity.Activity.md#getstate)
- [send](activity_activity.Activity.md#send)

### Properties

- [id](activity_activity.Activity.md#id)
- [agreementId](activity_activity.Activity.md#agreementid)
- [options](activity_activity.Activity.md#options)

## Methods

### create

▸ `Static` **create**(`agreementId`, `options?`, `secure?`): `Promise`<[`Activity`](activity_activity.Activity.md)\>

Create activity for given agreement ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` |  |
| `options?` | [`ActivityOptions`](../interfaces/activity_activity.ActivityOptions.md) | `undefined` | [ActivityOptions](../interfaces/activity_activity.ActivityOptions.md) |
| `secure` | `boolean` | `false` | defines if activity will be secure type |

#### Returns

`Promise`<[`Activity`](activity_activity.Activity.md)\>

Activity

#### Defined in

[yajsapi/activity/activity.ts:78](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L78)

___

### execute

▸ **execute**(`script`, `stream?`, `timeout?`): `Promise`<`Readable`\>

Execute script

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_activity.ExeScriptRequest.md) | exe script request |
| `stream?` | `boolean` | define type of getting results from execution (polling or streaming) |
| `timeout?` | `number` | execution timeout |

#### Returns

`Promise`<`Readable`\>

#### Defined in

[yajsapi/activity/activity.ts:90](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L90)

___

### stop

▸ **stop**(): `Promise`<`boolean`\>

Stop and destroy activity

#### Returns

`Promise`<`boolean`\>

boolean

#### Defined in

[yajsapi/activity/activity.ts:115](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L115)

___

### getState

▸ **getState**(): `Promise`<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum.md)\>

Getting current state of activity

**`Throws`**

Error when cannot query the state

#### Returns

`Promise`<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum.md)\>

state

#### Defined in

[yajsapi/activity/activity.ts:127](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L127)

___

### send

▸ `Protected` **send**(`script`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_activity.ExeScriptRequest.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[yajsapi/activity/activity.ts:138](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L138)

## Properties

### id

• `Readonly` **id**: `any`

activity ID

#### Defined in

[yajsapi/activity/activity.ts:66](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L66)

___

### agreementId

• `Readonly` **agreementId**: `any`

agreement ID

#### Defined in

[yajsapi/activity/activity.ts:66](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L66)

___

### options

• `Protected` `Readonly` **options**: `ActivityConfig`

[ActivityOptions](../interfaces/activity_activity.ActivityOptions.md)

#### Defined in

[yajsapi/activity/activity.ts:66](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/activity/activity.ts#L66)

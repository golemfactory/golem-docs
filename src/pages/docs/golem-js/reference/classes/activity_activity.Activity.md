---
title: "Class Activity - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Activity within the golem-js SDK for the Golem Network."
type: "reference"
---
# Class: Activity

[activity/activity](../modules/activity_activity).Activity

Activity module - an object representing the runtime environment on the provider in accordance with the `Package` specification.
As part of a given activity, it is possible to execute exe script commands and capture their results.

## Table of contents

### Properties

- [id](activity_activity.Activity#id)
- [agreementId](activity_activity.Activity#agreementid)
- [yagnaApi](activity_activity.Activity#yagnaapi)
- [options](activity_activity.Activity#options)

### Methods

- [create](activity_activity.Activity#create)
- [execute](activity_activity.Activity#execute)
- [stop](activity_activity.Activity#stop)
- [getState](activity_activity.Activity#getstate)
- [send](activity_activity.Activity#send)

## Properties

### id

• `Readonly` **id**: `string`

activity ID

#### Defined in

[src/activity/activity.ts:55](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L55)

___

### agreementId

• `Readonly` **agreementId**: `string`

agreement ID

#### Defined in

[src/activity/activity.ts:56](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L56)

___

### yagnaApi

• `Protected` `Readonly` **yagnaApi**: [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

[YagnaApi](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/activity/activity.ts:57](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L57)

___

### options

• `Protected` `Readonly` **options**: `ActivityConfig`

[ActivityOptions](../interfaces/activity_activity.ActivityOptions)

#### Defined in

[src/activity/activity.ts:58](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L58)

## Methods

### create

▸ **create**(`agreementId`, `yagnaApi`, `options?`, `secure?`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Create activity for given agreement ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` |  |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) | `undefined` |  |
| `options?` | [`ActivityOptions`](../interfaces/activity_activity.ActivityOptions) | `undefined` | [ActivityOptions](../interfaces/activity_activity.ActivityOptions) |
| `secure` | `boolean` | `false` | defines if activity will be secure type |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

Activity

#### Defined in

[src/activity/activity.ts:72](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L72)

___

### execute

▸ **execute**(`script`, `stream?`, `timeout?`): `Promise`\<`Readable`\>

Execute script

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_activity.ExeScriptRequest) | exe script request |
| `stream?` | `boolean` | define type of getting results from execution (polling or streaming) |
| `timeout?` | `number` | execution timeout |

#### Returns

`Promise`\<`Readable`\>

#### Defined in

[src/activity/activity.ts:89](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L89)

___

### stop

▸ **stop**(): `Promise`\<`boolean`\>

Stop and destroy activity

#### Returns

`Promise`\<`boolean`\>

boolean

#### Defined in

[src/activity/activity.ts:118](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L118)

___

### getState

▸ **getState**(): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

Getting current state of activity

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

state

**`Throws`**

Error when cannot query the state

#### Defined in

[src/activity/activity.ts:130](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L130)

___

### send

▸ **send**(`script`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`ExeScriptRequest`](../interfaces/activity_activity.ExeScriptRequest) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/activity/activity.ts:147](https://github.com/golemfactory/golem-js/blob/2240307/src/activity/activity.ts#L147)

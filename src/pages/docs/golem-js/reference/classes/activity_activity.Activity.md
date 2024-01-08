---
title: "Class Activity"
pageTitle: "Class Activity - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Activity within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Activity

[activity/activity](../modules/activity_activity).Activity

Activity module - an object representing the runtime environment on the provider in accordance with the `Package` specification.
As part of a given activity, it is possible to execute exe script commands and capture their results.

## Table of contents

### Properties

- [id](activity_activity.Activity#id)
- [agreement](activity_activity.Activity#agreement)
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

[src/activity/activity.ts:56](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L56)

___

### agreement

• `Readonly` **agreement**: `Agreement`

Agreement

#### Defined in

[src/activity/activity.ts:57](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L57)

___

### yagnaApi

• `Protected` `Readonly` **yagnaApi**: [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi)

[YagnaApi](../modules/utils_yagna_yagna#yagnaapi)

#### Defined in

[src/activity/activity.ts:58](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L58)

___

### options

• `Protected` `Readonly` **options**: `ActivityConfig`

[ActivityOptions](../interfaces/activity_activity.ActivityOptions)

#### Defined in

[src/activity/activity.ts:59](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L59)

## Methods

### create

▸ **create**(`agreement`, `yagnaApi`, `options?`, `secure?`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Create activity for given agreement ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreement` | `Agreement` | `undefined` |  |
| `yagnaApi` | [`YagnaApi`](../modules/utils_yagna_yagna#yagnaapi) | `undefined` |  |
| `options?` | [`ActivityOptions`](../interfaces/activity_activity.ActivityOptions) | `undefined` | [ActivityOptions](../interfaces/activity_activity.ActivityOptions) |
| `secure` | `boolean` | `false` | defines if activity will be secure type |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

Activity

#### Defined in

[src/activity/activity.ts:73](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L73)

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

[src/activity/activity.ts:90](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L90)

___

### stop

▸ **stop**(): `Promise`\<`boolean`\>

Stop and destroy activity

#### Returns

`Promise`\<`boolean`\>

boolean

#### Defined in

[src/activity/activity.ts:119](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L119)

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

[src/activity/activity.ts:131](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L131)

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

[src/activity/activity.ts:148](https://github.com/golemfactory/golem-js/blob/9c218b4/src/activity/activity.ts#L148)

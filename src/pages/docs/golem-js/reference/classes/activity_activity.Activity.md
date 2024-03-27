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

- [events](activity_activity.Activity#events)
- [id](activity_activity.Activity#id)
- [agreement](activity_activity.Activity#agreement)
- [yagnaApi](activity_activity.Activity#yagnaapi)
- [options](activity_activity.Activity#options)

### Methods

- [create](activity_activity.Activity#create)
- [getProviderInfo](activity_activity.Activity#getproviderinfo)
- [execute](activity_activity.Activity#execute)
- [stop](activity_activity.Activity#stop)
- [getState](activity_activity.Activity#getstate)
- [send](activity_activity.Activity#send)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ActivityEvents`](../interfaces/activity_activity.ActivityEvents), `any`\>

#### Defined in

[src/activity/activity.ts:59](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L59)

___

### id

• `Readonly` **id**: `string`

activity ID

#### Defined in

[src/activity/activity.ts:69](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L69)

___

### agreement

• `Readonly` **agreement**: `Agreement`

Agreement

#### Defined in

[src/activity/activity.ts:70](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L70)

___

### yagnaApi

• `Protected` `Readonly` **yagnaApi**: [`YagnaApi`](utils_yagna_yagnaApi.YagnaApi)

[YagnaApi](utils_yagna_yagnaApi.YagnaApi)

#### Defined in

[src/activity/activity.ts:71](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L71)

___

### options

• `Protected` `Readonly` **options**: `ActivityConfig`

[ActivityOptions](../interfaces/activity_activity.ActivityOptions)

#### Defined in

[src/activity/activity.ts:72](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L72)

## Methods

### create

▸ **create**(`agreement`, `yagnaApi`, `options?`, `secure?`): `Promise`\<[`Activity`](activity_activity.Activity)\>

Create activity for given agreement ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreement` | `Agreement` | `undefined` |  |
| `yagnaApi` | [`YagnaApi`](utils_yagna_yagnaApi.YagnaApi) | `undefined` |  |
| `options?` | [`ActivityOptions`](../interfaces/activity_activity.ActivityOptions) | `undefined` | [ActivityOptions](../interfaces/activity_activity.ActivityOptions) |
| `secure` | `boolean` | `false` | defines if activity will be secure type |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

Activity

#### Defined in

[src/activity/activity.ts:86](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L86)

___

### getProviderInfo

▸ **getProviderInfo**(): [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Returns

[`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/activity/activity.ts:96](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L96)

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

[src/activity/activity.ts:107](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L107)

___

### stop

▸ **stop**(): `Promise`\<`boolean`\>

Stop and destroy activity

#### Returns

`Promise`\<`boolean`\>

boolean

#### Defined in

[src/activity/activity.ts:143](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L143)

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

[src/activity/activity.ts:155](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L155)

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

[src/activity/activity.ts:186](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L186)

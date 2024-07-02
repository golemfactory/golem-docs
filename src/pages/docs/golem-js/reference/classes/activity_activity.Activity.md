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

### Constructors

- [constructor](activity_activity.Activity#constructor)

### Properties

- [id](activity_activity.Activity#id)
- [agreement](activity_activity.Activity#agreement)
- [currentState](activity_activity.Activity#currentstate)
- [previousState](activity_activity.Activity#previousstate)
- [usage](activity_activity.Activity#usage)

### Accessors

- [provider](activity_activity.Activity#provider)

### Methods

- [getState](activity_activity.Activity#getstate)
- [getPreviousState](activity_activity.Activity#getpreviousstate)

## Constructors

### constructor

• **new Activity**(`id`, `agreement`, `currentState?`, `previousState?`, `usage`): [`Activity`](activity_activity.Activity)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The ID of the activity in Yagna |
| `agreement` | [`Agreement`](market_agreement_agreement.Agreement) | `undefined` | The agreement that's related to this activity |
| `currentState` | [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum) | `ActivityStateEnum.New` | The current state as it was obtained from yagna |
| `previousState` | [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum) | `ActivityStateEnum.Unknown` | The previous state (or New if this is the first time we're creating the activity) |
| `usage` | [`ActivityUsageInfo`](../modules/activity_activity#activityusageinfo) | `undefined` | Current resource usage vector information |

#### Returns

[`Activity`](activity_activity.Activity)

#### Defined in

[src/activity/activity.ts:37](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L37)

## Properties

### id

• `Readonly` **id**: `string`

The ID of the activity in Yagna

#### Defined in

[src/activity/activity.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L38)

___

### agreement

• `Readonly` **agreement**: [`Agreement`](market_agreement_agreement.Agreement)

The agreement that's related to this activity

#### Defined in

[src/activity/activity.ts:39](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L39)

___

### currentState

• `Protected` `Readonly` **currentState**: [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum) = `ActivityStateEnum.New`

The current state as it was obtained from yagna

#### Defined in

[src/activity/activity.ts:40](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L40)

___

### previousState

• `Protected` `Readonly` **previousState**: [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum) = `ActivityStateEnum.Unknown`

The previous state (or New if this is the first time we're creating the activity)

#### Defined in

[src/activity/activity.ts:41](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L41)

___

### usage

• `Protected` `Readonly` **usage**: [`ActivityUsageInfo`](../modules/activity_activity#activityusageinfo)

Current resource usage vector information

#### Defined in

[src/activity/activity.ts:42](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L42)

## Accessors

### provider

• `get` **provider**(): [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Returns

[`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/activity/activity.ts:45](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L45)

## Methods

### getState

▸ **getState**(): [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)

#### Returns

[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)

#### Defined in

[src/activity/activity.ts:49](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L49)

___

### getPreviousState

▸ **getPreviousState**(): [`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)

#### Returns

[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)

#### Defined in

[src/activity/activity.ts:53](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/activity.ts#L53)

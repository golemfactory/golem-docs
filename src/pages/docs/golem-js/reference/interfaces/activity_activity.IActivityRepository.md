---
title: "Interface IActivityRepository"
pageTitle: "Interface IActivityRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface IActivityRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: IActivityRepository

[activity/activity](../modules/activity_activity).IActivityRepository

## Implemented by

- [`ActivityRepository`](../classes/shared_yagna_repository_activity_repository.ActivityRepository)

## Table of contents

### Methods

- [getById](activity_activity.IActivityRepository#getbyid)
- [getStateOfActivity](activity_activity.IActivityRepository#getstateofactivity)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Activity`](../classes/activity_activity.Activity)\>

#### Defined in

[src/activity/activity.ts:20](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.ts#L20)

___

### getStateOfActivity

▸ **getStateOfActivity**(`id`): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Defined in

[src/activity/activity.ts:22](https://github.com/golemfactory/golem-js/blob/570126bc/src/activity/activity.ts#L22)

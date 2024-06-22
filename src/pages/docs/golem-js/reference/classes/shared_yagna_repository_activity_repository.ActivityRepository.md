---
title: "Class ActivityRepository"
pageTitle: "Class ActivityRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ActivityRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ActivityRepository

[shared/yagna/repository/activity-repository](../modules/shared_yagna_repository_activity_repository).ActivityRepository

## Implements

- [`IActivityRepository`](../interfaces/activity_activity.IActivityRepository)

## Table of contents

### Constructors

- [constructor](shared_yagna_repository_activity_repository.ActivityRepository#constructor)

### Methods

- [getById](shared_yagna_repository_activity_repository.ActivityRepository#getbyid)
- [getStateOfActivity](shared_yagna_repository_activity_repository.ActivityRepository#getstateofactivity)

## Constructors

### constructor

• **new ActivityRepository**(`state`, `agreementRepo`): [`ActivityRepository`](shared_yagna_repository_activity_repository.ActivityRepository)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `RequestorStateService` |
| `agreementRepo` | [`IAgreementRepository`](../interfaces/market_agreement_agreement.IAgreementRepository) |

#### Returns

[`ActivityRepository`](shared_yagna_repository_activity_repository.ActivityRepository)

#### Defined in

[src/shared/yagna/repository/activity-repository.ts:11](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/activity-repository.ts#L11)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`Activity`](activity_activity.Activity)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Activity`](activity_activity.Activity)\>

#### Implementation of

[IActivityRepository](../interfaces/activity_activity.IActivityRepository).[getById](../interfaces/activity_activity.IActivityRepository#getbyid)

#### Defined in

[src/shared/yagna/repository/activity-repository.ts:16](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/activity-repository.ts#L16)

___

### getStateOfActivity

▸ **getStateOfActivity**(`id`): `Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ActivityStateEnum`](../enums/activity_activity.ActivityStateEnum)\>

#### Implementation of

[IActivityRepository](../interfaces/activity_activity.IActivityRepository).[getStateOfActivity](../interfaces/activity_activity.IActivityRepository#getstateofactivity)

#### Defined in

[src/shared/yagna/repository/activity-repository.ts:38](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/repository/activity-repository.ts#L38)

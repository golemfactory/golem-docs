---
title: "Interface ActivityEvents"
pageTitle: "Interface ActivityEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface ActivityEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: ActivityEvents

[activity/activity](../modules/activity_activity).ActivityEvents

## Table of contents

### Properties

- [scriptSent](activity_activity.ActivityEvents#scriptsent)
- [scriptExecuted](activity_activity.ActivityEvents#scriptexecuted)
- [stateChanged](activity_activity.ActivityEvents#statechanged)
- [destroyed](activity_activity.ActivityEvents#destroyed)

## Properties

### scriptSent

• **scriptSent**: (`details`: \{ `activityId`: `string` ; `agreementId`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.activityId` | `string` |
| `details.agreementId` | `string` |

##### Returns

`void`

#### Defined in

[src/activity/activity.ts:15](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L15)

___

### scriptExecuted

• **scriptExecuted**: (`details`: \{ `activityId`: `string` ; `agreementId`: `string` ; `success`: `boolean`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.activityId` | `string` |
| `details.agreementId` | `string` |
| `details.success` | `boolean` |

##### Returns

`void`

#### Defined in

[src/activity/activity.ts:16](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L16)

___

### stateChanged

• **stateChanged**: (`details`: \{ `id`: `string` ; `state`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.state` | `string` |

##### Returns

`void`

#### Defined in

[src/activity/activity.ts:17](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L17)

___

### destroyed

• **destroyed**: (`details`: \{ `id`: `string` ; `agreementId`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.agreementId` | `string` |

##### Returns

`void`

#### Defined in

[src/activity/activity.ts:18](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/activity/activity.ts#L18)

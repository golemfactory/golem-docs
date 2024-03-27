---
title: "Interface AgreementEvents"
pageTitle: "Interface AgreementEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface AgreementEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: AgreementEvents

[agreement/agreement](../modules/agreement_agreement).AgreementEvents

## Table of contents

### Properties

- [confirmed](agreement_agreement.AgreementEvents#confirmed)
- [rejected](agreement_agreement.AgreementEvents#rejected)
- [terminated](agreement_agreement.AgreementEvents#terminated)

## Properties

### confirmed

• **confirmed**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo)  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |

##### Returns

`void`

#### Defined in

[src/agreement/agreement.ts:10](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/agreement/agreement.ts#L10)

___

### rejected

• **rejected**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo) ; `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/agreement/agreement.ts:11](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/agreement/agreement.ts#L11)

___

### terminated

• **terminated**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo) ; `reason`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |
| `details.reason` | `string` |

##### Returns

`void`

#### Defined in

[src/agreement/agreement.ts:12](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/agreement/agreement.ts#L12)

---
title: "Class Proposal"
pageTitle: "Class Proposal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Proposal within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Proposal

[market/proposal](../modules/market_proposal).Proposal

Proposal module - an object representing an offer in the state of a proposal from the provider.

## Table of contents

### Constructors

- [constructor](market_proposal.Proposal#constructor)

### Properties

- [id](market_proposal.Proposal#id)
- [issuerId](market_proposal.Proposal#issuerid)
- [provider](market_proposal.Proposal#provider)
- [properties](market_proposal.Proposal#properties)
- [constraints](market_proposal.Proposal#constraints)
- [timestamp](market_proposal.Proposal#timestamp)
- [counteringProposalId](market_proposal.Proposal#counteringproposalid)
- [demand](market_proposal.Proposal#demand)

### Accessors

- [details](market_proposal.Proposal#details)
- [pricing](market_proposal.Proposal#pricing)

### Methods

- [validate](market_proposal.Proposal#validate)
- [isInitial](market_proposal.Proposal#isinitial)
- [isDraft](market_proposal.Proposal#isdraft)
- [isExpired](market_proposal.Proposal#isexpired)
- [isRejected](market_proposal.Proposal#isrejected)
- [reject](market_proposal.Proposal#reject)
- [respond](market_proposal.Proposal#respond)
- [hasPaymentPlatform](market_proposal.Proposal#haspaymentplatform)
- [getEstimatedCost](market_proposal.Proposal#getestimatedcost)

## Constructors

### constructor

• **new Proposal**(`demand`, `parentId`, `setCounteringProposalReference`, `api`, `model`, `eventTarget?`): [`Proposal`](market_proposal.Proposal)

Create proposal for given subscription ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | `Demand` |
| `parentId` | ``null`` \| `string` |
| `setCounteringProposalReference` | (`id`: `string`, `parentId`: `string`) => ``null`` \| `void` |
| `api` | `RequestorApi` |
| `model` | `Proposal` |
| `eventTarget?` | `EventTarget` |

#### Returns

[`Proposal`](market_proposal.Proposal)

#### Defined in

[src/market/proposal.ts:84](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L84)

## Properties

### id

• **id**: `string`

#### Defined in

[src/market/proposal.ts:64](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L64)

___

### issuerId

• `Readonly` **issuerId**: `string`

#### Defined in

[src/market/proposal.ts:65](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L65)

___

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/market/proposal.ts:66](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L66)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal#proposalproperties)

#### Defined in

[src/market/proposal.ts:67](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L67)

___

### constraints

• `Readonly` **constraints**: `string`

#### Defined in

[src/market/proposal.ts:68](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L68)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[src/market/proposal.ts:69](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L69)

___

### counteringProposalId

• **counteringProposalId**: ``null`` \| `string`

#### Defined in

[src/market/proposal.ts:70](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L70)

___

### demand

• `Readonly` **demand**: `Demand`

#### Defined in

[src/market/proposal.ts:85](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L85)

## Accessors

### details

• `get` **details**(): [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Returns

[`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Defined in

[src/market/proposal.ts:106](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L106)

___

### pricing

• `get` **pricing**(): [`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Returns

[`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Defined in

[src/market/proposal.ts:122](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L122)

## Methods

### validate

▸ **validate**(): `void`

Validates if the proposal satisfies basic business rules, is complete and thus safe to interact with

Use this method before executing any important logic, to ensure that you're working with correct, complete data

#### Returns

`void`

#### Defined in

[src/market/proposal.ts:145](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L145)

___

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:182](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L182)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:186](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L186)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:190](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L190)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:194](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L194)

___

### reject

▸ **reject**(`reason?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reason` | `string` | `"no reason"` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/market/proposal.ts:198](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L198)

___

### respond

▸ **respond**(`chosenPlatform`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chosenPlatform` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/market/proposal.ts:220](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L220)

___

### hasPaymentPlatform

▸ **hasPaymentPlatform**(`paymentPlatform`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentPlatform` | `string` |

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:260](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L260)

___

### getEstimatedCost

▸ **getEstimatedCost**(): `number`

Proposal cost estimation based on CPU, Env and startup costs

#### Returns

`number`

#### Defined in

[src/market/proposal.ts:267](https://github.com/golemfactory/golem-js/blob/9789a95/src/market/proposal.ts#L267)

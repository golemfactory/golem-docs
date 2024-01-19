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

• **new Proposal**(`subscriptionId`, `parentId`, `setCounteringProposalReference`, `api`, `model`, `demandRequest`, `paymentPlatform`, `eventTarget?`): [`Proposal`](market_proposal.Proposal)

Create proposal for given subscription ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | subscription ID |
| `parentId` | ``null`` \| `string` | Previous proposal ID with Initial state |
| `setCounteringProposalReference` | (`id`: `string`, `parentId`: `string`) => ``null`` \| `void` |  |
| `api` | `RequestorApi` | RequestorApi |
| `model` | `Proposal` | ProposalModel |
| `demandRequest` | `DemandOfferBase` | DemandOfferBase |
| `paymentPlatform` | `string` |  |
| `eventTarget?` | `EventTarget` | EventTarget |

#### Returns

[`Proposal`](market_proposal.Proposal)

#### Defined in

[src/market/proposal.ts:94](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L94)

## Properties

### id

• **id**: `string`

#### Defined in

[src/market/proposal.ts:72](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L72)

___

### issuerId

• `Readonly` **issuerId**: `string`

#### Defined in

[src/market/proposal.ts:73](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L73)

___

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/market/proposal.ts:74](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L74)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal#proposalproperties)

#### Defined in

[src/market/proposal.ts:75](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L75)

___

### constraints

• `Readonly` **constraints**: `string`

#### Defined in

[src/market/proposal.ts:76](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L76)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[src/market/proposal.ts:77](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L77)

___

### counteringProposalId

• **counteringProposalId**: ``null`` \| `string`

#### Defined in

[src/market/proposal.ts:78](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L78)

## Accessors

### details

• `get` **details**(): [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Returns

[`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Defined in

[src/market/proposal.ts:118](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L118)

___

### pricing

• `get` **pricing**(): [`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Returns

[`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Defined in

[src/market/proposal.ts:134](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L134)

## Methods

### validate

▸ **validate**(): `void`

Validates if the proposal satisfies basic business rules, is complete and thus safe to interact with

Use this method before executing any important logic, to ensure that you're working with correct, complete data

#### Returns

`void`

#### Defined in

[src/market/proposal.ts:157](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L157)

___

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:184](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L184)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:188](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L188)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:192](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L192)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:196](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L196)

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

[src/market/proposal.ts:200](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L200)

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

[src/market/proposal.ts:215](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L215)

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

[src/market/proposal.ts:245](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L245)

___

### getEstimatedCost

▸ **getEstimatedCost**(): `number`

Proposal cost estimation based on CPU, Env and startup costs

#### Returns

`number`

#### Defined in

[src/market/proposal.ts:252](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/market/proposal.ts#L252)

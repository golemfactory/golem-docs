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
- [events](market_proposal.Proposal#events)
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

• **new Proposal**(`demand`, `parentId`, `setCounteringProposalReference`, `api`, `model`): [`Proposal`](market_proposal.Proposal)

Create proposal for given subscription ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `demand` | `Demand` |
| `parentId` | ``null`` \| `string` |
| `setCounteringProposalReference` | (`id`: `string`, `parentId`: `string`) => ``null`` \| `void` |
| `api` | `RequestorService` |
| `model` | `Proposal` |

#### Returns

[`Proposal`](market_proposal.Proposal)

#### Defined in

[src/market/proposal.ts:90](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L90)

## Properties

### id

• **id**: `string`

#### Defined in

[src/market/proposal.ts:70](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L70)

___

### issuerId

• `Readonly` **issuerId**: `string`

#### Defined in

[src/market/proposal.ts:71](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L71)

___

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo)

#### Defined in

[src/market/proposal.ts:72](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L72)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal#proposalproperties)

#### Defined in

[src/market/proposal.ts:73](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L73)

___

### constraints

• `Readonly` **constraints**: `string`

#### Defined in

[src/market/proposal.ts:74](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L74)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[src/market/proposal.ts:75](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L75)

___

### counteringProposalId

• **counteringProposalId**: ``null`` \| `string`

#### Defined in

[src/market/proposal.ts:76](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L76)

___

### events

• `Readonly` **events**: `EventEmitter`\<[`ProposalEvents`](../interfaces/market_proposal.ProposalEvents), `any`\>

#### Defined in

[src/market/proposal.ts:79](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L79)

___

### demand

• `Readonly` **demand**: `Demand`

#### Defined in

[src/market/proposal.ts:91](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L91)

## Accessors

### details

• `get` **details**(): [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Returns

[`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Defined in

[src/market/proposal.ts:111](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L111)

___

### pricing

• `get` **pricing**(): [`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Returns

[`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Defined in

[src/market/proposal.ts:127](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L127)

## Methods

### validate

▸ **validate**(): `void`

Validates if the proposal satisfies basic business rules, is complete and thus safe to interact with

Use this method before executing any important logic, to ensure that you're working with correct, complete data

#### Returns

`void`

#### Defined in

[src/market/proposal.ts:150](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L150)

___

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:187](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L187)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:191](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L191)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:195](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L195)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:199](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L199)

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

[src/market/proposal.ts:203](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L203)

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

[src/market/proposal.ts:223](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L223)

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

[src/market/proposal.ts:266](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L266)

___

### getEstimatedCost

▸ **getEstimatedCost**(): `number`

Proposal cost estimation based on CPU, Env and startup costs

#### Returns

`number`

#### Defined in

[src/market/proposal.ts:273](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/market/proposal.ts#L273)

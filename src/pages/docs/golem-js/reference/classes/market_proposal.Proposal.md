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

## Constructors

### constructor

• **new Proposal**(`subscriptionId`, `parentId`, `setCounteringProposalReference`, `api`, `model`, `demandRequest`, `eventTarget?`): [`Proposal`](market_proposal.Proposal)

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
| `eventTarget?` | `EventTarget` | EventTarget |

#### Returns

[`Proposal`](market_proposal.Proposal)

#### Defined in

[src/market/proposal.ts:92](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L92)

## Properties

### id

• **id**: `string`

#### Defined in

[src/market/proposal.ts:71](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L71)

___

### issuerId

• `Readonly` **issuerId**: `string`

#### Defined in

[src/market/proposal.ts:72](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L72)

___

### provider

• `Readonly` **provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

#### Defined in

[src/market/proposal.ts:73](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L73)

___

### properties

• `Readonly` **properties**: [`ProposalProperties`](../modules/market_proposal#proposalproperties)

#### Defined in

[src/market/proposal.ts:74](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L74)

___

### constraints

• `Readonly` **constraints**: `string`

#### Defined in

[src/market/proposal.ts:75](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L75)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[src/market/proposal.ts:76](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L76)

___

### counteringProposalId

• **counteringProposalId**: ``null`` \| `string`

#### Defined in

[src/market/proposal.ts:77](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L77)

## Accessors

### details

• `get` **details**(): [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Returns

[`ProposalDetails`](../interfaces/market_proposal.ProposalDetails)

#### Defined in

[src/market/proposal.ts:115](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L115)

___

### pricing

• `get` **pricing**(): [`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Returns

[`PricingInfo`](../modules/market_proposal#pricinginfo)

#### Defined in

[src/market/proposal.ts:132](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L132)

## Methods

### validate

▸ **validate**(): `void`

Validates if the proposal satisfies basic business rules, is complete and thus safe to interact with

Use this method before executing any important logic, to ensure that you're working with correct, complete data

#### Returns

`void`

#### Defined in

[src/market/proposal.ts:155](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L155)

___

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:182](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L182)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:186](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L186)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:190](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L190)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/market/proposal.ts:194](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L194)

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

[src/market/proposal.ts:198](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L198)

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

[src/market/proposal.ts:213](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L213)

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

[src/market/proposal.ts:243](https://github.com/golemfactory/golem-js/blob/c2379e3/src/market/proposal.ts#L243)

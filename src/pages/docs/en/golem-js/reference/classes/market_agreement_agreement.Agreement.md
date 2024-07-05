---
title: "Class Agreement"
pageTitle: "Class Agreement - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class Agreement within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: Agreement

[market/agreement/agreement](../modules/market_agreement_agreement).Agreement

Agreement module - an object representing the contract between the requestor and the provider.

## Table of contents

### Constructors

- [constructor](market_agreement_agreement.Agreement#constructor)

### Properties

- [id](market_agreement_agreement.Agreement#id)
- [demand](market_agreement_agreement.Agreement#demand)

### Accessors

- [provider](market_agreement_agreement.Agreement#provider)

### Methods

- [getState](market_agreement_agreement.Agreement#getstate)
- [isFinalState](market_agreement_agreement.Agreement#isfinalstate)

## Constructors

### constructor

• **new Agreement**(`id`, `model`, `demand`): [`Agreement`](market_agreement_agreement.Agreement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `model` | `Agreement` |
| `demand` | [`Demand`](market_demand_demand.Demand) |

#### Returns

[`Agreement`](market_agreement_agreement.Agreement)

#### Defined in

[src/market/agreement/agreement.ts:40](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/agreement/agreement.ts#L40)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[src/market/agreement/agreement.ts:41](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/agreement/agreement.ts#L41)

___

### demand

• `Readonly` **demand**: [`Demand`](market_demand_demand.Demand)

#### Defined in

[src/market/agreement/agreement.ts:43](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/agreement/agreement.ts#L43)

## Accessors

### provider

• `get` **provider**(): [`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Returns

[`ProviderInfo`](../interfaces/market_agreement_agreement.ProviderInfo)

#### Defined in

[src/market/agreement/agreement.ts:54](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/agreement/agreement.ts#L54)

## Methods

### getState

▸ **getState**(): ``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``

Return agreement state

#### Returns

``"Proposal"`` \| ``"Pending"`` \| ``"Cancelled"`` \| ``"Rejected"`` \| ``"Approved"`` \| ``"Expired"`` \| ``"Terminated"``

state

#### Defined in

[src/market/agreement/agreement.ts:50](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/agreement/agreement.ts#L50)

___

### isFinalState

▸ **isFinalState**(): `boolean`

Returns flag if the agreement is in the final state

#### Returns

`boolean`

boolean

**`Description`**

if the final state is true, agreement will not change state further anymore

#### Defined in

[src/market/agreement/agreement.ts:67](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/agreement/agreement.ts#L67)

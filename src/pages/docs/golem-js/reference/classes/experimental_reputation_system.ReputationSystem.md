---
title: "Class ReputationSystem"
pageTitle: "Class ReputationSystem - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ReputationSystem within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ReputationSystem

[experimental/reputation/system](../modules/experimental_reputation_system).ReputationSystem

Reputation system client.

This class is responsible for fetching and applying reputation data to Golem SDK's market management class.

Currently, it includes a proposal filter you can use to filter out providers with low reputation scores.

Reputation data is gathered by the following project: https://github.com/golemfactory/reputation-auditor

You can adjust the weights used to calculate the score for proposals by using the `setProposalWeights` method.

NOTE: This class is currently experimental and subject to change.

NOTE: Only providers from polygon network are being tested, so using this class on testnet will not work.

## Table of contents

### Constructors

- [constructor](experimental_reputation_system.ReputationSystem#constructor)

### Properties

- [paymentNetwork](experimental_reputation_system.ReputationSystem#paymentnetwork)

### Methods

- [create](experimental_reputation_system.ReputationSystem#create)
- [usePreset](experimental_reputation_system.ReputationSystem#usepreset)
- [setData](experimental_reputation_system.ReputationSystem#setdata)
- [getData](experimental_reputation_system.ReputationSystem#getdata)
- [fetchData](experimental_reputation_system.ReputationSystem#fetchdata)
- [setProposalWeights](experimental_reputation_system.ReputationSystem#setproposalweights)
- [getProposalWeights](experimental_reputation_system.ReputationSystem#getproposalweights)
- [setAgreementWeights](experimental_reputation_system.ReputationSystem#setagreementweights)
- [getAgreementWeights](experimental_reputation_system.ReputationSystem#getagreementweights)
- [getProviderScores](experimental_reputation_system.ReputationSystem#getproviderscores)
- [proposalFilter](experimental_reputation_system.ReputationSystem#proposalfilter)
- [agreementSelector](experimental_reputation_system.ReputationSystem#agreementselector)
- [calculateScore](experimental_reputation_system.ReputationSystem#calculatescore)
- [calculateProviderPool](experimental_reputation_system.ReputationSystem#calculateproviderpool)
- [sortCandidatesByScore](experimental_reputation_system.ReputationSystem#sortcandidatesbyscore)

## Constructors

### constructor

• **new ReputationSystem**(`config?`): [`ReputationSystem`](experimental_reputation_system.ReputationSystem)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`ReputationConfig`](../interfaces/experimental_reputation_types.ReputationConfig) |

#### Returns

[`ReputationSystem`](experimental_reputation_system.ReputationSystem)

#### Defined in

[src/experimental/reputation/system.ts:187](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L187)

## Properties

### paymentNetwork

• `Readonly` **paymentNetwork**: `string`

The payment network currently used.

#### Defined in

[src/experimental/reputation/system.ts:136](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L136)

## Methods

### create

▸ **create**(`config?`): `Promise`\<[`ReputationSystem`](experimental_reputation_system.ReputationSystem)\>

Create a new reputation system client and fetch the reputation data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`ReputationConfig`](../interfaces/experimental_reputation_types.ReputationConfig) |

#### Returns

`Promise`\<[`ReputationSystem`](experimental_reputation_system.ReputationSystem)\>

#### Defined in

[src/experimental/reputation/system.ts:181](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L181)

___

### usePreset

▸ **usePreset**(`presetName`): `void`

Apply preset to current reputation system configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presetName` | keyof [`ReputationPresets`](../interfaces/experimental_reputation_types.ReputationPresets) | Preset name to use. |

#### Returns

`void`

#### Defined in

[src/experimental/reputation/system.ts:209](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L209)

___

### setData

▸ **setData**(`data`): `void`

Set reputation data.

This is useful if you want to cache the date locally, or you have an alternative source of data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReputationData`](../interfaces/experimental_reputation_types.ReputationData) |

#### Returns

`void`

#### Defined in

[src/experimental/reputation/system.ts:241](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L241)

___

### getData

▸ **getData**(): [`ReputationData`](../interfaces/experimental_reputation_types.ReputationData)

Returns current reputation data.

#### Returns

[`ReputationData`](../interfaces/experimental_reputation_types.ReputationData)

#### Defined in

[src/experimental/reputation/system.ts:263](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L263)

___

### fetchData

▸ **fetchData**(): `Promise`\<`void`\>

Fetch data from the reputation service.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/experimental/reputation/system.ts:270](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L270)

___

### setProposalWeights

▸ **setProposalWeights**(`weights`): `void`

Set weights used to calculate the score for proposals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `weights` | `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\> |

#### Returns

`void`

#### Defined in

[src/experimental/reputation/system.ts:297](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L297)

___

### getProposalWeights

▸ **getProposalWeights**(): `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\>

Returns current proposal weights.

#### Returns

`Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\>

#### Defined in

[src/experimental/reputation/system.ts:304](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L304)

___

### setAgreementWeights

▸ **setAgreementWeights**(`weights`): `void`

Set weights used to calculate the score for agreements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `weights` | `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\> |

#### Returns

`void`

#### Defined in

[src/experimental/reputation/system.ts:311](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L311)

___

### getAgreementWeights

▸ **getAgreementWeights**(): `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\>

Returns current agreement weights.

#### Returns

`Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\>

#### Defined in

[src/experimental/reputation/system.ts:318](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L318)

___

### getProviderScores

▸ **getProviderScores**(`providerId`): `undefined` \| [`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)

Returns scores for a provider or undefined if the provider is unlisted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerId` | `string` |

#### Returns

`undefined` \| [`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)

#### Defined in

[src/experimental/reputation/system.ts:326](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L326)

___

### proposalFilter

▸ **proposalFilter**(`opts?`): [`ProposalFilter`](../modules/market_proposal_offer_proposal#proposalfilter)

Returns a proposal filter that can be used to filter out providers with low reputation scores.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProposalFilterOptions`](../interfaces/experimental_reputation_types.ProposalFilterOptions) |

#### Returns

[`ProposalFilter`](../modules/market_proposal_offer_proposal#proposalfilter)

#### Defined in

[src/experimental/reputation/system.ts:334](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L334)

___

### agreementSelector

▸ **agreementSelector**(`opts?`): [`ProposalSelector`](../modules/market_draft_offer_proposal_pool#proposalselector)

Returns an agreement selector that can be used to select providers based on their reputation scores.

The outcome of this function is determined by current provider scores and the agreement weights set.

For best results, make sure you test the performance or stability of your workload using different weights.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProposalSelectorOptions`](../interfaces/experimental_reputation_types.ProposalSelectorOptions) |

#### Returns

[`ProposalSelector`](../modules/market_draft_offer_proposal_pool#proposalselector)

**`See`**

setAgreementWeights

#### Defined in

[src/experimental/reputation/system.ts:398](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L398)

___

### calculateScore

▸ **calculateScore**(`scores`, `weights`): `number`

Calculate a normalized score based on the given scores and weights.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scores` | `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\> |
| `weights` | `Partial`\<[`ReputationProviderScores`](../interfaces/experimental_reputation_types.ReputationProviderScores)\> |

#### Returns

`number`

#### Defined in

[src/experimental/reputation/system.ts:428](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L428)

___

### calculateProviderPool

▸ **calculateProviderPool**(`opts?`): [`ReputationProviderEntry`](../interfaces/experimental_reputation_types.ReputationProviderEntry)[]

Based on the current reputation data, calculate a list of providers that meet the minimum score requirement.

This method is useful to validate you filter and weights vs the available provider market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProposalFilterOptions`](../interfaces/experimental_reputation_types.ProposalFilterOptions) |

#### Returns

[`ReputationProviderEntry`](../interfaces/experimental_reputation_types.ReputationProviderEntry)[]

#### Defined in

[src/experimental/reputation/system.ts:451](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L451)

___

### sortCandidatesByScore

▸ **sortCandidatesByScore**(`proposals`, `scoresMap`): [`OfferProposal`](market_proposal_offer_proposal.OfferProposal)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposals` | [`OfferProposal`](market_proposal_offer_proposal.OfferProposal)[] |
| `scoresMap` | `Map`\<`string`, `number`\> |

#### Returns

[`OfferProposal`](market_proposal_offer_proposal.OfferProposal)[]

#### Defined in

[src/experimental/reputation/system.ts:459](https://github.com/golemfactory/golem-js/blob/570126bc/src/experimental/reputation/system.ts#L459)

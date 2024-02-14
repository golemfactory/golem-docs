---
title: "Module agreement/strategy"
pageTitle: "Module agreement/strategy - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module agreement/strategy within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: agreement/strategy

## Table of contents

### Functions

- [randomAgreementSelector](agreement_strategy#randomagreementselector)
- [randomAgreementSelectorWithPriorityForExistingOnes](agreement_strategy#randomagreementselectorwithpriorityforexistingones)
- [bestAgreementSelector](agreement_strategy#bestagreementselector)

## Functions

### randomAgreementSelector

▸ **randomAgreementSelector**(): (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[]) => `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

Default selector that selects a random provider from the pool

#### Returns

`fn`

▸ (`candidates`): `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[] |

##### Returns

`Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

#### Defined in

[src/agreement/strategy.ts:4](https://github.com/golemfactory/golem-js/blob/7cee55b/src/agreement/strategy.ts#L4)

___

### randomAgreementSelectorWithPriorityForExistingOnes

▸ **randomAgreementSelectorWithPriorityForExistingOnes**(): (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[]) => `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

Selector selecting a random provider from the pool, but giving priority to those who already have a confirmed agreement and deployed activity

#### Returns

`fn`

▸ (`candidates`): `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[] |

##### Returns

`Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

#### Defined in

[src/agreement/strategy.ts:8](https://github.com/golemfactory/golem-js/blob/7cee55b/src/agreement/strategy.ts#L8)

___

### bestAgreementSelector

▸ **bestAgreementSelector**(`scores`): (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[]) => `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

Selector selecting the provider according to the provided list of scores

#### Parameters

| Name | Type |
| :------ | :------ |
| `scores` | `Object` |

#### Returns

`fn`

▸ (`candidates`): `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[] |

##### Returns

`Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

#### Defined in

[src/agreement/strategy.ts:17](https://github.com/golemfactory/golem-js/blob/7cee55b/src/agreement/strategy.ts#L17)

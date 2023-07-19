# Module: agreement/strategy

## Table of contents

### Functions

- [randomAgreementSelector](agreement_strategy.md#randomagreementselector)
- [randomAgreementSelectorWithPriorityForExistingOnes](agreement_strategy.md#randomagreementselectorwithpriorityforexistingones)
- [bestAgreementSelector](agreement_strategy.md#bestagreementselector)

## Functions

### randomAgreementSelector

▸ **randomAgreementSelector**(): (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[]) => `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

Default selector that selects a random provider from the pool

#### Returns

`fn`

▸ (`candidates`): `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[] |

##### Returns

`Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

#### Defined in

[yajsapi/agreement/strategy.ts:4](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/strategy.ts#L4)

___

### randomAgreementSelectorWithPriorityForExistingOnes

▸ **randomAgreementSelectorWithPriorityForExistingOnes**(): (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[]) => `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

Selector selecting a random provider from the pool, but giving priority to those who already have a confirmed agreement and deployed activity

#### Returns

`fn`

▸ (`candidates`): `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[] |

##### Returns

`Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

#### Defined in

[yajsapi/agreement/strategy.ts:8](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/strategy.ts#L8)

___

### bestAgreementSelector

▸ **bestAgreementSelector**(`scores`): (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[]) => `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

Selector selecting the provider according to the provided list of scores

#### Parameters

| Name | Type |
| :------ | :------ |
| `scores` | `Object` |

#### Returns

`fn`

▸ (`candidates`): `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[] |

##### Returns

`Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

#### Defined in

[yajsapi/agreement/strategy.ts:17](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/strategy.ts#L17)

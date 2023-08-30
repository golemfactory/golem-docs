# Module: agreement/service

## Table of contents

### Classes

- [AgreementCandidate](../classes/agreement_service.AgreementCandidate.md)

### Interfaces

- [AgreementDTO](../interfaces/agreement_service.AgreementDTO.md)
- [AgreementServiceOptions](../interfaces/agreement_service.AgreementServiceOptions.md)

### Type Aliases

- [AgreementSelector](agreement_service.md#agreementselector)

## Type Aliases

### AgreementSelector

Ƭ **AgreementSelector**: (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[]) => `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

#### Type declaration

▸ (`candidates`): `Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)[] |

##### Returns

`Promise`<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate.md)\>

#### Defined in

[src/agreement/service.ts:19](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/service.ts#L19)

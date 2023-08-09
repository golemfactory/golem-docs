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

[yajsapi/agreement/service.ts:18](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/agreement/service.ts#L18)

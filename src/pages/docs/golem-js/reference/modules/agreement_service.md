---
title: "Module agreement/service - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module agreement/service within the golem-js SDK for the Golem Network."
type: "reference"
---
# Module: agreement/service

## Table of contents

### Classes

- [AgreementCandidate](../classes/agreement_service.AgreementCandidate)

### Interfaces

- [AgreementDTO](../interfaces/agreement_service.AgreementDTO)
- [AgreementServiceOptions](../interfaces/agreement_service.AgreementServiceOptions)

### Type Aliases

- [AgreementSelector](agreement_service#agreementselector)

## Type Aliases

### AgreementSelector

Ƭ **AgreementSelector**: (`candidates`: [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[]) => `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

#### Type declaration

▸ (`candidates`): `Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `candidates` | [`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)[] |

##### Returns

`Promise`\<[`AgreementCandidate`](../classes/agreement_service.AgreementCandidate)\>

#### Defined in

[src/agreement/service.ts:19](https://github.com/golemfactory/golem-js/blob/552d481/src/agreement/service.ts#L19)

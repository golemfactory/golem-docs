---
title: "Class AgreementRepository"
pageTitle: "Class AgreementRepository - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class AgreementRepository within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: AgreementRepository

[shared/yagna/repository/agreement-repository](../modules/shared_yagna_repository_agreement_repository).AgreementRepository

## Implements

- [`IAgreementRepository`](../interfaces/market_agreement_agreement.IAgreementRepository)

## Table of contents

### Constructors

- [constructor](shared_yagna_repository_agreement_repository.AgreementRepository#constructor)

### Methods

- [getById](shared_yagna_repository_agreement_repository.AgreementRepository#getbyid)

## Constructors

### constructor

• **new AgreementRepository**(`api`, `demandRepo`): [`AgreementRepository`](shared_yagna_repository_agreement_repository.AgreementRepository)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `RequestorService` |
| `demandRepo` | [`IDemandRepository`](../interfaces/market_demand_demand.IDemandRepository) |

#### Returns

[`AgreementRepository`](shared_yagna_repository_agreement_repository.AgreementRepository)

#### Defined in

[src/shared/yagna/repository/agreement-repository.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/repository/agreement-repository.ts#L9)

## Methods

### getById

▸ **getById**(`id`): `Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Agreement`](market_agreement_agreement.Agreement)\>

#### Implementation of

[IAgreementRepository](../interfaces/market_agreement_agreement.IAgreementRepository).[getById](../interfaces/market_agreement_agreement.IAgreementRepository#getbyid)

#### Defined in

[src/shared/yagna/repository/agreement-repository.ts:14](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/repository/agreement-repository.ts#L14)

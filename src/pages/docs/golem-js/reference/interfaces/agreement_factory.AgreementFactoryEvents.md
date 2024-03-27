---
title: "Interface AgreementFactoryEvents"
pageTitle: "Interface AgreementFactoryEvents - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface AgreementFactoryEvents within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: AgreementFactoryEvents

[agreement/factory](../modules/agreement_factory).AgreementFactoryEvents

## Table of contents

### Properties

- [agreementCreated](agreement_factory.AgreementFactoryEvents#agreementcreated)

## Properties

### agreementCreated

• **agreementCreated**: (`details`: \{ `id`: `string` ; `provider`: [`ProviderInfo`](agreement_agreement.ProviderInfo) ; `validTo`: `string` ; `proposalId`: `string`  }) => `void`

#### Type declaration

▸ (`details`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Object` |
| `details.id` | `string` |
| `details.provider` | [`ProviderInfo`](agreement_agreement.ProviderInfo) |
| `details.validTo` | `string` |
| `details.proposalId` | `string` |

##### Returns

`void`

#### Defined in

[src/agreement/factory.ts:9](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/agreement/factory.ts#L9)

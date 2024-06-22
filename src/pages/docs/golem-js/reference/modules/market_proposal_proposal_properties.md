---
title: "Module market/proposal/proposal-properties"
pageTitle: "Module market/proposal/proposal-properties - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/proposal/proposal-properties within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: market/proposal/proposal-properties

## Table of contents

### Type Aliases

- [GenericGolemProtocolPropertyType](market_proposal_proposal_properties#genericgolemprotocolpropertytype)
- [Gap3MidAgreementPaymentProps](market_proposal_proposal_properties#gap3midagreementpaymentprops)
- [StandardCommonProps](market_proposal_proposal_properties#standardcommonprops)
- [StandardNodeProps](market_proposal_proposal_properties#standardnodeprops)
- [StandardCommercialProps](market_proposal_proposal_properties#standardcommercialprops)
- [StandardServiceProps](market_proposal_proposal_properties#standardserviceprops)
- [StandardComputationPlatformProps](market_proposal_proposal_properties#standardcomputationplatformprops)
- [ProposalProperties](market_proposal_proposal_properties#proposalproperties)

## Type Aliases

### GenericGolemProtocolPropertyType

Ƭ **GenericGolemProtocolPropertyType**: `Record`\<`string`, `string` \| `number` \| `string`[] \| `number`[] \| `boolean`\>

Describes the type representing properties from the perspective of Golem Market Protocol

Golem Protocol defines "properties" as a flat list of key/value pairs.

The protocol itself does not dictate what properties should or shouldn't be defined. Such details
are left for the Provider and Requestor to agree upon outside the protocol.

The mentioned agreements can be done in a P2P manner between the involved entities, or both parties
can decide to adhere to a specific "standard" which determines which properties are "mandatory".

Specific property definitions and requirements were provided in Golem _standards_ and _architecture proposals_.

**`Link`**

https://github.com/golemfactory/golem-architecture/tree/master/standards Golem standards

**`Link`**

https://github.com/golemfactory/golem-architecture/tree/master/gaps Golem Architecture Proposals

#### Defined in

[src/market/proposal/proposal-properties.ts:17](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L17)

___

### Gap3MidAgreementPaymentProps

Ƭ **Gap3MidAgreementPaymentProps**: `Object`

Properties defined by GAP-3

**`Link`**

https://github.com/golemfactory/golem-architecture/blob/master/gaps/gap-3_mid_agreement_payments/gap-3_mid_agreement_payments

#### Type declaration

| Name | Type |
| :------ | :------ |
| `golem.com.scheme.payu.debit-note.interval-sec??` | `number` |
| `golem.com.scheme.payu.payment-timeout-sec??` | `number` |

#### Defined in

[src/market/proposal/proposal-properties.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L23)

___

### StandardCommonProps

Ƭ **StandardCommonProps**: `Object`

**`Link`**

https://github.com/golemfactory/golem-architecture/tree/master/standards/0-commons

#### Type declaration

| Name | Type |
| :------ | :------ |
| `golem.activity.caps.transfer.protocol` | (``"http"`` \| ``"https"`` \| ``"gftp"``)[] |
| `golem.inf.cpu.architecture` | `string` |
| `golem.inf.cpu.brand` | `string` |
| `golem.inf.cpu.capabilities` | `string`[] |
| `golem.inf.cpu.cores` | `number` |
| `golem.inf.cpu.model` | `string` |
| `golem.inf.cpu.threads` | `number` |
| `golem.inf.cpu.vendor` | `string` |
| `golem.inf.mem.gib` | `number` |
| `golem.inf.storage.gib` | `number` |
| `golem.runtime.capabilities` | `string`[] |
| `golem.runtime.name` | `string` |
| `golem.runtime.version` | `string` |

#### Defined in

[src/market/proposal/proposal-properties.ts:30](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L30)

___

### StandardNodeProps

Ƭ **StandardNodeProps**: `Object`

https://github.com/golemfactory/golem-architecture/blob/master/standards/2-service/srv

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `golem.node.id.name` | `string` | - |
| `golem.node.geo.country_code?` | `string` | **`Deprecated`** Do not rely on this, it's mentioned in the standard, but not implemented FIXME #yagna |

#### Defined in

[src/market/proposal/proposal-properties.ts:49](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L49)

___

### StandardCommercialProps

Ƭ **StandardCommercialProps**: `Object`

**`Link`**

https://github.com/golemfactory/golem-architecture/blob/master/standards/3-commercial/com

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `golem.com.payment.debit-notes.accept-timeout?` | `number` | - |
| `golem.com.payment.chosen-platform` | `string` | **`Example`** ```ts "erc20-polygon-glm" ``` |
| `golem.com.payment.platform.erc20-polygon-glm.address?` | `string` | - |
| `golem.com.payment.platform.erc20-holesky-tglm.address?` | `string` | - |
| `golem.com.payment.platform.erc20-mumbai-tglm.address?` | `string` | - |
| `golem.com.payment.protocol.version` | `number` | - |
| `golem.com.scheme` | `string` | **`Example`** ```ts payu ``` |
| `golem.com.scheme.payu.interval_sec?` | `number` | **`Deprecated`** replaced by `golem.com.scheme.payu.debit-note.interval-sec?` in GAP-3 |
| `golem.com.pricing.model` | ``"linear"`` | - |
| `golem.com.pricing.model.linear.coeffs` | `number`[] | - |
| `golem.com.usage.vector` | `string`[] | - |

#### Defined in

[src/market/proposal/proposal-properties.ts:58](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L58)

___

### StandardServiceProps

Ƭ **StandardServiceProps**: `Object`

**`Link`**

https://github.com/golemfactory/golem-architecture/blob/master/standards/2-service/srv

#### Type declaration

| Name | Type |
| :------ | :------ |
| `golem.srv.caps.multi-activity` | `boolean` |

#### Defined in

[src/market/proposal/proposal-properties.ts:78](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L78)

___

### StandardComputationPlatformProps

Ƭ **StandardComputationPlatformProps**: `Object`

**`Link`**

https://github.com/golemfactory/golem-architecture/blob/master/standards/2-service/srv/comp

#### Type declaration

| Name | Type |
| :------ | :------ |
| `golem.srv.comp.expiration` | `number` |
| `golem.srv.comp.task_package` | `string` |

#### Defined in

[src/market/proposal/proposal-properties.ts:85](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L85)

___

### ProposalProperties

Ƭ **ProposalProperties**: [`GenericGolemProtocolPropertyType`](market_proposal_proposal_properties#genericgolemprotocolpropertytype) & [`StandardCommonProps`](market_proposal_proposal_properties#standardcommonprops) & [`StandardNodeProps`](market_proposal_proposal_properties#standardnodeprops) & [`StandardCommercialProps`](market_proposal_proposal_properties#standardcommercialprops) & [`StandardServiceProps`](market_proposal_proposal_properties#standardserviceprops) & [`StandardComputationPlatformProps`](market_proposal_proposal_properties#standardcomputationplatformprops) & [`Gap3MidAgreementPaymentProps`](market_proposal_proposal_properties#gap3midagreementpaymentprops) & `Partial`\<\{ `golem.node.debug.subnet`: `string` ; `golem.node.net.is-public`: `boolean` ; `golem.srv.caps.payload-manifest`: `boolean`  }\>

#### Defined in

[src/market/proposal/proposal-properties.ts:90](https://github.com/golemfactory/golem-js/blob/570126bc/src/market/proposal/proposal-properties.ts#L90)

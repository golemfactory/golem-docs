---
title: "Module market/proposal - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module market/proposal within the golem-js SDK for the Golem Network."
type: "reference"
---
# Module: market/proposal

## Table of contents

### Classes

- [Proposal](../classes/market_proposal.Proposal)

### Interfaces

- [ProposalDetails](../interfaces/market_proposal.ProposalDetails)

### Type Aliases

- [PricingInfo](market_proposal#pricinginfo)
- [ProposalProperties](market_proposal#proposalproperties)

## Type Aliases

### PricingInfo

Ƭ **PricingInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpuSec` | `number` |
| `envSec` | `number` |
| `start` | `number` |

#### Defined in

[src/market/proposal.ts:6](https://github.com/golemfactory/golem-js/blob/ecc063e/src/market/proposal.ts#L6)

___

### ProposalProperties

Ƭ **ProposalProperties**: `Record`<`string`, `string` \| `number` \| `string`[] \| `number`[] \| `boolean`\> & { `golem.activity.caps.transfer.protocol`: `string`[] ; `golem.com.payment.debit-notes.accept-timeout?`: `number` ; `golem.com.payment.platform.erc20-polygon-glm.address?`: `string` ; `golem.com.payment.platform.erc20-goerli-tglm.address?`: `string` ; `golem.com.payment.platform.erc20-mumbai-tglm.address?`: `string` ; `golem.com.payment.platform.erc20-rinkeby-tglm.address?`: `string` ; `golem.com.payment.platform.zksync-rinkeby-tglm.address?`: `string` ; `golem.com.pricing.model`: ``"linear"`` ; `golem.com.pricing.model.linear.coeffs`: `number`[] ; `golem.com.scheme`: `string` ; `golem.com.scheme.payu.debit-note.interval-sec??`: `number` ; `golem.com.scheme.payu.payment-timeout-sec??`: `number` ; `golem.com.usage.vector`: `string`[] ; `golem.inf.cpu.architecture`: `string` ; `golem.inf.cpu.brand`: `string` ; `golem.inf.cpu.capabilities`: `string`[] ; `golem.inf.cpu.cores`: `number` ; `golem.inf.cpu.model`: `string` ; `golem.inf.cpu.threads`: `number` ; `golem.inf.cpu.vendor`: `string`[] ; `golem.inf.mem.gib`: `number` ; `golem.inf.storage.gib`: `number` ; `golem.node.debug.subnet`: `string` ; `golem.node.id.name`: `string` ; `golem.node.net.is-public`: `boolean` ; `golem.runtime.capabilities`: `string`[] ; `golem.runtime.name`: `string` ; `golem.runtime.version`: `string` ; `golem.srv.caps.multi-activity`: `boolean` ; `golem.srv.caps.payload-manifest`: `boolean`  }

#### Defined in

[src/market/proposal.ts:12](https://github.com/golemfactory/golem-js/blob/ecc063e/src/market/proposal.ts#L12)

# Class: Proposal

[market/proposal](../modules/market_proposal.md).Proposal

Proposal module - an object representing an offer in the state of a proposal from the provider.

## Table of contents

### Constructors

- [constructor](market_proposal.Proposal.md#constructor)

### Properties

- [id](market_proposal.Proposal.md#id)
- [issuerId](market_proposal.Proposal.md#issuerid)
- [properties](market_proposal.Proposal.md#properties)
- [constraints](market_proposal.Proposal.md#constraints)
- [timestamp](market_proposal.Proposal.md#timestamp)

### Accessors

- [score](market_proposal.Proposal.md#score)

### Methods

- [isInitial](market_proposal.Proposal.md#isinitial)
- [isDraft](market_proposal.Proposal.md#isdraft)
- [isExpired](market_proposal.Proposal.md#isexpired)
- [isRejected](market_proposal.Proposal.md#isrejected)
- [reject](market_proposal.Proposal.md#reject)
- [respond](market_proposal.Proposal.md#respond)

## Constructors

### constructor

• **new Proposal**(`subscriptionId`, `api`, `model`, `demandRequest`, `eventTarget?`)

Create proposal for given subscription ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | subscription ID |
| `api` | `RequestorApi` | RequestorApi |
| `model` | `Proposal` | ProposalModel |
| `demandRequest` | `DemandOfferBase` | DemandOfferBase |
| `eventTarget?` | `EventTarget` | EventTarget |

#### Defined in

[yajsapi/market/proposal.ts:29](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L29)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[yajsapi/market/proposal.ts:11](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L11)

___

### issuerId

• `Readonly` **issuerId**: `string`

#### Defined in

[yajsapi/market/proposal.ts:12](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L12)

___

### properties

• `Readonly` **properties**: `object`

#### Defined in

[yajsapi/market/proposal.ts:13](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L13)

___

### constraints

• `Readonly` **constraints**: `string`

#### Defined in

[yajsapi/market/proposal.ts:14](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L14)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[yajsapi/market/proposal.ts:15](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L15)

## Accessors

### score

• `get` **score**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[yajsapi/market/proposal.ts:49](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L49)

• `set` **score**(`score`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `score` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[yajsapi/market/proposal.ts:45](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L45)

## Methods

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/market/proposal.ts:53](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L53)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/market/proposal.ts:57](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L57)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/market/proposal.ts:61](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L61)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[yajsapi/market/proposal.ts:65](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L65)

___

### reject

▸ **reject**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reason` | `string` | `"no reason"` |

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/market/proposal.ts:69](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L69)

___

### respond

▸ **respond**(`chosenPlatform`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chosenPlatform` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/market/proposal.ts:77](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/market/proposal.ts#L77)

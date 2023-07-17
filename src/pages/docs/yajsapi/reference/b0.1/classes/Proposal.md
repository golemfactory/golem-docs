[JavaScript API reference](../README) / Proposal

# Class: Proposal

Proposal module - an object representing an offer in the state of a proposal from the provider.

## Table of contents

### Constructors

- [constructor](Proposal#constructor)

### Properties

- [id](Proposal#id)
- [issuerId](Proposal#issuerid)
- [properties](Proposal#properties)
- [constraints](Proposal#constraints)
- [timestamp](Proposal#timestamp)

### Accessors

- [score](Proposal#score)

### Methods

- [isInitial](Proposal#isinitial)
- [isDraft](Proposal#isdraft)
- [isExpired](Proposal#isexpired)
- [isRejected](Proposal#isrejected)
- [reject](Proposal#reject)
- [respond](Proposal#respond)

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

[market/proposal.ts:29](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L29)

## Properties

### id

• `Readonly` **id**: `string`

#### Defined in

[market/proposal.ts:11](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L11)

___

### issuerId

• `Readonly` **issuerId**: `string`

#### Defined in

[market/proposal.ts:12](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L12)

___

### properties

• `Readonly` **properties**: `object`

#### Defined in

[market/proposal.ts:13](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L13)

___

### constraints

• `Readonly` **constraints**: `string`

#### Defined in

[market/proposal.ts:14](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L14)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Defined in

[market/proposal.ts:15](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L15)

## Accessors

### score

• `get` **score**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[market/proposal.ts:49](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L49)

• `set` **score**(`score`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `score` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[market/proposal.ts:45](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L45)

## Methods

### isInitial

▸ **isInitial**(): `boolean`

#### Returns

`boolean`

#### Defined in

[market/proposal.ts:53](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L53)

___

### isDraft

▸ **isDraft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[market/proposal.ts:57](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L57)

___

### isExpired

▸ **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[market/proposal.ts:61](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L61)

___

### isRejected

▸ **isRejected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[market/proposal.ts:65](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L65)

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

[market/proposal.ts:69](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L69)

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

[market/proposal.ts:77](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/proposal.ts#L77)

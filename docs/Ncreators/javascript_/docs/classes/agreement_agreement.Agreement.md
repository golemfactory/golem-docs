# Class: Agreement

[agreement/agreement](../modules/agreement_agreement.md).Agreement

Agreement module - an object representing the contract between the requestor and the provider.

## Table of contents

### Methods

- [create](agreement_agreement.Agreement.md#create)
- [refreshDetails](agreement_agreement.Agreement.md#refreshdetails)
- [getState](agreement_agreement.Agreement.md#getstate)
- [confirm](agreement_agreement.Agreement.md#confirm)
- [isFinalState](agreement_agreement.Agreement.md#isfinalstate)
- [terminate](agreement_agreement.Agreement.md#terminate)

### Properties

- [id](agreement_agreement.Agreement.md#id)
- [provider](agreement_agreement.Agreement.md#provider)

## Methods

### create

▸ `Static` **create**(`proposalId`, `agreementOptions?`): `Promise`<[`Agreement`](agreement_agreement.Agreement.md)\>

Create agreement for given proposal ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | proposal ID |
| `agreementOptions?` | [`AgreementOptions`](../interfaces/agreement_agreement.AgreementOptions.md) | [AgreementOptions](../interfaces/agreement_agreement.AgreementOptions.md) |

#### Returns

`Promise`<[`Agreement`](agreement_agreement.Agreement.md)\>

Agreement

#### Defined in

[yajsapi/agreement/agreement.ts:68](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L68)

___

### refreshDetails

▸ **refreshDetails**(): `Promise`<`void`\>

Refresh agreement details

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/agreement/agreement.ts:76](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L76)

___

### getState

▸ **getState**(): `Promise`<[`AgreementStateEnum`](../enums/agreement_agreement.AgreementStateEnum.md)\>

Return agreement state

#### Returns

`Promise`<[`AgreementStateEnum`](../enums/agreement_agreement.AgreementStateEnum.md)\>

state

#### Defined in

[yajsapi/agreement/agreement.ts:85](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L85)

___

### confirm

▸ **confirm**(): `Promise`<`void`\>

Confirm agreement and waits for provider approval

**`Description`**

Blocking function waits till agreement will be confirmed and approved by provider

**`Throws`**

Error if the agreement will be rejected by provider or failed to confirm

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/agreement/agreement.ts:95](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L95)

___

### isFinalState

▸ **isFinalState**(): `Promise`<`boolean`\>

Returns flag if the agreement is in the final state

**`Description`**

if the final state is true, agreement will not change state further anymore

#### Returns

`Promise`<`boolean`\>

boolean

#### Defined in

[yajsapi/agreement/agreement.ts:114](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L114)

___

### terminate

▸ **terminate**(`reason?`): `Promise`<`void`\>

Terminate agreement

**`Description`**

Blocking function waits till agreement will be terminated

**`Throws`**

Error if the agreement will be unable to terminate

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[yajsapi/agreement/agreement.ts:124](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L124)

## Properties

### id

• `Readonly` **id**: `any`

agreement ID

#### Defined in

[yajsapi/agreement/agreement.ts:58](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L58)

___

### provider

• `Readonly` **provider**: [`ProviderInfo`](../interfaces/agreement_agreement.ProviderInfo.md)

[ProviderInfo](../interfaces/agreement_agreement.ProviderInfo.md)

#### Defined in

[yajsapi/agreement/agreement.ts:58](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L58)

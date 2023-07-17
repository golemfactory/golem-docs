[JavaScript API reference](../README) / Agreement

# Class: Agreement

Agreement module - an object representing the contract between the requestor and the provider.

## Table of contents

### Properties

- [id](Agreement#id)
- [provider](Agreement#provider)

### Methods

- [create](Agreement#create)
- [refreshDetails](Agreement#refreshdetails)
- [getState](Agreement#getstate)
- [confirm](Agreement#confirm)
- [isFinalState](Agreement#isfinalstate)
- [terminate](Agreement#terminate)

## Properties

### id

• `Readonly` **id**: `any`

agreement ID

#### Defined in

[agreement/agreement.ts:58](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L58)

___

### provider

• `Readonly` **provider**: `ProviderInfo`

ProviderInfo

#### Defined in

[agreement/agreement.ts:58](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L58)

## Methods

### create

▸ `Static` **create**(`proposalId`, `agreementOptions?`): `Promise`<[`Agreement`](Agreement)\>

Create agreement for given proposal ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proposalId` | `string` | proposal ID |
| `agreementOptions?` | [`AgreementOptions`](../interfaces/AgreementOptions) | [AgreementOptions](../interfaces/AgreementOptions) |

#### Returns

`Promise`<[`Agreement`](Agreement)\>

Agreement

#### Defined in

[agreement/agreement.ts:68](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L68)

___

### refreshDetails

▸ **refreshDetails**(): `Promise`<`void`\>

Refresh agreement details

#### Returns

`Promise`<`void`\>

#### Defined in

[agreement/agreement.ts:76](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L76)

___

### getState

▸ **getState**(): `Promise`<[`AgreementStateEnum`](../enums/AgreementStateEnum)\>

Return agreement state

#### Returns

`Promise`<[`AgreementStateEnum`](../enums/AgreementStateEnum)\>

state

#### Defined in

[agreement/agreement.ts:85](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L85)

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

[agreement/agreement.ts:95](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L95)

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

[agreement/agreement.ts:114](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L114)

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

[agreement/agreement.ts:124](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L124)

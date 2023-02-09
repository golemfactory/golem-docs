# Interface: AccountsOptions

[payment/accounts](../modules/payment_accounts.md).AccountsOptions

## Hierarchy

- `Omit`<[`BasePaymentOptions`](payment_config.BasePaymentOptions.md), ``"yagnaOptions"``\>

  ↳ **`AccountsOptions`**

## Table of contents

### Properties

- [yagnaOptions](payment_accounts.AccountsOptions.md#yagnaoptions)
- [logger](payment_accounts.AccountsOptions.md#logger)
- [budget](payment_accounts.AccountsOptions.md#budget)
- [payment](payment_accounts.AccountsOptions.md#payment)
- [paymentTimeout](payment_accounts.AccountsOptions.md#paymenttimeout)
- [paymentRequestTimeout](payment_accounts.AccountsOptions.md#paymentrequesttimeout)
- [eventTarget](payment_accounts.AccountsOptions.md#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `basePath?` | `string` |

#### Defined in

[yajsapi/payment/accounts.ts:8](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/accounts.ts#L8)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

#### Inherited from

Omit.logger

#### Defined in

[yajsapi/payment/config.ts:31](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L31)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

Omit.budget

#### Defined in

[yajsapi/payment/config.ts:27](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L27)

___

### payment

• `Optional` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver?` | `string` |
| `network?` | `string` |

#### Inherited from

Omit.payment

#### Defined in

[yajsapi/payment/config.ts:28](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L28)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

Omit.paymentTimeout

#### Defined in

[yajsapi/payment/config.ts:29](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L29)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

Omit.paymentRequestTimeout

#### Defined in

[yajsapi/payment/config.ts:30](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L30)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

Omit.eventTarget

#### Defined in

[yajsapi/payment/config.ts:32](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L32)

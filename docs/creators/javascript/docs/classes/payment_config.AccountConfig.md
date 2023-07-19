# Class: AccountConfig

[payment/config](../modules/payment_config.md).AccountConfig

## Hierarchy

- `BaseConfig`

  ↳ **`AccountConfig`**

## Table of contents

### Constructors

- [constructor](payment_config.AccountConfig.md#constructor)

### Properties

- [yagnaOptions](payment_config.AccountConfig.md#yagnaoptions)
- [paymentTimeout](payment_config.AccountConfig.md#paymenttimeout)
- [api](payment_config.AccountConfig.md#api)
- [logger](payment_config.AccountConfig.md#logger)
- [eventTarget](payment_config.AccountConfig.md#eventtarget)
- [payment](payment_config.AccountConfig.md#payment)
- [paymentRequestTimeout](payment_config.AccountConfig.md#paymentrequesttimeout)
- [options](payment_config.AccountConfig.md#options)

## Constructors

### constructor

• **new AccountConfig**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BasePaymentOptions`](../interfaces/payment_config.BasePaymentOptions.md) |

#### Inherited from

BaseConfig.constructor

#### Defined in

[yajsapi/payment/config.ts:48](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L48)

## Properties

### yagnaOptions

• `Optional` `Readonly` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Inherited from

BaseConfig.yagnaOptions

#### Defined in

[yajsapi/payment/config.ts:40](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L40)

___

### paymentTimeout

• `Readonly` **paymentTimeout**: `number`

#### Inherited from

BaseConfig.paymentTimeout

#### Defined in

[yajsapi/payment/config.ts:41](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L41)

___

### api

• `Readonly` **api**: `RequestorApi`

#### Inherited from

BaseConfig.api

#### Defined in

[yajsapi/payment/config.ts:42](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L42)

___

### logger

• `Optional` `Readonly` **logger**: [`Logger`](../interfaces/utils_logger_logger.Logger.md)

#### Inherited from

BaseConfig.logger

#### Defined in

[yajsapi/payment/config.ts:43](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L43)

___

### eventTarget

• `Optional` `Readonly` **eventTarget**: `EventTarget`

#### Inherited from

BaseConfig.eventTarget

#### Defined in

[yajsapi/payment/config.ts:44](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L44)

___

### payment

• `Readonly` **payment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `driver` | `string` |
| `network` | `string` |

#### Inherited from

BaseConfig.payment

#### Defined in

[yajsapi/payment/config.ts:45](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L45)

___

### paymentRequestTimeout

• `Readonly` **paymentRequestTimeout**: `number`

#### Inherited from

BaseConfig.paymentRequestTimeout

#### Defined in

[yajsapi/payment/config.ts:46](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L46)

___

### options

• `Optional` `Readonly` **options**: [`BasePaymentOptions`](../interfaces/payment_config.BasePaymentOptions.md)

#### Inherited from

BaseConfig.options

#### Defined in

[yajsapi/payment/config.ts:48](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/payment/config.ts#L48)

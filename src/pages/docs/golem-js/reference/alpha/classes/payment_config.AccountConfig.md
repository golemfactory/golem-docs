# Class: AccountConfig

[payment/config](../modules/payment_config).AccountConfig

## Hierarchy

- `BaseConfig`

  ↳ **`AccountConfig`**

## Table of contents

### Constructors

- [constructor](payment_config.AccountConfig#constructor)

### Properties

- [yagnaOptions](payment_config.AccountConfig#yagnaoptions)
- [paymentTimeout](payment_config.AccountConfig#paymenttimeout)
- [api](payment_config.AccountConfig#api)
- [logger](payment_config.AccountConfig#logger)
- [eventTarget](payment_config.AccountConfig#eventtarget)
- [payment](payment_config.AccountConfig#payment)
- [httpAgent](payment_config.AccountConfig#httpagent)
- [options](payment_config.AccountConfig#options)

## Constructors

### constructor

• **new AccountConfig**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BasePaymentOptions`](../interfaces/payment_config.BasePaymentOptions) |

#### Inherited from

BaseConfig.constructor

#### Defined in

[src/payment/config.ts:46](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L46)

## Properties

### yagnaOptions

• `Optional` `Readonly` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Inherited from

BaseConfig.yagnaOptions

#### Defined in

[src/payment/config.ts:38](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L38)

___

### paymentTimeout

• `Readonly` **paymentTimeout**: `number`

#### Inherited from

BaseConfig.paymentTimeout

#### Defined in

[src/payment/config.ts:39](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L39)

___

### api

• `Readonly` **api**: `RequestorApi`

#### Inherited from

BaseConfig.api

#### Defined in

[src/payment/config.ts:40](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L40)

___

### logger

• `Optional` `Readonly` **logger**: [`Logger`](../interfaces/utils_logger_logger.Logger)

#### Inherited from

BaseConfig.logger

#### Defined in

[src/payment/config.ts:41](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L41)

___

### eventTarget

• `Optional` `Readonly` **eventTarget**: `EventTarget`

#### Inherited from

BaseConfig.eventTarget

#### Defined in

[src/payment/config.ts:42](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L42)

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

[src/payment/config.ts:43](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L43)

___

### httpAgent

• `Readonly` **httpAgent**: `Agent`

#### Inherited from

BaseConfig.httpAgent

#### Defined in

[src/payment/config.ts:44](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L44)

___

### options

• `Optional` `Readonly` **options**: [`BasePaymentOptions`](../interfaces/payment_config.BasePaymentOptions)

#### Inherited from

BaseConfig.options

#### Defined in

[src/payment/config.ts:46](https://github.com/golemfactory/golem-js/blob/614ea72/src/payment/config.ts#L46)

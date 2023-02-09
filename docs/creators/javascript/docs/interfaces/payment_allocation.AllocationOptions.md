# Interface: AllocationOptions

[payment/allocation](../modules/payment_allocation.md).AllocationOptions

## Hierarchy

- [`BasePaymentOptions`](payment_config.BasePaymentOptions.md)

  ↳ **`AllocationOptions`**

## Table of contents

### Properties

- [account](payment_allocation.AllocationOptions.md#account)
- [expires](payment_allocation.AllocationOptions.md#expires)
- [yagnaOptions](payment_allocation.AllocationOptions.md#yagnaoptions)
- [budget](payment_allocation.AllocationOptions.md#budget)
- [payment](payment_allocation.AllocationOptions.md#payment)
- [paymentTimeout](payment_allocation.AllocationOptions.md#paymenttimeout)
- [paymentRequestTimeout](payment_allocation.AllocationOptions.md#paymentrequesttimeout)
- [logger](payment_allocation.AllocationOptions.md#logger)
- [eventTarget](payment_allocation.AllocationOptions.md#eventtarget)

## Properties

### account

• **account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `platform` | `string` |

#### Defined in

[yajsapi/payment/allocation.ts:10](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L10)

___

### expires

• `Optional` **expires**: `number`

#### Defined in

[yajsapi/payment/allocation.ts:11](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/allocation.ts#L11)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[yagnaOptions](payment_config.BasePaymentOptions.md#yagnaoptions)

#### Defined in

[yajsapi/payment/config.ts:26](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L26)

___

### budget

• `Optional` **budget**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[budget](payment_config.BasePaymentOptions.md#budget)

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

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[payment](payment_config.BasePaymentOptions.md#payment)

#### Defined in

[yajsapi/payment/config.ts:28](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L28)

___

### paymentTimeout

• `Optional` **paymentTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentTimeout](payment_config.BasePaymentOptions.md#paymenttimeout)

#### Defined in

[yajsapi/payment/config.ts:29](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L29)

___

### paymentRequestTimeout

• `Optional` **paymentRequestTimeout**: `number`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[paymentRequestTimeout](payment_config.BasePaymentOptions.md#paymentrequesttimeout)

#### Defined in

[yajsapi/payment/config.ts:30](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L30)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[logger](payment_config.BasePaymentOptions.md#logger)

#### Defined in

[yajsapi/payment/config.ts:31](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L31)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[BasePaymentOptions](payment_config.BasePaymentOptions.md).[eventTarget](payment_config.BasePaymentOptions.md#eventtarget)

#### Defined in

[yajsapi/payment/config.ts:32](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/payment/config.ts#L32)

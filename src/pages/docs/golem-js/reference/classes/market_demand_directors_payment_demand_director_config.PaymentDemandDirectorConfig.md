---
title: "Class PaymentDemandDirectorConfig"
pageTitle: "Class PaymentDemandDirectorConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class PaymentDemandDirectorConfig within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: PaymentDemandDirectorConfig

[market/demand/directors/payment-demand-director-config](../modules/market_demand_directors_payment_demand_director_config).PaymentDemandDirectorConfig

Basic config utility class

Helps in building more specific config classes

## Hierarchy

- [`BaseConfig`](market_demand_directors_base_config.BaseConfig)

  ↳ **`PaymentDemandDirectorConfig`**

## Implements

- [`PaymentDemandDirectorConfigOptions`](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions)

## Table of contents

### Constructors

- [constructor](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig#constructor)

### Properties

- [debitNotesAcceptanceTimeoutSec](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig#debitnotesacceptancetimeoutsec)
- [midAgreementDebitNoteIntervalSec](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig#midagreementdebitnoteintervalsec)
- [midAgreementPaymentTimeoutSec](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig#midagreementpaymenttimeoutsec)

### Methods

- [isPositiveInt](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig#ispositiveint)

## Constructors

### constructor

• **new PaymentDemandDirectorConfig**(`options?`): [`PaymentDemandDirectorConfig`](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`PaymentDemandDirectorConfigOptions`](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions)\> |

#### Returns

[`PaymentDemandDirectorConfig`](market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfig)

#### Overrides

[BaseConfig](market_demand_directors_base_config.BaseConfig).[constructor](market_demand_directors_base_config.BaseConfig#constructor)

#### Defined in

[src/market/demand/directors/payment-demand-director-config.ts:15](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/payment-demand-director-config.ts#L15)

## Properties

### debitNotesAcceptanceTimeoutSec

• `Readonly` **debitNotesAcceptanceTimeoutSec**: `number`

#### Implementation of

[PaymentDemandDirectorConfigOptions](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions).[debitNotesAcceptanceTimeoutSec](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions#debitnotesacceptancetimeoutsec)

#### Defined in

[src/market/demand/directors/payment-demand-director-config.ts:11](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/payment-demand-director-config.ts#L11)

___

### midAgreementDebitNoteIntervalSec

• `Readonly` **midAgreementDebitNoteIntervalSec**: `number`

#### Implementation of

[PaymentDemandDirectorConfigOptions](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions).[midAgreementDebitNoteIntervalSec](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions#midagreementdebitnoteintervalsec)

#### Defined in

[src/market/demand/directors/payment-demand-director-config.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/payment-demand-director-config.ts#L12)

___

### midAgreementPaymentTimeoutSec

• `Readonly` **midAgreementPaymentTimeoutSec**: `number`

#### Implementation of

[PaymentDemandDirectorConfigOptions](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions).[midAgreementPaymentTimeoutSec](../interfaces/market_demand_directors_payment_demand_director_config.PaymentDemandDirectorConfigOptions#midagreementpaymenttimeoutsec)

#### Defined in

[src/market/demand/directors/payment-demand-director-config.ts:13](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/payment-demand-director-config.ts#L13)

## Methods

### isPositiveInt

▸ **isPositiveInt**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Inherited from

[BaseConfig](market_demand_directors_base_config.BaseConfig).[isPositiveInt](market_demand_directors_base_config.BaseConfig#ispositiveint)

#### Defined in

[src/market/demand/directors/base-config.ts:7](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/directors/base-config.ts#L7)

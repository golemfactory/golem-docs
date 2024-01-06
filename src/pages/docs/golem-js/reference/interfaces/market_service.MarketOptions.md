---
title: "Interface MarketOptions"
pageTitle: "Interface MarketOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface MarketOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: MarketOptions

[market/service](../modules/market_service).MarketOptions

## Hierarchy

- [`DemandOptions`](market_demand.DemandOptions)

  ↳ **`MarketOptions`**

## Table of contents

### Properties

- [proposalFilter](market_service.MarketOptions#proposalfilter)
- [subnetTag](market_service.MarketOptions#subnettag)
- [yagnaOptions](market_service.MarketOptions#yagnaoptions)
- [expirationSec](market_service.MarketOptions#expirationsec)
- [logger](market_service.MarketOptions#logger)
- [maxOfferEvents](market_service.MarketOptions#maxofferevents)
- [offerFetchingIntervalSec](market_service.MarketOptions#offerfetchingintervalsec)
- [proposalTimeout](market_service.MarketOptions#proposaltimeout)
- [eventTarget](market_service.MarketOptions#eventtarget)
- [debitNotesAcceptanceTimeoutSec](market_service.MarketOptions#debitnotesacceptancetimeoutsec)
- [midAgreementPaymentTimeoutSec](market_service.MarketOptions#midagreementpaymenttimeoutsec)

## Properties

### proposalFilter

• `Optional` **proposalFilter**: [`ProposalFilter`](../modules/market_service#proposalfilter)

A custom filter that checks every proposal coming from the market

#### Defined in

[src/market/service.ts:13](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/service.ts#L13)

___

### subnetTag

• `Optional` **subnetTag**: `string`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[subnetTag](market_demand.DemandOptions#subnettag)

#### Defined in

[src/market/demand.ts:19](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L19)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[yagnaOptions](market_demand.DemandOptions#yagnaoptions)

#### Defined in

[src/market/demand.ts:20](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L20)

___

### expirationSec

• `Optional` **expirationSec**: `number`

Determines the expiration time of the offer and the resulting activity in milliseconds.

The value of this field is used to define how long the demand is valid for yagna to match against.
In addition, it will determine how long the resulting activity will be active.

For example: if `expirationSec` is set to 10 minutes, the demand was created and starting an activity
required 2 minutes, this means that the activity will be running for 8 more minutes, and then will get terminated.

**IMPORTANT**

It is possible that a provider will reject engaging with that demand if it's configured  without using a deadline.

**GUIDE**

If your activity is about to operate for 5-30 min, [expirationSec](market_demand.DemandOptions#expirationsec) is sufficient.

If your activity is about to operate for 30min-10h, [debitNotesAcceptanceTimeoutSec](market_demand.DemandOptions#debitnotesacceptancetimeoutsec) should be set as well.

If your activity is about to operate longer than 10h, you need set both [debitNotesAcceptanceTimeoutSec](market_demand.DemandOptions#debitnotesacceptancetimeoutsec) and [midAgreementPaymentTimeoutSec](market_demand.DemandOptions#midagreementpaymenttimeoutsec).

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[expirationSec](market_demand.DemandOptions#expirationsec)

#### Defined in

[src/market/demand.ts:43](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L43)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[logger](market_demand.DemandOptions#logger)

#### Defined in

[src/market/demand.ts:45](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L45)

___

### maxOfferEvents

• `Optional` **maxOfferEvents**: `number`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[maxOfferEvents](market_demand.DemandOptions#maxofferevents)

#### Defined in

[src/market/demand.ts:46](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L46)

___

### offerFetchingIntervalSec

• `Optional` **offerFetchingIntervalSec**: `number`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[offerFetchingIntervalSec](market_demand.DemandOptions#offerfetchingintervalsec)

#### Defined in

[src/market/demand.ts:48](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L48)

___

### proposalTimeout

• `Optional` **proposalTimeout**: `number`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[proposalTimeout](market_demand.DemandOptions#proposaltimeout)

#### Defined in

[src/market/demand.ts:50](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L50)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[eventTarget](market_demand.DemandOptions#eventtarget)

#### Defined in

[src/market/demand.ts:52](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L52)

___

### debitNotesAcceptanceTimeoutSec

• `Optional` **debitNotesAcceptanceTimeoutSec**: `number`

Maximum time for debit note acceptance (in seconds)

If it would not be defined, the activities created for your demand would
probably live only 30 minutes, as that's the default value that the providers use to control engagements
that are not using mid-agreement payments.

_Accepting debit notes during a long activity is considered a good practice in Golem Network._
The SDK will accept debit notes each 2 minutes.

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[debitNotesAcceptanceTimeoutSec](market_demand.DemandOptions#debitnotesacceptancetimeoutsec)

#### Defined in

[src/market/demand.ts:64](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L64)

___

### midAgreementPaymentTimeoutSec

• `Optional` **midAgreementPaymentTimeoutSec**: `number`

Maximum time to receive payment for any debit note. At the same time, the minimum interval between mid-agreement payments.

Setting this is relevant in case activities which are running for a long time (like 10 hours and more). Providers control
the threshold activity duration for which they would like to enforce mid-agreement payments. This value depends on the
provider configuration. Checking proposal rejections from providers in yagna's logs can give you a hint about the
market expectations.

_Paying in regular intervals for the computation resources is considered a good practice in Golem Network._
The SDK will issue payments each 12h by default, and you can control this with this setting.

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[midAgreementPaymentTimeoutSec](market_demand.DemandOptions#midagreementpaymenttimeoutsec)

#### Defined in

[src/market/demand.ts:77](https://github.com/golemfactory/golem-js/blob/9c218b4/src/market/demand.ts#L77)

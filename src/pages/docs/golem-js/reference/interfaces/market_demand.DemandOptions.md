---
title: "Interface DemandOptions"
pageTitle: "Interface DemandOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface DemandOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: DemandOptions

[market/demand](../modules/market_demand).DemandOptions

## Hierarchy

- **`DemandOptions`**

  ↳ [`MarketOptions`](market_service.MarketOptions)

## Table of contents

### Properties

- [subnetTag](market_demand.DemandOptions#subnettag)
- [yagnaOptions](market_demand.DemandOptions#yagnaoptions)
- [expirationSec](market_demand.DemandOptions#expirationsec)
- [logger](market_demand.DemandOptions#logger)
- [maxOfferEvents](market_demand.DemandOptions#maxofferevents)
- [offerFetchingIntervalSec](market_demand.DemandOptions#offerfetchingintervalsec)
- [proposalTimeout](market_demand.DemandOptions#proposaltimeout)
- [eventTarget](market_demand.DemandOptions#eventtarget)
- [debitNotesAcceptanceTimeoutSec](market_demand.DemandOptions#debitnotesacceptancetimeoutsec)
- [midAgreementDebitNoteIntervalSec](market_demand.DemandOptions#midagreementdebitnoteintervalsec)
- [midAgreementPaymentTimeoutSec](market_demand.DemandOptions#midagreementpaymenttimeoutsec)

## Properties

### subnetTag

• `Optional` **subnetTag**: `string`

#### Defined in

[src/market/demand.ts:20](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L20)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Defined in

[src/market/demand.ts:21](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L21)

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

#### Defined in

[src/market/demand.ts:44](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L44)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Defined in

[src/market/demand.ts:46](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L46)

___

### maxOfferEvents

• `Optional` **maxOfferEvents**: `number`

#### Defined in

[src/market/demand.ts:47](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L47)

___

### offerFetchingIntervalSec

• `Optional` **offerFetchingIntervalSec**: `number`

#### Defined in

[src/market/demand.ts:49](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L49)

___

### proposalTimeout

• `Optional` **proposalTimeout**: `number`

#### Defined in

[src/market/demand.ts:51](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L51)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Defined in

[src/market/demand.ts:53](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L53)

___

### debitNotesAcceptanceTimeoutSec

• `Optional` **debitNotesAcceptanceTimeoutSec**: `number`

Maximum time for allowed provider-sent debit note acceptance (in seconds)

Accepting debit notes from the provider is used as a health-check of the agreement between these parties.
Failing to accept several debit notes in a row will be considered as a valida reason to terminate the agreement earlier
than [expirationSec](market_demand.DemandOptions#expirationsec) defines.

_Accepting debit notes during a long activity is considered a good practice in Golem Network._
The SDK will accept debit notes each 2 minutes by default.

#### Defined in

[src/market/demand.ts:65](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L65)

___

### midAgreementDebitNoteIntervalSec

• `Optional` **midAgreementDebitNoteIntervalSec**: `number`

The interval between provider sent debit notes to negotiate.

If it would not be defined, the activities created for your demand would
probably live only 30 minutes, as that's the default value that the providers use to control engagements
that are not using mid-agreement payments.

As a requestor, you don't have to specify it, as the provider will propose a value that the SDK will simply
accept without negotiations.

_Accepting payable debit notes during a long activity is considered a good practice in Golem Network._
The SDK will accept debit notes each 2 minutes by default.

#### Defined in

[src/market/demand.ts:80](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L80)

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

#### Defined in

[src/market/demand.ts:93](https://github.com/golemfactory/golem-js/blob/9137662/src/market/demand.ts#L93)

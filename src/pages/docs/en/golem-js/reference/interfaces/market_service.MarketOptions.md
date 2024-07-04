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
- [minProposalsBatchSize](market_service.MarketOptions#minproposalsbatchsize)
- [proposalsBatchReleaseTimeoutMs](market_service.MarketOptions#proposalsbatchreleasetimeoutms)
- [subnetTag](market_service.MarketOptions#subnettag)
- [yagnaOptions](market_service.MarketOptions#yagnaoptions)
- [expirationSec](market_service.MarketOptions#expirationsec)
- [logger](market_service.MarketOptions#logger)
- [maxOfferEvents](market_service.MarketOptions#maxofferevents)
- [offerFetchingIntervalSec](market_service.MarketOptions#offerfetchingintervalsec)
- [proposalTimeout](market_service.MarketOptions#proposaltimeout)
- [eventTarget](market_service.MarketOptions#eventtarget)
- [debitNotesAcceptanceTimeoutSec](market_service.MarketOptions#debitnotesacceptancetimeoutsec)
- [midAgreementDebitNoteIntervalSec](market_service.MarketOptions#midagreementdebitnoteintervalsec)
- [midAgreementPaymentTimeoutSec](market_service.MarketOptions#midagreementpaymenttimeoutsec)

## Properties

### proposalFilter

• `Optional` **proposalFilter**: [`ProposalFilter`](../modules/market_service#proposalfilter)

A custom filter checking the proposal from the market for each provider and its hardware configuration.
Duplicate proposals from one provider are reduced to the cheapest one.

#### Defined in

[src/market/service.ts:18](https://github.com/golemfactory/golem-js/blob/4182943/src/market/service.ts#L18)

___

### minProposalsBatchSize

• `Optional` **minProposalsBatchSize**: `number`

The minimum number of proposals after which the batch of proposal will be processed in order to avoid duplicates

#### Defined in

[src/market/service.ts:20](https://github.com/golemfactory/golem-js/blob/4182943/src/market/service.ts#L20)

___

### proposalsBatchReleaseTimeoutMs

• `Optional` **proposalsBatchReleaseTimeoutMs**: `number`

The maximum waiting time for proposals to be batched in order to avoid duplicates

#### Defined in

[src/market/service.ts:22](https://github.com/golemfactory/golem-js/blob/4182943/src/market/service.ts#L22)

___

### subnetTag

• `Optional` **subnetTag**: `string`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[subnetTag](market_demand.DemandOptions#subnettag)

#### Defined in

[src/market/demand.ts:21](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L21)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[yagnaOptions](market_demand.DemandOptions#yagnaoptions)

#### Defined in

[src/market/demand.ts:22](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L22)

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

[src/market/demand.ts:45](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L45)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[logger](market_demand.DemandOptions#logger)

#### Defined in

[src/market/demand.ts:47](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L47)

___

### maxOfferEvents

• `Optional` **maxOfferEvents**: `number`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[maxOfferEvents](market_demand.DemandOptions#maxofferevents)

#### Defined in

[src/market/demand.ts:48](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L48)

___

### offerFetchingIntervalSec

• `Optional` **offerFetchingIntervalSec**: `number`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[offerFetchingIntervalSec](market_demand.DemandOptions#offerfetchingintervalsec)

#### Defined in

[src/market/demand.ts:50](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L50)

___

### proposalTimeout

• `Optional` **proposalTimeout**: `number`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[proposalTimeout](market_demand.DemandOptions#proposaltimeout)

#### Defined in

[src/market/demand.ts:52](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L52)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[eventTarget](market_demand.DemandOptions#eventtarget)

#### Defined in

[src/market/demand.ts:54](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L54)

___

### debitNotesAcceptanceTimeoutSec

• `Optional` **debitNotesAcceptanceTimeoutSec**: `number`

Maximum time for allowed provider-sent debit note acceptance (in seconds)

Accepting debit notes from the provider is used as a health-check of the agreement between these parties.
Failing to accept several debit notes in a row will be considered as a valida reason to terminate the agreement earlier
than [expirationSec](market_demand.DemandOptions#expirationsec) defines.

_Accepting debit notes during a long activity is considered a good practice in Golem Network._
The SDK will accept debit notes each 2 minutes by default.

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[debitNotesAcceptanceTimeoutSec](market_demand.DemandOptions#debitnotesacceptancetimeoutsec)

#### Defined in

[src/market/demand.ts:66](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L66)

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

#### Inherited from

[DemandOptions](market_demand.DemandOptions).[midAgreementDebitNoteIntervalSec](market_demand.DemandOptions#midagreementdebitnoteintervalsec)

#### Defined in

[src/market/demand.ts:81](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L81)

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

[src/market/demand.ts:94](https://github.com/golemfactory/golem-js/blob/4182943/src/market/demand.ts#L94)

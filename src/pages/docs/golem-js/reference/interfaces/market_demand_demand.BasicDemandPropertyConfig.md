---
title: "Interface BasicDemandPropertyConfig"
pageTitle: "Interface BasicDemandPropertyConfig - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface BasicDemandPropertyConfig within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: BasicDemandPropertyConfig

[market/demand/demand](../modules/market_demand_demand).BasicDemandPropertyConfig

This type represents a set of *parameters* that the SDK can set to particular *properties* and *constraints*
of the demand that's used to subscribe for offers via Yagna

## Table of contents

### Properties

- [subnetTag](market_demand_demand.BasicDemandPropertyConfig#subnettag)
- [expirationSec](market_demand_demand.BasicDemandPropertyConfig#expirationsec)
- [debitNotesAcceptanceTimeoutSec](market_demand_demand.BasicDemandPropertyConfig#debitnotesacceptancetimeoutsec)
- [midAgreementDebitNoteIntervalSec](market_demand_demand.BasicDemandPropertyConfig#midagreementdebitnoteintervalsec)
- [midAgreementPaymentTimeoutSec](market_demand_demand.BasicDemandPropertyConfig#midagreementpaymenttimeoutsec)

## Properties

### subnetTag

• `Optional` **subnetTag**: `string`

Specify the name of a subnet of Golem Network that should be considered for offers

Providers and Requestors can agree to a subnet tag, that they can put on their Offer and Demands
so that they can create "segments" within the network for ease of finding themselves.

Please note that this subnetTag is public and visible to everyone.

#### Defined in

[src/market/demand/demand.ts:19](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L19)

___

### expirationSec

• **expirationSec**: `number`

Determines the expiration time of the offer and the resulting activity in milliseconds.

The value of this field is used to define how long the demand is valid for yagna to match against.
In addition, it will determine how long the resulting activity will be active.

For example: if `expirationSec` is set to 10 minutes, the demand was created and starting an activity
required 2 minutes, this means that the activity will be running for 8 more minutes, and then will get terminated.

**IMPORTANT**

It is possible that a provider will reject engaging with that demand if it's configured  without using a deadline.

**GUIDE**

If your activity is about to operate for 5-30 min, [expirationSec](market_demand_demand.BasicDemandPropertyConfig#expirationsec) is sufficient.

If your activity is about to operate for 30min-10h, [debitNotesAcceptanceTimeoutSec](market_demand_demand.BasicDemandPropertyConfig#debitnotesacceptancetimeoutsec) should be set as well.

If your activity is about to operate longer than 10h, you need set both [debitNotesAcceptanceTimeoutSec](market_demand_demand.BasicDemandPropertyConfig#debitnotesacceptancetimeoutsec) and [midAgreementPaymentTimeoutSec](market_demand_demand.BasicDemandPropertyConfig#midagreementpaymenttimeoutsec).

#### Defined in

[src/market/demand/demand.ts:42](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L42)

___

### debitNotesAcceptanceTimeoutSec

• **debitNotesAcceptanceTimeoutSec**: `number`

Maximum time for allowed provider-sent debit note acceptance (in seconds)

Accepting debit notes from the provider is used as a health-check of the agreement between these parties.
Failing to accept several debit notes in a row will be considered as a valida reason to terminate the agreement earlier
than [expirationSec](market_demand_demand.BasicDemandPropertyConfig#expirationsec) defines.

_Accepting debit notes during a long activity is considered a good practice in Golem Network._
The SDK will accept debit notes each 2 minutes by default.

#### Defined in

[src/market/demand/demand.ts:54](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L54)

___

### midAgreementDebitNoteIntervalSec

• **midAgreementDebitNoteIntervalSec**: `number`

The interval between provider sent debit notes to negotiate.

If it would not be defined, the activities created for your demand would
probably live only 30 minutes, as that's the default value that the providers use to control engagements
that are not using mid-agreement payments.

As a requestor, you don't have to specify it, as the provider will propose a value that the SDK will simply
accept without negotiations.

_Accepting payable debit notes during a long activity is considered a good practice in Golem Network._
The SDK will accept debit notes each 2 minutes by default.

#### Defined in

[src/market/demand/demand.ts:69](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L69)

___

### midAgreementPaymentTimeoutSec

• **midAgreementPaymentTimeoutSec**: `number`

Maximum time to receive payment for any debit note. At the same time, the minimum interval between mid-agreement payments.

Setting this is relevant in case activities which are running for a long time (like 10 hours and more). Providers control
the threshold activity duration for which they would like to enforce mid-agreement payments. This value depends on the
provider configuration. Checking proposal rejections from providers in yagna's logs can give you a hint about the
market expectations.

_Paying in regular intervals for the computation resources is considered a good practice in Golem Network._
The SDK will issue payments each 12h by default, and you can control this with this setting.

#### Defined in

[src/market/demand/demand.ts:82](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/market/demand/demand.ts#L82)

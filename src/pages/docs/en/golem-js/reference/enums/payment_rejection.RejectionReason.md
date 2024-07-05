---
title: "Enum RejectionReason"
pageTitle: "Enum RejectionReason - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Enum RejectionReason within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Enumeration: RejectionReason

[payment/rejection](../modules/payment_rejection).RejectionReason

## Table of contents

### Enumeration Members

- [UnsolicitedService](payment_rejection.RejectionReason#unsolicitedservice)
- [BadService](payment_rejection.RejectionReason#badservice)
- [IncorrectAmount](payment_rejection.RejectionReason#incorrectamount)
- [RejectedByRequestorFilter](payment_rejection.RejectionReason#rejectedbyrequestorfilter)
- [AgreementFinalized](payment_rejection.RejectionReason#agreementfinalized)

## Enumeration Members

### UnsolicitedService

• **UnsolicitedService** = ``"UNSOLICITED_SERVICE"``

#### Defined in

[src/payment/rejection.ts:2](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/rejection.ts#L2)

___

### BadService

• **BadService** = ``"BAD_SERVICE"``

#### Defined in

[src/payment/rejection.ts:3](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/rejection.ts#L3)

___

### IncorrectAmount

• **IncorrectAmount** = ``"INCORRECT_AMOUNT"``

#### Defined in

[src/payment/rejection.ts:4](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/rejection.ts#L4)

___

### RejectedByRequestorFilter

• **RejectedByRequestorFilter** = ``"REJECTED_BY_REQUESTOR_FILTER"``

#### Defined in

[src/payment/rejection.ts:5](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/rejection.ts#L5)

___

### AgreementFinalized

• **AgreementFinalized** = ``"AGREEMENT_FINALIZED"``

Use it when you're processing an event after the agreement reached it's "final state"

By final state we mean: we got an invoice for that agreement

#### Defined in

[src/payment/rejection.ts:12](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/payment/rejection.ts#L12)

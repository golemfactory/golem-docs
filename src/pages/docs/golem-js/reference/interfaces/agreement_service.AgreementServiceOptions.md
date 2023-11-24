---
title: "Interface AgreementServiceOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface AgreementServiceOptions within the golem-js SDK for the Golem Network."
type: "reference"
---
# Interface: AgreementServiceOptions

[agreement/service](../modules/agreement_service).AgreementServiceOptions

## Hierarchy

- `AgreementOptions`

  ↳ **`AgreementServiceOptions`**

## Table of contents

### Properties

- [agreementSelector](agreement_service.AgreementServiceOptions#agreementselector)
- [yagnaOptions](agreement_service.AgreementServiceOptions#yagnaoptions)
- [agreementRequestTimeout](agreement_service.AgreementServiceOptions#agreementrequesttimeout)
- [agreementWaitingForApprovalTimeout](agreement_service.AgreementServiceOptions#agreementwaitingforapprovaltimeout)
- [logger](agreement_service.AgreementServiceOptions#logger)
- [eventTarget](agreement_service.AgreementServiceOptions#eventtarget)

## Properties

### agreementSelector

• `Optional` **agreementSelector**: [`AgreementSelector`](../modules/agreement_service#agreementselector)

The selector used when choosing a provider from a pool of existing offers (from the market or already used before)

#### Defined in

[src/agreement/service.ts:23](https://github.com/golemfactory/golem-js/blob/5c570c3/src/agreement/service.ts#L23)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

yagnaOptions

#### Inherited from

AgreementOptions.yagnaOptions

#### Defined in

[src/agreement/agreement.ts:35](https://github.com/golemfactory/golem-js/blob/5c570c3/src/agreement/agreement.ts#L35)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Inherited from

AgreementOptions.agreementRequestTimeout

#### Defined in

[src/agreement/agreement.ts:37](https://github.com/golemfactory/golem-js/blob/5c570c3/src/agreement/agreement.ts#L37)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Inherited from

AgreementOptions.agreementWaitingForApprovalTimeout

#### Defined in

[src/agreement/agreement.ts:39](https://github.com/golemfactory/golem-js/blob/5c570c3/src/agreement/agreement.ts#L39)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Inherited from

AgreementOptions.logger

#### Defined in

[src/agreement/agreement.ts:41](https://github.com/golemfactory/golem-js/blob/5c570c3/src/agreement/agreement.ts#L41)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

AgreementOptions.eventTarget

#### Defined in

[src/agreement/agreement.ts:43](https://github.com/golemfactory/golem-js/blob/5c570c3/src/agreement/agreement.ts#L43)

# Interface: AgreementServiceOptions

[agreement/service](../modules/agreement_service.md).AgreementServiceOptions

## Hierarchy

- `AgreementOptions`

  ↳ **`AgreementServiceOptions`**

## Table of contents

### Properties

- [agreementSelector](agreement_service.AgreementServiceOptions.md#agreementselector)
- [yagnaOptions](agreement_service.AgreementServiceOptions.md#yagnaoptions)
- [agreementRequestTimeout](agreement_service.AgreementServiceOptions.md#agreementrequesttimeout)
- [agreementWaitingForApprovalTimeout](agreement_service.AgreementServiceOptions.md#agreementwaitingforapprovaltimeout)
- [logger](agreement_service.AgreementServiceOptions.md#logger)
- [eventTarget](agreement_service.AgreementServiceOptions.md#eventtarget)

## Properties

### agreementSelector

• `Optional` **agreementSelector**: [`AgreementSelector`](../modules/agreement_service.md#agreementselector)

The selector used when choosing a provider from a pool of existing offers (from the market or already used before)

#### Defined in

[src/agreement/service.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/service.ts#L23)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

yagnaOptions

#### Inherited from

AgreementOptions.yagnaOptions

#### Defined in

[src/agreement/agreement.ts:35](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L35)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Inherited from

AgreementOptions.agreementRequestTimeout

#### Defined in

[src/agreement/agreement.ts:37](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L37)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Inherited from

AgreementOptions.agreementWaitingForApprovalTimeout

#### Defined in

[src/agreement/agreement.ts:39](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L39)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

Logger module

#### Inherited from

AgreementOptions.logger

#### Defined in

[src/agreement/agreement.ts:41](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L41)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

AgreementOptions.eventTarget

#### Defined in

[src/agreement/agreement.ts:43](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L43)

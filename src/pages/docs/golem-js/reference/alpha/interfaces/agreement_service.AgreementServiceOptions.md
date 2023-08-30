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

[src/agreement/service.ts:22](https://github.com/golemfactory/golem-js/blob/614ea72/src/agreement/service.ts#L22)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

yagnaOptions

#### Inherited from

AgreementOptions.yagnaOptions

#### Defined in

[src/agreement/agreement.ts:34](https://github.com/golemfactory/golem-js/blob/614ea72/src/agreement/agreement.ts#L34)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Inherited from

AgreementOptions.agreementRequestTimeout

#### Defined in

[src/agreement/agreement.ts:36](https://github.com/golemfactory/golem-js/blob/614ea72/src/agreement/agreement.ts#L36)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Inherited from

AgreementOptions.agreementWaitingForApprovalTimeout

#### Defined in

[src/agreement/agreement.ts:38](https://github.com/golemfactory/golem-js/blob/614ea72/src/agreement/agreement.ts#L38)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Inherited from

AgreementOptions.logger

#### Defined in

[src/agreement/agreement.ts:40](https://github.com/golemfactory/golem-js/blob/614ea72/src/agreement/agreement.ts#L40)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

AgreementOptions.eventTarget

#### Defined in

[src/agreement/agreement.ts:42](https://github.com/golemfactory/golem-js/blob/614ea72/src/agreement/agreement.ts#L42)

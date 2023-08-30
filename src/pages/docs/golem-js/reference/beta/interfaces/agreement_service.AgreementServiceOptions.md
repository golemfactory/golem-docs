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

[src/agreement/service.ts:23](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/service.ts#L23)

---

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor#yagnaoptions)

yagnaOptions

#### Inherited from

AgreementOptions.yagnaOptions

#### Defined in

[src/agreement/agreement.ts:35](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L35)

---

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Inherited from

AgreementOptions.agreementRequestTimeout

#### Defined in

[src/agreement/agreement.ts:37](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L37)

---

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Inherited from

AgreementOptions.agreementWaitingForApprovalTimeout

#### Defined in

[src/agreement/agreement.ts:39](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L39)

---

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger)

Logger module

#### Inherited from

AgreementOptions.logger

#### Defined in

[src/agreement/agreement.ts:41](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L41)

---

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

AgreementOptions.eventTarget

#### Defined in

[src/agreement/agreement.ts:43](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/agreement/agreement.ts#L43)

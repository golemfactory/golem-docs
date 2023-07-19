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

[yajsapi/agreement/service.ts:22](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/service.ts#L22)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

yagnaOptions

#### Inherited from

AgreementOptions.yagnaOptions

#### Defined in

[yajsapi/agreement/agreement.ts:34](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/agreement.ts#L34)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Inherited from

AgreementOptions.agreementRequestTimeout

#### Defined in

[yajsapi/agreement/agreement.ts:36](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/agreement.ts#L36)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Inherited from

AgreementOptions.agreementWaitingForApprovalTimeout

#### Defined in

[yajsapi/agreement/agreement.ts:38](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/agreement.ts#L38)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger_logger.Logger.md)

Logger module

#### Inherited from

AgreementOptions.logger

#### Defined in

[yajsapi/agreement/agreement.ts:40](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/agreement.ts#L40)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

AgreementOptions.eventTarget

#### Defined in

[yajsapi/agreement/agreement.ts:42](https://github.com/golemfactory/yajsapi/blob/d7422f1/yajsapi/agreement/agreement.ts#L42)

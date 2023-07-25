# Interface: AgreementOptions

[agreement/agreement](../modules/agreement_agreement.md).AgreementOptions

## Hierarchy

- **`AgreementOptions`**

  ↳ [`AgreementServiceOptions`](agreement_service.AgreementServiceOptions.md)

## Table of contents

### Properties

- [yagnaOptions](agreement_agreement.AgreementOptions.md#yagnaoptions)
- [agreementRequestTimeout](agreement_agreement.AgreementOptions.md#agreementrequesttimeout)
- [agreementWaitingForApprovalTimeout](agreement_agreement.AgreementOptions.md#agreementwaitingforapprovaltimeout)
- [logger](agreement_agreement.AgreementOptions.md#logger)
- [eventTarget](agreement_agreement.AgreementOptions.md#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

yagnaOptions

#### Defined in

[yajsapi/agreement/agreement.ts:34](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L34)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Defined in

[yajsapi/agreement/agreement.ts:36](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L36)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Defined in

[yajsapi/agreement/agreement.ts:38](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L38)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

Logger module

#### Defined in

[yajsapi/agreement/agreement.ts:40](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L40)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[yajsapi/agreement/agreement.ts:42](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L42)

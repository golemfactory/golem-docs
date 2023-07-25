# Interface: AgreementServiceOptions

[agreement/service](../modules/agreement_service.md).AgreementServiceOptions

## Hierarchy

- [`AgreementOptions`](agreement_agreement.AgreementOptions.md)

  ↳ **`AgreementServiceOptions`**

## Table of contents

### Properties

- [agreementEventPoolingInterval](agreement_service.AgreementServiceOptions.md#agreementeventpoolinginterval)
- [agreementEventPoolingMaxEventsPerRequest](agreement_service.AgreementServiceOptions.md#agreementeventpoolingmaxeventsperrequest)
- [agreementWaitingForProposalTimout](agreement_service.AgreementServiceOptions.md#agreementwaitingforproposaltimout)
- [yagnaOptions](agreement_service.AgreementServiceOptions.md#yagnaoptions)
- [agreementRequestTimeout](agreement_service.AgreementServiceOptions.md#agreementrequesttimeout)
- [agreementWaitingForApprovalTimeout](agreement_service.AgreementServiceOptions.md#agreementwaitingforapprovaltimeout)
- [logger](agreement_service.AgreementServiceOptions.md#logger)
- [eventTarget](agreement_service.AgreementServiceOptions.md#eventtarget)

## Properties

### agreementEventPoolingInterval

• `Optional` **agreementEventPoolingInterval**: `number`

#### Defined in

[yajsapi/agreement/service.ts:9](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/service.ts#L9)

___

### agreementEventPoolingMaxEventsPerRequest

• `Optional` **agreementEventPoolingMaxEventsPerRequest**: `number`

#### Defined in

[yajsapi/agreement/service.ts:10](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/service.ts#L10)

___

### agreementWaitingForProposalTimout

• `Optional` **agreementWaitingForProposalTimout**: `number`

#### Defined in

[yajsapi/agreement/service.ts:11](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/service.ts#L11)

___

### yagnaOptions

• `Optional` **yagnaOptions**: [`YagnaOptions`](../modules/executor_executor.md#yagnaoptions)

yagnaOptions

#### Inherited from

[AgreementOptions](agreement_agreement.AgreementOptions.md).[yagnaOptions](agreement_agreement.AgreementOptions.md#yagnaoptions)

#### Defined in

[yajsapi/agreement/agreement.ts:34](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L34)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Inherited from

[AgreementOptions](agreement_agreement.AgreementOptions.md).[agreementRequestTimeout](agreement_agreement.AgreementOptions.md#agreementrequesttimeout)

#### Defined in

[yajsapi/agreement/agreement.ts:36](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L36)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Inherited from

[AgreementOptions](agreement_agreement.AgreementOptions.md).[agreementWaitingForApprovalTimeout](agreement_agreement.AgreementOptions.md#agreementwaitingforapprovaltimeout)

#### Defined in

[yajsapi/agreement/agreement.ts:38](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L38)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

Logger module

#### Inherited from

[AgreementOptions](agreement_agreement.AgreementOptions.md).[logger](agreement_agreement.AgreementOptions.md#logger)

#### Defined in

[yajsapi/agreement/agreement.ts:40](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L40)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Inherited from

[AgreementOptions](agreement_agreement.AgreementOptions.md).[eventTarget](agreement_agreement.AgreementOptions.md#eventtarget)

#### Defined in

[yajsapi/agreement/agreement.ts:42](https://github.com/golemfactory/yajsapi/blob/5793bb7/yajsapi/agreement/agreement.ts#L42)

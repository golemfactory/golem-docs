[JavaScript API reference](../README) / AgreementOptions

# Interface: AgreementOptions

## Table of contents

### Properties

- [yagnaOptions](AgreementOptions#yagnaoptions)
- [agreementRequestTimeout](AgreementOptions#agreementrequesttimeout)
- [agreementWaitingForApprovalTimeout](AgreementOptions#agreementwaitingforapprovaltimeout)
- [logger](AgreementOptions#logger)
- [eventTarget](AgreementOptions#eventtarget)

## Properties

### yagnaOptions

• `Optional` **yagnaOptions**: `YagnaOptions`

yagnaOptions

#### Defined in

[agreement/agreement.ts:34](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L34)

___

### agreementRequestTimeout

• `Optional` **agreementRequestTimeout**: `number`

timeout for create agreement and refresh details in ms

#### Defined in

[agreement/agreement.ts:36](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L36)

___

### agreementWaitingForApprovalTimeout

• `Optional` **agreementWaitingForApprovalTimeout**: `number`

timeout for wait for provider approval after requestor confirmation in ms

#### Defined in

[agreement/agreement.ts:38](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L38)

___

### logger

• `Optional` **logger**: [`Logger`](Logger)

Logger module

#### Defined in

[agreement/agreement.ts:40](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L40)

___

### eventTarget

• `Optional` **eventTarget**: `EventTarget`

Event Bus implements EventTarget

#### Defined in

[agreement/agreement.ts:42](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/agreement/agreement.ts#L42)

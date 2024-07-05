---
title: "Module shared/yagna/yagnaApi"
pageTitle: "Module shared/yagna/yagnaApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/yagna/yagnaApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/yagna/yagnaApi

## Table of contents

### Classes

- [YagnaApi](../classes/shared_yagna_yagnaApi.YagnaApi)

### Interfaces

- [YagnaExeScriptObserver](../interfaces/shared_yagna_yagnaApi.YagnaExeScriptObserver)

### Type Aliases

- [YagnaOptions](shared_yagna_yagnaApi#yagnaoptions)
- [YagnaAgreementOperationEvent](shared_yagna_yagnaApi#yagnaagreementoperationevent)
- [YagnaInvoiceEvent](shared_yagna_yagnaApi#yagnainvoiceevent)
- [YagnaDebitNoteEvent](shared_yagna_yagnaApi#yagnadebitnoteevent)

### Variables

- [MIN\_SUPPORTED\_YAGNA](shared_yagna_yagnaApi#min_supported_yagna)

## Type Aliases

### YagnaOptions

Ƭ **YagnaOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `basePath?` | `string` |
| `logger?` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Defined in

[src/shared/yagna/yagnaApi.ts:14](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/yagnaApi.ts#L14)

___

### YagnaAgreementOperationEvent

Ƭ **YagnaAgreementOperationEvent**: [`ElementOf`](shared_utils_types#elementof)\<`Awaited`\<`ReturnType`\<`YaTsClient.MarketApi.RequestorService`[``"collectAgreementEvents"``]\>\>\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:24](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/yagnaApi.ts#L24)

___

### YagnaInvoiceEvent

Ƭ **YagnaInvoiceEvent**: [`ElementOf`](shared_utils_types#elementof)\<`Awaited`\<`ReturnType`\<`YaTsClient.PaymentApi.RequestorService`[``"getInvoiceEvents"``]\>\>\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:27](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/yagnaApi.ts#L27)

___

### YagnaDebitNoteEvent

Ƭ **YagnaDebitNoteEvent**: [`ElementOf`](shared_utils_types#elementof)\<`Awaited`\<`ReturnType`\<`YaTsClient.PaymentApi.RequestorService`[``"getDebitNoteEvents"``]\>\>\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/yagnaApi.ts#L30)

## Variables

### MIN\_SUPPORTED\_YAGNA

• `Const` **MIN\_SUPPORTED\_YAGNA**: ``"0.15.2"``

#### Defined in

[src/shared/yagna/yagnaApi.ts:20](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/yagnaApi.ts#L20)

---
title: "Class YagnaApi"
pageTitle: "Class YagnaApi - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class YagnaApi within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: YagnaApi

[shared/yagna/yagnaApi](../modules/shared_yagna_yagnaApi).YagnaApi

Utility class that groups various Yagna APIs under a single wrapper

This class has the following responsibilities:

- selectively exposes services from ya-ts-client in a more user-friendly manner
- implements an event reader that collects events from Yagna endpoints and allows subscribing to them as Observables
  for agreements, debit notes and invoices. These observables emit ya-ts-client types on outputs

End users of the SDK should not use this class and make use of [golem-network/golem-network.GolemNetwork](golem_network_golem_network.GolemNetwork) instead. This class is designed for
SDK developers to use.

## Table of contents

### Constructors

- [constructor](shared_yagna_yagnaApi.YagnaApi#constructor)

### Properties

- [appSessionId](shared_yagna_yagnaApi.YagnaApi#appsessionid)
- [yagnaOptions](shared_yagna_yagnaApi.YagnaApi#yagnaoptions)
- [basePath](shared_yagna_yagnaApi.YagnaApi#basepath)
- [identity](shared_yagna_yagnaApi.YagnaApi#identity)
- [market](shared_yagna_yagnaApi.YagnaApi#market)
- [activity](shared_yagna_yagnaApi.YagnaApi#activity)
- [net](shared_yagna_yagnaApi.YagnaApi#net)
- [payment](shared_yagna_yagnaApi.YagnaApi#payment)
- [gsb](shared_yagna_yagnaApi.YagnaApi#gsb)
- [version](shared_yagna_yagnaApi.YagnaApi#version)
- [debitNoteEvents$](shared_yagna_yagnaApi.YagnaApi#debitnoteevents$)
- [invoiceEvents$](shared_yagna_yagnaApi.YagnaApi#invoiceevents$)
- [agreementEvents$](shared_yagna_yagnaApi.YagnaApi#agreementevents$)

### Methods

- [connect](shared_yagna_yagnaApi.YagnaApi#connect)
- [disconnect](shared_yagna_yagnaApi.YagnaApi#disconnect)
- [getVersion](shared_yagna_yagnaApi.YagnaApi#getversion)

## Constructors

### constructor

• **new YagnaApi**(`options?`): [`YagnaApi`](shared_yagna_yagnaApi.YagnaApi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`YagnaOptions`](../modules/shared_yagna_yagnaApi#yagnaoptions) |

#### Returns

[`YagnaApi`](shared_yagna_yagnaApi.YagnaApi)

#### Defined in

[src/shared/yagna/yagnaApi.ts:85](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L85)

## Properties

### appSessionId

• `Readonly` **appSessionId**: `string`

#### Defined in

[src/shared/yagna/yagnaApi.ts:51](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L51)

___

### yagnaOptions

• `Readonly` **yagnaOptions**: [`YagnaOptions`](../modules/shared_yagna_yagnaApi#yagnaoptions)

#### Defined in

[src/shared/yagna/yagnaApi.ts:53](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L53)

___

### basePath

• `Readonly` **basePath**: `string`

Base path used to build paths to Yagna's API

**`Example`**

```ts
http://localhost:7465
```

#### Defined in

[src/shared/yagna/yagnaApi.ts:59](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L59)

___

### identity

• `Readonly` **identity**: `DefaultService`

#### Defined in

[src/shared/yagna/yagnaApi.ts:61](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L61)

___

### market

• **market**: `RequestorService`

#### Defined in

[src/shared/yagna/yagnaApi.ts:62](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L62)

___

### activity

• **activity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `control` | `RequestorControlService` |
| `state` | `RequestorStateService` |
| `exec` | [`YagnaExeScriptObserver`](../interfaces/shared_yagna_yagnaApi.YagnaExeScriptObserver) |

#### Defined in

[src/shared/yagna/yagnaApi.ts:63](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L63)

___

### net

• **net**: `RequestorService`

#### Defined in

[src/shared/yagna/yagnaApi.ts:68](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L68)

___

### payment

• **payment**: `RequestorService`

#### Defined in

[src/shared/yagna/yagnaApi.ts:69](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L69)

___

### gsb

• **gsb**: `RequestorService`

#### Defined in

[src/shared/yagna/yagnaApi.ts:70](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L70)

___

### version

• **version**: `DefaultService`

#### Defined in

[src/shared/yagna/yagnaApi.ts:71](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L71)

___

### debitNoteEvents$

• **debitNoteEvents$**: `Subject`\<{}\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:73](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L73)

___

### invoiceEvents$

• **invoiceEvents$**: `Subject`\<{}\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:76](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L76)

___

### agreementEvents$

• **agreementEvents$**: `Subject`\<{} & {}\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:79](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L79)

## Methods

### connect

▸ **connect**(): `Promise`\<{}\>

Effectively starts the Yagna API client including subscribing to events exposed via rxjs subjects

#### Returns

`Promise`\<{}\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:181](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L181)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

Terminates the Yagna API related activities

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:196](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L196)

___

### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:202](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/yagnaApi.ts#L202)

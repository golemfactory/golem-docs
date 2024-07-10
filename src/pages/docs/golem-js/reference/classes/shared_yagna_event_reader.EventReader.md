---
title: "Class EventReader"
pageTitle: "Class EventReader - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class EventReader within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: EventReader

[shared/yagna/event-reader](../modules/shared_yagna_event_reader).EventReader

## Table of contents

### Constructors

- [constructor](shared_yagna_event_reader.EventReader#constructor)

### Methods

- [pollToSubject](shared_yagna_event_reader.EventReader#polltosubject)
- [createReader](shared_yagna_event_reader.EventReader#createreader)

## Constructors

### constructor

• **new EventReader**(`logger`): [`EventReader`](shared_yagna_event_reader.EventReader)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | [`Logger`](../interfaces/shared_utils_logger_logger.Logger) |

#### Returns

[`EventReader`](shared_yagna_event_reader.EventReader)

#### Defined in

[src/shared/yagna/event-reader.ts:28](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/event-reader.ts#L28)

## Methods

### pollToSubject

▸ **pollToSubject**\<`T`\>(`generator`, `subject`): `Promise`\<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | `AsyncGenerator`\<`T`, `any`, `unknown`\> |
| `subject` | `Subject`\<`T`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/shared/yagna/event-reader.ts:30](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/event-reader.ts#L30)

___

### createReader

▸ **createReader**\<`T`\>(`eventType`, `eventsFetcher`): [`CancellablePoll`](../modules/shared_yagna_event_reader#cancellablepoll)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Event` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `eventsFetcher` | [`CancellableEventsFetcherWithCursor`](../modules/shared_yagna_event_reader#cancellableeventsfetcherwithcursor)\<`T`\> |

#### Returns

[`CancellablePoll`](../modules/shared_yagna_event_reader#cancellablepoll)\<`T`\>

#### Defined in

[src/shared/yagna/event-reader.ts:38](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/event-reader.ts#L38)

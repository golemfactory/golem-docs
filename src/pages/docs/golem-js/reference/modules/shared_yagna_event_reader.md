---
title: "Module shared/yagna/event-reader"
pageTitle: "Module shared/yagna/event-reader - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/yagna/event-reader within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/yagna/event-reader

## Table of contents

### Classes

- [EventReader](../classes/shared_yagna_event_reader.EventReader)

### Type Aliases

- [CancellablePoll](shared_yagna_event_reader#cancellablepoll)
- [CancellableEventsFetcherWithCursor](shared_yagna_event_reader#cancellableeventsfetcherwithcursor)

## Type Aliases

### CancellablePoll

Ƭ **CancellablePoll**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | User defined name of the event stream for ease of debugging |
| `isFinished` | `boolean` | Flag indicating if the reader is finished and no longer polling |
| `pollValues` | () => `AsyncGenerator`\<`T`\> | - |
| `cancel` | () => `Promise`\<`void`\> | - |

#### Defined in

[src/shared/yagna/event-reader.ts:6](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/event-reader.ts#L6)

___

### CancellableEventsFetcherWithCursor

Ƭ **CancellableEventsFetcherWithCursor**\<`T`\>: (`lastEventTimestamp`: `string`) => `CancellablePromise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `EventDTO` |

#### Type declaration

▸ (`lastEventTimestamp`): `CancellablePromise`\<`T`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `lastEventTimestamp` | `string` |

##### Returns

`CancellablePromise`\<`T`[]\>

#### Defined in

[src/shared/yagna/event-reader.ts:23](https://github.com/golemfactory/golem-js/blob/570126bc/src/shared/yagna/event-reader.ts#L23)

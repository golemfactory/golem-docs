---
title: "Class ResourceRentalPool"
pageTitle: "Class ResourceRentalPool - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Class ResourceRentalPool within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Class: ResourceRentalPool

[resource-rental/resource-rental-pool](../modules/resource_rental_resource_rental_pool).ResourceRentalPool

Pool of resource rentals that can be borrowed, released or destroyed.

## Table of contents

### Constructors

- [constructor](resource_rental_resource_rental_pool.ResourceRentalPool#constructor)

### Properties

- [events](resource_rental_resource_rental_pool.ResourceRentalPool#events)

### Methods

- [acquire](resource_rental_resource_rental_pool.ResourceRentalPool#acquire)
- [release](resource_rental_resource_rental_pool.ResourceRentalPool#release)
- [destroy](resource_rental_resource_rental_pool.ResourceRentalPool#destroy)
- [drainAndClear](resource_rental_resource_rental_pool.ResourceRentalPool#drainandclear)
- [getSize](resource_rental_resource_rental_pool.ResourceRentalPool#getsize)
- [getAvailableSize](resource_rental_resource_rental_pool.ResourceRentalPool#getavailablesize)
- [getBorrowedSize](resource_rental_resource_rental_pool.ResourceRentalPool#getborrowedsize)
- [ready](resource_rental_resource_rental_pool.ResourceRentalPool#ready)
- [withRental](resource_rental_resource_rental_pool.ResourceRentalPool#withrental)

## Constructors

### constructor

• **new ResourceRentalPool**(`options`): [`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResourceRentalPoolOptions`](../interfaces/resource_rental_resource_rental_pool.ResourceRentalPoolOptions) & [`ResourceRentalPoolDependencies`](../interfaces/resource_rental_resource_rental_pool.ResourceRentalPoolDependencies) |

#### Returns

[`ResourceRentalPool`](resource_rental_resource_rental_pool.ResourceRentalPool)

#### Defined in

[src/resource-rental/resource-rental-pool.ts:81](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L81)

## Properties

### events

• `Readonly` **events**: `EventEmitter`\<[`ResourceRentalPoolEvents`](../interfaces/resource_rental_resource_rental_pool.ResourceRentalPoolEvents), `any`\>

#### Defined in

[src/resource-rental/resource-rental-pool.ts:47](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L47)

## Methods

### acquire

▸ **acquire**(`signalOrTimeout?`): `Promise`\<[`ResourceRental`](resource_rental_resource_rental.ResourceRental)\>

Borrow a resource rental from the pool.
If there is no valid resource rental a new one will be created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signalOrTimeout?` | `number` \| `AbortSignal` | the timeout in milliseconds or an AbortSignal that will be used to cancel the rental request |

#### Returns

`Promise`\<[`ResourceRental`](resource_rental_resource_rental.ResourceRental)\>

#### Defined in

[src/resource-rental/resource-rental-pool.ts:196](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L196)

___

### release

▸ **release**(`resourceRental`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceRental` | [`ResourceRental`](resource_rental_resource_rental.ResourceRental) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental-pool.ts:229](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L229)

___

### destroy

▸ **destroy**(`resourceRental`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceRental` | [`ResourceRental`](resource_rental_resource_rental.ResourceRental) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental-pool.ts:242](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L242)

___

### drainAndClear

▸ **drainAndClear**(): `Promise`\<`void`\>

Sets the pool into draining mode and then clears it

When set to drain mode, no new acquires will be possible. At the same time, all agreements in the pool will be terminated with the Providers.

#### Returns

`Promise`\<`void`\>

Resolves when all agreements are terminated

#### Defined in

[src/resource-rental/resource-rental-pool.ts:268](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L268)

___

### getSize

▸ **getSize**(): `number`

Total size (available + borrowed)

#### Returns

`number`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:286](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L286)

___

### getAvailableSize

▸ **getAvailableSize**(): `number`

Available size (how many resource rental are ready to be borrowed)

#### Returns

`number`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:293](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L293)

___

### getBorrowedSize

▸ **getBorrowedSize**(): `number`

Borrowed size (how many resource rental are currently out of the pool)

#### Returns

`number`

#### Defined in

[src/resource-rental/resource-rental-pool.ts:300](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L300)

___

### ready

▸ **ready**(`timeoutMs?`): `Promise`\<`void`\>

Wait till the pool is ready to use (min number of items in pool are usable).
If an error occurs while creating new resource rentals, it will be retried until the pool is ready
(potentially indefinitely). To stop this process if it fails to reach the desired state in a given time,
you can pass either a timeout in milliseconds or an AbortSignal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs?` | `number` |

#### Returns

`Promise`\<`void`\>

**`Example`**

```typescript
await pool.ready(10_000); // If the pool is not ready in 10 seconds, an error will be thrown
```

**`Example`**

```typescript
await pool.ready(AbortSignal.timeout(10_000)); // If the pool is not ready in 10 seconds, an error will be thrown
```

#### Defined in

[src/resource-rental/resource-rental-pool.ts:319](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L319)

▸ **ready**(`abortSignal?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `abortSignal?` | `AbortSignal` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/resource-rental/resource-rental-pool.ts:320](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L320)

___

### withRental

▸ **withRental**\<`T`\>(`callback`, `signalOrTimeout?`): `Promise`\<`T`\>

Acquire a resource rental from the pool and release it after the callback is done

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`rental`: [`ResourceRental`](resource_rental_resource_rental.ResourceRental)) => `Promise`\<`T`\> | a function that takes a `rental` object as its argument. The renatl is automatically released after the callback is executed, regardless of whether it completes successfully or throws an error. |
| `signalOrTimeout?` | `number` \| `AbortSignal` | the timeout in milliseconds or an AbortSignal that will be used to cancel the rental request |

#### Returns

`Promise`\<`T`\>

**`Example`**

```typescript
const result = await pool.withRental(async (rental) => {
 // Do something with the rented resources
 return result;
 // pool.release(rental) is called automatically
 // even if an error is thrown in the callback
});
```

#### Defined in

[src/resource-rental/resource-rental-pool.ts:375](https://github.com/golemfactory/golem-js/blob/570126bc/src/resource-rental/resource-rental-pool.ts#L375)

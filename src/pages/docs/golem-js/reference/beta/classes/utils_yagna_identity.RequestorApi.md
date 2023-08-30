# Class: RequestorApi

[utils/yagna/identity](../modules/utils_yagna_identity).RequestorApi

## Hierarchy

- `BaseAPI`

  ↳ **`RequestorApi`**

## Implements

- `IdentityRequestorApi`

## Table of contents

### Constructors

- [constructor](utils_yagna_identity.RequestorApi#constructor)

### Methods

- [getIdentity](utils_yagna_identity.RequestorApi#getidentity)

## Constructors

### constructor

• **new RequestorApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `configuration?` | `Configuration` |
| `basePath?`      | `string`        |
| `axios?`         | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

node_modules/ya-ts-client/dist/ya-net/base.d.ts:43

## Methods

### getIdentity

▸ **getIdentity**(): `Promise`<`AxiosResponse`<[`IdentityModel`](../interfaces/utils_yagna_identity.IdentityModel), `any`\>\>

#### Returns

`Promise`<`AxiosResponse`<[`IdentityModel`](../interfaces/utils_yagna_identity.IdentityModel), `any`\>\>

#### Implementation of

IdentityRequestorApi.getIdentity

#### Defined in

[src/utils/yagna/identity.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/utils/yagna/identity.ts#L16)
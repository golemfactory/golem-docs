[JavaScript API reference](../README) / DemandEvent

# Class: DemandEvent

## Hierarchy

- `Event`

  ↳ **`DemandEvent`**

## Table of contents

### Constructors

- [constructor](DemandEvent#constructor)

### Properties

- [proposal](DemandEvent#proposal)

## Constructors

### constructor

• **new DemandEvent**(`type`, `data`)

Create a new instance of DemandEvent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | A string with the name of the event: |
| `data` | `any` | object with proposal data: |

#### Overrides

Event.constructor

#### Defined in

[market/demand.ts:126](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/demand.ts#L126)

## Properties

### proposal

• `Readonly` **proposal**: [`Proposal`](Proposal)

#### Defined in

[market/demand.ts:119](https://github.com/golemfactory/yajsapi/blob/3969026/yajsapi/market/demand.ts#L119)

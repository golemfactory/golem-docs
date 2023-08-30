# Class: ProposalReceived

[events/events](../modules/events_events).ProposalReceived

## Hierarchy

- [`BaseEvent`](events_events.BaseEvent)<{ `id`: `string` ; `providerId`: `string` ; `parentId`: `string` \| `null` ; `details`: [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails) }\>

  ↳ **`ProposalReceived`**

## Table of contents

### Constructors

- [constructor](events_events.ProposalReceived#constructor)

### Properties

- [detail](events_events.ProposalReceived#detail)
- [name](events_events.ProposalReceived#name)
- [timestamp](events_events.ProposalReceived#timestamp)

## Constructors

### constructor

• **new ProposalReceived**(`data?`)

#### Parameters

| Name              | Type                                                               |
| :---------------- | :----------------------------------------------------------------- |
| `data?`           | `Object`                                                           |
| `data.id`         | `string`                                                           |
| `data.providerId` | `string`                                                           |
| `data.parentId`   | `null` \| `string`                                                 |
| `data.details`    | [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails) |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[constructor](events_events.BaseEvent#constructor)

#### Defined in

[src/events/events.ts:28](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L28)

## Properties

### detail

• `Readonly` **detail**: `Object`

#### Type declaration

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `id`         | `string`                                                           |
| `providerId` | `string`                                                           |
| `parentId`   | `null` \| `string`                                                 |
| `details`    | [`ProposalDetails`](../interfaces/market_proposal.ProposalDetails) |

#### Inherited from

[BaseEvent](events_events.BaseEvent).[detail](events_events.BaseEvent#detail)

#### Defined in

[src/events/events.ts:16](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L16)

---

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[name](events_events.BaseEvent#name)

#### Defined in

[src/events/events.ts:17](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L17)

---

### timestamp

• `Readonly` **timestamp**: `number`

#### Inherited from

[BaseEvent](events_events.BaseEvent).[timestamp](events_events.BaseEvent#timestamp)

#### Defined in

[src/events/events.ts:18](https://github.com/golemfactory/golem-js/blob/c28a1b0/src/events/events.ts#L18)

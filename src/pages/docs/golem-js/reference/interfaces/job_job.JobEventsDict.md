---
title: "Interface JobEventsDict"
pageTitle: "Interface JobEventsDict - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface JobEventsDict within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: JobEventsDict

[job/job](../modules/job_job).JobEventsDict

## Table of contents

### Properties

- [created](job_job.JobEventsDict#created)
- [started](job_job.JobEventsDict#started)
- [success](job_job.JobEventsDict#success)
- [error](job_job.JobEventsDict#error)
- [canceled](job_job.JobEventsDict#canceled)
- [ended](job_job.JobEventsDict#ended)

## Properties

### created

• **created**: () => `void`

Emitted immediately after the job is created and initialization begins.

#### Type declaration

▸ (): `void`

Emitted immediately after the job is created and initialization begins.

##### Returns

`void`

#### Defined in

[src/job/job.ts:31](https://github.com/golemfactory/golem-js/blob/4182943/src/job/job.ts#L31)

___

### started

• **started**: () => `void`

Emitted when the job finishes initialization and work begins.

#### Type declaration

▸ (): `void`

Emitted when the job finishes initialization and work begins.

##### Returns

`void`

#### Defined in

[src/job/job.ts:35](https://github.com/golemfactory/golem-js/blob/4182943/src/job/job.ts#L35)

___

### success

• **success**: () => `void`

Emitted when the job completes successfully and cleanup begins.

#### Type declaration

▸ (): `void`

Emitted when the job completes successfully and cleanup begins.

##### Returns

`void`

#### Defined in

[src/job/job.ts:39](https://github.com/golemfactory/golem-js/blob/4182943/src/job/job.ts#L39)

___

### error

• **error**: (`error`: `Error`) => `void`

Emitted when the job fails and cleanup begins.

#### Type declaration

▸ (`error`): `void`

Emitted when the job fails and cleanup begins.

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/job/job.ts:43](https://github.com/golemfactory/golem-js/blob/4182943/src/job/job.ts#L43)

___

### canceled

• **canceled**: () => `void`

Emitted when the job is canceled by the user.

#### Type declaration

▸ (): `void`

Emitted when the job is canceled by the user.

##### Returns

`void`

#### Defined in

[src/job/job.ts:47](https://github.com/golemfactory/golem-js/blob/4182943/src/job/job.ts#L47)

___

### ended

• **ended**: () => `void`

Emitted when the job finishes cleanup after success, error or cancelation.

#### Type declaration

▸ (): `void`

Emitted when the job finishes cleanup after success, error or cancelation.

##### Returns

`void`

#### Defined in

[src/job/job.ts:51](https://github.com/golemfactory/golem-js/blob/4182943/src/job/job.ts#L51)

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

#### Type declaration

▸ (): `void`

Emitted immediately after the job is created and initialization begins.

##### Returns

`void`

#### Defined in

[src/job/job.ts:32](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/job/job.ts#L32)

___

### started

• **started**: () => `void`

#### Type declaration

▸ (): `void`

Emitted when the job finishes initialization and work begins.

##### Returns

`void`

#### Defined in

[src/job/job.ts:36](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/job/job.ts#L36)

___

### success

• **success**: () => `void`

#### Type declaration

▸ (): `void`

Emitted when the job completes successfully and cleanup begins.

##### Returns

`void`

#### Defined in

[src/job/job.ts:40](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/job/job.ts#L40)

___

### error

• **error**: (`error`: `Error`) => `void`

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

[src/job/job.ts:44](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/job/job.ts#L44)

___

### canceled

• **canceled**: () => `void`

#### Type declaration

▸ (): `void`

Emitted when the job is canceled by the user.

##### Returns

`void`

#### Defined in

[src/job/job.ts:48](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/job/job.ts#L48)

___

### ended

• **ended**: () => `void`

#### Type declaration

▸ (): `void`

Emitted when the job finishes cleanup after success, error or cancelation.

##### Returns

`void`

#### Defined in

[src/job/job.ts:52](https://github.com/golemfactory/golem-js/blob/e7b6d14/src/job/job.ts#L52)

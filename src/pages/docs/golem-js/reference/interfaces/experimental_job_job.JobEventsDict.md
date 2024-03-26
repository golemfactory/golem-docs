---
title: "Interface JobEventsDict"
pageTitle: "Interface JobEventsDict - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface JobEventsDict within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: JobEventsDict

[experimental/job/job](../modules/experimental_job_job).JobEventsDict

## Table of contents

### Properties

- [created](experimental_job_job.JobEventsDict#created)
- [started](experimental_job_job.JobEventsDict#started)
- [success](experimental_job_job.JobEventsDict#success)
- [error](experimental_job_job.JobEventsDict#error)
- [canceled](experimental_job_job.JobEventsDict#canceled)
- [ended](experimental_job_job.JobEventsDict#ended)

## Properties

### created

• **created**: () => `void`

Emitted immediately after the job is created and initialization begins.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:42](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L42)

___

### started

• **started**: () => `void`

Emitted when the job finishes initialization and work begins.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:46](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L46)

___

### success

• **success**: () => `void`

Emitted when the job completes successfully and cleanup begins.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:50](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L50)

___

### error

• **error**: (`error`: `Error`) => `void`

Emitted when the job fails and cleanup begins.

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:54](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L54)

___

### canceled

• **canceled**: () => `void`

Emitted when the job is canceled by the user.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:58](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L58)

___

### ended

• **ended**: () => `void`

Emitted when the job finishes cleanup after success, error or cancelation.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/experimental/job/job.ts:62](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L62)

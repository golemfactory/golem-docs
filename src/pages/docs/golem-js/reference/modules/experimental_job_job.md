---
title: "Module experimental/job/job"
pageTitle: "Module experimental/job/job - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module experimental/job/job within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: experimental/job/job

## Table of contents

### Enumerations

- [JobState](../enums/experimental_job_job.JobState)

### Classes

- [Job](../classes/experimental_job_job.Job)

### Interfaces

- [JobEventsDict](../interfaces/experimental_job_job.JobEventsDict)

### Type Aliases

- [RunJobOptions](experimental_job_job#runjoboptions)

## Type Aliases

### RunJobOptions

Ƭ **RunJobOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `market?` | [`MarketOptions`](../interfaces/market_service.MarketOptions) |
| `payment?` | [`PaymentOptions`](../interfaces/payment_service.PaymentOptions) |
| `agreement?` | `AgreementOptions` |
| `network?` | `NetworkOptions` |
| `package?` | [`PackageOptions`](package_package#packageoptions) |
| `activity?` | [`ActivityOptions`](../interfaces/activity_activity.ActivityOptions) |
| `work?` | [`WorkOptions`](../interfaces/work_work.WorkOptions) |

#### Defined in

[src/experimental/job/job.ts:28](https://github.com/golemfactory/golem-js/blob/bf1fab1/src/experimental/job/job.ts#L28)

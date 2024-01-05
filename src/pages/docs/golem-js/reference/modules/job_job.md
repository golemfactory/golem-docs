---
title: "Module job/job"
pageTitle: "Module job/job - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module job/job within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: job/job

## Table of contents

### Classes

- [Job](../classes/job_job.Job)

### Interfaces

- [JobEventsDict](../interfaces/job_job.JobEventsDict)

### Type Aliases

- [RunJobOptions](job_job#runjoboptions)

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
| `work?` | [`WorkOptions`](../interfaces/task_work.WorkOptions) |

#### Defined in

[src/job/job.ts:18](https://github.com/golemfactory/golem-js/blob/9137662/src/job/job.ts#L18)

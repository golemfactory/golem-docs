---
title: "Interface YagnaExeScriptObserver"
pageTitle: "Interface YagnaExeScriptObserver - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface YagnaExeScriptObserver within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: YagnaExeScriptObserver

[shared/yagna/yagnaApi](../modules/shared_yagna_yagnaApi).YagnaExeScriptObserver

## Table of contents

### Methods

- [observeBatchExecResults](shared_yagna_yagnaApi.YagnaExeScriptObserver#observebatchexecresults)

## Methods

### observeBatchExecResults

▸ **observeBatchExecResults**(`activityId`, `batchId`): `Observable`\<[`StreamingBatchEvent`](activity_results.StreamingBatchEvent)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activityId` | `string` |
| `batchId` | `string` |

#### Returns

`Observable`\<[`StreamingBatchEvent`](activity_results.StreamingBatchEvent)\>

#### Defined in

[src/shared/yagna/yagnaApi.ts:35](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/yagna/yagnaApi.ts#L35)

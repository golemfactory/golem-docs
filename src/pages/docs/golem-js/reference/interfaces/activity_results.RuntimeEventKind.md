---
title: "Interface RuntimeEventKind"
pageTitle: "Interface RuntimeEventKind - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface RuntimeEventKind within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: RuntimeEventKind

[activity/results](../modules/activity_results).RuntimeEventKind

## Table of contents

### Properties

- [started](activity_results.RuntimeEventKind#started)
- [stdout](activity_results.RuntimeEventKind#stdout)
- [stderr](activity_results.RuntimeEventKind#stderr)
- [finished](activity_results.RuntimeEventKind#finished)

## Properties

### started

• `Optional` **started**: [`RuntimeEventStarted`](activity_results.RuntimeEventStarted)

#### Defined in

[src/activity/results.ts:77](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/results.ts#L77)

___

### stdout

• `Optional` **stdout**: `string` \| `ArrayBuffer`

#### Defined in

[src/activity/results.ts:78](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/results.ts#L78)

___

### stderr

• `Optional` **stderr**: `string` \| `ArrayBuffer`

#### Defined in

[src/activity/results.ts:79](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/results.ts#L79)

___

### finished

• `Optional` **finished**: [`RuntimeEventFinished`](activity_results.RuntimeEventFinished)

#### Defined in

[src/activity/results.ts:80](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/results.ts#L80)

---
title: "Module script/command - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module script/command within the golem-js SDK for the Golem Network."
type: "reference"
---
# Module: script/command

## Table of contents

### Classes

- [Terminate](../classes/script_command.Terminate)
- [UploadData](../classes/script_command.UploadData)
- [DownloadData](../classes/script_command.DownloadData)

### Type Aliases

- [Capture](script_command#capture)
- [CaptureMode](script_command#capturemode)

## Other

### Capture

Ƭ **Capture**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stdout?` | [`CaptureMode`](script_command#capturemode) |
| `stderr?` | [`CaptureMode`](script_command#capturemode) |

#### Defined in

[src/script/command.ts:76](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/script/command.ts#L76)

___

### CaptureMode

Ƭ **CaptureMode**: \{ `atEnd`: \{ `part?`: `CapturePart` ; `format?`: `CaptureFormat`  }  } \| \{ `stream`: \{ `limit?`: `number` ; `format?`: `CaptureFormat`  }  }

#### Defined in

[src/script/command.ts:80](https://github.com/golemfactory/golem-js/blob/cfdb64d/src/script/command.ts#L80)

___

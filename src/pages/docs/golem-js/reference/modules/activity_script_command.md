---
title: "Module activity/script/command"
pageTitle: "Module activity/script/command - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module activity/script/command within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: activity/script/command

## Table of contents

### Classes

- [Command](../classes/activity_script_command.Command)
- [Deploy](../classes/activity_script_command.Deploy)
- [Start](../classes/activity_script_command.Start)
- [Run](../classes/activity_script_command.Run)
- [Terminate](../classes/activity_script_command.Terminate)
- [Transfer](../classes/activity_script_command.Transfer)
- [UploadFile](../classes/activity_script_command.UploadFile)
- [UploadData](../classes/activity_script_command.UploadData)
- [DownloadFile](../classes/activity_script_command.DownloadFile)
- [DownloadData](../classes/activity_script_command.DownloadData)

### Type Aliases

- [Capture](activity_script_command#capture)
- [CaptureMode](activity_script_command#capturemode)
- [CapturePart](activity_script_command#capturepart)
- [CaptureFormat](activity_script_command#captureformat)

## Type Aliases

### Capture

Ƭ **Capture**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stdout?` | [`CaptureMode`](activity_script_command#capturemode) |
| `stderr?` | [`CaptureMode`](activity_script_command#capturemode) |

#### Defined in

[src/activity/script/command.ts:74](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L74)

___

### CaptureMode

Ƭ **CaptureMode**: \{ `atEnd`: \{ `part?`: [`CapturePart`](activity_script_command#capturepart) ; `format?`: [`CaptureFormat`](activity_script_command#captureformat)  }  } \| \{ `stream`: \{ `limit?`: `number` ; `format?`: [`CaptureFormat`](activity_script_command#captureformat)  }  }

#### Defined in

[src/activity/script/command.ts:79](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L79)

___

### CapturePart

Ƭ **CapturePart**: \{ `head`: `number`  } \| \{ `tail`: `number`  } \| \{ `headTail`: `number`  }

#### Defined in

[src/activity/script/command.ts:83](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L83)

___

### CaptureFormat

Ƭ **CaptureFormat**: ``"string"`` \| ``"binary"``

#### Defined in

[src/activity/script/command.ts:85](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/activity/script/command.ts#L85)

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

[src/script/command.ts:76](https://github.com/golemfactory/golem-js/blob/570d226/src/script/command.ts#L76)

___

### CaptureMode

Ƭ **CaptureMode**: { `atEnd`: { `part?`: `CapturePart` ; `format?`: `CaptureFormat`  }  } \| { `stream`: { `limit?`: `number` ; `format?`: `CaptureFormat`  }  }

#### Defined in

[src/script/command.ts:80](https://github.com/golemfactory/golem-js/blob/570d226/src/script/command.ts#L80)

___

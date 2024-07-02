---
title: "Module shared/utils/apiErrorMessage"
pageTitle: "Module shared/utils/apiErrorMessage - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module shared/utils/apiErrorMessage within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: shared/utils/apiErrorMessage

## Table of contents

### Functions

- [getMessageFromApiError](shared_utils_apiErrorMessage#getmessagefromapierror)

## Functions

### getMessageFromApiError

▸ **getMessageFromApiError**(`error`): `string`

Try to extract a message from a yagna API error.
If the error is not an instance of `ApiError`, return the error message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

`string`

#### Defined in

[src/shared/utils/apiErrorMessage.ts:9](https://github.com/golemfactory/golem-js/blob/ed1cf1df/src/shared/utils/apiErrorMessage.ts#L9)

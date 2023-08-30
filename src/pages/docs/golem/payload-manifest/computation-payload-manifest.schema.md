---
description: Payload Manifest schema
title: Payload Manifest schema
---

# Objects

- [`Application Metadata`](#application-metadata)
- [`Computation Manifest`](#computation-manifest)
- [`Computation Payload Manifest`](#computation-payload-manifest)
- [`Payload`](#payload)
- [`Platform`](#payload-platform)
- [`Internet Network`](#internet-network)
- [`Internet Outbound Network`](#internet-outbound-network)
- [`Net`](#net)
- [`Script`](#script)

---

## Application Metadata

**`Application Metadata` Properties**

|                 | Type                 | Description | Required     |
| --------------- | -------------------- | ----------- | ------------ |
| **name**        | `string`             |             | &#10003; Yes |
| **description** | `["string", "null"]` |             | No           |
| **version**     | `string`             |             | &#10003; Yes |
| **authors**     | `string` `[]`        |             | No           |
| **homepage**    | `["string", "null"]` |             | No           |

Additional properties are allowed.

- **JSON schema**:

### AppMetadata.name

- **Type**: `string`
- **Required**: &#10003; Yes

### AppMetadata.description

- **Type**: `["string", "null"]`
- **Required**: No

### AppMetadata.version

- **Type**: `string`
- **Required**: &#10003; Yes

### AppMetadata.authors

- **Type**: `string` `[]`
- **Required**: No

### AppMetadata.homepage

- **Type**: `["string", "null"]`
- **Required**: No

---

## Computation Manifest

Computation Manifests let Requestors define a certain set of allowed actions, to be negotiated with and approved by a Provider. Requestors' actions will be verified against the Manifest during computation.

**`Computation Manifest` Properties**

|             | Type     | Description                                                                                                 | Required     |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------- | ------------ |
| **version** | `string` | Semver                                                                                                      | &#10003; Yes |
| **script**  | `object` | Defines a set of allowed ExeScript commands and applies constraints to their arguments.                     | No           |
| **net**     | `object` | Applies constraints to networking. Currently, outgoing requests to the public Internet network are covered. | No           |

Additional properties are allowed.

- **JSON schema**:

### CompManifest.version

Semver

- **Type**: `string`
- **Required**: &#10003; Yes

### CompManifest.script

Defines a set of allowed ExeScript commands and applies constraints to their arguments.

- **Type**: `object`
- **Required**: No
- **Allowed values**:

### CompManifest.net

Applies constraints to networking. Currently, outgoing requests to the public Internet network are covered.

- **Type**: `object`
- **Required**: No
- **Allowed values**:

---

## Computation Payload Manifest

**`Computation Payload Manifest` Properties**

|                  | Type              | Description | Required     |
| ---------------- | ----------------- | ----------- | ------------ |
| **version**      | `string`          | Semver      | &#10003; Yes |
| **createdAt**    | `string`          |             | &#10003; Yes |
| **expiresAt**    | `string`          |             | &#10003; Yes |
| **metadata**     | `object`          |             | No           |
| **payload**      | `AppPayload` `[]` |             | &#10003; Yes |
| **compManifest** | `object`          |             | No           |

Additional properties are allowed.

- **JSON schema**: [computation-payload-manifest.schema.json](https://github.com/golemfactory/yagna-docs/blob/master/requestor-tutorials/vm-runtime/computation-payload-manifest.schema.json)

### Computation Payload Manifest.version

Semver

- **Type**: `string`
- **Required**: &#10003; Yes

### Computation Payload Manifest.createdAt

- **Type**: `string`
- **Required**: &#10003; Yes
- **Format**: date-time

### Computation Payload Manifest.expiresAt

- **Type**: `string`
- **Required**: &#10003; Yes
- **Format**: date-time

### Computation Payload Manifest.metadata

- **Type**: `object`
- **Required**: No
- **Allowed values**:

### Computation Payload Manifest.payload

- **Type**: `AppPayload` `[]`
- **Required**: &#10003; Yes

### Computation Payload Manifest.compManifest

- **Type**: `object`
- **Required**: No
- **Allowed values**:

---

## Internet Network

**`Internet Network` Properties**

|         | Type     | Description               | Required |
| ------- | -------- | ------------------------- | -------- |
| **out** | `object` | Internet Outbound Network | No       |

Additional properties are allowed.

- **JSON schema**:

### Inet.out

Internet Outbound Network

- **Type**: `object`
- **Required**: No
- **Allowed values**:

---

## Internet Outbound Network

Applies constraints to networking. Currently, outgoing requests to the public Internet network are covered.

**`Internet Outbound Network` Properties**

|               | Type                | Description                                                                                                                                                            | Required                           |
| ------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **protocols** | `string` `[]`       | List of allowed outbound protocols. Supports "http", "https", "ws", and "wss".                                                                                         | No, default: `[http,https,ws,wss]` |
| **urls**      | `["array", "null"]` | List of allowed external URLs that outbound requests can be sent to. E.g. ["http://golemfactory.s3.amazonaws.com/file1", "http://golemfactory.s3.amazonaws.com/file2"] | No                                 |

Additional properties are allowed.

- **JSON schema**:

### InetOut.protocols

List of allowed outbound protocols. Supports "http", "https", "ws", and "wss".

- **Type**: `string` `[]`
- **Required**: No, default: `[http,https,ws,wss]`

### InetOut.urls

List of allowed external URLs that outbound requests can be sent to. E.g. ["http://golemfactory.s3.amazonaws.com/file1", "http://golemfactory.s3.amazonaws.com/file2"]

- **Type**: `["array", "null"]`
- **Required**: No

---

## Net

Applies constraints to networking. Currently, outgoing requests to the public Internet network are covered.

**`Net` Properties**

|          | Type     | Description | Required |
| -------- | -------- | ----------- | -------- |
| **inet** | `object` |             | No       |

Additional properties are allowed.

- **JSON schema**:

### Net.inet

- **Type**: `object`
- **Required**: No
- **Allowed values**:

---

## Payload

**`Payload` Properties**

|              | Type          | Description | Required     |
| ------------ | ------------- | ----------- | ------------ |
| **platform** | `object`      |             | No           |
| **urls**     | `string` `[]` |             | &#10003; Yes |
| **hash**     | `string`      |             | &#10003; Yes |

Additional properties are allowed.

- **JSON schema**:

### AppPayload.platform

- **Type**: `object`
- **Required**: No
- **Allowed values**:

### AppPayload.urls

- **Type**: `string` `[]`
- **Required**: &#10003; Yes

### AppPayload.hash

- **Type**: `string`
- **Required**: &#10003; Yes

---

## Payload Platform

**`Payload Platform` Properties**

|               | Type                 | Description | Required     |
| ------------- | -------------------- | ----------- | ------------ |
| **arch**      | `string`             |             | &#10003; Yes |
| **os**        | `string`             |             | &#10003; Yes |
| **osVersion** | `["string", "null"]` |             | No           |

Additional properties are allowed.

- **JSON schema**:

### PayloadPlatform.arch

- **Type**: `string`
- **Required**: &#10003; Yes

### PayloadPlatform.os

- **Type**: `string`
- **Required**: &#10003; Yes

### PayloadPlatform.osVersion

- **Type**: `["string", "null"]`
- **Required**: No

---

## Script

Defines a set of allowed ExeScript commands and applies constraints to their arguments.

**`Script` Properties**

|              | Type       | Description                                                                                                                                                           | Required              |
| ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **commands** | `array[]`  | Specifies a curated list of commands.                                                                                                                                 | &#10003; Yes          |
| **match**    | `ArgMatch` | Selects a default way of comparing command arguments stated in the manifest and the ones received in the ExeScript, unless stated otherwise in a command JSON object. | No, default: `strict` |

Additional properties are allowed.

- **JSON schema**:

### Script.commands

Specifies a curated list of commands.

- **Type**: `array[]`
  - Each element in the array must be one of the following values:
- **Required**: &#10003; Yes

### Script.match

Selects a default way of comparing command arguments stated in the manifest and the ones received in the ExeScript, unless stated otherwise in a command JSON object.

- **Type**: `ArgMatch`
- **Required**: No, default: `strict`
- **Allowed values**:
  - `strict`
  - `regex`

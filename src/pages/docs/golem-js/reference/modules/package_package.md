---
title: "Module package/package"
pageTitle: "Module package/package - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Module package/package within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Module: package/package

## Table of contents

### Classes

- [Package](../classes/package_package.Package)

### Interfaces

- [PackageDetails](../interfaces/package_package.PackageDetails)

### Type Aliases

- [AllPackageOptions](package_package#allpackageoptions)
- [PackageOptions](package_package#packageoptions)

## Type Aliases

### AllPackageOptions

Ƭ **AllPackageOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `engine?` | `string` | Type of engine required: vm, emscripten, sgx, sgx-js, sgx-wasm, sgx-wasi |
| `minMemGib?` | `number` | Minimum required memory to execute application GB |
| `minStorageGib?` | `number` | Minimum required disk storage to execute tasks in GB |
| `minCpuThreads?` | `number` | Minimum required CPU threads |
| `minCpuCores?` | `number` | Minimum required CPU cores |
| `capabilities?` | `string`[] | Required providers capabilities to run application |
| `imageHash?` | `string` | finds package by its contents hash |
| `imageTag?` | `string` | finds package by registry tag |
| `manifest?` | `string` | - |
| `manifestSig?` | `string` | Signature of base64 encoded Computation Payload Manifest * |
| `manifestSigAlgorithm?` | `string` | Algorithm of manifest signature, e.g. "sha256" * |
| `manifestCert?` | `string` | Certificate - base64 encoded public certificate (DER or PEM) matching key used to generate signature * |
| `logger?` | [`Logger`](../interfaces/utils_logger_logger.Logger) | - |

#### Defined in

[src/package/package.ts:7](https://github.com/golemfactory/golem-js/blob/9789a95/src/package/package.ts#L7)

___

### PackageOptions

Ƭ **PackageOptions**: [`RequireAtLeastOne`](utils_types#requireatleastone)\<[`AllPackageOptions`](package_package#allpackageoptions), ``"imageHash"`` \| ``"imageTag"`` \| ``"manifest"``\>

#### Defined in

[src/package/package.ts:34](https://github.com/golemfactory/golem-js/blob/9789a95/src/package/package.ts#L34)

# Module: package/package

## Table of contents

### Classes

- [Package](../classes/package_package.Package.md)

### Interfaces

- [PackageDetails](../interfaces/package_package.PackageDetails.md)

### Type Aliases

- [PackageOptions](package_package.md#packageoptions)

## Type Aliases

### PackageOptions

Ƭ **PackageOptions**: [`RequireAtLeastOne`](utils_types.md#requireatleastone)<{ `engine?`: `string` ; `minMemGib?`: `number` ; `minStorageGib?`: `number` ; `minCpuThreads?`: `number` ; `minCpuCores?`: `number` ; `capabilities?`: `string`[] ; `imageHash?`: `string` ; `imageTag?`: `string` ; `manifest?`: `string` ; `manifestSig?`: `string` ; `manifestSigAlgorithm?`: `string` ; `manifestCert?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger.md)  }, ``"imageHash"`` \| ``"imageTag"`` \| ``"manifest"``\>

#### Defined in

[yajsapi/package/package.ts:7](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/package/package.ts#L7)

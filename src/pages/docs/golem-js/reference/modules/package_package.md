# Module: package/package

## Table of contents

### Classes

- [Package](../classes/package_package.Package)

### Interfaces

- [PackageDetails](../interfaces/package_package.PackageDetails)

### Type Aliases

- [PackageOptions](package_package#packageoptions)

## Type Aliases

### PackageOptions

Ƭ **PackageOptions**: [`RequireAtLeastOne`](utils_types#requireatleastone)<{ `engine?`: `string` ; `minMemGib?`: `number` ; `minStorageGib?`: `number` ; `minCpuThreads?`: `number` ; `minCpuCores?`: `number` ; `capabilities?`: `string`[] ; `imageHash?`: `string` ; `imageTag?`: `string` ; `manifest?`: `string` ; `manifestSig?`: `string` ; `manifestSigAlgorithm?`: `string` ; `manifestCert?`: `string` ; `logger?`: [`Logger`](../interfaces/utils_logger_logger.Logger)  }, ``"imageHash"`` \| ``"imageTag"`` \| ``"manifest"``\>

#### Defined in

[src/package/package.ts:7](https://github.com/golemfactory/golem-js/blob/570d226/src/package/package.ts#L7)

# Interface: PackageOptions

[package/package](../modules/package_package.md).PackageOptions

## Table of contents

### Properties

- [engine](package_package.PackageOptions.md#engine)
- [minMemGib](package_package.PackageOptions.md#minmemgib)
- [minStorageGib](package_package.PackageOptions.md#minstoragegib)
- [minCpuThreads](package_package.PackageOptions.md#mincputhreads)
- [minCpuCores](package_package.PackageOptions.md#mincpucores)
- [capabilities](package_package.PackageOptions.md#capabilities)
- [imageHash](package_package.PackageOptions.md#imagehash)
- [repoUrl](package_package.PackageOptions.md#repourl)
- [logger](package_package.PackageOptions.md#logger)

## Properties

### engine

• `Optional` **engine**: `string`

Type of engine required: vm, emscripten, sgx, sgx-js, sgx-wasm, sgx-wasi

#### Defined in

[yajsapi/package/package.ts:12](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L12)

___

### minMemGib

• `Optional` **minMemGib**: `number`

Minimum required memory to execute application GB

#### Defined in

[yajsapi/package/package.ts:14](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L14)

___

### minStorageGib

• `Optional` **minStorageGib**: `number`

Minimum required disk storage to execute tasks in GB

#### Defined in

[yajsapi/package/package.ts:16](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L16)

___

### minCpuThreads

• `Optional` **minCpuThreads**: `number`

Minimum required CPU threads

#### Defined in

[yajsapi/package/package.ts:18](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L18)

___

### minCpuCores

• `Optional` **minCpuCores**: `number`

Minimum required CPU cores

#### Defined in

[yajsapi/package/package.ts:20](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L20)

___

### capabilities

• `Optional` **capabilities**: `string`[]

Required providers capabilities to run application

#### Defined in

[yajsapi/package/package.ts:22](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L22)

___

### imageHash

• **imageHash**: `string`

finds package by its contents hash

#### Defined in

[yajsapi/package/package.ts:24](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L24)

___

### repoUrl

• `Optional` **repoUrl**: `string`

#### Defined in

[yajsapi/package/package.ts:25](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L25)

___

### logger

• `Optional` **logger**: [`Logger`](utils_logger.Logger.md)

#### Defined in

[yajsapi/package/package.ts:26](https://github.com/golemfactory/yajsapi/blob/e4105b2/yajsapi/package/package.ts#L26)

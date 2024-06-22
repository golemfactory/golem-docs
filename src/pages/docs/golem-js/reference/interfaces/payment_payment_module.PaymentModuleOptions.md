---
title: "Interface PaymentModuleOptions"
pageTitle: "Interface PaymentModuleOptions - golem-js API Reference"
description: "Explore the detailed API reference documentation for the Interface PaymentModuleOptions within the golem-js SDK for the Golem Network."
type: "JS API Reference"
---
# Interface: PaymentModuleOptions

[payment/payment.module](../modules/payment_payment_module).PaymentModuleOptions

## Table of contents

### Properties

- [network](payment_payment_module.PaymentModuleOptions#network)
- [driver](payment_payment_module.PaymentModuleOptions#driver)
- [token](payment_payment_module.PaymentModuleOptions#token)

## Properties

### network

• `Optional` **network**: `string`

Network used to facilitate the payment.
(for example: "mainnet", "holesky")

**`Default`**

```ts
holesky
```

#### Defined in

[src/payment/payment.module.ts:26](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L26)

___

### driver

• `Optional` **driver**: `string` & {} \| ``"erc20"``

Payment driver used to facilitate the payment.
(for example: "erc20")

**`Default`**

```ts
erc20
```

#### Defined in

[src/payment/payment.module.ts:33](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L33)

___

### token

• `Optional` **token**: `string` & {} \| ``"glm"`` \| ``"tglm"``

Token used to facilitate the payment.
If unset, it will be inferred from the network.
(for example: "glm", "tglm")

#### Defined in

[src/payment/payment.module.ts:40](https://github.com/golemfactory/golem-js/blob/570126bc/src/payment/payment.module.ts#L40)

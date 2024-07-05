---
title: Golem Testnet and Mainnet explained.
description: Introduction to Golem Network networks.
type: Article
---

# Testnet / Mainnet, Addresses and Wallets

## Networks

`Testnet` is the part of the Golem Network, that accepts payments on test blockchains. By default, the requestor node uses `testnet`.

Requestor users can select their preferred blockchain. Their demand will be matched by offers from providers that accept payments on test blockchains. Golem Network and its community operate some providers on the `testnet` that serves as a testing environment for developers.

`yagna payment fund` is a command to obtain tokens necessary to run applications on the `testnet`: both tGLM and the chain native token used to pay gas fees.

`Mainnet` is the part of the Golem Network, that accepts payments on production blockchains. At this moment, we support transactions on Ethereum Mainnet and Polygon, but due to the high gas fees on the Ethereum Mainnet, we recommend using Polygon.

Provider configuration by default, accepts payments on production networks.

To operate on the Mainnet the requestor needs to supply his Yagna wallet with GLM and gas tokens on the respective network. On Polygon, you'll need GLM and MATIC.

You can learn how to acquire GLMs [here](/docs/ja/golem/overview/golem-token#where-to-acquire-GLM).

(Note, the term `Mainnet` is also used to identify the Ethereum main blockchain: in such a case we refer to it as `Ethereum Mainnet`).

## Addresses and wallets

When you run the Yagna daemon for the first time, it creates a set of addresses on all supported blockchains (both test and production ones) and provides a wallet to store them.

All addresses have the same value, however, they are operated on different blockchains, thus they are separate.

This value is also used to identify your node ID (so it must be unique) and by default, this is the address used to pay from and to receive payments - on the network you had agreed to operate between the Provider and Requestor.

You can check your ID using `yagna id show`.

A Provider can configure a separate address used to receive payments - a different one from the address defined by the node ID.

If a requestor would like to use another blockchain address to pay from, he needs to import the related private key to Yagna (see `yagna id create --help` for details on flags and options).

You can also export the private key Yagna using (`yagna id export`)
.
By default, Yagna imports and exports keys in [secret storage format](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition).

## How the payment network is selected

Providers, by default, accept payments on both Polygon and Ethereum Mainnet. Users can change this setting using `golemsp run --payment-network <network>`.

Requestors define their preferred payment network(s) as a part of a demand definition. Golem Network matches demands with offers and automates the process of agreeing on what blockchain will be used for payments. The set of parameters describing the payment driver, the blockchain network, and the token is called the payment platform.

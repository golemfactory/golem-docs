---
title: Golem Tokens explained.
description: Introduction to Golem Network Tokens, addresses, and networks
type: Article
---

# What is a GLM?

GLM is an ERC-20 utility token token, used as a currency to pay for renting resources from Golem Network Providers.

## Where to buy GLM?

You can acquire GLM on major crypto exchanges, but probably the most convenient way is to use our [Onboarding portal](https://glm.golem.network) where you will be assisted through the whole process.

# GLM, GNT, and tGLM tokens explained

The Golem Network Token (`GNT`) is a legacy Golem Network token, created in 2016 before the ERC-20 standard was introduced.

Golem Network began the migration to `GLM`, a new, ERC-20 compliant token, at the end of 2020. The migration enabled the Golem Network to leverage Layer 2 solutions for payments, decentralized exchanges, and DeFi.

Currently, the GLM token is the one, used as currency for peer-to-peer transactions on the Golem Network.

The migration from GNT to GLM is still ongoing and users can convert their GNT to GLM at a 1:1 ratio. The total supply of GLM will be the same as GNT, capped at 1 billion tokens.

If you still possess the GNT token and want to migrate to the new GLM token then go to https://migrate.golem.network/.

The token tGLM (t for test) is used on test blockchains such as Holesky, and Mumbai, (in the past: Goerli, Rinkeby). It has no real financial value and is used to facilitate running applications on the testnet.

# Testnet / Mainnet, Addresses and Wallets

`Testnet` means that part of the Golem Network, that accepts payments on test networks. By default the requestor node uses testnet.
Requestor users can select their preferred blockchain. Their demand will be matched by offers from providers that accept payments on test blockchains. Golem Network and its community operate some providers on the testnet that serve as a testing environment for developers.
`yagna payment fund` is a command to obtain tokens necessary to run applications on the `testnet`: both tGLM and the chain native token used to pay gas fees.

`Mainnet` is the part of the Golem Network, that accepts payments on production blockchains. At this moment we support transactions on Ethereum Mainnet and Polygon, but due to the high gas fees on the Ethereum Mainnet, we recommend using Polygon.  
Provider configuration by default accepts payments on production networks.
To operate on the Mainnet the requestor needs to supply his Yagna wallet with GLM and gas tokens on the respective network. On Polygon you'll need GLM and MATIC.
Golem facilitates the process of acquiring GLMs and Matics on our Onboarding Page.

(Note, the term `Mainnet` is also used to identify the Ethereum main blockchain: in such a case we refer to it as `Ethereum Mainnet`).

When you run the Yagna daemon for the first time, it creates a set of addresses on all supported blockchains (both test and production ones) and provides a wallet to store them.
All have the same address, however, they are operated on different blockchains, thus they are separate.
This address is used to identify your node ID (so must be unique) and by default, this is the address used to pay from and receive payments - on the network you had agreed to operate between the Provider and Requestor.

You can check your ID using `yagna id show`.

If you prefer to receive to a different address you can configure a separate address used only to receive payments.

If you would like to use another blockchain address to pay from, you need to import a private key to Yagna (`yagna id create --help` for details on flags and options).
You can also export the private key Yagna is using (`yagna id export --help`).
By default, Yagna is importing and exporting keys in [secret storage format](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition).

## How the payment network is selected

Providers, by default, accept payments on both Polygon and Ethereum Mainnet. Users can change this setting using `golemsp run --payment-network <network>`.

Requestors in their demands define their preferred payment network(s). Golem Network matches demands with offers and automates the process of agreeing on what blockchain will be used for payments. The set of parameters describing the payment driver, the blockchain network, and the token is called the payment platform.

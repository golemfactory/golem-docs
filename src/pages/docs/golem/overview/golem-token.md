---
title: Golem Tokens explained.
description: Introduction to Golem Network Tokens, addresses, and networks
type: Article
---

# What is a GLM?

GLM is an ERC-20 utility token token, used as a currency to pay for renting resources from Golem Network providers.

## Where to acquire GLM?

### Buy

You can acquire GLM on major crypto exchanges:

- decentralized:
  - [Quick Swap](https://quickswap.exchange/)
  - [Uniswap](https://uniswap.org/)
- and centralized platforms:
  - [Binance](https://www.binance.com/)
  - [Coinbase](https://www.coinbase.com/)
  - [Crypto.com](https://crypto.com/)
  - [OKX](https://www.okx.com/)
  - [Gate.io](https://www.gate.io/)
  - [KuCoin](https://www.kucoin.com/)
  - [HTX](https://www.htx.com/)
  - [Bithumb](https://www.bithumb.com/)

{% alert level="warning" %}

Note that due to transaction costs on the Ethereum mainnet, we recommend choosing the Polygon network for your payments. Therefore you should rather acquire GLM directly on the Polygon network to avoid the cost of bridging them from Ethereum.

{% /alert %}

Another way is to use our [Onboarding portal](https://glm.golem.network) where you will be assisted through the whole process.

You will be redirected to this portal when you run the following command:

```
yagna payment fund --network=polygon
```

### Earn

You can also earn GLM for renting your hardware when you act as a [provider](/docs/providers).

### Test Network for Developers

Specifically designed for new participants in the Golem network and developers experimenting with their projects, this test network introduces "tGLM," a testnet token. tGLM is a simulated version of the Golem token (GLM) used exclusively within the Golem testnet. It's important to note that tGLM holds no real-world value, serving solely for development and testing purposes within the Golem Network.

# GLM, GNT, and tGLM tokens explained

The Golem Network Token (`GNT`) is a legacy Golem Network token, created in 2016 before the ERC-20 standard was introduced.

Golem Network began the migration to `GLM`, a new, ERC-20 compliant token, at the end of 2020. The migration enabled the Golem Network to leverage Layer 2 solutions for payments, decentralized exchanges, and DeFi.

Currently, the GLM token is the one, used as currency for peer-to-peer transactions on the Golem Network.

The migration from GNT to GLM is still ongoing and users can convert their GNT to GLM at a 1:1 ratio. The total supply of GLM will be the same as GNT, capped at 1 billion tokens.

If you still possess the GNT token and want to migrate to the new GLM token then go to [https://migrate.golem.network/](https://migrate.golem.network/).

The token tGLM (t for test) is used on test blockchains such as hoodi, and Mumbai, (in the past: Goerli, Rinkeby). It has no real financial value and is used to facilitate running applications on the testnet.

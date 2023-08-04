---
Description: Better solution for computation cost reimbursements
---

# Layer 2 payments

## The reason

While it is possible to process payments for the services delivered on the Golem Network on the Ethereum blockchain, the preferable payment option is to use Polygon.

When payments are performed directly on Ethereum, each payment must be executed as a transaction on the main chain which incurs a fee required for the transaction to be mined and included in the blockchain. The problem becomes much more pronounced whenever the average gas price or the price of the ETH token - which every Ethereum transaction fee is paid with - rises.

## Enter layer 2

[Migration of our token to a new, ERC-20-compliant contract](https://glm.golem.network/) enabled us to not only leverage decentralized exchanges and other DeFi platforms on Ethereum but most importantly, made it possible to utilize a variety of Layer 2 solutions popping up within the Ethereum ecosystem.

The common feature of all the platforms gathered under the "Layer 2" umbrella is that they move most of the transactions to their side chains while maintaining a varying degree of synchronization with the base Ethereum chain. 

As Layer 2 solutions implement their ways to ensure the integrity of their side chains, their cost of a singular transaction is reduced, sometimes by several orders of magnitude. The usual tradeoff is some level of centralization which, arguably, reduces the trustless-ness and thus, to a smaller or larger extent, also the security of users' funds.

### Polygon

Formerly dubbed "Matic", Polygon is becoming a de-facto standard for a lot of decentralized apps in the Ethereum space. Technically, it could be argued that it's not a "Layer 2" solution as it doesn't keep in sync with Ethereum but rather maintains its side chain, connected to the Ethereum main chain with a set of inter-chain bridges.

What makes Polygon attractive is that its chain is fully compatible with Ethereum, making all the smart contracts, wallets, and other applications currently working with Ethereum immediately usable on Polygon. One noticeable difference is that in place of the ETH token, the Polygon chain uses its own MATIC token to pay the transaction fees.

The consensus on Polygon's mainnet chain is maintained by a carefully selected and somewhat decentralized set of validator nodes who use a proof-of-stake mechanism, whereby the validators stake their MATIC tokens. Because of this setup and because no active synchronization with Ethereum is attempted, the costs of transactions are several orders of magnitude lower than on Ethereum.

A user wishing to enter and exit Polygon - that is transfer funds between Polygon and the Ethereum mainnet - needs to use a bridge - a special kind of contract that locks user's funds on one chain and transfers them a respective amount on the other chain. Because those bridges need to work on the Ethereum, they're pretty costly to interact with. 

The good news is that a user having funds on Polygon - e.g. someone who received tokens as a Golem provider - may not have an immediate need to exit from Polygon to mainnet as there are a lot of centralized and decentralized exchanges and other kinds of DeFi solutions already operating directly _on_ the Polygon chain.

Moreover, from the perspective of Golem requestors, Polygon is currently an indisputably superior solution because the ratio between the amounts paid for computing resources and the transaction fees is much more favorable than on the main chain or zkSync. 

## Current support in Golem

The providers are ready to receive payments on any of the supported platforms - be it the Ethereum or Polygon. Obviously, by default, they expect those payments to be made on the respective mainnet chains, however, Requestors during negotiations are expected to limit their demands to providers that accept payments on the Polygon.

On the other hand, because we assume requestors will first start by testing the ground using their just-created apps on a testnet, the default payment platform for Requestor nodes is Goerli.

When you run `yagna payment fund` on testnet, Golem initializes a new account from our custom faucet (a service that transfers test tokens to an address that asks for it) which provides it with test ETH and GLM tokens.

Of course, you also need to enable your accounts' sender mode, which is done using `yagna payment init`. 

If you're interested in running a requestor on the Polygon Ethereum mainnet, to be able to leverage the main pool of Golem providers, please refer to:

[Using Golem on the mainnet](./mainnet_intro.md)

Please also see how you can send GLM tokens from the Ethereum Mainnet to Polygon and vice versa:

[GLM  mainnet polygon conversion](./conversion.md)

## Further reading

* [Polygon](https://polygon.technology/technology/)
* [GLM token on Polygon](https://polygonscan.com/token/0x0b220b82f3ea3b7f6d9a1d8ab58930c064a2b5bf)
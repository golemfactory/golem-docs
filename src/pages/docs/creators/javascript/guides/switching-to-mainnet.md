---
Description: How to move and ensure the safety of your funds when operating on mainnet
---

# Using Golem on Mainnet

!!! Warning
This section is aimed mainly at **requestors** wishing to switch from running simple test tasks on our development subnet (testnet) to launching production payloads utilizing the vast number of providers on the public subnet.

If you are a requestor:

* You need to configure your requestor agent to negotiate Polygon or Ethereum as a payment platform. You can find a JS example [here](../Ncreators/javascript/examples/mainnet.md).
* Next, you need to [enable payments](../Ncreators/javascript/examples/tools/your-golem-wallet.md) on the platform you choose (Polygon on Ethereum).

Okay, so while technically we now know how to hand out tasks to providers on paid networks, in the context of running **Golem on the mainnet**, a few important questions remain largely unanswered:

* How to **choose a payment platform** - ERC-20 vs Layer2
* How to **monitor the status of your wallet**
* How to **secure access to the funds** in your Golem wallet if things go haywire?
* How do you **get funds to your requestor** so you can use them to pay for the tasks?
* How do you **get funds out of a Golem node** if you don't need them there anymore?


## ERC-20 vs Layer2

The most important distinction in basically every piece of payment-related activity, both when you consider transactions between the network's nodes but also when talking about getting funds in and out of Golem is whether you're using the regular ERC-20 token directly on the Ethereum blockchain or whether you're using Polygon.

While direct, on-chain transactions using ERC-20-based tokens have long become the daily bread for the Ethereum mainnet and constitute a significant part of more than a million transactions passing through the chain each day, the ETH's price and the average gas prices make it almost completely useless as a means of exchange in Golem where the values paid will usually be orders of magnitude smaller than the transaction fees.

Of course, if you're willing to accept that disproportion, you may continue to use the Ethereum mainnet payments but for the majority of Golem node users, **Polygon** will be the main platform both when paying for tasks and receiving payments for their execution.

For more information regarding Layer 2 and Polygon, please refer to our introduction to [Layer 2 payments](payment-layer-2.md):

## How to monitor the status of your wallet

There are a number of the `Yagna` commands that will enable you to monitor the status of your wallet.

They will let you check the address of the wallet, check the status, and enable payments from it. Their usage is illustrated [here]()


## Securing your Golem wallet

Golem provides a procedure to backup your wallet in a secure way, as well as to restore it to the new Yagna installation. 
Please follow the instructions provided in [Golem wallet backup](../Ncreators/javascript/examples/tools/wallet-backup.md) and [Restore Golem wallet](../Ncreators/javascript/examples/tools/wallet-restore.md) tutorials.

## Getting funds to your requestor

Note: To provide payments in GLM on blockchains you will need both GLMs and the tokens required to pay for the gas.
Just like any transactions on the Ethereum Mainnet require ETH, operations on the Polygon network require Polygon's equivalent - MATIC.

### On test network

You can top up your wallet with the following command:

```bash
yagna payment fund
```
### On paid network

Note: To provide payments in GLM on blockchains you will need both GLMs and the tokens required to pay for the gas.
Just like any transactions on the Ethereum Mainnet require ETH, operations on the Polygon network require Polygon's equivalent - MATIC.

#### Acquiring MATICS directly on Polygon and converting some of them to GLMs

1. Find an exchange platform that enables you to buy MATIC for FIAT [i.e. Ramp](https://ramp.network/).
2. Buy MATICs on Polygon
3. Swap some of MATICs to GLMs on uniswap

#### Acquiring MATIC or GLM tokens on Polygon from Ethereum Mainnet

**Go to** [**Polygon Website**](https://wallet.polygon.technology)

1. Select **Proof of Stake** and then **Native Bridge** (in the Wallet Features section)
2. Connect your wallet
3. Choose the token you want to get and follow the instructions

### Swapping MATIC and GLM tokens on Polygon

**Go to** [**Polygon Website**](https://wallet.polygon.technology)
1. Select **Proof of Stake** and then **Swap** (in the Wallet Features section)
2. Connect your wallet
3. Choose the token you want to get and follow the instructions


## Getting your funds out of the Golem node

You can consider one of the following options:

* swapping GLM tokens to MATIC and selling them directly on a trading platform or
* bridging them to Ethereum Mainnet 

Note:

It is easier to access your ERC-20 tokens by exporting your wallet (in Ethereum wallet v3 format) and then importing it into MetaMask. 
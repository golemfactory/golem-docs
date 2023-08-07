---
description: Sending GLM from the Ethereum Mainnet to Polygon and back.
---

# Mainnet / Polygon GLM Conversion

Since the Beta.4 release of Golem, Polygon network became the default platform for payments between Golem requestors and providers.

While Polygon itself offers countless opportunities in the form of distributed exchanges and other DeFi platforms, one might still want to move their hard-earned GLM tokens to the safety of the Ethereum Mainnet, or conversely, get their mainnet GLMs to Polygon to pay for tasks on Golem.

Whatever your need, there may come a time when you'd like to send your GLMs one way or the other and the instructions below will serve as your guide.

## Prerequisites

* Configure the Metamask wallet extension for Chrome / Firefox / Opera and add your wallet.   


## Ethereum Mainnet to Polygon

**Go to** [**Polygon Website**](https://wallet.polygon.technology/login?next=%2Fbridge) **(Polygon Bridge)**

1. Choose the prefered wallet (This manual will use Metamask as example)

2. Add a permission for the Metamask wallet (Press SIGN > top right corner)

3. Choose the GLM token and follow the instructions (See the image below)

**NOTE** : The transaction fee is overestimated most of the time - in our example, the total cost ended up at around $6.

**(Use the Deposit Tab)**

![](missing_png_deposit.png)

4. Go through the confirmation process

![](missing_png_confirmation.png)

5. Wait until the process is finished (it normally takes around 7-8 minutes) > you can click "View on Etherscan" to see the status of the transaction

![](missing_png_etherscan.png)

## Polygon to Ethereum Mainnet

**Go to** [**Polygon Website**](https://wallet.polygon.technology/login?next=%2Fbridge) **(Polygon Bridge)**

**(Use the Withdraw Tab)**

![](](missing_png_withdraw.png))

**NOTE** : The above screenshot is missing the very last step because of the high gas fee ($60). Just press confirm, sign the transaction in your metamask wallet and it's done.

## MATIC tokens

Apart from the GLM tokens used for payments on the Golem network, one still needs to use the network's base token to pay for gas.

Just like any transactions on the Ethereum Mainnet require ETH, operations on the Polygon network require Polygon's equivalent - MATIC.

### Obtaining MATIC tokens

1. Go to "Swap for Gas Token" -> [https://wallet.polygon.technology/gas-swap](https://wallet.polygon.technology/gas-swap)
2. Choose the required amount (Minimum = 1 MATIC) and follow the instructions (See the image below)

![](](missing_png_swap_1.png))

3. You can check how much MATIC you have using the "Assets on Polygon" tab![](](missing_png_swap_2.png))

!!! Info
Just for reference, currently (as of March 23rd, 2022), the transaction fees for an ERC-20 transfer on Polygon oscillate around slightly above 0.001 MATIC so converting even the minimal value of 1 MATIC will get you enough to pay gas fees of hundreds of GLM transfers.



### Acquiring GLM and MATIC for FIAT

1. Find an exchange platform that enables to buy MATIC for FIAT [i.e. Ramp](https://ramp.network/).
2. Buy MATICSs on Polygon
3. Swap some of MATICs to GLMs on uniswap
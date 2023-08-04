---
Description: Your Golem wallet and Yagna setup for Mainnet payments.
---

In this article we present usage examples related to management of you Yagna wallet.

* Checking the wallet address
* Enabling mainnet accounts
* Checking the status of the wallet
* Getting test funds


!!! Prerequisites
Yagna daemon is up and running

# Your Golem wallet address

Golem's wallet is automatically initialized for you the first time you start your `yagna` daemon and thus, an address associated with it is also generated automatically.

To have any kind of funds transferred to your Golem's wallet, you'll need its address. You may obtain it using the `id` command:

```bash
yagna id show
```

The value described as `nodeId` in the output is the Ethereum address of your Golem node and it's also the address of its wallet. Note it down so you can use it to supply your node with funds.


## Enable the mainnet account

In the current version of the requestor's set-up, the daemon is configured to use the Goerli testnet by default. Also, all accounts are initialized in the receiver mode by default so you need to enable them as a sender (that's the reason we're adding the `--sender` flag below).

To enable the daemon to use the mainnet, you'll need to instruct it to use a command appropriate to your desired mainnet payment platform.
=== "Polygon"
    ```bash
    yagna payment init --sender --network=polygon --driver=erc20
    ```
=== "Ethereum mainnet"
    ```bash
    yagna payment init --sender --network=mainnet --driver=erc20
    ```

!!! Warning
Again, unless you have good reasons not to, we recommend using Polygon for the lowest transaction fees.

!!! Info
The initialization must be performed after every restart of the `yagna` daemon.

## Checking the status of your accounts

Depending on whether you're mainly running a provider node or a requestor one, your default network (blockchain) may be different.

Because of that, when you run `yagna payment status` to verify the state of your payment account and the amount of GLM tokens you have at your disposal, you may need to add the specific `network` and `driver` parameters to point to the network/driver combination that you're interested in.

In the context of running Golem on mainnet, here are the commands for each of the supported mainnet platforms:

=== "Polygon"
    ```bash
    yagna payment status --sender --network=polygon --driver=erc20
    ```

=== "Ethereum mainnet"
    ```bash
    yagna payment status --sender --network=mainnet --driver=erc20
    ```

## Sending test funds to your account

You can top up your wallet with test GLMs by running:

```bach
yagna payment fund
```

Golem will transfer test tokens from our custom faucet (a service that transfers test tokens to an address that asks for them).
Note, you also need to enable your accounts' sender mode, which is done using `yagna payment init`. 



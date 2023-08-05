---
Description: Your Golem wallet and Yagna setup for Mainnet payments.
---

In this article we present commands related to daily management of you Yagna.

* Checking the wallet address
* Checking the status of the wallet
* upgrading Yagna


!!! Prerequisites
Yagna daemon is up and running

# Your Golem wallet address

Golem's wallet is automatically initialized for you the first time you start your `yagna` daemon and thus, an address associated with it is also generated automatically.

To have any kind of funds transferred to your Golem's wallet, you'll need its address. You may obtain it using the `id` command:

```bash
yagna id show
```

The value described as `nodeId` in the output is the Ethereum address of your Golem node and it's also the address of its wallet. Note it down so you can use it to supply your node with funds.


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

## Upgrading Yagna 

!!! Error 
missing example


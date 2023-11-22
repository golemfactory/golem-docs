---
title: Ray on Golem mainnet guide 
pageTitle: Step-by-Step guide to running the Ray on Golem cluster on the mainnet 
description: Learn how to run your Ray on Golem cluster on the mainnet 
type: guide 
---

# Ray on Golem mainnet guide

The most common way of starting your adventure with Ray on Golem is by trying it out on the Golem testnet.
The testnet nodes are not very powerful and there are not many of them. 
At the same time, it provides a sufficient environment to see how everything works and to test your Ray applications on.

As your application gets more complex and you need more power, you should move to the mainnet. There are more providers, and the machines they run on are more powerful. However, you have to pay to use them.

There are a couple of considerations when entering the mainnet:
- [Mainnet in the cluster yaml](#mainnet-in-the-cluster-yaml) - switching your Ray on Golem cluster to use the mainnet
- [Payments](#mainnet-payments) - operating on the mainnet might be cheap, but you still need to pay the providers running your Ray on Golem cluster
- [Funds onboarding](#mainnet-funds-onboarding) - when you don't have mainnet funds, Ray on Golem will guide you to get them
- [Budget Control](#budget-control) - Ray on Golem provides a couple of mechanisms to let you control how much you spend
- [Finding providers](#finding-providers) - the Golem Network mainnet is peer-to-peer, meaning that the more nodes there are the more time it is required for information about them to reach you


Check out [the online providers](https://stats.golem.network/network/providers/online) if you are curious about what kind of machines are available on the mainnet.


## Mainnet in the cluster yaml

Switching to the mainnet is as easy as changing the `provider.parameters.network` property in your [cluster yaml](/docs/creators/ray/cluster-yaml):
- `network: "goerli"` stands for the testnet
- `network: "polygon"` stands for the mainnet

That is the only change required to start your Ray on Golem cluster on the mainnet.

If you don't have any funds, `ray up` will fail and direct you to our onboarding portal which will guide you through obtaining them.

Please consider using [budget control](#budget-control) mechanisms to manage your spending.

## Mainnet payments

Payments within the Golem Network take place on the [Polygon](https://polygon.technology) blockchain and require some GLM tokens (to pay the providers) and MATIC (for payment transaction fees).

Feel free to learn more about [mainnet payments and funding your Golem node](/docs/creators/javascript/guides/switching-to-mainnet).

Note that the funds you spend on your Ray on Golem cluster don't go to Golem Factory. The GLMs go directly to providers you rent the nodes from and the MATICs go directly to Polygon blockchain validators who enable your payments.

## Mainnet funds onboarding

In case you try to start a mainnet cluster without sufficient funds, `ray up` will fail and print a link to our onboarding portal.

```bash
ray up golem-cluster.yaml --yes
```
```
(todo: ray up output with link to onboarding portal)
```

Even if you do have the required funds, `ray up` will nevertheless print the onboarding link as a reminder, in case you'd like to top up your wallet.

The onboarding process is a convenient and effortless way of providing your Ray on Golem node with funds allowing it to run on mainnet.

Initially, your Ray on Golem node generates and later manages its own Ethereum wallet that is uses to perform transactions. This wallet starts empty and Ray on Golem is able to transparently obtain testnet tokens when you run it on testnet. 

To fill it with mainnet funds, the onboarding portal guides you through the creation of a separate, web-browser wallet, getting GLM and MATIC tokens there, and finally transferring them to the wallet used by Ray on Golem.

Of course, if you already have your own Ethereum wallet with GLM and MATIC tokens, you don't have to get new ones. Just connect your own wallet and transfer enough of them to Ray on Golem. 

### Funds safety

When handling real funds, it is generally a good idea to [back up your Ray on Golem wallet](/docs/providers/wallet/backup). 
Note that Ray on Golem doesn't directly support password-locked wallets yet. Therefore, we recommend operating with low amounts of funds for the time being.

To proceed with the above instructions you will need to access the Golem node service (`yagna`). 
Normally, it should be running in the background after the first successful `ray up`. Other than that, you can always start it manually with `yagna service run` command.

Note that, if you lock your wallet with a password, you will need `yagna` to unlock it every time it starts. Also, remember that `ray up` starts the `yagna` service if it doesn't find it running.

## Budget control

Ray on Golem provides a couple of mechanisms to give you control over your spending:
- [hard limit](/docs/creators/ray/cluster-yaml#spending-hard-limit) of spending on each Ray on Golem cluster (from `ray up` to `ray down`)
- [limit of provider prices](/docs/creators/ray/cluster-yaml#maximum-provider-prices) accepted by Ray on Golem
- [choosing the cheapest providers](/docs/creators/ray/cluster-yaml#choosing-the-cheapest-providers-maximum-expected-usage-cost) based on your expected cluster life duration and average load
- [network stats tool](/docs/creators/ray/ray-on-golem-cli#network-stats) helping you to set price limits reasonably


## Finding providers

Golem Network is peer-to-peer, which means that providers' proposals are not always available at first. They get broadcasted only from time to time.

This means that when you first start Ray on Golem up it might take a while to find a provider matching all your requirements.

Ray on Golem is using the Golem node (`yagna`) for interacting with the network.
The `ray up` starts it if it is not running, but `ray down` doesn't stop it. 
This way the subsequent `ray up` executions benefit from a faster node discovery.

Of course, you might want to disconnect from the Golem network for a while - read the [complete shutdown](/docs/creators/ray/troubleshooting#lack-of-a-complete-cleanup-on-shutdown) article to learn how to do that.

{% docnavigation title="See also" %}
- [Ray on Golem introduction](/docs/creators/ray)
{% /docnavigation %}

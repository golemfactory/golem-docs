---
title: Ray on Golem mainnet guide 
pageTitle: Step-by-Step guide to running the Ray on Golem cluster on the mainnet 
description: Learn how to run your Ray on Golem cluster on the mainnet 
type: guide 
---

# Ray on Golem mainnet guide

The most common way of starting your adventure with Ray on Golem is by trying it out on the Golem testnet.
The testnet nodes are not very powerful and there are not many of them. 
It is enough to see how everything works and test your Ray application on.

When your application is ready, and you need more power, you should move to the mainnet - there are more nodes, and the nodes themselves are more powerful, but you have to pay to use them.

There are a couple of considerations when entering the mainnet:
- [Switching to the mainnet](#switching-to-the-mainnet) - switching to the mainnet is as simple as changing on property in the cluster yaml (besides getting funds)
- [Payments](#mainnet-payments) - operating on the mainnet might be cheap, but you still need to pay the providers running your Ray on Golem cluster
- [Funds onboarding](#mainnet-funds-onboarding) - when you don't have mainnet funds, Ray on Golem guides you to get them
- [Budget Control](#budget-control) - Ray on Golem provides a couple of mechanisms to let you control how much you spend
- [Nodes discovery](#finding-providers) - the Golem Network mainnet is peer-to-peer, meaning that the more nodes there are the more time it is required for information about them to reach you


Check out [the online providers](https://stats.golem.network/network/providers/online) if you are curious about what kind of machines are available on the mainnet.


## Mainnet in the cluster yaml

Switching to payment is as easy as changing the `provider.parameters.network` property in your [cluster yaml](/docs/creators/ray/cluster-yaml):
- `network: "goerli"` stands for the testnet
- `network: "polygon"` stands for the mainnet

If you have funds this is the only change you are required to make to start your Ray on Golem cluster on the mainnet - the `ray up` will know what to do.

If you don't have the funds, `ray up` will fail and will direct you to our onboarding portal which will guide you to getting them.

Please consider using [budget control](#budget-control) mechanisms to manage your spending.

## Mainnet payments

Payments within the Golem Network take place on the [Polygon](https://polygon.technology) blockchain and require some GLM tokens (to pay the providers) and MATIC (for payment transaction fees).

Feel free to learn more about [mainnet payments and funding your Ray on Golem](/docs/creators/javascript/guides/switching-to-mainnet) in general.

Note that the funds you spend on your Ray on Golem cluster don't go to Golem Factory. The GLMs go directly to providers you rent the nodes from and the MATICs go directly to Polygon blockchain validators who enable your payments.

## Mainnet funds onboarding

When your cluster yaml sports `network: "polygon"` your `ray up` attempts to run the cluster on the Golem mainnet.

If you don't have the mainnet funds, it will fail and print a link to our onboarding portal.

```bash
ray up golem-cluster.yaml --yes
```
```
(todo: ray up output with link to onboarding portal)
```

The onboarding link will be also printed in case you have the mainnet funds (it won't cause `ray up` to fail in this case) - so you can always top up your wallet.

The idea behind the onboarding is that when you first start Ray on Golem it generates a fresh (but empty) wallet for you. 
This wallet is then used for both testnet and mainnet funds
When you run on the testnet, Ray on Golem transparently gets the testnet funds for you from our testnet faucet.

The onboarding portal guides you through the creation of a web-browser wallet of your choice, getting funds there, and finally transferring GLMs and MATICs to the wallet used by Ray on Golem.
Of course, if you have a wallet you don't have to create it, if you have funds there, you don't have to get new ones. 
The ultimate goal is to have funds inside Ray on Golem.

## Funds safety

When handling real funds it is generally a good idea to [back up your Ray on Golem wallet](/docs/providers/wallet/backup). 
Note that we don't fully support the flows around this though. Consider operating with low amounts of money for the time being.

To proceed with the above instructions you will need to access the Golem node service `yagna`. 
It should be running in the background after the first successful `ray up`, but if it is not, you can always start it up with `yagna service run` command.

Note that, if you lock your wallet (its private key actually), you will need to unlock it every time you start the Golem node (`ray up` starts it up if it is not running). 

## Budget control

Ray on Golem provides a couple of mechanisms to give you control over your spending:
- [hard limit](/docs/creators/ray/cluster-yaml#spending-hard-limit) of spending of each Ray on Golem cluster (from `ray up` to `ray down`)
- [limit of provider prices](/docs/creators/ray/cluster-yaml#maximum-provider-prices) accepted by Ray on Golem
- [choosing the cheapest providers](/docs/creators/ray/cluster-yaml#choosing-the-cheapest-providers-maximum-expected-usage-cost) based on your expected cluster life duration and average load
- [network stats tool](/docs/creators/ray/ray-on-golem-cli#network-stats) helping you to set price limits reasonably


## Finding providers

Golem Network is peer-to-peer, which means that providers' proposals are not always available at first. They get broadcasted only from time to time.

This means that when you first start up Ray on Golem it might take a while to find a provider matching all your requirements.

Ray on Golem is using the Golem node (`yagna`) for talking with the network.
The `ray up` starts it up if it is not running, but `ray down` doesn't stop it. 
This way the subsequent `ray up` executions benefit from a faster node discovery.

Of course, you might want to disconnect from the Golem network for a while - read the [complete shutdown](/docs/creators/ray/troubleshooting#lack-of-a-complete-cleanup-on-shutdown) article to learn how to do that.


{% docnavigation title="See also" %}
- [Ray on Golem introduction](/docs/creators/ray)
{% /docnavigation %}

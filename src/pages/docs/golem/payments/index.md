---
Description: How payments are made between the providers and requestors within the Golem Network.
---

# Payments in Golem explained

## Introduction

The basic premise of the Golem Network is as follows:

* Providers make some resources available to potential requestors for a price,
* Requestors rent those resources and pay the providers in exchange.

The payments are made with Golem Network's native ERC-20 token, [GLM](https://etherscan.io/token/0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429), using either the Ethereum Mainnet directly or, preferably, one of the [Layer 2 solutions](./payment-layer-2.md).

Of course, such a simplified description only answers the most basic question about the roles of providers and requestors in Golem and defines the actual transaction layer. Below, we'd like to give you a glimpse at the process through which the payments for providers' services are arranged for and paid, without delving into the nature of those services.

## Pay as you go

Currently, the only payment scheme supported in Golem is "pay as you go", otherwise known as payment for the usage of resources.

The costs of an activity are based on a pre-agreed set of coefficients that specify the price the requestor is required to pay for the time the activity is running, the processor time used, and for starting any activity in the first place.

More importantly though, in this payment scheme, the requestor is only required to pay for the resources that the provider has used. To that end, the provider keeps track of that usage and only afterward they can ask the requestor to pay. There are no subscription plans or up-front payments for future usage.

### Pay on agreement termination

The simplest way to achieve payments for the resources used within the scope of a single agreement is for the provider agent to wait until the agreement is terminated (for whatever reason) and issue a single invoice based on the registered usages and the agreed-upon coefficients that translate the usage into the final cost.

The requestor agent then accepts such an invoice and pays the accumulated cost with a single transaction.

That is more or less what Golem's agents have been doing since we first released the new Golem, a.k.a. Yagna and its APIs.

### Transaction costs

One important factor influencing any decisions regarding the payment solutions in Golem is the fact that because all the payments are made using the GLM token, apart from just paying the providers, the requestor also has to bear the cost of the blockchain's transaction fees.

While we were able to cut the transaction fees by orders of magnitude using Layer 2 solutions (initially zkSync and more recently - Polygon), they still constitute a substantial portion of the value of the payment itself.

Naturally, the requestor's aim in such a scenario is to optimize this cost by performing as few transactions as possible. 

Contrariwise, the providers are equally interested in transactions happening as often as possible to ensure they are not left with uncovered, already incurred costs should the agreement be broken by the other side.

### Keep-alive

To partially address this problem, very early on, we introduced a keep-alive mechanism where providers periodically issue debit notes to requestors in relatively short intervals. Those debit notes don't immediately trigger payments but they still carry the accumulated cost information.

That way, on one end, the requestors have the potential to compare the reported cost with their assumptions. On the other, by having those debit notes accepted, the providers can be sure that the requestors are still there and are willing to pay the final invoice.

In this setup, if a requestor fails to accept a debit note before a set timeout, the provider may assume the requestor is no longer interested in keeping the agreement alive and thus, may terminate the agreement at will to stop accumulating the cost that now has little chance to be paid for.

As you may see, this solution is still suboptimal. It still requires the requestor to be, on one hand, present and ready to respond without delay to the provider's debit notes and, on another, to be honest, and pay the invoice that the provider issues at the very end.

While this might be okay for agreements spanning from minutes to several hours, it stops being okay when those agreements may be signed for periods of days or even months. After all, it would be hard to expect the provider to continue working for a requestor based on trust alone.

### Mid-agreement payments

To enable such long-running agreements, in the newest Yagna and its Python API, we're introducing the mid-agreement payments mechanism.

With this mechanism in place, we're supporting two modes of operation. The first one is the already-described above, single payment after the agreement termination and the second involves payments in set, pre-agreed intervals during an agreement.

Because of the reasons we have already discussed, the providers won't want to sign long-running agreements that are only paid after the agreement has finished. At the same time, requestors wish to minimize the transaction fees by paying as seldom as possible.

Thus, both sides have a certain cutoff point for the expected agreement duration. For the providers, it will be a point after which mid-agreement payments are required. Similarly, there's some minimal value of the expected agreement duration above which the requestors will find mid-agreement payments acceptable.

Those acceptable durations are currently set so that there is a significant overlap in the acceptable range for both providers and requestors alike in the default implementations of the Golem SDK and the provider agent.

#### Negotiation

The providers and requestors decide on the usage of mid-agreement payments through a simple negotiation process. In this process, they also select mutually acceptable values of two intervals - the minimal time between consecutive keep-alive debit notes and the minimal separation between subsequent payable debit notes.

#### Payments

With the mid-agreement payments mechanism agreed on and the intervals negotiated, the provider issues payable debit notes periodically throughout the agreement and the requestor processes the payments as those debit notes come in.

Thanks to this arrangement, the requestor doesn't have to pay the transaction fees more often than what's acceptable for them and the provider is not left completely in the lurch if the requestor quits before the agreement is finalized.

It also partially protects against dishonest requestors who would have the provider do some work for them and just choose not to pay - through a software error or a conscious decision.

## Further reading

* [Layer 2 payments](./payment-layer-2.md)


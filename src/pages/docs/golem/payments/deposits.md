---
title: Deposits
description: Indirect payments from end-user to provider with limited requestor involvement.
pageTitle: Golem Network's Deposits - Indirect ERC20 Payments
type: Guide
---

# Deposits

In a classic Golem Payment scheme, there is a single cashflow from Requestor to Provider. Consequently, Requestor is the entity which is responsible for providing funds (GLM + MATIC/ETH) needed to cover Provider's invoices.

![image](https://github.com/user-attachments/assets/256f8021-edfc-4dfd-b383-f432335be6d3)


Since Yagna 0.16, Golem offers a new way to pay for tasks indirectly (via a smart contract) called Deposits. As a result Golem protocol does not require funds for the Provider to be sent from the Requestors wallet. This new payment method covers a use-case whre services created on top of Golem allows end-users to pay for tasks orchestrated by the service. 

![image](https://github.com/user-attachments/assets/56a9fca4-5d92-4900-88db-3121c9a2cfad)


In this scenario:

- Requestor is becoming a Service Owner, who runs Yagna to provide services to the End-sers. Because Provider is payed from End-user funds via Smart Contract, Service Owner does not need to hold any GLM on his wallet at any point in time. MATIC/ETH tokens are still needed to cover trasnactional costs.
- Provider role remains intact. The only difference is new source of payment, it is Smart Contract.
- End user is a new role. A person who wants to use Services build on top of Golem Network but is not intrested in setting up and maintaining Yagna node. This role requires some crypto wallet (for instance Metamask) with GLM and MATIC/ETH tokens to create Deposit, which will be used to cover Provider's costs. Thankfully, Metamask setup and required tokens might be easily obtained by End-User via Golem Onboarding Portal - https://glm.golem.network/

What is important, thanks to the Deposit Smart Contract, we are also able to introduce new cashflow from End-user to Service Owner/Requestor. This new cashflow might be used by Service Owner/Requestor to introduce optional service fee, which can be used to make Service Owner/Requestor role profitable.

## Conceputal scheme of operation

1. The End-user is guided by the Service deployed by Service Owner to created a deposit on a Smart Contract. Deposit locks some amount of funds for a specific timeframe while allowing the service to transfer those funds. Optionally Deposit might also lock some Service Owner Fee, which will be released after Deposit is closed.
2. The Service (acting as a Requestor) performs work on Golem, and whenever the provider requests funds (either via a mid-agreement payment or an invoice), the funds are transferred from the deposit to the provider.
3. When work is done, the deposit is closed and the extra funds are transferred back to the end-user.

## Extendability

We provide an implementation of the deposit contract interface on both [holesky](https://holesky.etherscan.io/address/0x7167E731b0031d4326d46C8D1E1c2E111227aB5f#code) and [polygon](https://holesky.etherscan.io/address/0x7167E731b0031d4326d46C8D1E1c2E111227aB5f#code). Those implementations are ready to be used out of the box. However interface is flexible and allows different service-specific features to be implemented. In our example, a flat fee for the service is added, so that the payment for the service may be contractually bound to the service performing its duty.

## Specification

The interface and examples of use are documented in [golem-architecture](https://github.com/golemfactory/golem-architecture/blob/scx1332/deposits/specs/deposits.md).

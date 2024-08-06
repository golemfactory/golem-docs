---
title: Deposits
description: Indirect payments from end-user to provider with limited requestor involvement.
pageTitle: Golem Network's Deposits - Indirect ERC20 Payments
type: Guide
---

# Deposits

In a classic Golem Payment scheme, there is a single cash flow from Requestor to Provider. Consequently, the Requestor is the entity responsible for providing funds (GLM + MATIC/ETH) needed to cover the Provider's invoices.

![image](/golem/payments/direct-payment.png)

Since Yagna 0.16, Golem offers a new way to pay for tasks indirectly (via a smart contract) called Deposits. As a result, the Golem protocol does not require funds for the Provider to be sent from the Requestor wallet. This new payment method covers a use-case where services created on top of Golem allow end-users to pay for tasks orchestrated by the service.

![image](/golem/payments/deposit-payment.png)

In this scenario:

- Requestor is becoming a **Service Owner**, who runs Yagna to provide services to the **End Users**. Because the Provider is paid from End-user funds via Smart Contract, the Service Owner does not need to hold any GLM in his wallet at any point in time. MATIC/ETH tokens are still needed to cover transaction costs, however.
- **Provider** role remains intact. The only difference is a new source of payment, it is a Smart Contract.
- The **End User** role is a new one. A person who wants to use Services built on top of the Golem Network but is not interested in setting up and maintaining the Yagna node. This role requires some crypto wallet (for instance Metamask) with GLM and MATIC/ETH tokens to create a **Deposit**, which will be used to cover the Provider's costs. Thankfully, Metamask setup and required tokens might be easily obtained by End-User via Golem Onboarding Portal - https://glm.golem.network/

What is important, thanks to the Deposit Smart Contract, we are also able to introduce new cash flow from End-User to Service Owner/Requestor. This new cash flow might be used by the Service Owner/Requestor to introduce an optional service fee, which can be used to make the Service Owner/Requestor role profitable.

## Conceptual scheme of operation

1. The Service Owner deploys the service.
2. The Service End-user creates a deposit on a Smart Contract. (The service should guide the Ent User through the required steps). Deposit locks some amount of funds for a specific timeframe while allowing the service to transfer those funds. Optionally Deposit might also lock some Service Owner Fee, which will be released after the Deposit is closed.
3. The Service (acting as a Requestor) performs work on Golem, and whenever the provider requests funds (either via a mid-agreement payment or an invoice), the funds are transferred from the deposit to the provider.
4. When work is done or the deposit timeframe expires, the deposit is closed and the extra funds are transferred back to the end-user.

## Extendability

We provide an implementation of the deposit contract interface on both [holesky](https://holesky.etherscan.io/address/0x7167E731b0031d4326d46C8D1E1c2E111227aB5f#code) and [polygon](https://holesky.etherscan.io/address/0x7167E731b0031d4326d46C8D1E1c2E111227aB5f#code). Those implementations are ready to be used out of the box. However, the interface is flexible and allows different service-specific features to be implemented. In our example, a flat fee for the service is added, so that the payment for the service may be contractually bound to the service performing its duty.

## Specification

The interface and examples of use are documented in [golem-architecture](https://github.com/golemfactory/golem-architecture/blob/master/specs/deposits.md).

# Deposits

Yagna offers a way to pay for tasks indirectly or through a contract, as the Golem protocol does not require funds for the provider to be sent from the requestors wallet, which we support via the so-called Depoists. The use-case covered is creating services on top of Golem that allow end-users to pay for tasks orchestrated by the service, without having the service hold funds by itself at any point in time.

## Conceputal scheme of operation

1. The end user is guided by the service to created a deposit on a contract, which locks some amount of funds for a specific timeframe while allowing the service to transfer those funds.
2. The service (acting as a requestor) performs work on Golem, and whenever the provider requests funds (either via a mid-agreement payment or an invoice), the funds are transferred from the deposit to the provider.
3. When work is done, the deposit is closed and the extra funds are transferred back to the end-user.

## Extendability

While we provide an implementation of the [deposit contract interface](https://holesky.etherscan.io/address/0x7167E731b0031d4326d46C8D1E1c2E111227aB5f#code), the interface is flexible and allows different service-specific features to be implemented. In our example, a flat fee for the service is added, so that the payment for the service may be contractually bound to the service performing its duty.

## Example service

A service for scanning files for viruses is implemented at [https://deposit.dev.golem.network](https://deposit.dev.golem.network). The source code is [located here](https://github.com/golemfactory/deposit-payment-example).

## Specification

The interface and examples of use are documented in [golem-architecture](https://github.com/golemfactory/golem-architecture/blob/scx1332/deposits/specs/deposits.md).
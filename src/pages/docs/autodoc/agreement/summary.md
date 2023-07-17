[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/agreement)

The `.autodoc/docs/json/agreement` folder contains code related to the `Agreement` class and its associated components in the `yajsapi` project. The `Agreement` class represents a contract between a requestor and a provider, providing methods to create, refresh, confirm, and terminate an agreement. The folder also contains configuration classes, a factory class, and a service class for managing agreements.

The `agreement.ts` file defines the `Agreement` class, which provides a high-level interface for creating, managing, and terminating agreements between requestors and providers. The class has methods such as `create`, `refreshDetails`, `getState`, `confirm`, `isFinalState`, and `terminate`. Here's an example of how to use the `Agreement` class:

```javascript
import { Agreement } from "yajsapi";

const agreement = await Agreement.create("proposalId", {
  yagnaOptions: { network: "main" },
  agreementRequestTimeout: 10000,
  agreementWaitingForApprovalTimeout: 10000,
  logger: console,
  eventTarget: window,
});

await agreement.confirm();

const isFinal = await agreement.isFinalState();

await agreement.terminate();
```

The `config.ts` file defines the `AgreementConfig` and `AgreementServiceConfig` classes, which are used to configure the `RequestorApi` for the yajsapi project. These classes set default values for various properties and create a new `RequestorApi` object using the provided configuration.

The `factory.ts` file defines the `AgreementFactory` class, which is responsible for creating new `Agreement` instances. It is not intended to be used directly, but rather through the static `create` method of the `Agreement` class.

The `index.ts` file exports several modules from different files within the yajsapi project, making them available for use in other parts of the project. These modules provide functionality related to creating and managing agreements between providers and consumers in a decentralized network.

The `service.ts` file defines the `AgreementPoolService` class, which is a service used in the `TaskExecutor` of the yajsapi project. It is responsible for managing the creation, release, and termination of agreements between the provider and the consumer. The class provides methods such as `run`, `end`, `addProposal`, `getAgreement`, `releaseAgreement`, `terminateAll`, and `isProviderLastAgreementRejected`.

In summary, the `.autodoc/docs/json/agreement` folder contains essential components for managing agreements in the yajsapi project. These components provide a high-level interface for creating, managing, and terminating agreements between requestors and providers, as well as configuring the `RequestorApi` and managing a pool of agreements.

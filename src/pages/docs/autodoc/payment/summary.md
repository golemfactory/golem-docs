[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/payment)

The `json/payment` folder in the `yajsapi` project contains modules related to handling payments, invoices, debit notes, and accounts. These modules provide a mid-level interface for managing payments and accounts in the project.

The `Accounts` module allows users to manage accounts, retrieve information about requestor's accounts, and create new instances of the `Accounts` class. Example usage:

```javascript
import { Accounts } from "yajsapi";

const accounts = await Accounts.create();
const accountList = await accounts.list();
console.log(accountList);
```

The `Allocation` module is used for creating, releasing, and getting information about allocations, which are designated sums of money reserved for specific payments. Example usage:

```javascript
import { Allocation, AllocationOptions } from 'yajsapi';

const options: AllocationOptions = {
  account: { address: '0x123...', platform: 'ethereum' },
  budget: 1.0,
  payment: { driver: 'erc20', network: 'rinkeby' },
  expires: 1000 * 60 * 30, // 30 min
};

const allocation = new Allocation(options);
```

The `config.ts` file defines classes and interfaces for configuring various aspects of the project, such as payment options, allocation options, and account options. Example usage:

```javascript
import { Allocation, AllocationOptions } from 'yajsapi';

const options: AllocationOptions = {
  account: { address: '0x123...', platform: 'ethereum' },
  budget: 1.0,
  payment: { driver: 'erc20', network: 'rinkeby' },
  expires: 1000 * 60 * 30, // 30 min
};

const allocation = new Allocation(options);
```

The `DebitNote` module represents a Debit Note artifact issued by a Provider to a Requestor in the context of a specific Activity. Example usage:

```javascript
import { DebitNote } from 'yajsapi';

const debitNoteId = '123';
const options = { ... }; // InvoiceOptions object
const debitNote = await DebitNote.create(debitNoteId, options);
```

The `Invoice` module provides the foundation for working with invoices in the Yagna network. Example usage:

```javascript
import { PaymentService, Invoice } from "yajsapi";

const paymentService = new PaymentService();
const invoice = new Invoice();

// Use paymentService and invoice objects for payment-related functionality
```

The `Payments` module handles the payment process, fetching new invoices and debit notes, and dispatching events for each new invoice or debit note. Example usage:

```javascript
import { Payments } from 'yajsapi';

const options = {
  // payment options
};

const payments = await Payments.create(options);

payments.addEventListener('PaymentReceived', (event) => {
  if (event.invoice) {
    // handle new invoice
  } else if (event.debitNote) {
    // handle new debit note
  }
});

// start payment process
await payments.subscribe();

// stop payment process
await payments.unsubscribe();
```

The `Rejection` module is used to handle rejections that occur during the execution of various services. Example usage:

```typescript
import { Rejection, RejectionReason } from 'yajsapi';

function executeService(service: string, amount: number): Promise<void | Rejection> {
  // code to execute the service and handle any rejections
}

async function main() {
  const result = await executeService('exampleService', 100);
  if (result instanceof Rejection) {
    switch (result.rejectionReason) {
      case RejectionReason.UnsolicitedService:
        console.log('Service not allowed');
        break;
      case RejectionReason.BadService:
        console.log('Service not recognized');
        break;
      case RejectionReason.IncorrectAmount:
        console.log('Incorrect amount specified');
        break;
      default:
        console.log('Unknown rejection reason');
    }
  } else {
    console.log('Service executed successfully');
  }
}

main();
```

The `PaymentService` class handles payments for agreements, invoices, and debit notes, providing methods for initializing and stopping the payment service, creating allocations, accepting payments, and processing invoices and debit notes.

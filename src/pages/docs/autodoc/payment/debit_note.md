[View code on GitHub](https://github.com/golemfactory/yajsapi/payment/debit_note.ts)

The `DebitNote` class in the `yajsapi` project is a mid-level class that represents a Debit Note artifact issued by a Provider to a Requestor in the context of a specific Activity. It is used as a notification of the total amount due incurred by the Activity until the moment the Debit Note is issued. This class is expected to be used as a trigger for payment in upfront-payment or pay-as-you-go scenarios. 

The `DebitNote` class extends the `BaseNote` class and has several properties such as `id`, `previousDebitNoteId`, `timestamp`, `activityId`, `totalAmountDue`, and `usageCounterVector`. It also has two static methods: `create` and `refreshStatus`. The `create` method creates a new Debit Note model by calling the `getDebitNote` method of the `InvoiceConfig` object and returns a new `DebitNote` instance. The `refreshStatus` method refreshes the status of the Debit Note by calling the `getDebitNote` method of the `InvoiceConfig` object.

The `DebitNote` class also has two instance methods: `accept` and `reject`. The `accept` method accepts the Debit Note by calling the `acceptDebitNote` method of the `InvoiceConfig` object and dispatches a `PaymentFailed` event if the acceptance fails. The `reject` method rejects the Debit Note by calling the `rejectDebitNote` method of the `InvoiceConfig` object and dispatches a `PaymentFailed` event if the rejection fails.

Overall, the `DebitNote` class provides a way to create, accept, and reject Debit Notes in the `yajsapi` project. Here is an example of how to create a new Debit Note:

```javascript
import { DebitNote } from 'yajsapi';

const debitNoteId = '123';
const options = { ... }; // InvoiceOptions object
const debitNote = await DebitNote.create(debitNoteId, options);
```
## Questions: 
 1. What is the purpose of the `DebitNote` class?
- The `DebitNote` class represents a notification of total amount due incurred by an activity and is expected to be used as a trigger for payment in upfront-payment or pay-as-you-go scenarios.

2. What are the parameters of the `accept` method?
- The `accept` method takes in two parameters: `totalAmountAccepted` (a string representing the total amount accepted) and `allocationId` (a string representing the allocation ID).

3. What is the purpose of the `refreshStatus` method?
- The `refreshStatus` method updates the status of the `DebitNote` instance by fetching the latest data from the API.
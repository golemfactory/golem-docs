[View code on GitHub](https://github.com/golemfactory/yajsapi/stats/invoices.ts)

The code above defines a class called `Invoices` that extends `AbstractAggregator`. The purpose of this class is to provide functionality for managing invoices in the larger project. 

The `Invoices` class has two methods, `getByProviderId` and `getByAgreementId`, which allow the user to retrieve invoices by provider ID or agreement ID respectively. These methods call the `getByField` method inherited from the `AbstractAggregator` class, which takes a field name and a value and returns an array of items that match the given field and value. 

The `Invoices` class also has a method called `beforeAdd`, which is called before adding a new invoice to the aggregator. This method takes a payload object and returns an `InvoiceInfo` object. The purpose of this method is to convert the `amount` field from a string to a number using `parseFloat`. 

The `InvoiceInfo` interface defines the shape of an invoice object, which has an `id`, `providerId`, `agreementId`, and `amount`. The `Payload` interface extends `InvoiceInfo` and adds a `string` type to the `amount` field. 

Overall, the `Invoices` class provides a convenient way to manage invoices in the larger project by allowing the user to retrieve invoices by provider ID or agreement ID, and by automatically converting the `amount` field to a number before adding a new invoice to the aggregator. 

Example usage:

```
const invoices = new Invoices();

// Add a new invoice
invoices.add({
  id: '1',
  providerId: '123',
  agreementId: '456',
  amount: '100.00',
});

// Get all invoices for provider with ID '123'
const providerInvoices = invoices.getByProviderId('123');

// Get all invoices for agreement with ID '456'
const agreementInvoices = invoices.getByAgreementId('456');
```
## Questions: 
 1. What is the purpose of the `AbstractAggregator` class that is being imported?
- The `AbstractAggregator` class is being extended by the `Invoices` class and provides a base implementation for aggregating data.

2. What is the `InvoiceInfo` interface used for?
- The `InvoiceInfo` interface defines the structure of an invoice object, including its `id`, `providerId`, `agreementId`, and `amount`.

3. What does the `beforeAdd` method in the `Invoices` class do?
- The `beforeAdd` method takes in a `Payload` object and returns an `InvoiceInfo` object with the same properties, but with the `amount` property converted from a string to a float.
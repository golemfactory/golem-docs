[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/stats)

The `stats` folder in the yajsapi project contains classes and interfaces for aggregating and managing various types of data, such as activities, agreements, allocations, debit notes, invoices, payments, proposals, providers, tasks, and time intervals. These classes extend the `AbstractAggregator` class, which provides a base implementation for aggregating items into a collection.

For example, the `Activities` class is responsible for managing activity data and provides methods for retrieving activities based on specific criteria, such as `taskId` or `agreementId`. Similarly, the `Agreements` class manages a collection of agreements between a provider and a consumer, allowing for the manipulation of these agreements, such as confirming or rejecting them.

The `Times` class, on the other hand, is responsible for aggregating information about time intervals for a given set of items. It can be used to track the duration of various events or processes for different items, such as tracking the time it takes for different users to complete a task in a web application.

These classes can be used in conjunction with other parts of the yajsapi project to build more complex functionality. For instance, the `Providers` class can be used to aggregate information about providers, which can then be used to display information about providers to the user.

Here's an example of how the `Tasks` class can be used to manage a collection of tasks:

```typescript
const tasks = new Tasks();

const task1 = {
  id: "1",
  agreementId: "A",
  startTime: Date.now(),
};

const task2 = {
  id: "2",
  agreementId: "B",
  startTime: Date.now(),
};

tasks.add(task1);
tasks.add(task2);

const agreementATasks = tasks.getByAgreementId("A");
console.log(agreementATasks); // [{ id: "1", agreementId: "A", startTime: 1234567890, stopTime: 0, retriesCount: 0, status: "pending" }]

tasks.retry("1", 1);

tasks.reject("2", Date.now(), "Failed to allocate resources");

tasks.finish("1", Date.now());
```

In this example, two tasks are added to the `tasks` object, and then various methods are called to update and retrieve information about the tasks. This demonstrates how the classes in the `stats` folder can be used to manage and aggregate different types of data in the yajsapi project.

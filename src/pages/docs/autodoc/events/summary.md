[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/events)

The `events` folder in the yajsapi project contains code that defines a set of custom event classes that can be emitted by the yajsapi API during the execution of a computation on the Golem network. These event classes are defined in the `events.ts` file and are all subclasses of the `BaseEvent` class, which extends the `CustomEvent` class. The `CustomEvent` class is a temporary polyfill that provides a way to create custom events in older versions of Node.js and browsers that do not support the `CustomEvent` API natively.

Developers can use these event classes to listen for specific events and take action when they occur. For example, an application might listen for the `ComputationFinished` event and then retrieve the results of the computation from the Golem network. Here's an example of how to listen for the `ComputationFinished` event:

```typescript
import { ComputationFinished } from 'yajsapi';

// Listen for the ComputationFinished event
document.addEventListener(ComputationFinished.EventType, (event: ComputationFinished) => {
  // Retrieve the results of the computation and do something with them
  const results = event.detail;
  // ...
});
```

The `index.ts` file in the `events` folder exports the modules from the `events.ts` file, making them available for use in other parts of the yajsapi project. By exporting these modules, other files in the project can import them and use their functionality without having to directly access the `events.ts` file. For example, to use the `EventType` class in another file, simply import it like this:

```typescript
import { EventType } from 'yajsapi';
```

In summary, the `events` folder in the yajsapi project provides a set of custom event classes that can be emitted by the yajsapi API during the execution of a computation on the Golem network. These event classes can be used by developers to build applications that interact with the Golem network and respond to specific events. The `index.ts` file exports these modules, making them available for use in other parts of the project and promoting a modular and maintainable codebase.

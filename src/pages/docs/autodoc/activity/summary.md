[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/activity)

The `.autodoc/docs/json/activity` folder contains the core components for managing and executing activities in the yajsapi project. The main class, `Activity`, represents the runtime environment on the provider and allows users to execute exe script commands and capture their results. The `ActivityConfig` class is used to configure and manage an activity, while the `ActivityFactory` class is a factory for creating `Activity` objects.

The `Activity` class has several methods and properties, such as `create`, `execute`, `stop`, and `getState`. It also has interfaces and enums like `ActivityOptions`, `ExeScriptRequest`, and `ActivityStateEnum`. The class uses other modules from the yajsapi project and external libraries, such as `Result`, `StreamingBatchEvent`, `ActivityFactory`, `ActivityConfig`, `Events`, `EventSource`, and `stream`.

Here's an example of how to create and execute an activity:

```javascript
import { Activity } from 'yajsapi';

const agreementId = 'my-agreement-id';
const activity = await Activity.create(agreementId);
const exeScriptRequest = { ... }; // Define your exe script request
const results = await activity.execute(exeScriptRequest);
```

The `ActivityConfig` class allows you to configure an activity with properties like `api`, `activityRequestTimeout`, `activityExecuteTimeout`, and `activityExeBatchResultsFetchInterval`. You can also use the `logger` and `eventTarget` properties for logging and event dispatching.

Here's an example of how to create an activity with custom configuration:

```javascript
import { ActivityConfig } from "yajsapi";

const activityConfig = new ActivityConfig({ activityRequestTimeout: 10000 });
const activity = await activityConfig.api.control.createActivity();
```

The `ActivityFactory` class is used internally within the yajsapi project and should not be used directly. Instead, use the `Activity.create` method to create `Activity` objects.

The `Result` and `StreamingBatchEvent` interfaces in the `results.ts` file define the structure of objects representing the results of script command executions and events that occur during the execution of a batch of script commands. These interfaces are used throughout the project to represent the results and events in a structured way.

In summary, the `.autodoc/docs/json/activity` folder contains essential components for managing and executing activities in the yajsapi project. The `Activity` class is the central component, while the `ActivityConfig` and `ActivityFactory` classes provide configuration and object creation capabilities. The `Result` and `StreamingBatchEvent` interfaces define the structure of results and events related to script command executions.

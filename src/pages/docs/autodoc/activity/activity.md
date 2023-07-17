[View code on GitHub](https://github.com/golemfactory/yajsapi/activity/activity.ts)

The `Activity` class is a mid-level module in the yajsapi project that represents the runtime environment on the provider in accordance with the `Package` specification. It allows users to execute exe script commands and capture their results. 

The class has several methods and properties. The `constructor` method initializes the `Activity` object with an ID, agreement ID, and options. The `create` method is a static method that creates an `Activity` object for a given agreement ID. The `execute` method executes an exe script and returns the results. The `stop` method stops and destroys the `Activity` object. The `getState` method gets the current state of the `Activity` object. 

The `Activity` class also has several interfaces and enums. The `ActivityOptions` interface defines the options for the `Activity` object, such as the Yagna API key, the timeout for sending and creating a batch, and the logger module. The `ExeScriptRequest` interface defines the request for executing an exe script. The `ActivityStateEnum` enum defines the possible states of an `Activity` object, such as "New", "Initialized", "Deployed", "Ready", "Unresponsive", and "Terminated". 

The `Activity` class uses other modules from the yajsapi project, such as `Result`, `StreamingBatchEvent`, `ActivityFactory`, `ActivityConfig`, and `Events`. It also imports modules from external libraries, such as `EventSource` and `stream`. 

The `execute` method has two optional parameters: `stream` and `timeout`. If `stream` is true, the results are streamed using an `EventSource` object. If `stream` is false or undefined, the results are polled using a `Readable` object. The `timeout` parameter specifies the execution timeout. 

The `pollingBatch` method polls the results of a batch execution. It uses the `getExecBatchResults` method from the Yagna API to get the results. If the results are not ready, it waits for a specified interval using the `sleep` method. If the results are ready, it pushes them to the `Readable` object. If the batch is finished, it pushes `null` to the `Readable` object. 

The `streamingBatch` method streams the results of a batch execution. It uses an `EventSource` object to get the results. It parses the results from a string to a `Result` object using the `parseEventToResult` method. If the batch is finished, it pushes `null` to the `Readable` object. 

The `handleError` method handles errors that occur during batch execution. It checks if the error is a timeout error, a terminated error, or a GSB error. If it is a timeout error, it waits for a specified interval using the `sleep` method. If it is a terminated error, it throws the error. If it is a GSB error, it retries a specified number of times using the `sleep` method. If it exceeds the maximum number of retries, it throws an error. 

Overall, the `Activity` class is a useful module for executing exe script commands and capturing their results in the yajsapi project. It provides options for polling or streaming the results and handles errors that may occur during batch execution.
## Questions: 
 1. What is the purpose of the `Activity` class?
- The `Activity` class represents the runtime environment on the provider in accordance with the `Package` specification. It allows for the execution of exe script commands and capturing their results.

2. What are the parameters of the `Activity` constructor?
- The `Activity` constructor takes in three parameters: `id` (activity ID), `agreementId` (agreement ID), and `options` (an object of type `ActivityConfig`).

3. What is the difference between `streamingBatch` and `pollingBatch` methods?
- The `streamingBatch` method uses an `EventSource` to stream results from the server, while the `pollingBatch` method uses polling to fetch results from the server. Both methods return a `Readable` stream of results.
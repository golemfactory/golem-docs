[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/utils)

The `json/utils` folder in the yajsapi project contains utility classes and functions that are used throughout the project for logging, pausing execution, and checking the runtime context. These tools help developers better understand and debug their code, ensuring it runs in the correct environment.

The `ConsoleLogger` class, defined in `consoleLogger.ts`, is a helper class that provides a simple way to log messages to the console. It implements the `Logger` interface, which defines methods for logging messages at different levels of severity. Developers can create an instance of the `ConsoleLogger` class and use its methods to log messages at different levels of severity:

```javascript
import { ConsoleLogger } from './consoleLogger.js';

const logger = new ConsoleLogger();
logger.debug('Debug message');
logger.error('Error message');
logger.info('Info message');
logger.log('Log message');
logger.warn('Warning message');
logger.table({ foo: 'bar', baz: 'qux' });
```

The `index.ts` file exports several classes and functions used in the yajsapi project, such as the `Logger` class for creating logger objects, the `pinoLogger` class for logging messages using the Pino logging library, and the `sleep` function for pausing the execution of a program.

The `logger.ts` file defines an enum called `LogLevel` and an interface called `Logger`. The `Logger` interface provides a standardized way of logging messages, allowing developers to easily log messages at the appropriate level and filter messages based on the log level.

The `pinoLogger.ts` file defines a logger object that uses the Pino logging library to log messages at different levels of severity. The logger object can be used throughout the project to log messages and configure the log level as needed.

The `runtimeContextChecker.ts` file defines utility functions and constants for determining the runtime environment in which the code is executing. These utilities ensure that the code behaves correctly in different runtime environments and prevent certain features from being used in environments where they may not be supported.

The `sleep.ts` file defines a function called `sleep` that can be used to pause the execution of code for a specified amount of time. This can be useful in situations where you need to wait for an asynchronous operation to complete before continuing with the rest of the code:

```javascript
async function fetchData() {
  const response = await fetch('https://example.com/data');
  await sleep(5); // wait for 5 seconds
  const data = await response.json();
  // process the data
}
```

Overall, the `json/utils` folder provides a collection of utility classes and functions that are essential for the yajsapi project, making it easier for developers to debug, log messages, and ensure the code runs in the correct environment.

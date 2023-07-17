[View code on GitHub](https://github.com/golemfactory/yajsapi/activity/results.ts)

This file contains TypeScript interfaces for two related concepts in the yajsapi project: `Result` and `StreamingBatchEvent`. 

The `Result` interface defines the structure of an object that represents the result of executing a script command. It includes the index of the command, the datetime of the event on which the result was received, whether the command was successful or not, the stdout and stderr output of the command, an error message if the command was not successful, and a flag indicating whether the batch of commands has finished. This interface is likely used throughout the project to represent the results of script command executions.

Here is an example of how the `Result` interface might be used in code:

```typescript
import { Result } from 'yajsapi';

const result: Result = {
  index: 0,
  eventDate: '2022-01-01T00:00:00.000Z',
  result: 'Ok',
  stdout: 'Hello, world!',
  stderr: '',
  message: '',
  isBatchFinished: true,
};
```

The `StreamingBatchEvent` interface defines the structure of an object that represents an event that occurs during the execution of a batch of script commands. It includes the ID of the batch, the index of the command within the batch, the timestamp of the event, and an object representing the kind of event that occurred. The `RuntimeEventKind` interface defines the possible kinds of events that can occur, including `started`, `stdout`, `stderr`, and `finished`. The `RuntimeEventStarted` and `RuntimeEventFinished` interfaces define the structures of the objects that represent the `started` and `finished` events, respectively.

Here is an example of how the `StreamingBatchEvent` interface might be used in code:

```typescript
import { StreamingBatchEvent } from 'yajsapi';

const event: StreamingBatchEvent = {
  batch_id: '123',
  index: 0,
  timestamp: '2022-01-01T00:00:00.000Z',
  kind: {
    started: {
      command: {
        name: 'echo',
        args: ['Hello, world!'],
      },
    },
  },
};
```

Overall, these interfaces provide a way to represent the results and events of script command executions in a structured way, which can be useful for processing and analyzing the output of the yajsapi project.
## Questions: 
 1. What is the purpose of the `Result` interface?
    
    The `Result` interface defines the structure of an object that represents the result of executing a script command. It includes information such as the index of the command, the datetime of the event, the success status, and any output or error messages.

2. What is the `StreamingBatchEvent` interface used for?
    
    The `StreamingBatchEvent` interface defines the structure of an object that represents an event that occurs during the execution of a batch of script commands. It includes information such as the batch ID, the index of the command within the batch, the timestamp of the event, and the type of event (e.g. started, stdout, stderr, finished).

3. What is the purpose of the `RuntimeEventKind` interface?
    
    The `RuntimeEventKind` interface defines the possible types of events that can occur during the execution of a script command. It includes sub-interfaces for each type of event (e.g. started, stdout, stderr, finished), which define the specific information that is included with each type of event.
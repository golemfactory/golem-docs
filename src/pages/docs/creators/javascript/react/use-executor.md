---
title: useExecutor
description: React hook for managing a single TaskExecutor
type: React Reference
---

# useExecutor

`useExecutor` is a hook that manages a single [TaskExecutor](/docs/golem-sdk-task-executor/reference/classes/executor.TaskExecutor). Use this hook to initialize and later terminate an executor. To run tasks you should use the [useTask](/docs/creators/javascript/react/use-task) hook. It returns an object with the following properties:

| Name           | Description                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| executor       | The [TaskExecutor](/docs/golem-sdk-task-executor/reference/classes/executor.TaskExecutor) instance.                    |
| isInitializing | Boolean indicating whether the executor is being initialized. A new executor cannot be initialized while this is true. |
| error          | Error object containing information about the error that occurred while initializing the executor.                     |
| initialize     | A function to initialize a new executor                                                                                |
| terminate      | A function to terminate the executor (calls `TaskExecutor.end()` under the hood)                                       |
| isInitialized  | Boolean indicating whether the executor is initialized. This is always equal to `!!executor`.                          |
| isTerminating  | Boolean indicating whether the executor is being terminated.                                                           |

## Parameters

The hook accepts two configuration objects, one for the executor itself (package, demand specification, budget, etc) and one for the extra behavior (e.g. whether to add a `beforeunload` event listener to prevent the user from accidentally closing the tab while the executor is running).

| Name                    | Description                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| options (required)      | [TaskExecutorOptions](/docs/golem-sdk-task-executor/reference/modules/executor#taskexecutoroptions) |
| extraOptions (optional) | See below                                                                                           |

### Extra options

| Name                              | Description                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addBeforeUnloadHandler (optional) | Boolean indicating whether to add a `beforeunload` event listener to prevent the user from closing the tab while the executor is running. Defaults to `true`. |

## Example

```jsx
function MyComponent() {
  const {
    executor,
    initialize,
    isInitialized,
    isInitializing,
    terminate,
    error,
  } = useExecutor(
    {
      package: 'golem/alpine:latest',
    },
    {
      addBeforeUnloadHandler: true,
    }
  )
  if (isInitializing) {
    return <div>Initializing executor...</div>
  }
  if (error) {
    return <div>Error: {error.toString()}</div>
  }
  if (!isInitialized) {
    return (
      <div>
        <button onClick={initialize}>Initialize executor</button>
      </div>
    )
  }
  return (
    <div>
      <MyTaskComponent executor={executor} />
      <button onClick={terminate}>Terminate executor</button>
    </div>
  )
}
```

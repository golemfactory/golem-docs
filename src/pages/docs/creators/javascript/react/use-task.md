---
title: useTask
description: React hook for managing a single Task on the Golem Network
type: React API Reference
---

# useTask

`useTask` is a hook that manages a single task on the Golem Network. It returns an object with the following properties:

| Name      | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| run       | The [worker function](/docs/golem-js/reference/modules/task_work#worker) that runs the task. |
| isRunning | Boolean indicating whether the task is running.                                              |
| error     | The error which caused the task to fail.                                                     |
| result    | The result of the task.                                                                      |

## Parameters

This hook takes the [TaskExecutor](/docs/golem-js/reference/classes/executor_executor.TaskExecutor) instance, initialized by the [useExecutor](/docs/creators/javascript/react/use-executor) hook.

| Name                | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| executor (required) | The [TaskExecutor](/docs/golem-js/reference/classes/executor_executor.TaskExecutor) instance. |

## Example

```jsx
function MyComponent({ executor }) {
  const { isRunning, error, result, run } = useTask(executor)
  const onClick = () =>
    run(async (ctx) => {
      return (await ctx.run('echo', ['Hello world!'])).stdout
    })
  return (
    <div>
      <button onClick={onClick} disabled={isRunning}>
        Run task
      </button>
      {isRunning && <div>Task is running...</div>}
      {error && <div>Task failed due to {error.toString()}</div>}
      {result && <div>Task result: {result}</div>}
    </div>
  )
}
```

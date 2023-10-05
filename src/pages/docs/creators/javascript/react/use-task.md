---
title: useTask
description: React hook for managing a single Task on the Golem Network
type: reference
---

# useTask

`useTask` is a hook that manages a single task on the Golem Network. It returns an object with the following properties:

| Name      | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| run       | The [worker function](/docs/golem-js/reference/modules/task_work#worker) that runs the task. |
| isRunning | Boolean indicating whether the task is running.                                              |
| isError   | Boolean indicating whether the task has failed.                                              |
| result    | The result of the task.                                                                      |

## Props

This hook takes the [TaskExecutor](/docs/golem-js/reference/classes/executor_executor.TaskExecutor) instance, initialized by the [useExecutor](/docs/creators/javascript/react/use-executor) hook.

| Name     | Description                                                                                   |
| -------- | --------------------------------------------------------------------------------------------- |
| executor | The [TaskExecutor](/docs/golem-js/reference/classes/executor_executor.TaskExecutor) instance. |

## Example

```jsx
function MyComponent({ executor }) {
  const { isRunning, isError, result, run } = useTask(executor)
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
      {isError && <div>Task failed</div>}
      {result && <div>Task result: {result}</div>}
    </div>
  )
}
```

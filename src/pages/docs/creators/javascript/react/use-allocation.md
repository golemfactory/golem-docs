---
title: useAllocation
description: React hook for managing a single Allocation on the Golem Network
type: React Reference
---

# useAllocation

`useAllocation` is a hook that manages a single allocation on the Golem Network. It returns an object with the following properties:

| Name       | Description                                                |
| ---------- | ---------------------------------------------------------- |
| allocation | The allocation instance.                                   |
| isLoading  | Boolean indicating whether the allocation is being loaded. |
| error      | The error which caused the allocation to fail.             |
| create     | Function to create a new allocation.                       |
| load       | Function to load an existing allocation by id.             |
| release    | Function to release the allocation.                        |
| resetHook  | Function to reset the hook state.                          |

## Parameters

Optionally you can provide the ID of the allocation to be loaded automatically.

| Name          | Description                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| id (optional) | ID of the allocation to be loaded automatically. If this is provided, the initial value of `isLoading` will be `true` |

## Example

Load an allocation by ID:

```jsx
const { allocation, isLoading } = useAllocation('some-allocation-id')
if (isLoading) {
  return <p>Loading...</p>
}
if (allocation) {
  return <div>Allocation loaded: {allocation.id}</div>
}
```

Create a new allocation:

```jsx
const { allocation, create, isLoading } = useAllocation()
if (isLoading) {
  return <p>Loading...</p>
}
if (allocation) {
  return <div>Allocation created: {allocation.id}</div>
}
return (
  <button
    onClick={() =>
      create({
        budget: 1,
        expirationSec: 15 * 60,
      })
    }
  >
    Create a new allocation
  </button>
)
```

Using the allocation with `useExecutor`

```jsx
const { allocation } = useAllocation('some-allocation-id')
const { executor, initialize } = useExecutor({
  // ... other options
  payment: {
    allocation,
  },
})
```

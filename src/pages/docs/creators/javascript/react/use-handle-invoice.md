---
title: useHandleInvoice
description: React hook for handling a single invoice
type: reference
---

# useHandleInvoice

`useHandleInvoice` is a hook that allows you to handle (accept) a single invoice. It returns an object with the following properties:

| Name          | Description                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| acceptInvoice | A function that accepts the invoice.                                                                  |
| isLoading     | Boolean indicating whether the invoice is being accepted.                                             |
| isError       | Boolean indicating whether the last attempt to accept the invoice failed.                             |
| isAccepted    | Boolean indicating whether the invoice has been accepted.                                             |
| reset         | A function that resets the state of the hook (sets `isAccepted` to `false` and `isError` to `false`). |

## Props

This hook accepts two props:

| Name               | Description                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| invoice (required) | The id of the invoice to handle (you can get it from the [useInvoices](/docs/creators/javascript/react/use-invoices) hook). |
| options (optional) | see below                                                                                                                   |

### Options

| Name                           | Description                                                                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| onAccepted (optional)          | A function that will be called when the invoice is accepted. This is a good place to display a success message to the user. |
| onRejected (optional)          | A function that will be called when the invoice is rejected. This is a good place to display an error message to the user.  |
| allocationTimeoutMs (optional) | The timeout for the allocation in milliseconds. Defaults to 60 seconds.                                                     |

## Example

```jsx
function MyComponent({ id, status }) {
  const { acceptInvoice, isAccepted, isLoading } = useHandleInvoice(id, {
    onAccepted: () => {
      showToast(`Invoice accepted! 💸`, { type: 'success' })
    },
    onRejected: () => {
      showToast(`There was an error accepting the invoice 😥`, {
        type: 'error',
      })
    },
  })
  return (
    <div>
      <p>{id}</p>
      <p>{status}</p>
      <button
        onClick={acceptInvoice}
        disabled={status !== InvoiceStatus.Received || isAccepted}
      >
        {isLoading ? 'Accepting...' : isAccepted ? 'Accepted!' : 'Accept'}
      </button>
    </div>
  )
}
```

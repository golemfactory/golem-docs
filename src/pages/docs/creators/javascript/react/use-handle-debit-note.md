---
title: useHandleDebitNote
description: React hook for handling a single debit note
type: reference
---

# useHandleDebitNote

`useHandleDebitNote` is a hook that allows you to handle (accept) a single debit note. It returns an object with the following properties:

| Name            | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| acceptDebitNote | A function that accepts the debit note.                                      |
| isLoading       | Boolean indicating whether the debit note is being accepted.                 |
| isError         | Boolean indicating whether the last attempt to accept the debit note failed. |
| isAccepted      | Boolean indicating whether the debit note has been accepted.                 |

## Props

This hook accepts two props:

| Name                           | Description                                                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| debitNote (required)           | The id of the debit note to handle (you can get it from the [useDebitNotes](/docs/creators/javascript/react/use-debit-notes) hook). |
| options (optional)             | see below                                                                                                                           |
| allocationTimeoutMs (optional) | The timeout for the allocation in milliseconds. Defaults to 60 seconds.                                                             |

### Options

| Name                  | Description                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| onAccepted (optional) | A function that will be called when the debit note is accepted. This is a good place to display a success message to the user. |
| onRejected (optional) | A function that will be called when the debit note is rejected. This is a good place to display an error message to the user.  |

## Example

```jsx
function MyComponent({ id, status }) {
  const { acceptDebitNote, isAccepted, isLoading } = useHandleDebitNote(id, {
    onAccepted: () => {
      showToast(`Debit note accepted! 💸`, { type: 'success' })
    },
    onRejected: () => {
      showToast(`There was an error accepting the debit note 😥`, {
        type: 'error',
      })
    },
  })
  return (
    <div>
      <p>{id}</p>
      <p>{status}</p>
      <button
        onClick={acceptDebitNote}
        disabled={status !== DebitNoteStatus.Received || isAccepted}
      >
        {isLoading ? 'Accepting...' : isAccepted ? 'Accepted!' : 'Accept'}
      </button>
    </div>
  )
}
```

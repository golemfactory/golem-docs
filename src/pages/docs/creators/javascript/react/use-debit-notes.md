---
title: useDebitNotes
description: React hook for fetching all debit notes
type: React API Reference
---

# useDebitNotes

`useDebitNotes` is a hook that fetches all debit notes known to the connected yagna instance. Under the hood it uses [SWR](https://swr.vercel.app/) so you get all the benefits of caching and revalidation. It's also possible to configure that behavior by passing the `swrConfig` parameter. It returns an object with the following properties:

| Name         | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| debitNotes   | Array of DebitNotes (see below)                                                                   |
| isLoading    | Boolean indicating whether the debit notes are being fetched.                                     |
| error        | Error object containing information about the error that occurred while fetching the debit notes. |
| isValidating | Boolean indicating whether the debit notes are being revalidated.                                 |
| refetch      | A function that can be used to manually trigger a refetch.                                        |

## DebitNote object type

| Name                | Type                                                                            |
| ------------------- | ------------------------------------------------------------------------------- |
| debitNoteId         | String                                                                          |
| issuerId            | String                                                                          |
| recipientId         | String                                                                          |
| payeeAddr           | String                                                                          |
| payerAddr           | String                                                                          |
| paymentPlatform     | String                                                                          |
| previousDebitNoteId | String                                                                          |
| timestamp           | String                                                                          |
| agreementId         | String                                                                          |
| activityId          | String                                                                          |
| totalAmountDue      | String                                                                          |
| usageCounterVector  | Object                                                                          |
| paymentDueDate      | String                                                                          |
| status              | One of `ISSUED` `RECEIVED` `ACCEPTED` `REJECTED` `FAILED` `SETTLED` `CANCELLED` |

## Parameters

This hook accepts a single configuration object with the following properties:

| Name                 | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| limit (optional)     | The maximum number of debit notes to fetch. Defaults to 10.         |
| swrConfig (optional) | [SWR configuration object](https://swr.vercel.app/docs/api#options) |

Please note that the hook doesn't support pagination. The debit notes are always sorted from newest to oldest and to fetch earlier debit notes you need to set the `limit` to a higher value.

## Example

```jsx
function MyComponent() {
  const [limit, setLimit] = useState(10)
  const { debitNotes, isLoading, error, refetch } = useDebitNotes({
    limit,
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.toString()}</div>
  }
  return (
    <div>
      <ul>
        {debitNotes.map((debitNote) => (
          <li key={debitNote.debitNoteId}>
            {debitNote.debitNoteId} - {debitNote.status}
          </li>
        ))}
      </ul>
      <button onClick={() => setLimit(limit + 10)}> Load more </button>
      <button onClick={refetch}> Refresh </button>
    </div>
  )
}
```

{% docnavigation title="See also" %}

- [useHandleDebitNote](/docs/creators/javascript/react/use-handle-debit-note)

{% /docnavigation %}

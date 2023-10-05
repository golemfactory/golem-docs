---
title: useInvoices
description: React hook for fetching all invoices
type: reference
---

# useInvoices

`useInvoices` is a hook that fetches all invoices known to the connected yagna instance. It paginates data by default. Under the hood it uses [SWR](https://swr.vercel.app/) so you get all the benefits of caching and revalidation. It's also possible to configure that behavior by passing the `swrConfig` parameter. It returns an object with the following properties:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| invoices     | Array of Invoices (see below)                                                                  |
| isLoading    | Boolean indicating whether the invoices are being fetched.                                     |
| error        | Error object containing information about the error that occurred while fetching the invoices. |
| isValidating | Boolean indicating whether the invoices are being revalidated.                                 |
| refetch      | A function that can be used to manually trigger a refetch.                                     |

## Invoice object type

| Name            | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| invoiceId       | String                                                                          |
| issuerId        | String                                                                          |
| recipientId     | String                                                                          |
| payeeAddr       | String                                                                          |
| payerAddr       | String                                                                          |
| paymentPlatform | String                                                                          |
| timestamp       | String                                                                          |
| agreementId     | String                                                                          |
| activityIds     | Array of Strings                                                                |
| amount          | String                                                                          |
| paymentDueDate  | String                                                                          |
| status          | One of `ISSUED` `RECEIVED` `ACCEPTED` `REJECTED` `FAILED` `SETTLED` `CANCELLED` |

## Props

This hook accepts a single configuration object with the following properties:

| Name      | Description                                                                                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| after     | A string representing the timestamp to start fetching invoices from. If not provided, the hook will fetch invoices starting from the earliest invoice known to the connected yagna instance. |
| limit     | The maximum number of invoices to fetch. Defaults to 10.                                                                                                                                     |
| swrConfig | [SWR configuration object](https://swr.vercel.app/docs/api#options)                                                                                                                          |

To achieve pagination, pass the `timestamp` of the last invoice in the `after` parameter of the next call.

## Example

```jsx
function MyComponent() {
  const { invoices, isLoading, error, refetch } = useInvoices()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.toString()}</div>
  }
  return (
    <div>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.invoiceId}>
            {invoice.invoiceId} - {invoice.status}
          </li>
        ))}
      </ul>
      <button onClick={refetch}> Refresh </button>
    </div>
  )
}
```

With pagination:

```jsx
function MyComponent() {
  const [after, setAfter] = useState()
  const { invoices, isLoading, error, refetch } = useInvoices({ after })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.toString()}</div>
  }
  return (
    <div>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.invoiceId}>
            {invoice.invoiceId} - {invoice.status}
          </li>
        ))}
      </ul>
      <button onClick={() => setAfter(invoices[invoices.length - 1].timestamp)}>
        Next
      </button>
      <button onClick={refetch}> Refresh </button>
    </div>
  )
}
```

{% docnavigation title="See also" %}

- [useHandleInvoice](/docs/creators/javascript/react/use-handle-invoice)

{% /docnavigation %}

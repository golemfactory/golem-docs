---
title: useInvoices
description: React hook for searching invoices
type: React Reference
---

# useInvoices

`useInvoices` is a hook that allows you to search through all invoices known to the connected yagna instance. Under the hood it uses [SWR](https://swr.vercel.app/) so you get all the benefits of caching and revalidation. It's also possible to configure that behavior by passing the `swrConfig` parameter. It returns an object with the following properties:

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

## Parameters

This hook accepts a single configuration object with the following properties:

| Name                        | Description                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| after (optional)            | Only return invoices with a timestamp greater than this value.                           |
| limit (optional)            | Maximum number of invoices to return. Default is 50.                                     |
| statuses (optional)         | Array of statuses to filter by.                                                          |
| providerIds (optional)      | Array of provider IDs to filter by.                                                      |
| minAmount (optional)        | Only return invoices with an amount greater than or equal to this value.                 |
| maxAmount (optional)        | Only return invoices with an amount less than or equal to this value.                    |
| providerWallets (optional)  | Array of provider wallets to filter by.                                                  |
| invoiceIds (optional)       | Array of invoice IDs to filter by. If provided, all other search parameters are ignored. |
| paymentPlatforms (optional) | Array of payment platforms to filter by.                                                 |
| swrConfig (optional)        | [SWR configuration object](https://swr.vercel.app/docs/api#options)                      |

## Example

```jsx
function MyComponent() {
  const { invoices, isLoading, error, refetch } = useInvoices({
    limit: 10,
    statuses: ['RECEIVED'],
    after: new Date('2021-01-01'),
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

{% docnavigation title="See also" %}

- [useHandleInvoice](/docs/creators/javascript/react/use-handle-invoice)

{% /docnavigation %}

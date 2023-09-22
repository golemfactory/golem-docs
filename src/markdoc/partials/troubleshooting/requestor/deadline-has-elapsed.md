{% troubleshooting %}

## Error: deadline has elapsed

{% problem /%}

When trying to fund your requestor on the testnet using `yagna payment fund`, you may encounter the following error message:

```
Error: deadline has elapsed
```

{% solution %}

The testnet might be experiencing heavy traffic, leading to increased gas fees. This can slow down the transaction process and cause Yagna to timeout.

To resolve the issue:

1. Retry the command. If it doesn't work retrying 3 times, then please reach out to us on [discord](https://chat.golem.network)

{% /solution %}
{% feedback identifier="requestor-deadline-has-elapsed" /%}
{% /troubleshooting %}

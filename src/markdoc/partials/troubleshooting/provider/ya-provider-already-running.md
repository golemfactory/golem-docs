{% troubleshooting %}

## ya-provider is already running

{% problem /%}

If your machine encounters an unexpected shutdown, such as from a power outage, you may experience an issue when trying to run `golemsp run`. The error message displayed is:

```
Error: ya-provider is already running
```

{% solution %}

The underlying service of `golemsp run`, `ya-provider`, uses a lockfile named `ya-provider.lock` to ensure only one instance is running at a time. In cases of abrupt shutdowns, this lockfile might not get deleted, causing the above error. 

To resolve the issue:

1. Navigate to the directory containing the `ya-provider.lock` file. The default location is `~/.local/share/ya-provider/ya-provider.lock`
2. Delete the `ya-provider.lock` file.
3. Retry starting the provider with the `golemsp run` command.

{% /solution %}
{% feedback identifier="ya-provider-already-running" /%}
{% /troubleshooting %}

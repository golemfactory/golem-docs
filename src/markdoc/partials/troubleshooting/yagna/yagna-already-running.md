{% troubleshooting %}

## yagna is already running

{% problem /%}

When attempting to run the commands `yagna service run` or `golemsp run`, you receive an error message that reads:

```
Error: yagna is already running
```

{% solution %}

This indicates that the Yagna service, which could be acting as a provider or requestor daemon, is already active on your system.

To resolve the issue:

1. If your system supports the `killall` command, execute:

   ```bash
   killall yagna
   ```

   1.1 If `killall` isn't supported or you'd prefer a manual method:

   ```bash
   ps aux | grep yagna
   ```

   From the output, note the PID (Process ID) of the yagna service.

   1.2 Terminate the identified service with:

   ```bash
   kill -9 <PID>
   ```

2. Once you've terminated the running instance(s), you can start Yagna or the provider as you normally would.

{% /solution %}
{% feedback identifier="ya-provider-already-running" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Enabling DEBUG Log Level in Yagna

{% problem /%}

If you're experiencing issues with Yagna, enabling DEBUG level logs can be crucial for diagnosing the problem. This process helps in identifying the specific area where the issue lies.

{% solution %}

To enable DEBUG logs in Yagna, you need to start the Yagna service with a specific command. Here’s how you can do it:

1. Open your terminal.
2. Run the following command:

```bash
RUST_LOG=debug yagna service run
```

By executing this command, Yagna will start and all related logs will be generated with DEBUG information. These logs are stored in the data directory. The default location for these logs is `~/.local/share/yagna/yagna_rCURRENT.log`.

{% /solution %}
{% feedback identifier="ya-provider-already-running" /%}
{% /troubleshooting %}

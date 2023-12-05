{% troubleshooting %}

## Enabling DEBUG Log Level in Yagna

{% problem /%}

If you're experiencing issues with Yagna, enabling DEBUG level logs can be crucial for diagnosing the problem. This process helps in identifying the specific area where the issue lies.

{% solution %}

To enable DEBUG logs in Yagna, you need to start the Yagna service with a specific command. Here’s how you can do it:

1. Open your terminal.
2. Start Yagna using the following command:

{% tabs %}
{% tab label="Linux/Mac" %}

```bash
RUST_LOG=debug yagna service run
```

{% /tab %}
{% tab label="Windows" %}

```bash
set RUST_LOG=debug && yagna service run
```

{% /tab %}
{% /tabs %}

{% /solution %}
{% feedback identifier="ya-provider-already-running" /%}
{% /troubleshooting %}

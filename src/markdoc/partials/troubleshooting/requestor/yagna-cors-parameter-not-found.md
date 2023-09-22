{% troubleshooting %}

## Error: Found argument '--api-allow-origin' which wasn't expected, or isn't valid in this context.	

{% problem /%}

When trying to start yagna with support for CORS, you may encounter the following error message:

```
Error: Found argument '--api-allow-origin' which wasn't expected, or isn't valid in this context.	
```

{% solution %}

CORS support was introduced in Yagna version 0.13.0

To resolve the issue:

1. Please install Yagna version 0.13.0 or later.

2. Retry the command.

{% /solution %}
{% feedback identifier="requestor-cors-parameter-not-found" /%}
{% /troubleshooting %}

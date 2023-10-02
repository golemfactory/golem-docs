{% troubleshooting %}

## Unable to get requestor accounts Invalid application key.

{% problem /%}

When trying to run a script using the Golem JS SDK, you may encounter the following error message:

```
Error: Unable to get requestor accounts Invalid application key.
```

{% solution %}

Please make sure your script uses the configured app-key. You can check what keys are configured using: `yagna app-key list` or autoconfigure one by setting the environment variable `YAGNA_AUTOCONF_APPKEY`. Please see the [Yagna installation example](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors) for instructions on how to do it.

{% /solution %}
{% feedback identifier="requestor-invalid-app-key" /%}
{% /troubleshooting %}

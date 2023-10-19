{% troubleshooting %}

## Transfer error: IO error: path not found in container:

{% problem /%}

When attempting to download a file from a provider, you encounter the following error message:

```
WARN: Task error on provider fractal_02_2.h. Error: Local service error: Transfer error: IO error: path not found in container: /golem/work/file.txt. Stdout: undefined. Stderr: undefined.
```

{% solution %}

The issue is due to the fact that you're attempting to download a file which doesn't exist

To resolve this issue, please make sure that the path exists on the provider.

{% /solution %}
{% feedback identifier="js-sdk-path-not-found" /%}
{% /troubleshooting %}

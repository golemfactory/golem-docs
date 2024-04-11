{% troubleshooting %}

## Transfer error: Send error: send failed because receiver is gone

{% problem /%}

When attempting to upload a file to a provider, you encounter the following error message:

```log
WARN: Task error on provider fractal_01_1.h. Error: Local service error: Transfer error: Send error: send failed because receiver is gone. Stdout: undefined. Stderr: undefined.
```

{% solution %}

The issue is likely due to the directory where you're attempting to upload the file. It may not be defined as `VOLUME` in the `Dockerfile`.

To resolve this:

1. Check your `Dockerfile` to confirm the directories defined as `VOLUME`.
2. Ensure you are uploading files specifically to the directories marked as `VOLUME`.
3. If you are trying to upload to a directory that's not defined as `VOLUME`, consider updating the `Dockerfile` to include that directory or select an already defined `VOLUME` directory for your uploads.

By uploading files exclusively to `VOLUME` directories, you can avoid this error.

You can find more information on the file system configuration on a remote node [here](/docs/creators/common\providers-filesystem).

{% /solution %}
{% feedback identifier="js-sdk-receiver-is-gone" /%}
{% /troubleshooting %}

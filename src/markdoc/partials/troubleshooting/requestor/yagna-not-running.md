{% troubleshooting %}

## Error: connect ECONNREFUSED 127.0.0.1:7465.

{% problem /%}

When trying to execute a requestor script, you may encounter the following error message:

```
Error: connect ECONNREFUSED 127.0.0.1:7465.
```

{% solution %}

1. Ensure Yagna is Active: The error indicates that your script is unable to establish a connection with Yagna on the specified address. Begin by verifying if Yagna is running on your system. If not, you can start it using:

```
yagna service run

```

2. Check the `YAGNA_API_URL` Setting: If you've previously set the `YAGNA_API_URL` environment variable to an address different from the default, you need to reflect the same when setting up your SDK. For example:

```js
yagnaOptions: {
  basePath: 'http://127.0.0.1:7777'
}
```

Alternatively, ensure the same `YAGNA_API_URL` value is used both when launching the yagna daemon and in the terminal window where you're executing the script.

{% /solution %}
{% feedback identifier="js-sdk-receiver-is-gone" /%}
{% /troubleshooting %}

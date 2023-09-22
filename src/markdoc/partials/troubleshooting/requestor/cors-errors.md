{% troubleshooting %}

## Access to XMLHttpRequest at 'http://127.0.0.1:7465/payment-api/v1/requestorAccounts' from origin 'http://172.27.80.1:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

{% problem /%}

When trying to execute a requestor script in the browser, you may encounter the following error message:

```
Access to XMLHttpRequest at 'http://127.0.0.1:7465/payment-api/v1/requestorAccounts' from origin 'http://172.27.80.1:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

{% solution %}

This error suggests that the request was blocked due to CORS not being configured on the endpoint. 

To resolve the issue:

1. Make sure you start Yagna with the proper parameter: `yagna service run --api-allow-origin='http://localhost:3000'`.

2. Retry the script.

{% /solution %}
{% feedback identifier="requestor-cors-errors" /%}
{% /troubleshooting %}

{% troubleshooting %}

## Unable to create allocation for driver/network erc20/holesky. There is no requestor account supporting this platform.

{% problem /%}

When trying to execute a requestor script, you may encounter the following error message:

```
Error: Unable to create allocation for driver/network erc20/holesky. There is no requestor account supporting this platform.
```

{% solution %}

The payment driver is not initialized for the network you're trying to use in the requestor script. Run `yagna payment init` or update the JS SDK to `@golem-sdk/golem-js`.


{% /solution %}
{% feedback identifier="js-sdk-could-not-create-allocation" /%}
{% /troubleshooting %}

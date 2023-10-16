{% troubleshooting %}

## Accessing Specific Ports through Outbound Network Connections

{% problem /%}

In the [Creating Golem dApps](/docs/creators/dapps/creating-golem-dapps) article, it's outlined that when trying to access an address on a specific port like `http://geth.golem.network:55555`, you must include the port in the manifest file. If you only specify the address (e.g., `http://geth.golem.network`), it will default to connecting via port 80.

{% solution %}

Ensure you specify the complete URL, including the port number.

{% /solution %}
{% feedback identifier="dapps-outbound-specific-port" /%}
{% /troubleshooting %}

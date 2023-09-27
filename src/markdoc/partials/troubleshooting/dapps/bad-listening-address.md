{% troubleshooting %}

## Bad Default Listening Address

{% problem %}

Many services in publicly available Docker images are configured to listen exclusively on the localhost address by default. This configuration renders them inaccessible when run on the Golem VPN.

{% solution %}

To resolve this, modify the service's configuration or provide the necessary arguments to ensure they listen on `0.0.0.0`.

{% /solution %}
{% feedback identifier="dapps-bad-listening-address" %}
{% /troubleshooting %}

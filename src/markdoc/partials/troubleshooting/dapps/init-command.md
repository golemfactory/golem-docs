{% troubleshooting %}

## Init commands which start service processes have to be run in the background

{% problem /%}

When trying to deploy a dapp, it may sometimes not transition into the `started` state.

{% solution %}

Each of the commands listed in the `init` section of the node has to finish its execution in order for the services to be treated as `started`. That's why commands that stay running, e.g. serving the API, have to be suffixed with an ampersand (`&`) to instruct the shell to put them into the background, e.g.

```yaml
init:
  - run:
    args: ['/bin/bash', '-c', '/bin/run_web.sh 192.168.0.3 &']
```

{% /solution %}
{% feedback identifier="dapps-init-command" /%}
{% /troubleshooting %}

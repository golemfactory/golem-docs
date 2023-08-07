# Troubleshooting

#### Troubleshooting

For any issues that are not listed below, or in case you'd like to chat with us, please write us a message on [chat.golem.network](https://chat.golem.network).

**Issues during the yagna setup**

If you encounter problems during the yagna daemon initialization, please refer to this [Yagna Daemon installation instruction](/docs/creators/dapps/creators/javascript/examples/tools/yagna-installation-for-requestors).

**\[Errno 104] Connection reset by peer**

Receiving this error after the `gvmkit-build <image> --push` command, means the image had already been uploaded (no changes detected). Please use the previously-obtained hash instead.

#### Known caveats and workarounds

There are currently a few shortcomings of our decentralized application stack and behaviours that are either not completely obvious or just different from what one might expect. Some of them are easily resolved with simple workarounds.

Most of them are outlined in the previous article, which describes the [differences between docker containers and Golem virtual machines](/docs/creators/dapps/docker-containers-vs-golem-vms).

Other than that, there are a couple more issues that you should be aware of:

**Init commands which start daemon processes have to be run in the background**

Each of the commands listed in the `init` section of the node has to finish its execution in order for the services to be treated as `started`. That's why, commands that stay running, e.g. serving the API, have to be suffixed with and ampersand (`&`) to instruct the shell to put them into the background, e.g.

```yaml
    init:
      - run:
          args: ["/bin/bash", "-c", "/bin/run_web.sh 192.168.0.3 &"]
```

**Retrieving complete logs from the provider**

Currently, a requestor user only has access to logs of the yagna daemon and dapp runtime. Logs from the provider side are not retrievable. One way to mitigate this, is to run the `goth` utility to have access to provider-side logs - to learn more.

**Bad default listening address**

A lot of services in publicly available docker images listen only on the localhost address by default. This makes them unable to connect-to when they’re run on Golem VPN.

For some reason, they still work in this default setup on docker-compose but are inaccessible from other nodes in the same VPN (including the requestor’s websocket).

The solution is to add adequate configuration or arguments to make them listen on `0.0.0.0`.

**Accessing specific ports using outbound network connections**

As described in the ["Creating Golem dApps"](/docs/creators/dapps/creating-golem-dapps) article, to access an address that uses a specific port, e.g. `http://geth.golem.network:55555`, this address, including the port must be specified in the manifest file. Specifying just the address, e.g. `http://geth.golem.network` will only allow connections to be made to port 80.

**Errors while running commands terminate the activity**

If a command sent as part of `init` exits with a non-zero exit code, it's treated as an error and the underlying activity is terminated.

There's currently no work-around.

**Accessing locations in the containers from the front-end**

Cross-origin resource sharing (CORS) restrictions prevent accessing content from other containers from the front-end. Additionally, as local proxy ports are assigned dynamically, one might not even know the location to access up front.

For this reason it’s recommended for an application to bundle its front-end along with an HTTP server that will handle all requests - both front- and back-end - and redirect them to the back-end through a provider-to-provider VPN.

---
Title: Provider CLI reference
Description: Yagna CLI reference
---

# Provider CLI reference

## CLI commands

Run `golemsp help` without arguments to see top-level usage information:

```bash
$ golemsp help
golemsp 0.12.2 (8efd8657 2023-06-06 build #296)
User-friendly CLI for running Golem Provider

USAGE:
    golemsp <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    run         Run the golem provider
    stop        Stop the golem provider
    settings    Manage settings
    status      Show provider status
    help        Prints this message or the help of the given subcommand(s)
```

### Run

`golemsp run` - Start the Golem provider. It uses `mainnet` as a payment platform by default.

Invoke `golemsp run --help` to see more options.

### Settings

```bash
$ golemsp settings
golemsp-settings 0.3.0
Manage settings

USAGE:
    golemsp settings <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    set     Change settings
    show    Show current settings
    help    Prints this message or the help of the given subcommand(s)

```

#### Settings set

`golemsp settings set --help` - to see how to change settings. Invoking this will prompt usage, flags, and options.

example

```bash
$ golemsp settings set --help
golemsp-settings-set 0.3.0
Change settings

USAGE:
    golemsp settings set [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
        --node-name <node-name>             
        --cores <num>                       Number of shared CPU cores
        --memory <bytes (like "1.5GiB")>    Size of shared RAM
        --disk <bytes (like "1.5GiB")>      Size of shared disk space
        --starting-fee <GLM (float)>        Price for starting a task
        --env-per-hour <GLM (float)>        Price for working environment per hour
        --cpu-per-hour <GLM (float)>        Price for CPU per hour
        --account <account>                 Account for payments [env: YA_ACCOUNT=]
        --payment-network <network>         Payment network [env: YA_PAYMENT_NETWORK_GROUP=]  [default: mainnet]
                                            [possible values: mainnet, testnet]

```

To change a particular setting (for eg. price settings) type:

`golemsp settings set --cpu-per-hour 3`

You can also combine multiple settings in one command as follows:

`golemsp settings set --cpu-per-hour 3 --cores 7` which will change your GLM per hour to "3" and adjust the numbers of shared CPU cores to "7".

**To change the default Ethereum address that was created for you during the initial setup process type:**

`golemsp settings set --account <address>`

and restart your node afterward for it to update. To check if your address has been updated properly run `golemsp status`

#### Settings show

`golemsp settings show` - Show current settings.

example

```bash
$ golemsp settings show
node name: "zima"
Shared resources:
    cores:  7
    memory: 10.604358091950417 GiB
    disk:   59.39304809570313 GiB


Pricing for preset "vm":

    0.025000000000000001 GLM per cpu hour
    0.005000000000000000 GLM per hour
    0.000000000000000000 GLM for start


Pricing for preset "wasmtime":

    0.025000000000000001 GLM per cpu hour
    0.005000000000000000 GLM per hour
    0.000000000000000000 GLM for start

```

### Status

`golemsp status` - Print out the status of your node.

When the node is not running you'll see:

```
$ golemsp status
┌─────────────────────────────┐
│  Status                     │
│                             │
│  Service    is not running  │
│  Version    0.12.1          │
│  Commit     5671cd3f        │
│  Date       2023-05-23      │
│  Build      293             │
│                             │
│  Node Name  zima            │
│  Subnet     public          │
│  VM         valid           │
└─────────────────────────────┘

```

When your node is already running `golemsp status` will show:

```
$ golemsp status
┌─────────────────────────┬──────────────────────────────────────────────┬─────────────────────────────┐
│  Status                 │  Wallet                                      │  Tasks                      │
│                         │  0x2a14f8ae0272bd4c38ed1b40c66e88ed719dab69  │                             │
│  Service    is running  │                                              │  last 1h processed     0    │
│  Version    0.12.2      │  network               mainnet               │  last 1h in progress   0    │
│  Commit     5671cd3f    │  amount (total)        0 GLM                 │  total processed       509  │
│  Date       2023-06-06  │      (on-chain)        0 GLM                 │  (including failures)       │
│  Build      296         │      (polygon)         0 GLM                 │                             │
│                         │      (zksync)          0 GLM                 │                             │
│  Node Name  lato        │                                              │                             │
│  Subnet     public      │  pending               0 GLM (0)             │                             │
│  VM         valid       │  issued                0 GLM (0)             │                             │
└─────────────────────────┴──────────────────────────────────────────────┴─────────────────────────────┘

```

In the three columns, you can check the basic information regarding the status of your node

#### Status

* Whether your node is running
* Version of your node (with commit, build date, and build number)
* Name of your node
* Subnet in which your node is currently running
* VM status

#### Wallet

* Account address
* Payment network: `mainnet` or `rinkeby`
* Amount of tokens that you have earned for successful computation
* On-chain amount of tokens that you have earned (explorer [etherscan.io](https://etherscan.io/) or [rinkeby.etherscan.io](https://rinkeby.etherscan.io/))
* Zk-sync amount of tokens that you have earned (explorer [zkscan.io](https://zkscan.io) or [rinkeby.zkscan.io](https://rinkeby.zkscan.io/))
* Pending payments that you should receive for computation
* Amount of tokens that are still unconfirmed and may not show on your account

#### Tasks

* Number of tasks that you were computing in the last hour
* Number of tasks that were in progress during the last hour
* Total tasks that you were trying to compute - including those that were not computed

### Exit GLM tokens to Ethereum

While not specific to the provider CLI, at some point, you may want to move your tokens. By default, mainnet tasks are paid on Layer 2. Assuming you have a local wallet, you can interact with the payment driver to exit your tokens from Layer 2 to Layer 1. This is done using the`yagna payment exit` command. With this command, there are two main flags to keep in mind; `--network`and `--to-address`.

For `--network`you have two options, either `mainnet` or `rinkeby`. For `--to-address`you can specify a destination address other than the local wallet address.

**To exit your GLM to the same address on Ethereum mainnet type:**

`yagna payment exit --network=mainnet`

**To exit your GLM to a different address on Ethereum mainnet type:**

`yagna payment exit --to-address=<address> --network=mainnet`

**Note that if you decide to use an external wallet during your setup process, you can connect to ZkSync's wallet at** [**https://wallet.zksync.io/**](https://wallet.zksync.io/) **and exit that way. In the scenario that a different payment driver is being used, you will need to use the relevant available options to connect and access your tokens.**

## Advanced Settings

`ya-provider` allows fine-tuning the config created with `golemsp settings` using commands `config`, `preset`, `profile`, and `exe-unit`.

Additionally, it enables configuration of the certificate keystore and of the domain whitelist, which is used to control what kind of outbound traffic is allowed out of the VM containers run by the requestors on your machine.

### Keystore

The provider has an embedded certificate keystore which is used to validate any additional permissions for the payload launched by the requestors.

By default, it contains only Golem public certificate which allows executing [example app](https://handbook.golem.network/requestor-tutorials/service-development/service-example-6-external-api-request) and apps from trusted by Golem creators (certificates allow to verify incoming _Demand_'s [Computational Payload Manifests](https://handbook.golem.network/requestor-tutorials/vm-runtime/computation-payload-manifest)).

Run `ya-provider keystore --help` to see possible subcommands

### Domain whitelist

The [Computational Payload Manifests](https://handbook.golem.network/requestor-tutorials/vm-runtime/computation-payload-manifest) embedded in the Demands can specify a list of URLs that may get called by the services running on a Provider. If the manifest declares requests to URLs in domains that are not whitelisted, it must come with a [signature and app author's public certificate](https://handbook.golem.network/requestor-tutorials/vm-runtime/computation-payload-manifest). By default, the domains `whitelist` consists of a curated set of public websites and APIs like GitHub, dockerhub or public Ethereum nodes.

Run `ya-provider whitelist --help` to see possible subcommands.
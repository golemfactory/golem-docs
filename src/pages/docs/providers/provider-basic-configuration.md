---
Description: Configuration examples for Yagna
title: Basic provider configuration
---

# Configuration examples for yagna

This article will show how to configure basic `Yagna` options, such as changing settings and running the provider node in different ways.

## Settings

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

### Settings set

example

|Value(s)                  |   Value  description  |
|:----------------------|:----------------------------------------|
|--node-name|The name of your provider|
|--cores|The number of threads allocated to the provider service|
|--memory|The amount of RAM (in bytes) allocated to the provider service (note: prefixes such as GiB are OK)|
|--disk|The amount of HDD/SDD (in bytes) allocated to the provider service (note: prefixes such as GiB are OK)|
|--starting-fee|A decimal number of how much GLM you want to start a task/service|
|--env-per-hour|A decimal number of how much GLM you want for misc. activities such as downloading a Golem image or finalizing a task|
|--cpu-per-hour|A decimal number of how much GLM you want for every one allocated thread while working (note: this value is multiplied automatically afterwards, 256-thread CPU's can reasonably have the same value as 2-thread CPUs)|
|--account|Yagna account for payments|
|--payment-network|The network where you want to be paid in, e.g., mainnet or testnet|

To change a particular setting (for eg. price settings) type:

`golemsp settings set --cpu-per-hour 3`

You can also combine multiple settings in one command as follows:

`golemsp settings set --cpu-per-hour 3 --cores 7` which will change your GLM per hour to "3" and adjust the numbers of shared CPU cores to "7".

**To change the default Ethereum address that was created for you during the initial setup process type:**

`golemsp settings set --account <address>`

and restart your node afterward for it to update. To check if your address has been updated properly run `golemsp status`

### Settings show

`golemsp settings show` - Show current settings.

## Running golemsp on testnet

To run the Golem provider on the test network, type the following command into the terminal:

```bash
golemsp run --payment-network testnet
```


{% docnavigation title="See also" %}

[Troubleshooting](/docs/providers/provider-troubleshooting)

[Provider CLI reference](/docs/providers/yagna-cli-reference)

{% /docnavigation %}





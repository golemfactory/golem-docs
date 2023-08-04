---
Description: Configuration examples for Yagna
---

# Configuration examples for yagna

This article will show how to configure basic yagna options.

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

### Settings show

`golemsp settings show` - Show current settings.


Next steps:

!!! golem-icon "Next steps:"

    [Troubleshooting](troubleshooting.md){ .md-button .md-button--primary }

    [Provider CLI reference](reference.md){ .md-button .md-button--primary }



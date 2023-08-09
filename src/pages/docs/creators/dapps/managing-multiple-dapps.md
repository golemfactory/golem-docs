---
description: Manage multiple apps on a single requestor node easily with `dapp-manager`.
title: Managing multiple apps on a single requestor node.
---

# dApp Manager

`dapp-manager` is a purposefully minimalistic manager for decentralized applications running on
Golem. It works together with the [dapp-runner](/docs/creators/dapps/run-a-dapp).

While the responsibility of the latter is to run a single Golem application (which may consist of
multiple services), `dapp-manager` takes care of spawning, interacting with, and stopping the
running instances of the `dapp-runner`.

## Quick start

### Yagna daemon

As the `dapp-manager` uses the `dapp-runner`, which in turn requires a properly configured
[yagna](https://github.com/golemfactory/yagna) daemon, you'll need to have it set up.

Please follow the [Yagna installation instruction](/docs/creators/dapps/creators/javascript/examples/tools/yagna-installation-for-requestors) tutorial and ensure that your `yagna` is up and running. 

{% alert level="info" %}
Note that if you followed installation instructions above you should have autoconfigured app-key of  `try-golem` instead of `32-char-app-key-here`.

{% /alert %}

Most importantly, make sure you have set the `YAGNA_APPKEY` in your environment, e.g. with:

```bash
export YAGNA_APPKEY=insert-your-32-char-app-key-here
```

or, on Windows:

```bash
set YAGNA_APPKEY=insert-your-32-char-app-key-here
```

and if you don't know what your app-key is, you can always query `yagna` with:

```bash
yagna app-key list
```

### Python environment

First, ensure you have Python 3.8 or later:

```bash
python3 --version
```

{% alert level="info" %}

Depending on the platform, it may be just `python` instead of `python3`.
{% /alert %}

If your Python version is older, consider using [pyenv](https://github.com/pyenv/pyenv-installer).

Once your python interpreter reports a version 3.8 or later, you can set up your virtual
environment:

```bash
python3 -m venv ~/.envs/dapp-manager
source ~/.envs/dapp-manager/bin/activate
```

or, if you're on Windows:

```shell
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\dapp-manager
%HOMEDRIVE%%HOMEPATH%\.envs\dapp-manager\Scripts\activate.bat
```

### dApp manager

Install `dapp-manager` with a simple:

```bash
pip install dapp-manager
```


## Run an example application

### Get the sample app

```
curl https://raw.githubusercontent.com/golemfactory/dapp-store/81e3f50aba90a84d335a26cb9cc2ea778193be11/apps/todo-app.yaml > app.yaml
```

### And the default config file

```
curl https://raw.githubusercontent.com/golemfactory/dapp-runner/main/configs/default.yaml > config.yaml
```

```bash
dapp-manager start --config config.yaml app.yaml
```

The app is started in a background `dapp-runner` process, and you're returned an application ID in
the form of a hexadecimal string. You can use this ID to query the state and other output streams
using `dapp-manager`'s `read` command.

Most importantly, you may query the `data` stream with:

```bash
dapp-manager read --follow <the-hex-string> data
```

waiting for the following line

```shell
{"web": {"local_proxy_address": "http://localhost:8080"}}
```

{% alert level="info" %}

    Your port number (`8080` above) may be different.
{% /alert %}

Once you get it, you can access the launched app by following that link.


In case something goes amiss, `dapp-manager` will output:
```App <the-hex-string> is not running.```

Whatever the reason, you can still query the various streams of a terminated dapp by adding the
`--no-ensure-alive` option, e.g.:

```bash
dapp-manager read <the-hex-string> --no-ensure-alive stderr 
```

## Full usage

```shell
Usage: dapp-manager [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  autocomplete  Enable CLI shell completion for the given shell.
  kill          Stop the given app forcibly.
  list          List known app IDs (both active and dead).
  prune         Remove data for non-running apps.
  read          Read output from the given app.
  start         Start a new app using the provided descriptor and config...
  stop          Stop the given app gracefully.
```

### Start

The `start` command launches a new instance of the `dapp-runner` in a background process and
returns the hexadecimal string that is the identifier of the running `dapp-runner` instance.

```shell
Usage: dapp-manager start [OPTIONS] DESCRIPTORS...

  Start a new app using the provided descriptor and config files.

Options:
  -c, --config PATH  Path to the file containing yagna-specific config.
                     [required]
  --help             Show this message and exit.
```

Importantly, it requires a config file which contains the parameters used to connect to the `yagna`
daemon and initialize the requestor engine.

Of course, it also requires one or more descriptor files that are used by the `dapp-runner` to
deploy the specified applications on Golem.

### Stop / Kill

The `stop` and `kill` commands terminate the given `dapp-runner` instance, the main difference
being the signal that's sent to do that. Essentially, `stop` should be enough and should give the
`dapp-runner` a chance to shut the app down gracefully, correctly terminating the services,
closing the agreements and paying for them.

In case `stop` is stuck for whatever reason, you might want to resort to `kill` which terminates
the `dapp-runner` immediately without allowing for any graceful shutdown.

### List

The `list` command shows the identifiers of all the previously-started apps, whether they're still
running or not.

### Prune

`prune` causes `dapp-manager` to remove the data for those apps that it had previously identified as
defunct. Consequently, those apps will no longer appear on the list.

Unless an app has been explicitly stopped with a `stop` or `kill` command, the `dapp-manager`
will not purge it until it has had a chance to notice the termination, e.g. by issuing a `read`
command to the defunct app.

### Read

The `read` command outputs the full contents of the specified stream. There are five streams as
specified by the usage below:

```shell
Usage: dapp-manager read [OPTIONS] APP_ID [state|data|log|stdout|stderr]

  Read output from the given app.

Options:
  --ensure-alive / --no-ensure-alive
  -f, --follow
  --help                          Show this message and exit.
```

By default, the stream will only be output if the app is currently running. Otherwise, you'll get
the ```App <the-hex-string> is not running.``` message and no stream.

If you wish to query a stream of a terminated app, add the `--no-ensure-alive` parameter to the
specific `read` command.

### Shell completion

This program supports shell completion for all of its commands, as well as existing dApp IDs (where applicable).

To enable completion, use the `autocomplete` command with your shell of choice:

* **bash**:

    ```bash
    dapp-manager autocomplete bash
    ```

* **zsh**:

    ```bash
    dapp-manager autocomplete zsh
    ```

* **fish**:

    ```bash
    dapp-manager autocomplete fish
    ```

The completion functions are defined in `dapp_manager/autocomplete/scripts`.

Should the entrypoint name ever change, those files will need to be updated as well.

{% alert level="warning" %}

Completion will **NOT WORK** when the program is invoked with `python -m dapp_manager`.

Only the installed entrypoint (i.e. `dapp-manager`) is supported.
To have it available, run `poetry install` when using the source version of `dapp-manager`.
{% /alert %}





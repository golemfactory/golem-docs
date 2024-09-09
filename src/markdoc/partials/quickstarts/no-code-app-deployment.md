## What's in it for me?

By following this tutorial, you'll see how easy it is to deploy web applications on Golem.

You should be able to complete it regardless of your level of experience. However, it will be helpful if you have some fluency using basic Unix tools like `curl` or `git` and are not afraid of running console commands.

## Installation

### 1. Install and run Yagna

Yagna is a service that communicates and performs operations on the Golem Network. Let's get started by installing it.

#### Install Yagna

{% tabs %}
{% tab label="Linux/Mac" %}

On Linux/MacOS, you can install it using our installation script:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}

{% tab label="Windows" %}

On Windows, you will need to install Yagna manually:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Extract the downloaded archive.
3.  Move the extracted `yagna.exe` and `gftp.exe` files to a directory of your choice. 
4. Add that directory to your system's PATH environment variable. This will allow you to run the `yagna` command from any location in your terminal.

{% /tab %}

{% /tabs %}

#### Start the Yagna service

Open a terminal (command line window) and define the app-key that will allow our script to use the Yagna API. In this tutorial, we will use the `try_golem` app-key, which will be automatically generated and configured when you start Yagna.

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
export YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% tab label="Windows" %}

```shell
set YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% /tabs %}

{% alert level="warning" %}
This creates a temporary app-key that will disappear after the Yagna service is restarted. This is useful for experimenting and running examples and tutorials. However, for production deployment, it is recommended to use a unique app-key generated using the  `yagna app-key create <key-name>` command. 
{% /alert %}

Then start the `yagna` service:

```bash
yagna service run
```

Now, set the `YAGNA_APPKEY` environment variable, which will be used by your Golem application to connect to Yagna:

{% tabs %}

{% tab label="MacOS / Linux" %}

```bash
export YAGNA_APPKEY=try_golem
```

{% /tab %}
{% tab label="Windows" %}

```shell
set YAGNA_APPKEY=try_golem
```

{% /tab %}
{% /tabs %}

### 2. Get the virtual environment set up

It's best to run any Python application in a virtual environment. This will let you avoid cluttering your system's Python installation with unnecessary packages.

Ensure you're running Python >= 3.8 and that you have the `venv` module installed (it's normally included in the Python distribution).

Prepare a virtual environment for the tutorial script:

{% tabs %}

{% tab label="Linux / MacOS" %}

```bash
python3 -m venv --clear ~/.envs/dapps
source ~/.envs/dapps/bin/activate
```

{% /tab %}
{% tab label="Windows" %}

```shell
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\dapps
%HOMEDRIVE%%HOMEPATH%\.envs\dapps\Scripts\activate.bat
```

{% /tab %}
{% /tabs %}

### 3. Install `dapp-runner`

The tool that deploys apps to Golem, `dapp-runner` is installable from the PyPi repository with the following command:

```shell
pip install -U pip dapp-runner
```

## Running a dApp on Golem

### Get the sample app

```
curl https://raw.githubusercontent.com/golemfactory/dapp-store/81e3f50aba90a84d335a26cb9cc2ea778193be11/apps/todo-app.yaml > webapp.yaml
```

### And the default config file

```
curl https://raw.githubusercontent.com/golemfactory/dapp-runner/main/configs/default.yaml > config.yaml
```


### Run the app

Now you can start the app on Golem.

```shell
dapp-runner start --config config.yaml webapp.yaml
```

Once the app launches, you should see some status messages describing various stages of the deployment. And finally, you should see:

```json
{ "web": { "local_proxy_address": "http://localhost:8080" } }
```

This means that the app is ready and can be viewed at: [http://localhost:8080](http://localhost:8080)

(The port on your machine may be different)

That's it!

{% docnavigation title="Next steps" %}

- Now that you have been able to experience launching decentralized apps on Golem, you might want to learn how to build one yourself: [Hello World dApp](/docs/creators/dapps/hello-world-dapp)

{% /docnavigation %}
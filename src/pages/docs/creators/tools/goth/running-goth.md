---
description: Running Goth
title: Running Goth
type: Instructions
---

# Running Goth

Here's what you need to do in order to set up `goth` and ensure it's running properly on your system.

## Python setup

### Python 3.8

The test runner requires Python 3.8+ to be installed on the system. You can check your currently installed Python version by running:

```
python3 --version
```

If you don't have Python installed, download the appropriate package and follow instructions from the [releases page](https://www.python.org/downloads/).

For the sake of compatibility with other projects and/or your local Python 3 installation you can install [`pyenv`](https://github.com/pyenv/pyenv) to manage and switch between multiple Python versions. The `pyenv` installer can be found [here](https://github.com/pyenv/pyenv-installer). You can also use your preferred way of managing Python virtual environments to achieve this.

## Docker setup

The tests are performed on live Yagna nodes running in an isolated network. Currently, this setup is achieved by running a number of Docker containers locally using Docker Compose.

To run the test containers you will need to have both Docker and Docker Compose installed on your system.

### Docker Engine

To install the Docker engine on your system follow these [instructions](https://docs.docker.com/engine/install/). To verify your installation you can run the `hello-world` Docker image:

```
docker run hello-world
```

### Docker Compose

Docker Compose is a separate binary which needs to be available on your system in order to run Yagna integration tests. `goth` requires `docker-compose` **version 1.27** or higher. There are two ways you can install it:

1. Download the appropriate executable from the [releases page](https://github.com/docker/compose/releases) and make sure its present on your system's `PATH`.
2. Use the `docker-compose` installed to your `goth` Python environment (you will need to activate the environment in the shell from which you run your tests).

{% alert level="warning" %}
`goth` is currently based on Docker Compose version 1, it is most likely incompatible with Compose version 2.
{% /alert %}

## Goth installation

`goth` is available as a PyPI package. To install it in your Python environment run the following command:

```
pip install goth
```

{% alert level="info" %}
It is recommended that you use a Python virtual environment for this installation to avoid potential conflicts with your system-wide Python packages.

There is a number of possible solutions to managing Python virtual environments, we recommend: [`pyenv`](https://github.com/pyenv/pyenv), [`poetry`](https://python-poetry.org/) and [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/en/latest/).

{% /alert %}

## Running the test network

### Getting a GitHub API token

When first starting the test network, `goth` uses the GitHub API to fetch metadata and download artifacts and images. While all of these assets are public, using the GitHub API still requires basic authentication. Therefore, you will need to provide `goth` with a personal access token.

To generate a new token, go to your account's [developer settings](https://github.com/settings/tokens). You will need to grant your new token the `public_repo` scope, as well as the `read:packages` scope. The packages scope is required in order to pull Docker images from GitHub.

Once your token is generated you need to do two things:

1. Log in to GitHub's Docker registry by calling: `docker login docker.pkg.github.com -u {username}`, replacing `{username}` with your GitHub username and **pasting in your access token as the password** (**do not** use your GitHub password here). You only need to do this once on your development machine.
2. Export an environment variable named `GITHUB_API_TOKEN` and use the access token as its value. This environment variable will need to be available in the shell from which you run `goth`.

## Starting a local network

Having installed `goth` and its prerequisites we can now run a local network of Golem nodes on our machine.

First, create a copy of the default assets:

```
python -m goth create-assets your/output/dir
```

Where `your/output/dir` is the path to a directory under which the default assets should be created. The path can be relative and it cannot be pointing to an existing directory. These assets do not need to be re-created between test runs.

With the default assets created you can run the local test network like so:

```
python -m goth start your/output/dir/goth-config.yml
```

If everything went well you should see output similar to the one presented below:

```
Local goth network ready!

You can now load the requestor configuration variables to your shell:

source /tmp/goth_interactive.env

And then run your requestor agent from that same shell.

Press Ctrl+C at any moment to stop the local network.
```

Every test run consists of the following steps:

1. `docker-compose` is used to start the so-called "static" containers (e.g. local blockchain, HTTP proxy) and create a common Docker network for all containers participating in the test.&#x20;
2. The test runner creates a number of Yagna containers (as defined in the test's topology) which are connected to the `docker-compose` network.&#x20;
3. For each Yagna container started a so-called "probe" object is created and made available inside the test via the `Runner` object.
4. The integration test scenario is executed as defined in the function called by `pytest`.
5. Once the test is finished, all previously started Docker containers (both "static" and "dynamic") are removed.

{% alert level="success" %}
If the test run succeeded, your development environment is now ready to [test your own apps using goth's interactive mode](/docs/creators/tools/goth/running-goths-interactive-mode).

If anything failed, please refer to the troubleshooting section below or reach out to us on one of our regular support channels.
{% /alert %}

## Custom test options

### Assets path

It's possible to provide a custom assets directory which will be mounted in all Yagna containers used for the test. The assets include files such as the exe script definition (`exe-script.json`) or payment configuration (`accounts.json`).

To override the default path, use the `--assets-path` parameter, passing in the custom path:

```
poetry run poe e2e_test --assets-path test/custom_assets/some_directory
```

### Log level

By default, the test runner will use `INFO` log level. To override it and enable more verbose logging, use the `--log-cli-level` parameter:

```
poetry run poe e2e_test --log-cli-level DEBUG
```

### Logs path

The destination path for all test logs can be overridden using the option `--logs-path`:

```
poetry run poe e2e_test --logs-path your/custom/path
```

### Yagna binary path

By default, a set of yagna binaries is downloaded from GitHub to be used for a given test session. The option `--yagna-binary-path` allows you to use binaries from the local file system instead. Its value must be a path to either a directory tree containing yagna binaries (e.g. `target` directory from a local `cargo` build) or a `.zip` archive file (e.g. downloaded manually from GitHub Actions):

```
poetry run poe e2e_test --yagna-binary-path /path/to/binaries
```

### Yagna commit hash

By default, `goth` uses a `yagna` binary from the latest GitHub Actions successful build on `master` branch. This option can be used to override that behaviour. The value here needs to be a git commit hash being the head for one of the build workflow runs:

```
poetry run poe e2e_test --yagna-commit-hash b0ac62f
```

### Yagna .deb path

Path to a local .deb file or a directory containing a number of such archives. All of these .deb files will be installed in the Docker image used for Yagna nodes in the tests. To specify the path, use the option `--yagna-deb-path`:

```
poetry run poe e2e_test --yagna-deb-path path/to/yagna.deb
```

## Troubleshooting integration test runs

All components launched during the integration test run record their logs in a pre-determined location. By default, this location is: `$TEMP_DIR/goth-tests`, where `$TEMP_DIR` is the path of the directory used for temporary files. This path will depend either on the shell environment or the operating system on which the tests are being run (see [`tempfile.gettempdir`](https://docs.python.org/3/library/tempfile.html) for more details). This default location can be overridden using the option `--logs-path` when running tests.

The logs from a test run are recorded in the following directory structure:

- `runner.log` - logs recorded by the integration test runner engine.
- `proxy.log` - logs recorded by the HTTP 'sniffer' proxy, which monitors network traffic going into the yagna daemons launched for the test.
- `test_*` - directory with logs generated by nodes running as part of a single test (as defined in the test's topology). This directory is named after the name of the test scenario itself.

  The logs follow a straightforward naming convention, with daemons and their clients logging into dedicated files, e.g.:

  - `provider.log` - console output from `provider` yagna daemon.
  - `provider_agent.log` - console output of the provider agent, running alongside `provider` daemon.

{% docnavigation title="Next steps" %}

[Running Goth in interactive mode](/docs/creators/tools/goth/running-goths-interactive-mode)

{% /docnavigation %}

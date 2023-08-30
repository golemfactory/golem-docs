---
description: Create your first "Hello World" dApp on Golem
title: dApp on Golem tutorial
---

# Hello World dApp

## What's in it for me?

By following this tutorial, you'll be able to get more confident about:

- Preparing a Docker image for your app with the ultimate purpose of deploying it on Golem.
- Converting the VM image to Golem and uploading it to Golem's repository.
- Creating a descriptor reflecting your app using YAML syntax similar to that used by `docker-compose`.
- Deploying your app to Golem using `dapp-runner`.

## Prerequisites

To follow this tutorial in full, you need to have Docker installed on your machine. If you don't have it installed, please refer to [instructions on Docker's website](https://docs.docker.com/get-docker/).

{% alert level="info" %}

This step-by-step tutorial will be easier for you to follow if you previously had a chance to [launch the `yagna` service as a requestor](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors) and have any experience building portable web applications on Docker, but you should be able to complete it without any prior experience nevertheless.

{% /alert %}


## Choice of tools

The example that we're going to show you here uses a very simple Python HTTP server.

On the other hand, if you're more acquainted with any other language or platform that enables you to easily create a simple HTTP server and pack it into a Docker image, go for it.

Just as well - if the setup and construction of such a simple app is obvious to you, feel free to jump to __Converting the image to Golem__

## Environment preparation

For the sake of completeness, we're including the steps that prepare our Python environment. Again, you're free to do it your way and skip to [Hello World dApp](#hello-world-app):


### Create and activate the virtual environment


{% tabs %}

{% tab label="Linux / MacOS" %}
```bash
python3 -m venv ~/.envs/hello-dapps
source ~/.envs/hello-dapps/bin/activate
pip install -U pip poetry
```
{% /tab %}
{% tab label="Windows" %}
```shell
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\hello-dapps
%HOMEDRIVE%%HOMEPATH%\.envs\hello-dapps\Scripts\activate.bat
```
{% /tab %}
{% /tabs %}



### Initialize the project

{% tabs %}

{% tab label="Linux / MacOS" %}
```shell
mkdir -p hello_golem/server_app
cd hello_golem/server_app/
poetry init --no-interaction --python="^3.9"
```
{% /tab %}
{% tab label="Windows" %}
```shell
mkdir "hello_golem\server_app"
cd hello_golem/server_app/
poetry init --no-interaction --python="^3.9"
```
{% /tab %}
{% /tabs %}

### Add the requirements

In our little example here, we'll use `Flask`, a very robust and minimal Python back-end framework.

```shell
poetry add Flask
```

There, we're ready to start coding our app.

## Hello world app

{% alert level="info" %}

If you're lost in any moment, feel free to consult our source of the "Hello World" application available at: [https://github.com/golemfactory/dapp-experiments/tree/main/05\_hello\_world](https://github.com/golemfactory/dapp-experiments/tree/main/05\_hello\_world)
    
Similarly, instead of coding along, you may just check out the whole thing from the repository:
    
```shell
git clone https://github.com/golemfactory/dapp-experiments.git
cd dapp-experiments/05_hello_world
```

{% /alert %}

Fire up your favourite editor or IDE navigate to the `hello_golem/server_app` directory that we have set up above.

If you have configured the app using poetry like we did above, you should already see the `pyproject.toml` and `poetry.lock` files.

In the directory, add `hello_golem.py` and just paste the following few lines which are a slightly modified version of [Flask's original, minimal example](https://flask.palletsprojects.com/en/1.1.x/quickstart/):

```python
from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_golem():
    return 'Hello from Golem!'
app.run(host="0.0.0.0")
```

The above code achieves the following:

1. Import the `Flask` engine
2. Define our Flask app
3. Set up the root route for the app
4. Launch the Flask server

{% alert level="info" %}

You may wish to customize the "Hello..." message up there, so as to make your application (and, more importantly, its VM image) unique. Our repository is set up to reject repeated uploads of images with matching signatures so, if you encounter an issue while uploading your application later in this tutorial, just please use the hash that we'll provide you there.
{% /alert %}

{% alert level="warning" %}

For local testing, we could have gotten away with just `app.run()`. That makes the server listen on the local host address (`127.0.0.1`) by default. We need it to bind to all addresses so that it can later work correctly in Golem.
{% /alert %}

## Local test

Let's test this app locally, before we start preparing it for Golem. Launch the app:

```shell
python hello_golem.py
```

and then point your browser to [http://127.0.0.1:5000](http://127.0.0.1:5000).

You should see "Hello from Golem!" which proves that our minimal app is working correctly when launched completely stand-alone. Good!

## Preparing the Docker image

We need to start with a Docker image since the only currently-supported way of creating a GVMI (Golem Virtual Machine Image) file is by providing a Docker image for conversion.

If you'd like to know more about the GVMI images and about the conversion process, please refer to:
[Golem Images explained](/docs/creators/javascript/guides/golem-images)

Let's back-up a little and ensure that we're one directory above `server_app`.

```shell
cd ..
```

To build a docker image, we'll need file called `Dockerfile` with the following contents:

```dockerfile
FROM python:3.9-slim
RUN pip install -U pip poetry
RUN mkdir /app
COPY server_app/* /app/
WORKDIR /app
RUN poetry install --no-root
ENTRYPOINT poetry run python hello_golem.py
```

Let's now go through what happens there.

1). Take a stock Python Docker image (the slim version, we won't need anything more here):

```dockerfile
FROM python:3.9-slim
```

2). Install the needed tools:

```dockerfile
RUN pip install -U pip poetry
```

3). Copy the app contents to the image:

```dockerfile
RUN mkdir /app
COPY server_app/* /app/
```

4). Install the app's requirements:

```dockerfile
WORKDIR /app
RUN poetry install --no-root
```

5). Finally, set up the Docker's entrypoint:

```dockerfile
ENTRYPOINT poetry run python hello_golem.py
```

### Testing the Docker image

With the Dockerfile ready, we can test whether the app works inside the container:

```shell
docker build -t hello-dapps .
docker run -it -p 5000:5000 hello-dapps
```

Once again, after the image launches, you may connect to http://127.0.0.1:5000/ with your browser, and you should be able to see the "Hello..." message, which confirms that the app has been correctly packaged and is working as it should.

## Converting the image to Golem

To be able to use our newly-created image on Golem, we need to convert it to the Golem's custom format and then make the image available to providers. The easiest way to achieve the latter is to upload the image to our image repository.

### Obtain the `gvmkit-build` tool

```shell
pip install gvmkit-build
```

### Upload the image to the repository

```shell
gvmkit-build golem-example --push --nologin
```

Once the command completes, you should get a line containing the image hash, e.g.:

```
image already generated
on 102777844: success. hash link 3032b6e97914eb5ee87d71188180d271f04eb9472b6da0d308943b2f
```

The hash there: `3032b6e97914eb5ee87d71188180d271f04eb9472b6da0d308943b2f` is what we're interested in.

If the command fails because the image has already been uploaded, feel free to use the hash above and follow through with the tutorial.

## Prepare the Golem dApp descriptor

Now that we have the image ready, uploaded into the Golem repo and its hash in hand, we can prepare the descriptor of the application that we're going to launch on Golem.

For a more complete information about the dApp descriptors, please consult the [appropriate section of the "Creating Golem dApps" article](/docs/creators/dapps/creating-golem-dapps#application-descriptor). Here, we're just cover the bare minimum.

Here's what it looks like:

```yaml
payloads:
  hello:
    runtime: "vm"
    params:
      image_hash: "3032b6e97914eb5ee87d71188180d271f04eb9472b6da0d308943b2f"
nodes:
  hello:
    payload: "hello"
    init:
      - run:
          args: ["/bin/sh", "-c", "poetry run python hello_golem.py > /dev/null &"]
    http_proxy:
      ports:
        - "5000"
```

Let's add it as `hello_golem.yaml` in the `hello_golem` directory.

There are two obligatory elements in it, the `payload` and `nodes`.

### The payload

The payload is the definition of what kind of activity you'd like the providers to run on your behalf.

In this case, it's just the reference to the VM image we just uploaded.

```yaml
payloads:
  hello:
    runtime: "vm"
    params:
      image_hash: "3032b6e97914eb5ee87d71188180d271f04eb9472b6da0d308943b2f"
```

### The node definition

A `node` entry defines the parameters of the specific instances of services that we want launched on Golem.

```yaml
nodes:
  hello:
    payload: "hello"
    init:
      - run:
          args: ["/bin/sh", "-c", "poetry run python hello_golem.py > /dev/null &"]
    http_proxy:
      ports:
        - "5000"
```

A couple of important details there.

Firstly, given the fact that Docker's `ENTRYPOINT` is not yet supported by the `dapp-runner`, our service definition must contain any and all commands that will start our service in the container.

Moreover, as the commands included in the `init` must finish before the service can be treated as started, we need to put the service in the background. For this reason, we're launching our service using the shell and adding the ampersand (`&`) to the end of the command.

One more caveat is that we need to redirect the output stream of the launched app so that it stays running after we exit the shell.

Lastly, we're adding the `http_proxy` element because our service is an HTTP app which we wish to be able to talk to. There's currently no way for the service to be exposed directly on the provider's own address but we can use the local HTTP proxy functionality to expose a port on our own machine that will forward traffic to the app through the Golem Network.

## The config file

There's one more piece of data that we'll need to run our application. It's the configuration of our Golem requestor that we need to supply for the `dapp-runner`.

Unless you want to customize your set-up, it'll be easiest to just use the default that comes with the `dapp-runner`, which you can get with:

```shell
curl https://raw.githubusercontent.com/golemfactory/dapp-runner/main/configs/default.yaml > golem_config.yaml
```

## Running your app

### Ensure your yagna service is started

First, let's make sure that you have your yagna service up and running and if not, execute this in another console session:

```shell
yagna service run
```

{% alert level="info" %}

If you haven't set-up your yagna service before, please refer to our [Yagna installation instruction](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors).
{% /alert %}



### Obtain the application key

Please, run:

```shell
yagna app-key list
```
and copy the value listed in the `key` column.

If the above command doesn't give you any 32-char keys, just create your app key:

`shell yagna app-key create requestor`

and copy the value output by this command.

### Export your application key to the environment

{% tabs %}

{% tab label="Linux / MacOS" %}
```bash
export YAGNA_APPKEY=<your key>
```
{% /tab %}
{% tab label="Windows" %}
```bash
set YAGNA_APPKEY=<your key>
```
{% /tab %}
{% /tabs %}




### Install the `dapp-runner`

{% tabs %}

{% tab label="Linux / MacOS" %}
```bash
python3 -m venv --clear ~/.envs/dapp-runner
source ~/.envs/dapp-runner/bin/activate
pip install dapp-runner
```
{% /tab %}
{% tab label="Windows" %}
```shell
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\dapp-runner
%HOMEDRIVE%%HOMEPATH%\.envs\dapp-runner\Scripts\activate.bat
pip install dapp-runner
```
{% /tab %}
{% /tabs %}

### Run the app

Now you're ready to start the app on Golem.

```shell
dapp-runner start --config golem_config.yaml hello_golem.yaml
```

Once the app launches, you should see some status messages describing various stages of the deployment. And finally, you should see:

```
{"hello": {"local_proxy_address": "http://localhost:8081"}}
```

The port may be different on your machine, since it's assigned automatically. Copy the address that you got there and paste that into your browser.

Assuming everything went well, you've just managed to create and deploy your own decentralized application on Golem.

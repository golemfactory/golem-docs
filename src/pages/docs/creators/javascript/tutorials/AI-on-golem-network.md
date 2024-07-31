---
title: Using AI model deployed on the Golem Network
description: A tutorial on how to use for Golem Network providers to run AI models
pageTitle: Golem Requestors' Tutorial on how run AI models on GPU providers
type: Tutorial
---

# How to use Golem Network providers to run AI models.

In this tutorial, we will show you how to play with the `ollama` `qwen2` model on Golem Network, and if you would like to experiment with another model: how to create an image with the desired ollama model. We will also explain to you the critical elements of the requestor script so you can tune the script to your specific needs.

The tutorial consists of 4 parts:

1. Prerequisites - will lead to how to install Yagna, run it, and get funds.
2. Using the model on Golem provider - will show you how to run the requestor script to start interaction with an AI model running on GPU.
3. Preparing the image - if you are not satisfied with the model copied into the example image, check out how to prepare the image with your model.
4. Understanding the requestor script - if you are interested in how the requestor script is built - look here.

# 1. Prerequisites:

For this tutorial, you need `node.js`, `curl`, or `ollama cli` installed. For section 3 (building image with custom model) you need `docker` and `gvmkit-build`.

## Install Yagna

You need the Yagna service installed and running. If you do not have it already running follow these steps:

{% tabs %}
{% tab label="Linux/ MacOS" %}

On Linux/ MacOS, you can install it using our installation script like this:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.

{% /tab  %}
{% tab label="Windows" %}

On Windows, download the requestor package - prefixed golem-requestor - appropriate for your platform from: https://github.com/golemfactory/yagna/releases/latest.
Unzip the archive to extract the two files: yagna.exe and gftp.exe.
Copy those files to C:\Windows\System32 or unzip them in another folder then, update your PATH variable to include this folder.

{% /tab  %}
{% /tabs %}

## Start the Yagna service.

Open a terminal (command line window) and define the app-key that will allow our script to use the Yagna API:

{% tabs %}
{% tab label="Linux/ MacOS" %}

```bash
export YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab  %}
{% tab label="Windows" %}

```bash
set YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab  %}
{% /tabs %}

Then start the yagna service:

```bash
yagna service run
```

## Get GLM and MATIC tokens

Requesting tasks on the Golem Network requires GLM tokens. If you run this example on a test network, you can use test GLM. The example is configured to run on GPU on `mainnet` where you need GLM. In the last section, there is information on how to update the script to use CPU providers or run on the testnet.

Acquiring GLM:

First, you need to know the wallet address used for your node to rent resources on the network.

Run

```bash
yagna id show
```

to print the address where you need to send GLM and MATIC.

If you do not have any yet, do not worry, just go to https://glm.golem.network/ and follow the instructions to acquire tokens.

<!--
? [Ile GLM trzeba na 1h GPU: 2]
? On the stats.golem.network user needs to go to providers, select filters, and select GPU, to check prices in USD, not GLM. I cannot easily direct to check the GPU provider prices.
-->

If you prefer just try for free on CPU providers (sorry: we do not offer GPU providers in the testnet ;-( ) you can try the script on the `testnet` (still some changes to the script are needed, see last section).

To get some test funds open another terminal and run the command:

```bash
yagna payment fund
```

It will top up your account with test GLM tokens. These tokens can only be used on the testnet.

# 2. Running AI models on the Golem Network

Create a new Node.js project and install the Golem SDK by entering the following commands in your terminal:

```bash
mkdir golem-ai
cd golem-ai
npm init
npm install @golem-sdk/golem-js
npm install @golem-sdk/pino-logger
```

Please note: This script requires Node.js version 18.0.0 or higher.

Create a file named `requestor.mjs` and copy the following content into it. The code will engage a provider with price limits of 2 GLM per hour, deploy the image with `ollama` serving the `qwen:0.5b` model, and make it available on port 11434.

```js
import { GolemNetwork } from '@golem-sdk/golem-js'
import { pinoPrettyLogger } from '@golem-sdk/pino-logger'
import { clearInterval } from 'node:timers'

/**
 * Utility funcnction to wait for a certain condition to be met or abort when needed
 *
 * @param {Function} check The callback to use to verify if the condition is met
 * @param {AbortSignal} abortSignal The signal to observe and cancel waiting if raised
 *
 * @return {Promise<void>}
 */
const waitFor = async (check, abortSignal) => {
  let verifyInterval

  const verify = new Promise((resolve) => {
    verifyInterval = setInterval(async () => {
      if (abortSignal.aborted) {
        resolve()
      }

      if (await check()) {
        resolve()
      }
    }, 3 * 1000)
  })

  return verify.finally(() => {
    clearInterval(verifyInterval)
  })
}

/**
 * Helper function breaking stdout/sterr multiline strings into separate lines
 *
 * @param {String} multiLineStr
 *
 * @return {String[]} Separate and trimmed lines
 */
const splitMultiline = (multiLineStr) => {
  return multiLineStr
    .split('\n')
    .filter((line) => !!line)
    .map((line) => line.trim())
}

const myProposalFilter = (proposal) => {
  /*
// this filter can be used to engage a provider we used previously
// it should have the imaged cached so the deplotment will be faster
 if (proposal.provider.name == "<enter provider name here>") return true;
  else return false;
*/
  return true
}

const glm = new GolemNetwork({
  logger: pinoPrettyLogger({
    level: 'info',
  }),
  api: { key: 'try_golem' },
  payment: {
    driver: 'erc20',
    network: 'polygon',
  },
})

const controller = new AbortController()

let proxy = null
let rental = null
let isShuttingDown = 0
let serverOnProviderReady = false

try {
  // Establish a link with the Golem Network
  await glm.connect()

  // Prepare for user initiated shutdown
  process.on('SIGINT', async function () {
    console.log(' Server shutdown was initiated by CTRL+C.')

    if (isShuttingDown > 1) {
      //await new Promise((res) => setTimeout(res, 2 * 1000));
      return process.exit(1)
    }

    isShuttingDown++
    controller.abort('SIGINT received')

    await proxy?.close()
    await rental?.stopAndFinalize()
    await glm.disconnect()
  })

  const network = await glm.createNetwork({ ip: '192.168.7.0/24' })

  const order = {
    demand: {
      workload: {
        imageHash: '23ac8d8f54623ad414d70392e4e3b96da177911b0143339819ec1433', // ollama with qwen2:0.5b
        minMemGib: 8,
        capabilities: ['!exp:gpu', 'vpn'],
        engine: 'vm-nvidia',
      },
    },
    market: {
      rentHours: 0.5,
      pricing: {
        model: 'linear',
        maxStartPrice: 0.0,
        maxCpuPerHourPrice: 0.0,
        maxEnvPerHourPrice: 2.0,
      },
      offerProposalFilter: myProposalFilter,
    },
    network,
  }

  rental = await glm.oneOf({ order }, controller)
  const exe = await rental.getExeUnit(controller)

  const PORT_ON_PROVIDER = 11434 // default port
  const PORT_ON_REQUESTOR = 11434 // will use the same outside

  console.log('Will start ollama on: ', exe.provider.name)
  //console.log(await exe.run("ls -la /usr/bin/ollama"));
  //console.log(await exe.run("ls -la /root/.ollama"));
  //console.log(await exe.run("/usr/bin/ollama serve"));

  const server = await exe.runAndStream(
    //`sleep 1 && HOME=/root /usr/bin/ollama serve`
    `sleep 1 && /usr/bin/ollama serve` // new image should have HOME=/root
  )

  server.stdout.subscribe((data) => {
    // Debugging purpose
    splitMultiline(data).map((line) => console.log('provider >>', line))
  })

  server.stderr.subscribe((data) => {
    // Debugging purpose
    splitMultiline(data).map((line) => console.log('provider !!', line))

    // Once we see that the server started to listen, we can continue
    if (data.toString().includes('Listening on [::]:11434')) {
      serverOnProviderReady = true
    }
  })

  // Wait for the server running on the provider to be fully started
  await waitFor(() => serverOnProviderReady, controller.signal)

  // Create a proxy instance to that server
  proxy = exe.createTcpProxy(PORT_ON_PROVIDER)

  proxy.events.on('error', (error) =>
    console.error('TcpProxy reported an error:', error)
  )

  // Start listening and expose the port on your requestor machine
  await proxy.listen(PORT_ON_REQUESTOR)
  console.log(`Server Proxy listen at http://localhost:${PORT_ON_REQUESTOR}`)

  // Keep the process running to the point where the server exits or the execution is aborted
  await waitFor(() => server.isFinished(), controller.signal)
} catch (err) {
  console.error('Failed to run the example', err)
} finally {
  await glm.disconnect()
}
```

To run it use the command:

```bash
node requestor.mjs
```

The output of the script should look very similar to the one below:

![ollama Tags output](/gpu/ollama-example/output-1.png)
![ollama Tags output](/gpu/ollama-example/output-2.png)
![ollama Tags output](/gpu/ollama-example/output-3.png)

Once it is run you can interact with the model using the ollama cli:

```bash
ollama run qwen:0.5b
```

or using REST API:

```bash
curl http://localhost:11434/v1/chat/completions -H "Content-Type: application/json" -d "{ \"model\": \"qwen2:0.5b\", \"messages\": [ { \"role\": \"user\", \"content\": \"What is a Golem Network?\" } ]}"
```

The example output looks like this:

![ollama Tags output](/gpu/ollama-example/curl-chat.png)

Note: you cannot pull another model to the provider without requesting the `outbound` service from providers. Look to the next section to learn how to create an image with another model, to be able to use another model without the outbound feature.

# 3. Preparing the image

This step requires you to have docker running and the Golem `gvmkit-build` image conversion utility installed.

If you do not have docker installed please follow these [intructions](https://docs.docker.com/engine/install/).

Link to gvmkit-build installation instructions is [here](/docs/creators/tools/gvmkit/gvmkit-build-installation).

In this section, we will show you how we prepared our image. You can then modify the Dockerfile to create your custom one.

Here is our Dockerfile:

```bash
FROM ollama/ollama
ENV HOME=/root
COPY ./models /root/.ollama/models
```

We used the official `ollama/ollama` docker image as a starting point.
We have set up the HOME variable to /root. We will act as a `root` user on the remote machine. Then we copy the model data that we already have in the `./model` directory.

Note that the `docker build` command allows you to copy data from the context where the command is run, so we had to copy the model into the directory where we build the image.
Originally the models are stored in the $HOME/.ollama/models, where HOME is a home directory.
To get the model there we had to run the ollama locally and pull the model to our PC (using the `ollama serve` and `ollama pull qwen2:0.5b` commands).

Note: `05.b` indicates the version of the model (the smallest one). Make sure you have the space to pull the larger model you select.
Note: gvmkit-build will allow you to upload to registry models up to 10GB.

Alternatively, if you do not have `ollama` installed, you can run the `ollama/ollama` image in docker, and exec `ollama pull qwen2:0.5b` command in the container.

Here are example commands on Windows:

```bash
'docker run -d -v .\models:/root/.ollama/models -p 11434:11434 --name ollama ollama/ollama'
'docker exec -it ollama ollama pull qwen2:0.5b'
```

These commands will run the container with the image and use the local `.\models\` folder as a volume for a directory where `ollama` stores pulled models. The second command actually runs the `ollama pull` command in the container.

Then build the image:

```bash
docker build -t ollama:mytag .
```

Once the model is built you can convert it to the GVMI format:

```bash
gvmkit-build ollama:mytag
```

and once it is converted, upload it to the Golem Registry:

```bash
gvmkit-build ollama:mytag --push --nologin
```

Note: upload will take some time. 2 GB images may be uploaded up to 1 hour.

In the gvmkit-build output look for the line:

`Image link (for use in SDK): < imageHash >`

Copy the `imageHash`, it will be needed in the next step.

# 4. Understanding the script

Once we prepare the image with another model we can test it on the Golem Network. In this tutorial, we will not examine the whole script, instead will focus on critical elements that are crucial, to run the right model on GPU provider.

The script follows the structure of the standard requestor script.
We connect to `glm` (GolemNetwork), acquire an `exeunit` from a `rental`, and run a command `ollama serve` on the provider.
In the docker image, the `ollama serve` command is run automatically as the entrypoint. In GVMI entrypoints are not supported. As we cannot run two commands simultaneously on the provider (yet) we will start the `ollama` on the provider and will utilize `ollama` REST API to interact with the model.
The command is run using the `runAndStream` method so we can collect the output as a stream and print it in the terminal. The command on the provider is delayed by 1 sec using `sleep 1` to make sure we will obtain the whole output in the output stream. We then observe the output until the ollama server is up and running and then we will utilize a built-in proxy functionality to expose provider service on the desired port on our requestor PC.
(If you try to run a proxy for an unexisting service you will receive error 400, so we make sure the service is up and running before we start the proxy).

Once the proxy is running we can use local ollama CLI or curl to interact with the model.
We can check if our model is available by running `curl http://localhost:11434/api/tags`

For the examples image the output should be like this:

![ollama Tags output](/gpu/ollama-example/curl-tags.png)

If you run the script without any change, you will certainly not see your model present. We need to tell the provider to use your newly created image.

Look at the section:

```js
    demand: {
      workload: {
            imageHash: "23ac8d8f54623ad414d70392e4e3b96da177911b0143339819ec1433",
        minMemGib: 8,
        capabilities: ["!exp:gpu", "vpn"],
        engine: "vm-nvidia",
      },
```

Replace the original image hash with the hash returned from the gvmkit-build in the previous step.
Let's look at the other workload options:

To indicate you want a provider with a GPU you need to include the following options:

```js
        capabilities: ["!exp:gpu", "vpn"],
        engine: "vm-nvidia",
```

If you would run a test just on the CPU, you can remove these lines or replace them with:

```js
      engine: "vm",
```

If your model is large, you might need to request a provider with more than 8 GB of memory.

When you are running your task on a `mainnet` pay attention to the following section:

```js
    market: {
      rentHours: 0.5,
      pricing: {
        model: "linear",
        maxStartPrice: 0.0,
        maxCpuPerHourPrice: 0.0,
        maxEnvPerHourPrice: 2.0,
      },
      offerProposalFilter: myProposalFilter,
    },
```

Here we define that we rent the resources for a maximum of 0.5 an hour (you can terminate earlier by pressing Ctrl+C) and define the maximum price you are willing to pay for the resources. If there is no GPU provider availale with the price limits used in the example (2 GLM per hour) you can consider increasing your budget or decide to use CPU providers, that offer resoruces at lower rates.

Note the `myProposalFilter`. It can be used to filter the providers we hire. If your model is large, so will be your image and it will take some time for providers to download it from the registry. For 7GB image, it may take up to 10 minutes - depending on the provider bandwidth. Therefore, once you engage a given provider you might prefer to select the same one next time. If he has your image cached, deployment will be much faster.

To find the provider you used just look in the script output for a line like: `Will start ollam on: <provider name>` and update the `myProposalFilter`.

Lastly, let's look at GolemNetwork options.

```js
const glm = new GolemNetwork({
  logger: pinoPrettyLogger({
    level: 'info',
  }),
  api: { key: 'try_golem' },
  payment: {
    driver: 'erc20',
    network: 'polygon',
  },
})
```

The `api: { key: "try_golem" }` object, defines the app-key configured during the yagna start. Check the docs page for information on how to set a unique value.

The payment options:

```js
 payment: {
   driver: "erc20",
   network: "polygon",
 },
```

This section indicates you want your task to be run on the `mainnet` - the part of GolemNetwork where you pay with GLM (and where GPU providers are available).
If you would like just to test your scripts on low-performance CPU providers comment this section out, and your task will search for providers on the test network. Do not forget to modify the `demand` options, to request CPU providers only.

Now you should know all you need to know start your adventure with AI on Golem Network! Should you encounter any problems with the Golem Network, Yagna, or the requestor scripts, please reach out to us via our [Discord channel](https://chat.golem.network/).

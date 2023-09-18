---
description: Step by step guide to create a REST API with Express.js that uses the Golem Network to process data.
title: REST API example with Express.js
type: Tutorial
---

# REST API example with Express.js

This tutorial will guide you through the process of creating a REST API with Express.js that uses the Golem Network to process data. The goal is to show you how to use the [Job API](/docs/creators/javascript/guides/retrievable-tasks) in a real-world scenario.

## What will you build?

You will create a simple REST API that will allow you to send some text to the Golem Network and get back a text-to-speech result in the form of a WAV file.

## Prerequisites

This tutorial assumes that you have already installed Yagna and have it running in the background. If you haven't done so yet, please follow the instructions in [this tutorial](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors) before proceeding.

## Setting up the project

First, create a new directory for your project and initialize a new Node.js project in it:

```bash
mkdir golem-express
cd golem-express
npm init -y
npm install @golem-sdk/golem-js express
```

## Creating the API

Let's start by creating a new file called `index.mjs` and pasting the following code into it:

```js
import express from 'express'

const app = express()
const port = 3000

app.use(express.text())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Start your app by running `node index.mjs` and run `curl http://localhost:3000` in another terminal window. You should see the following output:

```bash
Hello World!
```

So far, so good! Stop the app by pressing `Ctrl+C` and let's move on to the next step.

## Connecting to the Golem Network

Now let's connect to the Golem Network. First, import the `GolemNetwork` class from `@golem-sdk/golem-js` and create a new instance of it. If you're feeling adventurous, [you can create your own image](/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format#building-your-docker-image) and install [espeak](https://espeak.sourceforge.net/) on it, but to save time we will use the image `severyn/espeak:latest` provided by one of our community members.

```js
import { GolemNetwork } from '@golem-sdk/golem-js'

const golem = new GolemNetwork({
  image: 'severyn/espeak:latest',
  yagnaOptions: { apiKey: 'try_golem' },
})
golem
  .init()
  .then(() => {
    console.log('Connected to the Golem Network!')
  })
  .catch((err) => {
    console.error('Error connecting to the Golem Network:', err)
    process.exit(1)
  })
```

Let's also add a handler for the `SIGINT` signal so that we can close the connection to the Golem Network when the app is stopped.

```js
process.on('SIGINT', async () => {
  await golem.close()
  process.exit(0)
})
```

## Creating a retrievable task

Let's add a new endpoint to our API that will take some text from the request body and create a new task on the Golem Network. To do that, we will use the `createJob()` method. This method will give us a `Job` object that we can use to get the state of the job and its results later. On the provider side, we will run the `espeak` command to convert the text to speech, save it to a `.wav` file and download that file to your local file system with the `downloadFile()` method. We will give the file a random name to avoid collisions.

```js
app.post('/tts', async (req, res) => {
  if (!req.body) {
    res.status(400).send('Missing text parameter')
    return
  }
  const job = await golem.createJob(async (ctx) => {
    const fileName = `${Math.random().toString(36).slice(2)}.wav`
    await ctx
      .beginBatch()
      .run(`espeak "${req.body}" -w /golem/output/output.wav`)
      .downloadFile('/golem/output/output.wav', `public/${fileName}`)
      .end()
    return fileName
  })
  res.send(`Job started! ID: ${job.id}`)
})
```

## Getting the job state

Now let's add another endpoint that will allow us to get the state of the job. We will use the `fetchState()` method of the `Job` object to get the state of the job and return it to the user.

```js
app.get('/tts/:id', async (req, res) => {
  const job = golem.getJobById(req.params.id)
  try {
    const state = await job.fetchState()
    res.send(state)
  } catch (err) {
    res.status(404).send('Job not found')
  }
})
```

## Getting the job results

Finally, let's add an endpoint that will allow us to get the results of the job. We will use the `fetchResults()` method of the `Job` object to get the results of the job, and return them to the user. We will also serve the files from the `/public` directory, so that the user can easily listen to the results in a browser.

```js
// serve files in the /public directory
app.use('/results', express.static('public'))

app.get('/tts/:id/results', async (req, res) => {
  const job = golem.getJobById(req.params.id)
  try {
    const results = await job.fetchResults()
    res.send(
      `Job completed successfully! Open the following link in your browser to listen to the result: http://localhost:${port}/results/${results}`
    )
  } catch (err) {
    res.status(404).send('Job not found')
  }
})
```

## Testing the app

We're done with the code! Let's start the app and test it.

First, let's start the server:

```bash
node index.mjs
```

### Sending a POST request

Open a new terminal window. Let's send a POST request to the `/tts` endpoint. Feel free to replace `Hello Golem` with any text you want:

```bash
curl \
    --header "Content-Type: text/plain" \
    --request POST \
    --data "Hello Golem" \
    http://localhost:3000/tts
```

You should see the output:

```bash
Job started! ID: <job_id>
```

Make sure to write down the job ID, as we will need it in the next step.

### Sending a GET request to get the job state

Now let's send a GET request to the `/tts/<job_id>` endpoint to get the state of the job:

```bash
curl http://localhost:3000/tts/<job_id>
```

You should see the output:

```
pending
```

Wait a few seconds and send the same request again. You should see the output:

```
done
```

### Sending a GET request to get the job results

Finally, let's send a GET request to the `/tts/<job_id>/results` endpoint to get the results of the job:

```bash
curl http://localhost:3000/tts/<job_id>/results
```

You should see the output:

```
Job completed successfully! Open the following link in your browser to listen to the result: http://localhost:3000/results/<file_name>
```

Open the link in your browser, and you should hear the text you sent to the API!

Congratulations! You have just created a REST API that uses the Golem Network to process data! 🎉

## Full code

Here's the full code of the `index.mjs` file:

```js
import express from 'express'
import { GolemNetwork } from '@golem-sdk/golem-js'

const app = express()
const port = 3000

app.use(express.text())

const golem = new GolemNetwork({
  image: 'severyn/espeak:latest',
  yagnaOptions: { apiKey: 'try_golem' },
})
golem
  .init()
  .then(() => {
    console.log('Connected to the Golem Network!')
  })
  .catch((err) => {
    console.error('Error connecting to the Golem Network:', err)
    process.exit(1)
  })

app.post('/tts', async (req, res) => {
  if (!req.body) {
    res.status(400).send('Missing text parameter')
    return
  }
  const job = await golem.createJob(async (ctx) => {
    const fileName = `${Math.random().toString(36).slice(2)}.wav`
    await ctx
      .beginBatch()
      .run(`espeak "${req.body}" -w /golem/output/output.wav`)
      .downloadFile('/golem/output/output.wav', `public/${fileName}`)
      .end()
    return fileName
  })
  res.send(`Job started! ID: ${job.id}`)
})

app.get('/tts/:id', async (req, res) => {
  const job = golem.getJobById(req.params.id)
  try {
    const state = await job.fetchState()
    res.send(state)
  } catch (err) {
    res.status(404).send('Job not found')
  }
})

// serve files in the /public directory
app.use('/results', express.static('public'))

app.get('/tts/:id/results', async (req, res) => {
  const job = golem.getJobById(req.params.id)
  try {
    const results = await job.fetchResults()
    res.send(
      `Job completed successfully! Open the following link in your browser to listen to the result: http://localhost:${port}/results/${results}`
    )
  } catch (err) {
    res.status(404).send('Job not found')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGINT', async () => {
  await golem.close()
  process.exit(0)
})
```

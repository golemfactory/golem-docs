# Introduction

In the previous Quickstart, we showed you how to run a simple task on the Golem Network. In real applications, you will often want to run tasks that take a significant amount of time to complete. For such cases, it is useful to be able to check the status of the task and retrieve the results or errors after the task has completed. In this Quickstart, we will show you how to do just that.

We will run a simple task (just running a basic shell command on a rented provider) and then check the status of the task and retrieve the results at the end

It should take just a few minutes to complete, and you will see the command output printed in your terminal.

## Prerequisites

This example assumes that you have already installed Yagna and have it running in the background. If you haven't done so yet, please follow the instructions in [this tutorial](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors) before proceeding.

# Setting up the project

If you have already completed the [previous Quickstart](/docs/quickstarts/js-quickstart), you can skip this step.
First, create a new directory for your project and initialize a new Node.js project in it:

```bash
mkdir golem-quickstart
cd golem-quickstart
npm init -y
npm install @golem-sdk/golem-js
```

# Creating a retrievable task

Create a new file called `retrievable-task.mjs` and paste the following code into it:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/docs-examples/quickstarts/retrievable-task/task.mjs" language="javascript" /%}

The code above creates a new Golem Network client, creates a new job, and then waits for the job to finish. When the job is finished, it fetches the results and prints them to the console.

# Running the task

Run the following command in your terminal:

```bash
node retrievable-task.mjs
```

You should see the following output:

```
Job is still running...
Job is still running...
Job is still running...
Job finished with state: done
Job results: Hello, Golem!
```

Congratulations! You have just run your first retrievable task on the Golem Network! 🎉

# What's next?

If you're interested in seeing a more advanced example of the job API in action, check out the [Express server example](/docs/creators/javascript/tutorials/rest-api-with-express) that shows how to create a simple REST API that will allow you to send some text to the Golem Network and get back a text-to-speech result in the form of a WAV file.

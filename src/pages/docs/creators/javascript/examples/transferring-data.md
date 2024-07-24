---
title: JS Task API - Data Transfer Methods in Golem Network
description: Explore methods for file and JSON data transfer between providers and remote computers using the Golem Network's JS Task API, with practical examples and environment-specific commands.
pageTitle: Data Transfer Techniques in Golem Network - JS Task API Examples
type: Example
---

# JS Task API Examples: transferring data

## Introduction

In this article, we will present methods that let you send files to and from a provider as well as send JSON to a remote computer.

{% alert level="warning" %}
Look at the table below to check what particular methods are available in each environment.
{% /alert %}

The following commands are currently available:

| Command          | Available in node.js | Available in web browser |
| ---------------- | :------------------: | :----------------------: |
| `run()`          |         yes          |           yes            |
| `uploadFile()`   |         yes          |            no            |
| `uploadJson()`   |         yes          |           yes            |
| `downloadFile()` |         yes          |            no            |
| `uploadData()`   |         yes          |           yes            |
| `downloadData()` |          no          |           yes            |
| `downloadJson()` |          no          |           yes            |

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install libraries.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/task-executor
npm i @golem-sdk/pino-logger
```

To run the examples provided below, copy the code supplied there into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Uploading a file to the provider

In this example, we calculate the `md5` hash of the example script `worker.mjs`, send it to a remote computer, and calculate the `md5` hash of the file in the remote location. Finally, we print both values for comparison.

{% alert level="info" %}

This example requires a simple `worker.mjs` script that can be created with the following command:

```bash
echo console.log("Hello Golem World!"); > worker.mjs
```

{% /alert  %}

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/transferring-data/upload-file.mjs" language="javascript" /%}

![Uploadfile output log](/te/uplaodfile_log.png)

## Downloading a file from the provider

In this example, we create a file on a remote computer, list its content to a result object, and finally download it to compare its content with the result obtained remotely.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/transferring-data/download-file.mjs" language="javascript" /%}

![Downloadfile output log](/te/downloadFile_log.png)

## Uploading JSON to provider

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/transferring-data/upload-json.mjs" language="javascript" /%}

![DownloadJSON output logs](/te/uploadJSON_log.png)

## Uploading data to and from the provider (in a browser)

In this example, we demonstrate how to use the `uploadData()` and `downloadData()` methods that allow you to send and receive data when you run your requestor script from a browser. The code below realizes the following job: let the user select an image file and a text, then send it to the provider where it utilizes ImageMagick to combine the image and text to create a meme. The result is displayed in the browser window.

The example utilizes a basic HTML boilerplate that defines UI components:

- a form to select the background image for the meme and user text.
- the `Generate meme` button to trigger the task
- the result frame where the output meme will be displayed
- log section - where the logs are displayed.

{% alert level="warning" %}

To run this example you must use Yagna version 0.13 or higher and run it using the `--api-allow-origin` parameter.
The example code should be saved as the `index.html` file and served by i.e. `http-server`. See [Web Quickstart](/docs/creators/javascript/task-executor/te-browser-quickstart) for instructions.

{% /alert  %}

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/transferring-data/transfer-data-in-browser.html" language="javascript" /%}

The `.uploadData(fileData, inputImage)` method is used to copy the user-provided data to the location defined by `inputImage`. The file is read from a disk by the `readFile()` function.

The `.downloadData(outputImage)` method downloads the data which is accessible in the `data` attribute of the respective result object. The `setResponse()` function is used to update the `src` attribute of the dom element devised to display the output.

Other functions are explained in the [Web Quickstart](/docs/creators/javascript/task-executor/te-browser-quickstart) article.

## Uploading JSON to and from the provider (in a browser)

In this example, we demonstrate how to use the `uploadJson()` and `downloadJson()` methods that allow you to send and receive JSON data when you run your requestor script from a browser. The code below realizes the following job: let the user define the JSON object `{ "input": "Hello World" }`, then send it to the provider. On the remote computer, JSON is saved as `/golem/work/input.json`. Next the attribute `input` is replaced into `output` with `sed` command and saved as `/golem/work/output.json`. Finally, the file is downloaded with the `downloadJson()` method. The output of the command contains the JSON as `data` attribute.

The example utilizes a basic HTML boilerplate that defines UI components:

- the `Run` button to trigger the task
- the result frame where the content of output attribute of the JSON will be displayed
- log section - where the logs are displayed.

{% alert level="warning" %}

To run this example you must use Yagna version 0.13 or higher and run it using the `--api-allow-origin` parameter. See [Web Quickstart](/docs/creators/javascript/quickstarts/golem-in-a-browser) for instructions.

{% /alert  %}

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/transferring-data/upload-json-in-browser.html" language="javascript" /%}

All other functions are explained in the [Web Quickstart](/docs/creators/javascript/task-executor/te-browser-quickstart) article.

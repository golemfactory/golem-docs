---
description: Template for an example article
title: This is page title displayed in browser tab.
---

# Example title

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above

{% /alert %}

## Prerequisites

Yagna service is installed and running with `try_golem` app-key configured.

## How to run examples

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm i @golem-sdk/golem-js
```

Copy the code into the `index.mjs` file in the project folder and run:

```bash
node index.mjs
```

## Introduction

Examples should be simple, short and each code snippet ready to copy and run.

Examples should focus on single aspects and show how to use a given feature. 

If you have more than one examples listem them.

If there is a need to compare differnt points use a table.


| Command     | Available in node.js| Available in web browser |
| ----------- | :------------------:|:------------------------:| 
| `run()` | yes | yes|
| `uploadFile()` | yes | no |
| `uploadJSON()` | yes | no |
| `downloadFile()` | yes | no |

{% alert level="info" %}
You can notify reader about some important topics. 
{% /alert %}

If all examples in the artcle follow specific scenario, you can explain it here.

## Giving a title

Examples title should tell what is the outcome of the example.

```js
import { TaskExecutor } from "@golem-sdk/golem-js";

```

![replacement text for an image](/github-icon.png)



Images should be placed in /public folder.


## Another example

In the example tell:
- why reader might use it
- how he should use it
- point to outcome
- point to interesting things that can tell more about he network 


## Showing variants

{% tabs %}

{% tab label="Variant 1" %}

Variant 1 body here

{% /tab %}
{% tab label="variant 2" %}

Variant 2 body here

{% /tab %}
{% /tabs %}

{% docnavigation title="Next steps" %}

- [Title of the article you believe the reader should read](#another-example) next.

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Title](https://github.com) of other related sections: i.e. Tutorials, Guides. 

{% /docnavigation %}
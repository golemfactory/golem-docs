---
description: Template for an example article
title: This is the page title displayed in a browser tab.
---

# Introduction

Explain what will be demonstrated in this article.

## Prerequisites

Yagna service is installed and running with the `try_golem` app-key configured.

{% alert level="info" %}

This example has been designed to work with the following environments:

- OS X 10.14+, Ubuntu 20.04 or Windows
- Node.js 16.0.0 or above

{% /alert %}


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

Examples should be simple and short with each code snippet ready to copy and run.

Examples should focus on single aspects and show how to use a given feature. 

If you have more than one example, list them.

If there is a need to compare different points, use a table.


| Command     | Available in node.js| Available in web browser |
| ----------- | :------------------:|:------------------------:| 
| `run()` | yes | yes|
| `uploadFile()` | yes | no |
| `uploadJSON()` | yes | no |
| `downloadFile()` | yes | no |

{% alert level="info" %}
You can notify readers about some important topics. 
{% /alert %}

If all examples in the article follow a specific scenario, you can explain it here.

## Giving a title

Example titles should tell what is the outcome of the example.

```js
import { TaskExecutor } from "@golem-sdk/golem-js";

```

![replacement text for an image](/github-icon.png)



Images should be placed in /public folder.


## Another example

In the example, explain:
- Why readers might use it
- How they should use it
- Point to outcomes
- Point to interesting things that can tell readers more about the network 


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
---
description: Template for an example article
title: This is page title displayed in browser tab.
---

{% alert level="info" %}

## Prerequisites 

List prerequisites here, with links to instruction 
- Yagna daemon installed and running with `try_golem` app-key configured ([instructions](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors)).
- Docker installed and Docker service available.

## Setting up project

Create a project folder, initialize a Node.js project, and install the `yajsapi` library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```
{% /alert %}

# Introduction

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

# Giving a title

Examples title should tell what is the outcome of the example.

```js
import { TaskExecutor } from "yajsapi";

```

![replacement text for an image](/github-icon.png)



Images should be placed in /public folder.


# Another example

In the example tell:
- why reader might use it
- how he should use it
- point to outcome
- point to interesting things that can tell more about he network 


# Showing variants

{% tabs %}

{% tab label="Variant 1" %}

Variant 1 body here

{% /tab %}
{% tab label="variant 2" %}

Variant 2 body here

{% /tab %}
{% /tabs %}

{% docnavigation title="Next steps" %}

- [Title of the article you believe reader should read](#another-example)

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Title](https://github.com) of other related sections: i.e. Tutorials, Guides 

{% /docnavigation %}
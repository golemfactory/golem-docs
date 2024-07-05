---
title: Utilizing Custom Golem Images in Requestor Scripts
description: Learn to integrate custom Golem images into requestor scripts with practical examples, covering hash and tag usage for requestor scripts.
pageTitle: Integrate Custom Golem Images in Your Scripts - Practical Examples and Tips
type: Example
---

# Examples of how to use your own Golem image in a requestor script

## Introduction

Golem images defines a remote environment where you execute your tasks inside. They are identified either by their `tag` or by a `hash`. You can read more about Golem images in [Golem Images Explained](/docs/en/creators/javascript/guides/golem-images) guide.

## Prerequisites

Ensure you have the Yagna service installed and running, with `try_golem` as your configured app-key.

## Running the Examples

Let's create a project folder, start a Node.js project, and add the `@golem-sdk/task-executor` library.

```bash
mkdir golem-example
cd golem-example
npm init
npm install @golem-sdk/task-executor
```

Paste the code in `index.mjs` located in the project folder, then run:

```bash
node index.mjs
```

## Ways to Use Golem images

### Using a Hash

A hash, in relation to Golem images, serves as a distinctive identifier formed from the image's content. They are complex, elongated strings and can become cumbersome to handle and recall, particularly in sizable projects housing various images and versions. Without tags, hashes fall short in conveying information relevant to the image's purpose or version. Due to these factors, using tags, which are readable and understandable, is generally the favored approach for dealing with images.

To illustrate the use of a hash, we can take a look at the code from the [Quickstart Example](/docs/en/creators/javascript/quickstarts/quickstart)

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/working-with-images/hash.mjs" language="javascript" /%}

Consider the hash `529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4` in the code snippet, showcasing the initialization of the TaskExecutor:

```js
const executor = await TaskExecutor.create({
  package: '529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4',
  yagnaOptions: { apiKey: 'try_golem' },
})
```

If you've rolled out a custom Golem image and uploaded it to the registry, you can substitute this hash (`529 [...] 1106d4`) with your image's gvmkit-build-generated hash. If you've tagged it, you can use that tag like in the next example.

### Using a tag

Tags are helpful for managing different versions of your Golem images. They make specific versions easier to identify, track, and deploy. Instead of dealing with complex hash identifiers, you may use meaningful and understandable tag names. They provide an opportunity for intuitive naming systems, enhancing project structure and promoting effective team collaboration.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-sdk-task-executor/master/examples/docs-examples/examples/working-with-images/tag.mjs" language="javascript" /%}

{% docnavigation title="Next steps" %}

- [Custom Golem image creation step by step tutorial](/docs/en/creators/javascript/tutorials/building-custom-image)

{% /docnavigation %}

{% docnavigation title="See also" %}

- [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

{% /docnavigation %}

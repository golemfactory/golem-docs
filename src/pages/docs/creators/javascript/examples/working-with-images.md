---
title: Working with Golem images
description: Examples of how to use your own Golem image in a requestor script
---

{% alert level="info" %}

# Prerequisites 
Yagna service installed and running with `try_golem` app-key configured.

[gvmkit-build installed](/docs/creators/javascript/examples/tools/gvmkit-build-installation), 

a Golem image hash or a Golem image tag

# Setting up project

Create a project folder, initialize a Node.js project, and install the `yajsapi` library.


```bash
mkdir golem-example
npm init
npm i yajsapi
```
{% /alert %}

# Introduction

Golem images define a remote environment here you execute tasks. They are identified either by their `tags`` or by a `hash`. You can read more about Golem images in [Golem Images Explained](/docs/creators/javascript/guides/golem-images) guide.

## Using Golem images

Below you will find an example requestor script used in the [QuickStart](/docs/creators/javascript/quickstarts/quickstart). 


```js
import { TaskExecutor } from "yajsapi";

(async () => {

    const executor = await TaskExecutor.create({
            package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
        yagnaOptions: { appKey: 'try_golem' }});
    
    const result = await executor.run(
        async (ctx) => (await ctx.run("node -v")).stdout);
    
    await executor.end();
    
    console.log("Task result:", result);

})();
```

Note the `529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4` hash in the line where TaskExecutor is created:


```js
    const executor = await TaskExecutor.create({
            package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
        yagnaOptions: { appKey: 'try_golem' }});
```

If you had created your custom Golem image and published it to the repository, you can simply replace the hash (`529 [...] 1106d4`) in the script with the hash generated for your image by gvmkit-build tool or with your own defined tag.

```js
package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",
```
or

```js
package: "golem/my_example:latest",
```


{% docnavigation title="Next steps" %}

- [Custom Golem image creation step by step tutorial](/docs/creators/javascript/tutorials/building-custom-image)

{% /docnavigation %}

 
{% docnavigation title="See also" %}

Our [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).

{% /docnavigation %}
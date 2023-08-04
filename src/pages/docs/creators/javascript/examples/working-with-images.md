---
Title: Using Golem images
Description: Examples of how to use your own Golem image in a requestor script
---

# Using Golem images

!!! info

    * Required: [gvmkit-build installation](./tools/installing-gvmkit-build.md), a Golem image hash or a Golem image tag, and an environment for requesting

Below you will find an example requestor script used in the [QuickStart](../quickstart/quickstart.md). 

=== "JavaScript/npm"
    **requestor.mjs**    
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


!!! golem-icon "Next steps:"

    [Custom Golem image creation step by step tutorial](../tutorials/image.md){ .md-button .md-button--primary }
 
    Note: More information can be found in the [golemfactory/gvmkit-build-rs repository](https://github.com/golemfactory/gvmkit-build-rs).
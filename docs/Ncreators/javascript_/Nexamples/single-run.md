---
description: Running a single task
Title: Running a single task
---

!!! Prerequisities	
- yagna daemon installed and running


### Setting up project

Create a project folder, initialize node project and install yajsapi library.
```bash
mkdir golem-example
npm init
npm i yajsapi
```

### Single run


The requestor script run once a single tasks defined buy task function:
`ctx.run("node -v")`. The tasks consist of a single command `node -v` and will be run on remote computer in the environemnt based on the content of the image indicated by `529... 6d4` hash.

Result of the command is available as stdout of the result object returned from the `cx.run()`: 


```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }});
  
  const result = await executor.run(
    async (ctx) => (await ctx.run("node -v")).stdout);
  
  await executor.end();

  console.log("Task result:", result);
})();
```

Here you can see the script output:

![Single run](/assets/run_log.png "Requestor script output logs")

In the logs you can see requestor works in goerli network (this is a test network). 
The task was ececuted once on a single provider. 

In the table we see summary and the costs (we paid here in test GLM) and the the result of the command: version of the node in the image.

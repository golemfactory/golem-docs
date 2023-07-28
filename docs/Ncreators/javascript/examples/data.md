---
description: Sending data
---

In this article we will present methods that let you send files to and from a provider as well as send JSON to a remote computer.

!!! Note: at this moment sending files and JSON methods are available only in scripts that are run in node.js. 

!!! Prerequisites	
- Yagna daemon installed and running

### Setting up project

Create a project folder, initialize a Node.js project and install the `yajsapi` library.

```bash
mkdir golem-example
npm init
npm i yajsapi
```

### Uploading a file to provider

In this example, we calculate the `md5` hash of the example script `worker.mjs`, send it to a remote computer, and calculate the `md5` hash of the file in the remote location. Finally, we print both values for comparison.

```js
import { TaskExecutor } from "yajsapi";
import {createHash} from 'node:crypto';
import * as fs from 'fs';


(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });

const buff = fs.readFileSync('worker.mjs'); 
const hash = createHash('md5').update(buff).digest('hex');

  const result = await executor.run(async (ctx) => {
     
           await ctx.uploadFile("./worker.mjs", "/golem/input/worker.mjs");

           const res  = await ctx.run(`node -e "const crypto = require('node:crypto'); const fs = require('fs'); const buff = fs.readFileSync('/golem/input/worker.mjs'); const hash = crypto.createHash('md5').update(buff).digest('hex'); console.log(hash); "`);
       
       return res.stdout;
       
  });

  console.log('md5 of the file send to provider: ',result);
  console.log('Locally computed  md5: ',hash);

  await executor.end();
 
})();
```


![uploadfile](/assets/uplaodfile_log.png "Requestor script output logs")


### Downloading a file from provider

In this example, we create a file on a remote computer, list its content to a result object, and finally download it to compare its content with the result obtained remotely.

```js
import { TaskExecutor } from "yajsapi";

(async () => {
  const executor = await TaskExecutor.create({
    package: "529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4",    
    yagnaOptions: { apiKey: 'try_golem' }
  });

  


  const result = await executor.run(async (ctx) => {
     
     const res = await ctx
       .beginBatch()
       .run("ls -l /golem > /golem/work/output.txt")
       .run('cat /golem/work/output.txt')
       .downloadFile("/golem/work/output.txt", "./output.txt")
       .end()
       .catch((error) => console.error(error));

       return res[2]?.stdout
       
  });

  console.log(result);
  await executor.end();
 
})();

```

![Downloadfile](/assets/downloadfile_log.png "Requestor script output logs")

### Uploading JSON to provider

```js
import { TaskExecutor } from "yajsapi";
import * as fs from 'fs';


(async () => {
  const executor = await TaskExecutor.create({
    package: "dcd99a5904bebf7ca655a833b73cc42b67fd40b4a111572e3d2007c3",    
    yagnaOptions: { apiKey: 'try_golem' }
  });

//const buff = fs.readFileSync('worker.mjs'); 
//const hash = createHash('md5').update(buff).digest('hex');

  await executor.run(async (ctx) => {
     
    // Upload test JSON object
    await ctx.uploadJson({ "input": "Hello World" }, '/golem/input/input.json');
    
    // Modify sent JSON to replace the input key with output
    //await ctx.run("cat /golem/input/input.json | sed s/input/output/ > /golem/work/output.json");
    
    // Download the JSON object.
    //const output = await ctx.downloadJson('/golem/work/output.json');
    
    //const res  = await ctx.run(`node -e "const crypto = require('node:crypto'); const fs = require('fs'); const buff = fs.readFileSync('/golem/input/worker.mjs'); const hash = crypto.createHash('md5').update(buff).digest('hex'); console.log(hash); "`).catch((error) => console.error(error));
       
  });

  //const buff = fs.readFileSync('output.json'); 
  //console.log(buff);

  await executor.end();
 
})();

```



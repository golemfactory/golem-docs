---
Description: A minimal example of a functional Golem requestor agent in a browser
---

# Requestor in browser

In most of our examples, we demonstrate how to run a requestor script in Node.js. However, you can also run your scripts in a browser context. This example will explain how to do it.
    

## Prerequisites

Before getting started, you need to install and launch the Yagna daemon in version 0.13.0+. Note such a version is available as `release candidate`. It can be installed using instructions for manual Yagna installation available [here](../examples/tools/install_yagna.md). 

In addition, you need to start Yagna with a parameter that allows you to handle REST API requests with a CORS policy. You can do this by running the following command:


=== "MacOS / Linux"

   
    ```shell
    yagna service run --api-allow-origin='http://localhost:8080'
    ```

=== "Windows"

    ```shell
    yagna service run --api-allow-origin=http://localhost:8080
    ```

The `--api-allow-origin` value should be set to the URL where your web application will be served.
In this example, we will use `http-server`.

## Setting up project

```bash
mkdir web_golem
cd web_golem
npm install --global http-server
```

This will install `http-server` utility to host our web page, where we will run our Golem app.

## HTML page

Next, we'll create the main `index.html` file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Golem App</title>
    <script type="module" src="requestor.mjs"></script>
</head>
<body>
    <button onclick="run()">Run</button>
    <div class="container">
        <div>
            <p>Results</p>
            <pre id="results"></pre>
        </div>
        <div>
            <p>Logs</p>
            <pre id="logs"></pre>
        </div>
    </div>
  <script></script>
</body>
</html>
```

In this layout, there are three elements:

- A "Run" button, which executes the script on Golem
- A "Results" container, which displays the results
- A "Logs" container, which displays the API logs


## Requestor script


Next, we'll create a requestor.mjs file with the following content:

```js
import * as yajsapi from "https://unpkg.com/yajsapi"

function appendResults(result) {
    const results = document.getElementById('results');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(result));
    results.appendChild(div);
}
function appendLog(msg, level = 'info') {
    const logs = document.getElementById('logs');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(`[${new Date().toISOString()}] [${level}] ${msg}`));
    logs.appendChild(div);
}
const logger = {
    log: (msg) => appendLog(msg),
    warn: (msg) => appendLog(msg, 'warn'),
    //debug: (msg) => appendLog(msg, 'debug'),
    error: (msg) => appendLog(msg, 'error'),
    info: (msg) => appendLog(msg, 'info'),
    table: (msg) => appendLog(JSON.stringify(msg, null, "\t")),
}
async function run() {

    const executor = await yajsapi.TaskExecutor.create({
        package: "dcd99a5904bebf7ca655a833b73cc42b67fd40b4a111572e3d2007c3",
        //yagnaOptions: { apiKey: '1083168de3ae4ba2bda2cd55b58c3e9b' },
        yagnaOptions: { apiKey: 'try_golem' },
        logger
    }).catch(e => logger.error(e));
    await executor
        .run(async (ctx) => appendResults((await ctx.run("echo 'Hello World'")).stdout))
        .catch(e => logger.error(e));
    await executor.end();
}

document.run = run;

export { };
```

Note the file contains the `run()` function that creates the body of the requestor script (similar to the one we use in Node.js) and a set of helper functions that will let us present the logs and results in the browser window.

Now, if we have a running Yagna daemon started with the ``--api-allow-origin` properly set to `http://localhost:8080` and have your Yagna APP key set to 'try_golem' launch `http-server` we should see our app available in the browser.

[ Open localhost ](http://localhost:8080)

If you click the run button, after a while, in the result container, we should get the result of the script: `Hello World` and see the logs of executed commands in the log container.

![Output logs](../../../assets/browser_log.png)

!!! golem-icon "Next steps:"

[Golem in web browser example explained](../tutorials/web.md)

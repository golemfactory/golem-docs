---
Description: Golem in browser QuickStart explained
---

!!! info

    In this tutorial, you will create a simple web page that will trigger your requestor script and display the results and output logs in the browser window. 

    While in the QuickStart the js script is in an external file, in this tutorial we will keep both HTML and js script in the same file.  

## Prerequisites

Before getting started, you need to install and launch the Yagna daemon in version 0.13.0+. Note such a version is available as a `release candidate`. It can be installed using instructions for manual Yagna installation available [here](../examples/tools/install_yagna.md). 

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

Next, we'll create the main `index.html` file with a minimal layout:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Golem App</title>
    <script type="module"> // replace with script code </script>
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

Note the `<script>` tag in the `<head>` section  - here we will place our js code.


## Using the Yajsapi bundle library

First, we will import the `yajsapi` library:

```html
        <script>
       import * as yajsapi from "https://unpkg.com/yajsapi"
       </script>
```

### Task Executor

When use will press the `Run` button `run()` function will be invoked. The body of this function should contain the typical sequence necessary to run TaskExecutor. So we will create it, then run the task function, and finally will end it.

Note that the `create()` method received additional 3 parameters: 
* `package` identifies the image that we want to use on a provider,
* `apiKey` is the key that enables our script to use Yagna REST API,
* Logger is a function that will be used by SDK to log - we will define it in a moment.

```html
<script>
    //
    // .. previously added code 
    // 
    async function run() {
        const executor = await yajsapi.TaskExecutor.create({
            package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
            yagnaOptions: { apiKey: 'try_golem' }
            logger
        });
        await executor
            .run(async (ctx) => appendResults((await ctx.run("echo 'Hello World'")).stdout))
            .catch(e => logger.error(e));
        await executor.end();
    }
</script>
```

The body of the `executor.run()` method is identical as in the case of Node.js executor script:
It is a task function that receives worker context. It is used to run an `echo 'Hello World'` command. `cts.run()` will produce a Promise of the result object. It will contain a stdout property that will store the output of our command.

The result is passed as an input param of the `appendResults()` function that will be responsible for displaying the outcome on the screen.

## Getting results

Now let's create the `appendResults()` function which will put the output of our application into the designated `results` container.

```html
<script>
    //
    // .. previously added code 
    // 
    function appendResults(result) {
        const results = document.getElementById('results');
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(result));
        results.appendChild(div);
    }
</script>
```

## Getting logs

The TaskExecutor offers an optional logger parameter. It will accept an object that implements the 'Logger' [Logger](../docs/interfaces/utils_logger.Logger.md) interface. The `logger` will utilize an `appendLog` function to add applicable records to the log storage area.

```html
<script>
    //
    // .. previously added code 
    // 
    function appendLog(msg, level = 'info') {
        const logs = document.getElementById('logs');
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(`[${new Date().toISOString()}] [${level}] ${msg}`));
        logs.appendChild(div);
    }
    const logger = {
        log: (msg) => appendLog(msg),
        warn: (msg) => appendLog(msg, 'warn'),
        debug: (msg) => appendLog(msg, 'debug'),
        error: (msg) => appendLog(msg, 'error'),
        info: (msg) => appendLog(msg, 'info'),
        table: (msg) => appendLog(JSON.stringify(msg, null, "\t")),
    }
</script>
```

## Run the script

Now that we have all the necessary components defined, the code between `<script>` tags should look like this:

```html
    <script type="module">

    
     
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
            debug: (msg) => appendLog(msg, 'debug'),
            error: (msg) => appendLog(msg, 'error'),
            info: (msg) => appendLog(msg, 'info'),
            table: (msg) => appendLog(JSON.stringify(msg, null, "\t")),
        }
        async function run() {
            const executor = await yajsapi.TaskExecutor.create({
                package: "dcd99a5904bebf7ca655a833b73cc42b67fd40b4a111572e3d2007c3",
                yagnaOptions: { apiKey: 'try_golem' },
                logger
            }).catch(e => logger.error(e));
            await executor
                .run(async (ctx) => appendResults((await ctx.run("echo 'Hello World'")).stdout))
                .catch(e => logger.error(e));
            await executor.end();
        }
        document.run = run;
    </script>
```

Now if we have a running Yagna daemon started with the ``--api-allow-origin` properly set to `http://localhost:8080` and have your Yagna APP key set to 'try_golem' launch `http-server` we should see our app available in the browser.

[ Open localhost ](http://localhost:8080)

If you click the run button, after a while in the result container, we should get the result of the script: `Hello World`, and in the log container we should see the logs of executed commands.

![Output logs](../../../assets/browser_log.png)

!!! golem-icon "Next steps:"


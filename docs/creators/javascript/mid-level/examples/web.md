---
description: Example of usage mid-level API from browser
---

# Task Example 1: Mid-level component in browser

!!! info

    This example illustrates following Golem features & aspects:
    
    * Simple usage mid-level component in browser context

## Prerequisites

The only difference compared to the previous examples is the launch the yagna daemon with a parameter that allows you to handle requests in REST API with CORS policy. You can do it by:

```shell
yagna service run --api-allow-origin='http://localhost:3000'
```

The origin you set depends on the place where your web application with the requestor code will be served.

## Simple app

To create a simple web application with a single html file, we use the standard nodejs library. We create `app.js` with the content:

```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(res);
});

server.listen(3000, () => console.log(`Server listen at http://localhost:3000`));
```

Then wen need to create main `index.html` file with minimal layout:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Golem App</title>
</head>
<body>
<div class="container">
  <div>
    <p>Actions</p>
    <button id="createPackage" onclick="createPackage()">Create Package</button>
    <button id="createAllocation" onclick="createAllocation()">Create Allocation</button>
    <button id="createDemand" onclick="createDemand()">Create Demand</button>
    <button id="respondProposal" onclick="respondProposal()">Confirm Proposal</button>
    <button id="createAgreement" onclick="createAgreement()">Create Agreement</button>
    <button id="confirmAgreement" onclick="confirmAgreement()">Confirm Agreement</button>
    <button id="createActivity"  onclick="createActivity()">Create Activity</button>
    <span>
      <label for="command">Run: </label>
      <span class="row padding-0">
        <input id="command" type="text" />
        <button id="execute" onclick="run()">Execute</button>
      </span>
    </span>
  </div>
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

In this layout we have three elements:
- the action area where the buttons responsible for initiating individual modules are located
- the results container which shows the results of run command
- the logs container which shows api logs

## Using Yajsapi bundle library

Yajsapi is available via CDN. You should add the following script to the head section of `index.html`

```html
<script crossorigin src="https://unpkg.com/yajsapi/yajspai.min.js"></script>
```

### Logger

Each module has specific options. The constructor parameter that occurs in each of the modules is the `logger` object. It is responsible for showing messages during the lifetime of a given module. The logger object must implement the [Logger](../../docs/interfaces/utils_logger.Logger.md) interface. To capture logging messages in our script for display purposes, we will develop a unique `logger` and create the `appendLog` function to add applicable records to the log storage area.
```html
<script>
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
## Mid-level components

each of the buttons is associated with the corresponding function that create the mid-level objects. These objects will be stored in variables:

```javascript
let vmPackage,
    account,
    allocation,
    demand,
    proposals = [],
    offer,
    agreement,
    activity;
```

We define also `yagnaOptions` which is required parameter for almost every module:

```javascript
const yagnaOptions = { apiKey: 'YOUR_YAGNA_APP_KEY', basePath: 'http://localhost:7465' };
```

You should pass your yagna application key and define the yagna daemon listening address as the base path.

### Package

The first component is `Package` [Package](../../docs/classes/package_package.Package.md). When creating a `Package`, we must determine which image we want to use.

```javascript
async function createPackage() {
  vmPackage = await yajsapi.Package.create({ imageHash: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae", logger });
}
```

### Allocation

An Allocation is a designated sum of money reserved for the purpose of making some particular payments. Allocations are currently purely virtual objects. An Allocation is connected to a payment account (wallet) specified by address and payment platform field.

```javascript
async function createAllocation() {
  const accounts = await (await Accounts.create({ yagnaOptions, logger })).list();
  account = accounts.find((account) => account?.platform === 'erc20-rinkeby-tglm');
  if (!account) logger.error("There is no available account");
  allocation = await yajsapi.Allocation.create({ account, yagnaOptions, logger }).catch(logger.error);
}
```

### Demand

To create and publish `Demand` on the market, you need to create it for previously created package and allocation.

```javascript
async function createDemand() {
  demand = await yajsapi.Demand.create(taskPackage, [allocation], options).catch(logger.error);
  demand.addEventListener(yajsapi.DemandEventType, async (event) => {
    if (event.proposal.isInitial()) {
      proposals.push(event.proposal);
      logger.debug(`New proposal has been received (${event.proposal.id.slice(0,10)})`);
    } else if (event.proposal.isDraft()) {
      offer = event.proposal;
      logger.debug(`New offer has been received (${event.proposal.id.slice(0,10)})`);
    }
  })
}
```

We add a listener for the demand and if an event with a initial proposal occurs, we add it to the proposals array, and if with a proposal draft, we assign it to the offer.

In order to receive any proposals in the draft state (offer), we need first respond to the initial proposal:

```javascript
async function respondProposal() {
  const proposal = proposals.shift();
  if (!proposal) logger.error('Ther is no available proposal');
  await proposal.respond(account.platform).catch(logger.error);
}
```

### Agreement

Now we can create initial `Agreement` with provider by:

```javascript
async function createAgreement() {
  agreement = await yajsapi.Agreement.create(offer.id, { yagnaOptions }).catch(logger.error);
}

```

This initiates the Agreement handshake phase. Created Agreement is in Proposal state.
If the agreement is successfully created, we can confirm it by:

```javascript
async function confirmAgreement() {
  await agreement.confirm().catch(logger.error);
}
```

### Activity

At this point, when we have a signed agreement with the provider, we can create the `Activity` and prepare the runtime environment:

```javascript
async function createActivity() {
  const state = await agreement.getState().catch(logger.error)
  if (state !== 'Approved') return logger.error(`Agreement is not approved. Current state: ${state}`)
  activity = await yajsapi.Activity.create(agreement.id, options).catch(logger.error);
  const script = await yajsapi.Script.create([new yajsapi.Deploy(), new yajsapi.Start()]);
  const exeScript = script.getExeScriptRequest();
  await activity.execute(exeScript).catch(logger.error);
}
```

### Run Command

Now we can execute any commands on the provider by entering them in the input field.

```javascript
async function run() {
  const command = document.getElementById('command').value
  const script = await yajsapi.Script.create([new yajsapi.Run("/bin/sh", ["-c", command])]);
  const exeScript = script.getExeScriptRequest();
  const results = await activity.execute(exeScript).catch(logger.error);
  results.on('data', result => appendResults(result));
  results.on('error', error => appendResults(error));
}
```

We need to define a special function `appendResults` which will show the result in the results container.

```javascript
function appendResults(result) {
  const results = document.getElementById('results');
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(JSON.stringify(result)));
  results.appendChild(div);
}
```

### Final tasks

If we want to finish the work of all modules, we should perform the finishing sequences one by one.

```javascript
async function end() {
  await activity.stop().catch(logger.error);
  await agreement.terminate().catch(logger.error);
  await allocation.release().catch(logger.error);
  await demand.unsubscribe().catch(logger.error);
  vmPackage = null;
  taskaccountPackage = null;
  activity = null;
  agreement = null;
  allocation = null;
  demand = null;
  proposals = [];
  offer = null;
}
```

## All done!

Now if we have a running yagna deamon with the cors parameter, after launching our application with `node app.js`, the app should be available on `localhost:3000`

[ Open localhost ](http://localhost:3000){ .md-button .md-button--primary }

and if we click the buttons one by one depending on the messages displayed in the logs after the correct creation of the `Activity`, we will be able to execute any commands on the provider.

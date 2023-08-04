---
description: ...
---

Draft:


| Area  | Error message | Potential reason |
|:------|:--------------|:------------------|
|  When launching requestor script | Error: Unable to create allocation for driver/network erc20/goerli. There is no requestor account supporting this platform. | Payment driver is not initialized for the network you use in the requestor script. Run `yagna payment init `    |
|  When launching requestor script  |  Error: Could not create new allocation. Insufficient funds to make allocation. Top up your account or release all existing allocations to unlock the funds via `yagna payment release-allocations` |  You can add additional funds on the test network by `yagna payment fund` or unlock the funds via `yagna payment release-allocations`  |
| When launching requestor script    | Error: Unable to get requestor accounts Invalid application key  |  Please make sure your script uses the defined api-key. You can check what keys are configured using: `yagna app-key list` or autoconfigure one by setting the environment variable `YAGNA_AUTOCONF_APPKEY`. Please see [Yagna installation example](../examples/tools/install_yagna.md) for instructions on how to do it. |
| When launching requestor script in browser |  Access to XMLHttpRequest at 'http://127.0.0.1:7465/payment-api/v1/requestorAccounts' from origin 'http://172.27.80.1:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. |  Make sure you start Yagna with proper parameters: `yagna service run --api-allow-origin='http://localhost:3000'`  |
|  when launching requestor script  |   Error: Unable to get requestor accounts Error: connect ECONNREFUSED 127.0.0.1:7465  | Make sure your yagna service is up and running i.e. `yagna --version` |
| after running `yagna payment fund --network goerli` | Error: deadline has elapsed| Run the command again |
| When starting yagna with `--api-allow-origin` | error: Found argument '--api-allow-origin' which wasn't expected, or isn't valid in this context | CORS is supported in versions 0.13 - please download release candidate of that version if the stable is not available | 
| in requestor script output |  Error: connect ECONNREFUSED 127.0.0.1:7465 | please make sure your yagna is still running and available |

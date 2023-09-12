---
description: JS troubleshooting
title: JS troubleshooting
---

We have collected common errors experienced by users of the JS SDK with information on how to address them.


| Area                | Error message | Potential reason and a remedy |
|:------------------- |:--------------|:------------------|
|  When launching requestor script | Error: Unable to create allocation for driver/network erc20/goerli. There is no requestor account supporting this platform. | Payment driver is not initialized for the network you use in the requestor script. Run `yagna payment init ` or update the JS SDK to `@golem-sdk/golem-js`. |
|  When launching requestor script  |  Error: Could not create new allocation. Insufficient funds to make allocation. Top up your account or release all existing allocations to unlock the funds via `yagna payment release-allocations` |  You can add additional funds on the test network by `yagna payment fund` or unlock the funds via `yagna payment release-allocations`.  |
| When launching requestor script.    | Error: Unable to get requestor accounts Invalid application key.  |  Please make sure your script uses the defined api-key. You can check what keys are configured using: `yagna app-key list` or autoconfigure one by setting the environment variable `YAGNA_AUTOCONF_APPKEY`. Please see [Yagna installation example](/docs/creators/javascript/examples/tools/yagna-installation-for-requestors) for instructions on how to do it. |
| When launching requestor script in browser. |  Access to XMLHttpRequest at 'http://127.0.0.1:7465/payment-api/v1/requestorAccounts' from origin 'http://172.27.80.1:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. |  Make sure you start Yagna with proper parameters: `yagna service run --api-allow-origin='http://localhost:3000'`.  |
|  When launching requestor script.  |   Error: Unable to get requestor accounts Error: connect ECONNREFUSED 127.0.0.1:7465.  | Make sure your yagna service is up and running i.e. `yagna --version`. |
| After running `yagna payment fund --network goerli`. | Error: deadline has elapsed| Run the command again. |
| When starting yagna with `--api-allow-origin`. | Error: Found argument '--api-allow-origin' which wasn't expected, or isn't valid in this context. | CORS is supported in versions 0.13 - please download release candidate of that version if the stable is not available. | 
| In requestor script output. |  Error: connect ECONNREFUSED 127.0.0.1:7465. | Please make sure your yagna is still running and available. |
| When uploading file to a provider. | WARN: Task error on provider fractal_01_1.h. Error: Local service error: Transfer error: Send error: send failed because receiver is gone. Stdout: undefined. Stderr: undefined. | The folder where you try to upload the file is not defined as VOLUME in the image definition. |
| When downloading file from a provider. | WARN: Task error on provider fractal_02_2.h. Error: Local service error: Transfer error: IO error: path not found in container: /golem/work/file.txt. Stdout: undefined. Stderr: undefined. | The `/golem/work` folder is not defined as VOLUME in the `Dockerfile`. |


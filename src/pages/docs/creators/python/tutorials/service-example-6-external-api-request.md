---
description: >-
  Example showing how to make a REST call to an external, public API from a VM running on a Provider node.
title: Service API External API request tutorial
type: tutorial
---

# Service Example 6: External API request

## Introduction

The example depicts the following features:

- [Outbound Network and Computation Payload Manifest](/docs/golem/payload-manifest).

{% alert level="info" %}
The full code of the example is available in the yapapi repository: [https://github.com/golemfactory/yapapi/tree/master/examples/external-api-request](https://github.com/golemfactory/yapapi/tree/master/examples/external-api-request)
{% /alert %}

## Prerequisites

As with the other examples, we're assuming here you already have your [yagna daemon set-up to request the test tasks](/docs/creators/python/examples/tools/yagna-installation-for-requestors) and that you were able to [configure your Python environment](/docs/creators/python/quickstarts/run-first-task-on-golem) to run the examples using the latest version of `yapapi`. If this is your first time using Golem and yapapi, please first refer to the resources linked above.

This example involves [Computation Payload Manifest](/docs/golem/payload-manifest).

_Computation Payload Manifest_ making use of _Outbound Network_ requires either:

1. Requestor [certificate](/docs/golem/payload-manifest#certificates) that's trusted by the Providers
2. an instance of a Provider with the particular domain this example uses added to its [domain whitelist](/docs/providers/provider-configuration#listing-outbound-rules)
3. an instance of a Provider with the requestor's self-signed Certificate imported into its [keystore](/docs/providers/provider-configuration#managing-your-keystore)

The following example will show cases 2. and 3. so it will be necessary to start a [local instance of a Provider](/docs/providers/provider-installation).

## Example app

An example app will request an external API using Provider's network and then it will print the API response to the console.

### 1. Manifest file

For an app to make an _Outbound Network_ request it needs to declare which tools it will use and which URLs it will access in a [Computation Payload Manifest](/docs/golem/payload-manifest).

Our example will make an HTTPS request using `curl` to a public REST API with the URL `https://api.coingecko.com`.

_Computation Payload Manifest_ will need to have following objects:

- [`net`](/docs/golem/payload-manifest#compmanifestnet--object) computation constraints with `URL`s the app will access (`https://api.coingecko.com`)
- [`script`](/docs/golem/payload-manifest#compmanifestscript) computation constraint with `command`s app will execute (`curl`)
- [`payload`](/docs/golem/payload-manifest#payload-object) defining [Golem image](/docs/creators/python/guides/golem-images) containing tools used by the app (`curl`)

Example _Computation Payload Manifest_ must follow a specific [schema](/docs/golem/payload-manifest#manifest-schema), and for our example it will take form of following `manifest.json` file:

```json
{
  "version": "0.1.0",
  "createdAt": "2022-07-26T12:51:00.000000Z",
  "expiresAt": "2100-01-01T00:01:00.000000Z",
  "metadata": {
    "name": "External API call example",
    "description": "Example manifest of a service making an outbound call to the external API",
    "version": "0.1.0"
  },
  "payload": [
    {
      "platform": {
        "arch": "x86_64",
        "os": "linux"
      },
      "urls": [
        "http://yacn2.dev.golem.network:8000/docker-golem-script-curl-latest-d75268e752.gvmi"
      ],
      "hash": "sha3:e5f5ddfd649525dbe25d93d9ed51d1bdd0849933d9a5720adb4b5810"
    }
  ],
  "compManifest": {
    "version": "0.1.0",
    "script": {
      "commands": ["run .*curl.*"],
      "match": "regex"
    },
    "net": {
      "inet": {
        "out": {
          "protocols": ["https"],
          "urls": ["https://api.coingecko.com"]
        }
      }
    }
  }
}
```

The created file should be [verified using the JSON schema](/docs/golem/payload-manifest#schema-verification).

Then it needs to be encoded in `base64`:

```sh
 base64 --wrap=0 manifest.json > manifest.json.base64
```

### 2. Yapapi example app

A base64-encoded manifest can be configured using the [`yapapi.payload.vm.manifest`](https://yapapi.readthedocs.io/en/latest/api.html#module-yapapi.payload.manifest) function, resulting in following `external_api_request.py` file:

```py
import asyncio

from yapapi import Golem
from yapapi.services import Service
from yapapi.payload import vm

class OutboundNetworkService(Service):
    @staticmethod
    async def get_payload():
        return await vm.manifest(
            manifest = open("manifest.json.base64", "rb").read()
            # later we may add here manifest signature, digest algorithm, and app author's certificate
            min_mem_gib = 0.5,
            min_cpu_threads = 0.5,
            # capabilities used to reach Provider with a correct VM Runtime
            capabilities=["inet", "manifest-support"],
        )

    async def run(self):
        script = self._ctx.new_script()
        future_result = script.run(
            "/bin/sh",
            "-c",
            f"GOLEM_PRICE=`curl -X 'GET' \
                    'https://api.coingecko.com/api/v3/simple/price?ids=golem&vs_currencies=usd' \
                    -H 'accept: application/json' | jq .golem.usd`; \
                echo \"Golem price: $GOLEM_PRICE USD\";",
        )
        yield script

        result = (await future_result).stdout
        print(result.strip() if result else "")

async def main():
    async with Golem(budget=1.0, subnet_tag="testnet") as golem:
        await golem.run_service(OutboundNetworkService, num_instances=1)
        await asyncio.sleep(60)
```

### 3. Verification of a request with Computation Payload Manifest

_Providers_ verify the incoming request with a _Computation Payload Manifest_ by checking if it arrives with a [signature and _App author's certificate_ signed by a certificate they trust](/docs/golem/payload-manifest#certificates). If there is no signature, they verify if URLs used by _Computation Payload Manifest_ are [whitelisted](/docs/providers/provider-configuration#listing-outbound-rules).

There are two ways to make our _local_ _Provider_ verify the request:

- #### Whitelisting of the domain used by the app

  Add `api.coingecko.com` to Provider's [domain whitelist](/docs/providers/provider-configuration#listing-outbound-rules):

  `ya-provider whitelist add --patterns api.coingecko.com --type strict`

- #### Signing manifest and adding signature with a certificate to the request

  [Generate self signed certificate](/docs/golem/payload-manifest#self-signed-certificate-example) and then [ge#nerate manifest signature](/docs/golem/payload-manifest#manifest-signature).

  With a generated and `base64`-encoded certificate and a signature, the `get_payload()` function takes the following form:

  ```py
  # ...
    async def get_payload():
        return await vm.manifest(
            manifest = open("manifest.json.base64", "rb").read(),
            manifest_sig = open("manifest.json.base64.sign.sha256.base64", "rb").read(),
            manifest_sig_algorithm = "sha256",
            manifest_cert = open("golem_requestor.cert.pem.base64", "rb").read(),
            min_mem_gib = 0.5,
            min_cpu_threads = 0.5,
            capabilities=["inet", "manifest-support"],
        )
  # ...
  ```

### 4. Launching the app

With both _Requestor_ and _Provider_ yagna nodes and `ya-provider` running in the background run:

`python external_api_request.py`

(keep in mind to set `YAGNA_APPKEY` and `YAGNA_API_URL` env variables pointing to the local _Requestor_ node)

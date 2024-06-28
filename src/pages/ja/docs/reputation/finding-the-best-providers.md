---
description: Learn how to use the Golem Reputation API to find the best providers for your computational tasks by filtering based on various performance metrics.
title: How to Find the Best Providers on the Golem Network Using the Reputation API
type: Article
---

# How to find the best providers to compute your task

When running a task on the Golem Network you're always exposed to hundreds or thousands of different providers with difference specs, performance and reliability. It can be hard to navigate this as a requestor, so the Golem Reputation system provides you an API you can query with your specific requirements and return the list of provider ID's that match your exact needs.

## HTTP API

The `filter` endpoint allows you to define specific requirements for the providers you want to work with and returns a list of providers that match those requirements. You can combine multiple options to refine your search and get the best possible matches.

## Trying out the endpoint using Swagger UI

To make it easier for you to test the API, we have integrated a Swagger UI just below this section. Follow these steps to try it out:

1. Click on the `v2/filter` endpoint to expand it.
2. Fill in the parameters you want to filter by.
3. Click the **Execute** button to see the results.

{% swaggerui url="https://reputation.dev-test.golem.network/v2/openapi.json" /%}

## Using the Returned Provider IDs to Create a Custom Market Strategy

Now, let's discuss how to utilize the list of provider IDs obtained from the Reputation API. These IDs can be used to formulate a custom market strategy within your chosen SDK. Here's the process:

1. **Obtain Provider IDs**: Query the filter endpoint with your specific requirements to get a list of provider IDs that match your criteria.
2. **Integrate into Your SDK**: Use this list of provider IDs to develop a custom market strategy in your preferred SDK, such as `yapapi` or `golem-js`.
3. **Filter Offers**: In your market strategy, filter offers based on the retrieved provider IDs, ensuring that only offers from providers in your list are accepted.
   Below are examples for both `yapapi` and `golem-js`:

### Using yapapi

In `yapapi`, you can create a custom market strategy by checking if the `offer.issuer` is in the list of provider IDs returned by the Reputation API. If it is, return `SCORE_TRUSTED`; otherwise, return `0`.

```python
#!/usr/bin/env python3

import itertools
import pathlib
import sys
from collections import defaultdict
from yapapi import Golem, Task, WorkContext
from yapapi.payload import vm
from yapapi.strategy import SCORE_TRUSTED, MarketStrategy

examples_dir = pathlib.Path(__file__).resolve().parent.parent
sys.path.append(str(examples_dir))

from utils import build_parser, print_env_info, run_golem_example  # noqa

IMAGE_HASH = "5c385688be6ed4e339a43d8a68bfb674d60951b4970448ba20d1934d"
TASK_CMD = ["/usr/local/bin/python", "-c", "for i in range(10000000): i * 7"]


class CustomProviderStrategy(MarketStrategy):
    def __init__(self, trusted_providers):
        self.trusted_providers = trusted_providers
        self.history = defaultdict(list)

    async def score_offer(self, offer):
        provider_id = offer.issuer
        if provider_id in self.trusted_providers:
            return SCORE_TRUSTED
        return 0

    def save_execution_time(self, provider_id: str, time: float):
        self.history[provider_id].append(time)


async def main(subnet_tag, payment_driver, payment_network, trusted_providers):
    payload = await vm.repo(image_hash=IMAGE_HASH)
    strategy = CustomProviderStrategy(trusted_providers)

    async def worker(ctx: WorkContext, tasks):
        async for task in tasks:
            script = ctx.new_script()
            future_result = script.run("/usr/bin/time", "-p", TASK_CMD)
            yield script
            real_time_str = future_result.result().stderr.split()[1]
            real_time = float(real_time_str)
            strategy.save_execution_time(ctx.provider_id, real_time)
            print("TASK EXECUTED", ctx.provider_name, ctx.provider_id, real_time)
            task.accept_result()
        await tasks.aclose()

    async with Golem(
        budget=10,
        strategy=strategy,
        subnet_tag=subnet_tag,
        payment_driver=payment_driver,
        payment_network=payment_network,
    ) as golem:
        print_env_info(golem)
        tasks = (Task(None) for _ in itertools.count(1))
        async for task in golem.execute_tasks(worker, tasks, payload, max_workers=1):
            pass


if __name__ == "__main__":
    parser = build_parser(
        "Select providers using a custom reputation-based market strategy"
    )
    parser.set_defaults(log_file="market-strategy-example.log")
    args = parser.parse_args()
    trusted_providers = [
        "provider_id1",
        "provider_id_2",
        "provider_id_3",
    ]  # Replace with actual IDs
    run_golem_example(
        main(
            subnet_tag=args.subnet_tag,
            payment_driver=args.payment_driver,
            payment_network=args.payment_network,
            trusted_providers=trusted_providers,
        ),
        log_file=args.log_file,
    )

```

### Using golem-js

In `golem-js`, you can use the `allowProvidersById` filter to only allow offers from providers whose IDs are in the list returned by the Reputation API.

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/strategy/whiteListProvidersIds.ts" language="typescript" /%}

## Detailed look at the filter options

### Filter providers based on if they have port open or not (p2p vs non-p2p)

You can filter providers based on if they have their ports open or not. This can be effective when you as a requestor doesn't have portforwarded ports but still require a service or task on the network to run with low network latency. You can filter for providers with open ports using the parameter below:

- `providerHasOpenPorts` set to `True` will return providers with open ports. `False` will return providers with no ports open and instead routing through relay

### Filter providers based on Ping

You can filter providers based on their average ping in milliseconds using:

- `minPing` and `maxPing`
  Additionally, you can filter the providers in a particular region using the `pingRegion` parameter. The available regions are `europe`, `asia`, and `us`.

You can also specify whether the pings should be peer-to-peer (p2p) using the `is_p2p` parameter. If `is_p2p` is set to `True`, pings are conducted from open ports; if `False`, they are routed through the relay. The default value is `False`.

### Filter providers based on Task Success Rate

You can filter providers based on their task success rate:

- `minSuccessRate` and `maxSuccessRate` set the minimum and maximum percentage of successfully completed tasks.

### Filter providers based on uptime and provider age

You can filter providers based on their uptime percentage. `minUptime` and `maxUptime` allow you to set a range for the uptime of providers. For example, if you set `minUptime` to 90, then only providers that have been online for at least 90% of the time will be returned.

You can also filter providers based on how long they've been registered using `minProviderAge`. This parameter allows you to set a minimum number of days since a provider was created.

Using `minProviderAge` in conjunction with `minUptime` is particularly useful. For example, a provider with 100% uptime over just 2 minutes doesn't offer much reliability for long-running tasks. By setting `minProviderAge`, you ensure that only providers who have been on the network for a minimum number of days are included in your `minUptime` calculation. This helps in selecting providers who have demonstrated consistent performance over a longer period, making them more suitable for long-running services on Golem.

### Filter providers based on CPU performance

There are two benchmarks to filter providers based on CPU performance: multi-thread and single-thread.

- `minCpuMultiThreadScore` and `maxCpuMultiThreadScore` filter providers based on their CPU multi-thread benchmark scores.
- `minCpuSingleThreadScore` and `maxCpuSingleThreadScore` filter based on CPU single-thread benchmark scores.
  The higher the score, the better the CPU performance.

### Filter providers based on Memory Performance

The memory performance is measured by the throughput in MiB/sec.

- `minMemorySeqRead` and `maxMemorySeqRead` set the range for minimum and maximum sequential read performance.
- `minMemorySeqWrite` and `maxMemorySeqWrite` set the range for minimum and maximum sequential write performance.
  For random read/write performance:
- `minMemoryRandRead` and `maxMemoryRandRead` set the range for minimum and maximum random read performance.
- `minMemoryRandWrite` and `maxMemoryRandWrite` set the range for minimum and maximum random write performance.

### Filter providers based on Disk Performance

Similar to memory performance, disk performance is also measured by throughput in MiB/sec.

- `minRandomReadDiskThroughput` and `maxRandomReadDiskThroughput` filter based on minimum and maximum random disk read throughput.
- `minRandomWriteDiskThroughput` and `maxRandomWriteDiskThroughput` filter based on minimum and maximum random disk write throughput.
  For sequential read/write performance:
- `minSequentialReadDiskThroughput` and `maxSequentialReadDiskThroughput` filter based on minimum and maximum sequential disk read throughput.
- `minSequentialWriteDiskThroughput` and `maxSequentialWriteDiskThroughput` filter based on minimum and maximum sequential disk write throughput.

### Filter providers based on Network Performance

You can filter providers based on their network download speed measured in Mbit/s using:

- `minNetworkDownloadSpeed` and `maxNetworkDownloadSpeed`

```

```

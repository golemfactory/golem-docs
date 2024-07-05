---
title: Implementing Custom Usage Counters with Golem's Service API
pageTitle: Custom Usage Counter Integration Guide for Golem's Service API
description: Learn how to implement and integrate custom usage counters in Golem's Service API using ya-runtime-sdk, with a practical tutorial and sample code for developers.
type: Tutorial
---

# Service Example 4: Custom usage counters

## Introduction

The example depicts the following features:

- Service execution
- Dedicated service runtime implemented with [ya-runtime-sdk](https://github.com/golemfactory/ya-runtime-sdk)
- Custom usage counter

{% alert level="info" %}
Full code of the example is available in the following locations:

- The requestor agent: [https://github.com/golemfactory/yapapi/tree/master/examples/custom-usage-counter](https://github.com/golemfactory/yapapi/tree/master/examples/custom-usage-counter)
- The custom runtime implementing a custom usage counter (using `ya-runtime-sdk`): [https://github.com/golemfactory/ya-test-runtime-counters](https://github.com/golemfactory/ya-test-runtime-counters)

{% /alert %}

## Prerequisites

As with the other examples, we're assuming here you already have your [yagna daemon set-up to request the test tasks](/docs/ja/creators/tools/yagna/yagna-installation-for-requestors) and that you were able to [configure your Python environment](/docs/ja/creators/python/quickstarts/run-first-task-on-golem) to run the examples using the latest version of `yapapi`. If this is your first time using Golem and yapapi, please first refer to the resources linked above.

## Overview

The application consists of two components:

1. **Custom runtime**

   A dedicated, self-contained runtime created with [ya-runtime-sdk](https://github.com/golemfactory/ya-runtime-sdk). It is a Rust binary which illustrates the API used to update the value of a custom usage counter.

2. **Requestor agent**

   A Python application developed using `yapapi`. It instantiates the runtime on a Provider and periodically fetches the current state of usage counters to demonstrate fetching of custom usage counter updates.

## Custom runtime implementation

The implementation of the sample runtime with a custom usage counter can be found here: [https://github.com/golemfactory/ya-test-runtime-counters/blob/main/src/main.rs](https://github.com/golemfactory/ya-test-runtime-counters/blob/main/src/main.rs).

The runtime includes a `metric_reporter()` function which periodically increments a value of a counter named `golem.usage.custom.counter`, then notifies the runtime about this new value via an`EventEmitter`:

```rust
const COUNTER_NAME: &'static str = "golem.usage.custom.counter";
const INTERVAL: Duration = Duration::from_secs(2);

...

async fn metric_reporter(mut emitter: EventEmitter) {
    let mut value = 10f64;

    loop {
        tokio::time::delay_for(INTERVAL).await;
        value += 1f64;
        emitter
            .counter(RuntimeCounter {
                name: COUNTER_NAME.to_string(),
                value,
            })
            .await;
    }
}
```

Note how `RuntimeCounter` struct is used to pass the value of a counter using `EventEmitter`'s `counter()` method. The RuntimeCounter instance will be propagated by the ExeUnit to the Provider agent (for the purposes of pricing and invoicing) and to Requestor side where it can be fetched by the Requestor agent's code.

The remaining code includes an implementation of the `ExampleRuntime`, which is fairly simple, as it includes some non-void implementations of `start()` and `run_command()` actions.

{% alert level="info" %}
In a real-world scenario, the custom counter should probably refer to some other aspect of the execution - e.g. occupied storage space or maybe the number of requests made to the service running on the provider's end.

That's because we already have two other counters that refer to time spent on execution available out of the box - one based on the wall clock time registering the time elapsed since the activity has been started (`com.Counter.TIME`) and another based on the actual CPU execution time (`com.Counter.CPU`).

{% /alert %}

#### `start()`

The `start()` action launches a local thread running the `metric_reporter()` passing an`EventEmitter` instance cloned from runtime's `Context`:

```rust
fn start<'a>(&mut self, ctx: &mut Context<Self>) -> OutputResponse<'a> {
        let emitter = match ctx.emitter.clone() {
            Some(emitter) => emitter,
            None => {
                let err = anyhow::anyhow!("not running in server mode");
                return futures::future::err(err.into()).boxed_local();
            }
        };

        let (handle, reg) = AbortHandle::new_pair();
        tokio::task::spawn_local(Abortable::new(metric_reporter(emitter.clone()), reg));
        self.handle = Some(handle);

        ...
    }
```

This is then followed by a one-off, explicit initiation of the `golem.usage.custom.counter` counter value.

#### `run_command()`

The `run_command()` implements two explicitly named commands which can be triggered by calling a _RUN &lt;command&gt;_ ExeScript call. The commands are:

- `sleep n`- forces the runtime to wait `n` milliseconds.
- `stop`- causes the runtime shutdown.

```rust
fn run_command<'a>(
        &mut self,
        command: RunProcess,
        _mode: RuntimeMode,
        ctx: &mut Context<Self>,
    ) -> ProcessIdResponse<'a> {
        ctx.command(|mut run_ctx| {
            async move {
                match command.bin.as_str() {
                    "sleep" => {
                        let delay_str = command
                            .args
                            .get(1)
                            .ok_or_else(|| anyhow::anyhow!("Missing delay value"))?;

                        let delay_ms: u64 = delay_str.as_str().parse()?;
                        let delay = Duration::from_millis(delay_ms);

                        run_ctx
                            .stdout(format!("Entering sleep for {}ms", delay_ms))
                            .await;

                        tokio::time::delay_for(delay).await;
                        run_ctx.stdout("Done sleeping").await;
                    }
                    "stop" => {
                        run_ctx.stdout("Stopping runtime").await;
                        run_ctx.control().shutdown();
                    }
                    _ => {
                        anyhow::bail!("Unsupported command {} {:?}", command.bin, command.args);
                    }
                }
                Ok(())
            }
            .map_err(Into::into)
        })
    }
```

The example runtime implementation comes complete with `ya-test-runtime-counters.json` config file, which includes metadata for the runtime, required to plug it into a yagna provider service, under the name `test-counters`:

```javascript
;[
  {
    name: 'test-counters',
    version: '0.1.0',
    'supervisor-path': 'exe-unit',
    'runtime-path': 'ya-test-runtime-counters/ya-test-runtime-counters',
    description:
      'Yagna runtime supporting custom usage counters. For testing purposes only.',
    'extra-args': ['--runtime-managed-image'],
    config: {
      counters: {
        'golem.usage.custom.counter': {
          name: 'Custom',
          description: 'Custom counter',
          price: true,
        },
      },
    },
  },
]
```

Note how `config.counters` structure is used to specify the custom usage counter metadata.

### Plugging the runtime into `golemsp`

In the `$HOME/.local/lib/yagna/plugins/` directory create:

- file `ya-test-runtime-counters.json` where you describe the plugin:

  ```javascript
  ;[
    {
      name: 'test-counters',
      version: '0.1.0',
      'supervisor-path': 'exe-unit',
      'runtime-path': 'ya-test-runtime-counters/ya-test-runtime-counters',
      description: 'Custom usage counter example runtime',
      'extra-args': ['--runtime-managed-image'],
    },
  ]
  ```

- directory `ya-test-runtime-counters` (compare `runtime-path` in above file) where `ya-test-runtime-counters` binary along with Erigon binaries are placed.

The new runtime also needs to be enabled in `$HOME/.local/share/ya-provider/presets.json`. The preset object can be copied from other presets. Please note that `exeunit-name` has to match to the `name` property of the plugin above:

```javascript
{
  "active": [
    "test-counters",
    ...
  ],
  "presets": [
    {
      "name": "test-counters",
      "exeunit-name": "test-counters",
      "pricing-model": "linear",
      "initial-price": 0,
      "usage-coeffs": {
        "golem.usage.duration_sec": 0.0001,
        "golem.usage.cpu_sec": 0.0001,
        "golem.usage.custom.counter": 0.0003
      }
    },
```

Note how in the example above the `golem.usage.custom.counter` is to be included in the pricing function (linear model) with a coefficient of 0.0003 GLM.

## Requestor agent

The requestor agent is a fairly simple implemenation of a Golem service which:

- Requires a `test-counters` runtime as payload:

```python
@dataclass
class CustomCounterServicePayload(Payload):
    runtime: str = constraint(inf.INF_RUNTIME_NAME, default="test-counters")
```

- In the `run()` handler, it periodically fetches the usage vector as published by the ExeUnit alongside the accumulated cost and displays it in console:

```python
async def run(self):
    start_time = datetime.now()
    print(f"service {self.id} running on '{self.provider_name}'...")
    while datetime.now() < start_time + timedelta(seconds=self._running_time_sec):
        script = self._ctx.new_script()
        script.run("sleep", "1000")
        yield script
        usage: ActivityUsage = await self._ctx.get_usage()
        cost = await self._ctx.get_cost()
        print(f"total cost so far: {cost}; activity usage: {usage.current_usage}")
        await asyncio.sleep(3)
```

## Launching the service

To launch the service, we first need to initialize `Golem`:

```python
async with Golem(
        budget=10.0, subnet_tag=subnet_tag, driver=driver, network=network, strategy=strategy
    ) as golem:
        instance_params = [{"running_time_sec": running_time_sec}]

```

Once created, we use it to instantiate a `CustomCounterService`:

```python
cluster = await golem.run_service(CustomCounterService, instance_params=instance_params)
```

And that's all there is to it. Running the example should result with a sequence of messages appearing in console, showing the `golem.usage.custom.counter`counter being periodically incremented.

{% docnavigation title="Next steps" %}

- The next article takes a close look at [webapp](/docs/ja/creators/python/tutorials/service-example-5-webapp) example.

{% /docnavigation %}

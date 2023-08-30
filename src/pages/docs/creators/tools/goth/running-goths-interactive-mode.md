---
description: Making use of goth's interactive mode
---

# Using Test Harness to test Golem apps

{% hint style="danger" %}
What you're going to try is still considered experimental.

We're assuming here that you were able to run both `goth` and a requestor app correctly on your machine earlier and thus, you have all the components up and running without issues.

If you hadn't tried those yet though, please have a look at the earlier parts of our handbook:
{% /hint %}

You're here, excellent! If you successfully ran the tests in the previous step, you probably already guessed that this is what we use internally in our CI process to ensure that our subsequent builds of Golem and its components are working correctly.

But apart from that, goth now also includes something called the interactive mode.

## Running the interactive mode

In this mode, instead of running an end-to-end test suite, `goth` only prepares and launches its local network with all components needed for a requestor agent to connect to and run its tasks against it.

Once that's done, `goth` will patiently wait for the developer to do whatever they need and will dutifully record its logs for further examination once the user is finished with their activity.

To launch goth in its interactive mode, make sure you're in the root of goth's checked-out project directory and run:

```
poetry poe run interactive
```

Now, goth is going to:

* if needed, download the latest build of `yagna` from the its repository's main branch, along with other necessary components, such as the VM runtime,
* build the `yagna` docker image based on the artifacts we downloaded, as well as get some other pre-built docker images,
* set up and start our local Golem network.

Once it finishes all the preparatory steps, you'll be greeted with a message that encourages you to run your requestor agent along with a piece of a CLI command that assumes you're running our Python API's Blender example:

![](../../.gitbook/assets/goth-interactive-mode-prompt.png)

The important pieces of information there are the **`YAGNA_APPKEY`**, **the URL** and **the port** that you need to use to run your requestor agent within goth's test network.

All right! At this point, the network is ready for you, the app developer! You can now communicate with the launched requestor daemon using either the yagna's REST API directly or using one of our high-level APIs and run your apps this way.

If you're doing it the first time, you may as well launch that example command to confirm everything is working as it should be and to verify that the task is completed successfully. Just make sure you're launching this command from a separate terminal window and within the directory where you have checked out our Python high-level API (`yapapi`).

Once you're done running either your own app or our introductory example, you can come back to the console that's running `goth` and press Ctrl-C to finish the interactive run and allow `goth` to proceed with some cleanup that ensures any test artifacts are remove and that subsequent runs can be lanuched without issues.

## Analyzing your runs

While you execute your app, the output in the console that's running goth won't tell you much on its own. You should see a message confirming that it detected the creation of an activity between the requestor and one of the provider and the subsequent destruction of it but that's going to be more or less that.

The real benefit starts when you have a look at the logs each run produces. By default, the logs are stored under `/tmp/goth-tests` or, more exactly, under whatever location `$TEMP_DIR/goth-tests` resolves to in your shell. This path will depend either on the shell environment or the operating system on which the tests are being run (see [`tempfile.gettempdir`](https://docs.python.org/3/library/tempfile.html) for more details).

For each run in the interactive mode, `goth` will create a timestamped directory there, e.g.: `goth_20201221_172759+0000` which will contain all the logs that this run was able to collect from all the components of your local Golem network:

* `runner.log` - the logs for the goth runner itself. This includes the output that goth produces to the console but it also includes a whole lot of additional DEBUG-level logs.
* `proxy.log` - contains the traffic between the nodes and the agents in the goth's network
* `test_interactive_vm` - the directory in which the logs for each of the components launched by the runner are stored. You'll be most interested in the following ones:
  * `provider_N.log` - the debug logs from the provider daemons
  * `provider_agent_N.log` - the debug logs from the provider agents - including also the logs from each provider's execution units which will be of most interest to you as the developer of the application that's executed there,
  * `requestor.log` - the debug logs from the requestor daemon you're connecting your requestor agent to

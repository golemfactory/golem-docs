# Run first task on Golem

## Running the requestor and your first task on the New Golem Network

Now you have the `yagna` daemon running, you may proceed with running a task as a requestor.

{% tabs %}
{% tab title="Python" %}
**Get the environment set up**

Ensure you're running Python >= 3.7 and you have the `venv` module installed (it's normally included in the Python distribution).

Prepare a virtual environment for the tutorial script:

```bash
python3 -m venv --clear ~/.envs/yagna-python-tutorial
source ~/.envs/yagna-python-tutorial/bin/activate
```

{% hint style="warning" %}
On Windows, you need to replace the above with:
{% /hint %}

```
python -m venv --clear %HOMEDRIVE%%HOMEPATH%\.envs\yagna-python-tutorial
%HOMEDRIVE%%HOMEPATH%\.envs\yagna-python-tutorial\Scripts\activate.bat
```

Install the dependencies:

```
pip install -U pip
pip install yapapi
```

**Get the requestor agent's code**

Check out or download the `yapapi` repository:

```
git clone -b b0.10 https://github.com/golemfactory/yapapi.git
cd yapapi
```

**Set the yagna app key**

In order for the requestor agent to connect with the `yagna` daemon, you need to provide it with the previously-generated app key. You do that by setting the appropriate environment variable to a value acquired in the "[Generate the app key](./#generate-the-app-key)" step in the quick primer article:

```
export YAGNA_APPKEY=insert-your-32-char-app-key-here
```

{% hint style="warning" %}
On Windows, please replace the above with:

`set YAGNA_APPKEY=your-32-char-app-key`
{% /hint %}

**Run the example**

The example we're showcasing here resides in the `examples/blender` directory within `yapapi`'s codebase so, ensure that you're in the checked-out repository's directory and run:

```bash
cd examples/blender
python blender.py
```

Once you launch the example, you should see some messages reflecting the progress of your tasks' execution - agreement confirmations, task dispatches and finally task completions.

The example in question generates six discrete tasks for providers to execute so after those six activities are completed and results returned, the whole job is finished.

If everything goes right, after what could be anything from half-a-minute to a few minutes, you'll hopefully see the message announcing the successful completion of your assignment including a short summary of what had happened during the execution, which providers took part in the execution and the accumulated GLM cost of the whole task, e.g.:

`Computation finished in 77.5s`\
`Negotiated 1 agreements with 1 providers`\
`Provider 'odra' computed 6 tasks`\
`Total cost: 0.218290307253`
{% /tab %}

{% tab title="NodeJS" %}
**Get the requestor agent's code**

Check out or download the `yajsapi` repository:

```
git clone https://github.com/golemfactory/yajsapi.git
cd yajsapi
git checkout b0.6
```

**Set the yagna app key**

In order for the requestor agent to connect with the yagna daemon, you need to provide it with the previously-generated app key. You do that by setting the appropriate environment variable to a value acquired in the "[Generate the app key](./#generate-the-app-key)" step above:

```
export YAGNA_APPKEY=insert-your-32-char-app-key-here
```

{% hint style="warning" %}
On Windows, please replace the above with:

`set YAGNA_APPKEY=your-32-char-app-key`
{% /hint %}

**Run the example task**

The example we're showcasing here resides in the `examples/blender` directory within `yajsapi`'s codebase so, ensure that you're in the checked-out repository's directory and run:

```bash
cd examples
yarn
yarn js:blender
```

If everything works as expected, you should see some messages that confirm agreements being struck between your requestor node and the providers in our testnet and then ones that announce work dispatched to providers with lines starting with `Task sent to provider [...]` and subsequently confirmations of task completions.

To see some more detailed messages, you can run the example with `yarn js:blender -d`.

The example in question generates six discrete jobs for providers to execute so after those six activities are completed and results returned, the whole task is finished.
{% /tab %}
{% /tabs %}

{% hint style="success" %}
**Yay! With this, you have completed your first job as a requestor in the new Golem network!**
{% /hint %}

#### Output

You can verify that the task is indeed done by examining the generated output files which are `PNG` images with the selected frames of the rendered animation that should appear in the directory from which you ran the example script (`examples/blender` within the cloned repository's path if you followed the tutorial precisely) .

Here is an example rendered frame, provided here for reference:

![](../../.gitbook/assets/output\_0.png)

#### Payments

Finally, you can verify that the providers have been paid for the work they contributed to get that output to you. First, acquire your Ethereum address - you can do that by running:

```
yagna app-key list
```

again but this time it's the value in the `id` column that you're interested in. This is your the Ethereum address of your yagna node on the Rinkeby testnet. Once you have that address, you can check that the transactions have been sent. For this, you can use our test utility: [https://github.com/golemfactory/testutil](https://github.com/golemfactory/testutil) .

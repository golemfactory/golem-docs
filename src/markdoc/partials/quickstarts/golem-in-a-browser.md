# Introduction

In most of our examples, we demonstrate how to run a requestor script in Node.js. However, you can also run your scripts in a browser context. This example will explain how to do it.

## Setting up the project

## **Install Yagna**

{% tabs %}
{% tab label="Linux/Mac" %}

On Linux/MacOS, you can install it using our installation script:

```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```

You might be asked to modify your PATH afterward.
{% /tab %}

{% tab label="Windows" %}

On Windows, you will need to install Yagna manually:

1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
2. Extract the downloaded archive.
3. Move the extracted `yagna.exe` and `gftp.exe` files to a directory of your choice. 
4. Add that directory to your system's PATH environment variable. This will allow you to run the `yagna` command from any location in your terminal.

{% /tab %}

{% /tabs %}

## **Start the Yagna service**

Open a terminal (command line window) and define the app-key that will allow our script to use the Yagna API. In this tutorial, we will use the `try_golem` app-key, which will be automatically generated and configured when you start Yagna.

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
export YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% tab label="Windows" %}

```shell
set YAGNA_AUTOCONF_APPKEY=try_golem
```

{% /tab %}
{% /tabs %}

{% alert level="warning" %}
This creates a temporary app-key that will only be available for this session. If you restart the Yagna service, you'll need to set the `YAGNA_AUTOCONF_APPKEY` variable again. For production deployment, it is recommended to create a permanent app-key using the  `yagna app-key create <key-name>` command. 
{% /alert %}

Then, start the `yagna` service: To enable communication between your web application and the Yagna service, you need to start Yagna with the `--api-allow-origin` flag, specifying the URL where your web application will be served. In this example, we'll use `http://localhost:8080`.

{% tabs %}
{% tab label="MacOS / Linux" %}

```bash
yagna service run --api-allow-origin='http://localhost:8080'
```

{% /tab %}
{% tab label="Windows" %}

```console
yagna service run --api-allow-origin=http://localhost:8080
```

{% /tab %}

{% /tabs %}


## **Set up the development environment**

```bash
mkdir web_golem
cd web_golem
npm install --global http-server
```

This will install the `http-server` utility to host our web page, where we will run our Golem app.


## Create the HTML page

Now, we'll create the main `index.html` file with the following content:

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/web/hello.html" language="html" /%}

In this layout, there are three elements:

- An `Options` form, where you can define input parameters
- An `Actions` section with an "Echo Hello World" button, which executes a command on the remote Golem node
- A `Results` container, which displays the results

The JavaScript code embedded in the HTML page defines:

- The `run()` function that creates the body of the requestor script.
- Helper functions that display the results in the browser window.

## Run the Script

### **Launch the web server**

Launch `http-server` in the project folder.

```bash
http-server
```

### **Open the application**

We should now see our app available in the browser at [http://localhost:8080/index](http://localhost:8080/index).

### **Run the example**

If you click the **Echo Hello World** button, after a while, in the result container, you should get the result of the script:

- The result of executing the script in the Results container.
- Debug logs in the console window.

![Output logs](/webrequestor.gif)

{% alert level="info" %}

If, instead of using the temporary `try_golem` app key defined earlier, you created a unique app key using `yagna app-key create <key-name>`, make sure to update the app key value in the respective `Options` field.
{% /alert %}

{% docnavigation title="Next steps" %}

- [Golem in web browser example explained](/docs/creators/javascript/tutorials/running-in-browser)

{% /docnavigation %}



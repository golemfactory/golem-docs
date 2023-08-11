---
description: Yagna service installation
title: yagna intsallation for requestors
---

#

 


{% alert level="info" %}

**These instructions are designed for the environment:**

* OS X 10.14+, Ubuntu 18.04 or 20.04 or Windows
* Node.js version above 16.0.0

{% /alert %}


## Introduction

In this article, we'll show you how to install and configure Yagna in case you want to enable your applications to connect the the network.     

## Installing and running Yagna 

Yagna is a service that will let you communicate with Golem Network and perform operations on it. Let's install it.

#### Install Yagna


{% tabs %}
{% tab label="Easy installation" %}    

On Linux/ MacOS you can install it using our helper script like this:
    
```bash
curl -sSf https://join.golem.network/as-requestor | bash -
```
You might be asked to modify your PATH afterward.

{% /tab %}
{% tab label="Windows Manual installation" %}    

    Alternatively, if you can't install it easily, you will do it manually in the following way:
    
    1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
    2. Unzip the archive to extract the two files: `yagna.exe` and `gftp.exe`.
    3. Copy those files to `C:\Windows\System32`.
    
    Note: the link will lead you to the latest stable release, you can go to [https://github.com/golemfactory/yagna/releases](https://github.com/golemfactory/yagna/releases) and select another version if you want to explore the preview features.

{% /tab %}
{% tab label="Unix Manual installation" %}


    Alternatively, if you can't install it easily, you will do it manually in the following way:
    
    1. Download the requestor package - prefixed `golem-requestor` - appropriate for your platform from: [https://github.com/golemfactory/yagna/releases/latest](https://github.com/golemfactory/yagna/releases/latest).
    2. Unpack `yagna` and `gftp` binaries and put them somewhere in your PATH (e.g. copy them to /usr/local/bin on Unix-like systems) or add the directory you placed the binaries into your PATH.

    Note: the link will lead you to the latest stable release, you can go to [https://github.com/golemfactory/yagna/releases](https://github.com/golemfactory/yagna/releases) and select another version if you want to explore the preview features.

{% /tab %}
{% /tabs %}

{% alert level="info" %}

    If you have encountered problems, contact us on [discord channel](https://chat.golem.network/): 
{% /alert  %}

#### Start the service

Open a terminal (command line window) and  define the key to identify your application script:


{% tabs %}
{% tab label="MacOS / Linux" %}  
   
    ```bash
    export YAGNA_AUTOCONF_APPKEY=try_golem
    ```

{% /tab %}
{% tab label="Windows" %}
    
    ```bash
    set YAGNA_AUTOCONF_APPKEY=try_golem
    ```

{% /tab %}
{% /tabs %}


Then start the service:

```bash
yagna service run
```


#### Get some funds

Requesting tasks on the Golem Network requires some credits on the network (GLM tokens). 
As this example will run on a test network you can get test credits.

Open another terminal and run the following command to complete the configuration:

```bash
yagna payment fund
yagna payment init
```


    
{% docnavigation title="Next steps" %}

- You can learn more about Golem architecture, production and test networks, GLM tokens [here](/docs/golem/overview):

{% /docnavigation %}






---
title: Accessing the Internet (outbound) 
description: Discover how to access the internet from your Ray applications with this hands-on guide, featuring code examples, and yaml configurations.
pageTitle: Practical Tutorial on Accessing the Internet with Ray on Golem
type: tutorial
---

# Accessing the Internet (outbound)

The purpose of this article is to show you an example of a Ray app accessing the Internet and to explain the  nuances of running it with Ray on Golem.

## Outbound introduction

Ensuring providers' security is a very important topic within the Golem network. 
One of the implemented security measures is the ability to restrict the usage of outgoing Internet connections from within the VM images the providers deploy on their computers.

The simplest way to do this is by allowing outgoing connections only to the select few whitelisted addresses.
The default whitelist is curated by Golem Factory and is kept on [GitHub](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist).

Providers may edit the whitelist, or disable it altogether to accept all outgoing traffic. 
In the future, we will add support for allowing outgoing traffic from within images signed by trusted entities (e.g. Golem Factory)

Feel free to check out the general [Accessing the Internet from Golem providers](/docs/creators/javascript/guides/accessing-internet) guide to get more context not related to Ray on Golem.

Please reach out to us on [`#Ray on Golem` discord channel](https://chat.golem.network/) to discuss the options and help us define the best way to support your outbound needs.

## Default whitelist

Please have a look at the [default whitelist](https://github.com/golemfactory/ya-installer-resources/tree/main/whitelist) yourself.

Among the listed entries you can find `dl.dropboxusercontent.com`, `ipfs.io` - they should allow a certain level of freedom when storing artifacts needed by your Ray on Golem applications.
You can upload the data your computation needs to Dropbox or IPFS and then use it in your remote tasks. This is demonstrated in the [example below](#simple-outbound-example)

One of the ways that Ray on Golem uses the whitelist is to enable installation of [additional packages](/docs/creators/ray/cluster-yaml#initialization-commands) with pip. 
Golem Factory runs a custom proxy to `pypi.org` via `pypi.dev.golem.network` to make it possible.

When your application requires access to a non-whitelisted URL, the recommended way is to advertise your need on [`#providers` discord channel](https://chat.golem.network/).
This allows the provider operators to assess the URLs you wish to connect to, and to decide 
if the possibility of extra earnings (you will be paying the providers that whitelist your URLs) is more tempting to them than the security risk your URLs might pose.

Please reach out to us on [`#Ray on Golem` discord channel](https://chat.golem.network/) to discuss the options and help us define the best way to support your outbound needs.

## Configuring outbound

Cluster configuration yaml needs to contain information about the addresses (and protocols) you want to access with your Ray app.
Checkout the [`outbound_urls` property description](/docs/creators/ray/cluster-yaml#accessing-the-internet-outbound) for the details.

Whenever you change the list of these locations, you need to stop the cluster (`ray down`) and start it again (`ray stop`) to ensure that only those provider nodes that accept all the URLs are selected to form the new cluster.

The [network stats tool](/docs/creators/ray/ray-on-golem-cli#network-stats) comes in handy when checking the availability of providers allowing your outbounds URLs.


## Simple outbound example

The following section describes an example Ray app accessing the Internet. 
It downloads a couple of files hosted on [IPFS](https://ipfs.io) and prints the concatenated content.

Outbound connectivity in Golem is still considered an experimental feature and we're continually working on fine-tuning and improving its stability. It may happen that your connections fail and need to be retried. The following example addresses this scenario.

### Example code

Consider the following code (you can find it also in [the repository](https://github.com/golemfactory/ray-on-golem/blob/develop/examples/outbound.py)).

```python
import colorful
import requests

urls = [
  'https://ipfs.io/ipfs/bafkreiemev2isidd7gk7352wxtqh6rwbuumt4vgnkkbx5wi6giaizt2bvq',
  'https://ipfs.io/ipfs/bafkreigks6arfsq3xxfpvqrrwonchxcnu6do76auprhhfomao6c273sixm',
  'https://ipfs.io/ipfs/bafkreifb7tsdmocu76eiz72lrz4hlvqayjuchecbfkgppgzx2cyrcsfq7i',
  'https://ipfs.io/ipfs/bafkreiaplag3id7ckuzs6eiwca3skuheddup7p7espat5omqv6r7m2byhi',
  'https://ipfs.io/ipfs/bafkreibthyfb4j4blugo5zk4i476hxet2vwghy564kz3jlxi53lnoamrum',
  'https://ipfs.io/ipfs/bafkreidfy5gbljugdb53no7zswhust6gxaagqa2kmwnjvvcjsgyiywhs2i',
  'https://ipfs.io/ipfs/bafkreifmvsdmbzqjzkig6yzlbyw2ztfsw56sfmdcd4qox3hbusbvxe7w6a',
  'https://ipfs.io/ipfs/bafkreib7pg5xwq23auzbmuo257jxjtogqhoan6vgly3u4obtpoemubdn5i',
  'https://ipfs.io/ipfs/bafkreidcyzvhuxoxbqyumymampbujzjr43kllhrxtaeeiphjmkz2xvr4li',
  'https://ipfs.io/ipfs/bafkreibwvht7dsk3ql73tf2d4dc4jtuv3a6juqykvrm7qtxtzp5lmfcqna',
  'https://ipfs.io/ipfs/bafkreihwavxppciktfeuynevdal4f3kp2nqivbei54fon4vpvsj625ufjy',
  'https://ipfs.io/ipfs/bafkreif3oielzg25pqcpci3kqkqasos6gp2aii6vxkguezxxbewdxjb3mi',
]

import ray
ray.init()

@ray.remote
def get_url(url):

    attempt = 0
    while attempt < 8:
        attempt += 1
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                text = response.content.decode()
                return (url, text)
            else:
                print(url, "failure #"+str(attempt), response.status_code)
        except Exception as e:
            print(url, "failure #"+str(attempt), e)

    return (url, "?")

refs = [get_url.remote(url) for url in urls]

results = ray.get(refs)

aggregate_text = ""

for (url, text) in results:
    print(url, "->", text)
    aggregate_text += text

print(colorful.purple(f"\n{aggregate_text}"))
```

You can run the code locally to see that it is working:
```bash
python3 examples/simple-outbound-ipfs.py
```
```
2023-12-06 13:15:57,228	INFO worker.py:1664 -- Started a local Ray instance. View the dashboard at 127.0.0.1:8265
https://ipfs.io/ipfs/bafkreiemev2isidd7gk7352wxtqh6rwbuumt4vgnkkbx5wi6giaizt2bvq -> R
https://ipfs.io/ipfs/bafkreigks6arfsq3xxfpvqrrwonchxcnu6do76auprhhfomao6c273sixm -> a
https://ipfs.io/ipfs/bafkreifb7tsdmocu76eiz72lrz4hlvqayjuchecbfkgppgzx2cyrcsfq7i -> y
https://ipfs.io/ipfs/bafkreiaplag3id7ckuzs6eiwca3skuheddup7p7espat5omqv6r7m2byhi ->  on
https://ipfs.io/ipfs/bafkreibthyfb4j4blugo5zk4i476hxet2vwghy564kz3jlxi53lnoamrum -> G
https://ipfs.io/ipfs/bafkreidfy5gbljugdb53no7zswhust6gxaagqa2kmwnjvvcjsgyiywhs2i -> o
https://ipfs.io/ipfs/bafkreifmvsdmbzqjzkig6yzlbyw2ztfsw56sfmdcd4qox3hbusbvxe7w6a -> l
https://ipfs.io/ipfs/bafkreib7pg5xwq23auzbmuo257jxjtogqhoan6vgly3u4obtpoemubdn5i -> e
https://ipfs.io/ipfs/bafkreidcyzvhuxoxbqyumymampbujzjr43kllhrxtaeeiphjmkz2xvr4li -> m
https://ipfs.io/ipfs/bafkreibwvht7dsk3ql73tf2d4dc4jtuv3a6juqykvrm7qtxtzp5lmfcqna ->
https://ipfs.io/ipfs/bafkreihwavxppciktfeuynevdal4f3kp2nqivbei54fon4vpvsj625ufjy -> rocks
https://ipfs.io/ipfs/bafkreif3oielzg25pqcpci3kqkqasos6gp2aii6vxkguezxxbewdxjb3mi -> !

Ray on Golem rocks!
```

### Running the example on Ray on Golem cluster

Let's now spin up a Ray on Golem cluster to launch our newly-hatched application.

The first step is adding the `"https://ipfs.io"` to `outbound_urls` property in the cluster yaml.

You can either update your cluster yaml or download one from [the repository](https://github.com/golemfactory/ray-on-golem/blob/develop/examples/outbound.yaml).
The linked config is a version of the [example Ray on Golem cluster yaml](https://github.com/golemfactory/ray-on-golem/blob/main/golem-cluster.yaml) with:
```yaml
outbound_urls: ["https://pypi.dev.golem.network", "https://ipfs.io"]
```

The second step is actually starting the cluster.
```bash
ray up ipfs-golem-cluster.yaml
```

With that done, you can submit the script to run it:

```bash
ray submit golem-cluster.yaml simple-outbound-ipfs.py
```
```
Ray On Golem
  Not starting webserver, as it's already running
Fetched IP: 192.168.0.3
Fetched IP: 192.168.0.3
2023-12-06 12:02:30,637	INFO worker.py:1458 -- Connecting to existing Ray cluster at address: 192.168.0.3:6379...
2023-12-06 12:02:30,667	INFO worker.py:1633 -- Connected to Ray cluster. View the dashboard at 192.168.0.3:8265
https://ipfs.io/ipfs/bafkreiemev2isidd7gk7352wxtqh6rwbuumt4vgnkkbx5wi6giaizt2bvq -> R
https://ipfs.io/ipfs/bafkreigks6arfsq3xxfpvqrrwonchxcnu6do76auprhhfomao6c273sixm -> a
https://ipfs.io/ipfs/bafkreifb7tsdmocu76eiz72lrz4hlvqayjuchecbfkgppgzx2cyrcsfq7i -> y
https://ipfs.io/ipfs/bafkreiaplag3id7ckuzs6eiwca3skuheddup7p7espat5omqv6r7m2byhi ->  on
https://ipfs.io/ipfs/bafkreibthyfb4j4blugo5zk4i476hxet2vwghy564kz3jlxi53lnoamrum -> G
https://ipfs.io/ipfs/bafkreidfy5gbljugdb53no7zswhust6gxaagqa2kmwnjvvcjsgyiywhs2i -> o
https://ipfs.io/ipfs/bafkreifmvsdmbzqjzkig6yzlbyw2ztfsw56sfmdcd4qox3hbusbvxe7w6a -> l
https://ipfs.io/ipfs/bafkreib7pg5xwq23auzbmuo257jxjtogqhoan6vgly3u4obtpoemubdn5i -> e
https://ipfs.io/ipfs/bafkreidcyzvhuxoxbqyumymampbujzjr43kllhrxtaeeiphjmkz2xvr4li -> m
https://ipfs.io/ipfs/bafkreibwvht7dsk3ql73tf2d4dc4jtuv3a6juqykvrm7qtxtzp5lmfcqna ->
https://ipfs.io/ipfs/bafkreihwavxppciktfeuynevdal4f3kp2nqivbei54fon4vpvsj625ufjy -> rocks
https://ipfs.io/ipfs/bafkreif3oielzg25pqcpci3kqkqasos6gp2aii6vxkguezxxbewdxjb3mi -> !
Ray on Golem rocks!
Shared connection to 192.168.0.3 closed.
```

Failing outbound calls would get logged to the console and retried. 
Note that it may sometimes happen that one or more requests hangs for a couple of minutes, eventually displaying `[Errno -3] Temporary failure in name resolution)`.
These are known issues, hopefully they will be resolved soon.

### Congratulations!

You have now run the simple outbound example, and hopefully seen the expected outcome - `Ray on Golem rocks!` line which is constructed from the contents of 12 files hosted on IPFS.

Now is the time to stop the cluster with `ray down ipfs-golem-cluster.yaml`, and that is it.

Well done!

## Conclussion

In this article you:
- learned the basics of accessing arbitrary external URLs with Ray on Golem
- learned about the domain whitelists used by the providers
- experimented with an example showing how to access files hosted on IPFS.

Should you have any questions or feedback please don't hesitate to reach out to us (on [`#Ray on Golem` discord channel](https://chat.golem.network/)).

We are also very interested in learning about your use cases, and willing to help you get the needed domains whitelisted.

{% docnavigation title="See also" %}
- [Ray on Golem cluster yaml details](/docs/creators/ray/cluster-yaml)
- [Ray on Golem network stats tool](/docs/creators/ray/ray-on-golem-cli#network-stats)
- [Ray on Golem general introduction](/docs/creators/ray)
- [Ray on Golem setup tutorial](/docs/creators/ray/setup-tutorial)
<!-- - [Running Ray on Golem on the mainnet](/docs/creators/ray/mainnet) -->
{% /docnavigation %}

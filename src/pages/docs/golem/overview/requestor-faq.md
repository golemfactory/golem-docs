# Requestor FAQ

****

**Can I run services (web servers, Node.js, etc.) on Golem?**

Yes but in a limited way, meaning that you could use the network as a proxy for computing the response locally on the providers and then use your requestor as a load balancer that takes in requests, and forwards the responses from the providers to the end user. \
\
Here's an example of such a setup.  [https://github.com/golemfactory/yapapi/tree/master/examples/http-proxy](https://github.com/golemfactory/yapapi/tree/master/examples/http-proxy)

**Are there any stats for the network?**

Yes, you can check out : [https://stats.golem.network/](https://stats.golem.network/)

**How does CPU/h pricing work?**
CPU/h is the pricing per utilization of a core. So if a requestor is using 4 cores and you have a CPU/h pricing of 0.1 GLM, then it would cost the requestor 0.4 GLM to use those 4 cores for an hour.

**What is Layer 1 and Layer 2 ?**

Here's a very very simplified explanation: Layer 1 is the upper layer in the blockchain which contains all information in transactions. Layer 2 solutions are further down and don't include as much information and thus it's cheaper to send transactions because you don't include as much info on the blockchain compared to Layer 1.
As a requestor, we recommend you use a layer 2 solution like Polygon to pay for your tasks. Polygon is around 50-100x cheaper than other solutions on the network in terms of gas fees.

**What is tGLM and GLM :**

tGLM – test currency that you can obtain for free to test your requestor node. These tokens have no real value.
GLM – real currency that can be exchanged for cash

**Where can I find Yagna logs :**


=== "Linux / MacOS"
    `$HOME/.local/share/yagna/yagna_rCURRENT.log`

=== "Windows"
    ` %USERPROFILE%\AppData\Roaming\GolemFactory\yagna\data\yagna_rCURRENT.log`
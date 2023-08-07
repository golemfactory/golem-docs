# Provider FAQ

**When do I start receiving tasks?**

It’s hard to say as it depends on a lot of factors, since Golem is a marketplace. The hardware you’re offering needs to align with a requestor's demand, and secondly, pricing is also an important factor. If you don’t receive any tasks, try reducing your price. To get a feeling of other peoples' pricing with similar specs, you can use the stats page at [https://stats.golem.network](https://stats.golem.network)

A great start is to follow or undercut the median pricing of the network, which you can find under the **Provider > Pricing Analytics** tab

**Do I need to portforward to run golem?**

No, it’s not required.

**Can I run multiple providers on the same IP?**

Yes, that works perfectly fine.

**Can I change price while executing tasks ?**

You can always change the pricing of your node, but it won't affect the current agreements that you've settled with a requestor. It only affects future ones.

**Are there any stats for the network?**

Yes, you can check out : [https://stats.golem.network/](https://stats.golem.network/)

**Can I combine multiple machines into one provider?**

No, you can not do that. You can set up multiple providers though.

**How does CPU/h pricing work?**

CPU/h is pricing per utilization of a core. So if a requestor is using 4 cores, and you have a CPU/h pricing of 0.1 GLM, then it would cost the requestor 0.4 GLM to use those 4 cores for an hour.

**How are providers selected to compute a task?**
If your node meets the requirements specified in the requestor's demand, then it’s randomly selected along with other nodes on the network.

**What hardware requirements are there to run a provider?**
None defined currently. Golem accepts everything as long as it’s a 64bit x86-64 CPU.
The requestors can specify additional requirements, depending on their individual needs.

**What is Layer 1 and Layer 2 ?**

Here's an extremely simplified explanation: Layer 1 is the uppermost layer in the blockchain which contains all information in transactions. Layer 2 solutions are further down and doesn't include as much information and thus its cheaper to send transactions because you don't include as much info on the blockchain compared to Layer 1.

**What is tGLM and GLM :**

tGLM – test currency that you can obtain for free to test your requestor node. These tokens have no real value.

GLM – real currency that can be exchanged for cash

**Does Golem automatically clean task data?**

Yes, Golem cleans the task data directories via a default schedule of 30 days. However, you can configure this schedule yourself via `ya-provider clean –help`

**Can I run golem on popular hosting platforms like OVH/AWS ?**

It all comes down to if KVM access is available on the hosting platform (e.g. AWS doesn’t support KVM, while OVH cloud does)

**Where do I find Yagna logs :**

`$HOME/.local/share/yagna/yagna_rCURRENT.log`
`$HOME/.local/share/ya-provider/ya-provider_rCURRENT.log`

**Is golem an ERC-20 token?**

Yes, golem is an ERC-20 token.

**Why do people run nodes on the testnet ?**

Most common reason is to support requestors in testing their applications for free, so they can progress with migrating their application to the mainnet quicker.

**What’s KVM ?**

KVM (Kernel-based Virtual Machine) is a full virtualization solution for Linux on x86/x64 hardware containing virtualization extensions (Intel VT or AMD-V).

Golem uses this module to create a VM that tasks on the provider are computed inside.

**How do I update golem to the latest version ?**

Shut the provider down and run the installer again : `curl -sSf https://join.golem.network/as-provider | bash -`

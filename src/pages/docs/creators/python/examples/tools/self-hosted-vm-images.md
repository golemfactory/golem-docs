---
description: Publishing VM images outside Golem's repository
title: Publishing VM images outside Golem's repository
type: Instructions
---

# Self-hosted VM images

To streamline the experience for Golem developers, we provide a central repository for the VM images (.gvmi files) which has been [described in the this article](/docs/creators/python/examples/tools/publishing-custom-images).

At the same time, we realize that application developers may choose to publish said images in other, publicly-accessible locations at their discretion.

The process of [preparation and conversion](/docs/creators/python/examples/tools/converting-docker-image-to-golem-format) of a self-published GVMI image is mostly the same as for the images uploaded into Golem's central repo. However, once you have the `.gvmi` file ready, there are two additional steps that need to be performed.

## Obtaining the VM image hash

When you upload an image to Golem's repo, the image hash is calculated and conveniently provided to you after a successful upload.

When you decide not to push the image that way, you need to calculate the SHA3 hash on your own. Golem's VM images use 224-bit SHA3 hashes and the easiest way to obtain such a hash is to run the `sha3sum` tool on the `.gvmi` file.

### Install sha3sum

{% tabs %}
{% tab label="Ubuntu" %}

```bash
apt install sha3sum
```

{% /tab %}
{% tab label="Mac" %}

```bash
brew install sha3sum
```

{% /tab %}
{% /tabs %}

### Calculate the image hash

```bash
sha3sum -a 224 <image_filename.gvmi>
```

The calculated hash is then printed alongside the filename and you need to note down this hash since it needs to be provided to the API so that later, the providers can verify the integrity of the VM images they download before they're able to deploy them.

## Using the URL and the hash

Once the VM image file is uploaded to a location of your choosing and you have the file's hash, you only need to provide this data to the API when the `Package` for your app is constructed.

In order to do that, use the following `vm.repo()` call:

```python
package = await vm.repo(
    # we still need to provide the image's hash because
    # the image's integrity is validated by the runtime on the provider node
    #
    # the hash can be calculated by running `sha3sum -a 224 <image_filename.gvmi>`
    #
    image_hash="d646d7b93083d817846c2ae5c62c72ca0507782385a2e29291a3d376",

    # the URL can point to any publicly-available location on the web
    image_url="http://girepo.dev.golem.network:8000/docker-golem-hello-world-latest-779758b432.gvmi",
)
```

For full usage, please refer to the relevant part of the [API reference](https://yapapi.readthedocs.io/en/latest/api.html#module-yapapi.payload.vm) for `vm.repo()` usage.

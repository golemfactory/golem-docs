---
title: Golem JavaScript SDK Troubleshooting Guide 
description: A guide to resolve common JavaScript errors encountered with the Golem SDK, including connection issues and image upload solutions. 
type: troubleshooting
---

# Troubleshooting Golem JS SDK

{% troubleshooting %}

## [Errno 104] Connection reset by peer

{% problem /%}
Receiving this error after the `gvmkit-build <image> --push` command, means the image had already been uploaded (no changes detected). Please use the previously-obtained hash instead.

{% solution %}
Receiving this error after the `gvmkit-build <image> --push` command, means the image had already been uploaded (no changes detected). Please use the previously-obtained hash instead.
{% /solution %}
{% feedback identifier="js-sdk-connection-reset-by-peer" /%}
{% /troubleshooting %}

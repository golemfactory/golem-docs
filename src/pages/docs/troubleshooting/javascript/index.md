---
title: Javascript troubleshooting
description: This is the troubleshooting section for all javascript related errors on Golem.
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

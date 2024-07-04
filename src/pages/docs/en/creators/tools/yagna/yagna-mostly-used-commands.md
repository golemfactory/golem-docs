---
description: Yagna mostly used commands
title: Yagna mostly used commands
type: Tutorial
---

# Creating unique app-keys

You can generate a unique api-key with the `yagna` command:

```bash
yagna app-key create requestor
```

In the command above `requestor` is the name of the key. The output is the 32-char app-key.

# Listing available app-keys

You can list available app-keys in your `yagna` instance with:

```bash
yagna app-key list
```

You can identify your key by `name` and copy the value from the `key` column.

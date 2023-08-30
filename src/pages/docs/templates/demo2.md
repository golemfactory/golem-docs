---
title: 'Learn dApps: overview'
description: Create your own JavaScript application on Golem
type: guide
tags: tag 1, tag 2
---

# Heading 1

qwe

## Heading 2

123

## Heading 2

1234

## Heading 2

12345

### Heading 3

# Heading 1 reset

## Heading 2 nested

### Heading 3 nested

# h1 reset


Let's now go through what happens there.

1. Take a stock Python Docker image (the slim version, we won't need anything more here):

```dockerfile
FROM python:3.9-slim
```

2. Install the needed tools:

```dockerfile
RUN pip install -U pip poetry
```

3. Copy the app contents to the image:

```dockerfile
RUN mkdir /app
COPY server_app/* /app/
```

4. Install the app's requirements:

```dockerfile
WORKDIR /app
RUN poetry install --no-root
---
title: 'Learn dApps: overview'
description: Create your own JavaScript application on Golem
type: demo
tags: tag 1, tag 2
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

Lorem ipsum dolor sit amet [Link inside text](https://github.com) Lorem ipsum dolor sit amet

{% highlight text="Example of text highlight" %} {% /highlight %}

## Heading 2

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. **Pellentesque odio nisi,** euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

### Example of a process

- Golem, a global, open-source, decentralized supercomputer that anyone can access.
- Learn what you need to know to set-up your Golem requestor node:
- Requestor development: a quick primer
- Quick start
- Have a look at the most important concepts behind any Golem application: Golem application fundamentals

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

### Example standard bullets

- Golem, a global, open-source, decentralized supercomputer that anyone can access.
- Learn what you need to know to set-up your Golem requestor node:
- Requestor development: a quick primer
- Quick start
- Have a look at the most important concepts behind any Golem application: Golem application fundamentals

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

### Example standard bullets

1. Golem, a global, open-source, decentralized supercomputer that anyone can access.
2. Learn what you need to know to set-up your Golem requestor node:
3. Requestor development: a quick primer
4. Quick start
5. Have a look at the most important concepts behind any Golem application: Golem application fundamentals

{% tabs %}

{% tab label="Tab 1" %}
Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
{% /tab %}
{% tab label="Tab 2" %}
nothing here
{% /tab %}
{% tab label="Tab 3" %}
nothing here 2
{% /tab %}
{% /tabs %}

{% link title="Open localhost" href="http://localhost" %} {% /link %}

{% link title="See Gap-16 on Github" href="http://localhost" icon="github" %}

{% /link %}

{% alert level="info" %}
Now you know what a Golem VM application is and how it works.
{% /alert %}

{% alert level="success" %}
Now you know what a Golem VM application is and how it works.
{% /alert %}

{% alert level="warning" %}
Now you know what a Golem VM application is and how it works.
{% /alert %}

{% alert level="danger" %}
Now you know what a Golem VM application is and how it works.
{% /alert %}

```bash
#!/bin/bash
echidna "Hello, Mars!" # gibberish: 'echidna' is not a valid bash command
tumbleweed | unicorns --glittery # again, 'tumbleweed' and 'unicorns' are not recognized commands
armadillo=$(cats playing_piano) # 'cats' not a recognized command, misuse of command substitution syntax
echo $rainbowFrogs # 'rainbowFrogs' not defined or given any value

```

{% docnavigation title="Next steps" %}

- [Golem, a global, open-source, decentralized supercomputer that anyone can access.](https://github.com)
-

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Golem, a global, open-source, decentralized supercomputer that anyone can access.](https://github.com)
- Learn what you need to know to set-up your Golem requestor node:
- Requestor development: a quick primer
- Quick start
- Have a look at the most important concepts behind any Golem application: Golem application fundamentals

{% /docnavigation %}

{% grid %}

{% selectioncard icon="javascript" title="JS Docs" buttonText="Read JS Docs" href="/" %}

{% selectioncontent %}

Have a problem that can be split into multiple computational tasks that will run in parallel on Golem

{% /selectioncontent %}

{% selectioncontent %}

Want to use either Node.js or web browser to schedule the tasks

{% /selectioncontent %}

{% selectioncontent %}

Need more control over the deployment process on Golem Network (like adjust market strategy)

{% /selectioncontent %}

{% /selectioncard %}

{% selectioncard icon="python" title="Python Docs" buttonText="Read Python Docs" href="/" %}

{% selectioncontent %}

Want to deploy an application on Golem that consists of service(s) that run constantly

{% /selectioncontent %}

{% selectioncontent %}

Already use Docker or Docker Compose to deploy your application
{% /selectioncontent %}

{% selectioncontent %}

Want to use a YAML-based approach to configure the deployment

{% /selectioncontent %}

{% /selectioncard %}

{% /grid %}

# Example of an image being used

![Hacker image](/hacker.png)

# working comments (see source)

(below this line there is comment: see source)

[//]: <> ( comment is here )

<!-- comment
is 
also 
here
-->

(above this line there is a comment: see source)

# Example of code from Github

{% codefromgithub url="https://raw.githubusercontent.com/golemfactory/golem-js/master/examples/blender/blender.ts" language="typescript" %}

{% /codefromgithub %}

# How to import from other files

If you wish to import content from another file, these files has to go
into the `src/markdoc/partials` directory. You can then import the content using the following
syntax.

```markdown {% process=false %}
{% partial file="demo.md" /%}
```

Keep in mind that this partial syntax root is in the directory specified above.

{% partial file="demo.md" /%}

# How to use the default values component

We came across the need to create a page with all the default values in the SDK, so it was easy for the users
to find them. The page looked blank, so what we came up with was a custom component to make it easier on the eyes.

The component accepts a title and a default value, and everything inside will be rendered as the description, and in here its possible to markdown syntax to for example highlight code.

```markdown {% process=false %}
{% defaultvalue title="allocationExpires" defaultValue="60000 * 60" %} 
Specifies the duration after which an allocation expires, in milliseconds. A valid allocation is essential for accepting invoices.
{% /defaultvalue %}
```

{% defaultvalue title="allocationExpires" defaultValue="60000 * 60" %} 
Specifies the duration after which an allocation expires, in milliseconds. A valid allocation is essential for accepting invoices.
{% /defaultvalue %}
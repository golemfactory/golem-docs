---
description: Golem Tutorial template tutorial
title: This is the page title displayed in a browser tab.
---

{% alert level="info" %}

## Prerequisites 

List prerequisites here, with links to instructions: 
- Yagna service installed and running with `try_golem` app-key configured ([instructions](/docs/templates/example-template)).
- Docker installed and Docker service available.

## Setting up project

Create a project folder, initialize a Node.js project, and install the `@golem-sdk/golem-js` library.

```bash
mkdir golem-example
npm init
npm i @golem-sdk/golem-js
```
{% /alert %}


## Introduction

This tutorial will lead you through the steps required to create a tutorial on the Golem Network. 

We will go through the following steps:

- Explain the aim of the tutorial
- Tell a little about the structure
- Add some other points

As the "good pattern" aspect is important, tutorials should illustrate also the practical aspect - how to organize things, and how to overcome common challenges.
 
In this section we should also explain to the user how can he benefit from doing this tutorial, and if we know how much time it should take to complete.

Lastly, what the reader should when when he encounters a problem.

### What is it for me/What I will gain? 
  
  You can such a subsection. 

## Explain the aim of the tutorial

A tutorial should lead the readers to step by step to achieve some defined output. The steps should be designed to show a complete happy path. The output should have a meaning - it should have some practical value.

Tutorial users should be able to repeat the step for any other challenges to resolve their problem.
So the process should show the desired sequence and practices.
The user should be able to do sth independently by modifying the steps or output files.

There is no defined border on how much we should explain the non-Golem aspects. You need to decide yourself how much external knowledge you will include in the tutorial, and what you will assume is known or can be acquired by readers themselves. In case of doubts, you can add an entry in the prerequisites section or you can add a link to 3rd party pages.

{% alert level="info" %}

For more information on this topic arguments, see the complete [reference](https://github.com)
{% /alert %}

## Tell about the tutorial structure.


{% alert level="info" %}

You can skip this section if you know the structure of the [next topic](#add-some-other-points)
{% /alert %}

A tutorial should have visible steps, each step should be explained, why it is needed, and what will be achieved in that step.

### Steps can have smaller little milestones.

  You should gradually add new content and make sure that the reader will know how to add it to the content created in previous steps.

### You can provide a reference to the final output

If you get lost you can copy the final solution from here:

```js
console.log('solution')
```

of from our [github pages](https://github.com) 

## Add some other points

Tutorials should not focus on showing the alternatives but rather focus on the right sequence and good practice on a happy path. 
You can use it to explain the reasons for decisions taken and the consequences.

{% alert level="info" %}
  Note that we will improve the content of this tutorial based on the authors' input.
{% /alert %}

{% alert level="warning" %}

If a user can make an error or a command creates a risk you can use warning or danger alerts!
{% /alert %}

## Run the code and show the output

Note that this point is not on the agenda, and this is __not__ a good practice.

Before running make sure:
 remember the readers about the prerequisites:
  What services should be running
  What what created so far


## Summary

In this tutorial, the reader wha he has done and what he achieved:

- Explain the aim of the tutorial
- Tell a little about the structure
- Add some other points


{% docnavigation title="Next steps" %}

- [Title of the article you believe the reader should read](#another-example) next.

{% /docnavigation %}

{% docnavigation title="See also" %}

- [Title](https://github.com) of other related sections: i.e. Tutorials, Guides.

{% /docnavigation %}

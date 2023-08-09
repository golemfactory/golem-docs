---
description: Overview of a typical Golem task application
---

# Introduction to the task model

Creating a task application for Golem requires a bit of planning and understanding of how the system works. In this guide, we'll go over the basics of designing and implementing a task application for Golem.

## Understanding the Problem Space

First, you'll need to think about your computational problem in terms of parallel execution. It's important to visualize your problem and determine how it can be divided into smaller, independent fragments that can be processed by multiple providers.

For example, let's say you have a large dataset that needs to be processed. Instead of having a single machine process the entire dataset, you can break it up into smaller chunks and have multiple providers work on each chunk simultaneously.

![problem space](/assets/js-tutorial-01.jpeg)

## Dividing the Problem into Fragments

Once you have a clear understanding of how your problem can be divided, you'll need to find a way to divide the whole problem into fragments. Each fragment should be a distinct part of the whole and may be processed by a different provider, independently from other fragments.

![problem division](/assets/js-tutorial-02.jpeg)

It's worth noting that the number of fragments doesn't need to match the number of provider nodes commissioned to perform the tasks. The Task API will spawn activities on multiple providers as long as there are providers available and up to the number of fragments or the limit specified by the `maxParallelTasks` parameter.

## Designing the Application

In order to proceed further, you'll need to design your application in such a way that it can:

1. Translate the problem fragments into input and output files that can be processed independently on each of the provider nodes.
2. Combine the individual outputs into the final solution of the problem at hand.

## Creating a VM Application for Golem

When it comes to the implementation itself, any VM-based application for Golem is made up of two components:

1. A Docker image that will run as a container on providers.
2. A requestor agent - a piece of JavaScript / TypeScript code that will execute the problem-dividing logic, orchestrate the execution on providers, and finally combine the output files to get the result for the whole problem.

With these pieces in place, you should be able to create a functional task application for Golem.

!!! success

    Now you know what a Golem VM application is and how it works.

!!! golem-icon "Next steps:"

    ??? quote "Return"

        [Introduction to Task API](index.md){ .md-button .md-button--primary }
    
    ??? abstract "Examples"
        
        [Task Example 0: Hello World!](../examples/hello.md){ .md-button .md-button--primary }

        [Task Example 1: Simple Usage of Task API](../examples/simple.md){ .md-button .md-button--primary }

        [Task Example 2: Hashcat on Golem](../examples/hashcat.md){ .md-button .md-button--primary }

        [Task Example 3: Requestor in browser](../examples/web.md){ .md-button .md-button--primary }
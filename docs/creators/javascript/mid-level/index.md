---
description: Create your own task application on Golem using JS Core API
---

# Create your own task application using JS Core API

## Introduction

JS Core API allows for the development of intricate applications which satisfy the needs of each user and developer. 
Compared to the basic Task API, it provides a greater range of options but users are expected to have an understanding of the fundamental principles and structure behind the Golem ecosystem.

## Building blocks

The basic components included in the JS Core API are:

 - Package - [package/package](../docs/modules/package_package.md)
 - Allocation - [payment/allocation](../docs/modules/payment_allocation.md)
 - Accounts - [payment/accounts](../docs/modules/payment_accounts.md)
 - Demand - [market/demand](../docs/modules/market_demand.md)
 - Offer / Proposal - [market/proposal](../docs/modules/market_proposal.md)
 - Agreement - [agreement/agreement](../docs/modules/agreement_agreement.md)
 - Activity - [activity/activity](../docs/modules/activity_activity.md)
 - Script - [script/script](../docs/modules/script_script.md)
 - Command - [script/command](../docs/modules/script_command.md)
 - Invoice - [payment/invoice](../docs/modules/payment_invoice.md)
 - DebitNote - [payment/debit\_note](../docs/modules/payment_debit_note.md)

In order for us better understand the functions of these various modules and how they connect with each other, let's look at two examples that demonstrate their practical application. This will help us comprehend the mechanics of operation and dependencies between individual parts.

[Task Example 0: Hello World!](examples/hello.md){ .md-button .md-button--primary }

[Task Example 1: Core API in browser](examples/web.md){ .md-button .md-button--primary }
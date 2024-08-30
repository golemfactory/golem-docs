---
title: Golem Provider Log Messages Explained
description: Learn to interpret your Golem Provider's log entries, understand their meaning, and troubleshoot potential issues.
pageTitle: Golem Provider Logs - Understanding Common Messages and Troubleshooting
type: Guide
---

# Understanding Your Golem Provider Logs

As a Golem provider, you'll see various messages logged to your terminal. These logs give you valuable insights into your node's activities, how it's performing, and any potential issues. Understanding these logs is key to ensuring your provider runs smoothly and efficiently. This guide will help you decipher these messages, enabling you to troubleshoot problems and optimize your provider's performance.

## Log Structure

Provider logs consistently present information in a structured format:

```
[timestamp] [log-level] [module] [message]
```

Let's break down each component:

- **`[timestamp]`**:  This indicates the exact time when the event occurred. The timestamp is always recorded in Coordinated Universal Time (UTC) using a standardized format (e.g., `2024-01-10T10:00:00Z`). This format allows you to easily correlate events across different nodes and systems. 
- **`[log-level]`**: This represents the severity of the message, indicating how important it is:
    - **`[DEBUG]`**:  Detailed diagnostic information. These messages are mainly for developers.
    - **`[INFO]`**:  General operational messages about your provider's activity.
    - **`[WARN]`**:  Warnings about potential issues. While they might not interrupt your provider, it's a good idea to understand what caused the warning. 
    - **`[ERROR]`**:  Errors that caused an operation to fail. These messages require your attention to fix the underlying problem. 
- **`[module]`**:  This specifies the section of the Golem Provider code that generated the message, helping you pinpoint the message's origin.
- **`[message]`**: A human-readable description of the event.

**Example:**

```
[2024-01-10T10:00:00Z INFO  ya-provider::market::negotiator] Received Proposal for demand [demand-id] from Requestor [requestor-id].
```

**Explanation:**  This log entry shows that your provider node received a request from a potential client (Requestor) wanting to use your computing power. Here's what each part means:

-  **`[2024-01-10T10:00:00Z]`**:  The time the request was received, recorded in UTC.
-  **`[INFO]`**:  A normal operational message.
-  **`[ya-provider::market::negotiator]`**: The message comes from the negotiator module, which handles requests from clients on the Golem marketplace. 
-  **`[Received Proposal for demand [demand-id] from Requestor [requestor-id]]`**: A client (requestor) wants to use your provider's resources for their task (`demand-id`). The message includes the requestor's unique identifier (`requestor-id`). 

## Common Log Messages Explained

### Starting Up Your Golem Provider

When you start your Golem Provider with the `golemsp run` command, you'll see messages as it prepares to accept tasks. Let's explore some of these:

- **`[INFO ya_provider::provider_agent] Starting ya-provider...`**: This indicates the Golem Provider service is starting.
- **`[INFO ya_provider::provider_agent] Data directory: /path/to/your/data/directory`**: This shows the folder where your provider's configuration files and essential data are stored.
- **`[INFO ya_provider::provider_agent] Log directory: /path/to/your/log/directory`:** This indicates where your provider logs are saved.
- **`[INFO ya_provider::execution::registry] Added [runtime_name] ExeUnit to registry.`**:  Golem offers different ways (runtimes) to execute tasks. This message tells you that a specific runtime, such as `vm` for virtual machines or `wasmtime` for WebAssembly, is loaded and ready.
- **`[INFO ya_provider::provider_agent] Using payment network: mainnet`**:  Golem operates on two primary networks: a `testnet` for testing and a `mainnet` for real transactions involving actual GLM tokens. This message confirms that you're connected to the mainnet and can earn GLM. 
- **`[INFO ya_provider::hardware] Activating hardware profile 'default'`:** Your provider can share different portions of its resources. This log confirms that the `default` resource profile is being used.
- **`[INFO ya_provider::hardware] Hardware resources cap: ...`**:  This shows you the amount of CPU, memory, and storage your provider is sharing.
- **`[INFO ya_provider::provider_agent] Using subnet: public`**:  Providers can be part of different subnets within the Golem Network. This message indicates your provider is part of the public subnet, where anyone can connect.

### Provider and Requestor Negotiations

These log messages give you details about how your provider is interacting with clients who want to use its resources:

- **`[INFO ya_provider::market::negotiator] Got proposal [proposal-id] from Requestor [requestor-id] for demand [demand-id]`**: This log means a requestor has sent a proposal to use your provider for their task (`demand-id`). 

- **`[DEBUG ya_provider::market::negotiator] Proposal [proposal-id] content: ...`**:  This debug message provides a detailed breakdown of what the requestor is asking for, including how much they are willing to pay (`pricing`), what resources their task needs, and how long they want to use your provider. 

- **`[DEBUG ya_provider::market::negotiator::[NegotiatorComponentName]] Negotiator component '[NegotiatorComponentName]' is still negotiating Proposal [proposal-id]...`**:  Your provider doesn't just accept every request right away. It automatically negotiates various terms with the requestor before an agreement is made. This log entry means those negotiations are ongoing for a specific aspect of the request (e.g., how often to send bills, when those bills should be paid).

- **`[DEBUG ya_provider::market::negotiator] Decided to CounterProposal [proposal-id] for demand [demand-id]...`**:  Your provider has automatically sent a counter-proposal back to the requestor. It's suggesting different terms for the agreement. 

- **`[INFO ya_provider::market::negotiator] Demand [demand-id] accepted.`**:  Your provider and the requestor have agreed on the terms, and your provider has accepted the demand to run the task.

### Task Execution (Activities)

Once an agreement is in place, your provider starts working on the task, represented by an activity:

- **`[INFO ya_provider::tasks::task_manager] Starting activity [activity-id] for agreement [agreement-id]`**: Your provider is creating a dedicated environment ("activity") to run the task.
- **`[WARN ya_provider::tasks::task_manager] Activity [activity_id] terminated prematurely.`**:  This warning means the activity, representing the task running on your provider, unexpectedly stopped. Possible reasons include errors in the requestor's code or insufficient resources to handle the task. 

### Billing and Payments

These logs track how your provider bills requestors and receives payments:

- **`[INFO ya_provider::payments] Debit note [debit-note-id] issued for activity [activity-id]`**: Your provider generated a bill (debit note) for the ongoing task, outlining the resources used and the associated costs.
- **`[INFO ya_provider::payments] Sending DebitNote [debit-note-id] to [requestor-id]`**:  The bill (debit note) has been sent to the requestor. 
- **`[INFO ya_provider::payments] Invoice [invoice-id] issued for agreement [agreement-id]`**:  When an agreement ends, either successfully or because it was terminated, your provider issues a final invoice with the total cost. 
- **`[INFO ya_provider::payments] Sending invoice [invoice-id] to requestor [requestor-id]`**:  The final bill (invoice) has been sent to the requestor. 

### Ending Agreements

- **`[INFO ya_provider::market::negotiator] Agreement [agreement-id] terminated.`**: The agreement has finished. This happens either because the task was completed successfully, or the agreement's pre-defined time limit (its duration) has been reached.

## Errors and Warnings You Might Encounter

As a Golem Provider, you may occasionally see error messages or warnings in your logs. While many of these are harmless and can be safely ignored, it's important to understand what they mean and when they might require your attention. Here's an overview of some common issues you might encounter:

### Failed to Unsubscribe Offer

- **`[WARN ya_provider::market::provider_market] Failed to unsubscribe offers from the market: HTTP error requesting DELETE http://...`**:  This warning indicates a problem communicating with the marketplace while trying to remove one of your provider's offers. It's often caused by temporary network glitches or brief interruptions in the Golem marketplace's service.
  - **Solution:** Typically, you can ignore this warning as long as it doesn't occur frequently. Your provider will automatically re-publish its offer, ensuring that your resources remain available to potential requestors. 

### Can't Query Market Events

- **`[WARN ya_provider::market::provider_market] Can't query market events. Error: HTTP error requesting GET http://...`**:  This warning means your provider encountered an issue while checking for updates or new requests on the marketplace. This can also be caused by temporary network problems or glitches in the Golem marketplace's service. 
  - **Solution:**  You can usually ignore this warning unless it occurs repeatedly. 

### Error Sending Invoice

- **`[ERROR ya_provider::payments] Error sending invoice: HTTP error requesting POST http://...`**: Your provider couldn't deliver the final bill to the requestor. 
  - **Possible cause**:  The requestor's Golem node might be offline or experiencing connectivity problems. Since your provider has already completed the task, there's no immediate action needed on your end. 
  - **Solution**: Golem has mechanisms to re-attempt sending invoices and to handle potential payment disputes. However, if you notice this error repeatedly for the same requestor, it might be a sign of a persistent issue with their node. 



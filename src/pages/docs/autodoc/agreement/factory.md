---
title: AgreementFactory
description: A factory class to create and manage Agreements
---

The `AgreementFactory` class is an internal tool to create and manage `Agreement` instances. It should not be used directly, but only through the `Agreement.create` method.

## Constructor

```javascript
constructor(agreementOptions?: AgreementOptions)
```

The `AgreementFactory` constructor accepts an optional `AgreementOptions` object for configuration. The object may include a `Logger` instance.

## Methods

### create(proposalId: string): Promise<Agreement>

The `create` method is an asynchronous method that returns a new `Agreement` instance for the given proposal ID.

```javascript
async create(proposalId: string): Promise<Agreement>
```

#### Parameters

- `proposalId: string` - The proposal ID for which the agreement should be created.

#### Returns

- `Promise<Agreement>` - A promise that resolves to a new Agreement instance.

## Example

```javascript
// Note: Do not use the AgreementFactory class directly
// Use the Agreement.create method instead
```

## Mini-FAQ

**Q: Can I use the AgreementFactory directly?**

A: No, the `AgreementFactory` class is intended for internal use only. You should always use the `Agreement.create` method to create new `Agreement` instances.

**Q: How do I pass a custom logger?**

A: You can pass a custom logger instance to the `AgreementFactory` constructor through the `AgreementOptions` object:

```javascript
const myLogger = new Logger()
const factory = new AgreementFactory({ logger: myLogger })
```

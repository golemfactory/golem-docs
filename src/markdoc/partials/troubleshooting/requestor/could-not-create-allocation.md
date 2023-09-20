{% troubleshooting %}

## Error: Could not create new allocation. Insufficient funds to make allocation. Top up your account or release all existing allocations to unlock the funds via yagna payment release-allocations

{% problem /%}

When trying to execute a requestor script, you may encounter the following error message:

```
Error: Could not create new allocation. Insufficient funds to make allocation. Top up your account or release all existing allocations to unlock the funds via `yagna payment release-allocations`
```

{% solution %}

This error suggests that the user doesn't have sufficient funds in their account to create the allocation specified in their requestor script.

To resolve the issue:

1. **For testnet users**: If you are working on the testnet, simply run the command `yagna payment fund` to refill your wallet with test tokens.

2. **Release Stuck Allocations**: In certain situations, funds may already exist in the wallet, but they are locked due to previous allocations. In such cases, use the command `yagna payment release-allocations` to free up these locked funds, allowing them to be utilized for new tasks.

{% /solution %}
{% feedback identifier="js-sdk-unable-to-create-allocation" /%}
{% /troubleshooting %}

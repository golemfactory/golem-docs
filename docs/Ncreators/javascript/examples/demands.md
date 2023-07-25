---
description: Selecting providers
---


You can select providers that suit your needs:

- select provider based on minimal requirements for remote computer
  cpu, storage, ram

- select provider based on the proposed costs
- select provider based on the whitelist/black list
- select provider based on the scoring
- produce scoring


### Select provider based on minimal requirements:

Test last week showed this can be executed:

```js
import { TaskExecutor } from "yajsapi";

/**

Example demonstrating how to write a custom proposal filter.

In this case the proposal must include VPN access and must not be from "bad-provider"
*/

(async function main() {
  const executor = await TaskExecutor.create({
    package: "9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae",
    minCpuCores : 1000,
    yagnaOptions: { apiKey: 'try_golem' },
  });

  await executor.run(async (ctx) => console.log((await ctx.run("echo 'Hello World'")).stdout));
  await executor.end();
})();

 ```

!!! error missing output png

### Selecting providers based on the whitelist/black list


Need example based on the examples in repo + text.
Note: whitelist can be used during tests to ensure the tasks will be run on a provider that has specific features.
Black list can be used to deny services to providers who often failed.

+ outptu png.

### Selecting providers based on the proposed costs

Need examples using custom filter, where we take proposal and costs and decide.
We can explain meaning of 3 values of the costs (per CPU sec?/ per environemnt / for start) and how the costs are calcualted. Ideally it would be to run a tasks and compare the costs in offer with the details (time of execution, etc - but this would be probably not possible at this stage)

+ code
+ comment
+ output png


### Select providers based on the scoring

1 issue: the example in the repo shows the function that is more complex: it select agreeement: when a new tasks should be executed, the filter can denay exesting activity a new tasks and instead activate a new agreement if the provider has better score.
We need simpler behaviour: need to filter proposals based on the scoring of the providers.
Probably we need to use custom filter here and use the scoring.
by duing it we can show:
Exemple should:

  we have many offers that we reject
  we accept only the offers from top 5 or not listed.

+ code
+ comment
+ output png


### produce the scoring

To produce scoring table you can evaluate results the tasks

Note: we are missing event to collect info when the task was finished succesfully and when failed.
Better we would like to have total tasks costs and duration.
Ideally total costs and duration of each command in tasks + deployment.

  Example should show:
    execute 25 tasks on 20 providers
    evaluate the results (succeded / failed)
    update the scoring updateScore(providerID) // should have some limits upper and bottom
    print scoring table in a format accespted by filter
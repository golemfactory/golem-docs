Verify if getting the funds was successful with:
```
docker compose exec golem-node yagna payment status
```

The output should show a non-zero amount of tGLM and tETH in the `total amount` and `gas` columns.
Rerun the `fund` command if it doesn't.

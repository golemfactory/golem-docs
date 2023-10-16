{% troubleshooting %}

## No file descriptors available

{% problem /%}

The `golemsp run` command exits shortly after running it and you might see a log like

```
thread 'actix-rt|system:0|arbiter:231' panicked at 'called Result::unwrap() on an Err value: Os { code: 24, kind: Uncategorized, message: "No file descriptors available" }', /home/runner/.cargo/registry/src/github.com-1ecc6299db9ec823/actix-server-2.2.0/src/worker.rs:425:30
note: run with RUST_BACKTRACE=1 environment variable to display a backtrace
thread 'main' panicked at 'called Result::unwrap() on an Err value: RecvError', /home/runner/.cargo/registry/src/github.com-1ecc6299db9ec823/actix-rt-2.8.0/src/arbiter.rs:156:25
```

{% solution %}

When running Golem on systems with a large number of cores and threads, you may encounter an issue where the available file descriptors on your system get exhausted. This can lead to unexpected errors or interruptions in Golem's operation.

To solve this issue, increase the file descriptors' limit before launching Golem.

1. Open a terminal window.
2. Increase the file descriptors limit by running the following command: `ulimit -n 65535`
3. In the same terminal window, launch the provider again using `golemsp run`

{% /solution %}
{% feedback identifier="provider-no-file-descriptors" /%}
{% /troubleshooting %}

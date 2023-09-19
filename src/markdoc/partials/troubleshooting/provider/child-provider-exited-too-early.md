{% troubleshooting %}

## child provider exited too early: Ok(ExitStatus(unix_wait_status(256)))

{% problem /%}

When executing the golemsp run command, it terminates shortly after and displays the following error messages:

```
[2023-03-14T16:17:24Z ERROR golemsp::service] child provider exited too early: Ok(ExitStatus(unix_wait_status(256)))
[2023-03-14T16:17:24Z WARN  golemsp::service] provider exited with: Custom { kind: Other, error: "process exited too early" }
```

{% solution %}

The underlying issue is that Golem's provider needs the Linux KVM module to instantiate VMs for task computation.

**If you're using docker**

Mount the KVM module within your container with the following configuration:

```
volumes:
     - /dev/kvm:/dev/kvm
```

**If you're using a VM**

Ensure that the nested virtualization flag for the VM is toggled on. For platforms like Proxmox, you may need to enable additional CPU flags to make it work.

**If you're using Virtualbox**

Virtualbox is not compatible with Golem. Consider switching to Vmware Workstation Player or another supported platform.

{% /solution %}
{% feedback identifier="js-sdk-connection-reset-by-peer" /%}
{% /troubleshooting %}

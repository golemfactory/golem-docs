{% troubleshooting %}

## vmrt: failed to initialize kvm: No such file or directory

{% problem /%}

When executing the golemsp run command, it terminates shortly after and displays the following error messages:

```
Could not access KVM kernel module: No such file or directory
    vmrt: failed to initialize kvm: No such file or directory
    [2023-05-13 18:43:48.469882 +00:00] ERROR [/home/runner/.cargo/git/checkouts/ya-runtime-sdk-9ad26604fa07f4ec/f542b92/ya-runtime-sdk/src/runner.rs:66] Runtime panic: panicked at 'Failed to start runtime: Connection refused (os error 111)', runtime/src/main.rs:362:14
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
{% feedback identifier="provider-failed-to-initialize-kvm" /%}
{% /troubleshooting %}

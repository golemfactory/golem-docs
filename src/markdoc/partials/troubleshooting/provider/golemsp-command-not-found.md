{% troubleshooting %}

## command not found: golemsp run

{% problem /%}

Upon executing the golemsp run command, it is observed that the process terminates immediately, showing the error:

```shell
command not found: golemsp run
```

{% solution %}

The issue generally arises when the golemsp executable is not present in the system's PATH. To rectify this:

1. First, determine which shell you are using:

```bash
echo $SHELL

```

2. Based on the shell you're using, update the corresponding configuration file to add the path where golemsp is located:

   - For Bash:

   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
   ```

   - For Zsh:

   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
   ```

3. After updating the configuration file, you should update the current terminal session:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

4. Try running the `golemsp run` command again.

{% /solution %}
{% feedback identifier="provider-failed-to-initialize-kvm" /%}
{% /troubleshooting %}
